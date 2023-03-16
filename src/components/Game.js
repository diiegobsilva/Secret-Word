import "./Game.css"

const Game = ({verifyLetter}) => {
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: 000</span>
      </p>
      <h1>Advinhe a palavra</h1>
       <h3 className="tip">
          Dica sobre a palavra: <span>Dica...</span>
       </h3>
       <div className="wordContainer">
          <span className="letter">A</span>
          <span className="blackSquere"></span>
       </div>
       <div className="letterContainer">
          <p>Tente adivinhar a palavra: </p>
          <form>
            <input type="text" name="latter" maxLength="1" required/>
            <button>Jogar!</button>
          </form>
          <div className="wrongLettersContainer">
            <p>Letras já utilizadas</p>
            <span>a, </span>
            <span>b, </span>
          </div>
       </div>
    </div>
  )
}

export default Game