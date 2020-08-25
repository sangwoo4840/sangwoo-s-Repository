<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
<title>일일 출하 조회</title>
<style type="text/css">
body { margin: 0; background: url('/images/background.png'); }
.title { font-weight: bold; font-size: 12pt; text-align: center; padding-top: 15px; padding-bottom: 15px; }
.search, .search input { font-size: 10pt; }
.sub-info { float: right; font-size: 9pt; bottom: 0; }
#daily-dn-dtl { width: 100%; border-collapse: collapse; font-size: 10pt; }
#daily-dn-dtl th { padding-top: 3px; padding-bottom: 3px; background: #AB8212; color: white; }
#daily-dn-dtl td { border-top: 1px solid black; border-bottom: 1px solid black; padding-top: 3px; padding-bottom: 3px; background: white; color: gray; }
.col1 { text-align: left; }
.col2, .col3, .col4, .col5, .col6 { text-align: right; }
.sub-total td { background: #E4F7BA !important; color: black !important; }
.total td { background: #AB8212 !important; color: white !important; }
.rank0 td { background: #E7B607 !important; color: black !important; }
.rank1 td { background: #F3CA5A !important; color: black !important; }
.rank2 td { background: #FFDEAD !important; color: black !important; }

#loading {  }
</style>
<script src="/js/jquery-1.9.1.js"></script>
<script src="/js/money.js"></script>
<script type="text/javascript">
getParameter = function(name){
	search = location.search;
	if (!search) { //파라미터가 하나도 없을때
		return false;
	}
 
	search = search.split('?');
	data = search[1].split('=');
	
	if (search[1].indexOf('&') == (-1)) { //한개의 파라미터일때.
		data = search[1].split("=");
		return data[1];
	} else { //여러개의 파라미터 일때.
		data = search[1].split('&'); //엠퍼센트로 자름.
		for (i = 0; i <= data.length-1; i++) {
			l_data = data[i].split('=');
			if (l_data[0] == name) {
				return l_data[1];
			} else continue;
        }
    }
}

$(function () {
	init();
	getData();
});

function init() {
	$('#loading').hide();
	$('.title').html('<font color="#FF4500">일일</font>('+getParameter('date')+') 출하 조회 ('+decodeURI(getParameter('province_nm'))+' 상세내역)');
	$('.sub-info').html('(단위: 백만원, ' + getTimeStamp() + ')');
}

function getTimeStamp() {
	var d = new Date();
	var s =
		leadingZeros(d.getFullYear(), 4) + '-' +
		leadingZeros(d.getMonth() + 1, 2) + '-' +
		leadingZeros(d.getDate(), 2) + ' ' +

		leadingZeros(d.getHours(), 2) + ':' +
		leadingZeros(d.getMinutes(), 2) + ':' +
		leadingZeros(d.getSeconds(), 2);

	return s;
}

function leadingZeros(n, digits) {
	var zero = '';
	n = n.toString();

	if (n.length < digits) {
		for (i = 0; i < digits - n.length; i++)
			zero += '0';
	}
	
	return zero + n;
}

function getData() {
	var date = getParameter('date');
	var province_cd = getParameter('province_cd');
	$('#daily-dn-dtl').html('');
	
	$('#loading').show();
	$.ajax({
		url: '/daily_dn/dtl/data',
		dataType: 'json',
		type : 'get',
		data : {date : date,
			province_cd : province_cd},
		success: function(data) {
			$('#daily-dn-dtl').html('<tr><th class="col1">대리점명</th><th class="col2">계획</th><th class="col3">금일</th><th class="col4">잔액</th><th class="col5">누계</th><th class="col6">%</th></tr>');
			$('#loading').hide();
			$('.sub-info').html('(단위: 백만원, ' + getTimeStamp() + ')');
			$.each(data, function(key, val) {
				var html = '';
				var tot_month_amt = 0, tot_com_amt = 0, tot_no_amt = 0, tot_sum_amt = 0;
					
				for (i = 0; i < val.length; i++) {
					html = '<tr class="rank'+i+'">';
					html += '<td class="col1">' + val[i].bp_nm + '</td>';
					html += '<td class="col2">' + val[i].month_amt.toFixed(1).format() + '</td>';
					html += '<td class="col3">' + val[i].com_amt.toFixed(1).format() + '</td>';
					html += '<td class="col4">' + val[i].no_amt.toFixed(1).format() + '</td>';
					html += '<td class="col5">' + val[i].sum_amt.toFixed(1).format() + '</td>';
					html += '<td class="col6">' + val[i].rate + '</td>';
					html += '</tr>';
					$('#daily-dn-dtl').append(html);
					
					tot_month_amt += val[i].month_amt;
					tot_com_amt += val[i].com_amt;
					tot_no_amt += val[i].no_amt;
					tot_sum_amt += val[i].sum_amt;
				}
				
				html = '<tr class="total">';
				html += '<td class="col1">총계</td>';
				html += '<td class="col2">' + tot_month_amt.toFixed(1).format() + '</td>';
				html += '<td class="col3">' + tot_com_amt.toFixed(1).format() + '</td>';
				html += '<td class="col4">' + tot_no_amt.toFixed(1).format() + '</td>';
				html += '<td class="col5">' + tot_sum_amt.toFixed(1).format() + '</td>';
				html += '<td class="col6">' + (tot_sum_amt / tot_month_amt * 100).toFixed(2) + '%</td>';
				html += '</tr>';
				$('#daily-dn-dtl').append(html);
			});
		},
		error: function() {
// 			if( !$('table li.error')[0] ) {
// 				$('table').slideUp('fast');
// 				$('table').html('');
// 				$('table').append('<li class="error">정보를 불러올 수 없습니다.</li>');
// 				$('table').slideDown('fast');
// 			}
		}
	});
	
// 	dataCall();
}

// function dataCall() {
// 	clearTimeout();
// 	setTimeout(getData, 60000);
// }
</script>
</head>
<body>
<div class="title"><font color="#FF4500">일일</font> 출하 조회</div>
<div class="sub-info"></div>
<table id="daily-dn-dtl">
</table>
<div id="loading">
	<div style="width: 100%; height: 200%; text-align: center;">
		<img src="/images/loading.gif" width="100" border="0" alt="Loading..." />
	</div>
</div>
</body>
</html>