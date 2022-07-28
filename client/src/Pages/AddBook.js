import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const AddBook = () => {
   const [name,setName] = useState("")
   const [description,setDescription] = useState("")
   const [price,setPrice] = useState("")
   const [image,setImage] = useState("")
   const navigate = useNavigate();


  
   const submitPost = async (e)=>{
    e.preventDefault();
    const response = await fetch("books/add",{
        method:"POST",
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            description,
            price,
            image
        })
    })

    const data = await response.json();
     navigate("/")
    console.log(data)
   }


  return (
    <>
    <div className="container">

          <form>
 
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Book Name</label>
    <input 
    onChange={(e)=>setName(e.target.value)}
    type="text" class="form-control" id="exampleInputPassword1"/>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Description</label>
    <input 
    onChange={(e)=>setDescription(e.target.value)}
    type="text" class="form-control" id="exampleInputPassword1"/>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Price</label>
    <input 
    onChange={(e)=>setPrice(e.target.value)}
    type="text" class="form-control" id="exampleInputPassword1"/>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Image Url</label>
    <input 
    onChange={(e)=>setImage(e.target.value)}
    type="text" class="form-control" id="exampleInputPassword1"/>
  </div>

  <button 
   onClick={submitPost}
  type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>


  
    
    </>
  )
}

export default AddBook