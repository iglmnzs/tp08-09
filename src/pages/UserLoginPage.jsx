import { useState } from "react";
import firebase from "../firebase";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
} from "react-native";
import { Platform, Dimensions } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

export default function UserLoginPage() {
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [msg, setMsg] = useState("");

  function verificarUsuario() {
    const auth = getAuth(firebase);
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        // setMsg("Logado com sucesso!");
        navigation.navigate("MainPage");
      })
      .catch((error) => {
        setMsg(error.message);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.loginTitle}>Login</Text>
      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        value={userEmail}
        onChangeText={setUserEmail}
      />
      <Text>Senha:</Text>
      <TextInput
        style={styles.input}
        value={userPassword}
        onChangeText={setUserPassword}
      />
      <Pressable onPress={() => verificarUsuario()} style={styles.btn}>
        <Text style={styles.btnText}>Acessar</Text>
      </Pressable>
      {msg && <Text>{msg}</Text>}
      <Text
        style={styles.link}
        onPress={() => navigation.navigate("UserCreatePage")}
      >
        Não tem uma conta? Crie uma nova!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  loginTitle: {
    fontSize: 25,
    marginVertical: 15,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: "80%",
  },
  btn: {
    backgroundColor: "#841584",
    padding: 10,
    width: "80%",
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
  link: {
    marginVertical: 15,
  },
});
