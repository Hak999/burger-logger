var orm=require("../config/orm")

var burger={
    selectAll:function(callBackController){
       orm.selectAll("burgers",function(data){
           callBackController(data)
       })
    },
    insertOne:function(columnName,value,callBackController){
        orm.insertOne("burgers",columnName,value,function(data){
            callBackController(data)
        })
    }
}

module.exports=burger