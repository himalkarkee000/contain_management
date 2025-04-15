import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Cards from '../Components/Cards'
import axios from 'axios'

const Home = () => {
  const [books,setBooks] = useState([])
  console.log(books)

  const fetchBooks = async()=>{
  try {
    const response= await axios.get('http://localhost:4000/api/book')
   
    setBooks(response.data.result)
    
  } catch (error) {
    console.log("Error fetching books",error)
    
  }
  }

  useEffect(()=>{
    fetchBooks()
  },[])

  return (
    <>
    <Navbar/>
    <div className='grid grid-cols-3 gap-4 justify-items-center'>
        {
          books.length >0 &&
          books.map((books,index)=>(
            <div className='w-full  max-w-[450px]'>
              <Cards books={books} key={index}/>
            </div>
          ))
        }
      </div>

    </>
  )
}

export default Home
