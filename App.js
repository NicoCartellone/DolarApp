import { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, SafeAreaView, FlatList, useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [response, setResponse] = useState([])
  const colorScheme = useColorScheme();

  const titleStyle = colorScheme === 'dark' ? styles.titleDark : styles.titleLight;
  const textStyle = colorScheme === 'dark' ? styles.dolarTextDark : styles.dolarTextLight;
  const titleDolarStyle = colorScheme === 'dark' ? styles.dolarTitleDark : styles.dolarTitleLight;
  const dolarBlueContainerStyle = colorScheme === 'dark' ? styles.dolarBlueContainerDark : styles.dolarBlueContainerLight;
  const containerStyle = colorScheme === 'dark' ? styles.containerDark : styles.containerLight;
  const textLoadingStyle = colorScheme === 'dark' ? styles.textLoadingDark : styles.textLoadingLight

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch("https://api-dolar-argentina-nu.vercel.app/dolar");
      const result = await res.json();
      setResponse(result);
    } catch (error) {
      console.log(error)
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <StatusBar style="auto" />
      <Text style={[styles.title, titleStyle]}>Dólar App</Text>
      {response.length === 0
        ?
        <View style={{flex:1, justifyContent: "center", alignContent: "center"}}>
          <ActivityIndicator color="#079A7D" size={30}/>
          <Text style={[styles.textLoading, textLoadingStyle]}>Cargando datos...</Text>
        </View>
        :
        <View style={{width: "80%"}}>
          <FlatList
            data={response}
            renderItem={({item}) => (
              <View style={[styles.dolarBlueContainer, dolarBlueContainerStyle]}>
                <Text style={[styles.dolarTitle, titleDolarStyle]}>{item.tipo}</Text>
                <Text style={[styles.dolarText, textStyle]}>Compra {item.compra}</Text>
                <Text style={[styles.dolarText, textStyle]}>Venta {item.venta}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  containerDark: {
    backgroundColor: '#000000',
  },
  containerLight: {
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 60,
    marginVertical: 20,
    paddingLeft: "5%",
    paddingTop: 20,
  },
  titleLight: {
    color: "black"
  },
  titleDark: {
    color: "white"
  },
  dolarContainer: {
    flex: 1,
    width: "90%",
    justifyContent: "center",
    alignItems: "center"
  },
  dolarTitle: {
    fontSize: 30,
    
    textTransform: "capitalize"
  },
  dolarTitleDark: {
    color:"white",
  },
  dolarTitleLight: {
    color:"black",
  },
  dolarText:{
    fontSize: 20,
  },
  dolarTextDark:{
    color: "white"
  },
  dolarTextLight:{
    color: "black"
  },
  dolarBlueContainer: {
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 20,
    backgroundColor: "#111111",
    padding: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderTopColor: "#079A7D",
    borderColor: "#111111",
    // Shadow for iOS
    shadowOpacity: 0.08,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 10,
    // Shadow for Android
    elevation: 5,
  },
  dolarBlueContainerDark: {
    backgroundColor: "#111111",
    borderColor: "#111111",
  },
  dolarBlueContainerLight:{
    backgroundColor: "white",
    borderColor: "#FAFBFF",
  },
  textLoading:{
    marginTop: 10
  },
  textLoadingDark: {
    color: 'white'
  },
  textLoadingLight: {
    color: 'black'
  }
});