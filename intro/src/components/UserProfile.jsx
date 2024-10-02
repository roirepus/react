import React from "react";
import UserFavouriteFoods from "./UserFavouriteFoods";
import UserUsername from "./UserUsername";
import UserAge from "./UserAge";

export function UserProfile() {
  return (
    <div id="user-profile">
      <UserUsername username="dev"/>
      <UserAge age ={20}/>
      <UserUsername username="ayu"/>
      <UserAge age ={21}/>
      <div>
        <span>email:</span>
        <span>af@gmail.com</span>
      </div>
      <UserFavouriteFoods/>
    </div>
  )
}

