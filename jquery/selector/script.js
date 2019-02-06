$(document).ready(function(){
    $("#sembunyi_semua").click(function(){
        $("*").hide();
    });
    $("#sembunyi_ini").click(function(){
        $(this).hide();
    });
    $("button.penting").click(function(){
        $("p.penting").hide();
    });
    $("button#pertama").click(function(){
        $("p:first").hide();
    });
    
})