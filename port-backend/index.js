
const dotenv = require("dotenv");

const result = dotenv.config( {path: "./port.env"});

// console.log(result);
// console.log("MONGO_URI =", process.env.MONGO_URI);

const mongoose  = require('mongoose')
 const express = require('express')
 const cors = require('cors')


const contactRoute = require("./routes/contactRoute")

const app = express()
app.use(cors())
app.use(express.json())


app.use("/api/contact" , contactRoute)
app.get("/", (req, res) => {
  res.send("Backend Working");
});

require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Database Connected"))
  .catch(err => console.log(err));


app.listen(5000 , ()=>{
    console.log("Server Running on port 5000")
})