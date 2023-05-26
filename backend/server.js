const express = require("express")
const dotenv = require("dotenv")
const {chats} = require("./data/data.js")

dotenv.config()
const app = express();

app.get("/",(req,res) =>{
    res.send("api is running")
});

app.get("/api/chat",(req,res)=>{
    res.send(chats)
})

app.get("/api/chat:id",(req,res)=>{
    const singleChat = chats.find((c)=>c._id===req.params.id);
    res.send(singleChat)
})


app.listen(5000,console.log("Server started on port 5000 :)"))