var connection=require("./connection")

var orm = {
selectAll:function(table,callBackModel){
 var statement =    connection.query("select * from ??",table,function(err,data){
      console.log(data)
        callBackModel(data)
    })

    console.log(statement.sql)
} ,

insertOne:function(table,columnName,value,callBackModel){
   connection.query("insert into ?? (??) values(?)",[table,columnName,value],function(err,data){
       callBackModel(data)
   })
}
}




module.exports=orm