$(function(){
    $('.side-toolbar').mouseout(function(){
        $(".side-toolbar-box").removeClass("show");
    });
    $('.side-toolbar').mouseover(function(){
        $(".side-toolbar-box").addClass("show");
    });
});