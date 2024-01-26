/* eslint-disable no-unused-vars */
import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className='w-full h-screen flex  justify-center'
    style={{backgroundColor:color}}>

         <div className='w-auto px-5 mx-8 my-8 h-16 bg-red-900d  bg-slate-600 rounded-xl flex flex-wrap items-center justify-center gap-7 '>

        <button className='bg-red-400 font-semibold  w-16 border-black rounded-xl h-10' onClick={()=>setColor('red')} >Red</button>

        <button className='bg-blue-400  font-semibold  w-16 border-black rounded-xl h-10' onClick={()=>setColor('blue')} >blue</button>

        <button className='bg-yellow-400  font-semibold w-16 border-black rounded-xl h-10' onClick={()=>setColor('yellow')} >yellow</button>

        <button className='bg-orange-400  font-semibold w-16 border-black rounded-xl h-10' onClick={()=>setColor('orange')} >orange</button>

        <button className='bg-white w-16  font-semibold border-black rounded-xl h-10' onClick={()=>setColor('white')} >white</button>


         </div>
    </div>
  )
}

export default App
