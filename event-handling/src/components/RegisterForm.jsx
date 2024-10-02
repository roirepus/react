import {useState} from 'react'

const RegisterForm = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  return (
    <div>
  <form action="">
      <label htmlFor="username">username</label>
      <input type="text" id="username" className='bg-black' value={username} onChange={(e)=>{
          setUsername(e.target.value);
        }}/>
      <br/>
      <br/>

      <label htmlFor="password">password</label>
      <input  className='bg-black'type="password" id="password" value={password}
       onChange={(e)=>{
          setPassword(e.target.value);}}/>

      <br/>
      <br/>
      <label htmlFor="displayName">Display Name</label>
      <input className='bg-black' type="text" id="displayName" value={displayName}
       onChange={(e)=>{
          setDisplayName(e.target.value);}}/>
      <br/>
      <br/>
    </form>
</div>
  )
}

export default RegisterForm
