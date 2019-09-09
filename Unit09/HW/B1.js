var button = document.getElementsByTagName('button');
var section = document.getElementsByClassName('section');

for (var i = 0; i < button.length; i++) {
	button[i].addEventListener('click',function(){
		for (var j = 0; j < button.length; j++) {
			section[j].style.display='none';
			button[j].style.color='white';
			button[j].style.backgroundColor='#666666';
		}
		this.parentNode.nextElementSibling.style.display = 'inline-block';
		this.style.backgroundColor='white';
		this.style.color='black';
	});
}