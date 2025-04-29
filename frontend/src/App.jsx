import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SingleBook from './pages/SingleBook'
import Navbar from './Components/Navbar.jsx'
import AddBook from './pages/AddBook.jsx'



function App() {

  return (
    <>
    <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/book/:id' element={<SingleBook/>}/>
        <Route path='/addBooks' element={<AddBook/>}/>
     </Routes>
    </>
  )
}

export default App
