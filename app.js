require('dotenv/config');

const express  = require('express');
const mongoose = require('mongoose');
var cors = require('cors');

const Post = require("./model/post"); 

const app = express();
app.use(express.json());
app.use(cors());

//Mongo conn
mongoose.connect(
    process.env.DB_CONN_STR,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (req, res) => {
        console.log("Connected to the database")    
    }
)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Listening to ${PORT}`);
})

//Requests
app.get("/posts", async (req, res) => {
    try {
        const docs = await Post.find();
        //docs.map(doc => doc.name).sort();
        res.send(docs)
    } catch(err) {
        res.send({ message: err})
    }
});

app.post("/create_post",  async (req, res) => {
    try {
        const myPost = new Post(req.body)
        await myPost.save()
        res.send(myPost)
    } catch(err) {
        res.send({ message: err})
    }
});