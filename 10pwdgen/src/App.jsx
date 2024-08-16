import './index.css'
import { useState, useCallback } from 'react';

function App() {

  const [length,setLength]=useState(8);
  const [numberAllowed, setNumberAllowed]=useState(true);
  const [characterAllowed, setCharAllowed]=useState(true);
  const [password,setPassword]=useState('');
   

  const passwordGenerator=useCallback(()=>{

    let pass ='';
    let str='ABCEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  if(numberAllowed)str+='0123456789';
  if(characterAllowed)str+='!@#$%^&*(){}[]~';
  while(length--){
      let char =Math.floor( Math.random()*str.length+1);
      pass=str.charAt(char)
  }
  setPassword(pass)
    
  },[length,numberAllowed,characterAllowed,setPassword])
  return (

    <>

      <h1 className='text-4xl text-center'>dassword generator</h1>
    </>
  );

}

export default App;
