$(function () {
    /*全选*/
    $(".father").click(function () {
        //var boxval=$(this).prop("checked");
        $(".son").prop('checked',$(this).prop("checked"));
    });
    $(".son").click(function () {
        var bool=true;
        $(".son").each(function () {
            if(!$(this).prop("checked")){
                bool=false;
                return false;
            }
        });
        $(".father").prop("checked",bool);
        /*  if(bool){
              $(".father").prop('checked',true);
          }else {
              $(".father").prop('checked',false);
          }*/
    });




})