Map = function() {
	this.map = new Object();
};
Map.prototype = {
	put : function(key, value) {
		this.map[key] = value;
	},   
	get : function(key) {
		return this.map[key];
	},
	containsKey : function(key) {
		return key in this.map;
	},
	containsValue : function(value) {
		for (var prop in this.map) {
			if (this.map[prop] == value) return true;
		}
		return false;
	},
	isEmpty : function(key) {
		return (this.size() == 0);
	},
	clear : function() {
		for (var prop in this.map) {
			delete this.map[prop];
		}
	},
	remove : function(key) {
		delete this.map[key];
	},
	keys : function() {
		var keys = new Array();
		for (var prop in this.map) {
			keys.push(prop);
		}
		return keys;
	},
	values : function() {
		var values = new Array();
		for (var prop in this.map) {
			values.push(this.map[prop]);
		}
		return values;
	},
	size : function() {
		var count = 0;
		for (var prop in this.map) {
			count++;
		}
		return count;
	}
};

//WR1013 = 1140장, WR1012 = 978장
var WR1013 = new Map(), WR1012 = new Map();
WR1013.put('WR1013A', '1140 옷장'); WR1013.put('WR1013B', '1140 이불장'); WR1013.put('WR1013D', '1140 칸막이장');
WR1012.put('WR1012A', '978 옷장'); WR1012.put('WR1012B', '978 이불장'); WR1012.put('WR1012D', '978 칸막이장');
var WR1013A = new Map(), WR1013B = new Map(), WR1013D = new Map(), WR1012A = new Map(), WR1012B = new Map(), WR1012D = new Map();
WR1013A.put('BWO-0002', '타이걸이');
WR1012A.put('BWO-0002', '타이걸이');
WR1013B.put('BWO-0002', '타이걸이'); WR1013B.put('WCD-1013', '1단서랍'); WR1013B.put('WCD-2013', '2단서랍');
WR1012B.put('BWO-0002', '타이걸이'); WR1012B.put('WCD-1012', '1단서랍'); WR1012B.put('WCD-2012', '2단서랍');
WR1013D.put('BWO-0002', '타이걸이'); WR1013D.put('WMR-0001', '몸통거울');
WR1012D.put('BWO-0002', '타이걸이'); WR1012D.put('WMR-0001', '몸통거울');

var SLIDE = new Map();
SLIDE.put('WRD534', '너츠'); SLIDE.put('WRD535', '브리드'); SLIDE.put('WRD539', '브리드월넛'); SLIDE.put('WRD557', '페퍼민트');
// WRD534 = 너츠, WRD535 = 브리드, WRD539 = 브리드월넛, WRD557 = 페퍼민트
var WRD534 = new Map(), WRD535 = new Map(), WRD539 = new Map(), WRD557 = new Map();
WRD534.put('WRD534L', '너츠문짝(좌)'); WRD534.put('WRD534C', '너츠문짝(중앙)'); WRD534.put('WRD534R', '너츠문짝(우)');
WRD535.put('WRD535L', '브리드문짝(좌)'); WRD535.put('WRD535C', '브리드문짝(중앙)'); WRD535.put('WRD535R', '브리드문짝(우)');
WRD539.put('WRD539L', '브리드월넛문짝(좌)'); WRD539.put('WRD539C', '브리드월넛문짝(중앙)'); WRD539.put('WRD539R', '브리드월넛문짝(우)');
WRD557.put('WRD557L', '페퍼민트문짝(좌)'); WRD557.put('WRD557C', '페퍼민트문짝(중앙)'); WRD557.put('WRD557R', '페퍼민트문짝(우)');

// WR5014 = 1000장, WR4014 = 900장, WR3014 = 500장, WR2014 = 450장, WR1014 = 260장
var WR5014 = new Map(), WR4014 = new Map(), WR3014 = new Map(), WR2014 = new Map(), WR1014 = new Map();
WR5014.put('WR5014A', '1000 옷장'); WR5014.put('WR5014B', '1000 이불장'); WR5014.put('WR5014D', '1000 칸막이장');
WR4014.put('WR4014A', '900 옷장'); WR4014.put('WR4014B', '900 이불장'); WR4014.put('WR4014D', '900 칸막이장');
WR3014.put('WR3014C', '500 반장');
WR2014.put('WR2014C', '450 반장');
WR1014.put('WR1014I', '아이보리 선반장'); WR1014.put('WR1014W', '월넛 선반장');
var WR5014A = new Map(), WR5014B = new Map(), WR5014D = new Map(), WR4014A = new Map(), WR4014B = new Map(), WR4014D = new Map();
WR5014A.put('BWO-0001', '타이걸이'); WR5014A.put('MRC-0001', '공용CC경1'); WR5014A.put('MRC-0002', '공용CC경2'); WR5014A.put('WPH-5014', '바지걸이');
WR4014A.put('BWO-0001', '타이걸이'); WR4014A.put('MRC-0001', '공용CC경1'); WR4014A.put('MRC-0002', '공용CC경2');  WR4014A.put('WPH-4014', '바지걸이');
WR5014B.put('BWO-0001', '타이걸이'); WR5014B.put('MRC-0001', '공용CC경1'); WR5014B.put('MRC-0002', '공용CC경2'); WR5014B.put('WCD-5014B', '코디서랍'); WR5014B.put('WCDZ-5014B', '1단서랍');
WR4014B.put('BWO-0001', '타이걸이'); WR4014B.put('MRC-0001', '공용CC경1'); WR4014B.put('MRC-0002', '공용CC경2'); WR4014B.put('WCD-4014B', '코디서랍'); WR4014B.put('WCDZ-4014B', '1단서랍');
WR5014D.put('BWO-0001', '타이걸이'); WR5014D.put('MRC-0001', '공용CC경1'); WR5014D.put('MRC-0002', '공용CC경2'); WR5014D.put('WCD-5014D', '3단서랍');
WR4014D.put('BWO-0001', '타이걸이'); WR4014D.put('MRC-0001', '공용CC경1'); WR4014D.put('MRC-0002', '공용CC경2'); WR4014D.put('WCD-4014D', '3단서랍');

var BUILTIN = new Map();
BUILTIN.put('WRD543', '미카'); BUILTIN.put('WRD546', '플럼'); BUILTIN.put('WRD547', '티라미수'); BUILTIN.put('WRD548', '발트'); BUILTIN.put('WRD533', '수플레'); BUILTIN.put('WRD561', '루이보스');
var door_type = new Map();
door_type.put('WRD543', 'LCR-CLRC-ALR-AC'); door_type.put('WRD546', 'MCR-LCM-LCR-CLRC-ALR-AC'); door_type.put('WRD547', 'ALR'); door_type.put('WRD548', 'LCR-CLRC-ALR-AC'); door_type.put('WRD533', 'LCR-CLRC-ALR-AC'); door_type.put('WRD561', 'ALR');
// WRD543 = 미카, WRD546 = 플럼, WRD547 = 티라미수, WRD548 = 발트, WRD533 = 수플레, WRD561 = 루이보스
var WRD543 = new Map(), WRD546 = new Map(), WRD547 = new Map(), WRD548 = new Map(), WRD533 = new Map(), WRD561 = new Map();
WRD543.put('WRD543GL', '미카유리문(좌)'); WRD543.put('WRD543GR', '미카유리문(우)'); WRD543.put('WRD543WL', '미카우드문(좌)'); WRD543.put('WRD543WR', '미카우드문(우)');
WRD546.put('WRD546NL', '플럼내추럴문(좌)'); WRD546.put('WRD546NR', '플럼내추럴문(우)'); WRD546.put('WRD546IL', '플럼아이보리문(좌)'); WRD546.put('WRD546IR', '플럼아이보리문(우)');
WRD547.put('WRD547L', '티라미수문(좌)'); WRD547.put('WRD547R', '티라미수문(우)');
WRD548.put('WRD548GL', '발트유리문(좌)'); WRD548.put('WRD548GR', '발트유리문(우)'); WRD548.put('WRD548WL', '발트우드문(좌)'); WRD548.put('WRD548WR', '발트우드문(우)');
WRD533.put('WRD533LRL', '수플레좌우문(좌)'); WRD533.put('WRD533LRR', '수플레좌우문(우)'); WRD533.put('WRD533CL', '수플레중앙문(좌)'); WRD533.put('WRD533CR', '수플레중앙문(우)');
WRD561.put('WRD561L', '루이보스문(좌)'); WRD561.put('WRD561R', '루이보스문(우)');

var basic_width = 0, basic_height = 0;
var list_construct_body = new Array();
var current_body = '', current_door = '', status_door = 'show';
var cri_no = 5, cri_height = 434;
//왼쪽 문 개수
var d500llr = 0, d500lc = 0, d450llr = 0, d450lc = 0;
//오른쪽 문 개수
var d500rlr = 0, d500rc = 0, d450rlr = 0, d450rc = 0;

