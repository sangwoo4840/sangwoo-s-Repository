<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
<title>업무용승용차 운행기록</title>
<style type="text/css">
body { margin: 0; background-color: #ECE8DC; color: #664B00; }
.contents { width: 100%; max-width: 800px; margin: 0 auto; }
table { width: 100%; border-spacing: 0; font-size: 12pt;}
th { background-color: #eee; border-right: 1px solid white; }
input { font-size: 12pt; border: 0; padding: 10px; width: 100%; text-align: right; }
button { width: 100%; font-size: 12pt; font-weight: bold; border: 0; margin: 10px 0 10px 0; padding: 8px; background-color: #997000; color: white; }
.line { border-bottom: 1px solid white; }
.right { text-align: right; }
#model_number { background-color: #eee; text-align: left; }
#total_mileage, #business { background-color: #eee; }
#date, #remark { text-align: left; }
#drivingdailylist { text-align: center; }
#drivingdailylist th { padding: 5px; }
</style>
<script src="/js/jquery-1.9.1.js"></script>
<script type="text/javascript">
var data = '${data}';
if (data == 'N') {
	alert("업무용 차량 정보가 없습니다.");
	history.back();
}

var maxDate;
var minMileage = 0;
loadList();

function setTotal_mileage() {
	$('#before_mileage').val(parseInt($('#before_mileage').val()));
	$('#after_mileage').val(parseInt($('#after_mileage').val()));
	
	if (parseInt($('#before_mileage').val()) < parseInt(minMileage)) {
		$('#before_mileage').val(minMileage);
	}
	if (parseInt($('#after_mileage').val()) < parseInt($('#before_mileage').val())) {
		$('#after_mileage').val($('#before_mileage').val());
	}
	$('#total_mileage').val($('#after_mileage').val() - $('#before_mileage').val());
	setBusiness();
}

function setBusiness() {
	$('#business').val($('#total_mileage').val() - $('#commute').val());
}

function getToday() {
	var now = new Date();
	var year = now.getYear() + 1900;
	var month = now.getMonth() + 1
	if ((month + '').length < 2) {
		month = '0' + month;
	}
	var date = now.getDate();
	if ((date + '').length < 2) {
		date = '0' + date;
	}
	
	return year + '-' + month + '-' + date;
}

function load() {
	var today = getToday();
	var date = $('#date').val();
	
	if (today < date)
		$('#date').val(today);
	
	if (maxDate != '' && maxDate >= date && date != today) {
		$('#before_mileage').attr('readonly', true);
		$('#after_mileage').attr('readonly', true);
		$('#commute').attr('readonly', true);
		$('#before_mileage').css('background-color', '#eee');
		$('#after_mileage').css('background-color', '#eee');
		$('#commute').css('background-color', '#eee');
	} else {
		$('#before_mileage').attr('readonly', false);
		$('#after_mileage').attr('readonly', false);
		$('#commute').attr('readonly', false);
		$('#before_mileage').css('background-color', '');
		$('#after_mileage').css('background-color', '');
		$('#commute').css('background-color', '');
	}
	
	date = $('#date').val();
	$.ajax({
		url: '/drivingdaily/drivingdaily.json',
		dataType : "json",
        type: 'get',
        data: { date: date },
        success: function(result) {
        	$.each(result, function(key) {
	    		var list = result[key];
	    		$('#model_number').val(list[0].model + '(' + list[0].number + ')');
	    		$('#model').val(list[0].model);
	    		$('#number').val(list[0].number);
	    		$('#before_mileage').val(list[0].before_mileage);
	    		$('#after_mileage').val(list[0].after_mileage);
	    		$('#total_mileage').val(list[0].total_mileage);
	    		$('#commute').val(list[0].commute);
	    		$('#business').val(list[0].business);
	    		$('#remark').val(list[0].remark);
        	});
        	
        	loadList();
        }
   });
}

function loadList() {
	var date = $('#date').val();
	$.ajax({
		url: '/drivingdaily/drivingdailylist.json',
		dataType : "json",
        type: 'get',
        success: function(result) {
        	$.each(result, function(key) {
	    		var list = result[key];
	    		var html = '';
	    		
	    		if (list[0] != null)
	    			maxDate = list[0].date;
	    		if (list[0] != null && list[0].date != getToday())
 	    			minMileage = list[0].after_mileage;
 	    		else if (list[1] != null)
 	    			minMileage = list[1].after_mileage;
	    		
	    		for (i = 0; i < list.length; i++) {
	    			html += '<tr>';
	    			html += '<td>' + list[i].date + '</td><td>' + list[i].before_mileage + '</td><td>' + list[i].after_mileage + '</td>';
	    			html += '</tr>';
	    		}
	    		
	    		$('#drivingdailylist tbody').html(html);
        	});
        }
   });
}

function save() {
	setTotal_mileage();
	
	if ($('#before_mileage').val() < 0 || $('#after_mileage').val() < 0 || $('#commute').val() < 0)
		alert('거리는 -가 될 수 없습니다.');
	else if ($('#total_mileage').val() < 0)
		alert('주행거리를 확인해 주세요.');
	else if ($('#business').val() < 0)
		alert('업무용거리를 확인해 주세요.');
	else {
		var date = $('#date').val();
		var model = $('#model').val();
		var number = $('#number').val();
		var before_mileage = $('#before_mileage').val();
		var after_mileage = $('#after_mileage').val();
		var total_mileage = $('#total_mileage').val();
		var commute = $('#commute').val();
		var business = $('#business').val();
		var remark = $('#remark').val();
		
		$.ajax({
	        type: 'post',
	        url: '/drivingdaily',
	        data: {
	        	action: 'save',
	        	date: date,
	        	model: model,
	        	number: number,
	        	before_mileage: before_mileage,
	        	after_mileage: after_mileage,
	        	total_mileage: total_mileage,
	        	commute: commute,
	        	business: business,
	        	remark: remark
	        },
	        success: function(data) {
	        	alert('저장되었습니다.');
	        	loadList();
	        }
	   });
	}
}
</script>
</head>
<body>
<div class="contents">
<form id="drivingdailyForm">
<table>
	<tr>
		<th class="line" width="20%">차종</th>
		<td class="line" width="65%">
			<input type="text" id="model_number" value="${model}(${number})" readonly="readonly">
			<input type="hidden" id="model" name="model" value="${model}">
			<input type="hidden" id="number" name="number" value="${number}">
		</td>
		<td class="line" width="15%"></td>
	</tr>
	<tr>
		<th class="line">사용일자</th>
		<td class="line"><input type="date" id="date" name="date" value="${date}" onchange="load();" required="required"></td>
		<td class="line"></td>
	</tr>
	<tr>
		<th>주행전</th>
		<td><input type="number" id="before_mileage" name="before_mileage" value="${before_mileage}" min="0" onchange="setTotal_mileage();" required="required"></td>
		<td class="right">km</td>
	</tr>
	<tr>
		<th>주행후</th>
		<td><input type="number" id="after_mileage" name="after_mileage" value="${after_mileage}" min="0" onchange="setTotal_mileage();" required="required"></td>
		<td class="right">km</td>
	</tr>
	<tr>
		<th class="line">주행거리</th>
		<td class="line"><input type="number" id="total_mileage" name="total_mileage" value="${total_mileage}" readonly="readonly"></td>
		<td class="line right">km</td>
	</tr>
	<tr>
		<th>출퇴근</th>
		<td><input type="number" id="commute" name="commute" value="${commute}" min="0" onchange="setBusiness();" required="required"></td>
		<td class="right">km</td>
	</tr>
	<tr>
		<th class="line">업무용</th>
		<td class="line"><input type="number" id="business" name="business" value="${business}" readonly="readonly"></td>
		<td class="line right">km</td>
	</tr>
	<tr>
		<th class="line">비고</th>
		<td class="line"><input type="text" id="remark" name="remark" value="${remark}"></td>
		<td class="line"></td>
	</tr>
</table>
</form>
<button onclick="save();">저장</button>
<table id="drivingdailylist">
<thead>
	<tr>
		<th>날짜</th>
		<th>주행전</th>
		<th>주행후</th>
	</tr>
</thead>
<tbody>
</tbody>
</table>
</div>
</body>
</html>