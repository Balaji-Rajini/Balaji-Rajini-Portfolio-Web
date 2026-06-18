 const mongoose  = require('mongoose')
 const express = require('express')
 const cors = require('cors')
require("dotenv").config();


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