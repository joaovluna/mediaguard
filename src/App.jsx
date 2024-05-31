import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './componentes/NavBar/Navbar'
import LoginSignUp from './Pages/LoginSignUp'
import Home from './Home'
import Login from './Pages/Login'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<LoginSignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
