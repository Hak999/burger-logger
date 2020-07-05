var express = require("express")
var port = process.env.PORT || 8000
var app = express()

app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())

var expresshandlebars = require("express-handlebars")

app.engine("handlebars",expresshandlebars({
    defaultLayout:"main"
}))
app.set("view engine","handlebars")

app.use(express.static("public"))

var burgerController=require("./controllers/burgercontroller")


app.use(burgerController)

app.listen(port,function(){
    console.log("app is listening http://localhost:"+port)
})