$(document).ready(function() {
    var view_width = $(window).width();
    var view_height = $(window).height();
    var doc_width = $(document).width();

    var screen_width = 577;
    var joy_width    = 150;
    var con_width    = 13;

    var s_f; //Total alocatd space
    var s_t; //Space taken up by joycon

    s_f = (doc_width - screen_width)/2;
    s_t = joy_width - con_width;

    var dist = ((s_f - s_t)/doc_width)*100;

    $('#left').css("marginLeft", dist + "%");
    $('#right').css("marginRight", dist + "%");

    $('figure img').css("marginLeft", -1 * ((1920 - view_width)/2));

    $(window).scroll(function() {
        if($(document).scrollTop() >= 0.45*view_height) {
            $('#header').addClass('hold');
        }
        else {
            $('#header').removeClass('hold');
        }

        if($(document).scrollTop() >= 0.2*view_height) {
            $('#left').css("display", "block");
            $('#right').css("display", "block");
        }
        else {
            $('#left').css("display", "none");
            $('#right').css("display", "none");
        }

        if($(document).scrollTop() >= 1.4*view_height) {
            $('#screen').addClass('hold');
        }
        else {
            $('#screen').removeClass('hold');
        }

        if($(document).scrollTop() >= 2.4*view_height) {
            $('#left').css("display", "none");
            $('#right').css("display", "none");
            $('#screen').css("display", "none");
        }
        else {
            $('#left').css("display", "block");
            $('#right').css("display", "block");
            $('#screen').css("display", "block");
        }

        if($(document).scrollTop() >= view_height + 0.05*view_height) {
            $('#sub1').css("position", "fixed");
            $('#sub1').css("marginTop", "calc(-40vh + 41px)");
        }
        else {
            $('#sub1').css("position", "absolute");
            $('#sub1').css("marginTop", "calc(65vh + 39px)");
        }

        if($(document).scrollTop() >= (view_height*1.2) + ((120 + 2)*3) + 39 - 45) {
            $('#sub2').css("position", "fixed");
            $('#sub2').css("marginTop", "calc(-40vh + 41px)");
        }
        else {
            $('#sub2').css("position", "absolute");
            $('#sub2').css("marginTop", "calc(80vh + ((120 + 2)*3px) + 39px)");
        }
    });
});
var quan= 300;
function add() {
    quan+= 300;
    document.getElementById('quan').innerHTML = "$" + quan;
}

function sub() {
    quan-= 300;
    if (quan<=300) {
        quan=300;
    }
    document.getElementById('quan').innerHTML = "$" + quan;
}