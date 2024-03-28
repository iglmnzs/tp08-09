import React from "react";
import { View, Text, TextInput, StyleSheet, FlatList } from "react-native";
import CardBook from "./CardBook";

export default function BookList({ books, handleFilter, inputValue }) {
  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Buscar livro..."
          onChangeText={handleFilter}
          value={inputValue}
        />
      </View>
      <View>
        {books.length === 0 ? (
          <Text>Nenhum livro encontrado</Text>
        ) : (
          <FlatList
            data={books}
            renderItem={({ item }) => <CardBook book={item} />}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});
