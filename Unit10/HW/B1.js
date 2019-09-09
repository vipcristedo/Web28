var arr = new Array();
var li_1 = document.getElementsByTagName('li');
var img_1 =  document.getElementsByTagName('img');
for (var i = 0; i < document.getElementsByTagName('li').length; i++) {
	arr.push(i);
}
arr.forEach(function(value) {
	document.getElementsByTagName('li')[value].addEventListener('click',function(){
		var a = value;
		for (var i = 0; i < li_1.length; i++) {
			li_1[i].classList.remove("active");
			img_1[i].classList.remove("see");
		}
		li_1[value].classList.add("active");
		img_1[value].classList.add("see");
	})
})
var cuoicung = li_1.length -1;
function chuyenTrai(){
	var viTriHienSlide = 0;
	var slideHienTai = document.getElementsByClassName('active')[0];
	for (var i = 0; slideHienTai = slideHienTai.previousElementSibling; viTriHienSlide++) {
	}
	for (var i = 0; i < li_1.length; i++) {
		li_1[i].classList.remove("active");
		img_1[i].classList.remove("see");
	}
	if(viTriHienSlide==0){
		viTriHienSlide = cuoicung+1;
	}
	li_1[viTriHienSlide-1].classList.add("active");
	img_1[viTriHienSlide-1].classList.add("see");
}
function chuyenPhai(){
	var viTriHienSlide = 0;
	var slideHienTai = document.getElementsByClassName('active')[0];
	for (var i = 0; slideHienTai = slideHienTai.previousElementSibling; viTriHienSlide++) {
	}
	for (var i = 0; i < li_1.length; i++) {
		li_1[i].classList.remove("active");
		img_1[i].classList.remove("see");
	}
	if(viTriHienSlide==cuoicung){
		viTriHienSlide = -1;
	}
	li_1[viTriHienSlide+1].classList.add("active");
	img_1[viTriHienSlide+1].classList.add("see");
}
document.getElementById('left').addEventListener('click',chuyenTrai);
document.getElementById('right').addEventListener('click',chuyenPhai);
var slideShow = setInterval(chuyenPhai,10000)