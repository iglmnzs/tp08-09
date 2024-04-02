import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Menu() {
  return (
    <View style={styles.menuContainer}>
      <View style={styles.menuItems}>
        <Text>Home</Text>
        <Text>Livros</Text>
        <Text>Galeria</Text>
        <Text>Contatos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    backgroundColor: "#e2e2ee",
    padding: 15,
  },
  menuItems: {
    padding: 2,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
