import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function CardBook({ book }) {
  const { title, author, genre, cover } = book;

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.genre}>{genre}</Text>
        {cover && <Image style={styles.image} source={{ uri: cover }} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e2e2ee",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccccde",
  },
  contentContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  author: {
    fontSize: 16,
    marginBottom: 5,
  },
  genre: {
    fontSize: 16,
    marginBottom: 5,
  },
  image: {
    width: 150,
    height: 300,
    resizeMode: "cover",
    marginTop: 5,
  },
});
