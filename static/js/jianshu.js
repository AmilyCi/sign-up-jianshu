var Dom_name = document.getElementsByClassName('name');
var Dom_telephone = document.getElementsByClassName('telephone');
var Dom_password = document.getElementsByClassName('password');
function submitFunction(){
	var name =Dom_name[0].value;
	var telephone = Dom_telephone[0].value;
	var password = Dom_password[0].value;
	if (name=='') {
		document.getElementsByClassName('alarm-name')[0].style.display='block';
	}
		else if (name!='') {
			document.getElementsByClassName('alarm-name')[0].style.display='none';
			if (telephone=='') {
			document.getElementsByClassName('alarm-telephone')[0].style.display='block';
			}
				else if (telephone!='') {
					document.getElementsByClassName('alarm-telephone')[0].style.display='none';
					if (password=='') {
						document.getElementsByClassName('alarm-passward')[0].style.display='block';
						else if (password!='') {
							document.getElementsByClassName('alarm-passward')[0].style.display='none';
						}
						}
					}				
		}
