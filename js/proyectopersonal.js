$(document).ready(function(){


$("#trabajo").hide();
$("#proactividad").hide();
$("#capacidad").hide();
$("#responsabilidad").hide();
$("#relacion").hide();

    

    $("#trabajo1").mouseenter(function(){
        $("#trabajo").show();
        $("#trabajo").css("transition", "0.3s");
    });
    $("#proactividad2").mouseenter(function(){
        $("#proactividad").show();
        $("#proactividad").css("transition", "0.3s");
    });
    $("#capacidad2").mouseenter(function(){
         $("#capacidad").show();
         $("#capacidad").css("transition", "0.3s");
    });
    $("#responsabilidad1").mouseenter(function(){
        $("#responsabilidad").show();
        $("#responsabilidad").css("transition", "0.3s");
    });

    $("#relacion1").mouseenter(function(){
        $("#relacion").show();
        $("#relacion").css("transition", "0.3s");
    });

  $("#trabajo1").mouseleave(function(){
        $("#trabajo").hide();
        $("#trabajo").css("transition", "0.3s");
    });
    $("#proactividad2").mouseleave(function(){
        $("#proactividad").hide();
        $("#proactividad").css("transition", "0.3s");
    });
    $("#capacidad2").mouseleave(function(){
         $("#capacidad").hide();
         $("#capacidad").css("transition", "0.3s");
    });
    $("#responsabilidad1").mouseleave(function(){
        $("#responsabilidad").hide();
        $("#responsabilidad").css("transition", "0.3s");
    });
    $("#relacion1").mouseleave(function(){
        $("#relacion").hide();
        $("#relacion").css("transition", "0.3s");
    });
});