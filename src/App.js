import { useState } from "react"; //`useState` function to tell components to "remember" things. 

export default function Board() {
  //create a constant with the name `squares`. Initialize the value of the constant as an array of 9 with null. This constant's value can be set to another if certain event happens. 
  const[squares, setSquares] = useState(Array(9).fill(null)); //lifting state from Square to parent component Board
  const[xIsNext, setXIsNext] = useState(true); //create a state to keep track of whether X should be the next player or not. 
  

  function handleClick(i){
    if(squares[i]){
      return;
    }

    const nextSquares = squares.slice(); //make a copy of the squares array

    if(xIsNext){ //if X is the next player
      nextSquares[i] = "X"  //mark the clicked square as "X"
    } else { //if X is NOT the next player
      nextSquares[i] = "O" //mark the clicked square as "O"
    }

    setSquares(nextSquares) //set nextSquares as the new state for the Board, which triggers a rerendering of the Board and all the Squares
    setXIsNext(!xIsNext) //flip the state of xIsNext from true to false, and vice versa. 
  }

  return (
    <>
      <div className="board-row">
        <Square value = {squares[0]} onSquareClick = {() => handleClick(0)} />  {/* Board passes down a value prop to display in each Square */}
        <Square value = {squares[1]} onSquareClick = {() => handleClick(1)} />
        <Square value = {squares[2]} onSquareClick = {() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value = {squares[3]} onSquareClick = {() => handleClick(3)} />
        <Square value = {squares[4]} onSquareClick = {() => handleClick(4)} />
        <Square value = {squares[5]} onSquareClick = {() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value = {squares[6]} onSquareClick = {() => handleClick(6)} />
        <Square value = {squares[7]} onSquareClick = {() => handleClick(7)} />
        <Square value = {squares[8]} onSquareClick = {() => handleClick(8)} />
      </div>
    </>
  );
}

// Create a square component. Indicate `value` as the property that a square can take.
function Square( {value, onSquareClick} ){ 
  return (
    <button className="square" onClick={onSquareClick}> 
      {value} 
    </button>
  ); //need to put `value` in {} 
}


