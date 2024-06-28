$(document).ready(function(){
    let isX = false
    $(".cuadrado").on("click",function(e){
        let id=$(e.target).prop("id")

        if($("#"+id).html()!=""){
            alert("Ya esta ocupado")
            return
        }

        if (isX){
            $("#"+id).html("X")
        }else{
            $("#"+id).html("O")
        }
        isX =! isX
    })
})

