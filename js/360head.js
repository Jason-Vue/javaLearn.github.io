/**
 * Created by Administrator on 2018/2/1/001.
 */
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
})