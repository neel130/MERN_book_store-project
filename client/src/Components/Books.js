import React,{useState,useEffect,useRef} from 'react'
import Book from './Book'

const Books = () => {
  const [book,setBook] =useState([])

  useEffect(()=>{
    const getAllBooks = async ()=>{
      const response = await fetch("/books/");
      const data = await response.json();
      setBook(data)
      console.log(data)
    }

    getAllBooks();
  },[])

  return (
    <div style={{display:"flex",marginTop:"30px"}} className='Books-container'>
      {
        book.map((elem)=>{
          return  <Book book={elem} />
        })
      }
  
       
    </div>
  )
}

export default Books