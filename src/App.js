//CSS
import './App.css';

//React
import { useCallback, useEffect, useState } from 'react';

//Data
import {wordsList} from "./data/words";


//Components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}, 
]

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickWords, setPickWords] = useState("");
  const [pickCatagory, setPickCatagory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessdLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0)

  const pickLettrsAndCatagory = () => {
    // pick a randon category
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    console.log(category);

    // pick a rando word
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    console.log(word);

    return{word, category}
  }

  // starts the secret words
  const startGame = () => {
    //pick word and category
    const {word, category} = pickLettrsAndCatagory();
    
    // create an array of letter
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase())

    console.log(word, category);
    console.log(wordLetters);

    // fill states
    setLetters(wordLetters)
    setPickCatagory(category)
    setPickWords(word)
    setGameStage(stages[1].name)
  }

  // process the letter input
  const verifyLetter = (letter) => {
    console.log(letter);
  }

  // restart the game
  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
        {gameStage === "start" &&  <StartScreen startGame={startGame}/>}
        {gameStage === "game" &&  
                                <Game 
                                verifyLetter={verifyLetter} 
                                pickCatagory={pickCatagory} 
                                pickWords={pickWords} 
                                letters={letters}
                                guessedLetters={guessedLetters}
                                wrongLetters={wrongLetters}
                                guesses={guesses}
                                score={score}
                                />}

        {gameStage === "end" &&  <GameOver retry={retry}/>}
    </div>
  );
}

export default App;
