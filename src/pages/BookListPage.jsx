import React, { useEffect, useState } from "react";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import CardBook from "../components/CardBook";

export default function BookListPage() {
  const [books, setBooks] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchAuthor, setSearchAuthor] = useState("");
  const [searchGenre, setSearchGenre] = useState("");

  useEffect(() => {
    fetch("https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com/books.json")
      .then((response) => response.json())
      .then((data) => {
        const booksList = Object.values(data);
        setBooks(booksList);
      })
      .catch(() => console.log("ERROR"));
  }, []);

  const filterListBooks = (book) => {
    return (
      book.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      book.author.toLowerCase().includes(searchAuthor.toLowerCase()) &&
      book.genre.toLowerCase().includes(searchGenre.toLowerCase())
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Livros cadastrados</Text>
      <TextInput
        style={styles.input}
        value={searchTitle}
        onChangeText={(text) => setSearchTitle(text)}
        placeholder="Filtrar por título..."
      />
      <TextInput
        style={styles.input}
        value={searchAuthor}
        onChangeText={(text) => setSearchAuthor(text)}
        placeholder="Filtrar por autor..."
      />
      <TextInput
        style={styles.input}
        value={searchGenre}
        onChangeText={(text) => setSearchGenre(text)}
        placeholder="Filtrar por gênero..."
      />
      <FlatList
        data={books.filter(filterListBooks)}
        renderItem={({ item }) => <CardBook book={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
});
