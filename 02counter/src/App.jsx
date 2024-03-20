import { useState } from 'react'
import './App.css'

function App() {

  // const [counter , setCounter] = useState(15)
  let [counter , setCounter] = useState(15)
  //let counter = 15

  const addValue = ()=>{
    /*
    console.log("Clicked" , counter);
    //counter = counter + 1
    //setCounter(counter)
    setCounter(counter + 1 )
    */
    if (counter < 20) {
      setCounter(counter => counter + 1);
    }
  }

  const removeValue = ()=>{
    //setCounter(counter - 1 )
    if (counter > 0) {
      setCounter(counter => counter - 1);
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>remove Value {counter}</button>
      <p>footer : {counter}</p>
    </> 
  )
}

export default App