var wardrobe = '';
var ward_kind = '';
var ward_door = '';
var ward_width = '';
var ward_height = '';
var ward_body = '';
var ward_position = '';
var ward_jabara = '';
var ward_jabara_sub = '';
var ward_pillar = '';
var ward_ep = '';
var ward_option = '';

var title;
var img_dr, img_no_dr;

$(function() {
	if (on_user == 'y') {
	 	$('.result-save-box').removeClass('invisible');
	}
	
	$('body').click(function() {
//		$(document).fullScreen(true);
	});
	
	if (navigator.userAgent.indexOf('Mobile') != -1 || navigator.userAgent.indexOf('Android') != -1) {
		cri_no = 10;
		cri_height = 217;
	} else {
		$('.frame-navi').height($(document).height() - 302);
		$(window).resize(function() {
			$('.frame-navi').height($(document).height() - 250);
		});
		$(document).resize(function() {
			$('.frame-navi').height($(document).height() - 250);
		});
	}
	
	$('.navi-menu').click(function() {
		$('.footer-note').addClass('invisible');
		
		if (!$(this).hasClass('navi-selected')) {
			$('.navi-menu').removeClass('navi-selected');
			$('.navi-menu-items').addClass('invisible');
			
			switch ($(this).attr('id')) {
			case 'navi-menu-basic': $('.note-basic').removeClass('invisible'); break;
			case 'navi-menu-construct': $('.note-construct').removeClass('invisible'); break;
			case 'navi-menu-body': $('.note-body').removeClass('invisible'); break;
			case 'navi-menu-door': $('.note-door').removeClass('invisible'); break;
			}
		}
		
		$(this).toggleClass('navi-selected');
		$('#'+$(this).attr('id')+'-item').toggleClass('invisible');
	});
	$('#navi-menu-result').click(function() {
		ward_width = $('#width').val();
		ward_height = $('#height').val();
		ward_body = '';
		ward_position = '';
		ward_door = '';
		ward_jabara = '';
		ward_jabara_sub = '';
		ward_pillar = $('.measure-left span').html();
		ward_ep = '';
		ward_option = '';
		var body_count = 0;
		var door_width = '';
		var jabara_width = 0;
		var jabara_temp = 0;
		d500llr = 0, d500lc = 0, d450llr = 0, d450lc = 0;
		d500rlr = 0, d500rc = 0, d450rlr = 0, d450rc = 0;
		
		var last_check = false;
		
		if (wardrobe == '') last_check = true;
		if ($('.frame-body').contents(':first-child').attr('id') == null) last_check = true;
		
		if (last_check) {
			if (cri_no == 5) {
				$('.footer-note').addClass('invisible');
				$('.note-alert').removeClass('invisible');
				$('.note-alert').html('<font color="red">구성 완료 후 시도해주세요.</font>');
			} else if (cri_no == 10) {
				alert('구성 완료 후 시도해주세요.');
			}
			return;
		}
		
		var first_body, last_body;
		var next_body = $('.frame-body').contents(':first-child');
		while (true) {
			if ($(next_body).attr('body-width') == null) break;
			
			body_count++;
			
			ward_body += $(next_body).attr('data-body') + ',';
			
			switch ($(next_body).attr('body-width')) {
			case 'W1140':
				door_width = 'd1140_s';
				ward_jabara += 'j1140,';
				if ($('#'+$(next_body).attr('id')+' .door-center').attr('data-door') == null) last_check = true;
				break;
			case 'W978':
				door_width = 'd978_s';
				ward_jabara += 'j978,';
				if ($('#'+$(next_body).attr('id')+' .door-center').attr('data-door') == null) last_check = true;
				break;
			
			case 'W1000':
				ward_position += 'A';
				ward_jabara_sub += 'j1000,';
				jabara_temp = jabara_width + 1000;
				if ($('#'+$(next_body).attr('id')+' .door-left').attr('data-door') == null) last_check = true;
				if ($('#'+$(next_body).attr('id')+' .door-right').attr('data-door') == null) last_check = true;
				door_check(next_body, 500, 'lr', 2);
				break;
			case 'W900':
				ward_position += 'B';
				ward_jabara_sub += 'j900,';
				jabara_temp = jabara_width + 900;
				if ($('#'+$(next_body).attr('id')+' .door-left').attr('data-door') == null) last_check = true;
				if ($('#'+$(next_body).attr('id')+' .door-right').attr('data-door') == null) last_check = true;
				door_check(next_body, 450, 'lr', 2);
				break;
			case 'W500':
				ward_position += 'C';
				ward_jabara_sub += 'j500,';
				jabara_temp = jabara_width + 500;
				if ($('#'+$(next_body).attr('id')+' .door-center').attr('data-door') == null) last_check = true;
				if (body_count == 1) last_check = true;
				door_check(next_body, 500, 'c', 1);
				break;
			case 'W450':
				ward_position += 'D';
				ward_jabara_sub += 'j450,';
				jabara_temp = jabara_width + 450;
				if ($('#'+$(next_body).attr('id')+' .door-center').attr('data-door') == null) last_check = true;
				if (body_count == 1) last_check = true;
				door_check(next_body, 450, 'c', 1);
				break;
			case 'W260':
				ward_position += 'E';
				ward_jabara_sub += 'j260,';
				jabara_temp = jabara_width + 260;
				break;
			}
			
			switch (wardrobe) {
			case 'builtin':
				if (2000 < jabara_temp) {
					if (1800 < jabara_width)
						ward_jabara += 'j2000,';
					else if (1500 < jabara_width)
						ward_jabara += 'j1800,';
					else if (1350 < jabara_width)
						ward_jabara += 'j1500,';
					else
						ward_jabara += 'j1350,';
					
					jabara_width = jabara_temp - jabara_width;
				} else
					jabara_width = jabara_temp;
				
				if ($(next_body).next().attr('body-width') == null)
					if (1800 < jabara_width)
						ward_jabara += 'j2000,';
					else if (1500 < jabara_width)
						ward_jabara += 'j1800,';
					else if (1350 < jabara_width)
						ward_jabara += 'j1500,';
					else
						ward_jabara += 'j1350,';
				break;
			}
			
			if (last_check) break;
			if (body_count == 1) first_body = $(next_body).attr('id');
			if ($('#'+$(next_body).attr('id')).attr('body-width') != 'W260') last_body = $(next_body).attr('id');
			next_body = $(next_body).next();
		}
		
		// ALR 아닐 경우 몸통 1000, 500 - 900, 450 몸통 구성 맞춤
		if (door_type.get(ward_kind) != 'ALR') {
			
			switch ($('#'+first_body).attr('body-width')) {
			case 'W1000':
				if ($('#'+last_body).attr('body-width') == 'W900' || $('#'+last_body).attr('body-width') == 'W450') {
					if (cri_no == 5) {
						$('.footer-note').addClass('invisible');
						$('.note-alert').removeClass('invisible');
						$('.note-alert').html('<font color="red">몸통 구성을 변경 후 시도해주세요.</font>');
					} else if (cri_no == 10) {
						alert('몸통 구성을 변경 후 시도해주세요.');
					}
					return;
				}
				break;
			case 'W900':
				if ($('#'+last_body).attr('body-width') == 'W1000' || $('#'+last_body).attr('body-width') == 'W500') {
					if (cri_no == 5) {
						$('.footer-note').addClass('invisible');
						$('.note-alert').removeClass('invisible');
						$('.note-alert').html('<font color="red">몸통 구성을 변경 후 시도해주세요.</font>');
					} else if (cri_no == 10) {
						alert('몸통 구성을 변경 후 시도해주세요.');
					}
					return;
				}
				break;
			}
		
		}
		
		if (d500llr + d500lc + d500rlr + d500rc + d450llr + d450lc + d450rlr + d450rc > 0) {
			if (d500rlr - d500llr < 0 || d500rc - d500lc < 0 || d450rlr - d450llr < 0 || d450rc - d450lc < 0) last_check = true;
			
			for (i = 0; i < d500llr; i++)
				ward_door += 'd500_lr2,';
			for (i = 0; i < d500rlr-d500llr; i++)
				ward_door += 'd500_lr1,';
			for (i = 0; i < d500lc; i++)
				ward_door += 'd500_c2,';
			for (i = 0; i < d500rc-d500lc; i++)
				ward_door += 'd500_c1,';
			
			for (i = 0; i < d450llr; i++)
				ward_door += 'd450_lr2,';
			for (i = 0; i < d450rlr-d450llr; i++)
				ward_door += 'd450_lr1,';
			for (i = 0; i < d450lc; i++)
				ward_door += 'd450_c2,';
			for (i = 0; i < d450rc-d450lc; i++)
				ward_door += 'd450_c1,';
		}
		
		if (ward_kind == '') last_check = true;
		
		if (last_check) {
			if (cri_no == 5) {
				$('.footer-note').addClass('invisible');
				$('.note-alert').removeClass('invisible');
				$('.note-alert').html('<font color="red">문짝 구성을 변경 후 시도해주세요.</font>');
			} else if (cri_no == 10) {
				alert('문짝 구성을 변경 후 시도해주세요.');
			}
			return;
		}
		
		switch (wardrobe) {
		case 'slide':
			ward_door = door_width + body_count;
			if (body_count == 2) {
				var td = $('#'+$('.frame-body').contents(':first-child').attr('id')+' .door-center').attr('data-door');
				td = td.charAt(td.length - 1);
				if (td == 'C')
					ward_door = ward_door + '_r';
				else
					ward_door = ward_door + '_l';
			}
			break;
		}
		
		// 옵션
		$('.option-item').each(function() {
			ward_option += $(this).attr('data-option') + ',';
		});
		
		if (current_body != '')
			select_body($('#'+current_body));
		
		if (status_door == 'hide')
			$('.result-door').html('도어표시');
		else
			$('.result-door').html('도어가림');
		
		$.ajax({
			url : '/ws/result',
			dataType : 'json',
			type : 'get',
			data : {type : wardrobe,
				kind: ward_kind,
				width: ward_width,
				height: ward_height,
				body: ward_body,
				door: ward_door,
				jabara: ward_jabara,
				jabara_sub: ward_jabara_sub,
				pillar: ward_pillar,
				ep: ward_ep,
				option: ward_option},
		    success : function (result) {
		    	$.each(result, function(key) {
		    		var list = result[key];
			    	var content = '<table style="border: 1px solid black; width: 100%;">';
			    	content += '<tr style="background: #3E3A3B; color: white;">';
			    	content += '<th width="50%" colspan="2">품목</th>';
			    	content += '<th width="20%">금액</th>';
			    	content += '<th width="10%">수량</th>';
			    	content += '<th width="20%">합계</th>';
			    	content += '</tr>';
			    	
			    	var tot_amt = 0;
			    	for (i = 0; i < list.length; i++) {
			    		content += '<tr>';
			    		content += '<td width="15%">'+list[i].dp1+'</td>';
				    	content += '<td width="35%">'+list[i].dp2+'</td>';
				    	content += '<td style="text-align: right;">'+list[i].retail_price.format()+'</td>';
				    	content += '<td style="text-align: right;">'+list[i].qty+'</td>';
				    	tot_amt += list[i].retail_amt;
				    	content += '<td style="text-align: right;">'+list[i].retail_amt.format()+'</td>';
				    	content += '</tr>';
			    	}
			    	
			    	content += '<tr style="font-weight: bold;">';
			    	content += '<td colspan="2" style="text-align: center;">총금액</td>';
			    	content += '<td></td><td></td>';
			    	content += '<td style="text-align: right;">'+tot_amt.format()+'</td>';
			    	content += '</tr>';
			    	content += '</table>';
			    	
			    	$('.result-table').html(content);
			    	
			    	$('.frame-navi').addClass('invisible');
					$('.frame-footer').addClass('invisible');
					$('.body-blind').removeClass('invisible');
					$('.frame-contents').css('width', '100%');
					$('.frame-contents').css('left', '0');
					$('.frame-result').css('width', '100%');
					$('.note-alert').html('');
			    	$('.frame-result').removeClass('invisible');
			    	if (cri_no == 10) $('.frame-contents').css('position', 'relative');
		    	});
			},
			beforeSend : function() {
				$('.loading').removeClass('invisible');
			},
			complete:function() {
				$('.loading').addClass('invisible');
			},
		    error:function(e) {},
		    timeout:180000
		});
		
		if (wardrobe == 'slide' || wardrobe == 'builtin') {
			if (status_door == 'hide') $('.btn-door-hide').click();
			html2canvas($('.frame-board'), {
		        onrendered: function (canvas) {
		        	img_dr = canvas.toDataURL("image/png");
		        }
		    });
		    
			$('.btn-door-hide').click();
			html2canvas($('.frame-board'), {
		        onrendered: function (canvas) {
		        	img_no_dr = canvas.toDataURL("image/png");
		        }
		    });
			
			$('.btn-door-hide').click();
		}
	});
	
	$('.btn-slide').click(function() {
		wardrobe = 'slide';
		$('.btn-slide').addClass('list-header-selected');
		$('.btn-builtin').removeClass('list-header-selected');
		$('.btn-basic-apply').removeClass('invisible');
		if ($('#width').val() > 4900) {
			$('#width').val(4900);
			$('.size-width').html('4900');
		}
		$('#width').attr('max', 4900);
	});
	$('.btn-builtin').click(function() {
		wardrobe = 'builtin';
		$('.btn-builtin').addClass('list-header-selected');
		$('.btn-slide').removeClass('list-header-selected');
		$('.btn-basic-apply').removeClass('invisible');
		$('#width').attr('max', 6000);
	});
	
	$('#width').change(function() {
		$('.size-width').html($(this).val());
	});
	$('#width').mousemove(function() {
		$('.size-width').html($(this).val());
	});
	$('#width').bind('touchmove', function(e) {
		$('.size-width').html($(this).val());
	});
	
	$('#height').change(function() {
		$('.size-height').html($(this).val());
	});
	$('#height').mousemove(function() {
		$('.size-height').html($(this).val());
	});
	$('#height').bind('touchmove', function(e) {
		$('.size-height').html($(this).val());
	});
	
	$('.btn-width-sub').click(function() {
		$('#width').val(parseInt($('#width').val()) - 10);
		$('.size-width').html($('#width').val());
	});
	$('.btn-width-add').click(function() {
		$('#width').val(parseInt($('#width').val()) + 10);
		$('.size-width').html($('#width').val());
	});
	$('.btn-height-sub').click(function() {
		$('#height').val(parseInt($('#height').val()) - 10);
		$('.size-height').html($('#height').val());
	});
	$('.btn-height-add').click(function() {
		$('#height').val(parseInt($('#height').val()) + 10);
		$('.size-height').html($('#height').val());
	});
	
	$('.btn-basic-apply').click(function() {
		basic_width = $('#width').val();
		basic_height = $('#height').val();
		
		$('.frame-note').addClass('invisible');
		$('.frame-contents').removeClass('invisible');
		$('.frame-board').width(basic_width / cri_no);
		$('.frame-board').height(basic_height / cri_no);
		$('.frame-board').css('background', 'url(/images/wardrobe/simulation/transparent.jpg)');
		
		$('.frame-measure-horizontal').width(basic_width / cri_no);
		$('.frame-measure-horizontal.measure-tot span').html(basic_width);
		$('.measure-left, .measure-right').width(basic_width / (cri_no * 2) - 1);
		$('.measure-left span, .measure-right span').html(basic_width / 2);
		$('.measure-center').width(0);
		$('.measure-center span').html('');
		
		$('.frame-measure-vertical').height(basic_height / cri_no);
		$('.frame-measure-vertical').css('left', (basic_width / cri_no)+'px');
		$('.frame-measure-vertical.measure-tot').css('left', (basic_width / cri_no + 50)+'px');
		$('.frame-measure-vertical.measure-tot span').html(basic_height);
		$('.measure-top').height(basic_height / cri_no - cri_height);
		$('.measure-top').css('line-height', basic_height / cri_no - cri_height+'px');
		$('.measure-top span').html(basic_height - 2170);
		
		$('.frame-body').html('');
		current_body = '';
		current_door = '';
		status_door = 'show';
		$('.door-item li').removeClass('baw');
		
		$('#navi-menu-body-item .menu-body-note, #navi-menu-door-item .menu-door-note, .menu-option-note').removeClass('invisible');
		$('#navi-menu-body-item .menu-item-box, #navi-menu-door-item .menu-item-box, #navi-menu-option-item .menu-item-box').addClass('invisible');
		
		construct_body();
	});
	
	$('.btn-refresh').click(function() {
//		location.reload();
		wardrobe = '';
		ward_kind = '';
		$('.btn-slide, .btn-builtin').removeClass('list-header-selected');
		$('.btn-basic-apply').addClass('invisible');
		
		basic_width = 0, basic_height = 0;
		list_construct_body = new Array();
		current_body = '', current_door = '', status_door = 'show';
		
		$('#width').val(2000);
		$('.size-width').html(2000);
		$('#height').val(2240);
		$('.size-height').html(2240);
		
		$('.frame-note').removeClass('invisible');
		$('.frame-contents').addClass('invisible');
		$('.navi-menu').removeClass('navi-selected');
		$('.navi-menu-items').addClass('invisible');
		$('.menu-item-box').addClass('invisible');
		$('#navi-menu-basic-item .menu-item-box').removeClass('invisible');
		$('.menu-construct-note').html('기초 정보를 적용해 주세요.');
		$('.menu-construct-note').removeClass('invisible');
		$('.menu-body-note').removeClass('invisible');
		$('.menu-door-note').removeClass('invisible');
		
		$('.frame-navi').removeClass('invisible');
		$('.frame-footer').removeClass('invisible');
		$('.frame-contents').css('width', '75%');
		$('.frame-contents').css('left', '250px');
		$('.frame-result').addClass('invisible');
		$('.body-blind').addClass('invisible');
		if (cri_no == 10) $('.frame-contents').css('position', 'fixed');
		
		$('.footer-note').addClass('invisible');
		
		img_dr = null, img_no_dr = null;
		$('#title').val('');
	});
	
	$('.result-door').click(function() {
		$('.btn-door-hide').click();
		if (status_door == 'hide')
			$('.result-door').html('도어표시');
		else
			$('.result-door').html('도어가림');
	});
	
	$('.result-retry').click(function() {
		$('.frame-navi').removeClass('invisible');
		$('.frame-footer').removeClass('invisible');
		$('.frame-contents').css('width', '75%');
		$('.frame-contents').css('left', '250px');
		$('.frame-result').addClass('invisible');
		$('.body-blind').addClass('invisible');
		if (cri_no == 10) $('.frame-contents').css('position', 'fixed');
		img_dr = null, img_no_dr = null;
		$('#title').val('');
	});
	
	// <$save 저장
	$('.result-save').click(function() {
		title = $('#title').val();
		if (title == '') {
			alert('제목을 입력해 주세요.');
			return;
		}
		
		var special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
		if (special_pattern.test(title.trim()) == true ) {
			alert('특수문자는 사용할 수 없습니다.');
		    return;
		}
		
		switch (wardrobe) {
		case 'slide':
			$.ajax({
				url : '/wardrobe/save/slide.json',
				dataType : 'json',
				type : 'post',
				data : {mwow2d: mwow2d,
					title : title,
					width : basic_width,
					height : basic_height,
					kind : ward_kind,
					body : ward_body,
					door : ward_door,
					jabara : ward_jabara,
					pillar : ward_pillar,
					ep : ward_ep,
					option : ward_option,
					img_no_dr : img_no_dr,
					img_dr : img_dr},
			    success : function (result) {
			    	$.each(result, function(key) {
			    		var list = result[key];
			    		var rslt = list[0].result;
			    		
			    		if (rslt == 0) {
			    			alert('저장에 실패했습니다.');
			    		} else if (rslt == 1) {
			    			alert('저장되었습니다.');
			    			$('.btn-refresh').click();
			    		} else if (rslt == 2) {
			    			alert('이미 저장된 제목입니다.');
			    		}
			    	});
			    },
				beforeSend : function() {
					$('.loading').removeClass('invisible');
				},
				complete:function() {
					$('.loading').addClass('invisible');
			    },
			    error : function(e) {},
			    timeout : 180000
			});
			break;
		case 'builtin':
			$.ajax({
				url : '/wardrobe/save/builtin.json',
				dataType : 'json',
				type : 'post',
				data : {mwow2d: mwow2d,
					title : title,
					width : basic_width,
					height : basic_height,
					kind : ward_kind,
					body : ward_body,
					door : ward_door,
					jabara : ward_jabara,
					jabara_sub : ward_jabara_sub,
					pillar : ward_pillar,
					ep : ward_ep,
					option : ward_option,
					position : ward_position,
					img_no_dr : img_no_dr,
					img_dr : img_dr},
			    success : function (result) {
			    	$.each(result, function(key) {
			    		var list = result[key];
			    		var rslt = list[0].result;
			    		
			    		if (rslt == 0) {
			    			alert('저장에 실패했습니다.');
			    		} else if (rslt == 1) {
			    			alert('저장되었습니다.');
			    			$('.btn-refresh').click();
			    		} else if (rslt == 2) {
			    			alert('이미 저장된 제목입니다.');
			    		}
			    	});
			    },
				beforeSend : function() {
					$('.loading').removeClass('invisible');
				},
				complete:function() {
					$('.loading').addClass('invisible');
			    },
			    error : function(e) {},
			    timeout : 180000
			});
			break;
		}
	});
	// $save>
	
	$('.frame-body').sortable({
		axis: 'x',
		opacity: '0.8',
		containment: 'document',
		start: function(event, ui) {
			ui.item.startPos = ui.item.index();
		},
		stop: function(event, ui) {
			if (ui.item.startPos == ui.item.index()) {
				var id = ui.item[0].id;
				select_body($('#'+id));
			}
			
			if (wardrobe == 'slide') {
				var count = 0, door_width = 0;
				if (list_construct_body[0] > 0) {
					count = list_construct_body[0];
					door_width = 97.8;
				}
				if (list_construct_body[1] > 0) {
					count = list_construct_body[1];
					door_width = 114;
				}
				
				door_width = door_width / cri_no * 10;
				
				if (count == 2) {
					if ($('#'+$('.frame-body').contents(':first-child').attr('id')+' .door-box .door-center').attr('data-door') == current_door+'C') {
						$('#'+$('.frame-body').contents(':last-child').attr('id')+' .door-box .door-center').attr('data-door', current_door+'R');
						$('#'+$('.frame-body').contents(':last-child').attr('id')+' .door-box .door-center').css('background', 'url(/images/wardrobe/simulation/slide/'+current_door+'R.jpg)');
					} else {
						$('#'+$('.frame-body').contents(':first-child').attr('id')+' .door-box .door-center').attr('data-door', current_door+'L');
						$('#'+$('.frame-body').contents(':first-child').attr('id')+' .door-box .door-center').css('background', 'url(/images/wardrobe/simulation/slide/'+current_door+'L.jpg)');
					}
				} else if (count > 2) {
					for (i = 0; i < count; i++) {
						$('#body-'+i+' .door-box .door-center').attr('data-door', current_door+'C');
						$('#body-'+i+' .door-box .door-center').css('background', 'url(/images/wardrobe/simulation/slide/'+current_door+'C.jpg)');
					}
					$('#'+$('.frame-body').contents(':first-child').attr('id')+' .door-box .door-center').attr('data-door', current_door+'L');
					$('#'+$('.frame-body').contents(':first-child').attr('id')+' .door-box .door-center').css('background', 'url(/images/wardrobe/simulation/slide/'+current_door+'L.jpg)');
					$('#'+$('.frame-body').contents(':last-child').attr('id')+' .door-box .door-center').attr('data-door', current_door+'R');
					$('#'+$('.frame-body').contents(':last-child').attr('id')+' .door-box .door-center').css('background', 'url(/images/wardrobe/simulation/slide/'+current_door+'R.jpg)');
				}
				$('.door-center').css('background-size', door_width+'px '+cri_height+'px');
			}
		}
	}).disableSelection();
});

