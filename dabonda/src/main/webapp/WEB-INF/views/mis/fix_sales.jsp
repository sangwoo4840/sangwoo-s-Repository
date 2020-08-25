<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
<title>월간 확보 매출 조회</title>
<style>
	body {background-image: url('/images/background.png'); font-size:12px; margin-left:0px; margin-right:0px;}
	ul {margin:0;padding:0;list-style:none;display:none;}
	ul li {margin:0;padding:10px;}
	.table {}
	table {border-collapse: collapse; border-spacing: 0; background-color: white;}
	input {background-color: white; border: 1px solid #CFA636; border-radius: 3px;}
	td {border-bottom: 1px solid #664B00;}
</style>
<script src="/js/jquery-1.9.1.js"></script>
<script src="/js/money.js"></script>
<script type="text/javascript">
// 주소창 자동 닫힘
window.addEventListener("load", function() {
	setTimeout(loaded, 300);
}, false);
function loaded() {
	window.scrollTo(0, 1);
}

function go_dtl(p_cd, p_nm) {
	var tmp = $('#dtDate').val();
	location.href="/fix_sales/dtl?province_cd=" + p_cd + "&province_nm=" + p_nm + "&date=" + tmp;
}
</script>
<script>
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
</script>
<script>
$(function() {
	showDisp();
	
	$('#btnSearch').click(function() {
		var html = '';
		html += '<div style="width:100%;height:200%;text-align:center;">';
		html += '<img src="/images/loading.gif" width="100" border="0" alt="Loading..." />';
		html += '</div>';
		$('.table').fadeIn('slow');
		$('table tbody').html('');
		$('#loading').html(html);
		$('#caption').html('&nbsp;');
		
		showDisp();
	});
});

function showDisp(date) {
	var sum_plan_amt, sum_amt1, sum_amt2, sum_amt3,	sum_amt4, div, rankCnt, printRankCnt, nextMonthCnt;	//합계 전용
	sum_plan_amt = 0;
	sum_amt1 = 0;
	sum_amt2 = 0;
	sum_amt3 = 0;
	sum_amt4 = 0;
	div = 1000000;
	rankCnt = 1;
	printRankCnt = 1;
	nextMonthCnt = 1;
	
	var date = $('#dtDate').val();
	
	//1st
	$.ajax( {
		url: '/fix_sales/fix_sales.json',
		dataType: 'json',
		type : "get",
		data : {date : date},
		success: function(data) {
			//console.log( data.one );
			$('.table').fadeIn('slow');
			$('table tbody').html('');
			$('#loading').html('');
			$('#caption').html('(기준:시판영업, 단위:백만원, ${now})');
			$.each(data, function(key, val) {
				var trHtml;
				var p_cd, p_nm;
					
				for(i = 0; i < val.length; i++) {
					p_cd = val[i].province_cd;
					p_nm = val[i].province_nm;
					
					printRankCnt = rankCnt;
					
					if(rankCnt > 8)
						printRankCnt = "";
					
					if(rankCnt > 8)
						rankCnt = "";
					
					trHtml = '<tr height="27" style="color:gray" onclick="go_dtl(' + p_cd + ', \'' + p_nm + '\');">';
					trHtml += '<td align="left">&nbsp;' + printRankCnt + '</td>';
					trHtml += '<td align="left">' + val[i].province_nm + '</td>';
					trHtml += '<td align="right">' + (val[i].plan_amt / div).toFixed(1).format() + '</td>';
					trHtml += '<td align="right">' + (val[i].amt1 / div).toFixed(1).format() + '</td>';
					trHtml += '<td align="right">' + (val[i].amt2 / div).toFixed(1).format() + '</td>';
					trHtml += '<td align="right">' + (val[i].amt3 / div).toFixed(1).format() + '</td>';
					trHtml += '<td align="right">' + val[i].amt_percent.toFixed(1).format() + '%</td>';
					trHtml += '</tr>';
					$('table tbody').append( trHtml );
					
					sum_plan_amt += val[i].plan_amt;
					sum_amt1 += val[i].amt1;
					sum_amt2 += val[i].amt2;
					sum_amt3 += val[i].amt3;
					
					if(rankCnt >= 1)
						rankCnt++;
						
					if(rankCnt == 9) {
						var avr1, trHtml1;
						
						avr1 = sum_amt3 / sum_plan_amt * 100;
						if (sum_plan_amt == 0 && sum_amt3 != 0)
							avr1 = 100;
						else if (sum_plan_amt == 0 && sum_amt3 == 0)
							avr1 = 0;
						
						trHtml1 = '<tr height="27" bgcolor="#E4F7BA">';
						trHtml1 += '<td>&nbsp;</td>';
						trHtml1 += '<td>소계</td>';
						trHtml1 += '<td align="right">' + (sum_plan_amt / div).toFixed(1).format() + '</td>';
						trHtml1 += '<td align="right">' + (sum_amt1 / div).toFixed(1).format() + '</td>';
						trHtml1 += '<td align="right">' + (sum_amt2 / div).toFixed(1).format() + '</td>';
						trHtml1 += '<td align="right">' + (sum_amt3 / div).toFixed(1).format() + '</td>';
						trHtml1 += '<td align="right">' + avr1.toFixed(1) + '%</td>';
						trHtml1 += '</tr>';
						$('table tbody').append( trHtml1 );
					}
				}
			});
				
			var avr, trHtml2;
			avr = sum_amt3 / sum_plan_amt * 100;
			if (sum_plan_amt == 0 && sum_amt3 != 0)
				avr = 100;
			else if (sum_plan_amt == 0 && sum_amt3 == 0)
				avr = 0;
			trHtml2 = '<tr height="27" style="color:white;">';
			trHtml2 += '<td>&nbsp;</td>';
			trHtml2 += '<td>총계</td>'
			trHtml2 += '<td align="right">' + (sum_plan_amt / div).toFixed(1).format() + '</td>';
			trHtml2 += '<td align="right">' + (sum_amt1 / div).toFixed(1).format() + '</td>';
			trHtml2 += '<td align="right">' + (sum_amt2 / div).toFixed(1).format() + '</td>';
			trHtml2 += '<td align="right">' + (sum_amt3 / div).toFixed(1).format() + '</td>';
			trHtml2 += '<td align="right">' + avr.toFixed(1).format() + '%</td>';
			trHtml2 += '</tr>';
			$('table tbody').append( trHtml2 );
			
			//.css("font-weight" , "bold")
			$('table tbody').find('tr').eq(0).css("background-color" , "#E7B607").css("color" , "#000000").animate({'opacity' : '0'}, 500).animate({'opacity' : '1'}, 500);
			$('table tbody').find('tr').eq(1).css("background-color" , "#F3CA5A").css("color" , "#000000").animate({'opacity' : '0'}, 500).animate({'opacity' : '1'}, 500);
			$('table tbody').find('tr').eq(2).css("background-color" , "#FFDEAD").css("color" , "#000000").animate({'opacity' : '0'}, 500).animate({'opacity' : '1'}, 500);
			$('table tbody').find('tr:last').css("background-color" , "#AB8212");
			//$('.table').fadeIn('slow');
		},
		error: function() {
			if( !$('table li.error')[0] ) {
				$('table').slideUp('fast');
				$('table').html('');
				$('table').append('<li class="error">정보를 불러올 수 없습니다.</li>');
				$('table').slideDown('fast');
			}
		}
	});

	/*
	//2nd
	$.ajax( {
		url: '/fix_sales/fix_sales_sub.json',
		dataType: 'json',
		type : "get",
		success: function(data) {
			//console.log( data.one );
			$('.table').fadeIn('slow');
			$('.hjlee #loading2').html('');
			$.each(data, function(key, val) {
				var trHtml;

				for(i = 0; i < val.length; i++) {
					if(nextMonthCnt == 1) {
						trHtml = "+1M Amt.&nbsp;&nbsp;";
					} else {
						trHtml = "";
					}
					
					sum_amt4 += val[i].amt2;
					
					trHtml += '[' + val[i].biz_area + ' : ' + (val[i].amt2 / div).toFixed(1).format() + ']&nbsp;&nbsp;&nbsp;';
						
					if(nextMonthCnt == 2) {
						trHtml += '[계 : ' + (sum_amt4 / div).toFixed(1).format() + ']';
					}
					
					$('.hjlee #loading2').append( trHtml );
					
					nextMonthCnt++;
				}
			});
		},
		error: function() {
			if( !$('hjlee li.error')[0] ) {
				$('hjlee').slideUp('fast');
				$('hjlee').html('');
				$('hjlee').append('<li class="error">정보를 불러올 수 없습니다. (Next Month)</li>');
				$('hjlee').slideDown('fast');
			}
		}
	});
	*/
	dataCall();
}
	
function dataCall() {
	clearTimeout();
	setTimeout(showDisp, 60000);
}
</script>
</head>
<body>
<div class="table">
	<p align="center" style="font-weight:bold; font-size:12pt">
		<font color="#FF4500">월간</font> 확보 매출
	</p>
	<!--
	<form name="fm" method="POST" action="n_month_sales.asp">
		조회년월일 <input type="tel" name="today" size="8" value="</%= today %>" />&nbsp;
		<input type="submit" value="조회" />&nbsp;&nbsp;ex) YYYYMMDD
	</form>
	//-->
	<div>
		<input type="month" id="dtDate" value="${date}"><button id="btnSearch">검색</button>
	</div>
	<div id="caption" style="text-align:right;">&nbsp;</div>
	<table style="width:100%;">
		<thead>
			<tr align="right" height="27" style="background-color:#AB8212; color:white; border-bottom: 1px solid white;">
				<th align="left">
					순
				</th>
				<th width="40" align="left">
					영업소
				</th>
				<th>
					계획금액
				</th>
				<th>
					출하완료
				</th>
				<th>
					출하예정
				</th>
				<th>
					확보매출
				</th>
				<th align="right">
					%
				</th>
			</tr>
		</thead>
		<tbody>
		</tbody>
	</table>
</div>
<br/>

<div id="loading">
	<div style="width:100%;height:200%;text-align:center;">
		<img src="/images/loading.gif" width="100" border="0" alt="Loading..." />
	</div>
</div>

<br/>
<!-- 
<div class="hjlee" style="background:#FFE00F;width:100%;padding-top:7px;padding-bottom:6px;text-align:center;">
	<div id="loading2">
		. . . Loading . . .
	</div>
</div>
 -->
</body>
</html>