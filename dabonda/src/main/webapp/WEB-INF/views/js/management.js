function chkdelete(email) {
	if(confirm('삭제하시겠습니까?')) {
		$.ajax({
			url : "/user/deleteuser",
			type : "get",
			data : {email: email},
		    success : function (result) {
		    	var divid = '#' + email;
				$(divid).remove();
			}
		});
	}
}

var toggle = 0;
function adduserform() {
	if(toggle == 0) {
	var html = "<div id='adduser'><div class='col-3-12 mobile-col-3-12 center'>";
	html += "<div class='content txtmenu'>이메일</div>";
	html += "</div>";
	html += "<div class='col-9-12 mobile-col-9-12 center'>";
	html += "<div class='content txtmenu'><input type='text' id='email' style='width: 50%;'>@jangin.com</div>";
	html += "</div>";
	html += "<div class='col-3-12 mobile-col-3-12 center'>";
	html += "<div class='content txtmenu'>이름</div>";
	html += "</div>";
	html += "<div class='col-9-12 mobile-col-9-12 center'>";
	html += "<div class='content txtmenu'><input type='text' id='name'></div>";
	html += "</div>";
	html += "<div class='col-3-12 mobile-col-3-12 center'>";
	html += "<div class='content txtmenu'>팀</div>";
	html += "</div>";
	html += "<div class='col-9-12 mobile-col-9-12 center'>";
	html += "<div class='content txtmenu'><input type='text' id='team'></div>";
	html += "</div>";
	html += "<div class='col-1-1 mobile-col-1-1 center'>";
	html += "<div class='content txtmenu' style='text-align: center;'><a href='javascript: adduser();'>확인</a></div>";
	html += "</div></div>";
	$('#top').append(html);
	toggle = 1;
	} else {
		$('#adduser').remove();
		toggle = 0;
	}
}

function adduser() {
	if(confirm('추가하시겠습니까?')) {
		var email = document.getElementById('email').value;
		var name = document.getElementById('name').value;
		var team = document.getElementById('team').value;
		$.ajax({
			url : "/user/insertuser",
			type : "get",
			data : {email: email + '@jangin.com',
						name: name,
						team: team},
			success : function (result) {
	    		$('#adduser').remove();
				toggle = 0;
			
	    		var html = '<div id="';
				html += email;
				html += '" class="grid grid-pad">';
				html += '<div class="col-8-12 mobile-col-8-12 center">';
				html += '<div class="content txtmenu"><a href="/userlist/userinfo?email=';
				html += email;
				html += '@jangin.com">';
				html += email;
				html += '@jangin.com</a></div></div>';
				html += '<div class="col-3-12 mobile-col-3-12 center">';
				html += '<div class="content txtmenu">';
				html += name;
				html += '</div></div>';
				html += '<div class="col-1-12 mobile-col-1-12 center">';
				html += '<div class="content txtmenu"><a href="javascript: chkdelete("';
				html += email;
				html += '");"><img src="/images/deleteIcon.png" width="20px" /></a></div></div></div>';
			
				$('#list').append(html);
			}
		});
	}
}

function updateauth(email) {
	if(confirm('변경하시겠습니까?')) {
		var pid = document.getElementsByName('pid');
		var auth = '';
		for(i = 0; i < pid.length; i++) {
			if(pid[i].checked) {
				auth += pid[i].id;
				auth += ',';
			}
		}
		auth = auth.substring(0, auth.length - 1);
		
		$.ajax({
			url : "/user/updateauth",
			type : "get",
			data : {email: email,
						auth: auth},
			success : function (result) {
	    		location.replace('/user/userinfo?email='+email);
			}
		});
	}
}