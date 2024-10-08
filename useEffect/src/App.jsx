import { useState, useEffect } from "react";

function App() {
  //   let [ctr, setCtr] = useState(0);
  //   const [sync, setSync] = useState(false);
  //
  //   useEffect(() => {
  //
  //     console.log("rendering")
  //     document.title = `react tutorial+${ctr}`;
  //   }, [sync])
  //
  //   useEffect(() => {
  //     // fetch("https://jsonplaceholder.typicode.com/users", {
  //     //   method: "GET",
  //     //   }).then((res)=>{
  //     //     return res.json()
  //     //   }).then((data)=>{
  //     //     console.log(data)
  //     //   })
  //     async function fetchUsers() {
  //       const controller = new AbortController();
  //       try {
  //         const res = await fetch("https://jsonplaceholder.typicode.com/users", 
  //           {signal: controller.signal},
  //         )
  //         const json = await res.json()
  //         console.log(json);
  //       } catch (err) {
  //         console.log("erroeefa: ", err)
  //       }
  //
  //     }
  //
  //     fetchUsers();
  //     return()=>{
  //       controller.abort()
  //     }
  //   })
  //
  //   return (
  //     <>
  //       <button onClick={() => setCtr(++ctr)}>click</button>
  //       <p>{ctr}</p>
  //       <button onClick={() => { setSync(!sync) }}>sync</button>
  //     </>
  //
  //   );
  // }
  //


  //post request

  const [blogPostData, setBlogPostData] = useState({
    title: "",
    body: "",
  })

  return (
    <>
      <form action="" onSubmit={(e)=>{
        e.preventDefault();
        if(blogPostData.title && blogPostData.body){
          fetch('https://jsonplaceholder.typicode.com/posts',{
            method: "POST",
            body:JSON.stringify({
              userId: 1,
              title: blogPostData.title,
              body: blogPostData.body,
            }),
            headers:{
              "Content-type": "application/json; charset=UTF-8",
            }

          }).then((res)=>{
              res.json()
            }).then((data)=>{
              console.log("success");
              console.log(data);

            }).catch((err)=>{
              console.log("error in sending post req", err)
            })
        }
      }}>
        <label htmlFor="title">title</label>
        <input type="text" id="title" className="text-black" value={blogPostData.title} onChange={(e)=>
          {setBlogPostData((currentBlogPostData)=>({
            ...currentBlogPostData,
            title: e.target.value,
          }))
        }}/>
        <br/>
        <br/>
        <label htmlFor="body">body</label>
        <input type="text" id="body" className="text-black" value={blogPostData.body} onChange={(e)=>
          {setBlogPostData((currentBlogPostData)=>({
            ...currentBlogPostData,
            body: e.target.value,
          }))
        }}/>

        <button>create post</button>

      </form>
    </>
  )
}



export default App;



