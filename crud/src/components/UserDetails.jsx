import {useState} from 'react'

const UserDetails = (user) => {
  const [isEditing,setIsEditing]=useState(false)
  const[username,setUsername]=useState(user.username)
  const[email,setEmail]=useState(user.email)
  return (
    <div >

      <div>
        <b>id: </b>
        <span>{user.id}</span>
        <br />

        <b>name: </b>
        {isEditing ?  <input className='bg-pink-400' value={username} onChange={(e)=>{
          setUsername(e.target.value)
        }}/> : <span>{username}</span>}
        <br />

        <b>email: </b>
        {isEditing ?  <input className='bg-pink-400' value={email} onChange={(e)=>{
          setEmail(e.target.value)
        }}/> : <span>{email}</span>}

      </div>
      <button className="bg-pink-400 m-4 p-2" onClick={
        ()=>{
          setIsEditing(!isEditing)
        }
      }>edit</button>
      <button className="bg-pink-400 m-4 p-2" id={user.id} onClick={
        ()=>{
          console.log(currentUsersState )   
        }
      }>delete</button>
      {isEditing && <button className="bg-pink-400 m-4 p-2" onClick={()=>{
        setIsEditing(!isEditing);
      }}>save</button> }
    </div>
  )
}

export default UserDetails
