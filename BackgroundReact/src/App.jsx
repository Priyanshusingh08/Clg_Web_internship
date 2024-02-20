import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let elem = document.querySelector("#id");


   const hand=()=>{
    var elem = document.querySelector(".menu")
    elem.addEventListener("click", function (e){
      document.body.style.backgroundColor=e.target.id;
      console.log(e.target.id)
    })
   }

  return (
    <>
    <div className='menu'>
      <button id='blue' onClick={hand}>BLUE</button>
      <button id='red' onClick={hand}>RED</button>
      <button id='green' onClick={hand}>GREEN</button>
      <button id='yellow' onClick={hand}>YELLOW</button>
      </div>
    </>
    
  )
}

export default App
