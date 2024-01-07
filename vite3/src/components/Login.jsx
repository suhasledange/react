import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {

    const [userName,setUserName] = useState("")
    const [Password,setPassword] = useState("")

    const {setUser} = useContext(UserContext);

    const handlSubmit=(e)=>{
            e.preventDefault()
            setUser({userName,Password})
    }

    return (
    <div>
      <h2>Login</h2>
      <input value={userName} onChange={(e)=>setUserName(e.target.value)} type='text' placeholder='username' />
      <input value={Password} onChange={(e)=>setPassword(e.target.value)} type='text' placeholder='password' />
    <button onClick={handlSubmit}>Submit</button>
    </div>
  )
}

export default Login
