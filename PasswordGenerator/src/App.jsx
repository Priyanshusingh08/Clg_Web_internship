import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [isChar, setisChar] = useState("true");
  const [isSpecial, setisSpecial] = useState("true");
  const [password, setpassword] = useState("");

  useEffect(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnowxyz";
    let num = 123456789;
    let spe = "!@#$%";
    let pass = "";

    if (isChar) str += num;
    if (isSpecial) str += spe;

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }
    console.log(isChar);
    console.log(isSpecial);
    console.log(pass);

    setpassword(pass);
  }, [length, isChar, isSpecial]);

  const copypass = () => {
    window.navigator.clipboard.writeText(password);
  };

  return (
    <>
      <div className="text-white flex items-center justify-center w-full h-screen flex-col bg-slate-600">
        <div className="bg-slate-800 p-4 rounded-lg">
          <div className="main  p-4 w-full flex justify-between">
            <input
              type="text"
              value={password}
              readOnly
              className="m-4 rounded-lg decoration-none text-black p-2"
            />
            <button className="bg-blue-500 px-5 rounded-lg  hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300" onClick={copypass} >
              Copy
            </button>
          </div>

          <div className="control flex gap-2 ">
            <label>length ({length})</label>
            <input
              type="range"
              value={length}
              min="6"
              max="16"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />

            <label htmlFor="">Numbers</label>

            <input
              type="checkbox"
              value={isChar}
              defaultChecked={isChar}
              onChange={() => {
                setisChar((prev) => !prev);
              }}
            />

            <label htmlFor="">Special</label>

            <input
              type="checkbox"
              value={isSpecial}
              defaultChecked={isSpecial}
              onChange={() => {
                setisSpecial((prev) => !prev);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
