var checkAll= document.getElementById('checkAll');
var tr= document.getElementsByTagName('tr');
var check= document.getElementsByName('check')
checkAll.addEventListener('click',check_all);
function check_all(){
	for (var i = 0; i < tr.length; i++) {
		check[i].checked = true;
	}
}
unCheckAll.addEventListener('click',uncheck_all);
function uncheck_all(){
	for (var i = 0; i < tr.length; i++) {
		check[i].checked = false;
	}
}