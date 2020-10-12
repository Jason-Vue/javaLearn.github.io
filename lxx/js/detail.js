$(function(){
	 //选项卡
    $(".navbar .topnth a").hover(function(){
        var index1=$(this).index(".topnth");
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
    //放大镜效果
		$("#box").mousemove(function(event){
			var x=event.pageX-129;
			var y=event.pageY-238;

			if(y>145&&y<190){
				$("#smallbox").css({marginTop:y-145+'px'});
				$("#large:img").css({marginTop:-32/19*(y-145)+'px'});
			}
			if(x>145&&x<190){
				$("#smallbox").css({marginLeft:x-145+'px'});
				$("#large:img").css({marginLeft:-32/19*(x-145)+'px'});
			}
			if((x>0&&x<480)&&(y>0&&y<480)){
				$("#smallbox").css({display:"block",cursor:"move"});
				$("#large").css({display:"block"});
			}
		})
		$("#box").mouseout(function(){
			$("#smallbox").css({display:"none"});
			$("#large").css({display:"none"});
		})

	});