$("#transfer_modal .modal_tab").hide();
$("#transfer_modal #span_o").click(function(){
    $("#transfer_modal .modal_tab").hide();
    $('#transfer_modal #span_o button').addClass("modal_red")
    $(this).siblings().children().removeClass("modal_current");
    $(this).siblings("#transfer_modal #span_t").children().addClass("modal_act");

});
$("#transfer_modal #span_t").click(function(){
    $("#transfer_modal .modal_tab").show();
    $('#transfer_modal #span_t button').addClass("modal_current");
    $(this).siblings().children().removeClass("modal_red");
    $(this).siblings("#transfer_modal #span_o").children().addClass("modal_act");

});