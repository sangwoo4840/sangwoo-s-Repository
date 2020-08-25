<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
<title>관리자</title>
<style type="text/css">
body {
	background-image: url("<c:url value="/images/background.png" />");
	font-size: 9pt;
}

#top {
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background-image: url("<c:url value="/images/background.png" />");
}

#content {
	width: 100%;
	margin-top: 100px;
}
</style>
<script src="<c:url value="/js/jquery-1.9.1.js" />"></script>
<script src="<c:url value="/js/management.js" />"></script>
<!-- <script src="http://code.jquery.com/ui/1.10.3/jquery-ui.js"></script> -->
<link href="<c:url value="/css/simplegrid.css" />" type="text/css" rel="stylesheet">
<link rel="icon" type="image/x-icon"  href="<c:url value="/images/favicon.png?2015080401" />" />
<link rel="apple-touch-icon" type="image/x-icon"  href="<c:url value="/images/favicon.png?2015080401" />" />
</head>
<body>
${userinfo}
</body>
</html>