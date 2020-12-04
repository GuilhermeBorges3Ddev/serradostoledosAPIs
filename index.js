require('dotenv').config()

const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const express = require("express");

const app = express();
app.use(express.json()); // Make sure it comes back as json

const DB_USER = process.env.DB_USER;
const DB_NAME = process.env.DB_NAME;
const PASSWORD = process.env.PASSWORD;

const url = `mongodb+srv://${DB_USER}:${PASSWORD}@cluster0.dkrcl.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

//Connection area
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

//Defining the model and the teo necessary queries
let DenunciationsAndFeedbacksSchema = new Schema({    
    contentType: String,  
    message: String  
}, {collection: 'DenunciationsAndFeedbacks'});  

app.get('/', async(req, res, next) {  
    const denunciationsAndFeedbacks = await DenunciationsAndFeedbacksSchema.find({});
    try {
        res.send(denunciationsAndFeedbacks);
    } catch (err) {
        res.status(500).send(err);
    }
});  
    
/*app.post('/new', function(req, res, next) {  
    var item = {  
      nome: req.body.nome,  
      email: req.body.email,  
      telefone: req.body.telefone  
    };
});*/  

module.exports = app;