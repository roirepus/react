import { useState } from 'react'
import './App.css'

function App() {
  // const [inputValue, setInputValue] = useState('')
  //
  // function handleChange(event) {
  //
  //   setInputValue(
  //     event.target.value
  //   );
  // }
  //  return (
  //   <>
  //     <input type="text" onChange={handleChange} />
  //     {inputValue}
  //   </>
  // )
  //
  // let [textColor, setTextColor]=useState("red")
  // const change=()=>{
  //   textColor==='red'?setTextColor('pink'):setTextColor('red')
  // }
  // return (
  //   <>
  //
  //     <button onClick={change}>change color</button>
  //     <h1  style ={{ color: textColor}}> hii</h1>
  //
  //   </>
  //
  // )
  let [value, setValue] = useState(0)
  return (
    <>
        <p>{value}</p>
         <button onClick={()=>{setValue(++value)}}>increase</button>
         <button onClick={()=>{setValue(--value)}}>decrease</button>
         <button onClick={()=>{setValue(0)}}>set to zero</button>
    </>
  )
}

export default App
