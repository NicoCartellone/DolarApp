import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoadingSpinner from './src/components/LoadingSpinner';
import { usePrices } from './src/hooks/usePrices'
import ListPrices from './src/components/ListPrices';

export default function App() {
  const { prices, loading, getPrices } = usePrices()

  useEffect(() => {
    getPrices()
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Dólar App</Text>
      {loading 
        ?
        <LoadingSpinner/>
        :
        <ListPrices prices={prices}/>
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
});
