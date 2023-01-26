import { useState } from "react"; //`useState` function to tell components to "remember" things. 

// Create a square component. Indicate `value` as the property that a square can take.
function Square(){ 

  const[value, setValue] = useState(null);

  function handleClick(){
    setValue('X');
  }

  return (
    <button 
      className="square"
      onClick = {handleClick}
    >
      {value} 
    </button>); //need to put `value` in {} 
}


export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />  {/* pass a value property to each square */}
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
