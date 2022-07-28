const mongoose = require("mongoose")


const bookSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    }
},{
    timestamps:true
});

const Book = mongoose.model("Book",bookSchema);

module.exports = Book ;