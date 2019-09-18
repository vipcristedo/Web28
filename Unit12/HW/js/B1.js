$(function(){
	function xoayMat(){
		$(this).animate({  border: 180 }, {
			step: function(now) {
				$(this).css({
				'transform':'rotate('+(now)+'deg)',
				'opacity':''+(now/90+0.4)+''
			})
		    },
		    duration:200
		});
	}
	$("#plus").on("click",xoayMat);
	$("#minus").on("click",xoayMat);
	$(".plus").on("click",function(){
		$("li>.plus").fadeToggle(400);
		$("#support2").slideToggle();
	})
	$(".tag").on("mouseenter",function(){
		$(this).children().css({"display":"inline-block"})
	})
	$(".tag").on("mouseleave",function(){
		$(this).children().not("a").css({"display":"none"})
	})
	$("#list").on("click",xoayMat);
	$("#out_list").on("click",xoayMat);
	$(".list").on("click",function(){
		$("#bar>.list").fadeToggle(100);
	})
	$("#list").on("click",function(){
		$("#menu2_main").css({"display":"inline-block"});
		$("#menu2_main").addClass("fadeInLeft animated");
	})
	$("#out_list").on("click",function(){
		$("#menu2_main").fadeOut(200)
	})
})