function construct_body() {
	switch (wardrobe) {
	case 'slide':
		$('.menu-construct-note').html('슬라이딩은 구성 선택을 할 수 없습니다.');
		$('.menu-construct-note').removeClass('invisible');
		$('#navi-menu-construct-item .item-list-header').html('');
		$('#navi-menu-construct-item .item-list').html('');
		$('#navi-menu-construct-item .menu-item-box').addClass('invisible');
		
		var s978 = 0, s1140 = 0;
		s978 = basic_width % 978;
		s1140 = basic_width % 1140;
		list_construct_body = new Array();
		// list_construct_body[0]=978, list_construct_body[1]=1140
		list_construct_body[0] = 0, list_construct_body[1] = 0;
		
		if ((70 <= s978 && s978 <= 460) && (70 <= s1140 && s1140 <= 460)) {
			if (s978 < s1140)
				for (i = 1; i < basic_width / 978; i++)
					list_construct_body[0]++;
			else
				for (i = 1; i < basic_width / 1140; i++)
					list_construct_body[1]++;
		} else if (70 <= s978 && s978 <= 460) {
			for (i = 1; i < basic_width / 978; i++)
				list_construct_body[0]++;
		} else if (70 <= s1140 && s1140 <= 460) {
			for (i = 1; i < basic_width / 1140; i++)
				list_construct_body[1]++;
		} else if (s978 == 30) {
			for (i = 1; i < basic_width / 978; i++)
				list_construct_body[0]++;
		} else if (s1140 == 30) {
			for (i = 1; i < basic_width / 1140; i++)
				list_construct_body[1]++;
		} else {
			$('.footer-note').addClass('invisible');
			$('.note-alert').removeClass('invisible');
			$('.note-alert').html('<font color="red">현재 넓이는 슬라이딩 구성이 불가능합니다.</font>')
			if (cri_no == 10) alert('현재 넓이는 슬라이딩 구성이 불가능합니다.');
			return;
		}
		$('.footer-note').addClass('invisible');
		$('.note-basic').removeClass('invisible');
		show_body(null);
		break;
	case 'builtin':
		$('.menu-construct-note').addClass('invisible');
		$('#navi-menu-construct-item .menu-item-box').removeClass('invisible');
		
		var q1 = 0, q2 = 0, q3 = 0, q4 = 0, q5 = 0;
		var temp_cnt = 0, temp_sum = 0;
		list_construct_body = new Array();
		
		if (basic_width >= 260 + 70) {
			q5 = Math.floor(basic_width / 260);
			if (q5 > 1) q5 = 1;
			
			for (i5 = q5; i5 >= 0; i5--) {
				if (basic_width - (i5 * 260) >= 450 + 70) {
					q4 = Math.floor((basic_width - (i5 * 260)) / 450);
					if (q4 > 1) q4 = 1;
					
					for (i4 = q4; i4 >= 0; i4--) {
						if (basic_width - (i5 * 260) - (i4 * 450) >= 500 + 70) {
							q3 = Math.floor((basic_width - (i5 * 260) - (i4 * 450)) / 500);
							if (q3 > 1) q3 = 1;
							if (i4 > 0) q3 = 0;
							
							for (i3 = q3; i3 >= 0; i3--) {
								if (basic_width - (i5 * 260) - (i4 * 450) - (i3 * 500) >= 900 + 70) {
									q2 = Math.floor((basic_width - (i5 * 260) - (i4 * 450) - (i3 * 500)) / 900);
									
									for (i2 = q2; i2 >= 0; i2--) {
										if (basic_width - (i5 * 260) - (i4 * 450) - (i3 * 500) - (i2 * 900) >= 1000 + 70) {
											q1 = Math.floor((basic_width - (i5 * 260) - (i4 * 450) - (i3 * 500) - (i2 * 900)) / 1000);
											
											for (i1 = q1; i1 >= 0; i1--) {
												temp_sum = i1 * 1000 + i2 * 900 + i3 * 500 + i4 * 450 + i5 * 260;
												if (temp_sum <= basic_width - 70 && temp_sum >= basic_width - 460) {
													list_construct_body[temp_cnt] = new Array();
													list_construct_body[temp_cnt][0] = temp_sum;
													list_construct_body[temp_cnt][1] = i1;
													list_construct_body[temp_cnt][2] = i2;
													list_construct_body[temp_cnt][3] = i3;
													list_construct_body[temp_cnt][4] = i4;
													list_construct_body[temp_cnt][5] = i5;
													temp_cnt++;
												}
											}
										} else {
											temp_sum = i2 * 900 + i3 * 500 + i4 * 450 + i5 * 260;
											if (temp_sum <= basic_width - 70 && temp_sum >= basic_width - 460) {
												list_construct_body[temp_cnt] = new Array();
												list_construct_body[temp_cnt][0] = temp_sum;
												list_construct_body[temp_cnt][1] = 0;
												list_construct_body[temp_cnt][2] = i2;
												list_construct_body[temp_cnt][3] = i3;
												list_construct_body[temp_cnt][4] = i4;
												list_construct_body[temp_cnt][5] = i5;
												temp_cnt++;
											}
										}
									}
								} else {
									temp_sum = i3 * 500 + i4 * 450 + i5 * 260;
									if (temp_sum <= basic_width - 70 && temp_sum >= basic_width - 460) {
										list_construct_body[temp_cnt] = new Array();
										list_construct_body[temp_cnt][0] = temp_sum;
										list_construct_body[temp_cnt][1] = 0;
										list_construct_body[temp_cnt][2] = 0;
										list_construct_body[temp_cnt][3] = i3;
										list_construct_body[temp_cnt][4] = i4;
										list_construct_body[temp_cnt][5] = i5;
										temp_cnt++;
									}
								}
							}
						} else {
							temp_sum = i4 * 450 + i5 * 260;
							if (temp_sum <= basic_width - 70 && temp_sum >= basic_width - 460) {
								list_construct_body[temp_cnt] = new Array();
								list_construct_body[temp_cnt][0] = temp_sum;
								list_construct_body[temp_cnt][1] = 0;
								list_construct_body[temp_cnt][2] = 0;
								list_construct_body[temp_cnt][3] = 0;
								list_construct_body[temp_cnt][4] = i4;
								list_construct_body[temp_cnt][5] = i5;
								temp_cnt++;
							}
						}
					}
				} else {
					temp_sum = i5 * 260;
					if (temp_sum <= basic_width - 70 && temp_sum >= basic_width - 460) {
						list_construct_body[temp_cnt] = new Array();
						list_construct_body[temp_cnt][0] = temp_sum;
						list_construct_body[temp_cnt][1] = 0;
						list_construct_body[temp_cnt][2] = 0;
						list_construct_body[temp_cnt][3] = 0;
						list_construct_body[temp_cnt][4] = 0;
						list_construct_body[temp_cnt][5] = i5;
						temp_cnt++;
					}
				}
			}
		}
		
		var body_cnt = 0;
		var arr_body_cnt = new Array();
		var chk_equal = false;
		for (i = temp_cnt - 1; i >= 0; i--) {
			body_cnt = 0;
			chk_equal = false;

			body_cnt = list_construct_body[i][1] + list_construct_body[i][2] + list_construct_body[i][3] + list_construct_body[i][4] + list_construct_body[i][5];
			for (j = 0; j < arr_body_cnt.length; j++) {
				if (arr_body_cnt[j] == body_cnt)
					chk_equal = true;
			}
			
			if (!chk_equal)
				arr_body_cnt.push(body_cnt);
		}
		
		$('#navi-menu-construct-item .item-list-header').html('');
		$('#navi-menu-construct-item .item-list').html('');
		$('.item-list').addClass('invisible');
		for (i = 0; i < arr_body_cnt.length; i++) {
			$('#navi-menu-construct-item .item-list-header').append('<li class="header-item">'+arr_body_cnt[i]+'통</li>');
		}
		$('#navi-menu-construct-item .item-list-header li').width((100 / arr_body_cnt.length) + '%');
		
		$('#navi-menu-construct-item .header-item').click(function() {
			selected_construct(this);
		});
		break;
	}
}

