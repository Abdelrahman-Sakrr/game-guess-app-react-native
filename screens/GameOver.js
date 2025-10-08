import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "../components/Title";

export default function GameOver({ numberOfGuesses }) {
  return (
    <SafeAreaView style={styles.container}>
      <Title>Game Over !</Title>
      <Text style={styles.text}>
        You Guessed The Write Answer After{" "}
        <Text style={styles.numberOfGuesses}>{numberOfGuesses.length}</Text>{" "}
        Times{" "}
      </Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  text: { color: "white", fontSize: 18, margin: 20 },
  numberOfGuesses: {
    color: "blue",
  },
});
