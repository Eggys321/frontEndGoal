import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault()
   const req =  await fetch('http://localhost:4040/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: await JSON.stringify({email, password }),
    })
            const data = await req.json()

     if (data.status == 'ok') {
       navigate('/dashboard')
     } else {
       alert('Wrong Email or Password')
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
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type='submit' />
      </form>
    </div>
  )
}

export default Login
