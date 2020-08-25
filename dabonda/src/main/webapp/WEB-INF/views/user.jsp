<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
<title>사용자 관리</title>
<style type="text/css">
body {
	background-image: url("/images/background.png");
}

input {
	width: 100%;
}

#contents {
	max-width: 800px;
	margin: 0 auto;
}
#userList table {
	width: 100%;
	border-collapse: collapse;
	background-color: white;
	font-size: 90%;
}
#userList thead tr{
	background-color: #E8DAB3;
}
#userList thead tr, td{
	border-bottom: 1px solid black;
}
#userListBody tr, td {
	border-bottom: 1px solid black;
}

#top {
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background-image: url("/images/background.png");
}

#btnadduser, #adduser a {
	border-radius: 5px;
	padding: 3px;
	padding-left: 5px;
	padding-right: 5px;
	color: white;
	background-color: #CC723D;
	font-size: 8pt;
	text-decoration: none;
}
#btnadduser {
	position: fixed;
}

#adduser {
	margin: 0 auto;
	margin-top: 20px;
	font-weight: normal;
	font-size: 10pt;
}

#list {
	width: 100%;
	margin-top: 60px;
}

.steam {
	border-radius: 5px;
	font-size: xx-small;
	padding: 1px 3px 1px 3px;
	background-color: #7F7F7F;
	color: white;
}
.smail_j, .smail_g {
	border-radius: 5px;
	font-size: xx-small;
	padding: 1px 3px 1px 3px;
	color: white;
}
.smail_j { background-color: #9D6FCE; }
.smail_g { background-color: #6FCE9D; }
</style>
<script src="/js/jquery-1.9.1.js"></script>
<script src="/js/management.js"></script>
<link href="/css/simplegrid.css" type="text/css" rel="stylesheet">
<script type="text/javascript">
getUserList();

function getUserList() {
	$.ajax({
		url : '/user/user.json',
		dataType : 'json',
		type : 'get',
	    success : function (result) {
	    	$.each(result, function(key) {
	    		var list = result[key];
		    	var content = '';
		    	var mail;
		    	for (i = 0; i < list.length; i++) {
		    		mail = list[i].email;
		    		content += '<tr id="' + mail + '" onclick="info(\'' + mail + '\');" onmouseover="this.style.background=\'#CFCFCF\';" onmouseout="this.style.background=\'\'" style="cursor: pointer;">';
		    		content += '<td style="padding-left: 3px;"><span class="steam">' + list[i].team + '</span>';
		    		if (mail.indexOf("@jangin") != -1)
		    			content += ' <span class="smail_j">장인</span><br />' + mail.substring(0, mail.indexOf("@jangin")) + '</td>';
		    		else
		    			content += ' <span class="smail_g">지메일</span><br />' + mail.substring(0, mail.indexOf("@gmail")) + '</td>';
		    		content += '<td style="font-size: 8pt;"><br />' + list[i].name + '</td>';
		    		content += '<td><a href="#"><img src="/images/deleteIcon.png" width="20px"></a></td>';
		    		content += '</tr>';
		    	}
		    	
				$("#userListBody").html(content);
	    	});
		},
		beforeSend : function() {
	    },
	    complete:function() {
		},
	    error:function(e) {
	    },
	    timeout:180000
	});
}

function info(email) {
	location.href = '/user/userinfo?email=' + email;
}

</script>
<link rel="icon" type="image/x-icon"  href="/images/favicon.png" />
<link rel="apple-touch-icon" type="image/x-icon"  href="/images/favicon.png" />
</head>
<body>
<div id="contents">
	<div id="userList">
		<table>
			<thead>
				<tr><th width="50%">이메일</th><th width="45%">이름</th><th width="5%"></th></tr>
			</thead>
			<tbody id="userListBody">

			</tbody>
		</table>
	</div>
</div>
</body>
</html>