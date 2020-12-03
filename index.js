const express = require("express");
const app = express();

const importData = require("./data.json");
let port  = process.env.PORT || 3000;

app.get("/", (req,res) => {
    res.send("Hello Borges!!")
})

app.get("/players", (req,res) => {
    res.send(importData);
})

app.listen(port, () => {
    console.log(`API listening on port http://localhost:${port}`)
})