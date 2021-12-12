/**
 * A Grid Square
 * @typedef SquareProps
 * @property {string} mark The current player mark of the square.
 * @property {function} updateMark Updates the current player mark onClick.
 * @param {SquareProps} props
 * @returns A Tic-Tac-Toe grid square
 */
const Square = (props) => {
  return (
    <div className="square" onClick={() => props.updateMark()}>
      {props.mark}
    </div>
  );
};

export default Square;
