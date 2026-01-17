// Import all the dependencies here bcz we need to connect our data base in index.js
const express = require("express");
const mongoose = require("mongoose");

// if we have have in env then run on it otherewise run on 3000 port
const PORT = process.env.PORT || 3000;
// Initilizing express
const app = express();

//  express.json middlewhere
// make sure whatever req commming to our server get pass in json formate
// after listen to our app start a server

const DB = "mongodb+srv://junaid:Junaidm0997@cluster0.xxwz6kj.mongodb.net/?appName=Cluster0"

mongoose.connect(DB).then(() => {
    console.log("Connection Successflu")
}).

catch((e) => {
console.log(e);
});

//  IP = "0.0.0.0" which mean accessable in  enywhere, and when this is true than run callBack fun
app.listen(PORT , "0.0.0.0", ()=> {
console.log(`connected at port ${PORT}`);
});