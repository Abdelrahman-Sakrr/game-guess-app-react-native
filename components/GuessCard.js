import { StyleSheet, Text, View } from "react-native";

export default function GuessCard({ item }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { marginInline: 20 }]}>#{item.index + 1}</Text>
      <Text style={styles.text}>{item.item}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    margin: 10,
    width: "90%",
  },
  text: { color: "white", fontSize: 18, marginBlock: 20 },
});
