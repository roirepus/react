import React from 'react'

const LoginForm = () => {
  return (
    <form onSubmit={(e)=>{

      e.preventDefault();
      const formData= new FormData(e.target);
      const username=(formData.get("username"));
      const password=(formData.get("ersername"));

    }}>
      <br />
      <label htmlFor="username">username</label>
      <input type="text" id="username" className='bg-black m-4' name="username"
        onChange={(e) => {
          console.log(`username: ${e.target.value}`)
        }}
      />


      <br />
      <br />
      <label htmlFor="password">password</label>
      <input type="password" id="password" className='bg-black m-4' name="password"
        onChange={(e) => {
          console.log(`password: ${e.target.value}`)
        }}

      />

      <br />
      <br />

      <button>login</button>

    </form>

  )
}

export default LoginForm
