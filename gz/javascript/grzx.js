$(function(){
    //选项卡
    $(".navbar .navitem").hover(function(){
        var index1=$(this).index(".navitem");
        $(".navlist").each(function(){
            var index2=$(this).index(".navlist");
            if(index1==index2){
                //$(this).show();
                $(this).addClass("xxphone");
            }else{
                //$(this).hide();
                $(this).removeClass("xxphone");
            }
        });
    },function(){
        //$(".navlist").hide();
        $(".navlist").removeClass("xxphone");
    });

    /*点击事件：左边边框变绿色，字体变绿色*/
   /* $(".baise").click(function () {
        $(this).css({"background":"#cccccc","border-left":"1px solid #82C92F"})
        $(this.lastChild).css({"color":"#82C92F"})
    })*/

    $(".banner_right_nr li a").hover(function () {
        $(this).css({"color":"#82C92F"})
    },function () {
        $(this).css({"color":"#666"})
    })



   /* 点击后显示*/
    $(".dj").click(function() {
        $(".banner_right_kf").css({"display":"none"})
    })
    /*边框变色*/
    $(".sx").hover(function () {
        $(this).css({"border":"1px solid #23AC38"})
        $(this.firstChild).css({"color":"#23AC38"})
    },function () {
        $(this).css({"border":"1px solid #ccc"})
        $(this.firstChild).css({"color":"#666"})
    })

    /*左边订单优惠券点击事件*/
   $(".baise").click(function () {
       $(this).css({"border-left":"1px solid #82C92F"})
       $(this).find(".banner_right").show();
       $(this).siblings().find(".banner_right").hide();
   });



})