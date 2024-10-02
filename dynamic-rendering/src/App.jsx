import UserDetails from "./components/UserDetails";

function App() {
  const isAuthenticated = true
  const mockUsers = [
    {
      id: 1,
      username: "dev",
      email: "dev@dev.com"
    },

    {
      id: 2,
      username: "ayu",
      email: "ayu@ayu.com"
    },

  ]

  return isAuthenticated ? (
    <>

      {mockUsers.map(
        (user) => {
          return (
            <UserDetails key={user.id} username={user.username} email={user.email} />
          )
          })}
    </>

  ):(
      <h1>not logged in</h1>

  )

       
     

}

export default App;
