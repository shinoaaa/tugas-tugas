import { useState, useEffect } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import axios from 'axios'
import Login from './pages/Logiin'
import DetailUser from './pages/DetailUser'
import UserList from './pages/UserList'
import ProtectedRoute from './component/ProtectedRoute'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/detail/:id' element={<ProtectedRoute><DetailUser/></ProtectedRoute>}/>
        <Route path='/user' element={<ProtectedRoute><UserList/></ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  )
}


export default App
