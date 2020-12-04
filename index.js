require('dotenv').config()
const mongoose = require('mongoose')
//const express = require("express");
//const app = express();

//const importData = require("./data.json");
//let port  = process.env.PORT || 3000;


const DB_USER = process.env.DB_USER;
const DB_NAME = process.env.DB_NAME;
const PASSWORD = process.env.PASSWORD;

console.log(DB_NAME + " " + DB_USER)

const url = `mongodb+srv://${DB_USER}:${PASSWORD}@cluster0.dkrcl.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
  })
  .then(() => {
    console.log('Connected to database !!');
  })
  .catch((err)=>{
    console.log('Connection failed !!'+ err.message);
  });

/*app.get("/", (req,res) => {
    res.send("Hello Borges!!")
})

app.get("/players", (req,res) => {
    res.send(importData);
})

app.listen(port, () => {
    console.log(`API listening on port http://localhost:${port}`)
})*/