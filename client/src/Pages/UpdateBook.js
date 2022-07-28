import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

const UpdateBook = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")

  console.log(param)
  useEffect(() => {
    const SingleBook = async () => {
      const response = await fetch(`/books/${param.id}`)
      const data = await response.json();
      setName(data.name);
      setDescription(data.description)
      setPrice(data.price)
      setImage(data.image)
      console.log(data)
    }
    SingleBook();
  }, [param.id])


  const UpdateBook = async (e) => {
    e.preventDefault();
    const response = await fetch(`/books/update/${param.id}`, {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        description,
        price,
        image
      })
    })

    const data = await response.json();
    if(data){
      navigate("/")
    }
  }

  return (
    <>

      <div className="container">
        <h3>Update Book</h3>
        <form>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Book Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text" class="form-control" id="exampleInputPassword1" />
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Description</label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text" class="form-control" id="exampleInputPassword1" />
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Price</label>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="text" class="form-control" id="exampleInputPassword1" />
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Image Url</label>
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              type="text" class="form-control" id="exampleInputPassword1" />
          </div>

          <button
           onClick={UpdateBook}
            type="submit" class="btn btn-primary">Update</button>
        </form>
      </div>



    </>
  )
}

export default UpdateBook