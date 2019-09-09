var hoTen_1 = document.getElementById('hoTen');
hoTen_1.addEventListener('blur',function(){
	if (hoTen_1.value=="") {
		hoTen_1.nextElementSibling.innerHTML="Yêu cầu nhập đầy đủ họ và tên";
	}else if (hoTen_1.value.length<8) {
		hoTen_1.nextElementSibling.innerHTML="Họ tên phải lớn hơn 8 ký tự";
	}else{
		hoTen_1.nextElementSibling.innerHTML="";
	}
})
document.getElementsByName('gender')[0].checked=true;
var email_1 = document.getElementById('email');
var email_regex = /^[a-z][a-z0-9_\.]{2,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm;
email_1.addEventListener('blur',function(){
	if (email_1.value=="") {
		email_1.nextElementSibling.innerHTML="Yêu cầu nhập email";
	}else if (email_1.value.match(email_regex)==null) {
		email_1.nextElementSibling.innerHTML="Email phải đúng định dạng chuẩn. (VD: abc@domain.xy)";
	}else{
		email_1.nextElementSibling.innerHTML="";
	}
})
var sDT_1 = document.getElementById('sDT');
sDT_1.addEventListener('blur',function(){
	if (sDT_1.value=="") {
		sDT_1.nextElementSibling.innerHTML="Yêu cầu nhập đầy đủ số điện thoại";
	}else{
		sDT_1.nextElementSibling.innerHTML="";
	}
})
var password_1 = document.getElementById('password');
password_1.addEventListener('blur',function(){
	if (password_1.value=="") {
		password_1.nextElementSibling.innerHTML="Yêu cầu nhập mật khẩu";
	}else{
		password_1.nextElementSibling.innerHTML="";
	}
})
var passwordConfirm_1 = document.getElementById('passwordConfirm');
passwordConfirm_1.addEventListener('blur',function(){
	if (passwordConfirm_1.value=="") {
		passwordConfirm_1.nextElementSibling.innerHTML="Yêu cầu xác nhận mật khẩu";
	}else if(passwordConfirm_1.value!=password_1.value){
		passwordConfirm_1.nextElementSibling.innerHTML="Mật khẩu xác nhận phải giống mật khẩu trên";
	}else{
		passwordConfirm_1.nextElementSibling.innerHTML="";
	}
})
document.getElementById('clear').addEventListener('click',function(){
	hoTen_1.value="";
	email_1.value="";
	sDT_1.value="";
	password_1.value="";
	passwordConfirm_1.value="";
})
var dem=0;
function send(){
	var error_1 = document.getElementsByClassName('error');
	if (hoTen_1.value=="") {
		hoTen_1.nextElementSibling.innerHTML="Yêu cầu nhập đầy đủ họ và tên";
	}
	if (email_1.value=="") {
		email_1.nextElementSibling.innerHTML="Yêu cầu nhập email";
	}
	if (sDT_1.value=="") {
		sDT_1.nextElementSibling.innerHTML="Yêu cầu nhập đầy đủ số điện thoại";
	}
	if (password_1.value=="") {
		password_1.nextElementSibling.innerHTML="Yêu cầu nhập mật khẩu";
	}
	if (passwordConfirm_1.value=="") {
		passwordConfirm_1.nextElementSibling.innerHTML="Yêu cầu xác nhận mật khẩu";
	}
	if(error_1[0].innerHTML==""&&error_1[1].innerHTML==""&&error_1[2].innerHTML==""&&error_1[3].innerHTML==""&&error_1[4].innerHTML==""){
		alert("Thành công");
		return true;
	}
	return false;
}