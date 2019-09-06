var button = document.getElementsByTagName('button');
var section = document.getElementsByClassName('section');
button[0].addEventListener('click',function(){
	for (var i = 0; i < button.length; i++) {
		section[i].style.display='none';
		button[i].style.color='white';
		button[i].style.backgroundColor='#666666';
	}
	section[0].style.display='inline-block';
	button[0].style.backgroundColor='white';
	button[0].style.color='black';
});
button[1].addEventListener('click',function(){
	for (var i = 0; i < button.length; i++) {
		section[i].style.display='none';
		button[i].style.color='white';
		button[i].style.backgroundColor='#666666';
	}
	section[1].style.display='inline-block';
	button[1].style.backgroundColor='white';
	button[1].style.color='black';
});
button[2].addEventListener('click',function(){
	for (var i = 0; i < button.length; i++) {
		section[i].style.display='none';
		button[i].style.color='white';
		button[i].style.backgroundColor='#666666';
	}
	section[2].style.display='inline-block';
	button[2].style.backgroundColor='white';
	button[2].style.color='black';
});