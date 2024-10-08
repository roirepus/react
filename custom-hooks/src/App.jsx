import { useEffect } from "react";

function App() {
  useEffect(()=>{
    const resizeEventHandler=(e)=>{
     console.log("viewport resized") 
    }
    window.addEventListener("resize", resizeEventHandler)
    
  },[])

  return (
    <>

    </>

  );
}

export default App;
