import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  

   document.body.style.backgroundColor=color;

  return (
    <>
      <button onClick={()=>{setColor("Red")}}>Red</button>
      <button onClick={()=>{setColor("Green")}}>Green</button>
      <button onClick={()=>{setColor("Blue")}}>Blue</button>
      <button onClick={()=>{setColor("Yellow")}}>Yellow</button>
    </>
    
  )
}

export default App
