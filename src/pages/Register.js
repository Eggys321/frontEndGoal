import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const navigate = useNavigate()
    const handleRegister = async (e)=>{
        e.preventDefault()
        const req = await fetch('http://localhost:4040/api/register',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:await JSON.stringify({name,email,password})
        })
        const data = await req.json()
        if(data.status == 'ok'){
            navigate('./Login')
            
        }else{
            alert('Duplicate Email')
        }
        // console.log(name);
        // console.log(email);
        // console.log(password);
        // if(name || email || password){
        //     setName('')
        //     setEmail('')
        //     setPassword('')
        // }

    }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}  />
        <br />
        <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}  />
        <br />
        <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}  />
        <br />
        <input type="submit" />

      </form>
    </div>
  )
}

export default Register