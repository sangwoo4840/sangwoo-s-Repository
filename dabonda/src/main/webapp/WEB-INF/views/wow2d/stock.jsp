<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
<title>재고현황</title>
<link href="/css/simplegrid.css" type="text/css" rel="stylesheet">
<link href="/css/stock.css" type="text/css" rel="stylesheet">
<script src="/js/jquery-1.9.1.js"></script>
<script src="/js/stock1.js"></script>
<link rel="icon" type="image/x-icon"  href="/images/favicon.png" />
<link rel="apple-touch-icon" type="image/x-icon"  href="/images/favicon.png" />
</head>
<body onload="getSelect();">
<div id="searchBtn">
조 회 창
</div>
<div id="top">
<div class="wrap-loading display-none">
    <div><img src="/images/loading.gif" width="40%" /></div>
</div>
	<div id="searchField" class="grid grid-pad">
		${selectCompany}
		<div class="col-3-12 mobile-col-3-12">
			<div class="content">대분류</div>
		</div>
		<div class="col-9-12 mobile-col-9-12">
			<div class="content"><span id="majorField"></span></div>
		</div>
		<div class="col-3-12 mobile-col-3-12">
			<div class="content">중분류</div>
		</div>
		<div class="col-9-12 mobile-col-9-12">
			<div class="content"><span id="minorField"><select><option>전체</option></select></span></div>
		</div>
		<div class="col-3-12 mobile-col-3-12">
			<div class="content">품목코드</div>
		</div>
		<div class="col-9-12 mobile-col-9-12">
			<div class="content"><input type="text" id="item_cd"></div>
		</div>
		<div class="col-3-12 mobile-col-3-12">
			<div class="content">품목명</div>
		</div>
		<div class="col-9-12 mobile-col-9-12">
			<div class="content"><input type="text" id="item_nm"></div>
		</div>
		<div class="col-1-1 mobile-col-1-1" style="text-align: center; margin-top: 5px;">
			<a href="javascript: searchItem();">조 회</a>
		</div>
	</div>
	<div id="stockHeader">
	<div class="grid grid-pad">
		<div class="col-9-12 mobile-col-9-12">
			<div class="content">품목명</div>
		</div>
		<div class="col-3-12 mobile-col-3-12">
			<div class="content">재고</div>
		</div>
	</div>
</div>
</div>
<div id="stockList"></div>
<div id="footer"></div>
</body>
</html>