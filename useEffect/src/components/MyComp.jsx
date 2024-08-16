import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const MyComp = () => {

    let [ctr, setCtr]=useState(0)
    useEffect(() => {
        console.log('my comp is mounting')
        return function (){
            console.log("unmounting")
        }

    }, [])
useEffect(() => {
        console.log('my comp is updating')
    }, [ctr])

    return <>

        <div>
            <p>count is: {ctr}</p>
            <button onClick={()=> setCtr(++ctr)}>Update</button>
        </div>
    </>
}

export default MyComp
