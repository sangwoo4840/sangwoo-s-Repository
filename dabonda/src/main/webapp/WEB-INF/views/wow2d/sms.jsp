<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
<title>수주SMS현황</title>
<link href="/css/simplegrid.css" type="text/css" rel="stylesheet">
<link href="/css/sms.css" type="text/css" rel="stylesheet">
<script src="/js/jquery-1.9.1.js"></script>
<script src="/js/sms.js"></script>
<script type="text/javascript">
$.ready(function(){
	searchSms();
});

function searchSms() {
	var send_dt = document.getElementById("send_dt").value;
	var suc_chk = $('input[name=suc_chk]:checked').val();
	$.ajax({
		url : "/sms/sms.json",
		dataType : "json",
		type : "get",
		data : {send_dt : send_dt,
			success_chk : suc_chk},
	    success : function (result) {
	    	$("#smsTable").html('');
	    	$.each(result, function(key) {
	    		var list = result[key];
		    	var content = "";
		    	for (i = 0; i < list.length; i++) {
		    		content += '<tr';
		    		if (list[i].sms_type == '알림톡')
		    			content += ' style="background: #FAED7D;"';
		    		content += '>';
		    		content += '<td rowspan="2" width="25%" style="border-bottom: 1px solid #875E00;';
		    		if (list[i].so_delete_chk == 'Y')
		    			content += ' color: red;';
		    		content += '">';
		    		content += list[i].so_no;
		    		content += '</td>';
		    		content += '<td rowspan="2" width="10%" style="border-bottom: 1px solid #875E00;';
		    		if (list[i].success_chk == 'N')
		    			content += ' color: red;';
		    		content += '">';
		    		content += list[i].success_chk;
		    		content += '</td>';
		    		content += '<td width="30%">';
		    		content += list[i].agent_nm;
		    		content += '</td>';
		    		content += '<td width="35%">';
		    		content += list[i].send_dt
		    		content += '</td>';
		    		content += '</tr>';
		    		content += '<tr';
		    		if (list[i].sms_type == '알림톡')
		    			content += ' style="background: #FAED7D;"';
		    		content += '>';
		    		content += '<td style="border-bottom: 1px solid #875E00;">';
		    		content += list[i].cust_nm;
		    		content += '</td>';
		    		content += '<td style="border-bottom: 1px solid #875E00;">';
		    		content += list[i].cust_tel;
		    		content += '</td>';
		    		content += '</tr>';
		    	}
		    	
				$("#smsTable").append(content);
	    	});
		},
		beforeSend : function(){
			$(".wrap-loading").removeClass("display-none");
	    },
	    complete:function(){
			$('.wrap-loading').addClass('display-none');
		},
	    error:function(e){
	    },
	    timeout:180000
	});
}
</script>
<link rel="icon" type="image/x-icon"  href="/images/favicon.png" />
<link rel="apple-touch-icon" type="image/x-icon"  href="/images/favicon.png" />
</head>
<body onload="searchSms()">
<div id="top">
<div class="wrap-loading display-none">
    <div><img src="/images/loading.gif" width="40%" /></div>
</div>
	<div id="searchField">
		<table>
			<tr>
				<td width="30%">발송일</td>
				<td width="70%"><input type="date" id="send_dt" value="${date}" width="100%"></td>
			</tr>
			<tr>
				<td>발송여부</td>
				<td>
				<input type="radio" id="suc_A" name="suc_chk" value="A" checked="checked"><label for="suc_A">전체</label>
				<input type="radio" id="suc_Y" name="suc_chk" value="Y"><label for="suc_Y">Y</label>
				<input type="radio" id="suc_N" name="suc_chk" value="N"><label for="suc_N">N</label>
				</td>
			</tr>
		</table>
		<div class="col-1-1 mobile-col-1-1" style="text-align: center; margin-top: 5px;">
			<a href="javascript: searchSms();">조 회</a>
		</div>
	</div>
	<div id="smsHeader">
		<table id="smsHeaderTable">
			<tr>
				<td rowspan="2" width="25%">수주번호</td>
				<td rowspan="2" width="10%">발송여부</td>
				<td width="30%">거래처</td>
				<td width="35%">전송시간</td>
			</tr>
			<tr>
				<td>납품처</td>
				<td>연락처</td>
			</tr>
		</table>
	</div>
</div>
<div id="smsList">
	<table id="smsTable">
	</table>
</div>
<div id="footer"></div>
</body>
</html>