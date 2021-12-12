import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);

  const updateMark = (idx, val) => {
    if (!getWinner() && squares[idx] === null) {
      // Update Visuals
      const newSquares = squares.slice();
      newSquares[idx] = xTurn ? "X" : "O";
      setSquares(newSquares);
      setXTurn((turn) => !turn);
    }
  };

  const getWinner = () => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  /**
   * Renders a square to the tic-tac-toe grid
   * @param {int} idx The index of the square relative to the squares state.
   * @param {*} val The value of the square according to the Magic Square.
   * @returns
   */
  const renderSquare = (idx) => {
    return <Square mark={squares[idx]} updateMark={() => updateMark(idx)} />;
  };

  const winner = getWinner();
  let status = "Next Player: " + (xTurn ? "X" : "O");
  if (winner) {
    status = "THE WINNER IS: " + winner;
  }

  // We will be using the Magic Square approach for Tic-Tac-Toe
  // https://en.wikipedia.org/wiki/Magic_square
  return (
    <div className="board">
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
