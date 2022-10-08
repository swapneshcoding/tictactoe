import "./styles.css";
import { useState } from "react";

function Square(props) {
  return <button className="square">{props.id}</button>;
}

export default function App() {
  const { state, setState } = useState({
    squares: Array(9).fill(null),
    xIsNext: true,
  });

  return (
    <>
      <h2>{/*state.xIsNext ? 'X' : 'O'*/} is next</h2>
      <div className="App">
        <Square id="1" />
        <Square id="2" />
        <Square id="3" />
        <Square id="4" />
        <Square id="5" />
        <Square id="6" />
        <Square id="7" />
        <Square id="8" />
        <Square id="9" />
      </div>
    </>
  );
}
