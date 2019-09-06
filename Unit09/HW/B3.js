var macDinh1 = document.getElementById('macDinh');
var large1 = document.getElementById('large');
var small1 = document.getElementById('small');
var	p  = document.getElementsByTagName('p');
macDinh1.addEventListener('click',macDinh);
function macDinh(){
	for (var i = 0; i < p.length; i++) {
		p[i].style.fontSize= '100%';
	}
}
large1.addEventListener('click',large);
function large(){
	for (var i = 0; i < p.length; i++) {
		p[i].style.fontSize='140%';
	}
}
small1.addEventListener('click',small);
function small(){
	for (var i = 0; i < p.length; i++) {
		p[i].style.fontSize='60%';
	}
}
