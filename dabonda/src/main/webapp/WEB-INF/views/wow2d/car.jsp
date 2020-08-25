<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
<title>배차현황</title>
<link href="<c:url value="/css/simplegrid.css" />" type="text/css" rel="stylesheet">
<link href="<c:url value="/css/car.css" />" type="text/css" rel="stylesheet">
<script src="<c:url value="/js/jquery-1.9.1.js" />"></script>
<script type="text/javascript" src="https://www.google.com/jsapi"></script>
<script src="<c:url value="/js/car.js" />"></script>
<link rel="icon" type="image/x-icon"  href="<c:url value="/images/favicon.png?2015080401" />" />
<link rel="apple-touch-icon" type="image/x-icon"  href="<c:url value="/images/favicon.png?2015080401" />" />
</head>
<body>
<div class="wrap-loading display-none">
    <div><img src="<c:url value="/images/loading.gif" />" width="40%" /></div>
</div>
<div id="searchField" class="grid grid-pad">
	<div class="col-3-12 mobile-col-3-12">
		<div class="content">날짜</div>
	</div>
	<div class="col-9-12 mobile-col-9-12">
		<div class="content"><input type="date" id="tranDt" value="${date}"></div>
	</div>
	<div class="col-1-1 mobile-col-1-1" style="text-align: center; margin-top: 5px;">
		<a href="javascript: drawChart();">조 회</a>
	</div>
</div>
<div id="carList"></div>
</body>
</html>