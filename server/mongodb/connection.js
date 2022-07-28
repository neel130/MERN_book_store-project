const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    mongoose.connection.once("open", () => {
        console.log("connected to mongodb")
    })

    mongoose.connection.on("error", (error) => {
        console.log("error :" + error)
    })
}


module.exports = connectDatabase