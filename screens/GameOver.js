import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "../components/Title";
import GuessCard from "../components/GuessCard";

export default function GameOver({ numberOfGuesses, playAgain }) {
  return (
    <SafeAreaView style={styles.container}>
      <Title>Game Over !</Title>
      <Text style={styles.text}>
        You Guessed The Write Answer After{" "}
        <Text style={styles.numberOfGuesses}>{numberOfGuesses.length}</Text>{" "}
        Times{" "}
      </Text>
      <FlatList
        style={{ width: "100%" }}
        data={numberOfGuesses}
        keyExtractor={(item) => item}
        renderItem={(item) => <GuessCard key={item.item} item={item} />}
      />
      <Pressable
        style={{ backgroundColor: "blue", borderRadius: 20 }}
        onPress={() => playAgain()}
      >
        <Text style={styles.text}>Play Again</Text>
      </Pressable>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  text: { color: "white", fontSize: 18, margin: 20 },
  numberOfGuesses: {
    color: "blue",
  },
});
