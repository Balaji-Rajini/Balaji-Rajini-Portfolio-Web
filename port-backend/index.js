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

mongoose.connect('mongodb://127.0.0.1:27017/Portfolio-Db').then(()=>{
    console.log("database connected")
}).catch(err=>{
    console.log(err , "connection error")
})



app.listen(5000 , ()=>{
    console.log("Server Running on port 5000")
})