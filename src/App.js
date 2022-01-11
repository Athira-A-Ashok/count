import React, { useState, useEffect } from "react";
import randomColor from "randomcolor";

function App() {

 const [ count, setCount] = useState(0)
 const [color, setColor] =useState("blue")

 console.log(count)


 useEffect(() => {
   console.log("useeffect")
 },[count])


 function incrementHandler(){
   return(
    setCount ((prevCount) => {
      return prevCount + 1 ;
    })
   )
    color();
   setColor(randomColor());
 }

 function decrementHandler() {
   return (
    setCount ((prevCount) => {
      return prevCount - 1 ;
    })
   )
 } 

  return (
    <div>
      {console.log("rendering completed")}
   <h1 style={{color:color}}>{count}</h1>
   <button onClick={incrementHandler}>Increment</button>
   <button onClick={decrementHandler}>Decrement</button>
   </div>
  );
}

export default App;
