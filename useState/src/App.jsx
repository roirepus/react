import { useState } from "react";

function NameList() {
  const [arr, setArr] = useState(["a", "y", "u"])
  const [name,setName]=useState("");
  const onAddName= ()=>{
    //arr.push(name)
    setArr([...arr,name]);
    setName("");
  };
  return (
    <>
      <ul>
        {arr.map((name) => 
          <li key={name}>{name}</li>
        )}
      </ul>

      <input
        type="text"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />
      
      <button
        onClick={onAddName}
      >
        add name
      </button>
    </>
  )
}

function Counter() {
  const [ctr, setCtr] = useState(0);
  function inc() {
    setCtr(ctr + 1);
  }
  return (
    <>
      <h2>count {ctr}</h2>
      <button onClick={inc}>increase</button>
    </>

  );
}
function App() {
  return (
    <div>
      <Counter />
      <NameList />
    </div>
  )
}


export default App;
