
const express = require("express");
const app = express(); 
require("dotenv").config(); 
const cookieParser = require('cookie-parser');
const cors = require("cors");

//middleware
app.use(express.json()); 
app.use(cookieParser()); 
app.use(cors());

require("./config/Database").connect();

// route la import kra 
const userRoute = require("./route/User");
const producrRoute = require("./route/ProductRoute")

//  route la Mount kele 
app.use("/api/v1",userRoute);
app.use("/api/v1/product",producrRoute);


const PORT = process.env.PORT;


app.get("/", (req,res)=>{
  //res.send(`<h1> This is Home Page  </h1>`)
   return res.json({
     success:true,
     message:"Your server is Running  "
   })
});

app.listen(PORT, () => {
 console.log(`App is Running on Port ${PORT}`);
});

