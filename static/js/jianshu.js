
var Dom_name = document.getElementsByClassName('name');
var Dom_telephone = document.getElementsByClassName('telephone');
var Dom_password = document.getElementsByClassName('password');
var Dom_addtelephone=document.getElementsByClassName('addtelephone')
function submitFunction(){
	var name = Dom_name[0].value;
	var telephone = Dom_telephone[0].value;
	var password = Dom_password[0].value;
	if(name=='') {
		document.getElementsByClassName('alarm-name')[0].style.display='block';
		return;
	}
	else{
		document.getElementsByClassName('alarm-name')[0].style.display='none';
		
	}
	if (telephone=='') {
		document.getElementsByClassName('alarm-telephone')[0].style.display='block';
		return;
	}
	else{
		document.getElementsByClassName('alarm-telephone')[0].style.display='none';

	}
	if (password=='') {
		document.getElementsByClassName('alarm-passward')[0].style.display='block';
		return;
	}
	else{
		document.getElementsByClassName('alarm-passward')[0].style.display='none';
	}
}
function myFunction(){
	var telephone = Dom_telephone[0].value;
	var main = document.getElementsByClassName[0]
	if (telephone!='') {
		document.getElementsByClassName('yzm')[0].style.display='block';
		main.style.height='800px';
	}
	else{
		document.getElementsByClassName('yzm')[0].style.display='none';
	}
}




