import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Title({ children }) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    borderColor: "white",
    borderWidth: 2,
    margin: 24,
    width: "80%",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: 700,
    padding: 8,
    textAlign: "center",
  },
});