function selected_construct(obj) {
	$('#navi-menu-construct-item .header-item').removeClass('list-header-selected');
	$(obj).addClass('list-header-selected');
	$('.item-list').removeClass('invisible');
	$('#navi-menu-construct-item .item-list').html('');
	
	for (i = list_construct_body.length - 1; i >= 0; i--) {
		var sum_body = list_construct_body[i][1] + list_construct_body[i][2] + list_construct_body[i][3] + list_construct_body[i][4] + list_construct_body[i][5] + '통';
		
		if (sum_body == $(obj).html()) {
			var img_body = '', text_body = '';
			
			for (tb1 = 0; tb1 < list_construct_body[i][1]; tb1++)
				img_body += '<img src="/images/wardrobe/simulation/builtin/WR5014A.jpg" />';
			for (tb2 = 0; tb2 < list_construct_body[i][2]; tb2++)
				img_body += '<img src="/images/wardrobe/simulation/builtin/WR4014A.jpg" />';
			for (tb3 = 0; tb3 < list_construct_body[i][3]; tb3++)
				img_body += '<img src="/images/wardrobe/simulation/builtin/WR3014C.jpg" />';
			for (tb4 = 0; tb4 < list_construct_body[i][4]; tb4++)
				img_body += '<img src="/images/wardrobe/simulation/builtin/WR2014C.jpg" />';
			for (tb5 = 0; tb5 < list_construct_body[i][5]; tb5++)
				img_body += '<img src="/images/wardrobe/simulation/builtin/WR1014I.jpg" />';

			if (list_construct_body[i][1] > 0)
				text_body += '1000장-' + list_construct_body[i][1] + '통';
			if (list_construct_body[i][2] > 0) {
				if (text_body != '') text_body += ', ';
				text_body += '900장-' + list_construct_body[i][2] + '통';
			}
			if (list_construct_body[i][3] > 0) {
				if (text_body != '') text_body += ', ';
				text_body += '500장-' + list_construct_body[i][3] + '통';
			}
			if (list_construct_body[i][4] > 0) {
				if (text_body != '') text_body += ', ';
				text_body += '450장-' + list_construct_body[i][4] + '통';
			}
			if (list_construct_body[i][5] > 0) {
				if (text_body != '') text_body += ', ';
				text_body += '선반장-' + list_construct_body[i][5] + '통';
			}
			
			$('#navi-menu-construct-item .item-list').append('<li class="item" data-index="'+i+'"><div class="item-title">' + text_body + '</div><div>' + img_body + '</div></li>');
		}
	}
	
	$('#navi-menu-construct-item .item').click(function() {
		show_body(this);
	});
}

