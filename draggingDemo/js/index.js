$(document).ready(function (){
    //公告
    $("#inform-content").marquee();

    /**
     * 鼠标移到的颜色
     */
    $("table tr").mouseover(function(){
        $(this).find("td").addClass("mouse-color");
    });

    /**
     * 鼠标移出的颜色
     */
    $("table tr").mouseout(function(){
        $(this).find("td").removeClass("mouse-color");
    });

    /**
     * 鼠标点击的颜色
     */
    $("table tr td").click(function(){
        $("table tr td").removeClass("click-color");
        $(this).addClass("click-color").siblings("td").addClass("click-color");
    });

});





