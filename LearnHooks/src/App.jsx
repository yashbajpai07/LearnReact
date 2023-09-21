import { useState } from 'react'
import './App.css'

function App() {
  

  const [counter, setCounter] = useState(0);

  const addCounter=()=>{
    if(counter>=20)
    setCounter(20)
    else
    {
      setCounter(prevCounter=>prevCounter+1);
      setCounter(prevCounter=>prevCounter+1);
      setCounter(prevCounter=>prevCounter+1);
      setCounter(counter+1);

    }
  }
  const decreaseCounter=()=>{
    if(counter<=0)
    setCounter(0);
    else
    setCounter(counter-1);
  }
  //let counter=4;
  return (
    <>
      <h1>Learn Hooks</h1>
      <h2>Counter</h2>
      <h3>Counter Value: {counter}</h3>
      <button onClick={addCounter}>Add Value {counter}</button>
      <button onClick={decreaseCounter}>Decrease Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
