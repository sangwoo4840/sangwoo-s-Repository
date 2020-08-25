<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
	response.setDateHeader("Expires", 0);
	response.setHeader("Pragma", "no-cache");
	if(request.getProtocol().equals("HTTP/1.1")) {
		response.setHeader("Cache-Control", "no-cache");
	}
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
<meta name="google-signin-scope" content="profile email">
<meta name="google-signin-client_id"
	content="${client_id}">
<title>Dabonda</title>
<script src="<c:url value="/js/jquery-1.9.1.js" />"></script>
<script src="<c:url value="/js/home.js" />"></script>
<script src="https://apis.google.com/js/api:client.js"></script>
<script src="https://apis.google.com/js/platform.js" async defer></script>
<link href="<c:url value="/css/simplegrid.css" />" type="text/css" rel="stylesheet">
<link href="<c:url value="/css/index.css" />" type="text/css" rel="stylesheet">
<style type="text/css">
body {
	background-image: url("<c:url value="/images/background.png" />");
}
</style>
<link rel="icon" type="image/x-icon"  href="<c:url value="/images/favicon.png?2015080401" />" />
<link rel="apple-touch-icon" type="image/x-icon"  href="<c:url value="/images/favicon.png?2015080401" />" />
</head>
<body>
<div id="searchField" class="grid grid-pad">
	<div class="col-1-1 mobile-col-1-1">
		<div class="content"><img src="<c:url value="/images/logo.png" />" width="200px"><a href="javascript: logout();" id="logout">로그아웃</a></div>
	</div>
	<hr>
${menu}
</div>
<script type="text/javascript">
gapi.load('auth2', function() {
	auth2 = gapi.auth2.init({
		client_id : '${client_id}',
		cookiepolicy : 'single_host_origin',
	});
});

function logout() {
	var auth2 = gapi.auth2.getAuthInstance();
	
	auth2.signOut().then(function() {
	//auth2.disconnect().then(function() {
		console.log('User signed out.');
		location.href='/logout';
	});
}
</script>
</body>
</html>