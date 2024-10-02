import { useState } from "react";
import UserDetails from "./components/UserDetails"
function App() {
  const [user, setUser] = useState([
    {
      id: 1,
      username: "dev",
      email: "dev@dev.com",
    },
    {
      id: 2,
      username: "ayu",
      email: "ayu@ayu.com",
    },
  ])
  return (

    <>
      {user.map((user) => {
        return (
          <div key={user.id}>
            <UserDetails  key={user.id} user={user} setUser/>
          </div>


        )
      })}
    </>

  );
}

export default App;
