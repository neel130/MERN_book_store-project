const Book = require("../models/BookModel")



// GET All BOOKS 
exports.GetAllBooks = async (req, res) => {
    try {
        const data = await Book.find();
        return res.status(200).json(data);
    } catch (error) {
        console.log("error :" + error)
    }
}


// ADD BOOK 
exports.AddBook = async (req, res) => {
    const { name, description, price, image } = req.body
    try {
        if (!name || !description || !price || !image) {
            return res.status(406).json({ error: "all fields required" })
        }
        const data = await Book.create({
            name,
            description,
            price,
            image
        })

        return res.status(201).json(data)

    } catch (error) {
        console.log("error :" + error)
    }
}




// GET SINGLE BOOK 
exports.getSingleBook = async (req, res) => {
    const id = req.params.id
    try {
        if (!id) {
            return res.status(400).json({ error: "no id found" })
        }
        const data = await Book.findById(id);
        return res.status(200).json(data)

    } catch (error) {
        console.log("error :", error)
    }
}



// UPDATE BOOK 
exports.updateBook = async (req,res) =>{
    const id = req.params.id
    const {name,description,price} = req.body
    try {
        const data = await Book.findByIdAndUpdate(id,{
            $set:{
               name,
               description,
               price
            }
        },{
            new:true
        })
          
    return res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}



// DELETE BOOK 
exports.deleteBook = async (req,res) =>{
    const id = req.params.id;
    try {
        const data = await Book.findByIdAndDelete(id);
        return res.status(200).json(data)
    } catch (error) {
        console.log("error :",error)
    }
}