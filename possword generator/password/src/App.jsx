/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */


import { useState , useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  //useState for track length of password
  const [Length , setLength] = useState(8);

  //useState for check number is allow in pass or not 
  const [IsNumberAllow , setIsNumberAllow] = useState(false) ;

  //useState for check characters is allow in pass or not 
  const [IsCharactersAllow , setIsCharactersAllow ] = useState(false);

  //useState for change password 
  //useState() for preventing unnecessary re-creations of functions during re-renders
  const [Password , setPassword] = useState("");

    //use userRef() for 
    const passwordReference = useRef(null);
 
  //code to generate a random password   
  const generatePassword =  useCallback(()=>{

    let pass = " ";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijkmlopqrstuvwxyz";

  //adding condition for when char and num should add in str
    if (IsNumberAllow ) str += '0123456789' ;
    if (IsCharactersAllow) str += '!@#$%&*' ;

    for (let i = 1; i <= Length; i++) {
     let char = Math.floor(Math.random()*str.length+1 )
      pass += str.charAt(char)
    }
    setPassword(pass);
  } , [Length , IsNumberAllow , IsCharactersAllow]);   

 //function for copyPasswordToClipBoard
 const copyPasswordToClipBoard = useCallback(()=>{
  //for select a text which are coped 
  passwordReference.current?.select();
  window.navigator.clipboard.writeText(Password)
 } , [Password])


  //using useEffect() for call the passwordGenerator function when we change dependencies 
  useEffect(()=>{generatePassword()} , [Length ,  IsNumberAllow , IsCharactersAllow , generatePassword])

  return (
    <>
    <div className='w-screen h- h-screen bg-slate-700 flex flex-col items-center justify-center '>
    <h1 className=' font-bold mb-9 '>Password Generator </h1>
    <div className=' flex flex-col items-center justify-start  w-[800px] h-[400px] rounded-2xl bg-zinc-500 '> 
    
    <div className='flex items-center justify-between w-full h-[300px px-11'>
    <input 
    type="text" 
    value={Password} 
    placeholder='password' 
    readOnly 
    name="" 
    id="" 
    className=' pl-3 w-[600px] h-[50px] rounded-2xl outline-none m-10  ' 
    ref={passwordReference}
    />
      
    <button 
      onClick={copyPasswordToClipBoard}>
        COPY
    </button>

    </div>

    <div className=''>
      <input
       type="range"
       name="range"
       id="range"
       min={8} 
       max={100} 
       value={Length} 
       className='cursor-pointer'
       onChange={(e) => {setLength(e.target.value)}}
       />

      <label 
      htmlFor="length" 
      className='bg-black font-bold ml-10 rounded-2xl text-white p-2'>
       Length: {Length}
      </label>

    </div>
   
    <div 
    className="flex items-center m-11 ">

  <input 
    type="checkbox" 
    id="Numbers" 
    className="form-checkbox h-6 w-6 mr-2 text-indigo-600"
    defaultChecked={IsNumberAllow}
    onChange={()=>{
    setIsNumberAllow((prev) => !prev)
    }}
  />
  <label 
  htmlFor="Numbers" 
  className="mr-16 font-bold text-white">Numbers
  </label>

  <input 
    type="checkbox" 
    id="Characters" 
    className="form-checkbox h-6 w-6 mr-2 text-indigo-600  "
    defaultChecked={IsCharactersAllow}
    onChange={()=>{
     setIsCharactersAllow((prev) => !prev)
      }}
  />

  <label 
  htmlFor="Numbers" 
  className=" font-bold text-white">Characters
  </label>
</div>

      </div>
    </div>
    </>
  )
}

export default App