function show_body(obj) {
	switch (wardrobe) {
	case 'slide':
		var idx = 0;
		var body_width = list_construct_body[0] * 978 + list_construct_body[1] * 1140;
		$('.frame-body').html('');
		$('.frame-body').width(body_width / cri_no);
		$('.frame-body').css('left', (basic_width - body_width) / (cri_no * 2));
		$('.measure-center').width(body_width / cri_no);
		$('.measure-center span').html(body_width);
		$('.measure-left, .measure-right').width((basic_width - body_width) / (cri_no * 2) - 1);
		$('.measure-left span, .measure-right span').html((basic_width - body_width) / 2);
		
		for (tb1 = 0; tb1 < list_construct_body[0]; tb1++) {
			$('.frame-body').append('<div id="body-'+(idx++)+'" class="body-box width-978" data-body="WR1012A" body-width="W978"><div class="body-check check-978 invisible"></div><div class="door-box door-978"><div class="door-center"></div></div><div class="option-box option-978"></div><img src="/images/wardrobe/simulation/slide/WR1012A.jpg" /><div style="position: absolute; width: '+(978/cri_no-2)+'px; margin-top: 10px; border: 1px solid black; border-top: 0; height: 10px; text-align: center; line-height: 40px;">978</div></div>');
			$('.frame-body img').css('width', '100%');
		}
		for (tb2 = 0; tb2 < list_construct_body[1]; tb2++) {
			$('.frame-body').append('<div id="body-'+(idx++)+'" class="body-box width-1140" data-body="WR1013A" body-width="W1140"><div class="body-check check-1140 invisible"></div><div class="door-box door-1140"><div class="door-center"></div></div><div class="option-box option-1140"></div><img src="/images/wardrobe/simulation/slide/WR1013A.jpg" /><div style="position: absolute; width: '+(1140/cri_no-2)+'px; margin-top: 10px; border: 1px solid black; border-top: 0; height: 10px; text-align: center; line-height: 40px;">1140</div></div>');
		}
		
		$('.body-box').click(function() {
			select_body(this);
		});
		
		$('.menu-door-note').addClass('invisible');
		$('#navi-menu-door-item .menu-item-box').removeClass('invisible');
		$('#navi-menu-door-item .menu-item-box').html('<ul class="item-list-header"><li class="btn-door-hide">도어 가림</li></ul><ul class="door-list"></ul>');
		$('.btn-door-hide').width('100%');
		if (status_door == 'hide') $('.btn-door-hide').addClass('list-header-selected');
		
		for (i = 0; i < SLIDE.size(); i++) {
			var html_door = '';
			var temp_door = SLIDE.keys()[i];
			var temp_door_rest = new Map();
				
			switch (temp_door) {
			case "WRD534": temp_door_rest = WRD534; break;
			case "WRD535": temp_door_rest = WRD535; break;
			case "WRD539": temp_door_rest = WRD539; break;
			case "WRD557": temp_door_rest = WRD557; break;
			}
			html_door += '<li><div class="item-title">' + SLIDE.get(temp_door) + '</div><ul class="door-item ' + temp_door + '">';
			html_door += '<li data-door="' + temp_door + '">';
			for (j = 0; j < temp_door_rest.size(); j++) {
				var door = temp_door_rest.keys()[j];
				html_door += '<img src="/images/wardrobe/simulation/slide/' + door + '.jpg" />';
			}
			html_door += '</ul></li>';
				
			$('.door-list').append(html_door);

//			$('.'+temp_door+' li').css('border', '1px solid #579E81');
			$('.'+temp_door+' li').width('80%');
			$('.'+temp_door+' li').css('float', 'none');
			$('.'+temp_door+' li').css('margin', '5px auto');
			$('.'+temp_door+' li img').width((100 / temp_door_rest.size()) + '%');
			$('.'+temp_door+' li img').css('float', 'left');
		}
		
		$('.btn-door-hide').click(function() {
			$('.btn-door-hide').toggleClass('list-header-selected');
			if ($('.btn-door-hide').hasClass('list-header-selected')) {
				status_door = 'hide';
				$('.door-box').addClass('invisible');
			} else {
				status_door = 'show';
				$('.door-box').removeClass('invisible');
			}
		});
		
		$('.door-item li').click(function() {
			change_door(this);
		});
		
		break;
	case 'builtin':
		var i = $(obj).attr('data-index'), idx = 0;
		var body_width = list_construct_body[i][1] * 1000
								 + list_construct_body[i][2] * 900
								 + list_construct_body[i][3] * 500
								 + list_construct_body[i][4] * 450
								 + list_construct_body[i][5] * 260;
		$('.frame-body').html('');
		$('.frame-body').width(body_width / cri_no);
		$('.frame-body').css('left', (basic_width - body_width) / (cri_no * 2));
		$('.measure-center').width(body_width / cri_no);
		$('.measure-center span').html(body_width);
		$('.measure-left, .measure-right').width((basic_width - body_width) / (cri_no * 2) - 1);
		$('.measure-left span, .measure-right span').html((basic_width - body_width) / 2);
		
		
		for (tb1 = 0; tb1 < list_construct_body[i][1]; tb1++) {
			$('.frame-body').append('<div id="body-'+(idx++)+'" class="body-box width-1000" data-body="WR5014A" body-width="W1000"><div class="body-check check-1000 invisible"></div><div class="door-box door-1000"><div class="door-left"></div><div class="door-right"></div></div><div class="option-box option-1000"></div><img src="/images/wardrobe/simulation/builtin/WR5014A.jpg" /><div style="position: absolute; width: '+(1000/cri_no-2)+'px; margin-top: 10px; border: 1px solid black; border-top: 0; height: 10px; text-align: center; line-height: 40px;">1000</div></div>');
		}
		for (tb2 = 0; tb2 < list_construct_body[i][2]; tb2++) {
			$('.frame-body').append('<div id="body-'+(idx++)+'" class="body-box width-900" data-body="WR4014A" body-width="W900"><div class="body-check check-900 invisible"></div><div class="door-box door-900"><div class="door-left"></div><div class="door-right"></div></div><div class="option-box option-900"></div><img src="/images/wardrobe/simulation/builtin/WR4014A.jpg" /><div style="position: absolute; width: '+(900/cri_no-2)+'px; margin-top: 10px; border: 1px solid black; border-top: 0; height: 10px; text-align: center; line-height: 40px;">900</div></div>');
		}
		for (tb3 = 0; tb3 < list_construct_body[i][3]; tb3++) {
			$('.frame-body').append('<div id="body-'+(idx++)+'" class="body-box width-500" data-body="WR3014C" body-width="W500"><div class="body-check check-500 invisible"></div><div class="door-box door-500"><div class="door-center"></div></div><img src="/images/wardrobe/simulation/builtin/WR3014C.jpg" /><div style="position: absolute; width: '+(500/cri_no-2)+'px; margin-top: 10px; border: 1px solid black; border-top: 0; height: 10px; text-align: center; line-height: 40px;">500</div></div>');
		}
		for (tb4 = 0; tb4 < list_construct_body[i][4]; tb4++) {
			$('.frame-body').append('<div id="body-'+(idx++)+'" class="body-box width-450" data-body="WR2014C" body-width="W450"><div class="body-check check-450 invisible"></div><div class="door-box door-450"><div class="door-center"></div></div><img src="/images/wardrobe/simulation/builtin/WR2014C.jpg" /><div style="position: absolute; width: '+(450/cri_no-2)+'px; margin-top: 10px; border: 1px solid black; border-top: 0; height: 10px; text-align: center; line-height: 40px;">450</div></div>');
		}
		for (tb5 = 0; tb5 < list_construct_body[i][5]; tb5++) {
			$('.frame-body').append('<div id="body-'+(idx++)+'" class="body-box width-260" data-body="WR1014I" body-width="W260"><div class="body-check check-260 invisible"></div><img src="/images/wardrobe/simulation/builtin/WR1014I.jpg" /><div style="position: absolute; width: '+(260/cri_no-2)+'px; margin-top: 10px; border: 1px solid black; border-top: 0; height: 10px; text-align: center; line-height: 40px;">260</div></div>');
		}

		$('.body-box').click(function() {
			select_body(this);
		});
		break;
	}
}

