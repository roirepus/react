import React, { useEffect, useState } from "react";
import MyComp from "./components/MyComp";
function App() {
    let [isVisible, setVisible]=useState(true)
    useEffect(() => {
        console.log("app component is mounting")
    }, [])


    return (
        <>
            {isVisible?<MyComp />:<></>}
            <button onClick={()=>{setVisible(!isVisible)}}>toggle</button>
        </>

    );
}

export default App;
