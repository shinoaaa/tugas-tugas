import { useState, useEffect } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from './pages/Logiin'
import DetailUser from './pages/DetailUser'
import UserList from './pages/UserList'
import ProtectedRoute from './component/ProtectedRoute'
import LandingPage from './pages/landing-page/Landing-Page'
import { Toaster } from "sonner";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/detail/:id' element={<ProtectedRoute><DetailUser/></ProtectedRoute>}/>
        <Route path='/user' element={<ProtectedRoute><UserList/></ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
    <Toaster richColors position="top-right" />
    </>
  )
}


export default App
