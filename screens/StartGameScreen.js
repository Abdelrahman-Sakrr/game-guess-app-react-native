import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Title from "../components/Title";

export default function StartGameScreen({ onStartGame, handleUserInput }) {
  const [currentNumber, setCurrentNumber] = useState("");
  function handleChange(input) {
    setCurrentNumber(input);
  }

  function handleSubmit() {
    handleUserInput(currentNumber);
    onStartGame();
    setCurrentNumber("");
  }

  return (
    <View style={styles.container}>
      <Title>Guess My Number</Title>

      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="number-pad"
          placeholderTextColor={"white"}
          placeholder="Enter Your Number"
          onChangeText={handleChange}
          style={styles.input}
        />
        <View style={styles.buttonsContainer}>
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.textButton}>Submit</Text>
          </Pressable>
          <Pressable style={styles.button}>
            <Text style={styles.textButton}>Reset</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "rgba(3, 16, 156, 0.8)",
    borderRadius: 12,
  },
  input: {
    color: "white",
    padding: 24,
    borderColor: "white",
    borderWidth: 2,
    margin: 20,
    borderRadius: 8,
  },
  buttonsContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    backgroundColor: "black",
    color: "white",
    width: "40%",
    marginBlock: 20,
    paddingBlock: 16,
    paddingInline: 24,
    borderRadius: 24,
  },
  textButton: {
    color: "white",
    textAlign: "center",
  },
});
