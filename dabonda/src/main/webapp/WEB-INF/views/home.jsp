<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
<title>Dabonda</title>
<link href="<c:url value="/css/home.css" />" type="text/css" rel="stylesheet">
<style type="text/css">
body {
	background-image: url("<c:url value="/images/background.png" />");
	text-align: center;
}

#customBtn {
	display: inline-block;
	background: #4285f4;
	color: white;
	width: 190px;
	border-radius: 5px;
	white-space: nowrap;
}

#customBtn:hover {
	cursor: pointer;
}

span.icon {
	background: url('<c:url value="/images/g-normal.png" />') transparent 5px 50% no-repeat;
	display: inline-block;
	vertical-align: middle;
	width: 42px;
	height: 42px;
	border-right: #2265d4 1px solid;
}

span.buttonText {
	display: inline-block;
	vertical-align: middle;
	padding-left: 42px;
	padding-right: 42px;
	font-size: 14px;
	font-weight: bold;
	/* Use the Roboto font that is loaded in the <head> */
	font-family: 'Roboto', sans-serif;
}
</style>
<script src="<c:url value="/js/jquery-1.9.1.js" />"></script>
<link href="https://fonts.googleapis.com/css?family=Roboto"
	rel="stylesheet" type="text/css">
<script src="https://apis.google.com/js/api:client.js"></script>
<script src="<c:url value="/js/home.js" />"></script>
<script type="text/javascript">
var googleUser = {};
var startApp = function() {
	gapi.load('auth2', function() {
						auth2 = gapi.auth2.init({
							client_id : '${client_id}',
									cookiepolicy : 'single_host_origin',
									scope: 'profile email'
								});
						attachSignin(document.getElementById('customBtn'));
					});
};

function attachSignin(element) {
	auth2.attachClickHandler(element, {}, function(googleUser) {
		var id_token = googleUser.getAuthResponse().id_token;
		console.log("ID Token: " + id_token);

		var xhr = new XMLHttpRequest();
		xhr.open('POST', '/login');
		xhr.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded');
		xhr.send('idtoken=' + id_token + '&os=' + OSInfoDev() + '&browser=' + browser());
		xhr.onload = function() {
			console.log('Signed in as: ' + xhr.responseText);
// 			location.replace("/dabonda/index");
			location.href = '/index';
		};
		
	}, function(error) {
		alert('error!');
		console.log(JSON.stringify(error, undefined, 2));
	});
}
</script>
<link rel="icon" type="image/x-icon"  href="<c:url value="/images/favicon.png?2015080401" />" />
<link rel="apple-touch-icon" type="image/x-icon"  href="<c:url value="/images/favicon.png?2015080401" />" />
</head>
<body>
<div class="content"><img src="<c:url value="/images/logo.png" />" width="200px"><p>Dabonda</p></div>
<div class="content">
	<div id="gSignInWrapper">
		<div id="customBtn" class="customGPlusSignIn">
			<span class="icon"></span> <span class="buttonText">로그인</span>
		</div>
	</div>
	<script>
 		startApp();
	</script>
</div>
<div id="errorMsg">${errorMsg}</div>
</body>
</html>