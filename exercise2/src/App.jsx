import { useState } from 'react'
import './App.css'
import Clock from './Clock'
import { useEffect } from 'react';

function App() {

  const [displayClock, toggleDisplayClock ] = useState(true);

  return (
    <>
     {displayClock && <Clock />}
     <button onClick={()=>{ toggleDisplayClock(!displayClock)}}>Button</button>
    </>
  )
}

export default App
