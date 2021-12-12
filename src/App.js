import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import getWinner from "./helper/getWinner";

const App = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [turnNumber, setTurnNumber] = useState(0);
  const [xTurn, setXTurn] = useState(true);

  /**
   * Marks the clicked grid square as either 'X' or 'O'
   * @param {int} idx The index of the grid's square to mark
   */
  const updateMark = (idx) => {
    const newHistory = history.slice(0, turnNumber + 1);
    const squares = newHistory[newHistory.length - 1].slice();
    if (!getWinner(squares) && squares[idx] === null) {
      squares[idx] = xTurn ? "X" : "O";
      newHistory.push(squares);
      setHistory(newHistory);
      setTurnNumber(newHistory.length - 1);
      setXTurn((turn) => !turn);
    }
  };

  /**
   * Rewinds the board to a previous game state
   * @param {int} moveIdx The game state to rewind to a previous state
   */
  const rewind = (moveIdx) => {
    setTurnNumber(moveIdx);
    setXTurn(moveIdx % 2 === 0);
  };

  /**
   * Renders a list of buttons that let you rewind to previous game states
   */
  const getMoveList = history.map((_, turn) => {
    const description = turn ? "Go to Turn #" + turn : "Go to Game Start";
    return (
      <button key={turn} onClick={() => rewind(turn)}>
        {description}
      </button>
    );
  });

  const current = history[turnNumber];
  const winner = getWinner(current);
  let status = "Next Player: " + (xTurn ? "X" : "O");
  if (winner) {
    status = "THE WINNER IS: " + winner;
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Welcome to Tic-Tac-Toe!</h1>
        <p>
          By John Marcus Mabanta •{" "}
          <a
            href="https://github.com/jmmabanta/tictactoe"
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>{" "}
          •{" "}
          <a
            href="https://reactjs.org/tutorial/tutorial.html"
            target="_blank"
            rel="noreferrer"
          >
            Original Tutorial
          </a>
        </p>
      </div>
      <div className="game">
        <div className="game-board">
          <Board squares={current} updateMark={(i) => updateMark(i)} />
        </div>
        <div className="game-info">
          <p>{status}</p>
          {getMoveList}
        </div>
      </div>
    </div>
  );
};

export default App;
