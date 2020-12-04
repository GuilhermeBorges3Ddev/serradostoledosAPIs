require('dotenv').config()

const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const express = require("express");
const router = express.Router(); 

const app = express();

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
var DenunciationsAndFeedbacksSchema = new Schema({    
    contentType: String,  
    message: String  
}, {collection: 'DenunciationsAndFeedbacks'});  

router.get('/allPosts', function(req, res, next) {  
    DenunciationsAndFeedbacksSchema.find({}, function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
    })
});  
     
/*router.post('/new', function(req, res, next) {  
    var item = {  
      nome: req.body.nome,  
      email: req.body.email,  
      telefone: req.body.telefone  
    };
});*/  

module.exports = router;