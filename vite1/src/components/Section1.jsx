import React, { useCallback, useEffect, useRef, useState } from 'react'
import { section1 } from '../constant'
const Section1 = () => {
    const [length,setLength] = useState(8);
    const [number,setNumber] = useState(false);
    const [char,setChar] = useState(false);

    const passwordRef = useRef(null);

    const [pass,setPass] = useState("");

    const copyPassword = useCallback(()=>{
        passwordRef.current?.select()
        // passwordRef.current?.setSelectionRange(0,length)
        window.navigator.clipboard.writeText(pass)

    },[pass])

    const passwordGenerator= useCallback(()=>{
        let password = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(number) str+='0123456789'
        if(char) str+='!@#$%^&*(){}[]~'

        for(let i=1;i<=length ;i++){
            let char = Math.floor(Math.random() * str.length+1)

            password += str.charAt(char)
        }
        setPass(password)

    },[length,number,char,setPass])

    useEffect(()=>{
            passwordGenerator()
    },[length,number,char,passwordGenerator])

  return (
    <div className='bg-gray-200 p-2'>
      <div className='max-w-screen-xl mx-auto flex items-center justify-between space-x-3 p-3 px-5 m-2 mb-4 text-gray-700 shadow-md font-medium bg-white'>
        
        {section1.map((item,idx)=>(
            <div key={idx} className=''>
                <h1>{item.text}</h1>
            </div>
        ))    
        }
      </div>
      <div className='max-w-screen-xl mx-auto flex items-center justify-between space-x-3 p-3 px-5 m-2 text-gray-700 shadow-md font-medium bg-white'>
        
        <div className='space-y-2 w-full'>

            <div className='flex'>
            <input ref={passwordRef} value={pass} readOnly type='text' className='w-[20rem] p-2 bg-gray-200 rounded-l-md focus:outline-none'/>
            <button  onClick={copyPassword} className='bg-blue-500 rounded-r-md p-2 text-gray-100 font-medium'>Copy</button>
             </div>

            <div className='space-x-3 flex items-center'>
            
                <div>
                <input onChange={(e)=>{setLength(e.target.value)}} type='range' min={6} max={40} className='cursor-pointer' /> <span className='text-gray-600 font-medium'>Length ({length})</span> 
                </div>
                <div>
                <input defaultChecked={number} onChange={()=>{
                    setNumber((prev)=> !prev)
                }} type='checkbox'/> <span className='text-gray-600 font-medium'>Numbers</span> 
                </div>
                <div>
                <input defaultChecked={char} onChange={()=>{
                    setChar((prev)=>!prev)
                }} type='checkbox'/> <span className='text-gray-600 font-medium'>Characters</span> 
                </div>
            
            </div>

            </div>

      </div>

    </div>
  )
}

export default Section1
