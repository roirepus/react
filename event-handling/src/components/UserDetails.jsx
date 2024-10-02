import { useState } from 'react'

const UserDetails = ({ user, setUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [username,setUsername]=useState(user.username)
  const [email,setEmail]=useState(user.email)
  return (
    <div>
      < div key={user.id}>
        <b>id: </b>
        <span>{user.id}</span>
        <br />
        <b>Username: </b>
        {isEditing? <input className='bg-black' name='username' id='username' value={username} onChange={(e)=>{
          setUsername(e.target.value)
        }}/>:<span>{user.username}</span>}
        <br />

        <b>email: </b>

        
        {isEditing? <input className='bg-black' name="email" id="email" value={email} onChange={(e)=>{
          setEmail(e.target.value);
        }}/>:<span>{user.email}</span>}
      </div>
      <button className='bg-fuchsia-600 m-2' onClick={() => {
        setIsEditing(!isEditing)
      }}>edit</button>
      <button className='bg-fuchsia-600 m-2'>delete</button>
      {isEditing &&(<button className='bg-fuchsia-600 m-2' onClick={()=>{
        setUser(
           (currentUserState)=>{
                return currentUserState.map((currentUser)=>{
              if(currentUser.id===user.id){
                return ({...currentUser, username, email})
              }
              else{
                return currentUser
              }
            })
          }
        )
        setIsEditing(false)
      }}>save</button>
      )}
    </div>
  )
}

export default UserDetails
