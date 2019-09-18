$(function(){
	$("#out").on("click",function(){
		$("#zoom").hide();
	})
	$(".image").on("click",function(){
		$("#zoom").fadeIn();
		$("#img_zoom").addClass("animated");
		var src = $(this).attr("src");
		$("#imaget").attr("src",src);
	})
})