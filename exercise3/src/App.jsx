import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  useEffect(()=>{
    alert(`counter1 value is ${counter1}`);
  }, [counter1])

  return (
    <>
    <h1>Counter1 = {counter1}</h1>
    <h1>Counter2 = {counter2}</h1>
      <button onClick={()=>setCounter1(counter1+1)}>Incrementing Counter1</button>
      <button onClick={()=>setCounter2(counter2+1)}>Incrementing Counter2</button>
    </>
  )
}

export default App
