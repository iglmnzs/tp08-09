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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function UserCreatePage() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState("");

  function verificarUsuario() {
    setIsLoading(true);
    const auth = getAuth(firebase);
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        setMsg("Conta criada com sucesso!");
      })
      .catch((error) => {
        setMsg(error.message);
      })
      .finally(setIsLoading(false));
  }

  return (
    <View style={styles.container}>
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
        <Text style={styles.btnText}>Criar conta</Text>
      </Pressable>
      {msg && <Text>{msg}</Text>}
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
});
