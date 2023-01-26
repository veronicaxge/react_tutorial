// Create a square component. Indicate `value` as the property that a square can take.
function Square({ value }){ //need to put `value` in {} 

  function handleClick(){
    console.log("Clicked!")
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
        <Square value = "1" />  {/* pass a value property to each square */}
        <Square value = "2" />
        <Square value = "3" />
      </div>
      <div className="board-row">
        <Square value = "4" />
        <Square value = "5" />
        <Square value = "6" />
      </div>
      <div className="board-row">
        <Square value = "7" />
        <Square value = "8" />
        <Square value = "9" />
      </div>
    </>
  );
}
