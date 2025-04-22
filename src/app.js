const express= require("express");
const app= express();

app.use((req,res)=>{
    res.send("Hello from server this is chaitanya goud!!")
});

app.use("/hello",(req,res)=>{
    res.send("Hello from server!!")
});

app.use("/test",(req,res)=>{
    res.send("Hello from server!!")
});

app.listen(3000,()=>{
    console.log("Server is sucessfully listening on port 3000....");
});