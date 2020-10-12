/**
 * Created by Administrator on 2018/1/30/030.
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
    //图片加上border
    $(".picture dd").mouseenter(function(){
        var indexzz=$(this).index(".picture dd");
        //console.log(indexzz);
        $(".picture dd").eq(indexzz).addClass("pictureborder").siblings().removeClass("pictureborder");
     })
    $(".picture dd").mouseleave(function(){
        var indexzz=$(this).index(".picture dd");
        $(".picture dd").eq(indexzz).removeClass("pictureborder");
    })


    //搜索头收起和放下
    $(".morebutton").click(function(){
        $(".togglebox").slideToggle("slow");
        $(this).css({"background":"black"});
    })


})