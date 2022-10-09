import "./styles.css";
import { useState } from "react";

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default function App() {
  const [state, setState] = useState({
    squares: Array(9).fill(null),
    xIsNext: true
  });

  function renderSquare(i) {
    return (
      <Square id={i} value={state.squares[i]} onClick={() => handleClick(i)} />
    );
  }
  function handleClick(i) {
    // console.log(`button ${i} is clicked`);
    const squares = state.squares;
    if (calculateWinner(squares) || squares[i]) return;
    squares[i] = state.xIsNext ? "X" : "O";
    setState({ squares: squares, xIsNext: !state.xIsNext });
  }

  function newGame() {
    setState({
      squares: Array(9).fill(null),
      xIsNext: true
    });
  }

  const winner = calculateWinner(state.squares);
  let status;
  if (winner === "Draw") status = "Draw";
  else if (winner) status = "Winner: " + winner;
  else status = `${state.xIsNext ? "X" : "O"} is next`;

  return (
    <>
      <h2>{status}</h2>
      <div className="App">
        {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
        {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
        {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
      </div>
      <div>
        <button style={{ marginTop: "2%" }} onClick={newGame}>
          new Game
        </button>
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  let isDraw = true;
  for (let x of squares) {
    if (x == null) {
      isDraw = false;
      break;
    }
  }
  if (isDraw) return "Draw";
  return null;
}
