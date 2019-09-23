$(function(){
	$("#list").next().next().css({"display":"none"});
	$("#list").on("click",function(){
		$(this).next().next().slideToggle();
	})
})