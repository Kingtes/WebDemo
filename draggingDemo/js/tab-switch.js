//tab页切换k线图
$("#layout-chart .tab-hd-con").eq(0).addClass("current");
//$("#layout-chart .tab-bd-con:gt(0)").hide();
$("#layout-chart .tab-bd-con").hide();
$("#layout-chart .tab-bd-con:eq(0)").show();
$("#layout-chart span").click(function(){//mouseover 改为 click 将变成点击后才显示，mouseover是滑过就显示
    $(this).addClass("current").siblings("span").removeClass("current");
    $("#layout-chart .tab-bd-con:eq("+$(this).index()+")").show().siblings(".tab-bd-con").hide().addClass("current");

});

//tab页切换五档行情
$("#layout-hq .tab-hd-con").eq(0).addClass("current");
//$("#layout-chart .tab-bd-con:gt(0)").hide();
$("#layout-hq .tab-bd-con").hide();
$("#layout-hq .tab-bd-con:eq(0)").show();
$("#layout-hq span").click(function(){//mouseover 改为 click 将变成点击后才显示，mouseover是滑过就显示
    $(this).addClass("current").siblings("span").removeClass("current");
    $("#layout-hq .tab-bd-con:eq("+$(this).index()+")").show().siblings(".tab-bd-con").hide().addClass("current");

});

//tab页切换指价交易
$("#layout-trade .tab-hd-con").eq(0).addClass("current");
//$("#layout-chart .tab-bd-con:gt(0)").hide();
$("#layout-trade .tab-bd-con").hide();
$("#layout-trade .tab-bd-con:eq(0)").show();
$("#layout-trade span").click(function(){//mouseover 改为 click 将变成点击后才显示，mouseover是滑过就显示
    $(this).addClass("current").siblings("span").removeClass("current");
    $("#layout-trade .tab-bd-con:eq("+$(this).index()+")").show().siblings(".tab-bd-con").hide().addClass("current");

});

//tab页切换当日委托
$("#layout-curday .tab-hd-con").eq(0).addClass("current");
//$("#layout-chart .tab-bd-con:gt(0)").hide();
$("#layout-curday .tab-bd-con").hide();
$("#layout-curday .tab-bd-con:eq(0)").show();
$("#layout-curday span").click(function(){//mouseover 改为 click 将变成点击后才显示，mouseover是滑过就显示
    $(this).addClass("current").siblings("span").removeClass("current");
    $("#layout-curday .tab-bd-con:eq("+$(this).index()+")").show().siblings(".tab-bd-con").hide().addClass("current");

});

//资金情况
$("#layout-money .tab-bd-con:eq(0)").show();
//产品信息
$("#layout-product .tab-bd-con:eq(0)").show();