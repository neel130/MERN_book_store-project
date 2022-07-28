const express = require("express");
const { GetAllBooks, AddBook, getSingleBook, updateBook, deleteBook } = require("../controllers/BookController");
const router = express.Router();


// ROUTES
router.get("/", GetAllBooks);
router.post("/add", AddBook);
router.get("/:id", getSingleBook);
router.put("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);



module.exports = router