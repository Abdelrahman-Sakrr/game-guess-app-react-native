import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useEffect, useState } from "react";

function generateRandomNumberBetween(min, max, exclude) {
  const rndNumber = Math.floor(Math.random() * (max - min)) + min;
  if (rndNumber === exclude) {
    return generateRandomNumberBetween(min, max, exclude);
  } else {
    return rndNumber;
  }
}

let minNumber = 1;
let maxNumber = 100;
export default function GuessMyNumber({ userNumber, onEndGame }) {
  const initialGuess = generateRandomNumberBetween(
    1,
    100,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    console.log()
    if (userNumber == currentGuess) onEndGame();
  }, [currentGuess, userNumber, onEndGame]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert(
        "Donot Lie You Know This Is Wrong",
        "You Know This Is wrong",
        [{ text: "Okay", style: "cancel" }]
      );
      return;
    }
    if (direction === "lower") {
      maxNumber = currentGuess;
    } else {
      minNumber = currentGuess + 1;
    }
    const rndmNumber = generateRandomNumberBetween(
      minNumber,
      maxNumber,
      currentGuess
    );
    setCurrentGuess(rndmNumber);
  }

  return (
    <View style={style.container}>
      <Title>Opponent's Guess</Title>
      <View style={style.guessContainer}>
        <Text style={style.guessText}>{currentGuess}</Text>
      </View>
      <View style={style.inputContainer}>
        <View style={style.buttonsContainer}>
          <Pressable
            onPress={() => nextGuessHandler("higher")}
            style={style.button}
          >
            <Text>
              <AntDesign
                style={style.textButton}
                name="plus-circle"
                size={24}
                color="white"
              />
            </Text>
          </Pressable>
          <Pressable
            style={style.button}
            onPress={() => nextGuessHandler("lower")}
          >
            <Text>
              <AntDesign
                style={style.textButton}
                name="minus-circle"
                size={24}
                color="white"
              />{" "}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  guessContainer: {
    borderWidth: 2,
    paddingInline: 20,
    paddingBlock: 50,
    borderRadius: 8,
    borderColor: "white",
    width: "70%",
  },
  guessText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    borderRadius: 12,
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
