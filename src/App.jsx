import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        {/* <Route path='/login' element={<Login/>}/> */}

        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App