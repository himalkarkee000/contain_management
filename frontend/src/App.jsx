import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SingleBook from './pages/SingleBook'


function App() {

  return (
    <>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/single' element={<SingleBook/>}/>
     </Routes>
    </>
  )
}

export default App
