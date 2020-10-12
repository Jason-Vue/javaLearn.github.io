$(function(){
    $(".gr").click(function() {
        $(this).css({"border": "1px solid #409F37"});
        $("dd").css({"color":" #409F37"});
        $(this.nextSibling).css({"border": "1px solid #409F37"});
        $(".dw dd").css({"color":" #409F37"});
    })

    $(".dw").click(function() {
        $(this).css({"border": "1px solid #409F37"});
        $("dd").css({"color":" #409F37"})
    })








})