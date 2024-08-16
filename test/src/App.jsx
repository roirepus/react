import { useState } from 'react'
import './App.css'

function App() {

  let [ctr,setCtr]=useState(0);
  function increase(){
    if(ctr===20){setCtr(ctr=20)

    }
    else{
    setCtr(++ctr);}
  }
  function decrease(){
    if(ctr==0)setCtr(ctr=0);
    else
    setCtr(--ctr);
  }
  return (
    <>
      

           <h1>counter app</h1>
      <h2>current counter: {ctr}</h2>
<button onClick={increase}>increase</button>
      <br/>
      <br/>
<button onClick={decrease}>decrease</button>
        </>
  )
}

export default App
