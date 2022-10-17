import logo from './logo.svg'
import './App.css'
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route element={<Register/>} path='/'/>
          <Route element={<Login/>} path='/Login'/>
          <Route element={<Dashboard/>} path='/Dashboard'/>
        </Routes>
      </Router>
      
    
    </div>
  )
}

export default App
