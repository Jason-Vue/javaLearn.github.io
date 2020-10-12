$(function(){
	$("#logname").change(function(){
		var data=$("#logname").val();
		if(data.length<=0){
			$("#logtigs").text("请输入您的账号");
		}
	});
	$("#pw").change(function(){
		var data=$("#pw").val();
		if(data.length<=0){
			$("#logtigs").text("请输入您的密码");
		}
	});
});