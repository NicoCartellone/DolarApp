import { StyleSheet, Text, View, FlatList } from "react-native";
import CardDolarPrice from "./CardDolarPrice";

const ListPrices = ({ prices }) => {
  return (
    <View style={styles.dolarContainer}>
      <FlatList
        data={prices}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <CardDolarPrice item={item}/>}
      />
    </View>
  );
};

export default ListPrices;

const styles = StyleSheet.create({
  dolarContainer: {
    flex: 1,
    width: "90%",
  },
});
