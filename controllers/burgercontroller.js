var burger=require("../models/burger")

var router = require("express").Router()

router.get("/",function(req,res){
      burger.selectAll(function(data){
       console.log(data)
        res.render("index",{
            BurgerData:data
        })
      })
})

router.post("/api/burgers",function(req,res){
    burger.insertOne("burger_name",req.body.burger_name,function(data){
        res.json(data)
    })
})



module.exports=router 