function select_body(obj) {
	$('#navi-menu-basic, #navi-menu-construct').removeClass('navi-selected');
	$('#navi-menu-basic-item, #navi-menu-construct-item').addClass('invisible');
	
	if (!$(obj).hasClass('selected')) {
		$('.body-box').removeClass('selected');
		$('.body-check').addClass('invisible');
	}
	
	$(obj).toggleClass('selected');
	$('#'+$(obj).attr('id')+' .body-check').toggleClass('invisible');
	
	if (!$(obj).hasClass('selected')) {
		current_body = '';
		$('.menu-body-note').removeClass('invisible');
		$('#navi-menu-body-item .menu-item-box').addClass('invisible');
		
		switch (wardrobe) {
		case 'builtin':
			$('.menu-door-note').removeClass('invisible');
			$('#navi-menu-door-item .menu-item-box').addClass('invisible');
			break;
		}
		
		$('.menu-option-note').removeClass('invisible');
		$('#navi-menu-option-item .menu-item-box').addClass('invisible');
	} else {
		current_body = $(obj).attr('id');
		$('.menu-body-note').addClass('invisible');
		$('#navi-menu-body-item .menu-item-box').removeClass('invisible');
		$('.menu-door-note').addClass('invisible');
		$('#navi-menu-door-item .menu-item-box').removeClass('invisible');
		$('.menu-option-note').addClass('invisible');
		$('#navi-menu-option-item .menu-item-box').removeClass('invisible');
		
		var temp_rest = new Map();
		var temp_kind = '';
		switch ($(obj).attr('body-width')) {
		case "W1140": temp_rest = WR1013; temp_kind = '1140장'; break;
		case "W978": temp_rest = WR1012; temp_kind = '978장'; break;
		
		case "W1000": temp_rest = WR5014; temp_kind = '1000장'; break;
		case "W900": temp_rest = WR4014; temp_kind = '900장'; break;
		case "W500": temp_rest = WR3014; temp_kind = '500반장'; break;
		case "W450": temp_rest = WR2014; temp_kind = '450반장'; break;
		case "W260": temp_rest = WR1014; temp_kind = '선반장'; break;
		}
		
		if (temp_rest.size() == 1) {
			$('#navi-menu-body-item .menu-item-box').html('<div style="height: 50px; line-height: 50px;">선택하신 몸통은 변경할 수 없습니다.</div>');
		} else {
			$('#navi-menu-body-item .menu-item-box').html('<div class="item-title">' + temp_kind + '</div><ul></ul>');
			for (i = 0; i < temp_rest.size(); i++) {
				var item = temp_rest.keys()[i];
				$('#navi-menu-body-item .menu-item-box ul').append('<li data-body="' + item + '"><img src="/images/wardrobe/simulation/' + wardrobe + '/' + item + '.jpg" /><br>' + temp_rest.get(item) + '</li>');
			}
			$('#navi-menu-body-item .menu-item-box li').width((100 / temp_rest.size()) + '%');
			$('#navi-menu-body-item .menu-item-box li').click(function() {
				change_body(this);
			});
		}
		
		switch (wardrobe) {
		case 'builtin':
			if ($(obj).attr('body-width') == 'W260') {
				$('#navi-menu-door-item .menu-item-box').html('<div style="height: 50px; line-height: 50px;">선택하신 몸통은 도어를 추가할 수 없습니다.</div>');
				$('#navi-menu-option-item .menu-item-box').html('<div style="height: 50px; line-height: 50px;">선택하신 몸통은 옵션을 추가할 수 없습니다.</div>');
			} else {
				$('#navi-menu-door-item .menu-item-box').html('<ul class="item-list-header"><li class="btn-door-change">도어 변경</li><li class="btn-door-hide">도어 가림</li></ul><ul class="door-list"></ul>');
				if (status_door == 'hide') $('.btn-door-hide').addClass('list-header-selected');
				
				for (i = 0; i < BUILTIN.size(); i++) {
					var html_door = '';
					var temp_door = BUILTIN.keys()[i];
					var temp_door_rest = new Map();
						
					switch (temp_door) {
					case "WRD543": temp_door_rest = WRD543; break;
					case "WRD546": temp_door_rest = WRD546; break;
					case "WRD547": temp_door_rest = WRD547; break;
					case "WRD548": temp_door_rest = WRD548; break;
					case "WRD533": temp_door_rest = WRD533; break;
					case "WRD561": temp_door_rest = WRD561; break;
					}
					html_door += '<li><div class="item-title">' + BUILTIN.get(temp_door) + '</div><ul class="door-item ' + temp_door + '">';
					for (j = 0; j < temp_door_rest.size(); j++) {
						var door = temp_door_rest.keys()[j];
						html_door += '<li class="';
						if (j % 2 == 0) html_door += 'left';
						else html_door += 'right';
						html_door += '" data-door="' + temp_door;
						html_door += '" door-pos="';
						if (j < 2) html_door += 'lr';
						else html_door += 'c';
						html_door += '"><img src="/images/wardrobe/simulation/builtin/' + door + '.jpg" /><br>' + temp_door_rest.get(door) + '</li>';
					}
					html_door += '</ul></li>';
						
					$('.door-list').append(html_door);
					
					$('.'+temp_door+' li').width((100 / temp_door_rest.size()) + '%');
				}
				
				if (current_door != '') {
					$('.door-item li').addClass('baw');
					$('.door-item.'+current_door+' li').removeClass('baw');
				}
				
				if ($(obj).attr('body-width') == 'W500' || $(obj).attr('body-width') == 'W450') {
					$('.door-item .left').addClass('baw');
				}
				
				$('.btn-door-change').click(function() {
					current_door = '';
					ward_kind = '';
					$('.door-item li').removeClass('baw');
					$('.frame-board').css('background', 'url(/images/wardrobe/simulation/transparent.jpg)');
					$('.door-box div').css('background', '');
					$('.door-box div').attr('data-door', null);
					
					if ($('#'+current_body).attr('body-width') == 'W500' || $('#'+current_body).attr('body-width') == 'W450') {
						$('.door-item .left').addClass('baw');
					}
				});
				
				$('.btn-door-hide').click(function() {
					$('.btn-door-hide').toggleClass('list-header-selected');
					if ($('.btn-door-hide').hasClass('list-header-selected')) {
						status_door = 'hide';
						$('.door-box').addClass('invisible');
					} else {
						status_door = 'show';
						$('.door-box').removeClass('invisible');
					}
				});
				
				$('.door-item li').click(function() {
					change_door(this);
				});
			}
			break;
		}
		
		construct_option();
	}
}

