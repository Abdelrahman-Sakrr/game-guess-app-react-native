import { ImageBackground, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import StartGameScreen from "./screens/StartGameScreen";
import GuessMyNumber from "./screens/GuessMyNumber";
import { useState } from "react";
import GameOver from "./screens/GameOver";

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [userNumber, setUserNumber] = useState(null);
  const [userGuesses, setUserGuesses] = useState([]);
  function onStartGame() {
    setGameStarted(true);
  }
  function onEndGame() {
    setGameStarted(false);
  }
  function handleUserInput(number) {
    setUserNumber(number);
  }
  function playAgain() {
    setGameStarted(false);
    setUserNumber(null);
    setUserGuesses([]);
  }
  let screen = (
    <StartGameScreen
      onStartGame={onStartGame}
      handleUserInput={handleUserInput}
    />
  );
  if (gameStarted) {
    screen = (
      <GuessMyNumber
        userGuesses={setUserGuesses}
        onEndGame={onEndGame}
        userNumber={userNumber}
      />
    );
  } else if (!gameStarted && userNumber) {
    screen = <GameOver playAgain={playAgain} numberOfGuesses={userGuesses} />;
  }
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.container}
        colors={["rgba(0, 0, 0, 0.8)", "blue"]}
      >
        <StatusBar style="light" />
        <ImageBackground
          source={require("./assets/dice.jpg")}
          style={styles.container}
          imageStyle={styles.background}
          resizeMode="cover"
        >
          {screen}
        </ImageBackground>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    height: "100vh",
    opacity: 0.3,
  },
});
