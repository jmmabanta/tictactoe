import Square from "./Square";

/**
 * @typedef BoardProps
 * @property {Array} squares The current state of the game board
 * @property {function} updateMark Updates the square's mark on the game board
 * @param {BoardProps} props
 * @returns
 */
const Board = (props) => {
  /**
   * Renders a square to the tic-tac-toe grid
   * @param {int} idx The index of the square relative to the squares state.
   * @param {*} val The value of the square according to the Magic Square.
   * @returns
   */
  const renderSquare = (idx) => {
    return (
      <Square
        mark={props.squares[idx]}
        updateMark={() => props.updateMark(idx)}
      />
    );
  };

  return (
    <div className="board">
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
