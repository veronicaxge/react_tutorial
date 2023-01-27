import { useState } from "react"; //`useState` function to tell components to "remember" things. 

export default function Board() {
  const[squares, setSquares] = useState(Array(9).fill(null)) //lifting state from Square to parent component Board 

  return (
    <>
      <div className="board-row">
        <Square value = {squares[0]} />  {/* Board passes down a value prop to display in each Square */}
        <Square value = {squares[1]} />
        <Square value = {squares[2]} />
      </div>
      <div className="board-row">
        <Square value = {squares[3]} />
        <Square value = {squares[4]} />
        <Square value = {squares[5]} />
      </div>
      <div className="board-row">
        <Square value = {squares[6]} />
        <Square value = {squares[7]} />
        <Square value = {squares[8]} />
      </div>
    </>
  );
}

// Create a square component. Indicate `value` as the property that a square can take.
function Square( {value} ){ 
  return <button className="square"> {value} </button>; //need to put `value` in {} 
}
