const express =require("express")

const app =express();

app.use("/text",(req,res)=>{
    res.send("hello from user")
});

app.listen(7777,()=>{
    console.log("misson successful")
});

