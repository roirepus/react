import { useCallback, useState, useRef, useEffect } from "react";
function App() {
  const [len, setLen] = useState(8);
  const [num, setNum] = useState(true);
  const [char, setChar] = useState(true);
  const [pwd, setPwd] = useState("");
  //ref hook
  const pwdRef = useRef(null)
  const pwdGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (num) str += "0123456789";
    if (char) str += "!@#$%^&*(){}";

    for (let i = 1; i <= len; i++) {
      let tempChar = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(tempChar)
    }
    setPwd(pass);
  }, [len, char, num, setPwd])
  useEffect(()=>{
    pwdGen()
  },[len, num, char,setPwd])
  const copyPwd = useCallback(()=>{
    pwdRef.current?.select()
    pwdRef.current?.setSelectionRange(0,len)
    window.navigator.clipboard.writeText(pwd)
  },[pwd])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-cyan-800">

        <h1 className="text-4xl text-center">pwd generator</h1>
        <div className="flex flex-row">
          <input type="text"
            value={pwd}
            className="outline-none w-full py-1 px-3 rounded-lg"
            placeholder="password"
            readOnly
            ref={pwdRef}
          />

          <button
            onClick={copyPwd}
          >Copy</button>

        </div>

        <div className="flex items-center gap-x-1">
          <input type="range"
            min={8}
            max={100}
            value={len}
            className="cursor-pointer"
            onChange={(e) => setLen(e.target.value)}
          />
          <label htmlFor="">length:{len}</label>

        </div>

        <div>
          <input
            type="checkbox"
            defaultChecked={num}
            id="numInput"
            onChange={() => setNum(!num)}
          />
          <label htmlFor="">number</label>
          <input
            type="checkbox"
            defaultChecked={char}
            id="charInput"
            onChange={() => setChar(!char)}
          />
          <label htmlFor="">character</label>
        </div>
      </div>
    </>

  );
}

export default App;
