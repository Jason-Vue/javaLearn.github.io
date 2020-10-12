$(function(){
	$("#logphone").change(function(){
		var data=$("#logphone").val();
		if(!data.match(/^1[3578]\d{9}$/)&&!data.match(/^1[4][07]\d{8}$/)){
			$(".phonetigs").text("您输入的电话号码格式不正确");
			return false;
		}else{
			$(".phonetigs").text("");
			return true;
		}
	});
	$("#logpw").change(function(){
		var data=$("#logpw").val();
		if(data.length<8||data.length>20){
			$(".pwtigs").text("您输入的密码格式不正确");
			return false;
		}else{
			var index=0;
			if(data.search(/\d/)!=-1){
		        index++;
		    }
		    if(data.search(/[a-zA-Z]/)!=-1){
		        index++;
		    }
		    if(data.search(/\W/)!=-1||data.search(/_/)!=-1){
		        index++;
		    }
			if(index==1){
				$(".pwtigs").text("密码强度较弱");
			}else if(index==2){
		       	$(".pwtigs").text("密码强度中等");
			}else {
		       	$(".pwtigs").text("密码强度较强");
			} 
			return true;
		}
	});
});