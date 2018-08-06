$(document).ready(function(){
//----- variables de los contenidos principales   
    $("#ContenidoSobremi").hide();   
    $("#ContenidoProyecto").hide();
    $("#ContenidoTrabajos").hide(); 
    $("#ContenidoContacto").hide();  
// fin de variables de los contenidos principales
// ----- variables  de preguntas sobre mi
    $("#Rfortalezas").hide();
    $("#Rdebilidades").hide();
    $("#Rcarrera").hide();
    $("#Rfuturo").hide();
    $("#Rteamwork").hide();
    $("#Rrol").hide();
    //----  fin de variables de  preguntas sobre mi

    //------ variables de  habilidades
    $("#trabajo").hide();
    $("#proactividad").hide();
    $("#capacidad").hide();
    $("#responsabilidad").hide();
    $("#relacion").hide();
// -------- fin de variables de habilidades


    

    $("#trabajo1").mouseenter(function(){
        $("#trabajo").show();
        $("#trabajo").css("transition", "0.7s");
    });
    $("#proactividad2").mouseenter(function(){
        $("#proactividad").show();
        $("#proactividad").css("transition", "0.7s");
    });
    $("#capacidad2").mouseenter(function(){
         $("#capacidad").show();
         $("#capacidad").css("transition", "0.7s");
    });
    $("#responsabilidad1").mouseenter(function(){
        $("#responsabilidad").show();
        $("#responsabilidad").css("transition", "0.7s");
    });

    $("#relacion1").mouseenter(function(){
        $("#relacion").show();
        $("#relacion").css("transition", "0.7s");
    });

  $("#trabajo1").mouseleave(function(){
        $("#trabajo").hide();
        $("#trabajo").css("transition", "0.7s");
    });
    $("#proactividad2").mouseleave(function(){
        $("#proactividad").hide();
        $("#proactividad").css("transition", "0.7s");
    });
    $("#capacidad2").mouseleave(function(){
         $("#capacidad").hide();
         $("#capacidad").css("transition", "0.7s");
    });
    $("#responsabilidad1").mouseleave(function(){
        $("#responsabilidad").hide();
        $("#responsabilidad").css("transition", "0.7s");
    });
    $("#relacion1").mouseleave(function(){
        $("#relacion").hide();
        $("#relacion").css("transition", "0.7s");
    });

// oculador de preguntas en sobre mi
    $("#Qfortalezas").click(function(){
        $("#Rfortalezas").toggle(500);       
    });
    $("#Qdebilidades").click(function(){
        $("#Rdebilidades").toggle(500);
    });
    $("#Qcarrera").click(function(){
        $("#Rcarrera").toggle(500);     
    });
    $("#Qfuturo").click(function(){
        $("#Rfuturo").toggle(500);       
    });
    $("#Qteamwork").click(function(){
        $("#Rteamwork").toggle(500);       
    });
    $("#Qrol").click(function(){
        $("#Rrol").toggle(500);       
    });

// ocultador de contedios principales

   $("#sobremi").click(function(){
        $("#ContenidoSobremi").toggle(10);       
    });
    $("#proyecto").click(function(){
        $("#ContenidoProyecto").toggle(10);
    });
    $("#Trabajos").click(function(){
        $("#ContenidoTrabajos").toggle(10);     
    });
    $("#Contacto").click(function(){
        $("#ContenidoContacto").toggle(10);       
    });






});