import { useState } from "react";
import UserDetails from "./components/UserDetails";

function App() {
  const [users,setUsers]=useState([
    {
      id:1,
      username:"dev",
      email: "dev.com",
    },
    {
      id:2,
      username:"ayu",
      email: "ayu.com",
    }
  ])
  return (
    <>
        {users.map((user)=>{
            return(
                <UserDetails key={user.id} username={user.username} email={user.email} setUsers/>
            )
      })}
    </>

  );
}

export default App;
