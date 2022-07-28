const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const connectDatabase = require("./mongodb/connection");
connectDatabase();

// Middlewares
app.use(express.json())

// import routes 
const bookRoute = require("./routes/bookRoute")

// ROUTES
app.use("/books", bookRoute);



app.listen(process.env.PORT, () => {
    console.log("server is running on port no " + process.env.PORT)
})