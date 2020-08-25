<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
<title>월간 확보 매출 조회 (Detail)</title>
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
	//location.href="./n_month_sales_dtl.asp?province_cd=" + p_cd + "&province_nm=" + p_nm + "&date=${date}";
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
});

function showDisp() {
	var sum_plan_amt, sum_amt1, sum_amt2, sum_amt3,	div, rankCnt, printRankCnt;	//합계 전용
	sum_plan_amt = 0;
	sum_amt1 = 0;
	sum_amt2 = 0;
	sum_amt3 = 0;
	div = 1000000;
	rankCnt = 1;
	printRankCnt = 1;
		
	var province_cd = '${province_cd}';
		
	$.ajax({
		//url: 'ajax/test.json',
		url: '/fix_sales2/dtl/fix_sales_dtl.json',
		dataType: 'json',
		type : "get",
		data : {province_cd : province_cd},
		success: function(data) {
			//console.log( data.one );
			$('.table').fadeIn('slow');
			$('table tbody').html('');
			$('#loading').remove();
			$('#caption').html('');
			$('#caption').html( '<p style="text-align:right">(기준:시판영업, 단위:백만원, ${now})</p>' );
			$.each(data, function(key, val) {
				var trHtml;
				var p_cd, p_nm;
					
				for(i = 0; i < val.length; i++) {
					p_cd = val[i].bp_cd;
					p_nm = val[i].bp_nm;
					
					printRankCnt = rankCnt;
					
					/*
					if(rankCnt > 7)
						printRankCnt = "";
					
					if(rankCnt > 7)
						rankCnt = "";
					*/
					
					trHtml = '<tr height="27" style="color:gray">';
					trHtml += '<td align="left">&nbsp;' + printRankCnt + '</td>';
					trHtml += '<td align="left">' + val[i].bp_nm + '</td>';
					trHtml += '<td align="right">' + (val[i].plan_amt / div).toFixed(1).format() + '</td>';
					trHtml += '<td align="right">' + (val[i].amt1 / div).toFixed(1) + '</td>';
					trHtml += '<td align="right">' + (val[i].amt2 / div).toFixed(1) + '</td>';
					trHtml += '<td align="right">' + (val[i].amt3 / div).toFixed(1) + '</td>';
					trHtml += '<td align="right">' + val[i].amt_percent.toFixed(1) + '%</td>';
					trHtml += '</tr>';
					$('table tbody').append( trHtml );
					
					sum_plan_amt += val[i].plan_amt;
					sum_amt1 += val[i].amt1;
					sum_amt2 += val[i].amt2;
					sum_amt3 += val[i].amt3;
					
					if(rankCnt >= 1)
						rankCnt++;
				}
			});
				
			var avr, trHtml2;
			avr = sum_amt3 / sum_plan_amt * 100;
			trHtml2 = '<tr height="27" style="color:white;">';
			trHtml2 += '<td>&nbsp;</td>';
			trHtml2 += '<td>총계</td>'
			trHtml2 += '<td align="right">' + (sum_plan_amt / div).toFixed(1).format() + '</td>';
			trHtml2 += '<td align="right">' + (sum_amt1 / div).toFixed(1) + '</td>';
			trHtml2 += '<td align="right">' + (sum_amt2 / div).toFixed(1) + '</td>';
			trHtml2 += '<td align="right">' + (sum_amt3 / div).toFixed(1) + '</td>';
			trHtml2 += '<td align="right">' + avr.toFixed(1) + '%</td>';
			trHtml2 += '</tr>';
			$('table tbody').append( trHtml2 );
				
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
	dataCall();
}

function dataCall(){
	clearTimeout();
	setTimeout(showDisp, 60000);
}
</script>
</head>
<body>
<div class="table">
	<p align="center" style="font-weight:bold; font-size:12pt">
		<font color="#FF4500">월간</font> 확보 매출 (${province_nm} 상세내역)
	</p>
	<!--
	<form name="fm" method="POST" action="n_month_sales.asp">
		조회년월일 <input type="tel" name="today" size="8" value="</%= today %>" />&nbsp;
		<input type="submit" value="조회" />&nbsp;&nbsp;ex) YYYYMMDD
	</form>
	//-->
	<div id="caption"></div>
	<table style="width:100%;">
		<thead>
			<tr align="right" height="27" style="background-color:#AB8212; color:white; border-bottom: 1px solid white;">
				<th align="left">
					순
				</th>
				<th width="70" align="left">
					대리점명
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
<div id="loading" style="position:fixed; z-index: 9999; width:100%; height: 100%;">
	<div style="width:100%;height:200%;text-align:center;">
		<img src="/images/loading.gif" width="100" border="0" alt="Loading..." />
	</div>
</div>
</body>
</html>