function construct_option() {
	var body_kind = $('#'+current_body).attr('data-body');
	var temp_option_rest = new Map();
	switch (body_kind) {
	case 'WR1012A': temp_option_rest = WR1012A; break;
	case 'WR1013A': temp_option_rest = WR1013A; break;
	case 'WR1012B': temp_option_rest = WR1012B; break;
	case 'WR1013B': temp_option_rest = WR1013B; break;
	case 'WR1012D': temp_option_rest = WR1012D; break;
	case 'WR1013D': temp_option_rest = WR1013D; break;
	
	case 'WR5014A': temp_option_rest = WR5014A; break;
	case 'WR4014A': temp_option_rest = WR4014A; break;
	case 'WR5014B': temp_option_rest = WR5014B; break;
	case 'WR4014B': temp_option_rest = WR4014B; break;
	case 'WR5014D': temp_option_rest = WR5014D; break;
	case 'WR4014D': temp_option_rest = WR4014D; break;
	}
	
	if (temp_option_rest.size() == 0) {
		$('#navi-menu-option-item .menu-item-box').html('<div style="height: 50px; line-height: 50px;">선택하신 몸통은 옵션을 추가할 수 없습니다.</div>');
	} else {
		$('#navi-menu-option-item .menu-item-box').html('<ul class="option-list"></ul>');
	}
	
	var html_option = '';
	var temp_option = '';
	for (i = 0; i < temp_option_rest.size(); i++) {
		temp_option = temp_option_rest.keys()[i];
		html_option += '<li data-option="' + temp_option + '"><div class="option-title">';
		html_option += temp_option_rest.get(temp_option);
		html_option += '</div><div class="add-option"><img src="/images/wardrobe/simulation/ic_add_circle.png"><br />추가</div><div class="sub-option"><img src="/images/wardrobe/simulation/ic_remove_circle.png"><br />제거</div></li>';
	}
	
	$('.option-list').html(html_option);
	
	$('.add-option').click(function() {
		var add_option = $(this).parent().attr('data-option');
		var add_check = false;
		var next_option = $('#'+current_body+' .option-box').children();
		
		while (true) {
			if ($(next_option).attr('data-option') == null) break;
			
			if (add_option == $(next_option).attr('data-option')) add_check = true;
			
			next_option = $(next_option).next();
		}
		
		if (add_option == 'WCD-1013' || add_option == 'WCD-1012') {
			$('#'+current_body+' .option-box .WCD-2013').remove();
			$('#'+current_body+' .option-box .WCD-2012').remove();
		} else if (add_option == 'WCD-2013' || add_option == 'WCD-2012') {
			$('#'+current_body+' .option-box .WCD-1013').remove();
			$('#'+current_body+' .option-box .WCD-1012').remove();
		}
		
		if (add_option == 'MRC-0001') {
			$('#'+current_body+' .option-box .MRC-0002').remove();
		} else if (add_option == 'MRC-0002') {
			$('#'+current_body+' .option-box .MRC-0001').remove();
		}
		
		if (!add_check) $('#'+current_body+' .option-box').append('<div class="option-item '+add_option+'" data-option="'+add_option+'" style="background: url(/images/wardrobe/simulation/'+wardrobe+'/'+add_option+'.png); background-repeat: no-repeat; background-position: center;" />');
		
		var option_width = 0;
		var body_width = $('#'+current_body).attr('body-width');
	
		switch (body_width) {
		case "W1140": option_width = 114; break;
		case "W978": option_width = 97.8; break;
		
		case "W1000": option_width = 100; break;
		case "W900": option_width = 90; break;
		}
		
		option_width = option_width / cri_no * 10;
		$('#'+current_body+' .option-item').css('background-size', option_width+'px '+cri_height+'px');
	});
	
	$('.sub-option').click(function() {
		var sub_option = $(this).parent().attr('data-option');
		$('#'+current_body+' .option-box .'+sub_option).remove();
	});
}

