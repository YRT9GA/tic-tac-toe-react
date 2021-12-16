import { useState } from "react";
import Square from "./Square";

function Board() {
           
    const [squaresArr, setSquaresArr] = useState(Array(9).fill(null));
    
    function handleClick(i) {
      const squares = squaresArr.slice();
      squares[i] = 'X';
      setSquaresArr(squares);
    }
    
    function renderSquare(i) {
      return (
        <Square
          value={squaresArr[i]}
          onClick = {() => handleClick(i)}
          />
        );
    }
    
    const status = 'Next player: X';

    
    return (
        <div>
            <div className="status">{status}</div>
            <div>
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

        </div>
    );
      
}    

export default Board;