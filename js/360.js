/**
 * Created by Administrator on 2018/1/23/023.
 */
$(function(){
    //banner选项卡
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
       /* var index=$(".navbar li").index(this);
        //console.log(index);
        //$(this).addClass("kebi").siblings().removeClass("kebi");
        //var indexx=$(".navlist ").index();
        //console.log(indexx);
        //$(".bannerselect div ").eq(index).addClass("xxphone").siblings().removeClass("xxphone");
         var n=$(".navlist").index();
        console.log(n);
        if(n==index){
            $(".navlist").eq(n).addClass("xxphone");
        }*/

    },function(){
        //$(".navlist").hide();
        $(".navlist").removeClass("xxphone");
    });
    //banner里的二级菜单
    $(".lunbo-xuanxiangka .second-list").hover(function(){
         var index=$(this).index(".second-list");
        //console.log(index);
        $(".samepage").each(function(){
            var indexx=$(this).index(".samepage");
            //console.log(indexx);
            if(index==indexx){
                 $(this).show();
            }else{
                 $(this).hide();
            }
        })

    },function(){
           $(".samepage").hide();
    })



   //鼠标移上去改变边框样式
   /* $(".phone-right li").hover(function(){
        var indexyy=$(this).index(".phone-right li");
        //console.log(indexyy);
        $(".phone-right li").eq(indexyy).addClass("boxclass").siblings().removeClass("boxclass");
              //$(".mapx li").css("box-shadow","0 0 5px black");
    },function(){
        //$(".mapx li").css("box-shadow","0 0 0px white");
        $(".phone-right li").eq(indexyy).removeClass("boxclass");
    })*/
    $(".phone-right li").mouseenter(function(){
        var indexyy=$(this).index(".phone-right li");
        $(".phone-right li").eq(indexyy).addClass("boxclass").siblings().removeClass("boxclass");
        //$(".phone-right li").find("img").animate({marginTop:30},1000);
        //return false;
    })
    $(".phone-right li").mouseleave(function(){
        var indexyy=$(this).index(".phone-right li");
        $(".phone-right li").eq(indexyy).removeClass("boxclass");
        //$(".phone-right div").index(indexyy).find("img").animate({marginTop:10},1000);
        //return false;
    })


    //左边悬浮框楼层跳跃代码
      //左边悬浮隐藏与显示
        $(window).scroll(function(){
            t = $(document).scrollTop();
            if(t>750){
                $('#tbox').show(2000);
            }else{
                $('#tbox').hide(2000);
            }
             if(t > 50){
             $('#gotop').fadeIn(3000);
             }else{
             $('#gotop').fadeOut(3000);
             }
        });
        //回到顶部
        $('#gotop').click(function(){
            $('body,html').animate({
                    scrollTop: 0
                },800);//点击回到顶部按钮，缓懂回到顶部,数字越小越快
            return false;
        })
        //楼层跳跃
        $(".like .taoba a").click(function(event){
            var indexx=this.title;
            console.log(indexx);
            var id="#"+"index_"+index;
            console.log(id);
            $("html,body").animate({scrollTop:$(id).offset().top},1000);
        })

        //banner里的轮播图
        /*$(".lunboimg img").eq(1).animate({
            "margin-left":'-1350px'
        },2000);*/
        /*$("#box-ul li").click(function(){
            var liindex=$(this).index();
            var aa=$(this).parent().parent().parent().find(".lunboimg").find("img");
            var mleft=aa.eq(liindex).css("marginLeft").substring(0,$(this).css("marginLeft").indexOf("p")-1);
            alert(mleft);
                if(mleft==0){
                    len='-'+liindex*1350;
                    aa.eq(liindex).animate({
                        'marginLeft':len
                    },2000);
                }

                //alert($(this).css('marginLeft'));

        });*/






        var w=$(".lunboimg img:first-child").width();
        //console.log(w);
        var indexv=0;
        //右边滑动
        $("#right").click(function(){
            indexv++;
            if(indexv>$(".lunboimg img").length-1){
                indexv=0;
            }
            //console.log(indexv);
            $(".box-ul li").eq(indexv).addClass("active").siblings().removeClass("active");
            $(".lunboimg img:first-child").animate({marginLeft:-w},500,function(){
                $(this).css({marginLeft:0}).appendTo($(".lunboimg"));
            })
        });
        //左边滑动

        $("#left").click(function(){
            indexv--;
            if(indexv<0){
                indexv=4;
            }
            //console.log(indexv);
            $(".box-ul li").eq(indexv).addClass("active").siblings().removeClass("active");
            //把最后一张放到最前面
            $(".lunboimg img:last-child").css({marginLeft:-w}).prependTo($(".lunboimg"));
            $(".lunboimg img:first-child").animate({marginLeft:0},500);

        });
          //轮播图里的小圆圈点击





        //轮播定时器驱动左滑  实现图片自动轮播效果，即：添加定时器。代码如下：
        //定时器

                var timer=setInterval(function(){
                    indexv++;
                    if(indexv>$(".lunboimg img").length-1){
                        indexv=0;
                    }
                    console.log(indexv);
                    $(".box-ul li").eq(indexv).addClass("active").siblings().removeClass("active");
                    //var w=$(".lunboimg img").eq(0).width();
                    //console.log(w);
                            $(".lunboimg img:first-child").animate({marginLeft:-w},500,function(){
                                $(this).css({marginLeft:0}).appendTo($(".lunboimg"));
                            })
                 },3000);



    //步骤六：为最外层容器，添加鼠标移入移出事件，实现手动暂停自动轮播的效果。代码如下：

    $(".lunbo").hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval(function(){
            indexv++;
            if(indexv>$(".lunboimg img").length-1){
                indexv=0;
            }
            console.log(indexv);
            $(".box-ul li").eq(indexv).addClass("active").siblings().removeClass("active");
            var w=$(".lunboimg img").eq(0).width();
            //console.log(w);
            $(".lunboimg img:first-child").animate({marginLeft:-w},500,function(){
                $(this).css({marginLeft:0}).appendTo($(".lunboimg"));
            })
        },3000);
    });



          //顶部商城广告加载结束收上去
        $(".premally").animate({'height':0},3000,function(){
            $(this).hide(3000);
        });






})