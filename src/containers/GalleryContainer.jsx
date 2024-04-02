import { Image, StyleSheet, Text, View } from "react-native";
import app from "../firebase";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";
import { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

export default function GalleryContainer() {
  const [photos, setPhotos] = useState([]);

  async function getPhotos() {
    try {
      const firebaseStorage = getStorage(app);
      const photosRef = ref(firebaseStorage);
      const list = await listAll(photosRef);
      const urls = [...photos];
      for (let fileRef of list.items) {
        const photoRef = ref(firebaseStorage, fileRef);
        const url = await getDownloadURL(photoRef);
        if (!urls.includes(url)) urls.push(url);
      }
      setPhotos(urls);
    } catch (error) {
      // ...
    }
  }

  useFocusEffect(
    useCallback(() => {
      getPhotos();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Galeria de Fotos</Text>
      <View style={styles.photosContainer}>
        {photos.map((uri, index) => (
          <Image key={index} style={styles.photo} source={{ uri }} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  photosContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  photo: {
    width: 160,
    height: 160,
    margin: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.8,
    elevation: 5,
  },
});
