import Board from "./components/Board";
// import Square from "./components/Square";


function Game() {
  return (
    <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
  );
}

export default Game;




