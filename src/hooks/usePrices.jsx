import { useCallback, useState } from 'react'
import { searchDolarPrices } from '../services/dolarPrices'

export function usePrices (){
    const [prices, setPrices] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    const getPrices = useCallback(async()=> {
        try {
            setLoading(true)
            setError(null)
            const newPrices = await searchDolarPrices()
            setPrices(newPrices)
        } catch (e) {
            setError(e.message)
        }finally{
            setLoading(false)
        }
    }, [])
    return { prices, loading, error, getPrices }
}