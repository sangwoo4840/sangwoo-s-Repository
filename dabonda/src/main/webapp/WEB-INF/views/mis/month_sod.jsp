<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
<title>월간 수주 실적 조회 (삭제반영)</title>
<style>
	body {background-image: url('/images/background.png'); font-size:12px; margin-left:0px; margin-right:0px;}
	ul {margin:0;padding:0;list-style:none;display:none;}
	ul li {margin:0;padding:10px;}
	.table {}
	table {border-collapse: collapse; border-spacing: 0; background-color: white;}
	input {background-color: white; border: 1px solid #CFA636; border-radius: 3px;}
	td {border-bottom: 1px solid #664B00;}

	.graph1 {width:100%;border:0px solid #000;}
	.graph1  {
		position:relative;
		width:0%;height:13px;
		transition: width 1.5s ease-in-out;
		-webkit-transition: width 1.5s ease-in-out;
	}
	.graph2 {width:100%;border:0px solid #000;}
	.graph2  {
		position:relative;
		width:0%;height:13px;
		transition: width 1.5s ease-in-out;
		-webkit-transition: width 1.5s ease-in-out;
	}
	//.graph div span {position:absolute;top:5px;left:10px;font-weight:bold;}
	//.graph div.graph1 {background-color:silver}
	//.graph div.graph2 {background-color:red;}
	.graph1 {background-color:silver;}
	.graph2 {background-color:red;}
</style>
<script src="/js/jquery-1.9.1.js"></script>
<script src="/js/money.js"></script>
<script type="text/javascript">
// 주소창 자동 닫힘
window.addEventListener("load", function() {
	setTimeout(loaded, 100);
}, false);
function loaded() {
	window.scrollTo(0, 1);
}

function go_dtl(p_cd, p_nm) {
	location.href="/month_sod/dtl?province_cd=" + p_cd + "&province_nm=" + p_nm;
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
	var sum_plan_amt, sum_curr_amt, sum_real_amt,	sum_rslt_amt, sum_pre_del_amt, sum_del_amt, div, rankCnt, printRankCnt;	//합계 전용
	sum_plan_amt = 0;
	sum_curr_amt = 0;
	sum_real_amt = 0;
	sum_rslt_amt = 0;
	sum_pre_del_amt = 0;
	sum_del_amt = 0;
	div = 1000000;
	rankCnt = 1;
	printRankCnt = 1;

	var length = 0;
	$.ajax({
		//url: 'ajax/test.json',
		url: '/month_sod/month_sod.json',
		dataType: 'json',
		type : "get",
		success: function(data) {
			//console.log( data.one );
			$('.table').fadeIn('slow');
			$('table tbody').html('');
			$('#loading').remove();
			$('#caption').html('');
			$('#caption').html( '<p style="text-align:right">(단위:백만원, ${now})</p>' );
			$.each(data, function(key, val) {
				var trHtml;
				var p_cd, p_nm;
				length = val.length;

				for(i = 0; i < val.length; i++) {
					p_cd = val[i].province_cd;
					p_nm = val[i].province_nm;
			
					//printRankCnt = rankCnt;

					if(printRankCnt >= 9)
						rankCnt = "";

					if(rankCnt < 14 && p_nm != "농협") {
						trHtml = '<tr height="27" style="color:gray" onclick="go_dtl(' + p_cd + ', \'' + p_nm + '\');">';
						trHtml += '<td align="left">' + rankCnt + '</td>';
						trHtml += '<td align="left">' + val[i].province_nm + '</td>';
						trHtml += '<td align="right">' + (val[i].plan_amt / div).toFixed(1).format() + '</td>';
						trHtml += '<td align="right">' + (val[i].curr_amt / div).toFixed(1) + '</td>';
						trHtml += '<td align="right">' + (val[i].real_amt / div).toFixed(1).format() + '</td>';
						trHtml += '<td align="right">' + val[i].real_percent.toFixed(1) + '&percnt;</td>';
						trHtml += '<td align="right">' + (val[i].pre_del_amt / div).toFixed(1) + '</td>';
						trHtml += '<td align="right">' + (val[i].del_amt / div).toFixed(1) + '</td>';
						trHtml += '</tr>';
						$('table tbody').append( trHtml );

						sum_plan_amt += val[i].plan_amt;
						sum_curr_amt += val[i].curr_amt;
						sum_real_amt += val[i].real_amt;
						sum_pre_del_amt += val[i].pre_del_amt;
						sum_del_amt += val[i].del_amt;

						rankCnt++;
					}
					
					if(printRankCnt == 8) {
						var trHtml3, avr;
						avr = sum_real_amt / sum_plan_amt * 100;
						trHtml3 = '<tr height="30" style="background-color:#E4F7BA;">';
						trHtml3 += '<td>&nbsp;</td>';
						trHtml3 += '<td>소계</td><td align="right">' + (sum_plan_amt / div).toFixed(1).format() + '</td>';
						trHtml3 += '<td align="right">' + (sum_curr_amt / div).toFixed(1) + '</td>';
						trHtml3 += '<td align="right">' + (sum_real_amt / div).toFixed(1).format() + '</td>';
						trHtml3 += '<td align="right">' + avr.toFixed(1) + '&percnt;</td>';
						trHtml3 += '<td align="right">' + (sum_pre_del_amt / div).toFixed(1) + '</td>';
						trHtml3 += '<td align="right">' + (sum_del_amt / div).toFixed(1) + '</td>';
						trHtml3 += '</tr>';
						$('table tbody').append( trHtml3 );

						$('table tbody').find('tr').eq(0).css("background-color" , "#E7B607").css("color" , "#000000").animate({'opacity' : '0'}, 500).animate({'opacity' : '1'}, 500);
						$('table tbody').find('tr').eq(1).css("background-color" , "#F3CA5A").css("color" , "#000000").animate({'opacity' : '0'}, 500).animate({'opacity' : '1'}, 500);
						$('table tbody').find('tr').eq(2).css("background-color" , "#FFDEAD").css("color" , "#000000").animate({'opacity' : '0'}, 500).animate({'opacity' : '1'}, 500);
						//$('table tbody').find('tr:last').css("background-color" , "#F2685E");
					
					}
					if(printRankCnt == length - 1) {
						var avr, trHtml2;
						avr = sum_real_amt / sum_plan_amt * 100;
						trHtml2 = '<tr height="30" style="background-color:#AB8212; color:white;">';
						trHtml2 += '<td>&nbsp;</td>';
						trHtml2 += '<td>총계</td><td align="right">' + (sum_plan_amt / div).toFixed(1).format() + '</td>';
						trHtml2 += '<td align="right">' + (sum_curr_amt / div).toFixed(1) + '</td>';
						trHtml2 += '<td align="right">' + (sum_real_amt / div).toFixed(1).format() + '</td>';
						trHtml2 += '<td align="right">' + avr.toFixed(1) + '&percnt;</td>';
						trHtml2 += '<td align="right">' + (sum_pre_del_amt / div).toFixed(1) + '</td>';
						trHtml2 += '<td align="right">' + (sum_del_amt / div).toFixed(1) + '</td>';
						trHtml2 += '</tr>';
						$('table tbody').append( trHtml2 );
					}

					if(printRankCnt == length) {
						var avr, trHtml2;
						avr = sum_real_amt / sum_plan_amt * 100;
						trHtml2 = '<tr height="30" style="background-color:#93CC8D; color:white;">';
						trHtml2 += '<td>&nbsp;</td>';
						trHtml2 += '<td>증감</td><td align="right">&nbsp;</td>';
						trHtml2 += '<td align="right">&nbsp;</td>';
						
						if(new Date().getDate() == '1')
							trHtml2 += '<td align="right">-</td>';
						else
							trHtml2 += '<td align="right">' + ((sum_real_amt - val[i].real_amt - val[i].real_amt) / div).toFixed(1) + '</td>';
						
						//trHtml2 += '<td align="right">' + ((sum_real_amt - val.REAL_AMT - val.REAL_AMT) / div).toFixed(1) + '</td>';
						trHtml2 += '<td align="right">&nbsp;</td>';
						trHtml2 += '<td align="right">&nbsp;</td>';
						trHtml2 += '<td align="right">&nbsp;</td>';
						trHtml2 += '</tr>';
						$('table tbody').append( trHtml2 );
					}

					printRankCnt++;
					

				
				}
			});

				/*
				var avr, trHtml2;
				avr = sum_real_amt / sum_plan_amt * 100;
				trHtml2 = '<tr height="30">';
				trHtml2 += '<td>&nbsp;</td>';
				trHtml2 += '<td>총계</td><td align="right">' + (sum_plan_amt / div).toFixed(1).format() + '</td>';
				trHtml2 += '<td align="right">' + (sum_curr_amt / div).toFixed(1) + '</td>';
				trHtml2 += '<td align="right">' + (sum_real_amt / div).toFixed(1) + '</td>';
				trHtml2 += '<td align="right">' + avr.toFixed(1) + '&percnt;</td>';
				trHtml2 += '<td align="right">' + (sum_pre_del_amt / div).toFixed(1) + '</td>';
				trHtml2 += '<td align="right">' + (sum_del_amt / div).toFixed(1) + '</td>';
				trHtml2 += '</tr>';

				$('table tbody').append( trHtml2 );

				*/

				/*
				trHtml4 = '<tr height="30">';
				trHtml4 += '<td>&nbsp;</td>';
				trHtml4 += '<td>전일</td><td align="right">&nbsp;</td>';
				trHtml4 += '<td align="right">' + (val.CURR_AMT / div).toFixed(1) + '</td>';
				trHtml4 += '<td align="right">' + (val.REAL_AMT / div).toFixed(1) + '</td>';
				trHtml4 += '<td align="right">&nbsp;</td>';
				trHtml4 += '<td align="right">' + (val.PRE_DEL_AMT / div).toFixed(1) + '</td>';
				trHtml4 += '<td align="right">' + (val.DEL_AMT / div).toFixed(1) + '</td>';
				trHtml4 += '</tr>';
				$('table tbody').append( trHtml4 );
				*/

				/*
				$('table tbody').find('tr').eq(0).css("background-color" , "#FF4500").css("color" , "#000000").css("font-weight" , "bold").animate({'opacity' : '0'}, 500).animate({'opacity' : '1'}, 500);
				$('table tbody').find('tr').eq(1).css("background-color" , "#FF8C00").css("color" , "#000000").css("font-weight" , "bold").animate({'opacity' : '0'}, 500).animate({'opacity' : '1'}, 500);
				$('table tbody').find('tr').eq(2).css("background-color" , "#FFDEAD").css("color" , "#000000").css("font-weight" , "bold").animate({'opacity' : '0'}, 500).animate({'opacity' : '1'}, 500);
				*/
				//$('table tbody').find('tr:last').css("background-color" , "F2685E");
				//$('table tbody').find('tr').eq(10).css("background-color" , "yellow");
				//$('.table').fadeIn('slow');

			$('table tbody').find('tr').eq(length+1).css("color" , "#D0D0D0");

			var newDt = new Date();
			var dateRate;
			newDt.setMonth( newDt.getMonth() + 1);
			newDt.setDate(0);
			dateRate = new Date().getDate() / newDt.getDate() * 100;

			$('.graph1 ').css('width', dateRate+'%');
			$('.graph1 ').html('<span>' + dateRate.toFixed(1) +'% </span>');

			$('.graph2 ').css('width', avr+'%');
			$('.graph2 ').html('<span>' + avr.toFixed(1) +'% </span>');

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

function dataCall() {
	clearTimeout();
	setTimeout(showDisp, 30000);
}
</script>
</head>
<body>
<div class="table">
	<p align="center" style="font-weight:bold; font-size:12pt">
		<font color="#FF4500">월간</font> 수주 실적 순위 (삭제반영)
	</p>
	<div id="caption"></div>
	<table style="width:100%;">
		<thead>
			<tr align="right" height="27" style="background-color:#AB8212; color:white; border-bottom: 1px solid white;">
				<th align="left">
					순위
				</th>
				<th width="40" align="left">
					영업소
				</th>
				<th>
					계획
				</th>
				<th>
					금일
				</th>
				<th>
					월계
				</th>
				<th>
					%
				</th>
				<th>
					전삭
				</th>
				<th>
					현삭
				</th>
			</tr>
		</thead>
		<tbody>
		</tbody>
	</table>
</div>
<div id="loading" style="position:fixed; z-index: 9999; width:100%; height: 100%;">
	<div style="width:100%;height:200%;text-align:center;">
		<img src="/images/loading.gif" width="100" border="0" alt="Loading..." />
	</div>
</div>
</body>
</html>