import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [ctr,setCtr] = useState(5)
   //let ctr=5;
  const addValue = ()=>{
    setCtr(++ctr)
  }
const decreaseValue = ()=>{
    setCtr(--ctr)
  }
  return (
    <>
        <h1>chair aur react</h1>
      <h2>counter value: {ctr}</h2>
      <button onClick={addValue}>add value</button>
      <br/>
      <br/>
      <button onClick={decreaseValue}>decrease value</button>
          </>
  )
}

export default App
