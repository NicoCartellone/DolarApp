import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CardDolarPrice = ({ item }) => {
  return (
    <View style={styles.dolarBlueContainer}>
      <Text style={styles.dolarTitle}>{item.tipo}</Text>
      <Text style={styles.dolarText}>
        Compra{" "}
        {Number(item.compra).toLocaleString("es-AR", {
          style: "currency",
          currency: "ARS",
        })}
      </Text>
      {item.venta ? (
        <Text style={styles.dolarText}>
          Venta{" "}
          {Number(item.venta).toLocaleString("es-AR", {
            style: "currency",
            currency: "ARS",
          })}
        </Text>
      ) : null}
    </View>
  );
};

export default CardDolarPrice;

const styles = StyleSheet.create({
    dolarBlueContainer: {
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
      },
      dolarTitle: {
        fontSize: 30,
        textTransform: "capitalize",
      },
      dolarText: {
        fontSize: 20,
      },
});
