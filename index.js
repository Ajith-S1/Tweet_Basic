//jshint esVersion:6
const express = require("express");

var app =  express();
app.use(express.static("public"));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/".function(req,res){
 res.send("Testing !");
});

app.listen(3000,function(){
  console.log("server Up");
});
