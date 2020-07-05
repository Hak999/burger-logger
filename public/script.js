$("#addburger").on("click",function(){
    var newburger={
        burger_name:$("#burgerName").val()
    }
    $.ajax({
        url:"/api/burgers",
        method:"POST",
        data:newburger
    }).then(function(data){
        location.reload()
    })
})