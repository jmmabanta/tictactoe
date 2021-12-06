import { useState } from "react";

/**
 * A Grid Square
 * @typedef SquareProps
 * @property {int} value The numerical value assigned to the square
 * @param {SquareProps} props
 * @returns A Tic-Tac-Toe grid square
 */
const Square = (props) => {
  const [current, setCurrent] = useState("");
  return (
    <div className="square" onClick={() => setCurrent("X")}>
      {current}
    </div>
  );
};

export default Square;
