import React from 'react'

const UserDetails = (user) => {
  return (
      < div key={user.id}>
        <b>id: </b>
        <span>{user.id}</span>
        <br />
        <b>Username: </b>
        <span>{user.username}</span>
        <br />

        <b>email: </b>
        <span>{user.email}</span>
      </div>
  )
}

export default UserDetails
