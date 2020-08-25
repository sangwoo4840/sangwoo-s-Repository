<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
<title>환율 정보</title>
<script src="/js/jquery-1.9.1.js"></script>
<script src="/js/exchangerate.js"></script>
<link href="/css/simplegrid.css" type="text/css" rel="stylesheet">

<style type="text/css">
body {
	background-image: url(/images/background.png);
	font-family: sans-serif;
	font-size: 8.5pt;
}

input {
	background-color: white;
	border: 1px solid #CFA636;
	border-radius: 3px;
}

.grid-pad {
	border-top: 1px solid black;
	padding-top: 10px !important;
}

#header {
	text-align: center;
	font-size: 10.5pt;
	font-weight: bold;
	background-color: #997000;
	color: white;
}

#content, #contents {
	text-align: right;
}

#content {
	background-color: #FFE08C;
}

#datetime {
	text-align: right;
}

.title {
	font-size: 13pt;
	font-weight: bold;
	text-align: center;
	margin-top: 15px;
	margin-bottom: 15px;
}

.plus {
	color: red;
}

.minus {
	color: blue;
}

/* #contents { */
/* background-color: #FAECC5; */
/* } */
</style>

<script type="text/javascript">
$(function() {
	showDisp();
	
	$("#date").change(function() {
		showDisp();
	});
});

function showDisp() {
	var date = $('#date').val();
	
	if (date == null || date == '')
		date = '${date}';
	
	$.ajax({
		url: '/exchangerate/exchangerate.json',
		dataType: 'json',
		type : "get",
		data : {date : date},
		success: function(data) {
			$('#loading').remove();
			$.each(data, function(key, val) {
				var contentHtml = '<div style="text-align: center; padding: 10px; padding-bottom: 20px;">환율 정보가 없습니다.</div>';
				var contentsHtml = '';
					
				for(i = 0; i < val.length; i++) {
					if (i == 0) {
						contentHtml = '<div class="grid grid-pad" onclick="goDetail(\'' + val[0].date + '\');">';
						contentHtml += '<div class="col-3-12 mobile-col-3-12">';
						contentHtml += '<div class="content">';
						contentHtml += val[0].date;
						contentHtml += '</div>';
						contentHtml += '</div>';
						contentHtml += '<div class="col-3-12 mobile-col-3-12">';
						contentHtml += '<div class="content">';
						contentHtml += commify(val[0].USD);
						contentHtml += '</div>';
						contentHtml += '</div>';
						contentHtml += '<div class="col-3-12 mobile-col-3-12">';
						contentHtml += '<div class="content">';
						contentHtml += commify(val[0].EUR);
						contentHtml += '</div>';
						contentHtml += '</div>';
						contentHtml += '<div class="col-3-12 mobile-col-3-12">';
						contentHtml += '<div class="content">';
						contentHtml += commify(val[0].JPY);
						contentHtml += '</div>';
						contentHtml += '</div>';
						contentHtml += '</div>';
						
						$('#datetime').html('기준시간 ' + val[0].datetime);
					} else {
						if (i == 1) {
							contentHtml += '<div class="grid grid-pad" style="border: 0; background-color: #FAECC5; border-bottom: 1px solid black;">';
							contentHtml += '<div class="col-3-12 mobile-col-3-12">';
							contentHtml += '<div class="content" style="text-align: center;">전일대비</div>';
							contentHtml += '</div>';
							contentHtml += '<div class="col-3-12 mobile-col-3-12">';
							contentHtml += '<div class="content">';
							var sUSD = val[0].USD - val[1].USD;
							if (sUSD > 0)
								contentHtml += '<span class="plus">▲';
							else if (sUSD == 0)
								contentHtml += '<span>';
							else
								contentHtml += '<span class="minus">▼';
							contentHtml += commify(Math.abs(sUSD).toFixed(2));
							contentHtml += '</span></div>';
							contentHtml += '</div>';
							contentHtml += '<div class="col-3-12 mobile-col-3-12">';
							contentHtml += '<div class="content">';
							var sEUR = val[0].EUR - val[1].EUR;
							if (sEUR > 0)
								contentHtml += '<span class="plus">▲';
							else if (sEUR == 0)
								contentHtml += '<span>';
							else
								contentHtml += '<span class="minus">▼';
							contentHtml += commify(Math.abs(sEUR).toFixed(2));
							contentHtml += '</span></div>';
							contentHtml += '</div>';
							contentHtml += '<div class="col-3-12 mobile-col-3-12">';
							contentHtml += '<div class="content">';
							var sJPY = val[0].JPY - val[1].JPY;
							if (sJPY > 0)
								contentHtml += '<span class="plus">▲';
							else if (sJPY == 0)
								contentHtml += '<span>';
							else
								contentHtml += '<span class="minus">▼';
							contentHtml += commify(Math.abs(sJPY).toFixed(2));
							contentHtml += '</span></div>';
							contentHtml += '</div>';
							contentHtml += '</div>';
						}
						
						if (i % 2 == 0)
							contentsHtml += '<div class="grid grid-pad" style="border: 0; background-color: white;" onclick="goDetail(\'' + val[i].date + '\');">';
						else
							contentsHtml += '<div class="grid grid-pad" style="border: 0; background-color: #E4F7BA;" onclick="goDetail(\'' + val[i].date + '\');">';
						contentsHtml += '<div class="col-3-12 mobile-col-3-12">';
						contentsHtml += '<div class="content">';
						contentsHtml += val[i].date;
						contentsHtml += '</div>';
						contentsHtml += '</div>';
						contentsHtml += '<div class="col-3-12 mobile-col-3-12">';
						contentsHtml += '<div class="content">';
						contentsHtml += commify(val[i].USD);
						contentsHtml += '</div>';
						contentsHtml += '</div>';
						contentsHtml += '<div class="col-3-12 mobile-col-3-12">';
						contentsHtml += '<div class="content">';
						contentsHtml += commify(val[i].EUR);
						contentsHtml += '</div>';
						contentsHtml += '</div>';
						contentsHtml += '<div class="col-3-12 mobile-col-3-12">';
						contentsHtml += '<div class="content">';
						contentsHtml += commify(val[i].JPY);
						contentsHtml += '</div>';
						contentsHtml += '</div>';
						contentsHtml += '</div>';
					}
				}
				
				$('#content').html(contentHtml);
				$('#contents').html(contentsHtml);
			});
		},
		error: function() {
			$('#content').html('<div style="text-align: center; padding: 10px; padding-bottom: 20px;">정보를 불러올 수 없습니다.</div>');
		}

	});
	dataCall();
}

