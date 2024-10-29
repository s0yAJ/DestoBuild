 const express = require("express");
 const mongoose = require("mongoose");

 const app = express();
 const port = 5000;

 mongoose.connect('mongodb://mongo:27017/fullstack-app',{
    useNewUrlParser: true,
    useUnifiedTopology: true
 });

 app.get('/', (req, res) =>{
    res.send('Hello fron the backend!');
 });

 app.listen(port, () => {
    console.log(`Backend running on port ${port}`);
 });