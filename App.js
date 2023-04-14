import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()
  const [response, setResponse] = useState()

  useEffect(() => {
    fetch("https://api-dolar-argentina-nu.vercel.app/dolar")
      .then(res => res.json())
      .then((result) => {
        setIsLoading(false)
        setResponse(result)
      },
        (error) => {
          setIsLoading(false)
          setError(error)
        }
      )
  }, [])

  if(isLoading){
    return (
      <View>
        <ActivityIndicator color="blue" size={30}/>
        <Text>Cargando datos...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Dolar App</Text>
      {response === undefined 
        ?
        <View>
          <ActivityIndicator color="blue" size={30}/>
          <Text>Cargando datos...</Text>
        </View>
        :
        <View>
          <Text>Dolar Blue</Text>
          <Text>{response.blue.compra}</Text>
          <Text>{response.blue.venta}</Text>
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