function goDetail(date) {
	location.href = '/exchangerate/dtl?date=' + date;
}

function dataCall() {
	clearTimeout();
	setTimeout(showDisp, 600000);
}

function commify(n) {
	var reg = /(^[+-]?\d+)(\d{3})/;   // 정규식
	n += '';                          // 숫자를 문자열로 변환

	while (reg.test(n))
		n = n.replace(reg, '$1' + ',' + '$2');

	return n;
}
</script>

<link rel="icon" type="image/x-icon"  href="/images/favicon.png" />
<link rel="apple-touch-icon" type="image/x-icon"  href="/images/favicon.png" />
</head>
<body>
<div class="title">
환율 정보
</div>
<div class="content">날짜 <input type="date" value="${date}" id="date"></div>
<div id="datetime" class="content"></div>
<div id="header" class="grid grid-pad">
	<div class="col-3-12 mobile-col-3-12">
		<div class="content">일자</div>
	</div>
	<div class="col-3-12 mobile-col-3-12">
		<div class="content"><img src="/images/exchangerate/usd.gif"> USD</div>
	</div>
	<div class="col-3-12 mobile-col-3-12">
		<div class="content"><img src="/images/exchangerate/eur.gif"> EUR</div>
	</div>
	<div class="col-3-12 mobile-col-3-12">
		<div class="content"><img src="/images/exchangerate/jpy.gif"> JPY</div>
	</div>
</div>
<div id="content"></div>
<div id="contents"></div>

<div id="loading" style="position:fixed; z-index: 9999; width:100%; height: 100%;">
	<div style="width:100%;height:200%;text-align:center;">
		<img src="/images/loading.gif" width="100" border="0" alt="Loading..." />
	</div>
</div>

</body>
</html>