/**
 * Created by Administrator on 2018/1/31/031.
 */

//秒杀倒计时

setInterval(function(){
    var datax=new Date();
    var datey=new Date(2018,1,14,23,59,59);
    var datez=datey-datax;
    var hour=document.getElementById("hour");
    var minute=document.getElementById("minute");
    var second=document.getElementById("second");
        //console.log(datez);
    //var dayxx=Math.floor(datez/1000/3600/24);
    var hourxx=Math.floor(datez/1000/3600%24);
    var minutexx=Math.floor(datez/1000/60%60);
    var secondxx=Math.floor(datez/1000%60);
        hour.innerHTML=hourxx;
        minute.innerHTML=minutexx;
        second.innerHTML=secondxx;

    //var strdata="距离抢购还有";
    //strdata+=Math.floor(datez/1000/3600/24)+"天";
    //strdata+=Math.floor(datez/1000/3600%24)+"小时";
    //strdata+=Math.floor(datez/1000/60%60)+"分钟";
    //strdata+=Math.floor(datez/1000%60)+"秒";
//            document.write(strdata);
//    tips.innerHTML=strdata;

},1000);

//右边回到顶部出现代码
 window.onscroll=function(){
     var scrolltop=document.documentElement.scrollTop;
     var totopclass=document.getElementsByClassName("backtopxx")[0];
        //console.log(totopclass);
     //console.log(scrolltop);
     if(scrolltop>=740){
            totopclass.style.display="block";
     }else{
            totopclass.style.display="none";
     }
 }

//右边回到顶部代码
  function totop(){
      var scrolltopyy=document.documentElement.scrollTop;

      //alert(scrolltopyy);
      if(document.body.scrollTop){
          document.body.scrollTop=0;
      }else{
          document.documentElement.scrollTop=0;
      }
  }














