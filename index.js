const express = require("express");
const urlRoute = require("./routes/url");
const {connectToMongoDB} = require('./connect');
const app = express();
const port = 3000;

app.use("/url",urlRoute);

connectToMongoDB('mongodb://127.0.0.1:27017/short-url')
.then(()=>console.log("Mongodb connected"))
.catch((err) => console.log("Mongo error",err));

app.listen(port,()=> console.log(`Server started at port ${port}`));