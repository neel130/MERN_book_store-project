import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const Book = ({book}) => {


   const deleteBook = async()=>{
    const response = await fetch(`/books/delete/${book._id}`,{
        method:"DELETE"
    });
    const data = await response.json();
    console.log(data)
    window.location.reload();
   }


    return (
        <>
            <div className="container">
                <div class="card" style={{ width: "18rem" }}>
                    <img src={book.image} alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{book.name}</h5>
                        <p class="card-text">{book.description}</p>
                        <h6>Price : {book.price}</h6>
                        <div><Link to={`/update/${book._id}`} > <a  class="btn btn-primary">Update</a>  </Link> 
                         <a onClick={deleteBook} style={{marginLeft:"60px"}}  class="btn btn-danger">Delete</a></div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Book