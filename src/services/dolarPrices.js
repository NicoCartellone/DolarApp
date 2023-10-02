const API_URL = "https://api-dolar-argentina-nu.vercel.app/dolar"

export const searchDolarPrices = async() => {
    try {
        const response = await fetch(API_URL)
        const prices = await response.json()
        return prices?.map(price => ({
            id: price.id,
            tipo: price.tipo,
            compra: price.compra,
            venta: price.venta
        }))
    } catch (e) {
        throw new Error('Error searching prices')
    }
}