import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import getWinner from "./helper/getWinner";

const App = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [step, setStep] = useState(0);
  const [xTurn, setXTurn] = useState(true);

  /**
   * Marks the clicked grid square as either 'X' or 'O'
   * @param {int} idx The index of the grid's square to mark
   */
  const updateMark = (idx) => {
    const newHistory = history.slice(0, step + 1);
    const newSquares = newHistory[newHistory.length - 1].slice();
    if (!getWinner(newSquares) && newSquares[idx] === null) {
      newSquares[idx] = xTurn ? "X" : "O";
      newHistory.push(newSquares);
      setHistory(newHistory);
      setStep(history.length);
      setXTurn((turn) => !turn);
    }
  };

  /**
   * Rewinds the board to a previous game state
   * @param {int} moveIdx The game state to rewind to a previous state
   */
  const rewind = (moveIdx) => {
    setStep(moveIdx);
    setXTurn(moveIdx % 2 === 0);
  };

  /**
   * Renders a list of buttons that let you rewind to previous game states
   */
  const getMoveList = history.map((gridState, moveIdx) => {
    const description = moveIdx ? "Go to move #" + moveIdx : "Go to game start";
    return (
      <li key={moveIdx}>
        <button onClick={() => rewind(moveIdx)}>{description}</button>
      </li>
    );
  });

  const current = history[step];
  const winner = getWinner(current);
  let status = "Next Player: " + (xTurn ? "X" : "O");
  if (winner) {
    status = "THE WINNER IS: " + winner;
  }

  return (
    <div className="App">
      <h1>Welcome to Tic-Tac-Toe!</h1>
      <div className="game">
        <div className="game-board">
          <Board squares={current} updateMark={(i) => updateMark(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{getMoveList}</ol>
        </div>
      </div>
    </div>
  );
};

export default App;
