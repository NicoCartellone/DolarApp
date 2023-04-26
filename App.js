import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

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

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Dólar App</Text>
      {response === undefined 
        ?
        <View>
          <ActivityIndicator color="blue" size={30}/>
          <Text>Cargando datos...</Text>
        </View>
        :
        <View style={styles.dolarContainer}>
          <View style={styles.dolarBlueContainer}>
            <Text style={styles.dolarTitle}>Dólar Blue</Text>
            <Text style={styles.dolarText}>Compra {response.blue.compra}</Text>
            <Text style={styles.dolarText}>Venta {response.blue.venta}</Text>
          </View>

          <View style={styles.dolarBlueContainer}>
            <Text style={styles.dolarTitle}>Dólar Oficial</Text>
            <Text style={styles.dolarText}>Compra {response.oficial.compra}</Text>
            <Text style={styles.dolarText}>Venta {response.oficial.venta}</Text>
          </View>

          <View style={styles.dolarBlueContainer}>
            <Text style={styles.dolarTitle}>Dólar Bolsa</Text>
            <Text style={styles.dolarText}>Compra {response.bolsa.compra}</Text>
            <Text style={styles.dolarText}>Venta {response.bolsa.venta}</Text>
          </View>

          <View style={styles.dolarBlueContainer}>
            <Text style={styles.dolarTitle}>Dólar Contado con Liqui</Text>
            <Text style={styles.dolarText}>Compra {response.blue.compra}</Text>
            <Text style={styles.dolarText}>Venta {response.blue.venta}</Text>
          </View>

          <View style={styles.dolarBlueContainer}>
            <Text style={styles.dolarTitle}>Dólar Cripto</Text>
            <Text style={styles.dolarText}>Compra {response.blue.compra}</Text>
            <Text style={styles.dolarText}>Venta {response.blue.venta}</Text>
          </View>

          <View style={styles.dolarBlueContainer}>
            <Text style={styles.dolarTitle}>Dólar Solidario</Text>
            <Text style={styles.dolarText}>Compra {response.blue.compra}</Text>
          </View>
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
    backgroundColor: "#FAFBFF"
  },
  title: {
    fontSize: 60,
    marginVertical: 20,
    paddingLeft: "5%",
    paddingTop: 20
  },
  dolarContainer: {
    flex: 1,
    width: "90%",
    justifyContent: "center",
    alignItems: "center"
  },
  dolarTitle: {
    fontSize: 30
  },
  dolarText:{
    fontSize: 20
  },
  dolarBlueContainer: {
    width: "90%",
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 20,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderTopColor: "green",
    borderColor: "#FAFBFF",
    // Shadow for iOS
    shadowOpacity: 0.08,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 10,
    // Shadow for Android
    elevation: 5,
  }
});