import Square from "./Square";

const Board = () => {
  const renderSquare = (i) => {
    return <Square value={i} />;
  };

  const status = "Next Player: X";

  // We will be using the Magic Square approach for Tic-Tac-Toe
  // https://en.wikipedia.org/wiki/Magic_square
  return (
    <div className="board">
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(2)}
        {renderSquare(7)}
        {renderSquare(6)}
      </div>
      <div className="board-row">
        {renderSquare(9)}
        {renderSquare(5)}
        {renderSquare(1)}
      </div>
      <div className="board-row">
        {renderSquare(4)}
        {renderSquare(3)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
