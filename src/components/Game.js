import { useState, useRef } from "react"
import "./Game.css"

const Game = ({
  verifyLetter,
  pickedCategory,
  pickedWord,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {

  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    
    verifyLetter(letter)

    setLetter("")

    letterInputRef.current.focus();
  }
console.log(pickedCategory);
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Advinhe a palavra</h1>
       <h3 className="tip">
          Dica sobre a palavra: <span>{pickedCategory}</span>
       </h3>
       <p>Voçe tem {guesses} tentativas(s).</p>
       <div className="wordContainer">
          {letters.map((letter, i) => (
              guessedLetters.includes(letter) ? (
                <span key={i} className="letter">{letter}</span>
              ) : (
                <span key={i} className="blackSquare"> </span>
              )
          ))}
          <span className="blackSquere"></span>
       </div>
       <div className="letterContainer">
          <p>Tente adivinhar a palavra: </p>
          <form onSubmit={handleSubmit}>
            <input type="text" 
            name="latter" 
            maxLength="1" 
            required 
            onChange={(e) => setLetter(e.target.value)} 
            value={letter}
            ref={letterInputRef}
            />
            <button>Jogar!</button>
          </form>
          <div className="wrongLettersContainer">
            <p>Letras já utilizadas</p>
              {wrongLetters.map((letter, i) =>(
                <span key={i}>{letter}, </span>
              ))}
          </div>
       </div>
    </div>
  )
}

export default Game