function change_body(obj) {
	var src = $(obj).children('img').attr('src');
	$('#'+current_body+' img').attr('src', src);
	$('#'+current_body).attr('data-body', $(obj).attr('data-body'));
	$('#'+current_body+' .option-box').html('');
	construct_option();
}

function change_door(obj) {
	current_door = $(obj).attr('data-door');
	ward_kind = current_door;
	var door_width = 0;
	
	switch (wardrobe) {
	case 'slide':
		var count = 0;
		if (list_construct_body[0] > 0) {
			count = list_construct_body[0];
			door_width = 97.8;
		}
		if (list_construct_body[1] > 0) {
			count = list_construct_body[1];
			door_width = 114;
		}
		
		door_width = door_width / cri_no * 10;
		
		for (i = 0; i < count; i++) {
			$('#body-'+i+' .door-box .door-center').attr('data-door', current_door+'C');
			$('#body-'+i+' .door-box .door-center').css('background', 'url(/images/wardrobe/simulation/slide/'+current_door+'C.jpg)');
		}
		$('#'+$('.frame-body').contents(':first-child').attr('id')+' .door-box .door-center').attr('data-door', current_door+'L');
		$('#'+$('.frame-body').contents(':first-child').attr('id')+' .door-box .door-center').css('background', 'url(/images/wardrobe/simulation/slide/'+current_door+'L.jpg)');
		if (count == 2) {
			$('#'+$('.frame-body').contents(':last-child').attr('id')+' .door-box .door-center').attr('data-door', current_door+'C');
			$('#'+$('.frame-body').contents(':last-child').attr('id')+' .door-box .door-center').css('background', 'url(/images/wardrobe/simulation/slide/'+current_door+'C.jpg)');
		} else if (count > 2) {
			$('#'+$('.frame-body').contents(':last-child').attr('id')+' .door-box .door-center').attr('data-door', current_door+'R');
			$('#'+$('.frame-body').contents(':last-child').attr('id')+' .door-box .door-center').css('background', 'url(/images/wardrobe/simulation/slide/'+current_door+'R.jpg)');
		}
		$('.door-center').css('background-size', door_width+'px '+cri_height+'px');
		
		$('.frame-board').css('background', 'url(/images/wardrobe/simulation/'+wardrobe+'/'+current_door+'B.jpg)');
		break;
	case 'builtin':
		if (!$(obj).hasClass('baw')) {
			var body = $('#'+current_body).attr('body-width');
			var src = $(obj).children('img').attr('src');
			var pos = $(obj).attr('door-pos');
			var type = '';
		
			$('.door-item li').addClass('baw');
			$('.door-item.'+current_door+' li').removeClass('baw');
			
			switch (body) {
			case "W1000": type = 'lr'; door_width = 100; break;
			case "W900": type = 'lr'; door_width = 90; break;
			case "W500": type = 'r'; door_width = 100; break;
			case "W450": type = 'r'; door_width = 90; break;
			}
			
			door_width = door_width / cri_no * 5;
		
			if (type == 'lr') {
				if ($(obj).hasClass('left')) {
					$('#'+current_body+' .door-left').attr('data-door', current_door+'L');
					$('#'+current_body+' .door-left').attr('door-pos', pos);
					$('#'+current_body+' .door-left').css('background', 'url('+src+')');
					$('#'+current_body+' .door-left').css('background-size', door_width+'px '+cri_height+'px');
				} else if ($(obj).hasClass('right')) {
					$('#'+current_body+' .door-right').attr('data-door', current_door+'R');
					$('#'+current_body+' .door-right').attr('door-pos', pos);
					$('#'+current_body+' .door-right').css('background', 'url('+src+')');
					$('#'+current_body+' .door-right').css('background-size', door_width+'px '+cri_height+'px');
				}
			} else if (type == 'r') {
				if ($(obj).hasClass('right')) {
					$('.door-item .left').addClass('baw');
					$('#'+current_body+' .door-center').attr('data-door', current_door+'R');
					$('#'+current_body+' .door-center').attr('door-pos', pos);
					$('#'+current_body+' .door-center').css('background', 'url('+src+')');
					$('#'+current_body+' .door-center').css('background-size', door_width+'px '+cri_height+'px');
				}
			}
			
			$('.frame-board').css('background', 'url(/images/wardrobe/simulation/'+wardrobe+'/'+current_door+'B.jpg)');
		}
		break;
	}
}

function door_check(nb, dwidth, dlrc, dcount) {
	var dt = door_type.get(ward_kind);
	switch (dt) {
	case 'ALR':
			ward_door += 'd'+dwidth+'_lr'+dcount+',';
		break;
	case 'LCR-CLRC-ALR-AC':
		if (dwidth == 500) {
			if ($('#'+$(nb).attr('id')+' .door-left').attr('door-pos') == 'lr') d500llr++;
			if ($('#'+$(nb).attr('id')+' .door-left').attr('door-pos') == 'c') d500lc++;
			if ($('#'+$(nb).attr('id')+' .door-right').attr('door-pos') == 'lr') d500rlr++;
			if ($('#'+$(nb).attr('id')+' .door-right').attr('door-pos') == 'c') d500rc++;
			if ($('#'+$(nb).attr('id')+' .door-center').attr('door-pos') == 'lr') d500rlr++;
			if ($('#'+$(nb).attr('id')+' .door-center').attr('door-pos') == 'c') d500rc++;
		} else if (dwidth == 450) {
			if ($('#'+$(nb).attr('id')+' .door-left').attr('door-pos') == 'lr') d450llr++;
			if ($('#'+$(nb).attr('id')+' .door-left').attr('door-pos') == 'c') d450lc++;
			if ($('#'+$(nb).attr('id')+' .door-right').attr('door-pos') == 'lr') d450rlr++;
			if ($('#'+$(nb).attr('id')+' .door-right').attr('door-pos') == 'c') d450rc++;
			if ($('#'+$(nb).attr('id')+' .door-center').attr('door-pos') == 'lr') d450rlr++;
			if ($('#'+$(nb).attr('id')+' .door-center').attr('door-pos') == 'c') d450rc++;
		}
		break;
	case 'MCR-LCM-LCR-CLRC-ALR-AC':
		if (dcount == 1) {
			ward_door += 'd'+dwidth+'_'+dlrc+dcount+',';
		} else {
			var ld = $('#'+$(nb).attr('id')+' .door-left').attr('door-pos');
			var rd = $('#'+$(nb).attr('id')+' .door-right').attr('door-pos');
			
			if (ld == 'lr' && rd == 'lr') {
				ward_door += 'd'+dwidth+'_lr2,';
			} else if (ld == 'c' && rd == 'c') {
				ward_door += 'd'+dwidth+'_c2,';
			} else if (ld == 'lr' && rd == 'c') {
				ward_door += 'd'+dwidth+'_mcr,';
			} else if (ld == 'c' && rd == 'lr') {
				ward_door += 'd'+dwidth+'_lcm,';
			}
		}
		break;
	}
}

