google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawChart);

function drawChart() {
	var date = document.getElementById("tranDt").value;
	$.ajax({
		url : "/car/car.json",
		dataType : "json",
		type : "get",
		data : {"tranDt" : date},
		success : function (result) {
	    	$("#carList").html("");
	    	$.each(result, function(key) {
	    		var list = result[key];
	    		var data = new google.visualization.DataTable();
	    		data.addColumn('string', 'CarTeam');
	    		data.addColumn('number', '오전');
	    		data.addColumn({type:'string', role:'annotation'});
	    		data.addColumn('number', '오후');
	    		data.addColumn({type:'string', role:'annotation'});
	    		var am = 0;
	    		var pm = 0;
	    		var nflag = 0;
		    	for (i = 0; i < list.length; i++) {
		    		nflag = 0;
	    			if (list[i].ampm == "A") {
	    				am = Math.round(list[i].tran_size / list[i].car_size * 100);
	    				pm = 0;
	    			} else if (list[i].ampm == "P") {
	    				pm = Math.round(list[i].tran_size / list[i].car_size * 100);
	    				if (i == 0 || list[i].car_no != list[i-1].car_no)
	    					am = 0;
	    			} else if (list[i].ampm == "N") {
	    				nflag = 2;
	    			} else {
	    				am = 0;
	    				pm = 0;
	    				data.addRows([
	    				    [list[i].car_no, am, '배차가 없습니다.', pm, '']
	  	    			]);
	    				nflag = 1;
	    			}
	    			
	    			var deadline = '';
	    			if (list[i].deadline == 'Y')
	    				deadline = ' (마감)';
	    			
	    			if (((i != list.length - 1 && list[i].car_no != list[i+1].car_no) || i == list.length - 1) && nflag == 0) {
    					data.addRows([
    					    [list[i].car_no, am > 100 ? 100 : am, am + '%' + deadline, pm > 100 ? 100 : pm, pm + '%' + deadline]
    					]);
		    		}
		    	}

				var options = {
//					animation: {easing: 'linear',startup: true},
					legend: {position: 'top'},
					chartArea: {width: '80%', height: '90%', left: '15%'},
					colors: ['#AAEBAA', '#FFD0A1'],
					tooltip: {
						trigger: 'none'
					},
					annotations: {
						alwaysOutside: false,
						textStyle: {
							fontSize: 10,
							auraColor: 'none',
							color: '#555'
						}
					},
					hAxis: {
						viewWindow: {
							max: 100
						},
						minValue: 0,
						textStyle: {
							bold: true,
							fontSize: 12,
							color: '#4d4d4d'
						},
						titleTextStyle: {
							bold: true,
							fontSize: 18,
							color: '#4d4d4d'
						}
					}
				};
				
				if(nflag == 2)
					$('#carList').html('<p style="width: 100%; font-size:15pt; text-align: center;"><br />직배 휴무일입니다.</p>');
				else {
					var chart = new google.visualization.BarChart(document.getElementById('carList'));
					chart.draw(data, options);
				}
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
	    timeout:60000
	});
}