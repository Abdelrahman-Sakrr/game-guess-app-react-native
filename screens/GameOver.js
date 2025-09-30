import React from "react";
import { StyleSheet, Text } from "react-native";

export default function GameOver() {
  return <Text style={styles.text}>Game Over !</Text>;
}
const styles = StyleSheet.create({
  text: { color: "white", fontSize: 24 },
});
