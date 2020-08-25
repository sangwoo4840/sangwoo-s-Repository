var isMobile = false;

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
SLIDE.put('WRD534', '너츠'); SLIDE.put('WRD535', '브리드'); SLIDE.put('WRD539', '브리드월넛'); SLIDE.put('WRD557', '페퍼민트');SLIDE.put('WRD568', '지앤');
// WRD534 = 너츠, WRD535 = 브리드, WRD539 = 브리드월넛, WRD557 = 페퍼민트,WRD568 = 지앤
var WRD534 = new Map(), WRD535 = new Map(), WRD539 = new Map(), WRD557 = new Map();WRD568 = new Map();
WRD534.put('WRD534L', '너츠문짝(좌)'); WRD534.put('WRD534C', '너츠문짝(중앙)'); WRD534.put('WRD534R', '너츠문짝(우)');
WRD535.put('WRD535L', '브리드문짝(좌)'); WRD535.put('WRD535C', '브리드문짝(중앙)'); WRD535.put('WRD535R', '브리드문짝(우)');
WRD539.put('WRD539L', '브리드월넛문짝(좌)'); WRD539.put('WRD539C', '브리드월넛문짝(중앙)'); WRD539.put('WRD539R', '브리드월넛문짝(우)');
WRD557.put('WRD557L', '페퍼민트문짝(좌)'); WRD557.put('WRD557C', '페퍼민트문짝(중앙)'); WRD557.put('WRD557R', '페퍼민트문짝(우)');
WRD568.put('WRD568L', '지앤(좌)'); WRD568.put('WRD568C', '지앤문짝(중앙)'); WRD568.put('WRD568R', '지앤문짝(우)');

// WR5014 = 1000장, WR4014 = 900장, WR3014 = 500장, WR2014 = 450장, WR1014 = 260장
var WR5014 = new Map(), WR4014 = new Map(), WR3014 = new Map(), WR2014 = new Map(), WR1014 = new Map();

WR5014.put('WR5014A', '1000 옷장'); WR5014.put('WR5014B', '1000 이불장'); WR5014.put('WR5014D', '1000 칸막이장');
WR4014.put('WR4014A', '900 옷장'); WR4014.put('WR4014B', '900 이불장'); WR4014.put('WR4014D', '900 칸막이장');
WR3014.put('WR3014C', '500 반장');
WR2014.put('WR2014C', '450 반장');
WR1014.put('WR1014I', '아이보리 선반장'); WR1014.put('WR1014W', '월넛 선반장');

WR5014.put('WR5105AI', '1000 옷장(내부서랍형)'); WR5014.put('WR5105BI', '1000 이불장(내부서랍형)'); WR5014.put('WR5105DI', '1000 칸막이장(내부서랍형)');
WR4014.put('WR4105AI', '900 옷장(내부서랍형)'); WR4014.put('WR4105BI', '900 이불장(내부서랍형)'); WR4014.put('WR4105DI', '900 칸막이장(내부서랍형)');
//WR3014.put('WR3105CI', '500 반장(내부서랍형)');
//WR2014.put('WR2105CI', '450 반장(내부서랍형)');

var WR5014A = new Map(), WR5014B = new Map(), WR5014D = new Map(), WR4014A = new Map(), WR4014B = new Map(), WR4014D = new Map(); 
WR5105A = new Map();WR5105B = new Map();WR5105D = new Map();WR4105A = new Map();WR4105B = new Map();WR4105D = new Map();
WR3014C = new Map();WR2014C = new Map();

WR5014A.put('BWO-0001', '타이걸이'); WR5014A.put('MRC-0001', '공용CC경1'); WR5014A.put('MRC-0002', '공용CC경2'); WR5014A.put('WPH-5014', '바지걸이');
WR4014A.put('BWO-0001', '타이걸이'); WR4014A.put('MRC-0001', '공용CC경1'); WR4014A.put('MRC-0002', '공용CC경2');  WR4014A.put('WPH-4014', '바지걸이');
WR5014B.put('BWO-0001', '타이걸이'); WR5014B.put('MRC-0001', '공용CC경1'); WR5014B.put('MRC-0002', '공용CC경2'); WR5014B.put('WCD-5014B', '코디서랍'); WR5014B.put('BP-1105', '옷걸이봉'); 
WR4014B.put('BWO-0001', '타이걸이'); WR4014B.put('MRC-0001', '공용CC경1'); WR4014B.put('MRC-0002', '공용CC경2'); WR4014B.put('WCD-4014B', '코디서랍'); WR4014B.put('BP-2105', '옷걸이봉'); 
WR5014D.put('BWO-0001', '타이걸이'); WR5014D.put('MRC-0001', '공용CC경1'); WR5014D.put('MRC-0002', '공용CC경2'); WR5014D.put('WCD-5014D', '3단서랍');
WR4014D.put('BWO-0001', '타이걸이'); WR4014D.put('MRC-0001', '공용CC경1'); WR4014D.put('MRC-0002', '공용CC경2'); WR4014D.put('WCD-4014D', '3단서랍');

WR5105A.put('BWO-0001', '타이걸이'); WR5105A.put('MRC-0001', '공용CC경1'); WR5105A.put('MRC-0002', '공용CC경2'); WR5105A.put('WPH-5105', '바지걸이');
WR4105A.put('BWO-0001', '타이걸이'); WR4105A.put('MRC-0001', '공용CC경1'); WR4105A.put('MRC-0002', '공용CC경2'); WR4105A.put('WPH-4105', '바지걸이');
WR5105B.put('BWO-0001', '타이걸이'); WR5105B.put('MRC-0001', '공용CC경1'); WR5105B.put('MRC-0002', '공용CC경2'); WR5105B.put('WCD-5105B', '코디서랍');WR5105B.put('BP-1105', '옷걸이봉');
WR4105B.put('BWO-0001', '타이걸이'); WR4105B.put('MRC-0001', '공용CC경1'); WR4105B.put('MRC-0002', '공용CC경2'); WR4105B.put('WCD-4105B', '코디서랍');WR4105B.put('BP-2105', '옷걸이봉');
WR5105D.put('BWO-0001', '타이걸이'); WR5105D.put('MRC-0001', '공용CC경1'); WR5105D.put('MRC-0002', '공용CC경2'); WR5105D.put('WCD-5105D', '3단서랍');
WR4105D.put('BWO-0001', '타이걸이'); WR4105D.put('MRC-0001', '공용CC경1'); WR4105D.put('MRC-0002', '공용CC경2'); WR4105D.put('WCD-5105D', '3단서랍');

WR3014C.put('BP-3105', '옷걸이봉'); WR2014C.put('BP-4105', '옷걸이봉');
var BUILTIN = new Map();
BUILTIN.put('WRD543', '미카'); BUILTIN.put('WRD546', '플럼'); BUILTIN.put('WRD547', '티라미수'); BUILTIN.put('WRD548', '발트'); BUILTIN.put('WRD533', '수플레'); BUILTIN.put('WRD561', '루이보스'); BUILTIN.put('WRD559', '포엠');BUILTIN.put('WRD528', '크리미');BUILTIN.put('WRD577', '리오');BUILTIN.put('WRD578', '위고');BUILTIN.put('WRD022', '그렌');BUILTIN.put('WRD023', '미라벨');BUILTIN.put('WRD579', '로웰');

var door_type = new Map();
door_type.put('WRD543', 'LCR-CLRC-ALR-AC'); door_type.put('WRD546', 'MCR-LCM-LCR-CLRC-ALR-AC'); door_type.put('WRD547', 'ALR'); door_type.put('WRD548', 'LCR-CLRC-ALR-AC'); door_type.put('WRD533', 'LCR-CLRC-ALR-AC'); door_type.put('WRD561', 'ALR'); door_type.put('WRD559', 'ALR');door_type.put('WRD528', 'ALR');door_type.put('WRD577', 'ALR');door_type.put('WRD578', 'ALR');door_type.put('WRD022', 'ALR');door_type.put('WRD023', 'ALR');door_type.put('WRD579', 'ALR');
// WRD543 = 미카, WRD546 = 플럼, WRD547 = 티라미수, WRD548 = 발트, WRD533 = 수플레, WRD561 = 루이보스,WRD577=리오, WRD578=위고, WRD022=그렌, WRD023=미라벨, WRD579=로웰
var WRD543 = new Map(), WRD546 = new Map(), WRD547 = new Map(), WRD548 = new Map(), WRD533 = new Map(), WRD561 = new Map(), WRD559 = new Map();WRD528 = new Map();WRD577 = new Map();WRD578 = new Map();WRD022 = new Map();WRD023 = new Map();WRD579 = new Map();
WRD543.put('WRD543GL', '미카유리문(좌)'); WRD543.put('WRD543GR', '미카유리문(우)'); WRD543.put('WRD543WL', '미카우드문(좌)'); WRD543.put('WRD543WR', '미카우드문(우)');
WRD546.put('WRD546NL', '플럼내추럴문(좌)'); WRD546.put('WRD546NR', '플럼내추럴문(우)'); WRD546.put('WRD546IL', '플럼아이보리문(좌)'); WRD546.put('WRD546IR', '플럼아이보리문(우)');
WRD547.put('WRD547L', '티라미수문(좌)'); WRD547.put('WRD547R', '티라미수문(우)');
WRD548.put('WRD548GL', '발트유리문(좌)'); WRD548.put('WRD548GR', '발트유리문(우)'); WRD548.put('WRD548WL', '발트우드문(좌)'); WRD548.put('WRD548WR', '발트우드문(우)');
WRD533.put('WRD533LRL', '수플레좌우문(좌)'); WRD533.put('WRD533LRR', '수플레좌우문(우)'); WRD533.put('WRD533CL', '수플레중앙문(좌)'); WRD533.put('WRD533CR', '수플레중앙문(우)');
WRD561.put('WRD561L', '루이보스문(좌)'); WRD561.put('WRD561R', '루이보스문(우)');
WRD559.put('WRD559L', '포엠문(좌)'); WRD559.put('WRD559R', '포엠문(우)');
WRD528.put('WRD528L', '크리미문(좌)'); WRD528.put('WRD528R', '크리미문(우)');
WRD577.put('WRD577L', '리오문(좌)'); WRD577.put('WRD577R', '리오문(우)');WRD577.put('WRD577LA', '리오문(좌)서랍'); WRD577.put('WRD577RA', '리오문(우)서랍'); 
WRD578.put('WRD578LRL', '위고좌우문(좌)'); WRD578.put('WRD578LRR', '위고좌우문(우)'); WRD578.put('WRD578CL', '위고중앙문(좌)'); WRD578.put('WRD578CR', '위고중앙문(우)');WRD578.put('WRD578CLA', '위고문(좌)서랍'); WRD578.put('WRD578CRA', '위고문(우)서랍'); 
WRD022.put('WRD022L', '그렌문(좌)'); WRD022.put('WRD022R', '그렌문(우)');
WRD023.put('WRD023L', '미라벨문(좌)'); WRD023.put('WRD023R', '미라벨문(우)');
WRD579.put('WRD579L', '로웰문(좌)'); WRD579.put('WRD579R', '로웰문(우)');WRD579.put('WRD579LA', '로웰문(좌)서랍'); WRD579.put('WRD579RA', '로웰문(우)서랍'); 

var DRESSROOM = new Map();
DRESSROOM.put('WRD549', '세렌'); DRESSROOM.put('WRD200', '에반(월넛)'); DRESSROOM.put('WRD300', '에반(메이플)');DRESSROOM.put('WRD999', '노블');//DRESSROOM.put('WRD257', '플랫폼');

var basic_width = 0, basic_height = 0;
var text_width = '너비', text_height = '높이';
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
var ward_bi = '';
var ward_ep = '';
var ward_option = '';

var bfWidth = 0, blrWidth = 0;
var dh_qty = 0;

var title;
var img_dr, img_no_dr;
var img_forward, img_left, img_right, img_backward, img_above;

$(function() {
	if (navigator.userAgent.indexOf('Mobile') != -1 || navigator.userAgent.indexOf('Android') != -1) {
		isMobile = true;
		$('.frame-board').css('transform', 'scale(0.9)');
		$('.help-body').css('transform', 'scale(1, 0.9)');
	}
	
	if (on_user == 'y') {
		$('#navi-menu-mobile').removeClass('invisible');
	 	$('.result-save-box').removeClass('invisible');
	}
	
	$('body').click(function() {
		$(document).fullScreen(true);
		$('.result-factory-amt').addClass('invisible');
	});
	
	$('#controller').draggable({containment: 'parent', cancel: '#controller-contents'});
	$('#controller-dr-map').draggable({containment: 'parent', cancel: '.dressroom-map'});
	$('#controller-dr').draggable({containment: 'parent', cancel: '#controller-dr-contents'});
	
	$('.alert-confirm span').click(function() {
		$('.alert').addClass('invisible');
	});
	
	$('.frame-contents, .frame-info').click(function() {
		$('.navi-menu').removeClass('navi-selected');
		$('.navi-menu-item').addClass('invisible');
	});
	
	$('.controller-dr-soh').click(function() {
		if ($(this).attr('data-soh') == 'show') {
			$(this).attr('src', '/images/wardrobe/simulation/ic_expand_more.png');
			$(this).attr('data-soh', 'hide')
			$('.dressroom-map').addClass('invisible');
		} else if ($(this).attr('data-soh') == 'hide') {
			$(this).attr('src', '/images/wardrobe/simulation/ic_expand_less.png');
			$(this).attr('data-soh', 'show')
			$('.dressroom-map').removeClass('invisible');
		}
		
		$('#controller-dr-map').css('height', 'auto');
		
		event.stopPropagation();
	});
	
	show_info();

	// 메뉴바 클릭
	$('.navi-menu .navi-menu-title').click(function() {
		$('.navi-menu-item').addClass('invisible');
		
		if (!$(this).parent().hasClass('navi-selected')) {
			$('.navi-menu').removeClass('navi-selected');
			switch ($(this).parent().attr('id')) {
			case 'navi-menu-type': show_info(); $('#navi-menu-type ul').removeClass('invisible'); break;
			case 'navi-menu-kind':
				if (wardrobe == '') { showAlert('타입을 먼저 선택해 주세요.'); return; }
				$('#navi-menu-kind ul').removeClass('invisible'); break;
			case 'navi-menu-width':
				if (ward_kind == '') { showAlert('종류를 먼저 선택해 주세요.'); return; }
				$('#width').val(0); $('#navi-menu-width ul').removeClass('invisible'); break;
			case 'navi-menu-height':
				if (ward_kind == '') { showAlert('종류를 먼저 선택해 주세요.'); return; }
				$('#height').val(0); $('#navi-menu-height ul').removeClass('invisible'); break;
			case 'navi-menu-construct':
				if ($('.size-width').html() == '0' || $('.size-height').html() == '0') { showAlert('너비와 높이를 먼저 설정해 주세요.'); return; }
				if (ward_kind == '') { showAlert('종류를 먼저 선택해 주세요.'); return; }
				if (wardrobe == 'slide') { showAlert('슬라이딩은 선택할 수 없습니다.'); return; }
				if (wardrobe == 'dressroom') { $('#controller-dr-map').css('top', '210px').css('left', '0'); }
				$('#navi-menu-construct ul').removeClass('invisible'); break;
			case 'navi-menu-finish':
				if (wardrobe == 'dressroom') { showAlert('드레스룸은 선택할 수 없습니다.'); return; }
				$('#navi-menu-finish ul').removeClass('invisible'); break;
			case 'navi-menu-result': return; break;
			}
		}
		$(this).parent().toggleClass('navi-selected');
	});
	
	// 메뉴바 타입 아이템 클릭
	$('.type-item').click(function() {
		var temp_ward;
		wardrobe = $(this).attr('data-type');
		$('.type-state').html($(this).html());
		$('#navi-menu-type div').click();

		$('.frame-info').removeClass('invisible');
		$('.frame-contents').addClass('invisible');
		$('.frame-result').addClass('invisible');
		$('#controller').addClass('invisible');
		
		$('.size-width').html(0);
		$('.size-height').html(0);
		
		switch (wardrobe) {
		case 'slide': temp_ward = SLIDE; text_width = '너비'; text_height = '높이'; $('#navi-menu-nst').removeClass('invisible');break;
		case 'builtin': temp_ward = BUILTIN; text_width = '너비'; text_height = '높이';$('#navi-menu-nst').removeClass('invisible'); break;
		case 'dressroom': temp_ward = DRESSROOM; text_width = '가로폭'; text_height = '세로폭'; $('.finish-state').html(''); ward_bi = '';$('#navi-menu-nst').addClass('invisible'); break;
		}
		
		$('.text-width').html(text_width);
		$('.text-height').html(text_height);
		
		var temp_ward_key;
		$('#navi-menu-kind .navi-menu-item').html('');
		for (i = 0; i < temp_ward.size(); i++) {
			temp_ward_key = temp_ward.keys()[i];
			$('#navi-menu-kind .navi-menu-item').append('<li class="navi-menu-item-li kind-item" data-kind="'+temp_ward_key+'">'+temp_ward.get(temp_ward_key)+'</li>');			
		}
		
		ward_kind = '';
		$('.kind-state').html('');
		
		// 메뉴바 종류 아이템 클릭
		$('.kind-item').click(function() {
			ward_kind = $(this).attr('data-kind');
			$('.kind-state').html($(this).html());
			$('#navi-menu-kind div').click();
			
			switch (wardrobe) {
			case 'slide': $('.size-width').html('2026'); $('.size-height').html('2240'); break;
			case 'builtin': $('.size-width').html('2000'); $('.size-height').html('2240'); break;
			case 'dressroom': $('.size-width').html('2000'); $('.size-height').html('2000'); break;
			}
			
			basic_apply();
		});
	});
	
	// 너비, 높이 숫자 클릭
	$('.input-number').click(function() {
		var space = $(this).attr('data-space');
		var number = $(this).html();
		
		if (number == '모두지움') {
			$('#'+space).val(0);
		} else if (number == '지움') {
			if ($('#'+space).val() < 10) {
				$('#'+space).val(0);
			} else {
				$('#'+space).val(($('#'+space).val() - ($('#'+space).val() % 10)) / 10);
			}
		} else {
			if ($('#'+space).val() < 1000) {
				$('#'+space).val($('#'+space).val() * 10 + Number(number));
			}
		}
	});
	
	$('.input-apply').click(function() {
		var space = $(this).attr('data-space');
		var min_space = 0, max_space = 0;
		
		switch (space) {
		case 'width':
			switch (wardrobe) {
			case 'slide':
				min_space = 2026; max_space = 4800; break;
			case 'builtin':
				//min_space = 2000; max_space = 5800; break;
				min_space = 1000; max_space = 5800; break;
			case 'dressroom':
				min_space = 2000; max_space = 5000; break;
			}
			break;
		case 'height':
			switch (wardrobe) {
			case 'slide':
				min_space = 2240;
				if ($('.nst-yesno').attr('data-nst-yesno') == 'show')max_space = 2600;
				else max_space = 2400;
				 break;
			case 'builtin':
				min_space = 2240;
				if ($('.nst-yesno').attr('data-nst-yesno') == 'show')max_space = 2600;
				else max_space = 2400;
				 break;
			case 'dressroom':
				min_space = 2000; max_space = 5000; break;
			}
			break;
		}
		
		if ($('#'+space).val() < min_space) {
			showAlert('최소 '+min_space+'(mm)부터 가능합니다.');
		} else if ($('#'+space).val() > max_space) {
			showAlert('최대 '+max_space+'(mm)까지 가능합니다.');
		} else {
			$('.size-'+space).html($('#'+space).val());
			$('#navi-menu-'+space+' ul').addClass('invisible');
			$('#navi-menu-'+space).removeClass('navi-selected');
			
			if ($('.size-width').html() != '0' && $('.size-height').html() != '0') {
				basic_apply();
			}
		}
	});
	
	// 메뉴바 문짝 클릭
	$('#navi-menu-door').click(function() {
		if ($('.door-state').attr('data-door-state') == 'show') {
			$('.door-state').html('가림');
			$('.door-state').attr('data-door-state', 'hide');
			$('.door-box').addClass('invisible');
		} else {
			$('.door-state').html('보임');
			$('.door-state').attr('data-door-state', 'show');
			$('.door-box').removeClass('invisible');
		}
		status_door = $('.door-state').attr('data-door-state');
	});
	
	// 메뉴바 비규격 클릭
	$('#navi-menu-nst').click(function() {
		if ($('.nst-yesno').attr('data-nst-yesno') == 'show') {
			$('.nst-yesno').html('미사용');
			$('.nst-yesno').attr('data-nst-yesno', 'hide');
		} else {
			$('.nst-yesno').html('사용');
			$('.nst-yesno').attr('data-nst-yesno', 'show');
		}
	});
	
	// 
	$('.controller-header-item').click(function() {
		$('.controller-header-item').removeClass('controller-selected');
		$('#controller-contents').remove();
//		$('#controller .lSSlideOuter').remove();
		$('#controller div').remove();
		$('#controller').append('<ul id="controller-contents"></ul>');
		
		if (!$(this).hasClass('controller-selected')) {
			$(this).addClass('controller-selected');
			switch ($(this).attr('data-controller')) {
			case 'body':
				show_body();
				break;
			case 'option':
				if(ward_kind=='WRD022'||ward_kind=='WRD023'){
					}else{
					show_option();
				}				
				break;
			case 'door':
				show_door();
				break;
			}
		}
		
		$('#controller').css('height', 'auto');
	});
	if (isMobile) {
		$('.controller-header-item').mousemove(function() {
			$('.controller-header-item').removeClass('controller-selected');
			$('#controller-contents').remove();
			$('#controller div').remove();
			$('#controller').append('<ul id="controller-contents"></ul>');
			
			if (!$(this).hasClass('controller-selected')) {
				$(this).addClass('controller-selected');
				switch ($(this).attr('data-controller')) {
				case 'body':
					show_body();
					break;
				case 'option':
					if(ward_kind=='WRD022'||ward_kind=='WRD023'){
					}else{
					show_option();
				}
					break;
				case 'door':
					show_door();
					break;
				}
			}
			
			$('#controller').css('height', 'auto');
		});
	}
	
	
	$('.controller-dr-header-item').click(function() {
		$('.controller-dr-header-item').removeClass('controller-selected');
		$('#controller-dr-contents').remove();
		$('#controller-dr').append('<ul id="controller-dr-contents"></ul>');
		
		if (!$(this).hasClass('controller-selected')) {
			$(this).addClass('controller-selected');
			switch ($(this).attr('data-controller')) {
			case 'body':
				$('#controller-dr-contents').append('<div class="dr-body-remove" style="background: #F15F5F; color: #FFF; text-align: center; padding: 5px 0 5px 0; margin: 10px 20% 10px 20%;">제거</div>');
				$('.dr-body-remove').off('click').click(function() {
					dr_body_remove_click();
				});
				if (isMobile) {
					$('.dr-body-remove').off('mouseover').mouseover(function() {
						dr_body_remove_click();
					});
				}
				
				switch (ward_kind) {
				case 'WRD549':
					if ($('#'+current_body).attr('data-top-board') == 'Y')
						$('#controller-dr-contents').append('<div style="margin-top: 10px;">천판</div><div class="dr-top-board-large" style="margin-bottom: 10px;">대</div><div class="dr-top-board-small">소</div>');
					if ($('#'+current_body).attr('data-side-board') == 'Y')
						$('#controller-dr-contents').append('<div style="margin-top: 10px;">측판</div><div class="dr-side-board-iron" style="margin-bottom: 10px;">철제</div><div class="dr-side-board-wood">목재</div>');
					
					if ($('#'+current_body).hasClass('dr_b800_c1_a') || $('#'+current_body).hasClass('dr_b800_c1_b')
							|| $('#'+current_body).hasClass('dr_b800_d1') || $('#'+current_body).hasClass('dr_b800_e1'))
						$('.dr-top-board-large').addClass('dr-board-selected');
					else if ($('#'+current_body).hasClass('dr_b800_c2_a') || $('#'+current_body).hasClass('dr_b800_c2_b')
							|| $('#'+current_body).hasClass('dr_b800_d2') || $('#'+current_body).hasClass('dr_b800_e2'))
						$('.dr-top-board-small').addClass('dr-board-selected');
					else if ($('#'+current_body).hasClass('dr_bcorner_l1') || $('#'+current_body).hasClass('dr_bcorner_r1')
							|| $('#'+current_body).hasClass('dr_b800_a1') || $('#'+current_body).hasClass('dr_b800_b1')
							|| $('#'+current_body).hasClass('dr_b600_a1') || $('#'+current_body).hasClass('dr_b600_b1'))
						$('.dr-side-board-iron').addClass('dr-board-selected');
					else if ($('#'+current_body).hasClass('dr_bcorner_l2') || $('#'+current_body).hasClass('dr_bcorner_r2')
							|| $('#'+current_body).hasClass('dr_b800_a2') || $('#'+current_body).hasClass('dr_b800_b2')
							|| $('#'+current_body).hasClass('dr_b600_a2') || $('#'+current_body).hasClass('dr_b600_b2'))
						$('.dr-side-board-wood').addClass('dr-board-selected');
					break;
				}
				
				$('.dr-top-board-large').off('click').click(function() {
					dr_top_board_large_click();
				});
				if (isMobile) {
					$('.dr-top-board-large').off('mouseover').mouseover(function() {
						dr_top_board_large_click();
					});
				}
				
				$('.dr-top-board-small').off('click').click(function() {
					dr_top_board_small_click();
				});
				if (isMobile) {
					$('.dr-top-board-small').off('mouseover').mouseover(function() {
						dr_top_board_small_click();
					});
				}
				
				$('.dr-side-board-iron').off('click').click(function() {
					dr_side_board_iron_click();
				});
				if (isMobile) {
					$('.dr-side-board-iron').off('mouseover').mouseover(function() {
						dr_side_board_iron_click();
					});
				}
				
				$('.dr-side-board-wood').off('click').click(function() {
					dr_side_board_wood_click();
				});
				if (isMobile) {
					$('.dr-side-board-wood').off('mouseover').mouseover(function() {
						dr_side_board_wood_click();
					});
				}
				
				break;
			case 'option':
				switch (ward_kind) {
				case 'WRD549':
					if ($('#'+current_body).hasClass('dr_b900_a1') || $('#'+current_body).hasClass('dr_b900_a2')) {
						$('#controller-dr-contents').append('<ul id="dr-b900-a-option"></ul>');
						$('#controller-dr-contents').css('padding', '10px 0 10px 0');
						$('#dr-b900-a-option').append('<li style="width: 200px;"><div><img class="b900_a1" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b900_a1_a.png" /></div><div>화이트</div></li>');
						$('#dr-b900-a-option').append('<li style="width: 200px;"><div><img class="b900_a2" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b900_a2.png" /></div><div>월넛</div></li>');
						$('#dr-b900-a-option').lightSlider({
							autoWidth: true,
					        controls: false
						});
						$('#dr-b900-a-option img').off('click').click(function() {
							dr_b900_a_option_click(this);
						});
						if (isMobile) {
							$('#dr-b900-a-option img').off('mouseover').mouseover(function() {
								dr_b900_a_option_click(this);
							});
						}
					} else if ($('#'+current_body).hasClass('dr_b800_c1_a') || $('#'+current_body).hasClass('dr_b800_c1_b')
							|| $('#'+current_body).hasClass('dr_b800_c2_a') || $('#'+current_body).hasClass('dr_b800_c2_b')) {
						$('#controller-dr-contents').append('<ul id="dr-b800-c-option"></ul>');
						$('#controller-dr-contents').css('padding', '10px 0 10px 0');
						$('#dr-b800-c-option').append('<li style="width: 200px;"><div><img class="b800_c_a" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/바지걸이.png" width="100px" /></div><div>바지걸이</div></li>');
						$('#dr-b800-c-option').append('<li style="width: 200px;"><div><img class="b800_c_b" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/악세사리.png" width="100px" /></div><div>악세사리</div></li>');
						$('#dr-b800-c-option').lightSlider({
							autoWidth: true,
					        controls: false
						});
						$('#dr-b800-c-option img').off('click').click(function() {
							dr_b800_c_option_click(this);
						});
						if (isMobile) {
							$('#dr-b800-c-option img').off('mouseover').mouseover(function() {
								dr_b800_c_option_click(this);
							});
						}
					} else if ($('#'+current_body).hasClass('dr_b400_a1') || $('#'+current_body).hasClass('dr_b400_a2')) {
						$('#controller-dr-contents').append('<div><img src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b400_a2.png" /></div><div>거울도어</div><div class="b400-option"><div class="add-option">추가</div><div class="sub-option">제거</div></div>');
						$('#controller-dr-contents').css('padding', '10px 0 20px 0');
						$('.b400-option .add-option').off('click').click(function() {
							$('#'+current_body).addClass('dr_b400_a2');
							$('#'+current_body).removeClass('dr_b400_a1');
							$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b400_a2.png)');
						});
						if (isMobile) {
							$('.b400-option .add-option').off('mouseover').mouseover(function() {
								$('#'+current_body).addClass('dr_b400_a2');
								$('#'+current_body).removeClass('dr_b400_a1');
								$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b400_a2.png)');
							});
						}
						$('.b400-option .sub-option').off('click').click(function() {
							$('#'+current_body).addClass('dr_b400_a1');
							$('#'+current_body).removeClass('dr_b400_a2');
							$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b400_a1.png)');
						});
						if (isMobile) {
							$('.b400-option .sub-option').off('mouseover').mouseover(function() {
								$('#'+current_body).addClass('dr_b400_a1');
								$('#'+current_body).removeClass('dr_b400_a2');
								$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b400_a1.png)');
							});
						}
					} else {
						$('#controller-dr-contents').append('<div>No item</div>');
						$('#controller-dr-contents').css('padding', '10px 0 10px 0');
					}
					break;
				case 'WRD200':
				case 'WRD300':
					if ($('#'+current_body).hasClass('dr_b800_a1') || $('#'+current_body).hasClass('dr_b800_a2')) {
						$('#controller-dr-contents').append('<div><img src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/코디서랍.png" width="100px" /></div><div>코디서랍</div><div class="b800-option"><div class="add-option">추가</div><div class="sub-option">제거</div></div>');
						$('#controller-dr-contents').css('padding', '10px 0 20px 0');
						$('.b800-option .add-option').off('click').click(function() {
							$('#'+current_body).addClass('dr_b800_a2');
							$('#'+current_body).removeClass('dr_b800_a1');
							$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b800_a2.png)');
						});
						if (isMobile) {
							$('.b800-option .add-option').off('mouseover').mouseover(function() {
								$('#'+current_body).addClass('dr_b800_a2');
								$('#'+current_body).removeClass('dr_b800_a1');
								$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b800_a2.png)');
							});
						}
						$('.b800-option .sub-option').off('click').click(function() {
							$('#'+current_body).addClass('dr_b800_a1');
							$('#'+current_body).removeClass('dr_b800_a2');
							$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b800_a1.png)');
						});
						if (isMobile) {
							$('.b800-option .sub-option').off('mouseover').mouseover(function() {
								$('#'+current_body).addClass('dr_b800_a1');
								$('#'+current_body).removeClass('dr_b800_a2');
								$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b800_a1.png)');
							});
						}
					} else if ($('#'+current_body).hasClass('dr_b800_b1') || $('#'+current_body).hasClass('dr_b800_b2')
							|| $('#'+current_body).hasClass('dr_b800_b3')) {
						$('#controller-dr-contents').append('<ul id="dr-b800-b-option"></ul>');
						$('#controller-dr-contents').css('padding', '10px 0 10px 0');
						$('#dr-b800-b-option').append('<li style="width: 200px;"><div><img class="b800_b1" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b800_b1.png" height="100px" /></div><div>없음</div></li>');
						$('#dr-b800-b-option').append('<li style="width: 200px;"><div><img class="b800_b2" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/2단서랍.png" width="100px" /></div><div>2단서랍</div></li>');
						$('#dr-b800-b-option').append('<li style="width: 200px;"><div><img class="b800_b3" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/옵션도어.png" width="100px" /></div><div>옵션도어</div></li>');
						$('#dr-b800-b-option').lightSlider({
							autoWidth: true,
					        controls: false
						});
						$('#dr-b800-b-option img').off('click').click(function() {
							dr_b800_b_option_click(this);
						});
						if (isMobile) {
							$('#dr-b800-c-option img').off('mouseover').mouseover(function() {
								dr_b800_b_option_click(this);
							});
						}
					} else {
						$('#controller-dr-contents').append('<div>No item</div>');
						$('#controller-dr-contents').css('padding', '10px 0 10px 0');
					}
					break;
				case 'WRD257':
					if ($('#'+current_body).hasClass('dr_b1000_a1_1') || $('#'+current_body).hasClass('dr_b1000_a2_1')) {
						$('#controller-dr-contents').append('<ul id="dr-b1000-a-option"></ul>');
						$('#controller-dr-contents').css('padding', '10px 0 10px 0');
						$('#dr-b1000-a-option').append('<li style="width: 200px;"><div class="b1000_a1"><img  src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_a1.png" /><div>문짝색상</div><div id="1000_a1" class="add-option">그레이</div><div  id="1000_a2" class="sub-option">다크그레이</div></div></div></li>');
						$('#dr-b1000-a-option').append('<li style="width: 200px;"><div class="b1000_a1_a"><img  src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/WPH-5014-SHOW.png" /><div>바지걸이</div><div  id="1000_aa" class="add-option">추가</div><div  id="1000_a_a" class="sub-option">없음</div></div></div></li>');
						$('#dr-b1000-a-option').append('<li style="width: 200px;"><div class="b1000_a1_b"><img  src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/BWO-0001-SHOW.png" /><div>타이걸이</div><div  id="1000_ab" class="add-option">추가</div><div  id="1000_a_b" class="sub-option">없음</div></div></div></li>');
						$('#dr-b1000-a-option').append('<li style="width: 200px;"><div class="b1000_a1_c"><img  src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/MRC-0001-SHOW.png" /><div>공용CC경1</div><div  id="1000_ac" class="add-option">추가</div><div  id="1000_a_c" class="sub-option">없음</div></div></div></li>');
						$('#dr-b1000-a-option').append('<li style="width: 200px;"><div class="b1000_a1_d"><img  src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/MRC-0002-SHOW.png" /><div>공용CC경2</div><div  id="1000_ad" class="add-option">추가</div><div  id="1000_a_d" class="sub-option">없음</div></div></div></li>');
						$('#dr-b1000-a-option').lightSlider({
							autoWidth: true,
					        controls: false
						});
						$('#dr-b1000-a-option img').off('click').click(function() {
							dr_b1000_a_option_click(this);
						});
						if (isMobile) {
							$('#dr-b1000-a-option img').off('mouseover').mouseover(function() {
								dr_b1000_a_option_click(this);
							});
						}
					} else if ($('#'+current_body).hasClass('dr_b1000_b1') || $('#'+current_body).hasClass('dr_b1000_b2')|| $('#'+current_body).hasClass('dr_b1000_b3')) {
						$('#controller-dr-contents').append('<ul id="dr-b1000-b-option"></ul>');
						$('#controller-dr-contents').css('padding', '10px 0 10px 0');
						$('#dr-b1000-b-option').append('<li style="width: 200px;"><div><img class="b1000_b1" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_b1.png" /></div><div>그레이</div></li>');
						$('#dr-b1000-b-option').append('<li style="width: 200px;"><div><img class="b1000_b2" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_b2.png" /></div><div>다크그레이</div></li>');
						$('#dr-b1000-b-option').append('<li style="width: 200px;"><div><img class="b1000_b3" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_b3.png" /></div><div>문짝없음</div></li>');
						$('#dr-b1000-b-option').lightSlider({
							autoWidth: true,
					        controls: false
						});
						$('#dr-b1000-b-option img').off('click').click(function() {
							dr_b1000_b_option_click(this);
						});
						if (isMobile) {
							$('#dr-b1000-b-option img').off('mouseover').mouseover(function() {
								dr_b1000_b_option_click(this);
							});
						}
					}else if ($('#'+current_body).hasClass('dr_b1000_c1') ||$('#'+current_body).hasClass('dr_b1000_c1_a') ||$('#'+current_body).hasClass('dr_b1000_c1_b') ||$('#'+current_body).hasClass('dr_b1000_c1_c') 
							|| $('#'+current_body).hasClass('dr_b1000_c2')|| $('#'+current_body).hasClass('dr_b1000_c2_a')|| $('#'+current_body).hasClass('dr_b1000_c2_b')|| $('#'+current_body).hasClass('dr_b1000_c2_c')
							|| $('#'+current_body).hasClass('dr_b1000_c3')|| $('#'+current_body).hasClass('dr_b1000_c3_a')|| $('#'+current_body).hasClass('dr_b1000_c3_b')|| $('#'+current_body).hasClass('dr_b1000_c3_c')) {
						var tkind = $('#'+current_body).attr('class');
						$('#controller-dr-contents').append('<ul id="dr-b1000-c-option"></ul>');
						$('#controller-dr-contents').css('padding', '10px 0 10px 0');
						$('#dr-b1000-c-option').append('<li style="width: 200px;"><div class="b1000_c"><img  src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c1.png" /><div>문짝색상</div><div id="1000_c1" class="add-option">그레이</div><div  id="1000_c2" class="sub-option">다크그레이</div><div id="1000_c3" class="all-option">문짝없음</div></div></div></li>');
						$('#dr-b1000-c-option').append('<li style="width: 200px;"><div class="b1000_ca"><img  src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c1.png" /><div>LED조명</div><div  id="1000_ca" class="add-option">추가</div><div  id="1000_c_a" class="sub-option">제거</div></div></div></li>');
						$('#dr-b1000-c-option').append('<li style="width: 200px;"><div class="b1000_cb"><img  src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c1.png" /><div>타공판</div><div  id="1000_cb" class="add-option">추가</div><div  id="1000_c_b" class="sub-option">제거</div></div></div></li>');
						$('#dr-b1000-c-option').lightSlider({
							autoWidth: true,
					        controls: false
						});
						switch (tkind) {
						case 'dr-body dr_b1000_c1': $('#1000_c1').addClass('choiceBtn'); $('#1000_c_a').addClass('choiceBtn'); $('#1000_c_b').addClass('choiceBtn'); 
							$('.b1000_c img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c1.png');
							$('.b1000_ca img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c1.png');
							$('.b1000_cb img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c1.png');
							break;					
						case 'dr-body dr_b1000_c1_a': $('#1000_c1').addClass('choiceBtn'); $('#1000_ca').addClass('choiceBtn');$('#1000_c_b').addClass('choiceBtn');
							$('.b1000_c img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c1.png');
							$('.b1000_ca img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c1_a.png');
							$('.b1000_cb img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c1.png');
							break;
						case 'dr-body dr_b1000_c1_b': $('#1000_c1').addClass('choiceBtn'); $('#1000_c_a').addClass('choiceBtn');$('#1000_cb').addClass('choiceBtn');
							$('.b1000_c img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c1.png');
							$('.b1000_ca img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c1.png');
							$('.b1000_cb img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c1_b.png');
							break;
						case 'dr-body dr_b1000_c1_c': $('#1000_c1').addClass('choiceBtn'); $('#1000_ca').addClass('choiceBtn');$('#1000_cb').addClass('choiceBtn');
							$('.b1000_c img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c1.png');
							$('.b1000_ca img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c1_a.png');
							$('.b1000_cb img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c1_b.png');
							break;
						case 'dr-body dr_b1000_c2': $('#1000_c2').addClass('choiceBtn'); $('#1000_c_a').addClass('choiceBtn'); $('#1000_c_b').addClass('choiceBtn'); 
							$('.b1000_c img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c2.png');
							$('.b1000_ca img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c2.png');
							$('.b1000_cb img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c2.png');
							break;	
						case 'dr-body dr_b1000_c2_a': $('#1000_c2').addClass('choiceBtn'); $('#1000_ca').addClass('choiceBtn');$('#1000_c_b').addClass('choiceBtn');
							$('.b1000_c img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c2.png');
							$('.b1000_ca img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c2_a.png');
							$('.b1000_cb img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c2.png');
							break;
						case 'dr-body dr_b1000_c2_b': $('#1000_c2').addClass('choiceBtn'); $('#1000_c_a').addClass('choiceBtn');$('#1000_cb').addClass('choiceBtn');
							$('.b1000_c img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c2.png');
							$('.b1000_ca img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c2.png');
							$('.b1000_cb img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c2_b.png');
							break;
						case 'dr-body dr_b1000_c2_c': $('#1000_c2').addClass('choiceBtn'); $('#1000_ca').addClass('choiceBtn');$('#1000_cb').addClass('choiceBtn');
							$('.b1000_c img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c2.png');
							$('.b1000_ca img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c2_a.png');
							$('.b1000_cb img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c2_b.png');
							break;
						case 'dr-body dr_b1000_c3': $('#1000_c3').addClass('choiceBtn'); $('#1000_c_a').addClass('choiceBtn'); $('#1000_c_b').addClass('choiceBtn'); 
							$('.b1000_c img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c3.png');
							$('.b1000_ca img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c3.png');
							$('.b1000_cb img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c3.png');
							break;	
						case 'dr-body dr_b1000_c3_a': $('#1000_c3').addClass('choiceBtn'); $('#1000_ca').addClass('choiceBtn');$('#1000_c_b').addClass('choiceBtn');
							$('.b1000_c img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c3.png');
							$('.b1000_ca img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c3_a.png');
							$('.b1000_cb img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c3.png');
							break;
						case 'dr-body dr_b1000_c3_b': $('#1000_c3').addClass('choiceBtn'); $('#1000_c_a').addClass('choiceBtn');$('#1000_cb').addClass('choiceBtn');
							$('.b1000_c img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c3.png');
							$('.b1000_ca img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c3.png');
							$('.b1000_cb img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c3_b.png');
							break;
						case 'dr-body dr_b1000_c3_c': $('#1000_c2').addClass('choiceBtn'); $('#1000_ca').addClass('choiceBtn');$('#1000_cb').addClass('choiceBtn');
							$('.b1000_c img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c3.png');
							$('.b1000_ca img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c3_a.png');
							$('.b1000_cb img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c3_b.png');
							break;
						}
						
						$('#1000_c1').off('click').click(function() {	
							changeDrKind("1000_c1");
						});
						if (isMobile) {
							$('#1000_c1').off('mouseover').mouseover(function() {
								changeDrKind("1000_c1");
							});
						}
						$('#1000_c2').off('click').click(function() {
							changeDrKind("1000_c2");
						});
						if (isMobile) {
							$('#1000_c2').off('mouseover').mouseover(function() {
								changeDrKind("1000_c2");
							});
						}
						$('#1000_c3').off('click').click(function() {
							changeDrKind("1000_c3");
						});
						if (isMobile) {
							$('#1000_c3').off('mouseover').mouseover(function() {
								changeDrKind("1000_c3");
							});
						}
						$('#1000_ca').off('click').click(function() {	
							changeDrKind("1000_ca");
						});
						if (isMobile) {
							$('#1000_ca').off('mouseover').mouseover(function() {
								changeDrKind("1000_ca");
							});
						}
						$('#1000_c_a').off('click').click(function() {	
							changeDrKind("1000_c_a");
						});
						if (isMobile) {
							$('#1000_c_a').off('mouseover').mouseover(function() {
								changeDrKind("1000_c_a");
							});
						}
						$('#1000_cb').off('click').click(function() {	
							changeDrKind("1000_cb");
						});
						if (isMobile) {
							$('#1000_cb').off('mouseover').mouseover(function() {
								changeDrKind("1000_cb");
							});
						}
						$('#1000_c_b').off('click').click(function() {	
							changeDrKind("1000_c_b");
						});
						if (isMobile) {
							$('#1000_c_b').off('mouseover').mouseover(function() {
								changeDrKind("1000_c_b");
							});
						}	
					}else if ($('#'+current_body).hasClass('dr_b1000_d1') || $('#'+current_body).hasClass('dr_b1000_d2')|| $('#'+current_body).hasClass('dr_b1000_d3')|| $('#'+current_body).hasClass('dr_b1000_d1_a')|| $('#'+current_body).hasClass('dr_b1000_d2_a')|| $('#'+current_body).hasClass('dr_b1000_d3_a')) {
						var tkind = $('#'+current_body).attr('class');
						$('#controller-dr-contents').append('<ul id="dr-b1000-d-option"></ul>');
						$('#controller-dr-contents').css('padding', '10px 0 10px 0');
						$('#dr-b1000-d-option').append('<li style="width: 200px;"><div class="b1000_d"><img  src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_d1.png" /><div>문짝색상</div><div id="1000_d1" class="add-option">그레이</div><div  id="1000_d2" class="sub-option">다크그레이</div><div id="1000_d3" class="all-option">문짝없음</div></div></div></li>');
						$('#dr-b1000-d-option').append('<li style="width: 200px;"><div class="b1000_d_a"><img  src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_d1.png" /><div>3단서랍통</div><div  id="1000_da" class="add-option">추가</div><div  id="1000_d_a" class="sub-option">제거</div></div></div></li>');
						$('#dr-b1000-d-option').lightSlider({
							autoWidth: true,
					        controls: false
						});
						switch (tkind) {
						case 'dr-body dr_b1000_d1': $('#1000_d1').addClass('choiceBtn'); $('#1000_d_a').addClass('choiceBtn'); 
							$('.b1000_d img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_d1.png');
							$('.b1000_d_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_d1.png');
							break;
						case 'dr-body dr_b1000_d2': $('#1000_d2').addClass('choiceBtn'); $('#1000_d_a').addClass('choiceBtn');
							$('.b1000_d img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_d2.png');
							$('.b1000_d_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_d2.png');
							break;
						case 'dr-body dr_b1000_d3': $('#1000_d3').addClass('choiceBtn'); $('#1000_d_a').addClass('choiceBtn');
							$('.b1000_d img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_d3.png');
							$('.b1000_d_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_d3.png');
							break;
						case 'dr-body dr_b1000_d1_a': $('#1000_d1').addClass('choiceBtn'); $('#1000_da').addClass('choiceBtn');
							$('.b1000_d img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_d1.png');
							$('.b1000_d_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_d1_a.png');
							break;
						case 'dr-body dr_b1000_d2_a': $('#1000_d2').addClass('choiceBtn'); $('#1000_da').addClass('choiceBtn');
							$('.b1000_d img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_d2.png');
							 $('.b1000_d_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_d2_a.png');
							 break;
						case 'dr-body dr_b1000_d3_a': $('#1000_d3').addClass('choiceBtn'); $('#1000_da').addClass('choiceBtn');
							$('.b1000_d img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_d3.png');
							 $('.b1000_d_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_d3_a.png');
							 break;
						}
						
						$('#1000_d1').off('click').click(function() {	
							changeDrKind("1000_d1");
						});
						if (isMobile) {
							$('#1000_d1').off('mouseover').mouseover(function() {
								changeDrKind("1000_d1");
							});
						}
						$('#1000_d2').off('click').click(function() {
							changeDrKind("1000_d2");
						});
						if (isMobile) {
							$('#1000_d2').off('mouseover').mouseover(function() {
								changeDrKind("1000_d2");
							});
						}
						$('#1000_d3').off('click').click(function() {
							changeDrKind("1000_d3");
						});
						if (isMobile) {
							$('#1000_d3').off('mouseover').mouseover(function() {
								changeDrKind("1000_d3");
							});
						}
						$('#1000_da').off('click').click(function() {	
							changeDrKind("1000_da");
						});
						if (isMobile) {
							$('#1000_da').off('mouseover').mouseover(function() {
								changeDrKind("1000_da");
							});
						}
						$('#1000_d_a').off('click').click(function() {	
							changeDrKind("1000_d_a");
						});
						if (isMobile) {
							$('#1000_d_a').off('mouseover').mouseover(function() {
								changeDrKind("1000_d_a");
							});
						}					
					}else if ($('#'+current_body).hasClass('dr_b900_b1') || $('#'+current_body).hasClass('dr_b900_b2')) {
						$('#controller-dr-contents').append('<ul id="dr-b900-b-option"></ul>');
						$('#controller-dr-contents').css('padding', '10px 0 10px 0');
						$('#dr-b900-b-option').append('<li style="width: 200px;"><div><img class="b900_b1" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b900_b1.png" /></div><div>그레이</div></li>');
						$('#dr-b900-b-option').append('<li style="width: 200px;"><div><img class="b900_b2" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b900_b2.png" /></div><div>다크그레이</div></li>');
						$('#dr-b900-b-option').lightSlider({
							autoWidth: true,
					        controls: false
						});
						$('#dr-b900-b-option img').off('click').click(function() {
							dr_b900_b_option_click(this);
						});
						if (isMobile) {
							$('#dr-b900-b-option img').off('mouseover').mouseover(function() {
								dr_b900_b_option_click(this);
							});
						}
					}else if ($('#'+current_body).hasClass('dr_b900_c1') || $('#'+current_body).hasClass('dr_b900_c2')|| $('#'+current_body).hasClass('dr_b900_c3')) {
						$('#controller-dr-contents').append('<ul id="dr-b900-c-option"></ul>');
						$('#controller-dr-contents').css('padding', '10px 0 10px 0');
						$('#dr-b900-c-option').append('<li style="width: 200px;"><div><img class="b900_c1" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b900_c1.png" /></div><div>그레이</div></li>');
						$('#dr-b900-c-option').append('<li style="width: 200px;"><div><img class="b900_c2" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b900_c2.png" /></div><div>다크그레이</div></li>');
						$('#dr-b900-c-option').append('<li style="width: 200px;"><div><img class="b900_c3" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b900_c3.png" /></div><div>문짝없음</div></li>');
						$('#dr-b900-c-option').lightSlider({
							autoWidth: true,
					        controls: false
						});
						$('#dr-b900-c-option img').off('click').click(function() {
							dr_b900_c_option_click(this);
						});
						if (isMobile) {
							$('#dr-b900-c-option img').off('mouseover').mouseover(function() {
								dr_b900_c_option_click(this);
							});
						}
					}else if ($('#'+current_body).hasClass('dr_b600_c1') || $('#'+current_body).hasClass('dr_b600_c2')|| $('#'+current_body).hasClass('dr_b600_c3')) {
						$('#controller-dr-contents').append('<ul id="dr-b600-c-option"></ul>');
						$('#controller-dr-contents').css('padding', '10px 0 10px 0');
						$('#dr-b600-c-option').append('<li style="width: 200px;"><div><img class="b600_c1" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b600_c1.png" /></div><div>그레이</div></li>');
						$('#dr-b600-c-option').append('<li style="width: 200px;"><div><img class="b600_c2" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b600_c2.png" /></div><div>다크그레이</div></li>');
						$('#dr-b600-c-option').append('<li style="width: 200px;"><div><img class="b600_c3" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b600_c3.png" /></div><div>문짝없음</div></li>');
						$('#dr-b600-c-option').lightSlider({
							autoWidth: true,
					        controls: false
						});
						$('#dr-b600-c-option img').off('click').click(function() {
							dr_b600_c_option_click(this);
						});
						if (isMobile) {
							$('#dr-b600-c-option img').off('mouseover').mouseover(function() {
								dr_b600_c_option_click(this);
							});
						}
					} else {
						$('#controller-dr-contents').append('<div>No item</div>');
						$('#controller-dr-contents').css('padding', '10px 0 10px 0');
					}
					
					break;
				case 'WRD999':
					 if ($('#'+current_body).hasClass('dr_b1000_e1') || $('#'+current_body).hasClass('dr_b1000_e1_a')|| $('#'+current_body).hasClass('dr_b1000_e1_b')|| $('#'+current_body).hasClass('dr_b1000_e1_c')) {
						var tkind = $('#'+current_body).attr('class');
						$('#controller-dr-contents').append('<ul id="dr-b1000-e-option"></ul>');
						$('#controller-dr-contents').css('padding', '10px 0 10px 0');
						$('#dr-b1000-e-option').append('<li style="width: 200px;"><div class="b1000_e"><img  src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_e1_a.png" /><div>조명옷걸이</div><div id="1000_ea" class="add-option">추가</div><div  id="1000_e_a" class="sub-option">제거</div></div></div></li>');
						$('#dr-b1000-e-option').append('<li style="width: 200px;"><div class="b1000_e_a"><img  src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_e1_b.png" /><div>유리도어</div><div  id="1000_eb" class="add-option">추가</div><div  id="1000_e_b" class="sub-option">제거</div></div></div></li>');
						$('#dr-b1000-e-option').lightSlider({
							autoWidth: true,
					        controls: false
						});
						switch (tkind) {
						case 'dr-body dr_b1000_e1': $('#1000_e_a').addClass('choiceBtn'); $('#1000_e_b').addClass('choiceBtn'); 
							$('.b1000_e img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_e1.png');
							$('.b1000_e_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_e1.png');
							break;
						case 'dr-body dr_b1000_e1_a': $('#1000_ea').addClass('choiceBtn'); $('#1000_e_b').addClass('choiceBtn');
							$('.b1000_e img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_e1_a.png');
							$('.b1000_e_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_e1.png');
							break;
						case 'dr-body dr_b1000_e1_b': $('#1000_e_a').addClass('choiceBtn'); $('#1000_eb').addClass('choiceBtn');
							$('.b1000_e img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_e1.png');
							$('.b1000_e_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_e1_b.png');
							break;
						case 'dr-body dr_b1000_e1_c': $('#1000_ea').addClass('choiceBtn'); $('#1000_eb').addClass('choiceBtn');
							$('.b1000_e img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_e1_a.png');
							 $('.b1000_e_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_e1_b.png');
							 break;
						}
						
						$('#1000_ea').off('click').click(function() {	
							changeDrKind("1000_ea");
						});
						if (isMobile) {
							$('#1000_ea').off('mouseover').mouseover(function() {
								changeDrKind("1000_ea");
							});
						}
						$('#1000_e_a').off('click').click(function() {
							changeDrKind("1000_e_a");
						});
						if (isMobile) {
							$('#1000_e_a').off('mouseover').mouseover(function() {
								changeDrKind("1000_e_a");
							});
						}
						$('#1000_eb').off('click').click(function() {	
							changeDrKind("1000_eb");
						});
						if (isMobile) {
							$('#1000_eb').off('mouseover').mouseover(function() {
								changeDrKind("1000_eb");
							});
						}
						$('#1000_e_b').off('click').click(function() {	
							changeDrKind("1000_e_b");
						});
						if (isMobile) {
							$('#1000_e_b').off('mouseover').mouseover(function() {
								changeDrKind("1000_e_b");
							});
						}					
					}else if ($('#'+current_body).hasClass('dr_b1000_f1') || $('#'+current_body).hasClass('dr_b1000_f1_a')|| $('#'+current_body).hasClass('dr_b1000_f1_b')|| $('#'+current_body).hasClass('dr_b1000_f1_c')) {
						var tkind = $('#'+current_body).attr('class');
						$('#controller-dr-contents').append('<ul id="dr-b1000-f-option"></ul>');
						$('#controller-dr-contents').css('padding', '10px 0 10px 0');
						$('#dr-b1000-f-option').append('<li style="width: 200px;"><div class="b1000_f"><img  src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_f1_a.png" /><div>조명옷걸이</div><div id="1000_fa" class="add-option">추가</div><div  id="1000_f_a" class="sub-option">제거</div></div></div></li>');
						$('#dr-b1000-f-option').append('<li style="width: 200px;"><div class="b1000_f_a"><img  src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_f1_b.png" /><div>유리도어</div><div  id="1000_fb" class="add-option">추가</div><div  id="1000_f_b" class="sub-option">제거</div></div></div></li>');
						$('#dr-b1000-f-option').lightSlider({
							autoWidth: true,
					        controls: false
						});
						switch (tkind) {
						case 'dr-body dr_b1000_f1': $('#1000_f_a').addClass('choiceBtn'); $('#1000_f_b').addClass('choiceBtn'); 
							$('.b1000_f img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_f1.png');
							$('.b1000_f_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_f1.png');
							break;
						case 'dr-body dr_b1000_f1_a': $('#1000_fa').addClass('choiceBtn'); $('#1000_f_b').addClass('choiceBtn');
							$('.b1000_f img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_f1_a.png');
							$('.b1000_f_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_f1.png');
							break;
						case 'dr-body dr_b1000_f1_b': $('#1000_f_a').addClass('choiceBtn'); $('#1000_fb').addClass('choiceBtn');
							$('.b1000_f img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_f1.png');
							$('.b1000_f_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_f1_b.png');
							break;
						case 'dr-body dr_b1000_f1_c': $('#1000_fa').addClass('choiceBtn'); $('#1000_fb').addClass('choiceBtn');
							$('.b1000_f img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_f1_a.png');
							 $('.b1000_f_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_f1_b.png');
							 break;
						}
						
						$('#1000_fa').off('click').click(function() {	
							changeDrKind("1000_fa");
						});
						if (isMobile) {
							$('#1000_fa').off('mouseover').mouseover(function() {
								changeDrKind("1000_fa");
							});
						}
						$('#1000_f_a').off('click').click(function() {
							changeDrKind("1000_f_a");
						});
						if (isMobile) {
							$('#1000_f_a').off('mouseover').mouseover(function() {
								changeDrKind("1000_f_a");
							});
						}
						$('#1000_fb').off('click').click(function() {	
							changeDrKind("1000_fb");
						});
						if (isMobile) {
							$('#1000_fb').off('mouseover').mouseover(function() {
								changeDrKind("1000_fb");
							});
						}
						$('#1000_f_b').off('click').click(function() {	
							changeDrKind("1000_f_b");
						});
						if (isMobile) {
							$('#1000_f_b').off('mouseover').mouseover(function() {
								changeDrKind("1000_f_b");
							});
						}					
					}else if ($('#'+current_body).hasClass('dr_b1000_g1') || $('#'+current_body).hasClass('dr_b1000_g1_a')|| $('#'+current_body).hasClass('dr_b1000_g1_b')|| $('#'+current_body).hasClass('dr_b1000_g1_c')) {
						var tkind = $('#'+current_body).attr('class');
						$('#controller-dr-contents').append('<ul id="dr-b1000-g-option"></ul>');
						$('#controller-dr-contents').css('padding', '10px 0 10px 0');
						$('#dr-b1000-g-option').append('<li style="width: 200px;"><div class="b1000_g"><img  src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_g1_a.png" /><div>조명옷걸이</div><div id="1000_ga" class="add-option">추가</div><div  id="1000_g_a" class="sub-option">제거</div></div></div></li>');
						$('#dr-b1000-g-option').append('<li style="width: 200px;"><div class="b1000_g_a"><img  src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_g1_b.png" /><div>유리도어</div><div  id="1000_gb" class="add-option">추가</div><div  id="1000_g_b" class="sub-option">제거</div></div></div></li>');
						$('#dr-b1000-g-option').lightSlider({
							autoWidth: true,
					        controls: false
						});
						switch (tkind) {
						case 'dr-body dr_b1000_g1': $('#1000_g_a').addClass('choiceBtn'); $('#1000_g_b').addClass('choiceBtn'); 
							$('.b1000_g img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_g1.png');
							$('.b1000_g_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_g1.png');
							break;
						case 'dr-body dr_b1000_g1_a': $('#1000_ga').addClass('choiceBtn'); $('#1000_g_b').addClass('choiceBtn');
							$('.b1000_g img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_g1_a.png');
							$('.b1000_g_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_g1.png');
							break;
						case 'dr-body dr_b1000_g1_b': $('#1000_g_a').addClass('choiceBtn'); $('#1000_gb').addClass('choiceBtn');
							$('.b1000_g img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_g1.png');
							$('.b1000_g_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_g1_b.png');
							break;
						case 'dr-body dr_b1000_g1_c': $('#1000_ga').addClass('choiceBtn'); $('#1000_gb').addClass('choiceBtn');
							$('.b1000_g img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_g1_a.png');
							 $('.b1000_g_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_g1_b.png');
							 break;
						}
						
						$('#1000_ga').off('click').click(function() {	
							changeDrKind("1000_ga");
						});
						if (isMobile) {
							$('#1000_ga').off('mouseover').mouseover(function() {
								changeDrKind("1000_ga");
							});
						}
						$('#1000_g_a').off('click').click(function() {
							changeDrKind("1000_g_a");
						});
						if (isMobile) {
							$('#1000_g_a').off('mouseover').mouseover(function() {
								changeDrKind("1000_g_a");
							});
						}
						$('#1000_gb').off('click').click(function() {	
							changeDrKind("1000_gb");
						});
						if (isMobile) {
							$('#1000_gb').off('mouseover').mouseover(function() {
								changeDrKind("1000_gb");
							});
						}
						$('#1000_g_b').off('click').click(function() {	
							changeDrKind("1000_g_b");
						});
						if (isMobile) {
							$('#1000_g_b').off('mouseover').mouseover(function() {
								changeDrKind("1000_g_b");
							});
						}					
					}else if ($('#'+current_body).hasClass('dr_b1000_h1') || $('#'+current_body).hasClass('dr_b1000_h1_a')|| $('#'+current_body).hasClass('dr_b1000_h3')|| $('#'+current_body).hasClass('dr_b1000_h3_a')) {
						var tkind = $('#'+current_body).attr('class');
						$('#controller-dr-contents').append('<ul id="dr-b1000-h-option"></ul>');
						$('#controller-dr-contents').css('padding', '10px 0 10px 0');
						$('#dr-b1000-h-option').append('<li style="width: 200px;"><div class="b1000_h"><img  src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_h1.png" /><div>몸통구성</div><div id="1000_h1" class="add-option">기본</div><div  id="1000_h3" class="sub-option">4단서랍</div></div></div></li>');
						$('#dr-b1000-h-option').append('<li style="width: 200px;"><div class="b1000_h_a"><img  src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_h1.png" /><div>옵션</div><div  id="1000_ha" class="add-option">없음</div><div  id="1000_h_a" class="sub-option">유리도어</div></div></div></li>');
						$('#dr-b1000-h-option').lightSlider({
							autoWidth: true,
					        controls: false
						});
						switch (tkind) {
						case 'dr-body dr_b1000_h1': $('#1000_h1').addClass('choiceBtn'); $('#1000_ha').addClass('choiceBtn'); 
							$('.b1000_h img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_h1.png');
							$('.b1000_h_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_h1.png');
							break;
						case 'dr-body dr_b1000_h1_a': $('#1000_h1').addClass('choiceBtn'); $('#1000_h_a').addClass('choiceBtn');
							$('.b1000_h img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_h1.png');
							$('.b1000_h_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_h1_a.png');
							break;
						case 'dr-body dr_b1000_h3': $('#1000_h3').addClass('choiceBtn'); $('#1000_ha').addClass('choiceBtn'); 
							$('.b1000_h img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_h3.png');
							$('.b1000_h_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_h3.png');
							break;
						case 'dr-body dr_b1000_h3_a': $('#1000_h3').addClass('choiceBtn'); $('#1000_h_a').addClass('choiceBtn');
							$('.b1000_h img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_h3.png');
							$('.b1000_h_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_h3_a.png');
							break;	
						}
						
						$('#1000_h1').off('click').click(function() {	
							changeDrKind("1000_h1");
						});
						if (isMobile) {
							$('#1000_h1').off('mouseover').mouseover(function() {
								changeDrKind("1000_h1");
							});
						}
						$('#1000_h3').off('click').click(function() {	
							changeDrKind("1000_h3");
						});
						if (isMobile) {
							$('#1000_h3').off('mouseover').mouseover(function() {
								changeDrKind("1000_h3");
							});
						}
						$('#1000_ha').off('click').click(function() {	
							changeDrKind("1000_ha");
						});
						if (isMobile) {
							$('#1000_ha').off('mouseover').mouseover(function() {
								changeDrKind("1000_ha");
							});
						}
						$('#1000_h_a').off('click').click(function() {	
							changeDrKind("1000_h_a");
						});
						if (isMobile) {
							$('#1000_h_a').off('mouseover').mouseover(function() {
								changeDrKind("1000_h_a");
							});
						}

					}else if ($('#'+current_body).hasClass('dr_b1000_h2') || $('#'+current_body).hasClass('dr_b1000_h2_a')|| $('#'+current_body).hasClass('dr_b1000_h2_b')) {
						var tkind = $('#'+current_body).attr('class');
						$('#controller-dr-contents').css('padding', '10px 0 10px 0');
						$('#controller-dr-contents').append('<li style="width: 200px;"><div class="b1000_h2"><img  src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_h2.png" /><div>몸통구성</div><div id="1000_h2" class="all-option">기본</div><div  id="1000_h2_a" class="add-option">거울도어</div><div  id="1000_h2_b" class="sub-option">유리도어</div></div></div></li>');
						switch (tkind) {
						case 'dr-body dr_b1000_h2': $('#1000_h2').addClass('choiceBtn');
							$('.b1000_h2 img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_h2.png');
							break;
						case 'dr-body dr_b1000_h2_a': $('#1000_h2_a').addClass('choiceBtn'); 
							$('.b1000_h2 img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_h2_a.png');
							break;
						case 'dr-body dr_b1000_h2_b': $('#1000_h2_b').addClass('choiceBtn');
							$('.b1000_h2 img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_h2_b.png');
							break;
						}
						
						$('#1000_h2').off('click').click(function() {	
							changeDrKind("1000_h2");
						});
						if (isMobile) {
							$('#1000_h2').off('mouseover').mouseover(function() {
								changeDrKind("1000_h2");
							});
						}
						$('#1000_h2_a').off('click').click(function() {	
							changeDrKind("1000_h2_a");
						});
						if (isMobile) {
							$('#1000_h2_a').off('mouseover').mouseover(function() {
								changeDrKind("1000_h2_a");
							});
						}
						$('#1000_h2_b').off('click').click(function() {	
							changeDrKind("1000_h2_b");
						});
						if (isMobile) {
							$('#1000_h2_b').off('mouseover').mouseover(function() {
								changeDrKind("1000_h2_b");
							});
						}
						

					}else if ($('#'+current_body).hasClass('dr_b1000_i1') || $('#'+current_body).hasClass('dr_b1000_i1_a')|| $('#'+current_body).hasClass('dr_b1000_i1_b')|| $('#'+current_body).hasClass('dr_b1000_i1_c')) {
						var tkind = $('#'+current_body).attr('class');
						$('#controller-dr-contents').append('<ul id="dr-b1000-i-option"></ul>');
						$('#controller-dr-contents').css('padding', '10px 0 10px 0');
						$('#dr-b1000-i-option').append('<li style="width: 200px;"><div class="b1000_i"><img  src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_i1_a.png" /><div>조명옷걸이</div><div id="1000_ia" class="add-option">추가</div><div  id="1000_i_a" class="sub-option">제거</div></div></div></li>');
						$('#dr-b1000-i-option').append('<li style="width: 200px;"><div class="b1000_i_a"><img  src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_i1_b.png" /><div>유리도어</div><div  id="1000_ib" class="add-option">추가</div><div  id="1000_i_b" class="sub-option">제거</div></div></div></li>');
						$('#dr-b1000-i-option').lightSlider({
							autoWidth: true,
					        controls: false
						});
						switch (tkind) {
						case 'dr-body dr_b1000_i1': $('#1000_i_a').addClass('choiceBtn'); $('#1000_i_b').addClass('choiceBtn'); 
							$('.b1000_i img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_i1.png');
							$('.b1000_i_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_i1.png');
							break;
						case 'dr-body dr_b1000_i1_a': $('#1000_ia').addClass('choiceBtn'); $('#1000_i_b').addClass('choiceBtn');
							$('.b1000_i img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_i1_a.png');
							$('.b1000_i_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_i1.png');
							break;
						case 'dr-body dr_b1000_i1_b': $('#1000_i_a').addClass('choiceBtn'); $('#1000_ib').addClass('choiceBtn');
							$('.b1000_i img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_i1.png');
							$('.b1000_i_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_i1_b.png');
							break;
						case 'dr-body dr_b1000_i1_c': $('#1000_ia').addClass('choiceBtn'); $('#1000_ib').addClass('choiceBtn');
							$('.b1000_i img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_i1_a.png');
							 $('.b1000_i_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_i1_b.png');
							 break;
						}
						
						$('#1000_ia').off('click').click(function() {	
							changeDrKind("1000_ia");
						});
						if (isMobile) {
							$('#1000_ia').off('mouseover').mouseover(function() {
								changeDrKind("1000_ia");
							});
						}
						$('#1000_i_a').off('click').click(function() {
							changeDrKind("1000_i_a");
						});
						if (isMobile) {
							$('#1000_i_a').off('mouseover').mouseover(function() {
								changeDrKind("1000_i_a");
							});
						}
						$('#1000_ib').off('click').click(function() {	
							changeDrKind("1000_ib");
						});
						if (isMobile) {
							$('#1000_ib').off('mouseover').mouseover(function() {
								changeDrKind("1000_ib");
							});
						}
						$('#1000_i_b').off('click').click(function() {	
							changeDrKind("1000_i_b");
						});
						if (isMobile) {
							$('#1000_i_b').off('mouseover').mouseover(function() {
								changeDrKind("1000_i_b");
							});
						}					
					}else if ($('#'+current_body).hasClass('dr_b1000_j1') || $('#'+current_body).hasClass('dr_b1000_j1_a')|| $('#'+current_body).hasClass('dr_b1000_j1_b')|| $('#'+current_body).hasClass('dr_b1000_j1_c')) {
						var tkind = $('#'+current_body).attr('class');
						$('#controller-dr-contents').append('<ul id="dr-b1000-j-option"></ul>');
						$('#controller-dr-contents').css('padding', '10px 0 10px 0');
						$('#dr-b1000-j-option').append('<li style="width: 200px;"><div class="b1000_j"><img  src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_j1_a.png" /><div>조명옷걸이</div><div id="1000_ja" class="add-option">추가</div><div  id="1000_j_a" class="sub-option">제거</div></div></div></li>');
						$('#dr-b1000-j-option').append('<li style="width: 200px;"><div class="b1000_j_a"><img  src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_j1_b.png" /><div>유리도어</div><div  id="1000_jb" class="add-option">추가</div><div  id="1000_j_b" class="sub-option">제거</div></div></div></li>');
						$('#dr-b1000-j-option').lightSlider({
							autoWidth: true,
					        controls: false
						});
						switch (tkind) {
						case 'dr-body dr_b1000_j1': $('#1000_j_a').addClass('choiceBtn'); $('#1000_j_b').addClass('choiceBtn'); 
							$('.b1000_j img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_j1.png');
							$('.b1000_j_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_j1.png');
							break;
						case 'dr-body dr_b1000_j1_a': $('#1000_ja').addClass('choiceBtn'); $('#1000_j_b').addClass('choiceBtn');
							$('.b1000_j img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_j1_a.png');
							$('.b1000_j_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_j1.png');
							break;
						case 'dr-body dr_b1000_j1_b': $('#1000_j_a').addClass('choiceBtn'); $('#1000_jb').addClass('choiceBtn');
							$('.b1000_j img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_j1.png');
							$('.b1000_j_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_j1_b.png');
							break;
						case 'dr-body dr_b1000_j1_c': $('#1000_ja').addClass('choiceBtn'); $('#1000_jb').addClass('choiceBtn');
							$('.b1000_j img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_j1_a.png');
							 $('.b1000_j_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_j1_b.png');
							 break;
						}
						
						$('#1000_ja').off('click').click(function() {	
							changeDrKind("1000_ja");
						});
						if (isMobile) {
							$('#1000_ja').off('mouseover').mouseover(function() {
								changeDrKind("1000_ja");
							});
						}
						$('#1000_j_a').off('click').click(function() {
							changeDrKind("1000_j_a");
						});
						if (isMobile) {
							$('#1000_j_a').off('mouseover').mouseover(function() {
								changeDrKind("1000_j_a");
							});
						}
						$('#1000_jb').off('click').click(function() {	
							changeDrKind("1000_jb");
						});
						if (isMobile) {
							$('#1000_jb').off('mouseover').mouseover(function() {
								changeDrKind("1000_jb");
							});
						}
						$('#1000_j_b').off('click').click(function() {	
							changeDrKind("1000_j_b");
						});
						if (isMobile) {
							$('#1000_j_b').off('mouseover').mouseover(function() {
								changeDrKind("1000_j_b");
							});
						}					
					}else if ($('#'+current_body).hasClass('dr_bcorner_a1') || $('#'+current_body).hasClass('dr_bcorner_a2')|| $('#'+current_body).hasClass('dr_bcorner_a3')|| $('#'+current_body).hasClass('dr_bcorner_a1_a')|| $('#'+current_body).hasClass('dr_bcorner_a2_a')|| $('#'+current_body).hasClass('dr_bcorner_a3_a')
							|| $('#'+current_body).hasClass('dr_bcorner_a1_b')|| $('#'+current_body).hasClass('dr_bcorner_a2_b')|| $('#'+current_body).hasClass('dr_bcorner_a3_b')|| $('#'+current_body).hasClass('dr_bcorner_a1_c')|| $('#'+current_body).hasClass('dr_bcorner_a2_c')|| $('#'+current_body).hasClass('dr_bcorner_a3_c')) {
						var tkind = $('#'+current_body).attr('class');
						$('#controller-dr-contents').append('<ul id="dr-bcorner-a-option"></ul>');
						$('#controller-dr-contents').css('padding', '10px 0 10px 0');
						$('#dr-bcorner-a-option').append('<li style="width: 200px;"><div class="bcorner_a"><img  src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png" /><div>옷걸이구성</div><div id="corner_a1" class="all-option">상하부장</div><div id="corner_a2" class="add-option">상부장</div><div  id="corner_a3" class="sub-option">하부장</div></div></div></li>');
						$('#dr-bcorner-a-option').append('<li style="width: 200px;"><div class="bcorner_a_a"><img  src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png" /><div>조명옷걸이</div><div  id="corner_aa" class="add-option">추가</div><div  id="corner_a_a" class="sub-option">제거</div></div></div></li>');				
						$('#dr-bcorner-a-option').append('<li style="width: 200px;"><div class="bcorner_a_b"><img  src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png" /><div>유리도어</div><div  id="corner_ab" class="add-option">추가</div><div  id="corner_a_b" class="sub-option">제거</div></div></div></li>');
						$('#dr-bcorner-a-option').lightSlider({
							autoWidth: true,
					        controls: false
						});
						switch (tkind) {
						case 'dr-body dr_bcorner_a1': $('#corner_a1').addClass('choiceBtn'); $('#corner_a_a').addClass('choiceBtn'); $('#corner_a_b').addClass('choiceBtn'); 
							$('.bcorner_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png');
							$('.bcorner_a_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png');
							$('.bcorner_a_b img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png');
							break;
						case 'dr-body dr_bcorner_a2': $('#corner_a2').addClass('choiceBtn'); $('#corner_a_a').addClass('choiceBtn'); $('#corner_a_b').addClass('choiceBtn'); 
							$('.bcorner_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2.png');
							$('.bcorner_a_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2.png');
							$('.bcorner_a_b img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2.png');
							break;
						case 'dr-body dr_bcorner_a3': $('#corner_a3').addClass('choiceBtn'); $('#corner_a_a').addClass('choiceBtn'); $('#corner_a_b').addClass('choiceBtn'); 
							$('.bcorner_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3.png');
							$('.bcorner_a_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3.png');
							$('.bcorner_a_b img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3.png');
							break;
						case 'dr-body dr_bcorner_a1_a': $('#corner_a1').addClass('choiceBtn'); $('#corner_aa').addClass('choiceBtn'); $('#corner_a_b').addClass('choiceBtn'); 
							$('.bcorner_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png');
							$('.bcorner_a_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1_a.png');
							$('.bcorner_a_b img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png');
							break;	
						case 'dr-body dr_bcorner_a2_a': $('#corner_a2').addClass('choiceBtn'); $('#corner_aa').addClass('choiceBtn'); $('#corner_a_b').addClass('choiceBtn'); 
							$('.bcorner_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2.png');
							$('.bcorner_a_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2_a.png');
							$('.bcorner_a_b img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2.png');
							break;
						case 'dr-body dr_bcorner_a3_a': $('#corner_a3').addClass('choiceBtn'); $('#corner_aa').addClass('choiceBtn'); $('#corner_a_b').addClass('choiceBtn'); 
							$('.bcorner_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3.png');
							$('.bcorner_a_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3_a.png');
							$('.bcorner_a_b img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3.png');
							break;
						case 'dr-body dr_bcorner_a1_b': $('#corner_a1').addClass('choiceBtn'); $('#corner_a_a').addClass('choiceBtn'); $('#corner_ab').addClass('choiceBtn'); 
							$('.bcorner_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png');
							$('.bcorner_a_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png');
							$('.bcorner_a_b img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1_b.png');
							break;
						case 'dr-body dr_bcorner_a2_b': $('#corner_a2').addClass('choiceBtn'); $('#corner_a_a').addClass('choiceBtn'); $('#corner_ab').addClass('choiceBtn'); 
							$('.bcorner_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2.png');
							$('.bcorner_a_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2.png');
							$('.bcorner_a_b img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2_b.png');
							break;
						case 'dr-body dr_bcorner_a3_b': $('#corner_a3').addClass('choiceBtn'); $('#corner_a_a').addClass('choiceBtn'); $('#corner_ab').addClass('choiceBtn'); 
							$('.bcorner_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3.png');
							$('.bcorner_a_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3.png');
							$('.bcorner_a_b img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3_b.png');
							break;
						case 'dr-body dr_bcorner_a1_c': $('#corner_a1').addClass('choiceBtn'); $('#corner_aa').addClass('choiceBtn'); $('#corner_ab').addClass('choiceBtn'); 
							$('.bcorner_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png');
							$('.bcorner_a_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1_a.png');
							$('.bcorner_a_b img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1_b.png');
							break;
						case 'dr-body dr_bcorner_a2_c': $('#corner_a2').addClass('choiceBtn'); $('#corner_aa').addClass('choiceBtn'); $('#corner_ab').addClass('choiceBtn'); 
							$('.bcorner_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2.png');
							$('.bcorner_a_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2_a.png');
							$('.bcorner_a_b img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2_b.png');
							break;
						case 'dr-body dr_bcorner_a3_c': $('#corner_a3').addClass('choiceBtn'); $('#corner_aa').addClass('choiceBtn'); $('#corner_ab').addClass('choiceBtn'); 
							$('.bcorner_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3.png');
							$('.bcorner_a_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3_a.png');
							$('.bcorner_a_b img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3_b.png');
							break;
						}
						
						$('#corner_a1').off('click').click(function() {	
							changeCorner("corner_a1");
						});
						if (isMobile) {
							$('#corner_a1').off('mouseover').mouseover(function() {
								changeCorner("corner_a1");
							});
						}
						$('#corner_a2').off('click').click(function() {
							changeCorner("corner_a2");
						});
						if (isMobile) {
							$('#corner_a2').off('mouseover').mouseover(function() {
								changeCorner("corner_a2");
							});
						}
						$('#corner_a3').off('click').click(function() {	
							changeCorner("corner_a3");
						});
						if (isMobile) {
							$('#corner_a3').off('mouseover').mouseover(function() {
								changeCorner("corner_a3");
							});
						}
						$('#corner_aa').off('click').click(function() {	
							changeCorner("corner_aa");
						});
						if (isMobile) {
							$('#corner_aa').off('mouseover').mouseover(function() {
								changeCorner("corner_aa");
							});
						}
						$('#corner_a_a').off('click').click(function() {	
							changeCorner("corner_a_a");
						});
						if (isMobile) {
							$('#corner_a_a').off('mouseover').mouseover(function() {
								changeCorner("corner_a_a");
							});
						}
						$('#corner_ab').off('click').click(function() {	
							changeCorner("corner_ab");
						});
						if (isMobile) {
							$('#corner_ab').off('mouseover').mouseover(function() {
								changeCorner("corner_ab");
							});
						}
						$('#corner_a_b').off('click').click(function() {	
							changeCorner("corner_a_b");
						});
						if (isMobile) {
							$('#corner_a_b').off('mouseover').mouseover(function() {
								changeCorner("corner_a_b");
							});
						}
					}
					break;
				}
				break;
			}
		}
		
		$('#controller-dr-map').css('height', 'auto');
		$('#controller-dr').css('height', 'auto');
	});
	if (isMobile) {
		$('.controller-header-item').mousemove(function() {
			$('.controller-header-item').removeClass('controller-selected');
			$('#controller-contents').remove();
			$('#controller div').remove();
			$('#controller').append('<ul id="controller-contents"></ul>');
			
			if (!$(this).hasClass('controller-selected')) {
				$(this).addClass('controller-selected');
				switch ($(this).attr('data-controller')) {
				case 'body':
					show_body();
					break;
				case 'option':
					if(ward_kind=='WRD022'||ward_kind=='WRD023'){
					}else{
					show_option();
					}
					break;
				case 'door':
					show_door();
					break;
				}
			}
			
			$('#controller').css('height', 'auto');
		});
	}
	
	$('.dressroom-map-way').click(function() {
		dressroom_map_way_click(this);
		
		event.stopPropagation();
	});
	if (isMobile) {
		$('.dressroom-map-way').mouseover(function() {
			dressroom_map_way_click(this);
			
			event.stopPropagation();
		});
	}
	
	// 메뉴바 마감 아이템 클릭
	$('.finish-item').click(function() {
		if (Number($('.frame-measure-horizontal .measure-left span').html()) < 70 && $(this).attr('data-finish') != 'builtin') {
			showAlert('해당 너비는 붙박이만 가능합니다.');
			return;
		}
		$('.finish-state').html($(this).html());
		ward_bi = $(this).attr('data-finish');
		$('#navi-menu-finish div').click();
		if (ward_bi == 'none' || ward_bi == 'ep_l' || ward_bi == 'ep_r' || ward_bi == 'ep_lr') {
			$('.frame-finish').css('margin-top', basic_height / cri_no - 448);
			$('.frame-finish').width($('.frame-body').width() + 28);
			$('.frame-finish').height(448);
			$('.frame-body').css('left', ($('.frame-finish').width() - $('.frame-body').width()) / 2);
		} else {
			$('.frame-finish').css('margin-top', '0px');
			$('.frame-finish').width(basic_width / cri_no);
			$('.frame-finish').height(basic_height / cri_no);
			$('.frame-body').css('left', ($('.frame-finish').width() - $('.frame-body').width()) / 2);
		}
		
		$('.frame-result').addClass('invisible');
	});
	
	// 메뉴바 모바일 아이템 클릭
	$('#navi-menu-mobile div').click(function() {
//		switch ($(this).attr('data-mobile')) {
//		case 'price':
//			$('.result-factory-amt').removeClass('invisible');
//			break;
//		}
		$('.result-factory-amt').removeClass('invisible');
		
		event.stopPropagation();
	});
	
	$('#navi-menu-result').click(function() {
		ward_width = basic_width;
		ward_height = basic_height;
		ward_body = '';
		ward_position = '';
		ward_door = '';
		ward_jabara = '';
		ward_jabara_sub = '';
		ward_pillar = $('.measure-left span').html();
		ward_ep = '';
		ward_option = '';
		
		if (wardrobe == 'slide' || wardrobe == 'builtin') {
			switch (ward_bi) {
			case 'none':
				ward_height = 2240;
				ward_pillar = 70;
				break;
			case 'ep_l':
				ward_height = 2240;
				ward_pillar = 1;
				ward_ep = 'L';
				break;
			case 'ep_r':
				ward_height = 2240;
				ward_pillar = 1;
				ward_ep = 'R';
				break;
			case 'ep_lr':
				ward_height = 2240;
				ward_pillar = 1;
				ward_ep = 'LR';
				break;
			} 
			
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
				showAlert('구성 완료 후 시도해 주세요.');
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

					if($(next_body).attr('data-body')=='WR5105A'&&ward_kind!='WRD578'){
					door_check(next_body, 500, 'lr', '2a');
					}else if($(next_body).attr('data-body')=='WR5105B'&&ward_kind!='WRD578'){
					door_check(next_body, 500, 'lr', '2a');			
					}else if($(next_body).attr('data-body')=='WR5105D'&&ward_kind!='WRD578'){
					door_check(next_body, 500, 'lr', '2a');			
					}else if($(next_body).attr('data-body')=='WR5105A'&&ward_kind=='WRD578'){
					door_check(next_body, 500, 'c', '2a');			
					}else if($(next_body).attr('data-body')=='WR5105B'&&ward_kind=='WRD578'){
					door_check(next_body, 500, 'c', '2a');			
					}else if($(next_body).attr('data-body')=='WR5105D'&&ward_kind=='WRD578'){
					door_check(next_body, 500, 'c', '2a');			
					}else if($(next_body).attr('data-body')=='WR5105AI'&&ward_kind!='WRD578'&&ward_kind!='WRD543'&&ward_kind!='WRD559'&&ward_kind!='WRD546'&&ward_kind!='WRD547'&&ward_kind!='WRD548'&&ward_kind!='WRD533'&&ward_kind!='WRD561'&&ward_kind!='WRD528'){
					door_check(next_body, 500, 'lr', '2b');			
					}else if($(next_body).attr('data-body')=='WR5105BI'&&ward_kind!='WRD578'&&ward_kind!='WRD543'&&ward_kind!='WRD559'&&ward_kind!='WRD546'&&ward_kind!='WRD547'&&ward_kind!='WRD548'&&ward_kind!='WRD533'&&ward_kind!='WRD561'&&ward_kind!='WRD528'){
					door_check(next_body, 500, 'lr', '2b');			
					}else if($(next_body).attr('data-body')=='WR5105DI'&&ward_kind!='WRD578'&&ward_kind!='WRD543'&&ward_kind!='WRD559'&&ward_kind!='WRD546'&&ward_kind!='WRD547'&&ward_kind!='WRD548'&&ward_kind!='WRD533'&&ward_kind!='WRD561'&&ward_kind!='WRD528'){
					door_check(next_body, 500, 'lr', '2b');			
					}else if($(next_body).attr('data-body')=='WR5105AI'&&ward_kind=='WRD578'){
					door_check(next_body, 500, 'c', '2b');			
					}else if($(next_body).attr('data-body')=='WR5105BI'&&ward_kind=='WRD578'){
					door_check(next_body, 500, 'c', '2b');			
					}else if($(next_body).attr('data-body')=='WR5105DI'&&ward_kind=='WRD578'){
					door_check(next_body, 500, 'c', '2b');			
					}else if($(next_body).attr('data-body')=='WR5014A'&&ward_kind=='WRD578'){
					door_check(next_body, 500, 'c', '2');			
					}else{
					door_check(next_body, 500, 'lr', '2');
					}

					break;
					
				case 'W900':
					ward_position += 'B';
					ward_jabara_sub += 'j900,';
					jabara_temp = jabara_width + 900;
					if ($('#'+$(next_body).attr('id')+' .door-left').attr('data-door') == null) last_check = true;
					if ($('#'+$(next_body).attr('id')+' .door-right').attr('data-door') == null) last_check = true;
					if($(next_body).attr('data-body')=='WR4105A'&&ward_kind!='WRD578'){
						door_check(next_body, 450, 'lr', '2a');
						}else if($(next_body).attr('data-body')=='WR4105B'&&ward_kind!='WRD578'){
						door_check(next_body, 450, 'lr', '2a');			
						}else if($(next_body).attr('data-body')=='WR4105D'&&ward_kind!='WRD578'){
						door_check(next_body, 450, 'lr', '2a');			
						}else if($(next_body).attr('data-body')=='WR4105A'&&ward_kind=='WRD578'){
						door_check(next_body, 450, 'c', '2a');			
						}else if($(next_body).attr('data-body')=='WR4105B'&&ward_kind=='WRD578'){
						door_check(next_body, 450, 'c', '2a');			
						}else if($(next_body).attr('data-body')=='WR4105D'&&ward_kind=='WRD578'){
						door_check(next_body, 450, 'c', '2a');			
						}else if($(next_body).attr('data-body')=='WR4105AI'&&ward_kind!='WRD578'&&ward_kind!='WRD543'&&ward_kind!='WRD559'&&ward_kind!='WRD546'&&ward_kind!='WRD547'&&ward_kind!='WRD548'&&ward_kind!='WRD533'&&ward_kind!='WRD561'&&ward_kind!='WRD528'){
						door_check(next_body, 450, 'lr', '2b');			
						}else if($(next_body).attr('data-body')=='WR4105BI'&&ward_kind!='WRD578'&&ward_kind!='WRD543'&&ward_kind!='WRD559'&&ward_kind!='WRD546'&&ward_kind!='WRD547'&&ward_kind!='WRD548'&&ward_kind!='WRD533'&&ward_kind!='WRD561'&&ward_kind!='WRD528'){
						door_check(next_body, 450, 'lr', '2b');			
						}else if($(next_body).attr('data-body')=='WR4105DI'&&ward_kind!='WRD578'&&ward_kind!='WRD543'&&ward_kind!='WRD559'&&ward_kind!='WRD546'&&ward_kind!='WRD547'&&ward_kind!='WRD548'&&ward_kind!='WRD533'&&ward_kind!='WRD561'&&ward_kind!='WRD528'){
						door_check(next_body, 450, 'lr', '2b');			
						}else if($(next_body).attr('data-body')=='WR4105AI'&&ward_kind=='WRD578'){
						door_check(next_body, 450, 'c', '2b');			
						}else if($(next_body).attr('data-body')=='WR4105BI'&&ward_kind=='WRD578'){
						door_check(next_body, 450, 'c', '2b');			
						}else if($(next_body).attr('data-body')=='WR4105DI'&&ward_kind=='WRD578'){
						door_check(next_body, 450, 'c', '2b');			
						}else{
							door_check(next_body, 450, 'lr', 2);
						}							
					break;
				case 'W500':
					ward_position += 'C';
					ward_jabara_sub += 'j500,';
					jabara_temp = jabara_width + 500;
					if ($('#'+$(next_body).attr('id')+' .door-center').attr('data-door') == null) last_check = true;
					if (body_count == 1) last_check = true;
					if($(next_body).attr('data-body')=='WR3105C'&&ward_kind!='WRD578'){
						door_check(next_body, 500, 'lr', '1a');		
						}else if($(next_body).attr('data-body')=='WR3105C'&&ward_kind=='WRD578'){
							door_check(next_body, 500, 'c', '1a')
						}
						else{
							door_check(next_body, 500, 'c', 1);
						}
					break;
				case 'W450':
					ward_position += 'D';
					ward_jabara_sub += 'j450,';
					jabara_temp = jabara_width + 450;
					if ($('#'+$(next_body).attr('id')+' .door-center').attr('data-door') == null) last_check = true;
					if (body_count == 1) last_check = true;
					if($(next_body).attr('data-body')=='WR2105C'&&ward_kind!='WRD578'){
						door_check(next_body, 450, 'lr', '1a');		
						}else if($(next_body).attr('data-body')=='WR2105C'&&ward_kind=='WRD578'){
							door_check(next_body, 450, 'c', '1a')
						}
					else{
					door_check(next_body, 450, 'c', 1);
						}
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
			
			// ALR 아닐 경우 몸통 1000, 500 - 900, 450 몸통 구성 맞춤//
/*			if (door_type.get(ward_kind) != 'ALR') {
				switch ($('#'+first_body).attr('body-width')) {
				case 'W1000':
					if ($('#'+last_body).attr('body-width') == 'W900' || $('#'+last_body).attr('body-width') == 'W450') {
						showAlert('몸통 구성을 변경 후 시도해 주세요.');
						return;
					}
					break;
				case 'W900':
					if ($('#'+last_body).attr('body-width') == 'W1000' || $('#'+last_body).attr('body-width') == 'W500') {
						showAlert('몸통 구성을 변경 후 시도해 주세요.');
						return;
					}
					break;
				}
			
			}*/
			var first_body, last_body;
			var next_body = $('.frame-body').contents(':first-child');
			//var next_body = $('.frame-body').contents(':last-child');
			if (d500llr + d500lc + d500rlr + d500rc + d450llr + d450lc + d450rlr + d450rc > 0) {
				if (d500rlr - d500llr < 0 || d500rc - d500lc < 0 || d450rlr - d450llr < 0 || d450rc - d450lc < 0) last_check = true;
				
				for (i = 0; i < d500llr; i++)
					ward_door += 'd500_lr2,';
				for (i = 0; i < d500rlr-d500llr; i++)
					ward_door += 'd500_lr1,';
				for (i = 0; i < d500lc; i++)
				//ward_door += 'd500_c2,';
					//if ($(next_body).attr('body-width') == null) break;
	
				{
				  /* if($(next_body).attr('data-body')=='WR5105A'){//10/09
					    ward_door += 'd500_c2a,';	
					    
					}else if($(next_body).attr('data-body')=='WR5105B'){
						 ward_door += 'd500_c2a,';	
					}
				   else if($(next_body).attr('data-body')=='WR5105D'){
						 ward_door += 'd500_c2a,';	
					}else{*/
						ward_door += 'd500_c2,';					
					/*}*/

				  
				}
				
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
				showAlert('문짝 구성을 변경 후 시도해 주세요.');
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
			
		} else if (wardrobe == 'dressroom') { // 드레스룸 결과
			if (bf_sum + bl_sum + br_sum + bb_sum == 0) {
				showAlert('드레스룸 구성 후 시도해 주세요.');
				return;
			}
			
			$('.dressroom-map-cri').addClass('invisible');
			
			var nextId = '';
			
			if (bf_sum > 0) {
				nextId = 'bf_cri';
				
				while (true) {
					nextId = $('#'+nextId).next().attr('id');
					if (nextId == null) break;
					
					ward_body += $('#'+nextId).attr('class').replace('dr-body dr_', '') + ',';
				}
			}
			if (bl_sum > 0) {
				nextId = 'bl_cri';
				
				while (true) {
					nextId = $('#'+nextId).next().attr('id');
					if (nextId == null) break;
					
					ward_body += $('#'+nextId).attr('class').replace('dr-body dr_', '') + ',';
				}
			}
			if (br_sum > 0) {
				nextId = 'br_cri';
				
				while (true) {
					nextId = $('#'+nextId).next().attr('id');
					if (nextId == null) break;
					
					ward_body += $('#'+nextId).attr('class').replace('dr-body dr_', '') + ',';
				}
			}
			if (bb_sum != 0) {
				nextId = 'bb_cri';
				
				while (true) {
					nextId = $('#'+nextId).next().attr('id');
					if (nextId == null) break;
					
					ward_body += $('#'+nextId).attr('class').replace('dr-body dr_', '') + ',';
				}
			}
			 if (ward_kind=='WRD257') {
				 ward_body +='pep_lr,pep_lr,';
			 }
			
			 if (ward_kind!='WRD999') {
					if ($('#dcorner1').hasClass('on_corner') && $('#dcorner1').hasClass('dr_bcorner_1'))
						ward_body += 'bcorner_1,';
					else if ($('#dcorner1').hasClass('on_corner') && $('#dcorner1').hasClass('dr_bcorner_2'))
						ward_body += 'bcorner_2,';
					if ($('#dcorner2').hasClass('on_corner') && $('#dcorner2').hasClass('dr_bcorner_1'))
						ward_body += 'bcorner_1,';
					else if ($('#dcorner2').hasClass('on_corner') && $('#dcorner2').hasClass('dr_bcorner_2'))
						ward_body += 'bcorner_2,';
					if ($('#dcorner3').hasClass('on_corner') && $('#dcorner3').hasClass('dr_bcorner_1'))
						ward_body += 'bcorner_1,';
					else if ($('#dcorner3').hasClass('on_corner') && $('#dcorner3').hasClass('dr_bcorner_2'))
						ward_body += 'bcorner_2,';
					if ($('#dcorner4').hasClass('on_corner') && $('#dcorner4').hasClass('dr_bcorner_1'))
						ward_body += 'bcorner_1,';
					else if ($('#dcorner4').hasClass('on_corner') && $('#dcorner4').hasClass('dr_bcorner_2'))
						ward_body += 'bcorner_2,';
				 }	 else if(ward_kind=='WRD999') {
					 if($('#dcorner1').hasClass('on_corner') && $('#dcorner1').hasClass('dr_bcorner_1'))
							ward_body += 'bcorner_a1,';
					 else if ($('#dcorner1').hasClass('on_corner') && $('#dcorner1').hasClass('dr_bcorner_2'))
							ward_body += 'bcorner_a2,';
					 else if ($('#dcorner1').hasClass('on_corner') && $('#dcorner1').hasClass('dr_bcorner_3'))
							ward_body += 'bcorner_a3,';
					 else if($('#dcorner1').hasClass('on_corner') && $('#dcorner1').hasClass('dr_bcorner_1_a'))
							ward_body += 'bcorner_a1_a,';
					 else if ($('#dcorner1').hasClass('on_corner') && $('#dcorner1').hasClass('dr_bcorner_2_a'))
							ward_body += 'bcorner_a2_a,';
					 else if ($('#dcorner1').hasClass('on_corner') && $('#dcorner1').hasClass('dr_bcorner_3_a'))
							ward_body += 'bcorner_a3_a,';
					 else if($('#dcorner1').hasClass('on_corner') && $('#dcorner1').hasClass('dr_bcorner_1_b'))
							ward_body += 'bcorner_a1_b,';
					 else if ($('#dcorner1').hasClass('on_corner') && $('#dcorner1').hasClass('dr_bcorner_2_b'))
							ward_body += 'bcorner_a2_b,';
					 else if ($('#dcorner1').hasClass('on_corner') && $('#dcorner1').hasClass('dr_bcorner_3_b'))
							ward_body += 'bcorner_a3_b,';
					 else if($('#dcorner1').hasClass('on_corner') && $('#dcorner1').hasClass('dr_bcorner_1_c'))
							ward_body += 'bcorner_a1_c,';
					 else if ($('#dcorner1').hasClass('on_corner') && $('#dcorner1').hasClass('dr_bcorner_2_c'))
							ward_body += 'bcorner_a2_c,';
					 else if ($('#dcorner1').hasClass('on_corner') && $('#dcorner1').hasClass('dr_bcorner_3_c'))
							ward_body += 'bcorner_a3_c,';
					 if($('#dcorner2').hasClass('on_corner') && $('#dcorner2').hasClass('dr_bcorner_1'))
							ward_body += 'bcorner_a1,';
					 else if ($('#dcorner2').hasClass('on_corner') && $('#dcorner2').hasClass('dr_bcorner_2'))
							ward_body += 'bcorner_a2,';
					 else if ($('#dcorner2').hasClass('on_corner') && $('#dcorner2').hasClass('dr_bcorner_3'))
							ward_body += 'bcorner_a3,';
					 else if($('#dcorner2').hasClass('on_corner') && $('#dcorner2').hasClass('dr_bcorner_1_a'))
							ward_body += 'bcorner_a1_a,';
					 else if ($('#dcorner2').hasClass('on_corner') && $('#dcorner2').hasClass('dr_bcorner_2_a'))
							ward_body += 'bcorner_a2_a,';
					 else if ($('#dcorner2').hasClass('on_corner') && $('#dcorner2').hasClass('dr_bcorner_3_a'))
							ward_body += 'bcorner_a3_a,';
					 else if($('#dcorner2').hasClass('on_corner') && $('#dcorner2').hasClass('dr_bcorner_1_b'))
							ward_body += 'bcorner_a1_b,';
					 else if ($('#dcorner2').hasClass('on_corner') && $('#dcorner2').hasClass('dr_bcorner_2_b'))
							ward_body += 'bcorner_a2_b,';
					 else if ($('#dcorner2').hasClass('on_corner') && $('#dcorner2').hasClass('dr_bcorner_3_b'))
							ward_body += 'bcorner_a3_b,';
					 else if($('#dcorner2').hasClass('on_corner') && $('#dcorner2').hasClass('dr_bcorner_1_c'))
							ward_body += 'bcorner_a1_c,';
					 else if ($('#dcorner2').hasClass('on_corner') && $('#dcorner2').hasClass('dr_bcorner_2_c'))
							ward_body += 'bcorner_a2_c,';
					 else if ($('#dcorner2').hasClass('on_corner') && $('#dcorner2').hasClass('dr_bcorner_3_c'))
							ward_body += 'bcorner_a3_c,';
					 if($('#dcorner3').hasClass('on_corner') && $('#dcorner3').hasClass('dr_bcorner_1'))
							ward_body += 'bcorner_a1,';
					 else if ($('#dcorner3').hasClass('on_corner') && $('#dcorner3').hasClass('dr_bcorner_2'))
							ward_body += 'bcorner_a2,';
					 else if ($('#dcorner3').hasClass('on_corner') && $('#dcorner3').hasClass('dr_bcorner_3'))
							ward_body += 'bcorner_a3,';
					 else if($('#dcorner3').hasClass('on_corner') && $('#dcorner3').hasClass('dr_bcorner_1_a'))
							ward_body += 'bcorner_a1_a,';
					 else if ($('#dcorner3').hasClass('on_corner') && $('#dcorner3').hasClass('dr_bcorner_2_a'))
							ward_body += 'bcorner_a2_a,';
					 else if ($('#dcorner3').hasClass('on_corner') && $('#dcorner3').hasClass('dr_bcorner_3_a'))
							ward_body += 'bcorner_a3_a,';
					 else if($('#dcorner3').hasClass('on_corner') && $('#dcorner3').hasClass('dr_bcorner_1_b'))
							ward_body += 'bcorner_a1_b,';
					 else if ($('#dcorner3').hasClass('on_corner') && $('#dcorner3').hasClass('dr_bcorner_2_b'))
							ward_body += 'bcorner_a2_b,';
					 else if ($('#dcorner3').hasClass('on_corner') && $('#dcorner3').hasClass('dr_bcorner_3_b'))
							ward_body += 'bcorner_a3_b,';
					 else if($('#dcorner3').hasClass('on_corner') && $('#dcorner3').hasClass('dr_bcorner_1_c'))
							ward_body += 'bcorner_a1_c,';
					 else if ($('#dcorner3').hasClass('on_corner') && $('#dcorner3').hasClass('dr_bcorner_2_c'))
							ward_body += 'bcorner_a2_c,';
					 else if ($('#dcorner3').hasClass('on_corner') && $('#dcorner3').hasClass('dr_bcorner_3_c'))
							ward_body += 'bcorner_a3_c,';
					 if($('#dcorner4').hasClass('on_corner') && $('#dcorner4').hasClass('dr_bcorner_1'))
							ward_body += 'bcorner_a1,';
					 else if ($('#dcorner4').hasClass('on_corner') && $('#dcorner4').hasClass('dr_bcorner_2'))
							ward_body += 'bcorner_a2,';
					 else if ($('#dcorner4').hasClass('on_corner') && $('#dcorner4').hasClass('dr_bcorner_3'))
							ward_body += 'bcorner_a3,';
					 else if($('#dcorner4').hasClass('on_corner') && $('#dcorner4').hasClass('dr_bcorner_1_a'))
							ward_body += 'bcorner_a1_a,';
					 else if ($('#dcorner4').hasClass('on_corner') && $('#dcorner4').hasClass('dr_bcorner_2_a'))
							ward_body += 'bcorner_a2_a,';
					 else if ($('#dcorner4').hasClass('on_corner') && $('#dcorner4').hasClass('dr_bcorner_3_a'))
							ward_body += 'bcorner_a3_a,';
					 else if($('#dcorner4').hasClass('on_corner') && $('#dcorner4').hasClass('dr_bcorner_1_b'))
							ward_body += 'bcorner_a1_b,';
					 else if ($('#dcorner4').hasClass('on_corner') && $('#dcorner4').hasClass('dr_bcorner_2_b'))
							ward_body += 'bcorner_a2_b,';
					 else if ($('#dcorner4').hasClass('on_corner') && $('#dcorner4').hasClass('dr_bcorner_3_b'))
							ward_body += 'bcorner_a3_b,';
					 else if($('#dcorner4').hasClass('on_corner') && $('#dcorner4').hasClass('dr_bcorner_1_c'))
							ward_body += 'bcorner_a1_c,';
					 else if ($('#dcorner4').hasClass('on_corner') && $('#dcorner4').hasClass('dr_bcorner_2_c'))
							ward_body += 'bcorner_a2_c,';
					 else if ($('#dcorner4').hasClass('on_corner') && $('#dcorner4').hasClass('dr_bcorner_3_c'))
							ward_body += 'bcorner_a3_c,'; 
				 }
		}
		
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
			    	var content = '<table style="border: 1px solid black; width: 100%; font-size: 1vw;">';
			    	content += '<tr style="background: #3E3A3B; color: white; height: 30px;">';
			    	content += '<th width="50%" colspan="2">품목</th>';
			    	content += '<th width="20%">금액</th>';
			    	content += '<th width="10%">수량</th>';
			    	content += '<th width="20%">합계</th>';
			    	content += '<th class="result-factory-amt invisible" style="color: #B2CCFF !important;">단가합</th>';
			    	content += '</tr>';
			    	
			    	var tot_amt = 0, tot_factory = 0;
			    	for (i = 0; i < list.length; i++) {
			    		if (list[i].item_cd == 'DH-0001A2' || list[i].item_cd == 'DH-0002A2') {
			    			var way_count = 0;
			    			var corner_count = 0;
			    			
			    			if (bf_sum > 0) way_count++;
			    			if (bl_sum > 0) way_count++;
			    			if (br_sum > 0) way_count++;
			    			if (bb_sum > 0) way_count++;
			    			if ($('#dcorner1').hasClass('on_corner')) corner_count++;
			    			if ($('#dcorner2').hasClass('on_corner')) corner_count++;
			    			if ($('#dcorner3').hasClass('on_corner')) corner_count++;
			    			if ($('#dcorner4').hasClass('on_corner')) corner_count++;
			    			if ($('#dcorner1').hasClass('on_corner') && $('#dcorner2').hasClass('on_corner') && bf_sum != bfWidth) way_count++;
			    			if ($('#dcorner1').hasClass('on_corner') && $('#dcorner3').hasClass('on_corner') && bl_sum != blrWidth) way_count++;
			    			if ($('#dcorner2').hasClass('on_corner') && $('#dcorner4').hasClass('on_corner') && br_sum != blrWidth) way_count++;
			    			if ($('#dcorner3').hasClass('on_corner') && $('#dcorner4').hasClass('on_corner') && bb_sum != bfWidth) way_count++;

			    			dh_qty = way_count - corner_count;
			    			list[i].qty = dh_qty;
			    			list[i].factory_amt = list[i].factory_amt * list[i].qty;
			    			list[i].retail_amt = list[i].retail_amt * list[i].qty;
			    		}
			    		
			    		content += '<tr style="height: 25px;">';
			    		content += '<td width="15%">'+list[i].dp1+'</td>';
				    	content += '<td width="35%">'+list[i].dp2+'</td>';
				    	content += '<td style="text-align: right;">'+list[i].retail_price.format()+'</td>';
				    	content += '<td style="text-align: right;">'+list[i].qty+'</td>';
				    	tot_amt += list[i].retail_amt;
				    	content += '<td style="text-align: right;">'+list[i].retail_amt.format()+'</td>';
				    	tot_factory += list[i].factory_amt;
				    	content += '<td style="text-align: right;" class="result-factory-amt invisible">'+list[i].factory_amt.format()+'</td>';
				    	content += '</tr>';
			    	}

			    	if (wardrobe == 'slide' || wardrobe == 'builtin') {
			    		var bi_retail_amt = 0, bi_factory_amt = 0;
	    				switch(ward_bi) {
	    				case 'builtin':
	    					if(ward_kind=='WRD022'||ward_kind=='WRD023'){
	    						bi_retail_amt = 70000; bi_factory_amt = 56100;
	    					}else{
	    						bi_retail_amt = 100000; bi_factory_amt = 79200;
	    					}
	    					break;
	    				case 'ep_l': bi_retail_amt = 50000; bi_factory_amt = 39600; break;
	    				case 'ep_r': bi_retail_amt = 50000; bi_factory_amt = 39600; break;
	    				case 'ep_lr': bi_retail_amt = 100000; bi_factory_amt = 79200; break;
	    				}
	    				tot_amt += bi_retail_amt;
	    				tot_factory += bi_factory_amt;
				    	
				    	content += '<tr style="height: 25px; font-weight: bold;">';
				    	content += '<td colspan="2" style="text-align: center; color: #F15F5F;">재단비용</td>';
				    	content += '<td></td><td></td>';
				    	content += '<td style="text-align: right; color: #F15F5F;">'+bi_retail_amt.format()+'</td>';
				    	content += '<td style="text-align: right; padding-left: 20px; color: #F15F5F !important;" class="result-factory-amt invisible">'+bi_factory_amt.format()+'</td>';
				    	content += '</tr>';
			    	}
			    	
			    	content += '<tr style="height: 25px; font-weight: bold;">';
			    	content += '<td colspan="2" style="text-align: center;">총금액</td>';
			    	content += '<td></td><td></td>';
			    	content += '<td style="text-align: right;">'+tot_amt.format()+'</td>';
			    	content += '<td style="text-align: right; padding-left: 20px;" class="result-factory-amt invisible">'+tot_factory.format()+'</td>';
			    	content += '</tr>';
			    	content += '</table>';
			    	
			    	$('.result-table').html(content);
			    	
			    	$('.body-blind').removeClass('invisible');
			    	$('.result-table').removeClass('invisible');
			    	if (wardrobe == 'slide' || wardrobe == 'builtin')
			    		$('.frame-result').css('width', '100%').css('top', $('.frame-board').offset().top + $('.frame-board').height() + 20);
			    	else if (wardrobe == 'dressroom')
			    		$('.frame-result').css('width', '100%').css('top', $('.frame-dressroom').offset().top + $('.frame-dressroom').height() + 20);
			    	$('.frame-result').removeClass('invisible');
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
			if (status_door == 'hide') $('#navi-menu-door .navi-menu-title').click();
			html2canvas($('.frame-board'), {
		        onrendered: function (canvas) {
		        	img_dr = canvas.toDataURL("image/png");
		        }
		    });
		    
			$('#navi-menu-door .navi-menu-title').click();
			html2canvas($('.frame-board'), {
		        onrendered: function (canvas) {
		        	img_no_dr = canvas.toDataURL("image/png");
		        }
		    });
			
			$('#navi-menu-door .navi-menu-title').click();
		} else if (wardrobe == 'dressroom') {
			if (bf_sum > 0) {
				$('.dressroom-map-way.forward').click();
				html2canvas($('.frame-dr-body.forward'), {
			        onrendered: function (canvas) {
			        	img_forward = canvas.toDataURL("image/png");
			        }
			    });
			}
			if (bl_sum > 0) {
				$('.dressroom-map-way.left').click();
				html2canvas($('.frame-dr-body.left'), {
			        onrendered: function (canvas) {
			        	img_left = canvas.toDataURL("image/png");
			        }
			    });
			}
			if (br_sum > 0) {
				$('.dressroom-map-way.right').click();
				html2canvas($('.frame-dr-body.right'), {
			        onrendered: function (canvas) {
			        	img_right = canvas.toDataURL("image/png");
			        }
			    });
			}
			if (bb_sum > 0) {
				$('.dressroom-map-way.backward').click();
				html2canvas($('.frame-dr-body.backward'), {
			        onrendered: function (canvas) {
			        	img_backward = canvas.toDataURL("image/png");
			        }
			    });
			}
			$('.dressroom-map-way.above').click();
			html2canvas($('.frame-dr-body.above'), {
		        onrendered: function (canvas) {
		        	img_above = canvas.toDataURL("image/png");
		        }
		    });
		}
	});
	
	
	// 초기화
	$('#navi-menu-init').click(function() {
		wardrobe = '';
		ward_kind = '';
		
		basic_width = 0, basic_height = 0;
		list_construct_body = new Array();
		current_body = '', current_door = '', status_door = 'show';
		
		$('.type-state').html('');
		$('.kind-state').html('');
		$('.size-width').html(0);
		$('.size-height').html(0);
		$('.text-width').html('너비');
		$('.text-height').html('높이');
		$('.door-state').html('보임');
		$('.door-state').attr('data-door-state', 'show');
		$('.finish-state').html(''); ward_bi = '';
		
		$('.frame-info').removeClass('invisible');
		$('.frame-contents').addClass('invisible');
		$('.navi-menu').removeClass('navi-selected');
		$('.navi-menu-item').addClass('invisible');
		
		$('#controller').addClass('invisible');
		$('.controller-header-item').removeClass('controller-selected');
		
		$('.frame-result').addClass('invisible');
		$('.body-blind').addClass('invisible');
		$('.result-table').addClass('invisible');
		
		img_dr = null, img_no_dr = null;
		img_forward = null, img_left = null, img_right = null, img_backward = null, img_above = null;
		$('#title').val('');
		
		show_info();
	});
	
	// <$save 저장
	$('.result-save').click(function() {
		title = $('#title').val();
		if (title == '') {
			showAlert('제목을 입력해 주세요.');
			return;
		}
		
		var special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
		if (special_pattern.test(title.trim()) == true ) {
			showAlert('특수문자는 사용할 수 없습니다.');
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
					height : ward_height,
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
			    			showAlert('저장에 실패했습니다.');
			    		} else if (rslt == 1) {
			    			showAlert('저장되었습니다.');
			    			$('#navi-menu-init').click();
			    		} else if (rslt == 2) {
			    			showAlert('이미 저장된 제목입니다.');
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
					height : ward_height,
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
			    			showAlert('저장에 실패했습니다.');
			    		} else if (rslt == 1) {
			    			showAlert('저장되었습니다.');
			    			$('#navi-menu-init').click();
			    		} else if (rslt == 2) {
			    			showAlert('이미 저장된 제목입니다.');
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
		case 'dressroom':
			var fb_width = basic_width;
			var lr_width = basic_height;
			
			$.ajax({
				url : '/wardrobe/save/dressroom.json',
				dataType : 'json',
				type : 'post',
				data : {mwow2d: mwow2d,
					title : title,
					fb_width : fb_width,
					lr_width : lr_width,
					kind : ward_kind,
					body : ward_body,
					dh_qty : dh_qty,
					img_above : img_above,
					img_forward : img_forward,
					img_left : img_left,
					img_right : img_right,
					img_backward : img_backward},
			    success : function (result) {
			    	$.each(result, function(key) {
			    		var list = result[key];
			    		var rslt = list[0].result;
			    		
			    		if (rslt == 0) {
			    			showAlert('저장에 실패했습니다.');
			    		} else if (rslt == 1) {
			    			showAlert('저장되었습니다.');
			    			$('#navi-menu-init').click();
			    		} else if (rslt == 2) {
			    			showAlert('이미 저장된 제목입니다.');
			    		}
			    	});
			    },
				beforeSend : function() {
					$('.loading').removeClass('invisible');
				},
			    complete : function() {
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
					if ($('#'+$('.frame-body').contents(':first-child').attr('id')+' .door-box .door-center').attr('data-door') == ward_kind+'C') {
						$('#'+$('.frame-body').contents(':last-child').attr('id')+' .door-box .door-center').attr('data-door', ward_kind+'R');
						$('#'+$('.frame-body').contents(':last-child').attr('id')+' .door-box .door-center').css('background', 'url(/images/wardrobe/simulation/slide/'+ward_kind+'R.jpg)');
					} else {
						$('#'+$('.frame-body').contents(':first-child').attr('id')+' .door-box .door-center').attr('data-door', ward_kind+'L');
						$('#'+$('.frame-body').contents(':first-child').attr('id')+' .door-box .door-center').css('background', 'url(/images/wardrobe/simulation/slide/'+ward_kind+'L.jpg)');
					}
				} else if (count > 2) {
					for (i = 0; i < count; i++) {
						$('#body-'+i+' .door-box .door-center').attr('data-door', ward_kind+'C');
						$('#body-'+i+' .door-box .door-center').css('background', 'url(/images/wardrobe/simulation/slide/'+ward_kind+'C.jpg)');
					}
					$('#'+$('.frame-body').contents(':first-child').attr('id')+' .door-box .door-center').attr('data-door', ward_kind+'L');
					$('#'+$('.frame-body').contents(':first-child').attr('id')+' .door-box .door-center').css('background', 'url(/images/wardrobe/simulation/slide/'+ward_kind+'L.jpg)');
					$('#'+$('.frame-body').contents(':last-child').attr('id')+' .door-box .door-center').attr('data-door', ward_kind+'R');
					$('#'+$('.frame-body').contents(':last-child').attr('id')+' .door-box .door-center').css('background', 'url(/images/wardrobe/simulation/slide/'+ward_kind+'R.jpg)');
				}
				$('.door-center').css('background-size', door_width+'px '+cri_height+'px');
			}
		}
	}).disableSelection();
	
	$('.ic-help').click(function() {
		if ($('.frame-help').hasClass('invisible')) {
			$('.frame-help-item').addClass('invisible');
			
			if ($('#navi-menu-width').hasClass('navi-selected') || $('#navi-menu-height').hasClass('navi-selected')) {
				$('.help-space').removeClass('invisible');
				$('.frame-help').removeClass('invisible');
				$('.help-sub-text').removeClass('invisible');
			} else if ($('#navi-menu-construct').hasClass('navi-selected')) {
				$('.help-construct').removeClass('invisible');
				$('.frame-help').removeClass('invisible');
				$('.help-sub-text').removeClass('invisible');
			} else if (!$('.frame-result').hasClass('invisible')) {
				
			} else if (!$('#controller').hasClass('invisible')) {
				$('.help-controller').removeClass('invisible');
				$('.frame-help').removeClass('invisible');
				$('.help-sub-text').removeClass('invisible');
				$('#controller').css('top', '20%');
				$('#controller').css('left', '10%');
				if ($('#controller').height() < 250) {
					$('.help-controller-box').height(250);
				} else {
					$('.help-controller-box').height($('#controller').height());
				}
			} else if ($('.size-width').html() == '0' || $('.size-height').html() == '0') {
				$('.help-main').removeClass('invisible');
				$('.frame-help').removeClass('invisible');
				$('.help-sub-text').removeClass('invisible');
			} else {
				$('.help-body').removeClass('invisible');
				$('.frame-help').removeClass('invisible');
				$('.help-sub-text').removeClass('invisible');
			}
			
		} else {
			$('.frame-help').addClass('invisible');
			$('.help-sub-text').addClass('invisible');
		}
	});
	$('.frame-help').click(function() {
		$('.frame-help').addClass('invisible');
		$('.help-sub-text').addClass('invisible');
	});
});

function show_info() {
	$('.frame-info').html('');
	$('.frame-info').append('<ul class="info-type"></ul>');
	$('.info-type').append('<li class="info-slide"><div class="info-header"><div class="top">슬라이딩</div><div class="bottom">['+SLIDE.size()+'종]</div></div><ul id="info-slide-item"></ul></li>');
	$('.info-type').append('<li class="info-builtin"><div class="info-header"><div class="top">붙박이장</div><div class="bottom">['+BUILTIN.size()+'종]</div></div><ul id="info-builtin-item"></ul></li>');
	$('.info-type').append('<li class="info-dressroom"><div class="info-header"><div class="top">드레스룸</div><div class="bottom">['+DRESSROOM.size()+'종]</div></div><ul id="info-dressroom-item"></ul></li>');
	
	var temp_kind;
	for (s = 0; s < SLIDE.size(); s++) {
		temp_kind = SLIDE.keys()[s];
		$('#info-slide-item').append('<li><div class="top-bottom-padding"></div><div><img src="/images/wardrobe/simulation/slide/'+temp_kind+'.png" height="160px" data-info-type="slide" data-info-kind="'+temp_kind+'" /></div><div class="info-kind-text">'+SLIDE.get(temp_kind)+'</div><div class="top-bottom-padding"></div></li>');
	}
	for (s = 0; s < BUILTIN.size(); s++) {
		debugger;
		temp_kind = BUILTIN.keys()[s];
		$('#info-builtin-item').append('<li><div class="top-bottom-padding"></div><div><img src="/images/wardrobe/simulation/builtin/'+temp_kind+'.png" height="160px" data-info-type="builtin" data-info-kind="'+temp_kind+'" /></div><div class="info-kind-text">'+BUILTIN.get(temp_kind)+'</div><div class="top-bottom-padding"></div></li>');
	}
	for (s = 0; s < DRESSROOM.size(); s++) {
		temp_kind = DRESSROOM.keys()[s];
		$('#info-dressroom-item').append('<li><div class="top-bottom-padding"></div><div><img src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/'+temp_kind+'.png" height="160px" data-info-type="builtin" data-info-kind="'+temp_kind+'" /></div><div class="info-kind-text">'+DRESSROOM.get(temp_kind)+'</div><div class="top-bottom-padding"></div></li>');
	}
	
	$('#info-slide-item img').click(function() {
		wardrobe = 'slide';
		$('.type-state').html('슬라이딩');
		ward_kind = $(this).attr('data-info-kind');
		$('.kind-state').html(SLIDE.get(ward_kind));
		if (!$('#navi-menu-width').hasClass('navi-selected'))
			$('#navi-menu-width .navi-menu-title').click();
		
		var temp_ward_key;
		$('#navi-menu-kind .navi-menu-item').html('');
		for (i = 0; i < SLIDE.size(); i++) {
			temp_ward_key = SLIDE.keys()[i];
			$('#navi-menu-kind .navi-menu-item').append('<li class="navi-menu-item-li kind-item" data-kind="'+temp_ward_key+'">'+SLIDE.get(temp_ward_key)+'</li>');			
		}
		
		// 메뉴바 종류 아이템 클릭
		$('.kind-item').click(function() {
			ward_kind = $(this).attr('data-kind');
			$('.kind-state').html($(this).html());
			$('#navi-menu-kind div').click();
			
			switch (wardrobe) {
			case 'slide': $('.size-width').html('2026'); $('.size-height').html('2240'); break;
			case 'builtin': $('.size-width').html('2000'); $('.size-height').html('2240'); break;
			case 'dressroom': $('.size-width').html('2000'); $('.size-height').html('2000'); break;
				break;
			}
			
			basic_apply();
		});
		
		event.stopPropagation();
	});
	$('#info-builtin-item img').click(function() {
		wardrobe = 'builtin';
		$('.type-state').html('붙박이장');
		ward_kind = $(this).attr('data-info-kind');
		$('.kind-state').html(BUILTIN.get(ward_kind));
		if (!$('#navi-menu-width').hasClass('navi-selected'))
			$('#navi-menu-width .navi-menu-title').click();
		
		var temp_ward_key;
		$('#navi-menu-kind .navi-menu-item').html('');
		for (i = 0; i < BUILTIN.size(); i++) {
			temp_ward_key = BUILTIN.keys()[i];
			$('#navi-menu-kind .navi-menu-item').append('<li class="navi-menu-item-li kind-item" data-kind="'+temp_ward_key+'">'+BUILTIN.get(temp_ward_key)+'</li>');			
		}
		
		// 메뉴바 종류 아이템 클릭
		$('.kind-item').click(function() {
			ward_kind = $(this).attr('data-kind');
			$('.kind-state').html($(this).html());
			$('#navi-menu-kind div').click();
			
			switch (wardrobe) {
			case 'slide': $('.size-width').html('2026'); $('.size-height').html('2240'); break;
			case 'builtin': $('.size-width').html('2000'); $('.size-height').html('2240'); break;
			case 'dressroom': $('.size-width').html('2000'); $('.size-height').html('2000'); break;
				break;
			}
			
			basic_apply();
		});
		
		event.stopPropagation();
	});
	$('#info-dressroom-item img').click(function() {
		wardrobe = 'dressroom';
		$('.type-state').html('드레스룸');
		ward_kind = $(this).attr('data-info-kind');
		$('.kind-state').html(DRESSROOM.get(ward_kind));
		if (!$('#navi-menu-width').hasClass('navi-selected'))
			$('#navi-menu-width .navi-menu-title').click();
		
		var temp_ward_key;
		$('#navi-menu-kind .navi-menu-item').html('');
		for (i = 0; i < DRESSROOM.size(); i++) {
			temp_ward_key = DRESSROOM.keys()[i];
			$('#navi-menu-kind .navi-menu-item').append('<li class="navi-menu-item-li kind-item" data-kind="'+temp_ward_key+'">'+DRESSROOM.get(temp_ward_key)+'</li>');			
		}
		
		// 메뉴바 종류 아이템 클릭
		$('.kind-item').click(function() {
			ward_kind = $(this).attr('data-kind');
			$('.kind-state').html($(this).html());
			$('#navi-menu-kind div').click();
			
			switch (wardrobe) {
			case 'slide': $('.size-width').html('2026'); $('.size-height').html('2240'); break;
			case 'builtin': $('.size-width').html('2000'); $('.size-height').html('2240'); break;
			case 'dressroom': $('.size-width').html('2000'); $('.size-height').html('2000'); break;
				break;
			}
			
			basic_apply();
		});
		
		event.stopPropagation();
	});
	
	if ($(document).width() * 0.9 < 270 * SLIDE.size()) {
		$('#info-slide-item').lightSlider({
			autoWidth: true,
	        controls: false,
	        pager: false
		});
	} else {
		$('#info-slide-item li').css('margin-right', '10px');
		$('#info-slide-item li').css('cursor', 'pointer');
	}
	if ($(document).width() * 0.9 < 270 * BUILTIN.size()) {
		$('#info-builtin-item').lightSlider({
			autoWidth: true,
	        controls: false,
	        pager: false
		});
	} else {
		$('#info-builtin-item li').css('margin-right', '10px');
		$('#info-builtin-item li').css('cursor', 'pointer');
	}
	if ($(document).width() * 0.9 < 270 * DRESSROOM.size()) {
		$('#info-dressroom-item').lightSlider({
			autoWidth: true,
	        controls: false,
	        pager: false
		});
	} else {
		$('#info-dressroom-item li').css('margin-right', '10px');
		$('#info-dressroom-item li').css('cursor', 'pointer');
	}
}

function basic_apply() {
	$('.frame-info').addClass('invisible');
	$('.frame-contents').removeClass('invisible');
	$('.frame-board').addClass('invisible');
	$('.frame-result').addClass('invisible');
	$('.frame-dressroom').addClass('invisible');
	$('#controller-dr-map').addClass('invisible');
	$('#controller-dr').addClass('invisible');
	
	basic_width = Number($('.size-width').html());
	basic_height = Number($('.size-height').html());
	
	if (wardrobe == 'slide' || wardrobe == 'builtin') {
		$('.frame-board').removeClass('invisible');	
		
		$('.frame-main').addClass('invisible');
		$('.frame-contents').removeClass('invisible');
		$('.frame-board').width(basic_width / cri_no);
		$('.frame-board').height(basic_height / cri_no);
		$('.frame-board').css('background', 'url(/images/wardrobe/simulation/transparent.jpg)');
		$('.frame-finish').width(basic_width / cri_no);
		$('.frame-finish').height(basic_height / cri_no);
		$('.frame-finish').css('background', '');
		
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
		$('.door-state').html('보임');
		$('.door-state').attr('data-door-state', 'show');
		status_door = 'show';
		
		$('.body-blind').addClass('invisible');
		$('.result-table').addClass('invisible');
		
		$('#controller').addClass('invisible');
		$('.controller-header-item').removeClass('controller-selected');
		
		construct_body();
	} else if (wardrobe == 'dressroom') {
		current_body = '';
		$('.body-blind').addClass('invisible');
		$('.result-table').addClass('invisible');
		
		$('.frame-dressroom').removeClass('invisible');
		
		$('.frame-dr-body.above').width(basic_width / cri_no / 2);
		$('.frame-dr-body.above').height(basic_height / cri_no / 2);
		
		$('.frame-dr-body.forward').width(basic_width / cri_no / 2);
		$('.frame-dr-body.backward').width(basic_width / cri_no / 2);
		$('.frame-dr-body.left').width(basic_height / cri_no / 2);
		$('.frame-dr-body.right').width(basic_height / cri_no / 2);
		
		direction = '';
		bfFirstId = '', bfLastId = '', bf_sum = 0;
		blFirstId = '', blLastId = '', bl_sum = 0;
		brFirstId = '', brLastId = '', br_sum = 0;
		bbFirstId = '', bbLastId = '', bb_sum = 0;
		
		$('#info_dr_f').hide();
		$('#info_dr_l').hide();
		$('#info_dr_r').hide();
		$('#info_dr_b').hide();
		var aboveHtml = '';
		if(ward_kind!='WRD257'){		
			aboveHtml += '<div id="darea1" class="above_area"></div><div id="darea2" class="above_area"></div><div id="darea3" class="above_area"></div><div id="darea4" class="above_area"></div>';		
			aboveHtml += '<div id="dcorner1" class="above_area" onclick="setCorner(event, this.id)"></div><div id="dcorner2" class="above_area" onclick="setCorner(event, this.id)"></div><div id="dcorner3" class="above_area" onclick="setCorner(event, this.id)"></div><div id="dcorner4" class="above_area" onclick="setCorner(event, this.id)"></div>';
			aboveHtml += '<div id="dline1"></div><div id="dline2"></div><div id="dline3"></div><div id="dline4"></div><div id="dsize1" class="invisible"></div><div id="dsize2" class="invisible"></div><div id="dsize3" class="invisible"></div><div id="dsize4" class="invisible"></div>';
			
			$('.frame-dr-body.above').removeClass('invisible');
			$('.frame-dr-body.forward').addClass('invisible');
		}else{		
			aboveHtml += '<div id="darea1" class="above_area"></div><div id="darea2" class="above_area"></div><div id="darea3" class="above_area"></div><div id="darea4" class="above_area"></div>';		
			aboveHtml += '<div id="dline1"></div><div id="dline2"></div><div id="dline3"></div><div id="dline4"></div><div id="dsize1" class="invisible"></div><div id="dsize2" class="invisible"></div><div id="dsize3" class="invisible"></div><div id="dsize4" class="invisible"></div>';
			
			$('.frame-dr-body.above').addClass('invisible');
			$('.frame-dr-body.forward').removeClass('invisible');
		}
		$('.frame-dr-body.above').html(aboveHtml);
		$('#darea1').click(function() {
			$('.dressroom-map-way.forward').click();
		});
		$('#darea2').click(function() {
			$('.dressroom-map-way.left').click();
		});
		$('#darea3').click(function() {
			$('.dressroom-map-way.right').click();
		});
		$('#darea4').click(function() {
			$('.dressroom-map-way.backward').click();
		});
		if(ward_kind!='WRD999'){
		$('.frame-dr-body.forward').html('<div id="bf_l" class="dr-body" data-top-board="N" data-side-board="Y"><div class="dr-check df800 invisible"></div></div><div id="bf_area"><div id="bf_cri"></div></div><div id="bf_r" class="dr-body" data-top-board="N" data-side-board="Y"><div class="dr-check df800 invisible"></div></div>');
		$('.frame-dr-body.left').html('<div id="bl_l" class="dr-body" data-top-board="N" data-side-board="Y"><div class="dr-check df800 invisible"></div></div><div id="bl_area"><div id="bl_cri"></div></div><div id="bl_r" class="dr-body" data-top-board="N" data-side-board="Y"><div class="dr-check df800 invisible"></div></div>');
		$('.frame-dr-body.right').html('<div id="br_l" class="dr-body" data-top-board="N" data-side-board="Y"><div class="dr-check df800 invisible"></div></div><div id="br_area"><div id="br_cri"></div></div><div id="br_r" class="dr-body" data-top-board="N" data-side-board="Y"><div class="dr-check df800 invisible"></div></div>');
		$('.frame-dr-body.backward').html('<div id="bb_l" class="dr-body" data-top-board="N" data-side-board="Y"><div class="dr-check df800 invisible"></div></div><div id="bb_area"><div id="bb_cri"></div></div><div id="bb_r" class="dr-body" data-top-board="N" data-side-board="Y"><div class="dr-check df800 invisible"></div></div>');
		}else if(ward_kind=='WRD999'){
			$('.frame-dr-body.forward').html('<div id="bf_l" class="dr-body" data-top-board="N" data-side-board="Y"><div class="dr-check df820 invisible"></div></div><div id="bf_area"><div id="bf_cri"></div></div><div id="bf_r" class="dr-body" data-top-board="N" data-side-board="Y"><div class="dr-check df745 invisible"></div></div>');
			$('.frame-dr-body.left').html('<div id="bl_l" class="dr-body" data-top-board="N" data-side-board="Y"><div class="dr-check df820 invisible"></div></div><div id="bl_area"><div id="bl_cri"></div></div><div id="bl_r" class="dr-body" data-top-board="N" data-side-board="Y"><div class="dr-check df745 invisible"></div></div>');
			$('.frame-dr-body.right').html('<div id="br_l" class="dr-body" data-top-board="N" data-side-board="Y"><div class="dr-check df820 invisible"></div></div><div id="br_area"><div id="br_cri"></div></div><div id="br_r" class="dr-body" data-top-board="N" data-side-board="Y"><div class="dr-check df745 invisible"></div></div>');
			$('.frame-dr-body.backward').html('<div id="bb_l" class="dr-body" data-top-board="N" data-side-board="Y"><div class="dr-check df745 invisible"></div></div><div id="bb_area"><div id="bb_cri"></div></div><div id="bb_r" class="dr-body" data-top-board="N" data-side-board="Y"><div class="dr-check df745 invisible"></div></div>');		
		}
		$('.dr-body').off('click');
		$('.dr-body').click(function() {
			if ($('#'+$(this).attr('id')+' .dr-check').hasClass('invisible')) {
				$('.dr-check').addClass('invisible');
				$('#'+$(this).attr('id')+' .dr-check').removeClass('invisible');
				$('#controller-dr').removeClass('invisible');
				current_body = $(this).attr('id');
				
				if ($('.dr-header-body').hasClass('controller-selected')) {
					$('.dr-header-body').click();
				} else if ($('.dr-header-option').hasClass('controller-selected')) {
					$('.dr-header-option').click();
				} else {
					$('.dr-header-body').click();
				}
			} else {
				$('#'+$(this).attr('id')+' .dr-check').addClass('invisible');
				$('#controller-dr').addClass('invisible');
				current_body = '';
			}
		});
		
		$('#bf_area').width(basic_width / cri_no / 2);
		$('#bb_area').width(basic_width / cri_no / 2);
		$('#bl_area').width(basic_height / cri_no / 2);
		$('#br_area').width(basic_height / cri_no / 2);
		if(ward_kind=='WRD999'){
			$('#dcorner1').css('width', 96.5).css('height', 96.5);
			$('#dcorner2').css('width', 96.5).css('height', 96.5);
			$('#dcorner3').css('width', 96.5).css('height', 96.5);
			$('#dcorner4').css('width', 96.5).css('height', 96.5);
		}else{
		$('#dcorner1').css('width', 80).css('height', 80);
		$('#dcorner2').css('width', 80).css('height', 80);
		$('#dcorner3').css('width', 80).css('height', 80);
		$('#dcorner4').css('width', 80).css('height', 80);
		}
		bfWidth = basic_width / cri_no / 2;
		blrWidth = basic_height / cri_no / 2;
		$('#darea1').css('width', bfWidth+'px');
		$('#darea2').css('width', blrWidth+'px').css('transform', 'translate(-'+(blrWidth/2 - 40)+'px, '+(blrWidth/2 - 40)+'px) rotate(270deg)');
		$('#darea3').css('width', blrWidth+'px').css('transform', 'translate('+(blrWidth/2 - 40)+'px, '+(blrWidth/2 - 40)+'px) rotate(90deg)');
		$('#darea4').css('width', bfWidth+'px');
		
		$('#dline1').css('width', bfWidth+'px');
		$('#dline2').css('height', blrWidth+'px').css('line-height', blrWidth+'px');
		$('#dline3').css('height', blrWidth+'px').css('line-height', blrWidth+'px');
		$('#dline4').css('width', bfWidth+'px');

		if(ward_kind=='WRD257'){
			$('#controller-dr-map').addClass('invisible');
		}else{
			$('#controller-dr-map').removeClass('invisible');
		}
		$('.dressroom-map-cri').removeClass('invisible');
		$('#controller-dr').addClass('invisible');
		$('#controller-dr-contents').remove();
		$('.controller-dr-header-item').removeClass('controller-selected');
		
	
		
		
		construct_body();
		
//		$('.frame-dr-body.forward').css('transform', 'scale(2)');
	}
}

function construct_body() {
	switch (wardrobe) {
	case 'slide':
		var s978 = 0, s1140 = 0;
		s978 = basic_width % 978;
		s1140 = basic_width % 1140;
		list_construct_body = new Array();
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
			showAlert('현재 너비는 슬라이딩 구성이 불가능합니다.');
			return;
		}
		create_body(null);
		change_door(null);
		break;
	case 'builtin':
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
		
		$('#navi-menu-construct .navi-menu-item').html('');
		for (idx = 0; idx < arr_body_cnt.length; idx++) {
			$('#navi-menu-construct .navi-menu-item').append('<li class="navi-menu-item-li"><div class="construct-header">'+arr_body_cnt[idx]+'통</div><ul id="construct-b'+arr_body_cnt[idx]+'" class="construct-item"></ul></li>');
			construct_builtin(arr_body_cnt[idx]);
			
			$('.item').css('width', '300px');
			$('#construct-b'+arr_body_cnt[idx]).lightSlider({
				autoWidth: true,
		        controls: false,
		        pager: false
			});
		}
		
		break;
	case 'dressroom':
		$('#navi-menu-construct .navi-menu-item').html('');
		
		$('#navi-menu-construct .navi-menu-item').append('<li class="navi-menu-item-li"><ul id="construct-dressroom" class="construct-item"></ul></li>');
		
		switch (ward_kind) {
		case 'WRD549':
			$('#construct-dressroom').append('<li class="item-header">900장</li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK001" data-dwr="900" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b900_a1_a.png" ondragstart="return false" /></div><div class="item-text">이불장(화이트)</div></li>');
			
			$('#construct-dressroom').append('<li class="item-header">800장</li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK002" data-dwr="800" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b800_a1.png" ondragstart="return false" /></div><div class="item-text">옷장</div></li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK003" data-dwr="800" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b800_b1.png" ondragstart="return false" /></div><div class="item-text">정리장</div></li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK004" data-dwr="800" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b800_c1_a.png" ondragstart="return false" /></div><div class="item-text">옵션장(바지걸이)</div></li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK005" data-dwr="800" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b800_d1.png" ondragstart="return false" /></div><div class="item-text">3단서랍</div></li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK006" data-dwr="800" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b800_e1.png" ondragstart="return false" /></div><div class="item-text">수납박스</div></li>');
			//수납박스
			$('#construct-dressroom').append('<li class="item-header">600장</li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK002" data-dwr="600" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b600_a1.png" ondragstart="return false" /></div><div class="item-text">옷장</div></li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK003" data-dwr="600" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b600_b1.png" ondragstart="return false" /></div><div class="item-text">정리장</div></li>');
			
			$('#construct-dressroom').append('<li class="item-header">400장</li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK007" data-dwr="400" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b400_a1.png" ondragstart="return false" /></div><div class="item-text">코디장</div></li>');
			
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK003" data-dwr="400" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b400_b.png" ondragstart="return false" /></div><div class="item-text">정리장</div></li>');
			break;
		case 'WRD200':
			$('#construct-dressroom').append('<li class="item-header">800장</li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK002" data-dwr="800" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b800_a1.png" ondragstart="return false" /></div><div class="item-text">옷장</div></li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK003" data-dwr="800" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b800_b1.png" ondragstart="return false" /></div><div class="item-text">정리장</div></li>');
			
			$('#construct-dressroom').append('<li class="item-header">600장</li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK002" data-dwr="600" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b600_a1.png" ondragstart="return false" /></div><div class="item-text">옷장</div></li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK003" data-dwr="600" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b600_b1.png" ondragstart="return false" /></div><div class="item-text">정리장</div></li>');
			
			$('#construct-dressroom').append('<li class="item-header">400장</li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK007" data-dwr="400" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b400_a1.png" ondragstart="return false" /></div><div class="item-text">코디장</div></li>');
			break;
		case 'WRD300':
			$('#construct-dressroom').append('<li class="item-header">800장</li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK002" data-dwr="800" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b800_a1.png" ondragstart="return false" /></div><div class="item-text">옷장</div></li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK003" data-dwr="800" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b800_b1.png" ondragstart="return false" /></div><div class="item-text">정리장</div></li>');
			
			$('#construct-dressroom').append('<li class="item-header">600장</li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK002" data-dwr="600" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b600_a1.png" ondragstart="return false" /></div><div class="item-text">옷장</div></li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK003" data-dwr="600" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b600_b1.png" ondragstart="return false" /></div><div class="item-text">정리장</div></li>');
			
			$('#construct-dressroom').append('<li class="item-header">400장</li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK007" data-dwr="400" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b400_a1.png" ondragstart="return false" /></div><div class="item-text">코디장</div></li>');
			break;
		case 'WRD257':
			$('#construct-dressroom').append('<li class="item-header">1000장</li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK002" data-dwr="1000" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_a1_1.png" ondragstart="return false" /></div><div class="item-text">옷장</div></li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK014" data-dwr="1000" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_l1_1.png" ondragstart="return false" /></div><div class="item-text">칸막이장</div></li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK001" data-dwr="1000" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_k1_1.png" ondragstart="return false" /></div><div class="item-text">이불장</div></li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK009" data-dwr="1000" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_b1.png" ondragstart="return false" /></div><div class="item-text">TV장</div></li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK010" data-dwr="1000" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_c1.png" ondragstart="return false" /></div><div class="item-text">독서실책상</div></li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK011" data-dwr="1000" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_d1.png" ondragstart="return false" /></div><div class="item-text">화장대장</div></li>');
			
			$('#construct-dressroom').append('<li class="item-header">900장</li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK002" data-dwr="900" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b900_b1.png" ondragstart="return false" /></div><div class="item-text">옷장</div></li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK008" data-dwr="900" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b900_c1.png" ondragstart="return false" /></div><div class="item-text">서랍형옷장</div></li>');
			
			$('#construct-dressroom').append('<li class="item-header">600장</li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK011" data-dwr="600" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b600_c1.png" ondragstart="return false" /></div><div class="item-text">화장대장</div></li>');
			
			$('#construct-dressroom').append('<li class="item-header">290장</li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK012" data-dwr="290" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b290_a1.png" ondragstart="return false" /></div><div class="item-text">코너장</div></li>');
			break;
		case 'WRD999':
			$('#construct-dressroom').append('<li class="item-header">1000장</li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK002" data-dwr="1000" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_e1.png" ondragstart="return false" /></div><div class="item-text">옷장</div></li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK003" data-dwr="1000" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_f1.png" ondragstart="return false" /></div><div class="item-text">정리장</div></li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK013" data-dwr="1000" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_g1.png" ondragstart="return false" /></div><div class="item-text">액세사리</div></li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK014" data-dwr="1000" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_h1.png" ondragstart="return false" /></div><div class="item-text">칸막이</div></li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK015" data-dwr="1000" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_i1.png" ondragstart="return false" /></div><div class="item-text">1단서랍</div></li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK016" data-dwr="1000" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_j1.png" ondragstart="return false" /></div><div class="item-text">2단서랍</div></li>');
			$('#construct-dressroom').append('<li class="item"><div><img data-dr-kind="DK007" data-dwr="1000" src="/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_h2.png" ondragstart="return false" /></div><div class="item-text">코디장</div></li>');
			break;
		}
		
		$('.item').css('width', '150px');
		
		$('.item img').click(function() {
			addDr(this);
		});
		
		$('#construct-dressroom').lightSlider({
			autoWidth: true,
	        controls: false,
	        pager: false
		});
		
		$('.finish-state').html(''); ward_bi = '';
		
		break;
	}
}

function construct_builtin(number) {
	for (i = list_construct_body.length - 1; i >= 0; i--) {
		var sum_body = list_construct_body[i][1] + list_construct_body[i][2] + list_construct_body[i][3] + list_construct_body[i][4] + list_construct_body[i][5];
		
		if (sum_body == number) {
			var img_body = '', text_body = '';
			
			for (tb1 = 0; tb1 < list_construct_body[i][1]; tb1++)
				img_body += '<img src="/images/wardrobe/simulation/builtin/WR5014AM.jpg" ondragstart="return false" />';
			for (tb2 = 0; tb2 < list_construct_body[i][2]; tb2++)
				img_body += '<img src="/images/wardrobe/simulation/builtin/WR4014AM.jpg" ondragstart="return false" />';
			for (tb3 = 0; tb3 < list_construct_body[i][3]; tb3++)
				img_body += '<img src="/images/wardrobe/simulation/builtin/WR3014CM.jpg" ondragstart="return false" />';
			for (tb4 = 0; tb4 < list_construct_body[i][4]; tb4++)
				img_body += '<img src="/images/wardrobe/simulation/builtin/WR2014CM.jpg" ondragstart="return false" />';
			for (tb5 = 0; tb5 < list_construct_body[i][5]; tb5++)
				img_body += '<img src="/images/wardrobe/simulation/builtin/WR1014I.jpg" ondragstart="return false" />';

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
			
			$('#construct-b'+number).append('<li class="item" data-index="'+i+'"><div>' + img_body + '</div><div class="item-text">' + text_body + '</div></li>');
		}
	}
	if(ward_kind=='WRD577'||ward_kind=='WRD578'||ward_kind=='WRD579'){
		WR5014.put('WR5105A', '1000 옷장(서랍)');
		WR5014.put('WR5105B', '1000 이불장(서랍)');
		WR5014.put('WR5105D', '1000 칸막이장(서랍)');
		
		WR4014.put('WR4105A', '900 옷장(서랍)'); WR4014.put('WR4105B', '900 이불장(서랍)'); WR4014.put('WR4105D', '900 칸막이장(서랍)');
		WR3014.put('WR3105C', '500 반장(서랍)');
		WR2014.put('WR2105C', '450 반장(서랍)');
	}else{
		WR5014.remove('WR5105A');
		WR5014.remove('WR5105B');
		WR5014.remove('WR5105D');
		
		WR4014.remove('WR4105A'); WR4014.remove('WR4105B'); WR4014.remove('WR4105D');
		WR3014.remove('WR3105C');
		WR2014.remove('WR2105C');
	}if(ward_kind=='WRD022'||ward_kind=='WRD023'){
		WR5014.remove('WR5105AI');
		WR5014.remove('WR5105BI');
		WR5014.remove('WR5105DI');
		
		WR4014.remove('WR4105AI'); WR4014.remove('WR4105BI'); WR4014.remove('WR4105DI');
		WR3014.remove('WR3105CI');
		WR2014.remove('WR2105CI');
	}else{
		WR5014.put('WR5105AI', '1000 옷장(내부서랍형)'); WR5014.put('WR5105BI', '1000 이불장(내부서랍형)'); WR5014.put('WR5105DI', '1000 칸막이장(내부서랍형)');
		WR4014.put('WR4105AI', '900 옷장(내부서랍형)'); WR4014.put('WR4105BI', '900 이불장(내부서랍형)'); WR4014.put('WR4105DI', '900 칸막이장(내부서랍형)');
		//WR3014.put('WR3105CI', '500 반장(내부서랍형)');
		//WR2014.put('WR2105CI', '450 반장(내부서랍형)');
	}
	$('.construct-item .item').click(function() {
		
		create_body(this);
	});
}

function create_body(obj) {
	$('#controller').addClass('invisible');
	$('.controller-header-item').removeClass('controller-selected');
	$('.body-blind').addClass('invisible');
	$('.result-table').addClass('invisible');
	
	
	switch (wardrobe) {
	case 'slide':
		var idx = 0;
		var body_width = list_construct_body[0] * 978 + list_construct_body[1] * 1140;
		$('.frame-body').html('');
		$('.frame-body').width(body_width / cri_no);
//		$('.frame-body').css('left', (basic_width - body_width) / (cri_no * 2));
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
//		$('.frame-body').css('left', (basic_width - body_width) / (cri_no * 2));
		$('.measure-center').width(body_width / cri_no);
		$('.measure-center span').html(body_width);
		$('.measure-left, .measure-right').width((basic_width - body_width) / (cri_no * 2) - 1);
		$('.measure-left span, .measure-right span').html((basic_width - body_width) / 2);
		

		for (tb1 = 0; tb1 < list_construct_body[i][1]; tb1++) {
			if(ward_kind=='WRD577'||ward_kind=='WRD578'||ward_kind=='WRD022'||ward_kind=='WRD023'||ward_kind=='WRD543'||ward_kind=='WRD559'||ward_kind=='WRD546'||ward_kind=='WRD547'||ward_kind=='WRD548'||ward_kind=='WRD533'||ward_kind=='WRD561'||ward_kind=='WRD528'||ward_kind=='WRD579'){
				$('.frame-body').append('<div id="body-'+(idx++)+'" class="body-box width-1000" data-body="WR5014A" body-width="W1000"><div class="body-check check-1000 invisible"></div><div class="door-box door-1000"><div class="door-left"></div><div class="door-right"></div></div><div class="option-box option-1000"></div><img src="/images/wardrobe/simulation/builtin/WR5014AM.jpg" /><div style="position: absolute; width: '+(1000/cri_no-2)+'px; margin-top: 10px; border: 1px solid black; border-top: 0; height: 10px; text-align: center; line-height: 40px;">1000</div></div>');	
			}else{
			$('.frame-body').append('<div id="body-'+(idx++)+'" class="body-box width-1000" data-body="WR5014A" body-width="W1000"><div class="body-check check-1000 invisible"></div><div class="door-box door-1000"><div class="door-left"></div><div class="door-right"></div></div><div class="option-box option-1000"></div><img src="/images/wardrobe/simulation/builtin/WR5014A.jpg" /><div style="position: absolute; width: '+(1000/cri_no-2)+'px; margin-top: 10px; border: 1px solid black; border-top: 0; height: 10px; text-align: center; line-height: 40px;">1000</div></div>');
			}
		}
		for (tb2 = 0; tb2 < list_construct_body[i][2]; tb2++) {
			if(ward_kind=='WRD577'||ward_kind=='WRD578'||ward_kind=='WRD022'||ward_kind=='WRD023'||ward_kind=='WRD543'||ward_kind=='WRD559'||ward_kind=='WRD546'||ward_kind=='WRD547'||ward_kind=='WRD548'||ward_kind=='WRD533'||ward_kind=='WRD561'||ward_kind=='WRD528'||ward_kind=='WRD579'){				
				$('.frame-body').append('<div id="body-'+(idx++)+'" class="body-box width-900" data-body="WR4014A" body-width="W900"><div class="body-check check-900 invisible"></div><div class="door-box door-900"><div class="door-left"></div><div class="door-right"></div></div><div class="option-box option-900"></div><img src="/images/wardrobe/simulation/builtin/WR4014AM.jpg" /><div style="position: absolute; width: '+(900/cri_no-2)+'px; margin-top: 10px; border: 1px solid black; border-top: 0; height: 10px; text-align: center; line-height: 40px;">900</div></div>');
			}else{
			$('.frame-body').append('<div id="body-'+(idx++)+'" class="body-box width-900" data-body="WR4014A" body-width="W900"><div class="body-check check-900 invisible"></div><div class="door-box door-900"><div class="door-left"></div><div class="door-right"></div></div><div class="option-box option-900"></div><img src="/images/wardrobe/simulation/builtin/WR4014A.jpg" /><div style="position: absolute; width: '+(900/cri_no-2)+'px; margin-top: 10px; border: 1px solid black; border-top: 0; height: 10px; text-align: center; line-height: 40px;">900</div></div>');
			}
		}
		for (tb3 = 0; tb3 < list_construct_body[i][3]; tb3++) {
			if(ward_kind=='WRD577'||ward_kind=='WRD578'||ward_kind=='WRD022'||ward_kind=='WRD023'||ward_kind=='WRD543'||ward_kind=='WRD559'||ward_kind=='WRD546'||ward_kind=='WRD547'||ward_kind=='WRD548'||ward_kind=='WRD533'||ward_kind=='WRD561'||ward_kind=='WRD528'||ward_kind=='WRD579'){				
				$('.frame-body').append('<div id="body-'+(idx++)+'" class="body-box width-500" data-body="WR3014C" body-width="W500"><div class="body-check check-500 invisible"></div><div class="door-box door-500"><div class="door-center"></div></div><div class="option-box option-500"></div><img src="/images/wardrobe/simulation/builtin/WR3014CM.jpg" /><div style="position: absolute; width: '+(500/cri_no-2)+'px; margin-top: 10px; border: 1px solid black; border-top: 0; height: 10px; text-align: center; line-height: 40px;">500</div></div>');
			}else{
			$('.frame-body').append('<div id="body-'+(idx++)+'" class="body-box width-500" data-body="WR3014C" body-width="W500"><div class="body-check check-500 invisible"></div><div class="door-box door-500"><div class="door-center"></div></div><div class="option-box option-500"></div><img src="/images/wardrobe/simulation/builtin/WR3014C.jpg" /><div style="position: absolute; width: '+(500/cri_no-2)+'px; margin-top: 10px; border: 1px solid black; border-top: 0; height: 10px; text-align: center; line-height: 40px;">500</div></div>');
			}
		}
		for (tb4 = 0; tb4 < list_construct_body[i][4]; tb4++) {
			if(ward_kind=='WRD577'||ward_kind=='WRD578'||ward_kind=='WRD022'||ward_kind=='WRD023'||ward_kind=='WRD543'||ward_kind=='WRD559'||ward_kind=='WRD546'||ward_kind=='WRD547'||ward_kind=='WRD548'||ward_kind=='WRD533'||ward_kind=='WRD561'||ward_kind=='WRD528'||ward_kind=='WRD579'){				
				$('.frame-body').append('<div id="body-'+(idx++)+'" class="body-box width-450" data-body="WR2014C" body-width="W450"><div class="body-check check-450 invisible"></div><div class="door-box door-450"><div class="door-center"></div></div><div class="option-box option-450"></div><img src="/images/wardrobe/simulation/builtin/WR2014CM.jpg" /><div style="position: absolute; width: '+(450/cri_no-2)+'px; margin-top: 10px; border: 1px solid black; border-top: 0; height: 10px; text-align: center; line-height: 40px;">450</div></div>');
			}else{
			$('.frame-body').append('<div id="body-'+(idx++)+'" class="body-box width-450" data-body="WR2014C" body-width="W450"><div class="body-check check-450 invisible"></div><div class="door-box door-450"><div class="door-center"></div></div><div class="option-box option-450"></div><img src="/images/wardrobe/simulation/builtin/WR2014C.jpg" /><div style="position: absolute; width: '+(450/cri_no-2)+'px; margin-top: 10px; border: 1px solid black; border-top: 0; height: 10px; text-align: center; line-height: 40px;">450</div></div>');
			}
		}
		for (tb5 = 0; tb5 < list_construct_body[i][5]; tb5++) {
			$('.frame-body').append('<div id="body-'+(idx++)+'" class="body-box width-260" data-body="WR1014I" body-width="W260"><div class="body-check check-260 invisible"></div><img src="/images/wardrobe/simulation/builtin/WR1014I.jpg" /><div style="position: absolute; width: '+(260/cri_no-2)+'px; margin-top: 10px; border: 1px solid black; border-top: 0; height: 10px; text-align: center; line-height: 40px;">260</div></div>');
		}

		$('.body-box').click(function() {
			select_body(this);
		});
		break;
	}
	
	$('.frame-finish').css('margin-top', '0px');
	$('.frame-finish').width(basic_width / cri_no);
	$('.frame-finish').height(basic_height / cri_no);
	$('.finish-state').html('붙박이'); ward_bi = 'builtin';
	$('.frame-body').css('left', ($('.frame-finish').width() - $('.frame-body').width()) / 2);
	$('.frame-finish').css('background', 'url(/images/wardrobe/simulation/'+wardrobe+'/'+ward_kind+'B.jpg)');
}

function select_body(obj) {
	if (!$(obj).hasClass('selected')) {
		$('.body-box').removeClass('selected');
		$('.body-check').addClass('invisible');
	}
	
	$(obj).toggleClass('selected');
	$('#'+$(obj).attr('id')+' .body-check').toggleClass('invisible');
	
	if (!$(obj).hasClass('selected')) {
		$('#controller').addClass('invisible');
		
		current_body = '';
	} else {
		$('#controller').removeClass('invisible');
		
		current_body = $(obj).attr('id');
		
		if ($('.header-body').hasClass('controller-selected')) {
			$('.header-body').click();
		} else if ($('.header-option').hasClass('controller-selected')) {
			$('.header-option').click();
		} else if ($('.header-door').hasClass('controller-selected')) {
			$('.header-door').click();
		} else {
			$('.header-body').click();
		}
	}
}

// 몸통 박스 구성
function show_body() {
	var temp_rest = new Map();
	switch ($('#'+current_body).attr('body-width')) {
	case "W1140": temp_rest = WR1013; break;
	case "W978": temp_rest = WR1012; break;
	
	case "W1000": temp_rest = WR5014; break;
	case "W900": temp_rest = WR4014; break;
	case "W500": temp_rest = WR3014; break;
	case "W450": temp_rest = WR2014; break;
	case "W260": temp_rest = WR1014; break;
	}
	
	if (temp_rest.size() == 1) {
		$('#controller-contents').append('<li>No item</li>');
	} else {
		for (i = 0; i < temp_rest.size(); i++) {
			var item = temp_rest.keys()[i];

			if(ward_kind=='WRD577'||ward_kind=='WRD578'||ward_kind=='WRD022'||ward_kind=='WRD023'||ward_kind=='WRD543'||ward_kind=='WRD546'||ward_kind=='WRD547'||ward_kind=='WRD548'||ward_kind=='WRD533'||ward_kind=='WRD561'||ward_kind=='WRD528'||ward_kind=='WRD559'||ward_kind=='WRD579'){
				$('#controller-contents').append('<li data-body="' + item + '"><div><img src="/images/wardrobe/simulation/' + wardrobe + '/' + item +'M'+ '.jpg" height="217px" /></div><div>' + temp_rest.get(item) + '</div></li>');
			}else{
				$('#controller-contents').append('<li data-body="' + item + '"><div><img src="/images/wardrobe/simulation/' + wardrobe + '/' + item + '.jpg" height="217px" /></div><div>' + temp_rest.get(item) + '</div></li>');
			}
		}
		$('#controller-contents li').height(250);
		
		$('#controller-contents').lightSlider({
			autoWidth: true,
	        controls: false
		});
		
		$('#controller-contents img').click(function() {
			change_body(this);
		});
		
		if (isMobile) {
			$('#controller-contents img').mousemove(function() {
				change_body(this);
			});
		}
	}
}

function show_option() {
	var body_kind = $('#'+current_body).attr('data-body');
	var temp_option_rest = new Map();
	switch (body_kind) {
	case 'WR1012A': temp_option_rest = WR1012A; break;
	case 'WR1013A': temp_option_rest = WR1013A; break;
	case 'WR1012B': temp_option_rest = WR1012B; break;
	case 'WR1013B': temp_option_rest = WR1013B; break;
	case 'WR1012D': temp_option_rest = WR1012D; break;
	case 'WR1013D': temp_option_rest = WR1013D; break;
	
	case 'WR5014A': temp_option_rest = WR5014A; 
	if(ward_kind=='WRD579'){
		WR5014A.remove('BWO-0001');
		WR5014A.remove('MRC-0001');
		WR5014A.remove('MRC-0002');
	}break;
	case 'WR4014A': temp_option_rest = WR4014A; 
	if(ward_kind=='WRD579'){
		WR4014A.remove('BWO-0001');
		WR4014A.remove('MRC-0001');
		WR4014A.remove('MRC-0002');
	}break;
	case 'WR5014B': temp_option_rest = WR5014B; 
	if(ward_kind=='WRD579'){
		WR5014B.remove('BWO-0001');
		WR5014B.remove('MRC-0001');
		WR5014B.remove('MRC-0002');
	}break;
	case 'WR4014B': temp_option_rest = WR4014B; 
	if(ward_kind=='WRD579'){
		WR4014B.remove('BWO-0001');
		WR4014B.remove('MRC-0001');
		WR4014B.remove('MRC-0002');
	}break;
	case 'WR5014D': temp_option_rest = WR5014D; 
	if(ward_kind=='WRD579'){
		WR5014D.remove('BWO-0001');
		WR5014D.remove('MRC-0001');
		WR5014D.remove('MRC-0002');
	}break;
	case 'WR4014D': temp_option_rest = WR4014D; 
	if(ward_kind=='WRD579'){
		WR4014D.remove('BWO-0001');
		WR4014D.remove('MRC-0001');
		WR4014D.remove('MRC-0002');
	}break;
	
	case 'WR5105A': temp_option_rest = WR5105A; 
	if(ward_kind=='WRD579'){
		WR5105A.remove('BWO-0001');
		WR5105A.remove('MRC-0001');
		WR5105A.remove('MRC-0002');
	}break;
	case 'WR4105A': temp_option_rest = WR4105A; 
	if(ward_kind=='WRD579'){
		WR4105A.remove('BWO-0001');
		WR4105A.remove('MRC-0001');
		WR4105A.remove('MRC-0002');
	}break;
	case 'WR5105B': temp_option_rest = WR5105B; 
	if(ward_kind=='WRD579'){
		WR5105B.remove('BWO-0001');
		WR5105B.remove('MRC-0001');
		WR5105B.remove('MRC-0002');
	}break;
	case 'WR4105B': temp_option_rest = WR4105B; 
	if(ward_kind=='WRD579'){
		WR4105B.remove('BWO-0001');
		WR4105B.remove('MRC-0001');
		WR4105B.remove('MRC-0002');
	}break;
	case 'WR5105D': temp_option_rest = WR5105D; 
	if(ward_kind=='WRD579'){
		WR5105D.remove('BWO-0001');
		WR5105D.remove('MRC-0001');
		WR5105D.remove('MRC-0002');
	}break;
	case 'WR4105D': temp_option_rest = WR4105D; 
	if(ward_kind=='WRD579'){
		WR4105D.remove('BWO-0001');
		WR4105D.remove('MRC-0001');
		WR4105D.remove('MRC-0002');
	}break;
	
	case 'WR5105AI': temp_option_rest = WR5105A; 
	if(ward_kind=='WRD579'){
		WR5105A.remove('BWO-0001');
		WR5105A.remove('MRC-0001');
		WR5105A.remove('MRC-0002');
	}break;
	case 'WR4105AI': temp_option_rest = WR4105A; 
	if(ward_kind=='WRD579'){
		WR4105A.remove('BWO-0001');
		WR4105A.remove('MRC-0001');
		WR4105A.remove('MRC-0002');
	}break;
	case 'WR5105BI': temp_option_rest = WR5105B; 
	if(ward_kind=='WRD579'){
		WR5105B.remove('BWO-0001');
		WR5105B.remove('MRC-0001');
		WR5105B.remove('MRC-0002');
	}break;
	case 'WR4105BI': temp_option_rest = WR4105B; 
	if(ward_kind=='WRD579'){
		WR4105B.remove('BWO-0001');
		WR4105B.remove('MRC-0001');
		WR4105B.remove('MRC-0002');
	}break;
	case 'WR5105DI': temp_option_rest = WR5105D; 
	if(ward_kind=='WRD579'){
		WR5105D.remove('BWO-0001');
		WR5105D.remove('MRC-0001');
		WR5105D.remove('MRC-0002');
	}break;
	case 'WR4105DI': temp_option_rest = WR4105D; 
	if(ward_kind=='WRD579'){
		WR4105D.remove('BWO-0001');
		WR4105D.remove('MRC-0001');
		WR4105D.remove('MRC-0002');
	}break;
	
	case 'WR3014C': temp_option_rest = WR3014C; break;
	case 'WR2014C': temp_option_rest = WR2014C; break;
	
	case 'WR3105C': temp_option_rest = WR3014C; break;
	case 'WR2105C': temp_option_rest = WR2014C; break;

	}

	
	if (temp_option_rest.size() == 0) {
		$('#controller-contents').append('<li>No item</li>');
	} else {
		for (i = 0; i < temp_option_rest.size(); i++) {
			var item = temp_option_rest.keys()[i];
			$('#controller-contents').append('<li data-option="' + item + '"><div class="option-img"><img src="/images/wardrobe/simulation/' + wardrobe + '/' + item + '-SHOW.png" /></div><div class="option-text">' + temp_option_rest.get(item) + '</div><div class="adjust-option"><div class="add-option">추가</div><div class="sub-option">제거</div></div></li>');			
		}
		$('#controller-contents li').height(270);

		if (temp_option_rest.size() > 1) {
			$('#controller-contents').lightSlider({
				autoWidth: true,
		        controls: false
			});
		}
		
		$('.add-option').click(function() {
			var temp_option = $(this).parent().parent().attr('data-option');
			add_option(temp_option);
		});
		
		$('.sub-option').click(function() {
			var sub_option = $(this).parent().parent().attr('data-option');
			$('#'+current_body+' .option-box .'+sub_option).remove();
		});
		
		if (isMobile) {
			$('.add-option').mousemove(function() {
				var temp_option = $(this).parent().parent().attr('data-option');
				add_option(temp_option);
			});
			
			$('.sub-option').mousemove(function() {
				var sub_option = $(this).parent().parent().attr('data-option');
				$('#'+current_body+' .option-box .'+sub_option).remove();
			});
		}
	}
}

function add_option(temp_option) {
	
	var add_check = false;
	var next_option = $('#'+current_body+' .option-box').children();
	
	while (true) {
		if ($(next_option).attr('data-option') == null) break;
		
		if (temp_option == $(next_option).attr('data-option')) add_check = true;
		
		next_option = $(next_option).next();
	}
	
	if (temp_option == 'WCD-1013' || temp_option == 'WCD-1012') {
		$('#'+current_body+' .option-box .WCD-2013').remove();
		$('#'+current_body+' .option-box .WCD-2012').remove();
	} else if (temp_option == 'WCD-2013' || temp_option == 'WCD-2012') {
		$('#'+current_body+' .option-box .WCD-1013').remove();
		$('#'+current_body+' .option-box .WCD-1012').remove();
	}
	
	if (temp_option == 'MRC-0001') {
		$('#'+current_body+' .option-box .MRC-0002').remove();
	} else if (temp_option == 'MRC-0002') {
		$('#'+current_body+' .option-box .MRC-0001').remove();
	}
	if(ward_kind=='WRD577'||ward_kind=='WRD578'||ward_kind=='WRD543'||ward_kind=='WRD559'||ward_kind=='WRD546'||ward_kind=='WRD547'||ward_kind=='WRD548'||ward_kind=='WRD533'||ward_kind=='WRD561'||ward_kind=='WRD528'||ward_kind=='WRD559'||ward_kind=='WRD579'){
	if (!add_check) $('#'+current_body+' .option-box').append('<div class="option-item '+temp_option+'" data-option="'+temp_option+'" style="background: url(/images/wardrobe/simulation/'+wardrobe+'/'+temp_option+'M'+'.png); background-repeat: no-repeat; background-position: absolute;" />');
	}else{
		if (!add_check) $('#'+current_body+' .option-box').append('<div class="option-item '+temp_option+'" data-option="'+temp_option+'" style="background: url(/images/wardrobe/simulation/'+wardrobe+'/'+temp_option+'.png); background-repeat: no-repeat; background-position: absolute;" />');	
	}
	var option_width = 0;
	var body_width = $('#'+current_body).attr('body-width');

	switch (body_width) {
	case "W1140": option_width = 114; break;
	case "W978": option_width = 97.8; break;
	
	case "W1000": option_width = 100; break;
	case "W900": option_width = 90; break;
	
	case "W500": option_width = 50; break;
	case "W450": option_width = 45; break;
	}
	
	option_width = option_width / cri_no * 10;
	
	$('#'+current_body+' .option-item').css('background-size', option_width+'px '+cri_height+'px');
}

function show_door() {
	switch (wardrobe) {
	case 'slide':
		$('#controller-contents').append('<li>No item</li>');
		break;
	case 'builtin':
		if ($('#'+current_body).attr('body-width') == 'W260') {
			$('#controller-contents').append('<li>No item</li>');
		} else {
//			for (i = 0; i < BUILTIN.size(); i++) {
				var html_door = '';
//				var temp_door = BUILTIN.keys()[i];
				var temp_door = ward_kind;
				var temp_door_rest = new Map();
					
				switch (temp_door) {
				case "WRD543": temp_door_rest = WRD543; break;
				case "WRD546": temp_door_rest = WRD546; break;
				case "WRD547": temp_door_rest = WRD547; break;
				case "WRD548": temp_door_rest = WRD548; break;
				case "WRD533": temp_door_rest = WRD533; break;
				case "WRD561": temp_door_rest = WRD561; break;
				case "WRD559": temp_door_rest = WRD559; break;
				case "WRD528": temp_door_rest = WRD528; break;
				case "WRD577": temp_door_rest = WRD577; break;
				case "WRD578": temp_door_rest = WRD578; break;
				case "WRD022": temp_door_rest = WRD022; break;
				case "WRD023": temp_door_rest = WRD023; break;
				case "WRD579": temp_door_rest = WRD579; break;
				}
				for (j = 0; j < temp_door_rest.size(); j=j+2) {
					var door_left = temp_door_rest.keys()[j];
					html_door += '<li><div class="controller-door left" data-door="' + temp_door +'" door-pos="';
					if (j < 2) html_door += 'lr';
					else html_door += 'c';
					html_door += '"><div><img src="/images/wardrobe/simulation/builtin/' + door_left + '.jpg" height="217px" /></div><div class="door-text">' + temp_door_rest.get(door_left) + '</div></div>';

					var door_right = temp_door_rest.keys()[j+1];
					html_door += '<div class="controller-door right" data-door="' + temp_door +'" door-pos="';
					if (j < 2) html_door += 'lr';
					else html_door += 'c';
					html_door += '"><div><img src="/images/wardrobe/simulation/builtin/' + door_right + '.jpg" height="217px" /></div><div class="door-text">' + temp_door_rest.get(door_right) + '</div></div></li>';
				}
					
				$('#controller-contents').append(html_door);
//			}
			
				$('#controller-contents li').height(250);
				
				if (temp_door_rest.size() > 2) {
					$('#controller-contents').lightSlider({
						autoWidth: true,
						controls: false
					});
				}
			
			if ($('#'+current_body).attr('body-width') == 'W500' || $('#'+current_body).attr('body-width') == 'W450') {
				$('.controller-door.left').addClass('baw');
			}
			
			$('.controller-door img').click(function() {
				change_door(this);
			});
			
			if (isMobile) {
				$('.controller-door img').mousemove(function() {
					change_door(this);
				});
			}
		}
		break;
	}
}

function change_body(obj) {
	var src = $(obj).attr('src');
	$('#'+current_body+' img').attr('src', src);
	$('#'+current_body).attr('data-body', $(obj).parent().parent().attr('data-body'));
	$('#'+current_body+' .option-box').html('');
	
}

function change_door(obj) {
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
			$('#body-'+i+' .door-box .door-center').attr('data-door', ward_kind+'C');
			$('#body-'+i+' .door-box .door-center').css('background', 'url(/images/wardrobe/simulation/slide/'+ward_kind+'C.jpg)');
		}
		$('#'+$('.frame-body').contents(':first-child').attr('id')+' .door-box .door-center').attr('data-door', ward_kind+'L');
		$('#'+$('.frame-body').contents(':first-child').attr('id')+' .door-box .door-center').css('background', 'url(/images/wardrobe/simulation/slide/'+ward_kind+'L.jpg)');
		if (count == 2) {
			$('#'+$('.frame-body').contents(':last-child').attr('id')+' .door-box .door-center').attr('data-door', ward_kind+'C');
			$('#'+$('.frame-body').contents(':last-child').attr('id')+' .door-box .door-center').css('background', 'url(/images/wardrobe/simulation/slide/'+ward_kind+'C.jpg)');
		} else if (count > 2) {
			$('#'+$('.frame-body').contents(':last-child').attr('id')+' .door-box .door-center').attr('data-door', ward_kind+'R');
			$('#'+$('.frame-body').contents(':last-child').attr('id')+' .door-box .door-center').css('background', 'url(/images/wardrobe/simulation/slide/'+ward_kind+'R.jpg)');
		}
		$('.door-center').css('background-size', door_width+'px '+cri_height+'px');
		break;
	case 'builtin':
//		current_door = $(obj).attr('data-door');
		
		var obj_parent = $(obj).parent().parent();
		
			var body = $('#'+current_body).attr('body-width');
			var src = $(obj).attr('src');
			var pos = $(obj_parent).attr('door-pos');
			var type = '';
			
			switch (body) {
			case "W1000": type = 'lr'; door_width = 100; break;
			case "W900": type = 'lr'; door_width = 90; break;
			case "W500": type = 'r'; door_width = 100; break;
			case "W450": type = 'r'; door_width = 90; break;
			}
			
			door_width = door_width / cri_no * 5;
		
			if (type == 'lr') {
				if ($(obj_parent).hasClass('left')) {
					$('#'+current_body+' .door-left').attr('data-door', ward_kind+'L');
					$('#'+current_body+' .door-left').attr('door-pos', pos);
					$('#'+current_body+' .door-left').css('background', 'url('+src+')');
					$('#'+current_body+' .door-left').css('background-size', door_width+'px '+cri_height+'px');
				} else if ($(obj_parent).hasClass('right')) {
					$('#'+current_body+' .door-right').attr('data-door', ward_kind+'R');
					$('#'+current_body+' .door-right').attr('door-pos', pos);
					$('#'+current_body+' .door-right').css('background', 'url('+src+')');
					$('#'+current_body+' .door-right').css('background-size', door_width+'px '+cri_height+'px');
				}
			} else if (type == 'r') {
				if ($(obj_parent).hasClass('right')) {
					$('#'+current_body+' .door-center').attr('data-door', ward_kind+'R');
					$('#'+current_body+' .door-center').attr('door-pos', pos);
					$('#'+current_body+' .door-center').css('background', 'url('+src+')');
					$('#'+current_body+' .door-center').css('background-size', door_width+'px '+cri_height+'px');
				}
			}
		break;
	}
}

function door_check(nb, dwidth, dlrc, dcount) {
	var dt = door_type.get(ward_kind);
	switch (dt) {
	case 'ALR':
		if(ward_kind=='WRD578'){			
			dlrc=$('#'+$(nb).attr('id')+' .door-left').attr('door-pos')
			if(dlrc ==undefined)
				{
				dlrc = 'c';
				}
			ward_door += 'd'+dwidth+'_'+dlrc+dcount+',';	
		}else{
		ward_door += 'd'+dwidth+'_lr'+dcount+',';
		}
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




$(function(){
	$('.dr-cri-l').click(function() {
		selectCri('left');
		
		event.stopPropagation();
	});
	$('.dr-cri-r').click(function() {
		selectCri('right');
		
		event.stopPropagation();
	});
	if (isMobile) {
		$('.dr-cri-l').mouseover(function() {
			selectCri('left');
			
			event.stopPropagation();
		});
		$('.dr-cri-r').mouseover(function() {
			selectCri('right');
			
			event.stopPropagation();
		});
	}
});

var bf_cri = 'left', bl_cri = 'right', br_cri = 'left', bb_cri = 'right';
function selectCri(lr) {
	if (!$('.frame-dr-body.above').hasClass('invisible')) return;
	
	if (lr == 'left') {
		$('.dr-cri-l').addClass('dr-cri-selected');
		$('.dr-cri-r').removeClass('dr-cri-selected');
	} else if (lr == 'right') {
		$('.dr-cri-l').removeClass('dr-cri-selected');
		$('.dr-cri-r').addClass('dr-cri-selected');
	}
	
	if (!$('.frame-dr-body.forward').hasClass('invisible')) {
		if (bf_cri == lr) return;
		bf_cri = lr;
		if ($('#bf_cri').next().attr('id') == null) return;
		
		if (lr == 'left') {
			$('#bf_area div').css('float', 'left');
			$('#darea1 div').css('float', 'left');
		     var baLastId = $('#darea1').contents(':last-child').attr('id');
			
			while (true) {
				if ($('#bf_cri').next().attr('id') == bfLastId) {
					bfLastId = bfFirstId;
					bfFirstId = $('#bf_cri').next().attr('id');
					break;
				}
				$('#'+$('#bf_cri').next().attr('id')).insertAfter('#'+bfLastId);
				$('#'+$('#darea1').contents(':first-child').attr('id')).insertAfter('#'+baLastId);
			}
		} else if (lr == 'right') {
			$('#bf_area div').css('float', 'right');
			$('#darea1 div').css('float', 'right');
			var baLastId = $('#darea1').contents(':last-child').attr('id');
			
			while (true) {
				if ($('#bf_cri').next().attr('id') == bfLastId) {
					bfLastId = bfFirstId;
					bfFirstId = $('#bf_cri').next().attr('id');
					break;
				}
				$('#'+$('#bf_cri').next().attr('id')).insertAfter('#'+bfLastId);
				$('#'+$('#darea1').contents(':first-child').attr('id')).insertAfter('#'+baLastId);
			}
		}
		showSize(1);
	} else if (!$('.frame-dr-body.left').hasClass('invisible')) {
		if (bl_cri == lr) return;
		bl_cri = lr;
		if ($('#bl_cri').next().attr('id') == null) return;
		
		if (lr == 'left') {
			$('#bl_area div').css('float', 'left');
			$('#darea2 div').css('float', 'left');
		     var baLastId = $('#darea2').contents(':last-child').attr('id');
			
			while (true) {
				if ($('#bl_cri').next().attr('id') == blLastId) {
					blLastId = blFirstId;
					blFirstId = $('#bl_cri').next().attr('id');
					break;
				}
				$('#'+$('#bl_cri').next().attr('id')).insertAfter('#'+blLastId);
				$('#'+$('#darea2').contents(':first-child').attr('id')).insertAfter('#'+baLastId);
			}
		} else if (lr == 'right') {
			$('#bl_area div').css('float', 'right');
			$('#darea2 div').css('float', 'right');
			var baLastId = $('#darea2').contents(':last-child').attr('id');
			
			while (true) {
				if ($('#bl_cri').next().attr('id') == blLastId) {
					blLastId = blFirstId;
					blFirstId = $('#bl_cri').next().attr('id');
					break;
				}
				$('#'+$('#bl_cri').next().attr('id')).insertAfter('#'+blLastId);
				$('#'+$('#darea2').contents(':first-child').attr('id')).insertAfter('#'+baLastId);
			}
		}
		showSize(2);
	} else if (!$('.frame-dr-body.right').hasClass('invisible')) {
		if (br_cri == lr) return;
		br_cri = lr;
		if ($('#br_cri').next().attr('id') == null) return;
		
		if (lr == 'left') {
			$('#br_area div').css('float', 'left');
			$('#darea3 div').css('float', 'left');
		     var baLastId = $('#darea3').contents(':last-child').attr('id');
			
			while (true) {
				if ($('#br_cri').next().attr('id') == brLastId) {
					brLastId = brFirstId;
					brFirstId = $('#br_cri').next().attr('id');
					break;
				}
				$('#'+$('#br_cri').next().attr('id')).insertAfter('#'+brLastId);
				$('#'+$('#darea3').contents(':first-child').attr('id')).insertAfter('#'+baLastId);
			}
		} else if (lr == 'right') {
			$('#br_area div').css('float', 'right');
			$('#darea3 div').css('float', 'right');
			var baLastId = $('#darea3').contents(':last-child').attr('id');
			
			while (true) {
				if ($('#br_cri').next().attr('id') == brLastId) {
					brLastId = brFirstId;
					brFirstId = $('#br_cri').next().attr('id');
					break;
				}
				$('#'+$('#br_cri').next().attr('id')).insertAfter('#'+brLastId);
				$('#'+$('#darea3').contents(':first-child').attr('id')).insertAfter('#'+baLastId);
			}
		}
		showSize(3);
	} else if (!$('.frame-dr-body.backward').hasClass('invisible')) {
		if (bb_cri == lr) return;
		bb_cri = lr;
		if ($('#bb_cri').next().attr('id') == null) return;
		
		if (lr == 'left') {
			$('#bb_area div').css('float', 'left');
			$('#darea4 div').css('float', 'left');
		     var baLastId = $('#darea4').contents(':last-child').attr('id');
			
			while (true) {
				if ($('#bb_cri').next().attr('id') == bbLastId) {
					bbLastId = bbFirstId;
					bbFirstId = $('#bb_cri').next().attr('id');
					break;
				}
				$('#'+$('#bb_cri').next().attr('id')).insertAfter('#'+bbLastId);
				$('#'+$('#darea4').contents(':first-child').attr('id')).insertAfter('#'+baLastId);
			}
		} else if (lr == 'right') {
			$('#bb_area div').css('float', 'right');
			$('#darea4 div').css('float', 'right');
			var baLastId = $('#darea4').contents(':last-child').attr('id');
			
			while (true) {
				if ($('#bb_cri').next().attr('id') == bbLastId) {
					bbLastId = bbFirstId;
					bbFirstId = $('#bb_cri').next().attr('id');
					break;
				}
				$('#'+$('#bb_cri').next().attr('id')).insertAfter('#'+bbLastId);
				$('#'+$('#darea4').contents(':first-child').attr('id')).insertAfter('#'+baLastId);
			}
		}
		showSize(4);
	}
}

var bfFirstId = '', bfLastId = '', bf_sum = 0;
var blFirstId = '', blLastId = '', bl_sum = 0;
var brFirstId = '', brLastId = '', br_sum = 0;
var bbFirstId = '', bbLastId = '', bb_sum = 0;
var drCnt = 0;

function addDr(obj) {
	var wk = $('#kind').val();
	var drKind = $(obj).attr('data-dr-kind');
	var dwr = Number($(obj).attr('data-dwr'));
	
	var tempWidth = 0;
	var tempKind = '';
	var tempText = '';
	var tempTopBoard = 'N', tempSideBoard = 'N';
	switch (drKind) {
	case 'DK001':
		switch (dwr) {
		case 900: tempKind = '900_a1_a'; break;
		case 1000:tempKind = '1000_k1_1';break;
		}
		tempText = dwr+'<br>이불장';
		break;
	case 'DK002':
		switch (dwr) {
		case 1000: 
			switch (ward_kind) {
			case 'WRD257':tempKind = '1000_a1_1';break;
			case 'WRD999':tempKind = '1000_e1';break;
			}break;
		case 900: tempKind = '900_b1'; break;
		case 800: tempKind = '800_a1_a'; tempSideBoard = 'Y'; break;
		case 600: tempKind = '600_a1'; tempSideBoard = 'Y'; break;
		}
		tempText = dwr+'<br>옷장';
		break;
	case 'DK003':
		switch (dwr) {
		case 1000: tempKind = '1000_f1'; break;
		case 800: tempKind = '800_b1'; tempSideBoard = 'Y'; break;
		case 600: tempKind = '600_b1'; tempSideBoard = 'Y'; break;
		case 400: tempKind = '400_b'; break;
		}
		tempText = dwr+'<br>정리장';
		break;
	case 'DK004':
		switch (dwr) {
		case 800: tempKind = '800_c1_a'; tempTopBoard = 'Y'; break;
		}
		tempText = dwr+'<br>옵션장';
		break;
	case 'DK005':
		switch (dwr) {
		case 800: tempKind = '800_d1'; tempTopBoard = 'Y'; break;
		}
		tempText = dwr+'<br>3단서랍';
		break;
	case 'DK006':
		switch (dwr) {
		case 800: tempKind = '800_e1'; tempTopBoard = 'Y'; break;
		}
		tempText = dwr+'<br>수납박스';
		break;
	case 'DK007':
		switch (dwr) {
		case 1000: tempKind = '1000_h2'; break;
		case 400: tempKind = '400_a1'; break;
		}
		tempText = dwr+'<br>코디장';
		break;
	case 'DK008':
		switch (dwr) {
		case 900: tempKind = '900_c1'; break;
		}
		tempText = dwr+'<br>서랍형옷장';
		break;
	case 'DK009':
		switch (dwr) {
		case 1000: tempKind = '1000_b1'; break;
		}
		tempText = dwr+'<br>TV장';
		break;
	case 'DK010':
		switch (dwr) {
		case 1000: tempKind = '1000_c1'; break;
		}
		tempText = dwr+'<br>독서실책상';
		break;
	case 'DK011':
		switch (dwr) {
		case 1000: tempKind = '1000_d1'; break;
		case 600: tempKind = '600_c1'; break;
		}
		tempText = dwr+'<br>화장대장';
		break;
	case 'DK012':
		switch (dwr) {
		case 290: tempKind = '290_a1'; break;
		}
		tempText = dwr+'<br>코너장';
		break;
	case 'DK013':
		switch (dwr) {
		case 1000: tempKind = '1000_g1'; break;
		}
		tempText = dwr+'<br>액세서리';
		break;
	case 'DK014':
		switch (dwr) {
		case 1000:
		switch (ward_kind) {
			case 'WRD257':tempKind = '1000_l1_1';break;
			case 'WRD999':tempKind = '1000_h1';break;
		}break;
		}
		tempText = dwr+'<br>칸막이';
		break;
	case 'DK015':
		switch (dwr) {
		case 1000: tempKind = '1000_i1'; break;
		}
		tempText = dwr+'<br>1단서랍';
		break;
	case 'DK016':
		switch (dwr) {
		case 1000: tempKind = '1000_j1'; break;
		}
		tempText = dwr+'<br>2단서랍';
		break;
	}
	
	if (!$('.frame-dr-body.forward').hasClass('invisible')) {
		tempWidth = dwr / 10;
//		if (direction == 'darea1' && bf_sum + tempWidth <= bfWidth) {
		if (bf_sum + tempWidth <= bfWidth) {
			if(ward_kind=='WRD257'){
				$('#bf_area').append('<div id="bfid'+drCnt+'" class="dr-body dr_b' + tempKind + '" data-idx="'+drCnt+'" data-width="'+tempWidth+'" data-top-board="'+tempTopBoard+'" data-side-board="'+tempSideBoard+'" style="float: ' + bf_cri + '"><div id="fid' + drCnt + '" class="dr-check df' + dwr + ' invisible"></div><div id="fid' + drCnt + '" class="door-box door' + tempKind + '"></div></div>');
			}else{
				$('#bf_area').append('<div id="bfid'+drCnt+'" class="dr-body dr_b' + tempKind + '" data-idx="'+drCnt+'" data-width="'+tempWidth+'" data-top-board="'+tempTopBoard+'" data-side-board="'+tempSideBoard+'" style="float: ' + bf_cri + '"><div id="fid' + drCnt + '" class="dr-check df' + dwr + ' invisible"></div></div>');
			}
			$('.dr_b' + tempKind).css('background', 'url(\'/images/wardrobe/simulation/dressroom/'+ward_kind+'/b' + tempKind + '.png\')');
			$('.door' + tempKind).css('background', 'url(\'/images/wardrobe/simulation/dressroom/'+ward_kind+'/dr' + tempKind + '.png\')');
			$('#darea1').append('<div id="baid'+drCnt+'" class="dr_u' + dwr + '" style="float: ' + bf_cri + '; font-size: 10pt; text-align: center;">' + tempText + '</div>');
			$('.dr_u' + dwr).css('background', 'url(\'/images/wardrobe/simulation/dressroom/'+ward_kind+'/u' + dwr + '.png\')');
			bf_sum += tempWidth;
			bfLastId = 'bfid'+drCnt;
			drCnt++;
			showSize(1);
			$('#info_dr_f').show();
		} else {
			showAlert('공간이 부족합니다');
		}
		bfFirstId = $('#bf_cri').next().attr('id');
	}
	
	if (!$('.frame-dr-body.left').hasClass('invisible')) {
		tempWidth = dwr / 10;
//		if (direction == 'darea2' && bl_sum + tempWidth <= blrWidth) {
		if (bl_sum + tempWidth <= blrWidth) {
			$('#bl_area').append('<div id="blid'+drCnt+'" class="dr-body dr_b' + tempKind + '" data-idx="'+drCnt+'" data-width="'+tempWidth+'" data-top-board="'+tempTopBoard+'" data-side-board="'+tempSideBoard+'" style="float: ' + bl_cri + '"><div id="fid' + drCnt + '" class="dr-check df' + dwr + ' invisible"></div></div>');
			$('.dr_b' + tempKind).css('background', 'url(\'/images/wardrobe/simulation/dressroom/'+ward_kind+'/b' + tempKind + '.png\')');
			$('#darea2').append('<div id="baid'+drCnt+'" class="dr_u' + dwr + '" style="float: ' + bl_cri + '; font-size: 10pt; text-align: center;">' + tempText + '</div>');
			$('.dr_u' + dwr).css('background', 'url(\'/images/wardrobe/simulation/dressroom/'+ward_kind+'/u' + dwr + '.png\')');
			bl_sum += tempWidth;
			blLastId = 'blid'+drCnt;
			drCnt++;
		} else {
			showAlert('공간이 부족합니다');
		}
		blFirstId = $('#bl_cri').next().attr('id');
		showSize(2);
		$('#info_dr_l').show();
	}
	
	if (!$('.frame-dr-body.right').hasClass('invisible')) {
		tempWidth = dwr / 10;
//		if (direction == 'darea3' && br_sum + tempWidth <= blrWidth) {
		if (br_sum + tempWidth <= blrWidth) {
			$('#br_area').append('<div id="brid'+drCnt+'" class="dr-body dr_b' + tempKind + '" data-idx="'+drCnt+'" data-width="'+tempWidth+'" data-top-board="'+tempTopBoard+'" data-side-board="'+tempSideBoard+'" style="float: ' + br_cri + '"><div id="fid' + drCnt + '" class="dr-check df' + dwr + ' invisible"></div></div>');
			$('.dr_b' + tempKind).css('background', 'url(\'/images/wardrobe/simulation/dressroom/'+ward_kind+'/b' + tempKind + '.png\')');
			$('#darea3').append('<div id="baid'+drCnt+'" class="dr_u' + dwr + '" style="float: ' + br_cri + '; font-size: 10pt; text-align: center;">' + tempText + '</div>');
			$('.dr_u' + dwr).css('background', 'url(\'/images/wardrobe/simulation/dressroom/'+ward_kind+'/u' + dwr + '.png\')');
			br_sum += tempWidth;
			brLastId = 'brid'+drCnt;
			drCnt++;
		} else {
			showAlert('공간이 부족합니다');
		}
		brFirstId = $('#br_cri').next().attr('id');
		showSize(3);
		$('#info_dr_r').show();
	}
	
	if (!$('.frame-dr-body.backward').hasClass('invisible')) {
		tempWidth = dwr / 10;
//		if (direction == 'darea4' && bb_sum + tempWidth <= bfWidth) {
		if (bb_sum + tempWidth <= bfWidth) {
			$('#bb_area').append('<div id="bbid'+drCnt+'" class="dr-body dr_b' + tempKind + '" data-idx="'+drCnt+'" data-width="'+tempWidth+'" data-top-board="'+tempTopBoard+'" data-side-board="'+tempSideBoard+'" style="float: ' + bb_cri + '"><div id="fid' + drCnt + '" class="dr-check df' + dwr + ' invisible"></div></div>');
			$('.dr_b' + tempKind).css('background', 'url(\'/images/wardrobe/simulation/dressroom/'+ward_kind+'/b' + tempKind + '.png\')');
			$('#darea4').append('<div id="baid'+drCnt+'" class="dr_u' + dwr + '" style="float: ' + bb_cri + '; -ms-transform: rotate(180deg); -webkit-transform: rotate(180deg); -moz-transform: rotate(180deg); -o-transform: rotate(180deg); transform: rotate(180deg); font-size: 10pt; text-align: center;">' + tempText + '</div>');
			$('.dr_u' + dwr).css('background', 'url(\'/images/wardrobe/simulation/dressroom/'+ward_kind+'/u' + dwr + '.png\')');
			bb_sum += tempWidth;
			bbLastId = 'bbid'+drCnt;
			drCnt++;
		} else {
			showAlert('공간이 부족합니다');
		}
		bbFirstId = $('#bb_cri').next().attr('id');
		showSize(4);
		$('#info_dr_b').show();
	}
	if(ward_kind=='WRD257'){
		$('.dr_u600').css('height','62px');
		$('.dr_u600_b').css('height','62px');
		$('.dr_u600_l').css('width','62px');
		$('.dr_u600_r').css('width','62px');
	}
	$('#tableItem').html('');
	$('#workBar').removeClass('invisible');
	$('#workBar').fadeIn();
	
	$('#tableItem').html('');
	
	$('.dr-body').off('click');
	$('.dr-body').click(function() {
		if ($('#'+$(this).attr('id')+' .dr-check').hasClass('invisible')) {
			$('.dr-check').addClass('invisible');
			$('#'+$(this).attr('id')+' .dr-check').removeClass('invisible');
			$('#controller-dr').removeClass('invisible');
			current_body = $(this).attr('id');
			
			if ($('.dr-header-body').hasClass('controller-selected')) {
				$('.dr-header-body').click();
			} else if ($('.dr-header-option').hasClass('controller-selected')) {
				$('.dr-header-option').click();
			} else {
				$('.dr-header-body').click();
			}
		} else {
			$('#'+$(this).attr('id')+' .dr-check').addClass('invisible');
			$('#controller-dr').addClass('invisible');
			current_body = '';
		}
	});
}

function showSize(n) {
	if(ward_kind!='WRD999'){
	switch (n) {
	case 1:
		if ($('#dcorner1').hasClass('on_corner') && $('#dcorner2').hasClass('on_corner')) {
			$('.dc1_f').remove();
			$('.dc2_f').remove();
			$('#dsize1').addClass('invisible');
			$('#dcorner1').append('<div class="dc1_f" style="width: 78px; height: 20px; top: -20px; position: absolute; border-left: 1px solid black; border-right: 1px solid black;"><div style="width: 20px; float: left;"><hr></div><div style="width: 38px; float: left; font-size:8pt; text-align: center; cursor: default;">800</div><div style="width: 20px; float: left;"><hr></div></div>');
			$('#dcorner2').append('<div class="dc2_f" style="width: 78px; height: 20px; top: -20px; position: absolute; border-left: 1px solid black; border-right: 1px solid black;"><div style="width: 20px; float: left;"><hr></div><div style="width: 38px; float: left; font-size:8pt; text-align: center; cursor: default;">800</div><div style="width: 20px; float: left;"><hr></div></div>');
			
			if (bf_sum == bfWidth) {
				$('.dc1_f').remove();
				$('.dc2_f').remove();
				changeSize(1, 0, 0, '');
			} else if (bf_sum > 160) {
				if (bf_cri == 'left') {
					$('.dc1_f').remove();
					changeSize(1, 80, 0, '');
				} else if (bf_cri == 'right') {
					$('.dc2_f').remove();
					changeSize(1, 80, '', 0);
				}
			}
		} else if ($('#dcorner1').hasClass('on_corner') && !$('#dcorner2').hasClass('on_corner')) {
			$('.dc1_f').remove();
			$('.dc2_f').remove();
			$('#dsize1').addClass('invisible');
			$('#dcorner1').append('<div class="dc1_f" style="width: 78px; height: 20px; top: -20px; position: absolute; border-left: 1px solid black; border-right: 1px solid black;"><div style="width: 20px; float: left;"><hr></div><div style="width: 38px; float: left; font-size:8pt; text-align: center; cursor: default;">800</div><div style="width: 20px; float: left;"><hr></div></div>');
			
			if (bf_sum == bfWidth) {
				$('.dc1_f').remove();
				changeSize(1, 0, 0, '');
			} else if (bf_sum > 80) {
				if (bf_cri == 'left') {
					$('.dc1_f').remove();
					changeSize(1, 0, 0, '');
				} else if (bf_cri == 'right') {
					changeSize(1, 80, '', 0);
				}
			}
		} else if (!$('#dcorner1').hasClass('on_corner') && $('#dcorner2').hasClass('on_corner')) {
			$('.dc1_f').remove();
			$('.dc2_f').remove();
			$('#dsize1').addClass('invisible');
			$('#dcorner2').append('<div class="dc2_f" style="width: 78px; height: 20px; top: -20px; position: absolute; border-left: 1px solid black; border-right: 1px solid black;"><div style="width: 20px; float: left;"><hr></div><div style="width: 38px; float: left; font-size:8pt; text-align: center; cursor: default;">800</div><div style="width: 20px; float: left;"><hr></div></div>');
			
			if (bf_sum == bfWidth) {
				$('.dc2_f').remove();
				changeSize(1, 0, '', 0);
			} else if (bf_sum > 80) {
				if (bf_cri == 'left') {
					changeSize(1, 80, 0, '');
				} else if (bf_cri == 'right') {
					$('.dc2_f').remove();
					changeSize(1, 0, '', 0);
				}
			}
		} else if (!$('#dcorner1').hasClass('on_corner') && !$('#dcorner2').hasClass('on_corner')) {
			$('.dc1_f').remove();
			$('.dc2_f').remove();
			$('#dsize1').addClass('invisible');
			
			if (bf_sum > 0) {
				if (bf_cri == 'left') {
					changeSize(1, 0, 0, '');
				} else if (bf_cri == 'right') {
					changeSize(1, 0, '', 0);
				}
			}
		}
	break;
	case 2:
		if ($('#dcorner1').hasClass('on_corner') && $('#dcorner3').hasClass('on_corner')) {
			$('.dc1_l').remove();
			$('.dc3_l').remove();
			$('#dsize2').addClass('invisible');
			$('#dcorner1').append('<div class="dc1_l" style="width: 78px; height: 20px; position: absolute; border-left: 1px solid black; border-right: 1px solid black; -ms-transform: rotate(270deg) translate(-30px, -50px); -webkit-transform: rotate(270deg) translate(-30px, -50px); -moz-transform: rotate(270deg) translate(-30px, -50px); -o-transform: rotate(270deg) translate(-30px, -50px); transform: rotate(270deg) translate(-30px, -50px);"><div style="width: 20px; float: left;"><hr></div><div style="width: 38px; float: left; font-size:8pt; text-align: center; cursor: default;">800</div><div style="width: 20px; float: left;"><hr></div></div>');
			$('#dcorner3').append('<div class="dc3_l" style="width: 78px; height: 20px; position: absolute; border-left: 1px solid black; border-right: 1px solid black; -ms-transform: rotate(270deg) translate(-30px, -50px); -webkit-transform: rotate(270deg) translate(-30px, -50px); -moz-transform: rotate(270deg) translate(-30px, -50px); -o-transform: rotate(270deg) translate(-30px, -50px); transform: rotate(270deg) translate(-30px, -50px);"><div style="width: 20px; float: left;"><hr></div><div style="width: 38px; float: left; font-size:8pt; text-align: center; cursor: default;">800</div><div style="width: 20px; float: left;"><hr></div></div>');
			
			if (bl_sum == blrWidth) {
				$('.dc1_l').remove();
				$('.dc3_l').remove();
				changeSize(2, 0, 9, 9);
			} else if (bl_sum > 160) {
				if (bl_cri == 'left') {
					$('.dc3_l').remove();
					changeSize(2, 80, 9,  (blrWidth-bl_sum+80-8)*-1);
				} else if (bl_cri == 'right') {
					$('.dc1_l').remove();
					changeSize(2, 80, 9, 9);
				}
			}
		} else if ($('#dcorner1').hasClass('on_corner') && !$('#dcorner3').hasClass('on_corner')) {
			$('.dc1_l').remove();
			$('.dc3_l').remove();
			$('#dsize2').addClass('invisible');
			$('#dcorner1').append('<div class="dc1_l" style="width: 78px; height: 20px; position: absolute; border-left: 1px solid black; border-right: 1px solid black; -ms-transform: rotate(270deg) translate(-30px, -50px); -webkit-transform: rotate(270deg) translate(-30px, -50px); -moz-transform: rotate(270deg) translate(-30px, -50px); -o-transform: rotate(270deg) translate(-30px, -50px); transform: rotate(270deg) translate(-30px, -50px);"><div style="width: 20px; float: left;"><hr></div><div style="width: 38px; float: left; font-size:8pt; text-align: center; cursor: default;">800</div><div style="width: 20px; float: left;"><hr></div></div>');
			
			if (bl_sum == blrWidth) {
				$('.dc1_l').remove();
				changeSize(2, 0, 9, 9);
			} else if (bl_sum > 80) {
				if (bl_cri == 'left') {
					changeSize(2, 80, 9,  (blrWidth-bl_sum+80-8)*-1);
				} else if (bl_cri == 'right') {
					$('.dc1_l').remove();
					changeSize(2, 0, 9, 9);
				}
			}
		} else if (!$('#dcorner1').hasClass('on_corner') && $('#dcorner3').hasClass('on_corner')) {
			$('.dc1_l').remove();
			$('.dc3_l').remove();
			$('#dsize2').addClass('invisible');
			$('#dcorner3').append('<div class="dc3_l" style="width: 78px; height: 20px; position: absolute; border-left: 1px solid black; border-right: 1px solid black; -ms-transform: rotate(270deg) translate(-30px, -50px); -webkit-transform: rotate(270deg) translate(-30px, -50px); -moz-transform: rotate(270deg) translate(-30px, -50px); -o-transform: rotate(270deg) translate(-30px, -50px); transform: rotate(270deg) translate(-30px, -50px);"><div style="width: 20px; float: left;"><hr></div><div style="width: 38px; float: left; font-size:8pt; text-align: center; cursor: default;">800</div><div style="width: 20px; float: left;"><hr></div></div>');
			
			if (bl_sum == blrWidth) {
				$('.dc3_l').remove();
				changeSize(2, 0, 9, 9);
			} else if (bl_sum > 80) {
				if (bl_cri == 'left') {
					$('.dc3_l').remove();
					changeSize(2, 0, 9,  (blrWidth-bl_sum-8)*-1);
				} else if (bl_cri == 'right') {
					changeSize(2, 80, 9, 9);
				}
			}
		} else if (!$('#dcorner1').hasClass('on_corner') && !$('#dcorner3').hasClass('on_corner')) {
			$('.dc1_l').remove();
			$('.dc3_l').remove();
			$('#dsize2').addClass('invisible');
			
			if (bl_sum > 0) {
				if (bl_cri == 'left') {
					changeSize(2, 0, 9,  (blrWidth-bl_sum-8)*-1);
				} else if (bl_cri == 'right') {
					changeSize(2, 0, 9, 9);
				}
			}
		}
	break;
	case 3:
		if ($('#dcorner2').hasClass('on_corner') && $('#dcorner4').hasClass('on_corner')) {
			$('.dc2_r').remove();
			$('.dc4_r').remove();
			$('#dsize3').addClass('invisible');
			$('#dcorner2').append('<div class="dc2_r" style="width: 78px; height: 20px; position: absolute; border-left: 1px solid black; border-right: 1px solid black; -ms-transform: rotate(90deg) translate(30px, -50px); -webkit-transform: rotate(90deg) translate(30px, -50px); -moz-transform: rotate(90deg) translate(30px, -50px); -o-transform: rotate(90deg) translate(30px, -50px); transform: rotate(90deg) translate(30px, -50px);"><div style="width: 20px; float: left;"><hr></div><div style="width: 38px; float: left; font-size:8pt; text-align: center; cursor: default;">800</div><div style="width: 20px; float: left;"><hr></div></div>');
			$('#dcorner4').append('<div class="dc4_r" style="width: 78px; height: 20px; position: absolute; border-left: 1px solid black; border-right: 1px solid black; -ms-transform: rotate(90deg) translate(30px, -50px); -webkit-transform: rotate(90deg) translate(30px, -50px); -moz-transform: rotate(90deg) translate(30px, -50px); -o-transform: rotate(90deg) translate(30px, -50px); transform: rotate(90deg) translate(30px, -50px);"><div style="width: 20px; float: left;"><hr></div><div style="width: 38px; float: left; font-size:8pt; text-align: center; cursor: default;">800</div><div style="width: 20px; float: left;"><hr></div></div>');
			
			if (br_sum == blrWidth) {
				$('.dc2_r').remove();
				$('.dc4_r').remove();
				changeSize(3, 0, 9, 9);
			} else if (br_sum > 160) {
				if (br_cri == 'left') {
					$('.dc2_r').remove();
					changeSize(3, 80, 9, 9);
				} else if (br_cri == 'right') {
					$('.dc4_r').remove();
					changeSize(3, 80, 9,  (blrWidth-br_sum+80-8)*-1);
				}
			}
		} else if ($('#dcorner2').hasClass('on_corner') && !$('#dcorner4').hasClass('on_corner')) {
			$('.dc2_r').remove();
			$('.dc4_r').remove();
			$('#dsize3').addClass('invisible');
			$('#dcorner2').append('<div class="dc2_r" style="width: 78px; height: 20px; position: absolute; border-left: 1px solid black; border-right: 1px solid black; -ms-transform: rotate(90deg) translate(30px, -50px); -webkit-transform: rotate(90deg) translate(30px, -50px); -moz-transform: rotate(90deg) translate(30px, -50px); -o-transform: rotate(90deg) translate(30px, -50px); transform: rotate(90deg) translate(30px, -50px);"><div style="width: 20px; float: left;"><hr></div><div style="width: 38px; float: left; font-size:8pt; text-align: center; cursor: default;">800</div><div style="width: 20px; float: left;"><hr></div></div>');
			
			if (br_sum == blrWidth) {
				$('.dc2_r').remove();
				changeSize(3, 0, 9, 9);
			} else if (br_sum > 80) {
				if (br_cri == 'left') {
					$('.dc2_r').remove();
					changeSize(3, 0, 9, 9);
				} else if (br_cri == 'right') {
					changeSize(3, 80, 9,  (blrWidth-br_sum+80-8)*-1);
				}
			}
		} else if (!$('#dcorner2').hasClass('on_corner') && $('#dcorner4').hasClass('on_corner')) {
			$('.dc2_r').remove();
			$('.dc4_r').remove();
			$('#dsize3').addClass('invisible');
			$('#dcorner4').append('<div class="dc4_r" style="width: 78px; height: 20px; position: absolute; border-left: 1px solid black; border-right: 1px solid black; -ms-transform: rotate(90deg) translate(30px, -50px); -webkit-transform: rotate(90deg) translate(30px, -50px); -moz-transform: rotate(90deg) translate(30px, -50px); -o-transform: rotate(90deg) translate(30px, -50px); transform: rotate(90deg) translate(30px, -50px);"><div style="width: 20px; float: left;"><hr></div><div style="width: 38px; float: left; font-size:8pt; text-align: center; cursor: default;">800</div><div style="width: 20px; float: left;"><hr></div></div>');
			
			if (br_sum == blrWidth) {
				$('.dc4_r').remove();
				changeSize(3, 0, 9, 9);
			} else if (br_sum > 80) {
				if (br_cri == 'left') {
					changeSize(3, 80, 9, 9);
				} else if (br_cri == 'right') {
					$('.dc4_r').remove();
					changeSize(3, 0, 9,  (blrWidth-br_sum-8)*-1);
				}
			}
		} else if (!$('#dcorner2').hasClass('on_corner') && !$('#dcorner4').hasClass('on_corner')) {
			$('.dc2_r').remove();
			$('.dc4_r').remove();
			$('#dsize3').addClass('invisible');
			
			if (br_sum > 0) {
				if (br_cri == 'left') {
					changeSize(3, 0, 9, 9);
				} else if (br_cri == 'right') {
					changeSize(3, 0, 9,  (blrWidth-br_sum-8)*-1);
				}
			}
		}
	break;
	case 4:
		if ($('#dcorner3').hasClass('on_corner') && $('#dcorner4').hasClass('on_corner')) {
			$('.dc3_b').remove();
			$('.dc4_b').remove();
			$('#dsize4').addClass('invisible');
			$('#dcorner3').append('<div class="dc3_b" style="width: 78px; height: 20px; bottom: -20px; position: absolute; border-left: 1px solid black; border-right: 1px solid black;"><div style="width: 20px; float: left;"><hr></div><div style="width: 38px; float: left; font-size:8pt; text-align: center; cursor: default;">800</div><div style="width: 20px; float: left;"><hr></div></div>');
			$('#dcorner4').append('<div class="dc4_b" style="width: 78px; height: 20px; bottom: -20px; position: absolute; border-left: 1px solid black; border-right: 1px solid black;"><div style="width: 20px; float: left;"><hr></div><div style="width: 38px; float: left; font-size:8pt; text-align: center; cursor: default;">800</div><div style="width: 20px; float: left;"><hr></div></div>');
			
			if (bb_sum == bfWidth) {
				$('.dc3_b').remove();
				$('.dc4_b').remove();
				changeSize(4, 0, 0, '');
			} else if (bb_sum > 160) {
				if (bb_cri == 'left') {
					$('.dc4_b').remove();
					changeSize(4, 80, '', 0);
				} else if (bb_cri == 'right') {
					$('.dc3_b').remove();
					changeSize(4, 80, 0, '');
				}
			}
		} else if ($('#dcorner3').hasClass('on_corner') && !$('#dcorner4').hasClass('on_corner')) {
			$('.dc3_b').remove();
			$('.dc4_b').remove();
			$('#dsize4').addClass('invisible');
			$('#dcorner3').append('<div class="dc3_b" style="width: 78px; height: 20px; bottom: -20px; position: absolute; border-left: 1px solid black; border-right: 1px solid black;"><div style="width: 20px; float: left;"><hr></div><div style="width: 38px; float: left; font-size:8pt; text-align: center; cursor: default;">800</div><div style="width: 20px; float: left;"><hr></div></div>');
			
			if (bb_sum == bfWidth) {
				$('.dc3_b').remove();
				changeSize(4, 0, 0, '');
			} else if (bb_sum > 80) {
				if (bb_cri == 'left') {
					changeSize(4, 80, '', 0);
				} else if (bb_cri == 'right') {
					$('.dc3_b').remove();
					changeSize(4, 0, 0, '');
				}
			}
		} else if (!$('#dcorner3').hasClass('on_corner') && $('#dcorner4').hasClass('on_corner')) {
			$('.dc3_b').remove();
			$('.dc4_b').remove();
			$('#dsize4').addClass('invisible');
			$('#dcorner4').append('<div class="dc4_b" style="width: 78px; height: 20px; bottom: -20px; position: absolute; border-left: 1px solid black; border-right: 1px solid black;"><div style="width: 20px; float: left;"><hr></div><div style="width: 38px; float: left; font-size:8pt; text-align: center; cursor: default;">800</div><div style="width: 20px; float: left;"><hr></div></div>');
			
			if (bb_sum == bfWidth) {
				$('.dc4_b').remove();
				changeSize(4, 0, '', 0);
			} else if (bb_sum > 80) {
				if (bb_cri == 'left') {
					$('.dc4_b').remove();
					changeSize(4, 0, '', 0);
				} else if (bb_cri == 'right') {
					changeSize(4, 80, 0, '');
				}
			}
		} else if (!$('#dcorner3').hasClass('on_corner') && !$('#dcorner4').hasClass('on_corner')) {
			$('.dc3_b').remove();
			$('.dc4_b').remove();
			$('#dsize4').addClass('invisible');
			
			if (bb_sum > 0) {
				if (bb_cri == 'left') {
					changeSize(4, 0, '', 0);
				} else if (bb_cri == 'right') {
					changeSize(4, 0, 0, '');
				}
			}
		}
	break;
	}
	}else if(ward_kind=='WRD999'){
		switch (n) {
		case 1:
			if ($('#dcorner1').hasClass('on_corner') && $('#dcorner2').hasClass('on_corner')) {
				$('.dc1_f').remove();
				$('.dc2_f').remove();
				$('#dsize1').addClass('hidden');
				$('#dcorner1').append('<div class="dc1_f" style="width: 94.5px; height: 20px; top: -20px; position: absolute; border-left: 1px solid black; border-right: 1px solid black;"><div style="width: 20px; float: left;"><hr></div><div style="width: 40px; float: left; font-size:8pt; text-align: center; cursor: default;">965</div><div style="width: 20px; float: left;"><hr></div></div>');
				$('#dcorner2').append('<div class="dc2_f" style="width: 94.5px; height: 20px; top: -20px; position: absolute; border-left: 1px solid black; border-right: 1px solid black;"><div style="width: 20px; float: left;"><hr></div><div style="width: 40px; float: left; font-size:8pt; text-align: center; cursor: default;">965</div><div style="width: 20px; float: left;"><hr></div></div>');
				
				if (bf_sum == bfWidth) {
					$('.dc1_f').remove();
					$('.dc2_f').remove();
					changeSize(1, 0, 0, '');
				} else if (bf_sum > 193) {
					if (bf_cri == 'left') {
						$('.dc1_f').remove();
						changeSize(1, 96.5, 0, '');
					} else if (bf_cri == 'right') {
						$('.dc2_f').remove();
						changeSize(1, 96.5, '', 0);
					}
				}
			} else if ($('#dcorner1').hasClass('on_corner') && !$('#dcorner2').hasClass('on_corner')) {
				$('.dc1_f').remove();
				$('.dc2_f').remove();
				$('#dsize1').addClass('hidden');
				$('#dcorner1').append('<div class="dc1_f" style="width: 94.5px; height: 20px; top: -20px; position: absolute; border-left: 1px solid black; border-right: 1px solid black;"><div style="width: 20px; float: left;"><hr></div><div style="width: 40px; float: left; font-size:8pt; text-align: center; cursor: default;">965</div><div style="width: 20px; float: left;"><hr></div></div>');
				
				if (bf_sum == bfWidth) {
					$('.dc1_f').remove();
					changeSize(1, 0, 0, '');
				} else if (bf_sum > 96.5) {
					if (bf_cri == 'left') {
						$('.dc1_f').remove();
						changeSize(1, 0, 0, '');
					} else if (bf_cri == 'right') {
						changeSize(1, 96.5, '', 0);
					}
				}
			} else if (!$('#dcorner1').hasClass('on_corner') && $('#dcorner2').hasClass('on_corner')) {
				$('.dc1_f').remove();
				$('.dc2_f').remove();
				$('#dsize1').addClass('hidden');
				$('#dcorner2').append('<div class="dc2_f" style="width: 94.5px; height: 20px; top: -20px; position: absolute; border-left: 1px solid black; border-right: 1px solid black;"><div style="width: 20px; float: left;"><hr></div><div style="width: 40px; float: left; font-size:8pt; text-align: center; cursor: default;">965</div><div style="width: 20px; float: left;"><hr></div></div>');
				
				if (bf_sum == bfWidth) {
					$('.dc2_f').remove();
					changeSize(1, 0, '', 0);
				} else if (bf_sum > 96.5) {
					if (bf_cri == 'left') {
						changeSize(1, 96.5, 0, '');
					} else if (bf_cri == 'right') {
						$('.dc2_f').remove();
						changeSize(1, 0, '', 0);
					}
				}
			} else if (!$('#dcorner1').hasClass('on_corner') && !$('#dcorner2').hasClass('on_corner')) {
				$('.dc1_f').remove();
				$('.dc2_f').remove();
				$('#dsize1').addClass('hidden');
				
				if (bf_sum > 0) {
					if (bf_cri == 'left') {
						changeSize(1, 0, 0, '');
					} else if (bf_cri == 'right') {
						changeSize(1, 0, '', 0);
					}
				}
			}
		break;
		case 2:
			if ($('#dcorner1').hasClass('on_corner') && $('#dcorner3').hasClass('on_corner')) {
				$('.dc1_l').remove();
				$('.dc3_l').remove();
				$('#dsize2').addClass('hidden');
				$('#dcorner1').append('<div class="dc1_l" style="width: 94.5px; height: 20px; position: absolute; border-left: 1px solid black; border-right: 1px solid black; -ms-transform: rotate(270deg) translate(-39px, -58px); -webkit-transform: rotate(270deg) translate(-39px, -58px); -moz-transform: rotate(270deg) translate(-39px, -58px); -o-transform: rotate(270deg) translate(-39px, -58px); transform: rotate(270deg) translate(-39px, -58px);"><div style="width: 20px; float: left;"><hr></div><div style="width: 40px; float: left; font-size:8pt; text-align: center; cursor: default;">965</div><div style="width: 20px; float: left;"><hr></div></div>');
				$('#dcorner3').append('<div class="dc3_l" style="width: 94.5px; height: 20px; position: absolute; border-left: 1px solid black; border-right: 1px solid black; -ms-transform: rotate(270deg) translate(-40px, -60px); -webkit-transform: rotate(270deg) translate(-40px, -60px); -moz-transform: rotate(270deg) translate(-40px, -60px); -o-transform: rotate(270deg) translate(-40px, -60px); transform: rotate(270deg) translate(-40px, -60px);"><div style="width: 20px; float: left;"><hr></div><div style="width: 40px; float: left; font-size:8pt; text-align: center; cursor: default;">965</div><div style="width: 20px; float: left;"><hr></div></div>');
				
				if (bl_sum == blrWidth) {
					$('.dc1_l').remove();
					$('.dc3_l').remove();
					changeSize(2, 0, 9, 9);
				} else if (bl_sum > 193) {
					if (bl_cri == 'left') {
						$('.dc3_l').remove();
						changeSize(2, 96.5, 9,  (blrWidth-bl_sum+96.5-8)*-1);
					} else if (bl_cri == 'right') {
						$('.dc1_l').remove();
						changeSize(2, 96.5, 9, 9);
					}
				}
			} else if ($('#dcorner1').hasClass('on_corner') && !$('#dcorner3').hasClass('on_corner')) {
				$('.dc1_l').remove();
				$('.dc3_l').remove();
				$('#dsize2').addClass('hidden');
				$('#dcorner1').append('<div class="dc1_l" style="width: 94.5px; height: 20px; position: absolute; border-left: 1px solid black; border-right: 1px solid black; -ms-transform: rotate(270deg) translate(-39px, -58px); -webkit-transform: rotate(270deg) translate(-39px, -58px); -moz-transform: rotate(270deg) translate(-39px, -58px); -o-transform: rotate(270deg) translate(-39px, -58px); transform: rotate(270deg) translate(-39px, -58px);"><div style="width: 20px; float: left;"><hr></div><div style="width: 40px; float: left; font-size:8pt; text-align: center; cursor: default;">965</div><div style="width: 20px; float: left;"><hr></div></div>');
				
				if (bl_sum == blrWidth) {
					$('.dc1_l').remove();
					changeSize(2, 0, 9, 9);
				} else if (bl_sum > 96.5) {
					if (bl_cri == 'left') {
						changeSize(2, 96.5, 9,  (blrWidth-bl_sum+96.5-8)*-1);
					} else if (bl_cri == 'right') {
						$('.dc1_l').remove();
						changeSize(2, 0, 9, 9);
					}
				}
			} else if (!$('#dcorner1').hasClass('on_corner') && $('#dcorner3').hasClass('on_corner')) {
				$('.dc1_l').remove();
				$('.dc3_l').remove();
				$('#dsize2').addClass('hidden');
				$('#dcorner3').append('<div class="dc3_l" style="width: 94.5px; height: 20px; position: absolute; border-left: 1px solid black; border-right: 1px solid black; -ms-transform: rotate(270deg) translate(-40px, -60px); -webkit-transform: rotate(270deg) translate(-40px, -60px); -moz-transform: rotate(270deg) translate(-40px, -60px); -o-transform: rotate(270deg) translate(-40px, -60px); transform: rotate(270deg) translate(-40px, -60px);"><div style="width: 20px; float: left;"><hr></div><div style="width: 40px; float: left; font-size:8pt; text-align: center; cursor: default;">965</div><div style="width: 20px; float: left;"><hr></div></div>');
				
				if (bl_sum == blrWidth) {
					$('.dc3_l').remove();
					changeSize(2, 0, 9, 9);
				} else if (bl_sum > 96.5) {
					if (bl_cri == 'left') {
						$('.dc3_l').remove();
						changeSize(2, 0, 9,  (blrWidth-bl_sum-8)*-1);
					} else if (bl_cri == 'right') {
						changeSize(2, 96.5, 9, 9);
					}
				}
			} else if (!$('#dcorner1').hasClass('on_corner') && !$('#dcorner3').hasClass('on_corner')) {
				$('.dc1_l').remove();
				$('.dc3_l').remove();
				$('#dsize2').addClass('hidden');
				
				if (bl_sum > 0) {
					if (bl_cri == 'left') {
						changeSize(2, 0, 9,  (blrWidth-bl_sum-8)*-1);
					} else if (bl_cri == 'right') {
						changeSize(2, 0, 9, 9);
					}
				}
			}
		break;
		case 3:
			if ($('#dcorner2').hasClass('on_corner') && $('#dcorner4').hasClass('on_corner')) {
				$('.dc2_r').remove();
				$('.dc4_r').remove();
				$('#dsize3').addClass('hidden');
				$('#dcorner2').append('<div class="dc2_r" style="width: 94.5px; height: 20px; position: absolute; border-left: 1px solid black; border-right: 1px solid black; -ms-transform: rotate(90deg) translate(37px, -56px); -webkit-transform: rotate(90deg) translate(37px, -56px); -moz-transform: rotate(90deg) translate(37px, -56px); -o-transform: rotate(90deg) translate(37px, -56px); transform: rotate(90deg) translate(37px, -56px);"><div style="width: 20px; float: left;"><hr></div><div style="width: 40px; float: left; font-size:8pt; text-align: center; cursor: default;">965</div><div style="width: 20px; float: left;"><hr></div></div>');
				$('#dcorner4').append('<div class="dc4_r" style="width: 94.5px; height: 20px; position: absolute; border-left: 1px solid black; border-right: 1px solid black; -ms-transform: rotate(90deg) translate(39px, -55px); -webkit-transform: rotate(90deg) translate(39px, -55px); -moz-transform: rotate(90deg) translate(39px, -55px); -o-transform: rotate(90deg) translate(39px, -55px); transform: rotate(90deg) translate(39px, -55px);"><div style="width: 20px; float: left;"><hr></div><div style="width: 40px; float: left; font-size:8pt; text-align: center; cursor: default;">965</div><div style="width: 20px; float: left;"><hr></div></div>');
				
				if (br_sum == blrWidth) {
					$('.dc2_r').remove();
					$('.dc4_r').remove();
					changeSize(3, 0, 9, 9);
				} else if (br_sum > 193) {
					if (br_cri == 'left') {
						$('.dc2_r').remove();
						changeSize(3, 96.5, 9, 9);
					} else if (br_cri == 'right') {
						$('.dc4_r').remove();
						changeSize(3, 96.5, 9,  (blrWidth-br_sum+96.5-8)*-1);
					}
				}
			} else if ($('#dcorner2').hasClass('on_corner') && !$('#dcorner4').hasClass('on_corner')) {
				$('.dc2_r').remove();
				$('.dc4_r').remove();
				$('#dsize3').addClass('hidden');
				$('#dcorner2').append('<div class="dc2_r" style="width: 94.5px; height: 20px; position: absolute; border-left: 1px solid black; border-right: 1px solid black; -ms-transform: rotate(90deg) translate(37px, -56px); -webkit-transform: rotate(90deg) translate(37px, -56px); -moz-transform: rotate(90deg) translate(37px, -56px); -o-transform: rotate(90deg) translate(37px, -56px); transform: rotate(90deg) translate(37px, -56px);"><div style="width: 20px; float: left;"><hr></div><div style="width: 40px; float: left; font-size:8pt; text-align: center; cursor: default;">965</div><div style="width: 20px; float: left;"><hr></div></div>');
				
				if (br_sum == blrWidth) {
					$('.dc2_r').remove();
					changeSize(3, 0, 9, 9);
				} else if (br_sum > 96.5) {
					if (br_cri == 'left') {
						$('.dc2_r').remove();
						changeSize(3, 0, 9, 9);
					} else if (br_cri == 'right') {
						changeSize(3, 96.5, 9,  (blrWidth-br_sum+96.5-8)*-1);
					}
				}
			} else if (!$('#dcorner2').hasClass('on_corner') && $('#dcorner4').hasClass('on_corner')) {
				$('.dc2_r').remove();
				$('.dc4_r').remove();
				$('#dsize3').addClass('hidden');
				$('#dcorner4').append('<div class="dc4_r" style="width: 94.5px; height: 20px; position: absolute; border-left: 1px solid black; border-right: 1px solid black; -ms-transform: rotate(90deg) translate(39px, -55px); -webkit-transform: rotate(90deg) translate(39px, -55px); -moz-transform: rotate(90deg) translate(39px, -55px); -o-transform: rotate(90deg) translate(39px, -55px); transform: rotate(90deg) translate(39px, -55px);"><div style="width: 20px; float: left;"><hr></div><div style="width: 40px; float: left; font-size:8pt; text-align: center; cursor: default;">965</div><div style="width: 20px; float: left;"><hr></div></div>');
				
				if (br_sum == blrWidth) {
					$('.dc4_r').remove();
					changeSize(3, 0, 9, 9);
				} else if (br_sum > 96.5) {
					if (br_cri == 'left') {
						changeSize(3, 96.5, 9, 9);
					} else if (br_cri == 'right') {
						$('.dc4_r').remove();
						changeSize(3, 0, 9,  (blrWidth-br_sum-8)*-1);
					}
				}
			} else if (!$('#dcorner2').hasClass('on_corner') && !$('#dcorner4').hasClass('on_corner')) {
				$('.dc2_r').remove();
				$('.dc4_r').remove();
				$('#dsize3').addClass('hidden');
				
				if (br_sum > 0) {
					if (br_cri == 'left') {
						changeSize(3, 0, 9, 9);
					} else if (br_cri == 'right') {
						changeSize(3, 0, 9,  (blrWidth-br_sum-8)*-1);
					}
				}
			}
		break;
		case 4:
			if ($('#dcorner3').hasClass('on_corner') && $('#dcorner4').hasClass('on_corner')) {
				$('.dc3_b').remove();
				$('.dc4_b').remove();
				$('#dsize4').addClass('hidden');
				$('#dcorner3').append('<div class="dc3_b" style="width: 94.5px; height: 20px; bottom: -20px; position: absolute; border-left: 1px solid black; border-right: 1px solid black;"><div style="width: 20px; float: left;"><hr></div><div style="width: 40px; float: left; font-size:8pt; text-align: center; cursor: default;">965</div><div style="width: 20px; float: left;"><hr></div></div>');
				$('#dcorner4').append('<div class="dc4_b" style="width: 94.5px; height: 20px; bottom: -20px; position: absolute; border-left: 1px solid black; border-right: 1px solid black;"><div style="width: 20px; float: left;"><hr></div><div style="width: 40px; float: left; font-size:8pt; text-align: center; cursor: default;">965</div><div style="width: 20px; float: left;"><hr></div></div>');
				
				if (bb_sum == bfWidth) {
					$('.dc3_b').remove();
					$('.dc4_b').remove();
					changeSize(4, 0, 0, '');
				} else if (bb_sum > 193) {
					if (bb_cri == 'left') {
						$('.dc4_b').remove();
						changeSize(4, 96.5, '', 0);
					} else if (bb_cri == 'right') {
						$('.dc3_b').remove();
						changeSize(4, 96.5, 0, '');
					}
				}
			} else if ($('#dcorner3').hasClass('on_corner') && !$('#dcorner4').hasClass('on_corner')) {
				$('.dc3_b').remove();
				$('.dc4_b').remove();
				$('#dsize4').addClass('hidden');
				$('#dcorner3').append('<div class="dc3_b" style="width: 94.5px; height: 20px; bottom: -20px; position: absolute; border-left: 1px solid black; border-right: 1px solid black;"><div style="width: 20px; float: left;"><hr></div><div style="width: 40px; float: left; font-size:8pt; text-align: center; cursor: default;">965</div><div style="width: 20px; float: left;"><hr></div></div>');
				
				if (bb_sum == bfWidth) {
					$('.dc3_b').remove();
					changeSize(4, 0, 0, '');
				} else if (bb_sum > 96.5) {
					if (bb_cri == 'left') {
						changeSize(4, 96.5, '', 0);
					} else if (bb_cri == 'right') {
						$('.dc3_b').remove();
						changeSize(4, 0, 0, '');
					}
				}
			} else if (!$('#dcorner3').hasClass('on_corner') && $('#dcorner4').hasClass('on_corner')) {
				$('.dc3_b').remove();
				$('.dc4_b').remove();
				$('#dsize4').addClass('hidden');
				$('#dcorner4').append('<div class="dc4_b" style="width: 94.5px; height: 20px; bottom: -20px; position: absolute; border-left: 1px solid black; border-right: 1px solid black;"><div style="width: 20px; float: left;"><hr></div><div style="width: 40px; float: left; font-size:8pt; text-align: center; cursor: default;">965</div><div style="width: 20px; float: left;"><hr></div></div>');
				
				if (bb_sum == bfWidth) {
					$('.dc4_b').remove();
					changeSize(4, 0, '', 0);
				} else if (bb_sum > 96.5) {
					if (bb_cri == 'left') {
						$('.dc4_b').remove();
						changeSize(4, 0, '', 0);
					} else if (bb_cri == 'right') {
						changeSize(4, 96.5, 0, '');
					}
				}
			} else if (!$('#dcorner3').hasClass('on_corner') && !$('#dcorner4').hasClass('on_corner')) {
				$('.dc3_b').remove();
				$('.dc4_b').remove();
				$('#dsize4').addClass('hidden');
				
				if (bb_sum > 0) {
					if (bb_cri == 'left') {
						changeSize(4, 0, '', 0);
					} else if (bb_cri == 'right') {
						changeSize(4, 0, 0, '');
					}
				}
			}
		break;
		}
		}
}
function changeSize(n, s, l, r) {
	switch (n) {
	case 1:
		$('#dsize1').removeClass('invisible');
		$('#dsize1').css('width', (bf_sum-2-s)+'px');
		$('#dsize1').html('<div style="width: '+(((bf_sum-s)/2)-20)+'px; float: left;"><hr></div><div style="width: 38px; float: left; font-size:8pt; text-align: center; cursor: default;">'+((bf_sum-s)*10)+'</div><div style="width: '+(((bf_sum-s)/2)-20)+'px; float: left;"><hr></div>');
		$('#dsize1').css('left', l);
		$('#dsize1').css('right', r);
		break;
	case 2:
		$('#dsize2').removeClass('invisible');
		$('#dsize2').css('width', (bl_sum-2-s)+'px');
		$('#dsize2').html('<div style="width: '+(((bl_sum-s)/2)-20)+'px; float: left;"><hr></div><div style="width: 38px; float: left; font-size:8pt; text-align: center; cursor: default;">'+((bl_sum-s)*10)+'</div><div style="width: '+(((bl_sum-s)/2)-20)+'px; float: left;"><hr></div>');
		$('#dsize2').css('width', (bl_sum-2-s)+'px').css('transform', 'translate(-'+((bl_sum-2-s)/2 - l)+'px, '+((bl_sum-2-s)/2 - r)+'px) rotate(270deg)');
		break;
	case 3:
		$('#dsize3').removeClass('invisible');
		$('#dsize3').css('width', (br_sum-2-s)+'px');
		$('#dsize3').html('<div style="width: '+(((br_sum-s)/2)-20)+'px; float: left;"><hr></div><div style="width: 38px; float: left; font-size:8pt; text-align: center; cursor: default;">'+((br_sum-s)*10)+'</div><div style="width: '+(((br_sum-s)/2)-20)+'px; float: left;"><hr></div>');
		$('#dsize3').css('width', (br_sum-2-s)+'px').css('transform', 'translate('+((br_sum-2-s)/2 - l)+'px, '+((br_sum-2-s)/2 - r)+'px) rotate(90deg)');
		break;
	case 4:
		$('#dsize4').removeClass('invisible');
		$('#dsize4').css('width', (bb_sum-2-s)+'px');
		$('#dsize4').html('<div style="width: '+(((bb_sum-s)/2)-20)+'px; float: left;"><hr></div><div style="width: 38px; float: left; font-size:8pt; text-align: center; cursor: default;">'+((bb_sum-s)*10)+'</div><div style="width: '+(((bb_sum-s)/2)-20)+'px; float: left;"><hr></div>');
		$('#dsize4').css('left', l);
		$('#dsize4').css('right', r);
		break;
	}
}

function setCorner(e, dcorner) {
	if(ward_kind!='WRD999'){
	switch (dcorner) {
	case 'dcorner1':
		if ($('#dcorner1').hasClass('on_corner')) {
			$('#dcorner1').css('background-image', '');
			$('#dcorner1').removeClass('on_corner').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2');
			
			$('#bf_l').css('width', 0);
			$('#bf_area').css('width', $('#bf_area').width() + 80);
			$('#darea1').css('width', $('#darea1').width() + 80);
			$('#darea1').css('margin-left', 0);
			bf_sum -= 80;
			
			$('#bl_r').css('width', 0);
			$('#bl_area').css('width', $('#bl_area').width() + 80);
			$('#darea2').css('width', $('#darea2').width() + 80);
			$('#darea2').css('transform', 'translate(-'+($('#darea2').width()/2 - 40)+'px, '+($('#darea2').width()/2 - 40)+'px) rotate(270deg)');
			$('#darea2').css('margin-top', 0);
			bl_sum -= 80;
		} else {
			if (basic_width / 10 - bf_sum < 80 || basic_height / 10 - bl_sum < 80) {
				showAlert('코너장을 놓기 위한 공간이 부족합니다.');
				return;
			}
			
			$('#dcorner1').css('background-image', 'url(\'/images/wardrobe/simulation/dressroom/'+ward_kind+'/ucorner_fl.png\')');
			$('#dcorner1').addClass('on_corner').addClass('dr_bcorner_1');
			
			$('#bf_l').addClass('dr_bcorner_l1');
			$('#bf_l').css('width', '80px');
//			$('#bf_l').attr('onclick', 'revisionDr(\'layer2\', \'bf_l\', \'bl_r\', \'dcorner1\', \'corner_1\')');
			$('#bf_l').css('background', 'url(\'/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_l1.png\')');
			$('#bf_area').css('width', $('#bf_area').width() - 80);
			$('#darea1').css('width', $('#darea1').width() - 80).css('margin-left', 80);
			bf_sum += 80;
			
			$('#bl_r').addClass('dr_bcorner_r1');
			$('#bl_r').css('width', '80px');
//			$('#bl_r').attr('onclick', 'revisionDr(\'layer2\', \'bf_l\', \'bl_r\', \'dcorner1\', \'corner_1\')');
			$('#bl_r').css('background', 'url(\'/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_r1.png\')');
			$('#bl_area').css('width', $('#bl_area').width() - 80);
			$('#darea2').css('width', $('#darea2').width() - 80);
			$('#darea2').css('transform', 'translate(-'+($('#darea2').width()/2 - 40)+'px, '+($('#darea2').width()/2 - 40)+'px) rotate(270deg)');
			$('#darea2').css('margin-top', 80);
			bl_sum += 80;
		}
		showSize(1);
		showSize(2);
		if (bf_sum == 0) $('#info_dr_f').hide(); else $('#info_dr_f').show();
		if (bl_sum == 0) $('#info_dr_l').hide(); else $('#info_dr_l').show();
		break;
	case 'dcorner2':
		if ($('#dcorner2').hasClass('on_corner')) {
			$('#dcorner2').css('background-image', '');
			$('#dcorner2').removeClass('on_corner').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2');
			
			$('#bf_r').css('width', 0);
			$('#bf_area').css('width', $('#bf_area').width() + 80);
			$('#darea1').css('width', $('#darea1').width() + 80);
			$('#darea1').css('margin-right', 0);
			bf_sum -= 80;
			
			$('#br_l').css('width', 0);
			$('#br_area').css('width', $('#br_area').width() + 80);
			$('#darea3').css('width', $('#darea3').width() + 80);
			$('#darea3').css('transform', 'translate('+($('#darea3').width()/2 - 40)+'px, '+($('#darea3').width()/2 - 40)+'px) rotate(90deg)');
			$('#darea3').css('margin-top', 0);
			br_sum -= 80;
		} else {
			if (basic_width / 10 - bf_sum < 80 || basic_height / 10 - br_sum < 80) {
				showAlert('코너장을 놓기 위한 공간이 부족합니다.');
				return;
			}
			
			$('#dcorner2').css('background-image', 'url(\'/images/wardrobe/simulation/dressroom/'+ward_kind+'/ucorner_fr.png\')');
			$('#dcorner2').addClass('on_corner').addClass('dr_bcorner_1');
			
			$('#bf_r').addClass('dr_bcorner_r1');
			$('#bf_r').css('width', '80px');
//			$('#bf_r').attr('onclick', 'revisionDr(\'layer2\', \'br_l\', \'bf_r\', \'dcorner2\', \'corner_1\')');
			$('#bf_r').css('background', 'url(\'/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_r1.png\')');
			$('#bf_area').css('width', $('#bf_area').width() - 80);
			$('#darea1').css('width', $('#darea1').width() - 80);
			$('#darea1').css('margin-right', 80);
			bf_sum += 80;
			
			$('#br_l').addClass('dr_bcorner_l1');
			$('#br_l').css('width', '80px');
//			$('#br_l').attr('onclick', 'revisionDr(\'layer2\', \'br_l\', \'bf_r\', \'dcorner2\', \'corner_1\')');
			$('#br_l').css('background', 'url(\'/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_l1.png\')');
			$('#br_area').css('width', $('#br_area').width() - 80);
			$('#darea3').css('width', $('#darea3').width() - 80);
			$('#darea3').css('transform', 'translate('+($('#darea3').width()/2 - 40)+'px, '+($('#darea3').width()/2 - 40)+'px) rotate(90deg)');
			$('#darea3').css('margin-top', 80);
			br_sum += 80;
		}
		showSize(1);
		showSize(3);
		if (bf_sum == 0) $('#info_dr_f').hide(); else $('#info_dr_f').show();
		if (br_sum == 0) $('#info_dr_r').hide(); else $('#info_dr_r').show();
		break;
	case 'dcorner3':
		if ($('#dcorner3').hasClass('on_corner')) {
			$('#dcorner3').css('background-image', '');
			$('#dcorner3').removeClass('on_corner').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2');
			
			$('#bb_r').css('width', 0);
			$('#bb_area').css('width', $('#bb_area').width() + 80);
			$('#darea4').css('width', $('#darea4').width() + 80);
			$('#darea4').css('margin-left', 0);
			bb_sum -= 80;
			
			$('#bl_l').css('width', 0);
			$('#bl_area').css('width', $('#bl_area').width() + 80);
			$('#darea2').css('width', $('#darea2').width() + 80);
			$('#darea2').css('transform', 'translate(-'+($('#darea2').width()/2 - 40)+'px, '+($('#darea2').width()/2 - 40)+'px) rotate(270deg)');
			$('#darea2').css('margin-bottom', 0);
			bl_sum -= 80;
		} else {
			if (basic_width / 10 - bb_sum < 80 || basic_height / 10 - bl_sum < 80) {
				showAlert('코너장을 놓기 위한 공간이 부족합니다.');
				return;
			}
			
			$('#dcorner3').css('background-image', 'url(\'/images/wardrobe/simulation/dressroom/'+ward_kind+'/ucorner_bl.png\')');
			$('#dcorner3').addClass('on_corner').addClass('dr_bcorner_1');
			
			$('#bb_r').addClass('dr_bcorner_r1');
			$('#bb_r').css('width', '80px');
//			$('#bb_r').attr('onclick', 'revisionDr(\'layer2\', \'bl_l\', \'bb_r\', \'dcorner3\', \'corner_1\')');
			$('#bb_r').css('background', 'url(\'/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_r1.png\')');
			$('#bb_area').css('width', $('#bb_area').width() - 80);
			$('#darea4').css('width', $('#darea4').width() - 80);
			$('#darea4').css('margin-left', 80);
			bb_sum += 80;
			
			$('#bl_l').addClass('dr_bcorner_l1');
			$('#bl_l').css('width', '80px');
//			$('#bl_l').attr('onclick', 'revisionDr(\'layer2\', \'bl_l\', \'bb_r\', \'dcorner3\', \'corner_1\')');
			$('#bl_l').css('background', 'url(\'/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_l1.png\')');
			$('#bl_area').css('width', $('#bl_area').width() - 80);
			$('#darea2').css('width', $('#darea2').width() - 80);
			$('#darea2').css('transform', 'translate(-'+($('#darea2').width()/2 - 40)+'px, '+($('#darea2').width()/2 - 40)+'px) rotate(270deg)');
			$('#darea2').css('margin-bottom', 80);
			bl_sum += 80;
		}
		showSize(2);
		showSize(4);
		if (bl_sum == 0) $('#info_dr_l').hide(); else $('#info_dr_l').show();
		if (bb_sum == 0) $('#info_dr_b').hide(); else $('#info_dr_b').show();
		break;
	case 'dcorner4':
		if ($('#dcorner4').hasClass('on_corner')) {
			$('#dcorner4').css('background-image', '');
			$('#dcorner4').removeClass('on_corner').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2');
			
			$('#bb_l').css('width', 0);
			$('#bb_area').css('width', $('#bb_area').width() + 80);
			$('#darea4').css('width', $('#darea4').width() + 80);
			$('#darea4').css('margin-right', 0);
			bb_sum -= 80;
			
			$('#br_r').css('width', 0);
			$('#br_area').css('width', $('#br_area').width() + 80);
			$('#darea3').css('width', $('#darea3').width() + 80);
			$('#darea3').css('transform', 'translate('+($('#darea3').width()/2 - 40)+'px, '+($('#darea3').width()/2 - 40)+'px) rotate(90deg)');
			$('#darea3').css('margin-bottom', 0);
			br_sum -= 80;
		} else {
			if (basic_width / 10 - bb_sum < 80 || basic_height / 10 - br_sum < 80) {
				showAlert('코너장을 놓기 위한 공간이 부족합니다.');
				return;
			}
			
			$('#dcorner4').css('background-image', 'url(\'/images/wardrobe/simulation/dressroom/'+ward_kind+'/ucorner_br.png\')');
			$('#dcorner4').addClass('on_corner').addClass('dr_bcorner_1');
			
			$('#bb_l').addClass('dr_bcorner_l1');
			$('#bb_l').css('width', '80px');
//			$('#bb_l').attr('onclick', 'revisionDr(\'layer2\', \'bb_l\', \'br_r\', \'dcorner4\', \'corner_1\')');
			$('#bb_l').css('background', 'url(\'/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_l1.png\')');
			$('#bb_area').css('width', $('#bb_area').width() - 80);
			$('#darea4').css('width', $('#darea4').width() - 80);
			$('#darea4').css('margin-right', 80);
			bb_sum += 80;
			
			$('#br_r').addClass('dr_bcorner_r1');
			$('#br_r').css('width', '80px');
//			$('#br_r').attr('onclick', 'revisionDr(\'layer2\', \'bb_l\', \'br_r\', \'dcorner4\', \'corner_1\')');
			$('#br_r').css('background', 'url(\'/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_r1.png\')');
			$('#br_area').css('width', $('#br_area').width() - 80);
			$('#darea3').css('width', $('#darea3').width() - 80);
			$('#darea3').css('transform', 'translate('+($('#darea3').width()/2 - 40)+'px, '+($('#darea3').width()/2 - 40)+'px) rotate(90deg)');
			$('#darea3').css('margin-bottom', 80);
			br_sum += 80;
		}
		showSize(3);
		showSize(4);
		if (br_sum == 0) $('#info_dr_r').hide(); else $('#info_dr_r').show();
		if (bb_sum == 0) $('#info_dr_b').hide(); else $('#info_dr_b').show();
		break;
	}
	}else if(ward_kind=='WRD999'){
		switch (dcorner) {
		case 'dcorner1':
			if ($('#dcorner1').hasClass('on_corner')) {
				$('#dcorner1').css('background-image', '');
				$('#dcorner1').removeClass('on_corner').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				
				$('#bf_l').css('width', 0);
				$('#bf_area').css('width', $('#bf_area').width() + 96);
				$('#darea1').css('width', $('#darea1').width() + 96.5);
				$('#darea1').css('margin-left', 0);
				bf_sum -= 96.5;
				
				$('#bl_r').css('width', 0);
				$('#bl_area').css('width', $('#bl_area').width() + 96);
				$('#darea2').css('width', $('#darea2').width() + 96.5);
				$('#darea2').css('transform', 'translate(-'+($('#darea2').width()/2 - 40)+'px, '+($('#darea2').width()/2 - 40)+'px) rotate(270deg)');
				$('#darea2').css('margin-top', 0);
				bl_sum -= 96;
			} else {
				if (basic_width / 10 - bf_sum < 96.5 || basic_height / 10 - bl_sum < 96.5) {
					showAlert('코너장을 놓기 위한 공간이 부족합니다.');
					return;
				}
				
				$('#dcorner1').css('background-image', 'url(\'/images/wardrobe/simulation/dressroom/'+ward_kind+'/ucorner_fl.png\')');
				$('#dcorner1').addClass('on_corner').addClass('dr_bcorner_1');
				$('#bf_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bf_l').addClass('dr_bcorner_a1');
				$('#bf_l').css('width', '96px');
				/*$('#bf_l').attr('onclick', 'revisionDr(\'layer2\', \'bf_l\', \'bl_r\', \'dcorner1\', \'corner_a1\')');*/
				$('#bf_l').css('background', 'url(\'/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png\')');
				$('#bf_area').css('width', $('#bf_area').width() - 96);
				$('#darea1').css('width', $('#darea1').width() - 96.5).css('margin-left', 96.5);
				bf_sum += 96.5;
				$('#bl_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bl_r').addClass('dr_bcorner_a1');
				$('#bl_r').css('width', '96px');
				/*$('#bl_r').attr('onclick', 'revisionDr(\'layer2\', \'bf_l\', \'bl_r\', \'dcorner1\', \'corner_a1\')');*/
				$('#bl_r').css('background', 'url(\'/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png\')');
				$('#bl_area').css('width', $('#bl_area').width() - 96);
				$('#darea2').css('width', $('#darea2').width() - 96.5);
				$('#darea2').css('transform', 'translate(-'+($('#darea2').width()/2 - 40)+'px, '+($('#darea2').width()/2 - 40)+'px) rotate(270deg)');
				$('#darea2').css('margin-top', 96.5);
				bl_sum += 96.5;
			}
			showSize(1);
			showSize(2);
			if (bf_sum == 0) $('#info_dr_f').hide(); else $('#info_dr_f').show();
			if (bl_sum == 0) $('#info_dr_l').hide(); else $('#info_dr_l').show();
			$('#emptySpaceF').html((bfWidth - bf_sum) * 10);
			$('#emptySpaceL').html((blrWidth - bl_sum) * 10);
			break;
		case 'dcorner2':
			if ($('#dcorner2').hasClass('on_corner')) {
				$('#dcorner2').css('background-image', '');
				$('#dcorner2').removeClass('on_corner').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				
				$('#bf_r').css('width', 0);
				$('#bf_area').css('width', $('#bf_area').width() + 96);
				$('#darea1').css('width', $('#darea1').width() + 96.5);
				$('#darea1').css('margin-right', 0);
				bf_sum -= 96.5;
				
				$('#br_l').css('width', 0);
				$('#br_area').css('width', $('#br_area').width() + 96);
				$('#darea3').css('width', $('#darea3').width() + 96.5);
				$('#darea3').css('transform', 'translate('+($('#darea3').width()/2 - 40)+'px, '+($('#darea3').width()/2 - 40)+'px) rotate(90deg)');
				$('#darea3').css('margin-top', 0);
				br_sum -= 96.5;
			} else {
				if (basic_width / 10 - bf_sum < 96.5 || basic_height / 10 - br_sum < 96.5) {
					showAlert('코너장을 놓기 위한 공간이 부족합니다.');
					return;
				}
				
				$('#dcorner2').css('background-image', 'url(\'/images/wardrobe/simulation/dressroom/'+ward_kind+'/ucorner_fr.png\')');
				$('#dcorner2').addClass('on_corner').addClass('dr_bcorner_1');
				$('#bf_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bf_r').addClass('dr_bcorner_a1');
				$('#bf_r').css('width', '96px');
//				$('#bf_r').attr('onclick', 'revisionDr(\'layer2\', \'br_l\', \'bf_r\', \'dcorner2\', \'corner_a1\')');
				$('#bf_r').css('background', 'url(\'/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png\')');
				$('#bf_area').css('width', $('#bf_area').width() - 96);
				$('#darea1').css('width', $('#darea1').width() - 96.5);
				$('#darea1').css('margin-right', 96.5);
				bf_sum += 96.5;
				$('#br_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#br_l').addClass('dr_bcorner_a1');
				$('#br_l').css('width', '96px');
				/*$('#br_l').attr('onclick', 'revisionDr(\'layer2\', \'br_l\', \'bf_r\', \'dcorner2\', \'corner_a1\')');*/
				$('#br_l').css('background', 'url(\'/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png\')');
				$('#br_area').css('width', $('#br_area').width() - 96);
				$('#darea3').css('width', $('#darea3').width() - 96.5);
				$('#darea3').css('transform', 'translate('+($('#darea3').width()/2 - 40)+'px, '+($('#darea3').width()/2 - 40)+'px) rotate(90deg)');
				$('#darea3').css('margin-top', 96.5);
				br_sum += 96.5;
			}
			showSize(1);
			showSize(3);
			if (bf_sum == 0) $('#info_dr_f').hide(); else $('#info_dr_f').show();
			if (br_sum == 0) $('#info_dr_r').hide(); else $('#info_dr_r').show();
			$('#emptySpaceF').html((bfWidth - bf_sum) * 10);
			$('#emptySpaceR').html((blrWidth - br_sum) * 10);
			break;
		case 'dcorner3':
			if ($('#dcorner3').hasClass('on_corner')) {
				$('#dcorner3').css('background-image', '');
				$('#dcorner3').removeClass('on_corner').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				
				$('#bb_r').css('width', 0);
				$('#bb_area').css('width', $('#bb_area').width() + 96);
				$('#darea4').css('width', $('#darea4').width() + 96.5);
				$('#darea4').css('margin-left', 0);
				bb_sum -= 96.5;
				
				$('#bl_l').css('width', 0);
				$('#bl_area').css('width', $('#bl_area').width() + 96);
				$('#darea2').css('width', $('#darea2').width() + 96.5);
				$('#darea2').css('transform', 'translate(-'+($('#darea2').width()/2 - 40)+'px, '+($('#darea2').width()/2 - 40)+'px) rotate(270deg)');
				$('#darea2').css('margin-bottom', 0);
				bl_sum -= 96.5;
			} else {
				if (basic_width / 10 - bb_sum < 96.5 || basic_height / 10 - bl_sum < 96.5) {
					showAlert('코너장을 놓기 위한 공간이 부족합니다.');
					return;
				}
				
				$('#dcorner3').css('background-image', 'url(\'/images/wardrobe/simulation/dressroom/'+ward_kind+'/ucorner_bl.png\')');
				$('#dcorner3').addClass('on_corner').addClass('dr_bcorner_1');
				$('#bb_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bb_r').addClass('dr_bcorner_a1');
				$('#bb_r').css('width', '96px');
				/*$('#bb_r').attr('onclick', 'revisionDr(\'layer2\', \'bl_l\', \'bb_r\', \'dcorner3\', \'corner_a1\')');*/
				$('#bb_r').css('background', 'url(\'/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png\')');
				$('#bb_area').css('width', $('#bb_area').width() - 96);
				$('#darea4').css('width', $('#darea4').width() - 96.5);
				$('#darea4').css('margin-left', 96.5);
				bb_sum += 96.5;
				$('#bl_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bl_l').addClass('dr_bcorner_a1');
				$('#bl_l').css('width', '96px');
				/*$('#bl_l').attr('onclick', 'revisionDr(\'layer2\', \'bl_l\', \'bb_r\', \'dcorner3\', \'corner_a1\')');*/
				$('#bl_l').css('background', 'url(\'/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png\')');
				$('#bl_area').css('width', $('#bl_area').width() - 96);
				$('#darea2').css('width', $('#darea2').width() - 96.5);
				$('#darea2').css('transform', 'translate(-'+($('#darea2').width()/2 - 40)+'px, '+($('#darea2').width()/2 - 40)+'px) rotate(270deg)');
				$('#darea2').css('margin-bottom', 96.5);
				bl_sum += 96.5;
			}
			showSize(2);
			showSize(4);
			if (bl_sum == 0) $('#info_dr_l').hide(); else $('#info_dr_l').show();
			if (bb_sum == 0) $('#info_dr_b').hide(); else $('#info_dr_b').show();
			$('#emptySpaceL').html((blrWidth - bl_sum) * 10);
			$('#emptySpaceB').html((bfWidth - bb_sum) * 10);
			break;
		case 'dcorner4':
			if ($('#dcorner4').hasClass('on_corner')) {
				$('#dcorner4').css('background-image', '');
				$('#dcorner4').removeClass('on_corner').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				
				$('#bb_l').css('width', 0);
				$('#bb_area').css('width', $('#bb_area').width() + 96);
				$('#darea4').css('width', $('#darea4').width() + 96.5);
				$('#darea4').css('margin-right', 0);
				bb_sum -= 96.5;
				
				$('#br_r').css('width', 0);
				$('#br_area').css('width', $('#br_area').width() + 96);
				$('#darea3').css('width', $('#darea3').width() + 96.5);
				$('#darea3').css('transform', 'translate('+($('#darea3').width()/2 - 40)+'px, '+($('#darea3').width()/2 - 40)+'px) rotate(90deg)');
				$('#darea3').css('margin-bottom', 0);
				br_sum -= 96.5;
			} else {
				if (basic_width / 10 - bb_sum < 96.5 || basic_height / 10 - br_sum < 96.5) {
					showAlert('코너장을 놓기 위한 공간이 부족합니다.');
					return;
				}
				
				$('#dcorner4').css('background-image', 'url(\'/images/wardrobe/simulation/dressroom/'+ward_kind+'/ucorner_br.png\')');
				$('#dcorner4').addClass('on_corner').addClass('dr_bcorner_1');
				$('#bb_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bb_l').addClass('dr_bcorner_a1');
				$('#bb_l').css('width', '96px');
				/*$('#bb_l').attr('onclick', 'revisionDr(\'layer2\', \'bb_l\', \'br_r\', \'dcorner4\', \'corner_a1\')');*/
				$('#bb_l').css('background', 'url(\'/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png\')');
				$('#bb_area').css('width', $('#bb_area').width() - 96);
				$('#darea4').css('width', $('#darea4').width() - 96.5);
				$('#darea4').css('margin-right', 96.5);
				bb_sum += 96.5;
				$('#br_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#br_r').addClass('dr_bcorner_a1');
				$('#br_r').css('width', '96px');
				/*$('#br_r').attr('onclick', 'revisionDr(\'layer2\', \'bb_l\', \'br_r\', \'dcorner4\', \'corner_a1\')');*/
				$('#br_r').css('background', 'url(\'/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png\')');
				$('#br_area').css('width', $('#br_area').width() - 96);
				$('#darea3').css('width', $('#darea3').width() - 96.5);
				$('#darea3').css('transform', 'translate('+($('#darea3').width()/2 - 40)+'px, '+($('#darea3').width()/2 - 40)+'px) rotate(90deg)');
				$('#darea3').css('margin-bottom', 96.5);
				br_sum += 96.5;
			}
			showSize(3);
			showSize(4);
			if (br_sum == 0) $('#info_dr_r').hide(); else $('#info_dr_r').show();
			if (bb_sum == 0) $('#info_dr_b').hide(); else $('#info_dr_b').show();
			$('#emptySpaceR').html((blrWidth - br_sum) * 10);
			$('#emptySpaceB').html((bfWidth - bb_sum) * 10);
			break;
		}
		}
	$('#tableItem').html('');
}

function dressroom_map_way_click(obj) {
	$('.dressroom-map-way').removeClass('dressroom-map-selected');
	$(obj).addClass('dressroom-map-selected');
	$('.dressroom-map-way.above').css('border-color', '#000');
	
	$('.frame-dr-body').addClass('invisible');
	$('.dr-check').addClass('invisible');
	$('#controller-dr').addClass('invisible');
	$('.controller-dr-header-item').removeClass('invisible');
	current_body = '';
	
	if ($(obj).hasClass('above')) {
		$('.frame-dr-body.above').removeClass('invisible');
		direction = '';
		$('.dr-cri-l, .dr-cri-r').removeClass('dr-cri-selected');
	} else if ($(obj).hasClass('forward')) {
		$('.dressroom-map-way.above').css('border-top', '1px solid #F00');
		$('.frame-dr-body.forward').removeClass('invisible');
		direction = 'darea1';
		
		if (bf_cri == 'left') {
			$('.dr-cri-l').addClass('dr-cri-selected');
			$('.dr-cri-r').removeClass('dr-cri-selected');
		} else {
			$('.dr-cri-l').removeClass('dr-cri-selected');
			$('.dr-cri-r').addClass('dr-cri-selected');
		}
	} else if ($(obj).hasClass('left')) {
		$('.dressroom-map-way.above').css('border-left', '1px solid #F00');
		$('.frame-dr-body.left').removeClass('invisible');
		direction = 'darea2';
		
		if (bl_cri == 'left') {
			$('.dr-cri-l').addClass('dr-cri-selected');
			$('.dr-cri-r').removeClass('dr-cri-selected');
		} else {
			$('.dr-cri-l').removeClass('dr-cri-selected');
			$('.dr-cri-r').addClass('dr-cri-selected');
		}
	} else if ($(obj).hasClass('right')) {
		$('.dressroom-map-way.above').css('border-right', '1px solid #F00');
		$('.frame-dr-body.right').removeClass('invisible');
		direction = 'darea3';
		
		if (br_cri == 'left') {
			$('.dr-cri-l').addClass('dr-cri-selected');
			$('.dr-cri-r').removeClass('dr-cri-selected');
		} else {
			$('.dr-cri-l').removeClass('dr-cri-selected');
			$('.dr-cri-r').addClass('dr-cri-selected');
		}
	} else if ($(obj).hasClass('backward')) {
		$('.dressroom-map-way.above').css('border-bottom', '1px solid #F00');
		$('.frame-dr-body.backward').removeClass('invisible');
		direction = 'darea4';
		
		if (bb_cri == 'left') {
			$('.dr-cri-l').addClass('dr-cri-selected');
			$('.dr-cri-r').removeClass('dr-cri-selected');
		} else {
			$('.dr-cri-l').removeClass('dr-cri-selected');
			$('.dr-cri-r').addClass('dr-cri-selected');
		}
	}
}

function dr_body_remove_click() {
	if (current_body == 'bf_l' || current_body == 'bl_r') {
		setCorner('', 'dcorner1');
	} else if (current_body == 'bf_r' || current_body == 'br_l') {
		setCorner('', 'dcorner2');
	} else if (current_body == 'bl_l' || current_body == 'bb_r') {
		setCorner('', 'dcorner3');
	} else if (current_body == 'br_r' || current_body == 'bb_l') {
		setCorner('', 'dcorner4');
	} else {
		$('#baid'+$('#'+current_body).attr('data-idx')).remove();
		
		var tempWidth = Number($('#'+current_body).attr('data-width'));
		if (!$('.frame-dr-body.forward').hasClass('invisible')) {
			bf_sum -= tempWidth;
			showSize(1);
		} else if (!$('.frame-dr-body.left').hasClass('invisible')) {
			bl_sum -= tempWidth;
			showSize(2);
		} else if (!$('.frame-dr-body.right').hasClass('invisible')) {
			br_sum -= tempWidth;
			showSize(3);
		} else if (!$('.frame-dr-body.backward').hasClass('invisible')) {
			bb_sum -= tempWidth;
			showSize(4);
		}
	}
	
	$('#'+current_body).remove();
	$('.dr-check').addClass('invisible');
	$('#controller-dr').addClass('invisible');
	current_body = '';
}

function dr_top_board_large_click() {
	if ($('#'+current_body).hasClass('dr_b800_c2_a')) {
		$('#'+current_body).addClass('dr_b800_c1_a');
		$('#'+current_body).removeClass('dr_b800_c2_a');
		$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b800_c1_a.png)');
	} else if ($('#'+current_body).hasClass('dr_b800_c2_b')) {
		$('#'+current_body).addClass('dr_b800_c1_b');
		$('#'+current_body).removeClass('dr_b800_c2_b');
		$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b800_c1_b.png)');
	} else if ($('#'+current_body).hasClass('dr_b800_d2')) {
		$('#'+current_body).addClass('dr_b800_d1');
		$('#'+current_body).removeClass('dr_b800_d2');
		$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b800_d1.png)');
	} else if ($('#'+current_body).hasClass('dr_b800_e2')) {
		$('#'+current_body).addClass('dr_b800_e1');
		$('#'+current_body).removeClass('dr_b800_e2');
		$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b800_e1.png)');
	}
	
	$('.dr-top-board-large').addClass('dr-board-selected');
	$('.dr-top-board-small').removeClass('dr-board-selected');
}

function dr_top_board_small_click() {
	if ($('#'+current_body).hasClass('dr_b800_c1_a')) {
		$('#'+current_body).addClass('dr_b800_c2_a');
		$('#'+current_body).removeClass('dr_b800_c1_a');
		$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b800_c2_a.png)');
	} else if ($('#'+current_body).hasClass('dr_b800_c1_b')) {
		$('#'+current_body).addClass('dr_b800_c2_b');
		$('#'+current_body).removeClass('dr_b800_c1_b');
		$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b800_c2_b.png)');
	} else if ($('#'+current_body).hasClass('dr_b800_d1')) {
		$('#'+current_body).addClass('dr_b800_d2');
		$('#'+current_body).removeClass('dr_b800_d1');
		$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b800_d2.png)');
	} else if ($('#'+current_body).hasClass('dr_b800_e1')) {
		$('#'+current_body).addClass('dr_b800_e2');
		$('#'+current_body).removeClass('dr_b800_e1');
		$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b800_e2.png)');
	}
	
	$('.dr-top-board-small').addClass('dr-board-selected');
	$('.dr-top-board-large').removeClass('dr-board-selected');
}

function dr_side_board_iron_click() {
	if (current_body == 'bf_l' || current_body == 'bl_r') {
		$('#bf_l').addClass('dr_bcorner_l1');
		$('#bf_l').removeClass('dr_bcorner_l2');
		$('#bf_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_l1.png)');
		$('#bl_r').addClass('dr_bcorner_r1');
		$('#bl_r').removeClass('dr_bcorner_r2');
		$('#bl_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_r1.png)');
	} else if (current_body == 'bl_l' || current_body == 'bb_r') {
		$('#bl_l').addClass('dr_bcorner_l1');
		$('#bl_l').removeClass('dr_bcorner_l2');
		$('#bl_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_l1.png)');
		$('#bb_r').addClass('dr_bcorner_r1');
		$('#bb_r').removeClass('dr_bcorner_r2');
		$('#bb_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_r1.png)');
	} else if (current_body == 'br_l' || current_body == 'bf_r') {
		$('#br_l').addClass('dr_bcorner_l1');
		$('#br_l').removeClass('dr_bcorner_l2');
		$('#br_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_l1.png)');
		$('#bf_r').addClass('dr_bcorner_r1');
		$('#bf_r').removeClass('dr_bcorner_r2');
		$('#bf_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_r1.png)');
	} else if (current_body == 'bb_l' || current_body == 'br_r') {
		$('#bb_l').addClass('dr_bcorner_l1');
		$('#bb_l').removeClass('dr_bcorner_l2');
		$('#bb_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_l1.png)');
		$('#br_r').addClass('dr_bcorner_r1');
		$('#br_r').removeClass('dr_bcorner_r2');
		$('#br_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_r1.png)');
	} else if ($('#'+current_body).hasClass('dr_b800_a2')) {
		$('#'+current_body).addClass('dr_b800_a1');
		$('#'+current_body).removeClass('dr_b800_a2');
		$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b800_a1.png)');
	} else if ($('#'+current_body).hasClass('dr_b800_b2')) {
		$('#'+current_body).addClass('dr_b800_b1');
		$('#'+current_body).removeClass('dr_b800_b2');
		$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b800_b1.png)');
	} else if ($('#'+current_body).hasClass('dr_b600_a1')) {
		$('#'+current_body).addClass('dr_b600_a1');
		$('#'+current_body).removeClass('dr_b600_a2');
		$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b600_a1.png)');
	} else if ($('#'+current_body).hasClass('dr_b600_b2')) {
		$('#'+current_body).addClass('dr_b600_b1');
		$('#'+current_body).removeClass('dr_b600_b2');
		$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b600_b1.png)');
	}
	
	$('.dr-side-board-iron').addClass('dr-board-selected');
	$('.dr-side-board-wood').removeClass('dr-board-selected');
}

function dr_side_board_wood_click() {
	if (current_body == 'bf_l' || current_body == 'bl_r') {
		$('#bf_l').addClass('dr_bcorner_l2');
		$('#bf_l').removeClass('dr_bcorner_l1');
		$('#bf_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_l2.png)');
		$('#bl_r').addClass('dr_bcorner_r2');
		$('#bl_r').removeClass('dr_bcorner_r1');
		$('#bl_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_r2.png)');
	} else if (current_body == 'bl_l' || current_body == 'bb_r') {
		$('#bl_l').addClass('dr_bcorner_l2');
		$('#bl_l').removeClass('dr_bcorner_l1');
		$('#bl_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_l2.png)');
		$('#bb_r').addClass('dr_bcorner_r2');
		$('#bb_r').removeClass('dr_bcorner_r1');
		$('#bb_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_r2.png)');
	} else if (current_body == 'br_l' || current_body == 'bf_r') {
		$('#br_l').addClass('dr_bcorner_l2');
		$('#br_l').removeClass('dr_bcorner_l1');
		$('#br_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_l2.png)');
		$('#bf_r').addClass('dr_bcorner_r2');
		$('#bf_r').removeClass('dr_bcorner_r1');
		$('#bf_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_r2.png)');
	} else if (current_body == 'bb_l' || current_body == 'br_r') {
		$('#bb_l').addClass('dr_bcorner_l2');
		$('#bb_l').removeClass('dr_bcorner_l1');
		$('#bb_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_l2.png)');
		$('#br_r').addClass('dr_bcorner_r2');
		$('#br_r').removeClass('dr_bcorner_r1');
		$('#br_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_r2.png)');
	} else if ($('#'+current_body).hasClass('dr_b800_a1')) {
		$('#'+current_body).addClass('dr_b800_a2');
		$('#'+current_body).removeClass('dr_b800_a1');
		$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b800_a2.png)');
	} else if ($('#'+current_body).hasClass('dr_b800_b1')) {
		$('#'+current_body).addClass('dr_b800_b2');
		$('#'+current_body).removeClass('dr_b800_b1');
		$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b800_b2.png)');
	} else if ($('#'+current_body).hasClass('dr_b600_a1')) {
		$('#'+current_body).addClass('dr_b600_a2');
		$('#'+current_body).removeClass('dr_b600_a1');
		$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b600_a2.png)');
	} else if ($('#'+current_body).hasClass('dr_b600_b1')) {
		$('#'+current_body).addClass('dr_b600_b2');
		$('#'+current_body).removeClass('dr_b600_b1');
		$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b600_b2.png)');
	}
	
	$('.dr-side-board-wood').addClass('dr-board-selected');
	$('.dr-side-board-iron').removeClass('dr-board-selected');
}

function dr_b1000_b_option_click(obj) {
	if ($(obj).hasClass('b1000_b1')) {
		$('#'+current_body).addClass('dr_b1000_b1');
		$('#'+current_body).removeClass('dr_b1000_b2').removeClass('dr_b1000_b3');
		$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_b1.png)');
	} else if ($(obj).hasClass('b1000_b2')) {
		$('#'+current_body).addClass('dr_b1000_b2');
		$('#'+current_body).removeClass('dr_b1000_b1').removeClass('dr_b1000_b3');
		$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_b2.png)');
	}else if ($(obj).hasClass('b1000_b3')) {
		$('#'+current_body).addClass('dr_b1000_b3');
		$('#'+current_body).removeClass('dr_b1000_b1').removeClass('dr_b1000_b2');
		$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_b3.png)');
	}
}

function dr_b900_a_option_click(obj) {
	if ($(obj).hasClass('b900_a1')) {
		$('#'+current_body).addClass('dr_b900_a1');
		$('#'+current_body).removeClass('dr_b900_a2');
		$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b900_a1_a.png)');
	} else if ($(obj).hasClass('b900_a2')) {
		$('#'+current_body).addClass('dr_b900_a2');
		$('#'+current_body).removeClass('dr_b900_a1');
		$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b900_a2.png)');
	}
}

function dr_b900_b_option_click(obj) {
	if ($(obj).hasClass('b900_b1')) {
		$('#'+current_body).addClass('dr_b900_b1');
		$('#'+current_body).removeClass('dr_b900_b2');
		$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b900_b1.png)');
	} else if ($(obj).hasClass('b900_b2')) {
		$('#'+current_body).addClass('dr_b900_b2');
		$('#'+current_body).removeClass('dr_b900_b1');
		$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b900_b2.png)');
	}
}
function dr_b900_c_option_click(obj) {
	if ($(obj).hasClass('b900_c1')) {
		$('#'+current_body).addClass('dr_b900_c1');
		$('#'+current_body).removeClass('dr_b900_c2').removeClass('dr_b900_c3');
		$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b900_c1.png)');
	} else if ($(obj).hasClass('b900_c2')) {
		$('#'+current_body).addClass('dr_b900_c2');
		$('#'+current_body).removeClass('dr_b900_c1').removeClass('dr_b900_c3');
		$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b900_c2.png)');
	}else if ($(obj).hasClass('b900_c3')) {
		$('#'+current_body).addClass('dr_b900_c3');
		$('#'+current_body).removeClass('dr_b900_c1').removeClass('dr_b900_c2');
		$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b900_c3.png)');
	}
}
function dr_b800_c_option_click(obj) {
	if ($(obj).hasClass('b800_c_a')) {
		if ($('#'+current_body).hasClass('dr_b800_c1_b')) {
			$('#'+current_body).addClass('dr_b800_c1_a');
			$('#'+current_body).removeClass('dr_b800_c1_b');
			$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b800_c1_a.png)');
		} else if ($('#'+current_body).hasClass('dr_b800_c2_b')) {
			$('#'+current_body).addClass('dr_b800_c2_a');
			$('#'+current_body).removeClass('dr_b800_c2_b');
			$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b800_c2_a.png)');
		}
	} else if ($(obj).hasClass('b800_c_b')) {
		if ($('#'+current_body).hasClass('dr_b800_c1_a')) {
			$('#'+current_body).addClass('dr_b800_c1_b');
			$('#'+current_body).removeClass('dr_b800_c1_a');
			$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b800_c1_b.png)');
		} else if ($('#'+current_body).hasClass('dr_b800_c2_a')) {
			$('#'+current_body).addClass('dr_b800_c2_b');
			$('#'+current_body).removeClass('dr_b800_c2_a');
			$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b800_c2_b.png)');
		}
	}
}

function dr_b800_b_option_click(obj) {
	if ($(obj).hasClass('b800_b1')) {
		$('#'+current_body).addClass('dr_b800_b1');
		$('#'+current_body).removeClass('dr_b800_b2');
		$('#'+current_body).removeClass('dr_b800_b3');
		$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b800_b1.png)');
	} else if ($(obj).hasClass('b800_b2')) {
		$('#'+current_body).addClass('dr_b800_b2');
		$('#'+current_body).removeClass('dr_b800_b1');
		$('#'+current_body).removeClass('dr_b800_b3');
		$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b800_b2.png)');
	} else if ($(obj).hasClass('b800_b3')) {
		$('#'+current_body).addClass('dr_b800_b3');
		$('#'+current_body).removeClass('dr_b800_b1');
		$('#'+current_body).removeClass('dr_b800_b2');
		$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b800_b3.png)');
	}
}

function dr_b600_c_option_click(obj) {
	if ($(obj).hasClass('b600_c1')) {
		$('#'+current_body).addClass('dr_b600_c1');
		$('#'+current_body).removeClass('dr_b600_c2').removeClass('dr_b600_c3');
		$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b600_c1.png)');
	} else if ($(obj).hasClass('b600_c2')) {
		$('#'+current_body).addClass('dr_b600_c2');
		$('#'+current_body).removeClass('dr_b600_c1').removeClass('dr_b600_c3');
		$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b600_c2.png)');
	}else if ($(obj).hasClass('b600_c3')) {
		$('#'+current_body).addClass('dr_b600_c3');
		$('#'+current_body).removeClass('dr_b600_c1').removeClass('dr_b600_c2');
		$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b600_c3.png)');
	}
}

function changeDrKind(tway, tcnt, twidth, tkind) {
	var wk = $('#kind').val();
	var dr='';
	var drc='';
	var optionA='';
	var optionB='';
	var optionC='';
	var optionD='';
	var tcn='';
	if (tkind == '1000_a1_aa' || tkind == '1000_a1_bb' || tkind == '1000_a1' || tkind == '1000_a2'||tkind == '1000_a3' || tkind == '1000_a4'|| tkind == '1000_a_a'|| tkind == '1000_a_b'|| tkind == '1000_a_c'|| tkind == '1000_a_d') {

		switch (tkind) {
		case '1000_a1_aa': $('#1000_a1_aa').addClass('choiceBtn'); $('#1000_a1_bb').removeClass('choiceBtn'); break;
		case '1000_a1_bb': $('#1000_a1_bb').addClass('choiceBtn'); $('#1000_a1_aa').removeClass('choiceBtn'); break;
		case '1000_a1': $('#1000_a1').addClass('choiceBtn'); $('#1000_a2').removeClass('choiceBtn'); $('#1000_a3').removeClass('choiceBtn'); $('#1000_a4').removeClass('choiceBtn');break;
		case '1000_a2': $('#1000_a2').addClass('choiceBtn'); $('#1000_a1').removeClass('choiceBtn'); $('#1000_a3').removeClass('choiceBtn'); $('#1000_a4').removeClass('choiceBtn');break;
		case '1000_a3': $('#1000_a3').addClass('choiceBtn'); $('#1000_a4').removeClass('choiceBtn'); $('#1000_a1').removeClass('choiceBtn'); $('#1000_a2').removeClass('choiceBtn');break;
		case '1000_a4': $('#1000_a4').addClass('choiceBtn'); $('#1000_a3').removeClass('choiceBtn'); $('#1000_a1').removeClass('choiceBtn'); $('#1000_a2').removeClass('choiceBtn');break;
		case '1000_a_a': if($('#1000_a_a').hasClass('choiceBtn')){ $('#1000_a_a').removeClass('choiceBtn');break;}
									else $('#1000_a_a').addClass('choiceBtn'); break;
		case '1000_a_b': if($('#1000_a_b').hasClass('choiceBtn')){ $('#1000_a_b').removeClass('choiceBtn'); break;}
									else $('#1000_a_b').addClass('choiceBtn'); break;
		case '1000_a_c': if($('#1000_a_c').hasClass('choiceBtn')){ $('#1000_a_c').removeClass('choiceBtn'); break;}
									else $('#1000_a_c').addClass('choiceBtn');$('#1000_a_d').removeClass('choiceBtn');break;
		case '1000_a_d': if($('#1000_a_d').hasClass('choiceBtn')){ $('#1000_a_d').removeClass('choiceBtn');break;}
									else $('#1000_a_d').addClass('choiceBtn');$('#1000_a_c').removeClass('choiceBtn'); break;
		}
		if($('#1000_a1_aa').hasClass('choiceBtn'))dr='0';
		if($('#1000_a1_bb').hasClass('choiceBtn'))dr='1';
		if($('#1000_a1').hasClass('choiceBtn'))drc='a1';
		if($('#1000_a2').hasClass('choiceBtn'))drc='a2';
		if($('#1000_a3').hasClass('choiceBtn'))drc='a3';
		if($('#1000_a4').hasClass('choiceBtn'))drc='a4';
		if($('#1000_a_a').hasClass('choiceBtn'))optionA='WPH-5105_a';
		if($('#1000_a_b').hasClass('choiceBtn'))optionB='BWO-0001_a';
		if($('#1000_a_c').hasClass('choiceBtn'))optionC='MRC-0001_a';
		if($('#1000_a_d').hasClass('choiceBtn'))optionD='MRC-0002_a';
		
		tcn='dr_b1000_'+drc+'_'+dr;

		if ($('#1000_a1_aa').hasClass('choiceBtn')&& $('#1000_a1').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class',  tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_a1_0\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_a1.png\')');
		} else if ($('#1000_a1_aa').hasClass('choiceBtn')&& $('#1000_a2').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class',  tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_a2_0\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_a2.png\')');
		} else if ($('#1000_a1_bb').hasClass('choiceBtn')&& $('#1000_a1').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_a1_1\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_a1_1.png\')');
		} else if ($('#1000_a1_bb').hasClass('choiceBtn')&& $('#1000_a2').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_a2_1\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_a1_1.png\')');
		} 
		
		
			else if ($('#1000_a1_aa').hasClass('choiceBtn')&& $('#1000_a3').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_a3_0\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_a1.png\')');
		} else if ($('#1000_a1_aa').hasClass('choiceBtn')&& $('#1000_a4').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_a4_0\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_a2.png\')');
		} else if ($('#1000_a1_bb').hasClass('choiceBtn')&& $('#1000_a3').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_a3_1\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_a1_1_1.png\')');
		} else if ($('#1000_a1_bb').hasClass('choiceBtn')&& $('#1000_a4').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_a4_1\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_a1_1_1.png\')');
		}
		
		if($('#1000_a1_bb').hasClass('choiceBtn')&&$('#1000_a_a').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opa'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div id='+tway+'opa'+tcnt + '  class="'+optionA + '" style="background-image: url(\'/images/wardrobe/dressroom/' + wk + '/WPH-5105.png\');"></div>');
		}else if($('#1000_a1_aa').hasClass('choiceBtn')&&$('#1000_a_a').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opa'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opa'+tcnt + '  class="'+optionA + '"></div>');
		}else if(!$('#1000_a_a').hasClass('choiceBtn')){$('div').remove('#'+tway+'opa'+tcnt);}
		
		if($('#1000_a1_bb').hasClass('choiceBtn')&&$('#1000_a_b').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opb'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opb'+tcnt + '  class="'+optionB + '" style="background-image: url(\'/images/wardrobe/dressroom/' + wk + '/BWO-0001.png\');"></div>');
		}else if($('#1000_a1_aa').hasClass('choiceBtn')&&$('#1000_a_b').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opb'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opb'+tcnt + '  class="'+optionB + '"></div>');
		}else if(!$('#1000_a_b').hasClass('choiceBtn')){$('div').remove('#'+tway+'opb'+tcnt);}
		
		if($('#1000_a1_bb').hasClass('choiceBtn')&&$('#1000_a_c').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opc'+tcnt);
			$('div').remove('#'+tway+'opd'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opc'+tcnt + '  class="'+optionC + '" style="background-image: url(\'/images/wardrobe/dressroom/' + wk + '/MRC-0001.png\');"></div>');
		}else if($('#1000_a1_aa').hasClass('choiceBtn')&&$('#1000_a_c').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opc'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opc'+tcnt + '  class="'+optionC + '"></div>');
		}else if(!$('#1000_a_c').hasClass('choiceBtn')){$('div').remove('#'+tway+'opc'+tcnt);}
		
		if($('#1000_a1_bb').hasClass('choiceBtn')&&$('#1000_a_d').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opc'+tcnt);
			$('div').remove('#'+tway+'opd'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opd'+tcnt + '  class="'+optionD + '" style="background-image: url(\'/images/wardrobe/dressroom/' + wk + '/MRC-0002.png\');"></div>');
		}else if($('#1000_a1_aa').hasClass('choiceBtn')&&$('#1000_a_d').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opd'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div id='+tway+'opd'+tcnt + '  class="'+optionD + '"></div>');
		}else if(!$('#1000_a_d').hasClass('choiceBtn')){$('div').remove('#'+tway+'opd'+tcnt);}
			
	}else if (tkind == '1000_k1_aa' || tkind == '1000_k1_bb' || tkind == '1000_k1' || tkind == '1000_k2'|| tkind == '1000_k3' || tkind == '1000_k4'|| tkind == '1000_k_a'|| tkind == '1000_k_b'|| tkind == '1000_k_c'|| tkind == '1000_k_d'|| tkind == '1000_k_e') {

		switch (tkind) {
		case '1000_k1_aa': $('#1000_k1_aa').addClass('choiceBtn'); $('#1000_k1_bb').removeClass('choiceBtn'); break;
		case '1000_k1_bb': $('#1000_k1_bb').addClass('choiceBtn'); $('#1000_k1_aa').removeClass('choiceBtn'); break;
		case '1000_k1': $('#1000_k1').addClass('choiceBtn'); $('#1000_k2').removeClass('choiceBtn'); $('#1000_k3').removeClass('choiceBtn'); $('#1000_k4').removeClass('choiceBtn');break;
		case '1000_k2': $('#1000_k2').addClass('choiceBtn'); $('#1000_k1').removeClass('choiceBtn'); $('#1000_k3').removeClass('choiceBtn'); $('#1000_k4').removeClass('choiceBtn');break;
		case '1000_k3': $('#1000_k3').addClass('choiceBtn'); $('#1000_k1').removeClass('choiceBtn'); $('#1000_k2').removeClass('choiceBtn'); $('#1000_k4').removeClass('choiceBtn');break;
		case '1000_k4': $('#1000_k4').addClass('choiceBtn'); $('#1000_k1').removeClass('choiceBtn'); $('#1000_k2').removeClass('choiceBtn'); $('#1000_k3').removeClass('choiceBtn');break;
		case '1000_k_a': if($('#1000_k_a').hasClass('choiceBtn')){ $('#1000_k_a').removeClass('choiceBtn');break;}
									else $('#1000_k_a').addClass('choiceBtn'); break;
		case '1000_k_b': if($('#1000_k_b').hasClass('choiceBtn')){ $('#1000_k_b').removeClass('choiceBtn'); break;}
									else $('#1000_k_b').addClass('choiceBtn'); break;
		case '1000_k_c': if($('#1000_k_c').hasClass('choiceBtn')){ $('#1000_k_c').removeClass('choiceBtn'); break;}
									else $('#1000_k_c').addClass('choiceBtn');$('#1000_k_d').removeClass('choiceBtn');break;
		case '1000_k_d': if($('#1000_k_d').hasClass('choiceBtn')){ $('#1000_k_d').removeClass('choiceBtn');break;}
									else $('#1000_k_d').addClass('choiceBtn');$('#1000_k_c').removeClass('choiceBtn'); break;
		case '1000_k_e': if($('#1000_k_e').hasClass('choiceBtn')){ $('#1000_k_e').removeClass('choiceBtn');break;}
									else $('#1000_k_e').addClass('choiceBtn'); break;
		}
		if($('#1000_k1_aa').hasClass('choiceBtn'))dr='0';
		if($('#1000_k1_bb').hasClass('choiceBtn'))dr='1';
		if($('#1000_k1').hasClass('choiceBtn'))drc='k1';
		if($('#1000_k2').hasClass('choiceBtn'))drc='k2';
		if($('#1000_k3').hasClass('choiceBtn'))drc='k3';
		if($('#1000_k4').hasClass('choiceBtn'))drc='k4';
		if($('#1000_k_a').hasClass('choiceBtn'))optionA='WCD-5105B_a';
		if($('#1000_k_b').hasClass('choiceBtn'))optionB='BWO-0001_a';
		if($('#1000_k_c').hasClass('choiceBtn'))optionC='MRC-0001_a';
		if($('#1000_k_d').hasClass('choiceBtn'))optionD='MRC-0002_a';
		if($('#1000_k_e').hasClass('choiceBtn'))optionE='WCDZ-5014B_a';
		
		tcn='dr_b1000_'+drc+'_'+dr;
		
		if ($('#1000_k1_aa').hasClass('choiceBtn')&& $('#1000_k1').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class',  tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_k1_0\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_a1.png\')');
		} else if ($('#1000_k1_aa').hasClass('choiceBtn')&& $('#1000_k2').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class',  tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_k2_0\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_a2.png\')');
		} else if ($('#1000_k1_bb').hasClass('choiceBtn')&& $('#1000_k1').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_k1_1\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_k1_1.png\')');
		} else if ($('#1000_k1_bb').hasClass('choiceBtn')&& $('#1000_k2').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_k2_1\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_k1_1.png\')');
		} else if ($('#1000_k1_aa').hasClass('choiceBtn')&& $('#1000_k3').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class',  tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_k3_0\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_a1.png\')');
		} else if ($('#1000_k1_aa').hasClass('choiceBtn')&& $('#1000_k4').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class',  tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_k4_0\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_a2.png\')');
		} else if ($('#1000_k1_bb').hasClass('choiceBtn')&& $('#1000_k3').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_k3_1\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_k1_1_1.png\')');
		} else if ($('#1000_k1_bb').hasClass('choiceBtn')&& $('#1000_k4').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_k4_1\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_k1_1_1.png\')');
		}
		
		
		if($('#1000_k1_bb').hasClass('choiceBtn')&&$('#1000_k_a').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opa'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div id='+tway+'opa'+tcnt + '  class="'+optionA + '" style="background-image: url(\'/images/wardrobe/dressroom/' + wk + '/WCD-5105B.png\');"></div>');
		}else if($('#1000_k1_aa').hasClass('choiceBtn')&&$('#1000_k_a').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opa'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opa'+tcnt + '  class="'+optionA + '"></div>');
		}else if(!$('#1000_k_a').hasClass('choiceBtn')){$('div').remove('#'+tway+'opa'+tcnt);}
		
		if($('#1000_k1_bb').hasClass('choiceBtn')&&$('#1000_k_b').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opb'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opb'+tcnt + '  class="'+optionB + '" style="background-image: url(\'/images/wardrobe/dressroom/' + wk + '/BWO-0001.png\');"></div>');
		}else if($('#1000_k1_aa').hasClass('choiceBtn')&&$('#1000_k_b').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opb'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opb'+tcnt + '  class="'+optionB + '"></div>');
		}else if(!$('#1000_k_b').hasClass('choiceBtn')){$('div').remove('#'+tway+'opb'+tcnt);}
		
		if($('#1000_k1_bb').hasClass('choiceBtn')&&$('#1000_k_c').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opc'+tcnt);
			$('div').remove('#'+tway+'opd'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opc'+tcnt + '  class="'+optionC + '" style="background-image: url(\'/images/wardrobe/dressroom/' + wk + '/MRC-0001.png\');"></div>');
		}else if($('#1000_k1_aa').hasClass('choiceBtn')&&$('#1000_k_c').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opc'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opc'+tcnt + '  class="'+optionC + '"></div>');
		}else if(!$('#1000_k_c').hasClass('choiceBtn')){$('div').remove('#'+tway+'opc'+tcnt);}
		
		if($('#1000_k1_bb').hasClass('choiceBtn')&&$('#1000_k_d').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opc'+tcnt);
			$('div').remove('#'+tway+'opd'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opd'+tcnt + '  class="'+optionD + '" style="background-image: url(\'/images/wardrobe/dressroom/' + wk + '/MRC-0002.png\');"></div>');
		}else if($('#1000_k1_aa').hasClass('choiceBtn')&&$('#1000_k_d').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opd'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div id='+tway+'opd'+tcnt + '  class="'+optionD + '"></div>');
		}else if(!$('#1000_k_d').hasClass('choiceBtn')){$('div').remove('#'+tway+'opd'+tcnt);}
		
		if($('#1000_k1_bb').hasClass('choiceBtn')&&$('#1000_k_e').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'ope'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'ope'+tcnt + '  class="'+optionE + '" style="background-image: url(\'/images/wardrobe/dressroom/' + wk + '/WCDZ-5014B.png\');"></div>');
		}else if($('#1000_k1_aa').hasClass('choiceBtn')&&$('#1000_k_e').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'ope'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'ope'+tcnt + '  class="'+optionE + '"></div>');
		}else if(!$('#1000_k_e').hasClass('choiceBtn')){$('div').remove('#'+tway+'ope'+tcnt);}
			
	}else if (tkind == '1000_l1_aa' || tkind == '1000_l1_bb' || tkind == '1000_l1' || tkind == '1000_l2'|| tkind == '1000_l3' || tkind == '1000_l4'|| tkind == '1000_l_a'|| tkind == '1000_l_b'|| tkind == '1000_l_c'|| tkind == '1000_l_d') {

		switch (tkind) {
		case '1000_l1_aa': $('#1000_l1_aa').addClass('choiceBtn'); $('#1000_l1_bb').removeClass('choiceBtn'); break;
		case '1000_l1_bb': $('#1000_l1_bb').addClass('choiceBtn'); $('#1000_l1_aa').removeClass('choiceBtn'); break;
		case '1000_l1': $('#1000_l1').addClass('choiceBtn'); $('#1000_l2').removeClass('choiceBtn'); $('#1000_l3').removeClass('choiceBtn');$('#1000_l4').removeClass('choiceBtn');break;
		case '1000_l2': $('#1000_l2').addClass('choiceBtn'); $('#1000_l1').removeClass('choiceBtn'); $('#1000_l3').removeClass('choiceBtn');$('#1000_l4').removeClass('choiceBtn');break;
		case '1000_l3': $('#1000_l3').addClass('choiceBtn'); $('#1000_l1').removeClass('choiceBtn'); $('#1000_l2').removeClass('choiceBtn');$('#1000_l4').removeClass('choiceBtn');break;
		case '1000_l4': $('#1000_l4').addClass('choiceBtn'); $('#1000_l1').removeClass('choiceBtn'); $('#1000_l2').removeClass('choiceBtn');$('#1000_l3').removeClass('choiceBtn');break;
		case '1000_l_a': if($('#1000_l_a').hasClass('choiceBtn')){ $('#1000_l_a').removeClass('choiceBtn');break;}
									else $('#1000_l_a').addClass('choiceBtn'); break;
		case '1000_l_b': if($('#1000_l_b').hasClass('choiceBtn')){ $('#1000_l_b').removeClass('choiceBtn'); break;}
									else $('#1000_l_b').addClass('choiceBtn'); break;
		case '1000_l_c': if($('#1000_l_c').hasClass('choiceBtn')){ $('#1000_l_c').removeClass('choiceBtn'); break;}
									else $('#1000_l_c').addClass('choiceBtn');$('#1000_l_d').removeClass('choiceBtn');break;
		case '1000_l_d': if($('#1000_l_d').hasClass('choiceBtn')){ $('#1000_l_d').removeClass('choiceBtn');break;}
									else $('#1000_l_d').addClass('choiceBtn');$('#1000_l_c').removeClass('choiceBtn'); break;
		}
		if($('#1000_l1_aa').hasClass('choiceBtn'))dr='0';
		if($('#1000_l1_bb').hasClass('choiceBtn'))dr='1';
		if($('#1000_l1').hasClass('choiceBtn'))drc='l1';
		if($('#1000_l2').hasClass('choiceBtn'))drc='l2';
		if($('#1000_l3').hasClass('choiceBtn'))drc='l3';
		if($('#1000_l4').hasClass('choiceBtn'))drc='l4';
		if($('#1000_l_a').hasClass('choiceBtn'))optionA='WCD-5105D_a';
		if($('#1000_l_b').hasClass('choiceBtn'))optionB='BWO-0001_a';
		if($('#1000_l_c').hasClass('choiceBtn'))optionC='MRC-0001_a';
		if($('#1000_l_d').hasClass('choiceBtn'))optionD='MRC-0002_a';
		
		tcn='dr_b1000_'+drc+'_'+dr;
		
		if ($('#1000_l1_aa').hasClass('choiceBtn')&& $('#1000_l1').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class',  tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_l1_0\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_a1.png\')');
		} else if ($('#1000_l1_aa').hasClass('choiceBtn')&& $('#1000_l2').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class',  tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_l2_0\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_a2.png\')');
		} else if ($('#1000_l1_bb').hasClass('choiceBtn')&& $('#1000_l1').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_l1_1\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_l1_1.png\')');
		} else if ($('#1000_l1_bb').hasClass('choiceBtn')&& $('#1000_l2').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_l2_1\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_l1_1.png\')');
		}else if ($('#1000_l1_aa').hasClass('choiceBtn')&& $('#1000_l3').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class',  tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_l3_0\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_a1.png\')');
		} else if ($('#1000_l1_aa').hasClass('choiceBtn')&& $('#1000_l4').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class',  tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_l4_0\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_a2.png\')');
		} else if ($('#1000_l1_bb').hasClass('choiceBtn')&& $('#1000_l3').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_l3_1\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_l1_1_1.png\')');
		} else if ($('#1000_l1_bb').hasClass('choiceBtn')&& $('#1000_l4').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_l4_1\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_l1_1_1.png\')');
		}
		
		if($('#1000_l1_bb').hasClass('choiceBtn')&&$('#1000_l_a').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opa'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div id='+tway+'opa'+tcnt + '  class="'+optionA + '" style="background-image: url(\'/images/wardrobe/dressroom/' + wk + '/WCD-5105D.png\');"></div>');
		}else if($('#1000_l1_aa').hasClass('choiceBtn')&&$('#1000_l_a').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opa'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opa'+tcnt + '  class="'+optionA + '"></div>');
		}else if(!$('#1000_l_a').hasClass('choiceBtn')){$('div').remove('#'+tway+'opa'+tcnt);}
		
		if($('#1000_l1_bb').hasClass('choiceBtn')&&$('#1000_l_b').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opb'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opb'+tcnt + '  class="'+optionB + '" style="background-image: url(\'/images/wardrobe/dressroom/' + wk + '/BWO-0001.png\');"></div>');
		}else if($('#1000_l1_aa').hasClass('choiceBtn')&&$('#1000_l_b').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opb'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opb'+tcnt + '  class="'+optionB + '"></div>');
		}else if(!$('#1000_l_b').hasClass('choiceBtn')){$('div').remove('#'+tway+'opb'+tcnt);}
		
		if($('#1000_l1_bb').hasClass('choiceBtn')&&$('#1000_l_c').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opc'+tcnt);
			$('div').remove('#'+tway+'opd'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opc'+tcnt + '  class="'+optionC + '" style="background-image: url(\'/images/wardrobe/dressroom/' + wk + '/MRC-0001.png\');"></div>');
		}else if($('#1000_l1_aa').hasClass('choiceBtn')&&$('#1000_l_c').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opc'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opc'+tcnt + '  class="'+optionC + '"></div>');
		}else if(!$('#1000_l_c').hasClass('choiceBtn')){$('div').remove('#'+tway+'opc'+tcnt);}
		
		if($('#1000_l1_bb').hasClass('choiceBtn')&&$('#1000_l_d').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opc'+tcnt);
			$('div').remove('#'+tway+'opd'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opd'+tcnt + '  class="'+optionD + '" style="background-image: url(\'/images/wardrobe/dressroom/' + wk + '/MRC-0002.png\');"></div>');
		}else if($('#1000_l1_aa').hasClass('choiceBtn')&&$('#1000_l_d').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opd'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div id='+tway+'opd'+tcnt + '  class="'+optionD + '"></div>');
		}else if(!$('#1000_l_d').hasClass('choiceBtn')){$('div').remove('#'+tway+'opd'+tcnt);}
			
	}else if (tkind == '900_b1_aa' || tkind == '900_b1_bb' || tkind == '900_b1' || tkind == '900_b2'|| tkind == '900_b3' || tkind == '900_b4'|| tkind == '900_a_a'|| tkind == '900_a_b'|| tkind == '900_a_c'|| tkind == '900_a_d') {

		switch (tkind) {
		case '900_b1_aa': $('#900_b1_aa').addClass('choiceBtn'); $('#900_b1_bb').removeClass('choiceBtn'); break;
		case '900_b1_bb': $('#900_b1_bb').addClass('choiceBtn'); $('#900_b1_aa').removeClass('choiceBtn'); break;
		case '900_b1': $('#900_b1').addClass('choiceBtn'); $('#900_b2').removeClass('choiceBtn');$('#900_b3').removeClass('choiceBtn');$('#900_b4').removeClass('choiceBtn');break;
		case '900_b2': $('#900_b2').addClass('choiceBtn'); $('#900_b1').removeClass('choiceBtn');$('#900_b3').removeClass('choiceBtn');$('#900_b4').removeClass('choiceBtn');break;
		case '900_b3': $('#900_b3').addClass('choiceBtn'); $('#900_b1').removeClass('choiceBtn');$('#900_b2').removeClass('choiceBtn');$('#900_b4').removeClass('choiceBtn');break;
		case '900_b4': $('#900_b4').addClass('choiceBtn'); $('#900_b1').removeClass('choiceBtn');$('#900_b2').removeClass('choiceBtn');$('#900_b3').removeClass('choiceBtn');break;
				case '900_a_a': if($('#900_a_a').hasClass('choiceBtn')){ $('#900_a_a').removeClass('choiceBtn');break;}
									else $('#900_a_a').addClass('choiceBtn'); break;
		case '900_a_b': if($('#900_a_b').hasClass('choiceBtn')){ $('#900_a_b').removeClass('choiceBtn'); break;}
									else $('#900_a_b').addClass('choiceBtn'); break;
		case '900_a_c': if($('#900_a_c').hasClass('choiceBtn')){ $('#900_a_c').removeClass('choiceBtn'); break;}
									else $('#900_a_c').addClass('choiceBtn');$('#900_a_d').removeClass('choiceBtn');break;
		case '900_a_d': if($('#900_a_d').hasClass('choiceBtn')){ $('#900_a_d').removeClass('choiceBtn');break;}
									else $('#900_a_d').addClass('choiceBtn');$('#900_a_c').removeClass('choiceBtn'); break;
		}
		if($('#900_b1_aa').hasClass('choiceBtn'))dr='0';
		if($('#900_b1_bb').hasClass('choiceBtn'))dr='1';
		if($('#900_b1').hasClass('choiceBtn'))drc='b1';
		if($('#900_b2').hasClass('choiceBtn'))drc='b2';
		if($('#900_b3').hasClass('choiceBtn'))drc='b3';
		if($('#900_b4').hasClass('choiceBtn'))drc='b4';
		if($('#900_a_a').hasClass('choiceBtn'))optionA='WPH-4105_a';
		if($('#900_a_b').hasClass('choiceBtn'))optionB='BWO-0001_a';
		if($('#900_a_c').hasClass('choiceBtn'))optionC='MRC-0001_a';
		if($('#900_a_d').hasClass('choiceBtn'))optionD='MRC-0002_a';
		
		tcn='dr_b900_'+drc+'_'+dr;
		
		if ($('#900_b1_aa').hasClass('choiceBtn')&& $('#900_b1').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class',  tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_b1_0\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b900_b1.png\')');
		} else if ($('#900_b1_aa').hasClass('choiceBtn')&& $('#900_b2').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class',  tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_b2_0\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b900_b2.png\')');
		} else if ($('#900_b1_bb').hasClass('choiceBtn')&& $('#900_b1').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_b1_1\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b900_b1_1.png\')');
		} else if ($('#900_b1_bb').hasClass('choiceBtn')&& $('#900_b2').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_b2_1\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b900_b1_1.png\')');
		} else if ($('#900_b1_aa').hasClass('choiceBtn')&& $('#900_b3').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class',  tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_b3_0\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b900_b1.png\')');
		} else if ($('#900_b1_aa').hasClass('choiceBtn')&& $('#900_b4').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class',  tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_b4_0\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b900_b2.png\')');
		} else if ($('#900_b1_bb').hasClass('choiceBtn')&& $('#900_b3').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_b3_1\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b900_b1_1_1.png\')');
		} else if ($('#900_b1_bb').hasClass('choiceBtn')&& $('#900_b4').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_b4_1\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b900_b1_1_1.png\')');
		}
		
		if($('#900_b1_bb').hasClass('choiceBtn')&&$('#900_a_a').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opa'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div id='+tway+'opa'+tcnt + '  class="'+optionA + '" style="background-image: url(\'/images/wardrobe/dressroom/' + wk + '/WPH-4105.png\');"></div>');
		}else if($('#900_b1_aa').hasClass('choiceBtn')&&$('#900_a_a').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opa'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opa'+tcnt + '  class="'+optionA + '"></div>');
		}else if(!$('#900_a_a').hasClass('choiceBtn')){$('div').remove('#'+tway+'opa'+tcnt);}
		
		if($('#900_b1_bb').hasClass('choiceBtn')&&$('#900_a_b').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opb'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opb'+tcnt + '  class="'+optionB + '" style="background-image: url(\'/images/wardrobe/dressroom/' + wk + '/BWO-0001_a.png\');"></div>');
		}else if($('#900_b1_aa').hasClass('choiceBtn')&&$('#900_a_b').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opb'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opb'+tcnt + '  class="'+optionB + '"></div>');
		}else if(!$('#900_a_b').hasClass('choiceBtn')){$('div').remove('#'+tway+'opb'+tcnt);}
		
		if($('#900_b1_bb').hasClass('choiceBtn')&&$('#900_a_c').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opc'+tcnt);
			$('div').remove('#'+tway+'opd'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opc'+tcnt + '  class="'+optionC + '" style="background-image: url(\'/images/wardrobe/dressroom/' + wk + '/MRC-0001_a.png\');"></div>');
		}else if($('#900_b1_aa').hasClass('choiceBtn')&&$('#900_a_c').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opc'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opc'+tcnt + '  class="'+optionC + '"></div>');
		}else if(!$('#900_a_c').hasClass('choiceBtn')){$('div').remove('#'+tway+'opc'+tcnt);}
		
		if($('#900_b1_bb').hasClass('choiceBtn')&&$('#900_a_d').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opc'+tcnt);
			$('div').remove('#'+tway+'opd'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opd'+tcnt + '  class="'+optionD + '" style="background-image: url(\'/images/wardrobe/dressroom/' + wk + '/MRC-0002_a.png\');"></div>');
		}else if($('#900_b1_aa').hasClass('choiceBtn')&&$('#900_a_d').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opd'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div id='+tway+'opd'+tcnt + '  class="'+optionD + '"></div>');
		}else if(!$('#900_a_d').hasClass('choiceBtn')){$('div').remove('#'+tway+'opd'+tcnt);}
		
		
	}else if (tkind == '900_d1_aa' || tkind == '900_d1_bb' || tkind == '900_d1' || tkind == '900_d2'|| tkind == '900_d3' || tkind == '900_d4'|| tkind == '900_d_a'|| tkind == '900_d_b'|| tkind == '900_d_c'|| tkind == '900_d_d'|| tkind == '900_d_e') {

		switch (tkind) {
		case '900_d1_aa': $('#900_d1_aa').addClass('choiceBtn'); $('#900_d1_bb').removeClass('choiceBtn'); break;
		case '900_d1_bb': $('#900_d1_bb').addClass('choiceBtn'); $('#900_d1_aa').removeClass('choiceBtn'); break;
		case '900_d1': $('#900_d1').addClass('choiceBtn'); $('#900_d2').removeClass('choiceBtn'); $('#900_d3').removeClass('choiceBtn');$('#900_d4').removeClass('choiceBtn');break;
		case '900_d2': $('#900_d2').addClass('choiceBtn'); $('#900_d1').removeClass('choiceBtn'); $('#900_d3').removeClass('choiceBtn');$('#900_d4').removeClass('choiceBtn');break;
		case '900_d3': $('#900_d3').addClass('choiceBtn'); $('#900_d1').removeClass('choiceBtn'); $('#900_d2').removeClass('choiceBtn');$('#900_d4').removeClass('choiceBtn');break;
		case '900_d4': $('#900_d4').addClass('choiceBtn'); $('#900_d1').removeClass('choiceBtn'); $('#900_d2').removeClass('choiceBtn');$('#900_d3').removeClass('choiceBtn');break;
		case '900_d_a': if($('#900_d_a').hasClass('choiceBtn')){ $('#900_d_a').removeClass('choiceBtn');break;}
									else $('#900_d_a').addClass('choiceBtn'); break;
		case '900_d_b': if($('#900_d_b').hasClass('choiceBtn')){ $('#900_d_b').removeClass('choiceBtn'); break;}
									else $('#900_d_b').addClass('choiceBtn'); break;
		case '900_d_c': if($('#900_d_c').hasClass('choiceBtn')){ $('#900_d_c').removeClass('choiceBtn'); break;}
									else $('#900_d_c').addClass('choiceBtn');$('#900_d_d').removeClass('choiceBtn');break;
		case '900_d_d': if($('#900_d_d').hasClass('choiceBtn')){ $('#900_d_d').removeClass('choiceBtn');break;}
									else $('#900_d_d').addClass('choiceBtn');$('#900_d_c').removeClass('choiceBtn'); break;
		case '900_d_e': if($('#900_d_e').hasClass('choiceBtn')){ $('#900_d_e').removeClass('choiceBtn');break;}
									else $('#900_d_e').addClass('choiceBtn'); break;
		}
		if($('#900_d1_aa').hasClass('choiceBtn'))dr='0';
		if($('#900_d1_bb').hasClass('choiceBtn'))dr='1';
		if($('#900_d1').hasClass('choiceBtn'))drc='d1';
		if($('#900_d2').hasClass('choiceBtn'))drc='d2';
		if($('#900_d3').hasClass('choiceBtn'))drc='d3';
		if($('#900_d4').hasClass('choiceBtn'))drc='d4';
		if($('#900_d_a').hasClass('choiceBtn'))optionA='WCD-4105B_a';
		if($('#900_d_b').hasClass('choiceBtn'))optionB='BWO-0001_a';
		if($('#900_d_c').hasClass('choiceBtn'))optionC='MRC-0001_a';
		if($('#900_d_d').hasClass('choiceBtn'))optionD='MRC-0002_a';
		if($('#900_d_e').hasClass('choiceBtn'))optionE='WCDZ-4014B_a';
		
		tcn='dr_b900_'+drc+'_'+dr;
		
		if ($('#900_d1_aa').hasClass('choiceBtn')&& $('#900_d1').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class',  tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_d1_0\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b900_b1.png\')');
		} else if ($('#900_d1_aa').hasClass('choiceBtn')&& $('#900_d2').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class',  tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_d2_0\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b900_b2.png\')');
		} else if ($('#900_d1_bb').hasClass('choiceBtn')&& $('#900_d1').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_d1_1\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b900_d1_1.png\')');
		} else if ($('#900_d1_bb').hasClass('choiceBtn')&& $('#900_d2').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_d2_1\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b900_d1_1.png\')');
		} else if ($('#900_d1_aa').hasClass('choiceBtn')&& $('#900_d3').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class',  tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_d3_0\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b900_b1.png\')');
		} else if ($('#900_d1_aa').hasClass('choiceBtn')&& $('#900_d4').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class',  tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_d4_0\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b900_b2.png\')');
		} else if ($('#900_d1_bb').hasClass('choiceBtn')&& $('#900_d3').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_d3_1\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b900_d1_1_1.png\')');
		} else if ($('#900_d1_bb').hasClass('choiceBtn')&& $('#900_d4').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_d4_1\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b900_d1_1_1.png\')');
		}
		
		if($('#900_d1_bb').hasClass('choiceBtn')&&$('#900_d_a').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opa'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div id='+tway+'opa'+tcnt + '  class="'+optionA + '" style="background-image: url(\'/images/wardrobe/dressroom/' + wk + '/WCD-4105B.png\');"></div>');
		}else if($('#900_d1_aa').hasClass('choiceBtn')&&$('#900_d_a').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opa'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opa'+tcnt + '  class="'+optionA + '"></div>');
		}else if(!$('#900_d_a').hasClass('choiceBtn')){$('div').remove('#'+tway+'opa'+tcnt);}
		
		if($('#900_d1_bb').hasClass('choiceBtn')&&$('#900_d_b').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opb'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opb'+tcnt + '  class="'+optionB + '" style="background-image: url(\'/images/wardrobe/dressroom/' + wk + '/BWO-0001.png\');"></div>');
		}else if($('#900_d1_aa').hasClass('choiceBtn')&&$('#900_d_b').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opb'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opb'+tcnt + '  class="'+optionB + '"></div>');
		}else if(!$('#900_d_b').hasClass('choiceBtn')){$('div').remove('#'+tway+'opb'+tcnt);}
		
		if($('#900_d1_bb').hasClass('choiceBtn')&&$('#900_d_c').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opc'+tcnt);
			$('div').remove('#'+tway+'opd'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opc'+tcnt + '  class="'+optionC + '" style="background-image: url(\'/images/wardrobe/dressroom/' + wk + '/MRC-0001.png\');"></div>');
		}else if($('#900_d1_aa').hasClass('choiceBtn')&&$('#900_d_c').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opc'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opc'+tcnt + '  class="'+optionC + '"></div>');
		}else if(!$('#900_d_c').hasClass('choiceBtn')){$('div').remove('#'+tway+'opc'+tcnt);}
		
		if($('#900_d1_bb').hasClass('choiceBtn')&&$('#900_d_d').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opc'+tcnt);
			$('div').remove('#'+tway+'opd'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opd'+tcnt + '  class="'+optionD + '" style="background-image: url(\'/images/wardrobe/dressroom/' + wk + '/MRC-0002.png\');"></div>');
		}else if($('#900_d1_aa').hasClass('choiceBtn')&&$('#900_d_d').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opd'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div id='+tway+'opd'+tcnt + '  class="'+optionD + '"></div>');
		}else if(!$('#900_d_d').hasClass('choiceBtn')){$('div').remove('#'+tway+'opd'+tcnt);}
		
		if($('#900_d1_bb').hasClass('choiceBtn')&&$('#900_d_e').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'ope'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'ope'+tcnt + '  class="'+optionE + '" style="background-image: url(\'/images/wardrobe/dressroom/' + wk + '/WCDZ-4014B.png\');"></div>');
		}else if($('#900_d1_aa').hasClass('choiceBtn')&&$('#900_d_e').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'ope'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'ope'+tcnt + '  class="'+optionE + '"></div>');
		}else if(!$('#900_d_e').hasClass('choiceBtn')){$('div').remove('#'+tway+'ope'+tcnt);}
			
	}else if (tkind == '900_e1_aa' || tkind == '900_e1_bb' || tkind == '900_e1' || tkind == '900_e2'|| tkind == '900_e3' || tkind == '900_e4'|| tkind == '900_e_a'|| tkind == '900_e_b'|| tkind == '900_e_c'|| tkind == '900_e_d') {

		switch (tkind) {
		case '900_e1_aa': $('#900_e1_aa').addClass('choiceBtn'); $('#900_e1_bb').removeClass('choiceBtn'); break;
		case '900_e1_bb': $('#900_e1_bb').addClass('choiceBtn'); $('#900_e1_aa').removeClass('choiceBtn'); break;
		case '900_e1': $('#900_e1').addClass('choiceBtn'); $('#900_e2').removeClass('choiceBtn'); $('#900_e3').removeClass('choiceBtn'); $('#900_e4').removeClass('choiceBtn');break;
		case '900_e2': $('#900_e2').addClass('choiceBtn'); $('#900_e1').removeClass('choiceBtn'); $('#900_e3').removeClass('choiceBtn'); $('#900_e4').removeClass('choiceBtn');break;
		case '900_e3': $('#900_e3').addClass('choiceBtn'); $('#900_e1').removeClass('choiceBtn'); $('#900_e2').removeClass('choiceBtn'); $('#900_e4').removeClass('choiceBtn');break;
		case '900_e4': $('#900_e4').addClass('choiceBtn'); $('#900_e1').removeClass('choiceBtn'); $('#900_e2').removeClass('choiceBtn'); $('#900_e3').removeClass('choiceBtn');break;
		case '900_e_a': if($('#900_e_a').hasClass('choiceBtn')){ $('#900_e_a').removeClass('choiceBtn');break;}
									else $('#900_e_a').addClass('choiceBtn'); break;
		case '900_e_b': if($('#900_e_b').hasClass('choiceBtn')){ $('#900_e_b').removeClass('choiceBtn'); break;}
									else $('#900_e_b').addClass('choiceBtn'); break;
		case '900_e_c': if($('#900_e_c').hasClass('choiceBtn')){ $('#900_e_c').removeClass('choiceBtn'); break;}
									else $('#900_e_c').addClass('choiceBtn');$('#900_e_d').removeClass('choiceBtn');break;
		case '900_e_d': if($('#900_e_d').hasClass('choiceBtn')){ $('#900_e_d').removeClass('choiceBtn');break;}
									else $('#900_e_d').addClass('choiceBtn');$('#900_e_c').removeClass('choiceBtn'); break;
		}
		if($('#900_e1_aa').hasClass('choiceBtn'))dr='0';
		if($('#900_e1_bb').hasClass('choiceBtn'))dr='1';
		if($('#900_e1').hasClass('choiceBtn'))drc='e1';
		if($('#900_e2').hasClass('choiceBtn'))drc='e2';
		if($('#900_e3').hasClass('choiceBtn'))drc='e3';
		if($('#900_e4').hasClass('choiceBtn'))drc='e4';
		if($('#900_e_a').hasClass('choiceBtn'))optionA='WCD-4105D_a';
		if($('#900_e_b').hasClass('choiceBtn'))optionB='BWO-0001_a';
		if($('#900_e_c').hasClass('choiceBtn'))optionC='MRC-0001_a';
		if($('#900_e_d').hasClass('choiceBtn'))optionD='MRC-0002_a';
		
		tcn='dr_b900_'+drc+'_'+dr;
		
		if ($('#900_e1_aa').hasClass('choiceBtn')&& $('#900_e1').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class',  tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_e1_0\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b900_b1.png\')');
		} else if ($('#900_e1_aa').hasClass('choiceBtn')&& $('#900_e2').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class',  tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_e2_0\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b900_b2.png\')');
		} else if ($('#900_e1_bb').hasClass('choiceBtn')&& $('#900_e1').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_e1_1\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b900_e1_1.png\')');
		} else if ($('#900_e1_bb').hasClass('choiceBtn')&& $('#900_e2').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_e2_1\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b900_e1_1.png\')');
		} else if ($('#900_e1_aa').hasClass('choiceBtn')&& $('#900_e3').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class',  tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_e3_0\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b900_b1.png\')');
		} else if ($('#900_e1_aa').hasClass('choiceBtn')&& $('#900_e4').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class',  tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_e4_0\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b900_b2.png\')');
		} else if ($('#900_e1_bb').hasClass('choiceBtn')&& $('#900_e3').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_e3_1\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b900_e1_1_1.png\')');
		} else if ($('#900_e1_bb').hasClass('choiceBtn')&& $('#900_e4').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_e4_1\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b900_e1_1_1.png\')');
		}
		
		if($('#900_e1_bb').hasClass('choiceBtn')&&$('#900_e_a').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opa'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div id='+tway+'opa'+tcnt + '  class="'+optionA + '" style="background-image: url(\'/images/wardrobe/dressroom/' + wk + '/WCD-4105D.png\');"></div>');
		}else if($('#900_e1_aa').hasClass('choiceBtn')&&$('#900_e_a').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opa'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opa'+tcnt + '  class="'+optionA + '"></div>');
		}else if(!$('#900_e_a').hasClass('choiceBtn')){$('div').remove('#'+tway+'opa'+tcnt);}
		
		if($('#900_e1_bb').hasClass('choiceBtn')&&$('#900_e_b').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opb'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opb'+tcnt + '  class="'+optionB + '" style="background-image: url(\'/images/wardrobe/dressroom/' + wk + '/BWO-0001_a.png\');"></div>');
		}else if($('#900_e1_aa').hasClass('choiceBtn')&&$('#900_e_b').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opb'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opb'+tcnt + '  class="'+optionB + '"></div>');
		}else if(!$('#900_e_b').hasClass('choiceBtn')){$('div').remove('#'+tway+'opb'+tcnt);}
		
		if($('#900_e1_bb').hasClass('choiceBtn')&&$('#900_e_c').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opc'+tcnt);
			$('div').remove('#'+tway+'opd'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opc'+tcnt + '  class="'+optionC + '" style="background-image: url(\'/images/wardrobe/dressroom/' + wk + '/MRC-0001_a.png\');"></div>');
		}else if($('#900_e1_aa').hasClass('choiceBtn')&&$('#900_e_c').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opc'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opc'+tcnt + '  class="'+optionC + '"></div>');
		}else if(!$('#900_e_c').hasClass('choiceBtn')){$('div').remove('#'+tway+'opc'+tcnt);}
		
		if($('#900_e1_bb').hasClass('choiceBtn')&&$('#900_e_d').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opc'+tcnt);
			$('div').remove('#'+tway+'opd'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opd'+tcnt + '  class="'+optionD + '" style="background-image: url(\'/images/wardrobe/dressroom/' + wk + '/MRC-0002_a.png\');"></div>');
		}else if($('#900_e1_aa').hasClass('choiceBtn')&&$('#900_e_d').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opd'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div id='+tway+'opd'+tcnt + '  class="'+optionD + '"></div>');
		}else if(!$('#900_e_d').hasClass('choiceBtn')){$('div').remove('#'+tway+'opd'+tcnt);}
		
		
	}else if (tkind == '450_a1_aa' || tkind == '450_a1_bb' || tkind == '450_a1' || tkind == '450_a2'|| tkind == '450_a_a'|| tkind == '450_a_b'|| tkind == '450_a_c'|| tkind == '450_a_d'|| tkind == '450_a1_a') {

		switch (tkind) {
		case '450_a1_aa': $('#450_a1_aa').addClass('choiceBtn'); $('#450_a1_bb').removeClass('choiceBtn'); break;
		case '450_a1_bb': $('#450_a1_bb').addClass('choiceBtn'); $('#450_a1_aa').removeClass('choiceBtn'); break;
		case '450_a1': $('#450_a1').addClass('choiceBtn'); $('#450_a2').removeClass('choiceBtn');break;
		case '450_a2': $('#450_a2').addClass('choiceBtn'); $('#450_a1').removeClass('choiceBtn');break;
		case '450_a1_a': if($('#450_a1_a').hasClass('choiceBtn')){ $('#450_a1_a').removeClass('choiceBtn');break;}
		else $('#450_a1_a').addClass('choiceBtn'); break;
		}
		if($('#450_a1_aa').hasClass('choiceBtn'))dr='0';
		if($('#450_a1_bb').hasClass('choiceBtn'))dr='1';
		if($('#450_a1').hasClass('choiceBtn'))drc='a1';
		if($('#450_a2').hasClass('choiceBtn'))drc='a2';
		if($('#450_a1_a').hasClass('choiceBtn'))optionA='BP-4105_a';
		
		tcn='dr_b450_'+drc+'_'+dr;
		
		if ($('#450_a1_aa').hasClass('choiceBtn')&& $('#450_a1').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class',  tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'450_a1_0\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b450_a1.png\')');
		} else if ($('#450_a1_aa').hasClass('choiceBtn')&& $('#450_a2').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class',  tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'450_a2_0\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b450_a2.png\')');
		} else if ($('#450_a1_bb').hasClass('choiceBtn')&& $('#450_a1').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'450_a1_1\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b450_a1_1.png\')');
		} else if ($('#450_a1_bb').hasClass('choiceBtn')&& $('#450_a2').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', tcn);
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'450_a2_1\')');
			$('.'+tcn).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b450_a1_1.png\')');		
		}
		if($('#450_a1_bb').hasClass('choiceBtn')&&$('#450_a1_a').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opa'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opa'+tcnt + '  class="'+optionA + '" style="background-image: url(\'/images/wardrobe/dressroom/' + wk + '/BP-4105_a.png\');"></div>');
		}else if($('#450_a1_aa').hasClass('choiceBtn')&&$('#450_a1_a').hasClass('choiceBtn')){
			$('div').remove('#'+tway+'opa'+tcnt);
			$('#'+tway+'id'+tcnt).append('<div id='+tway+'opa'+tcnt + '  class="'+optionA + '"></div>');
		}else if(!$('#450_a1_a').hasClass('choiceBtn')){$('div').remove('#'+tway+'opa'+tcnt);}
		
	}else if (tkind == '1000_c1' || tkind == '1000_c2'|| tkind == '1000_c3'  || tkind == '1000_ca'||tkind == '1000_cb'|| tkind == '1000_c_a'|| tkind == '1000_c_b') {
		switch (tkind) {
		case '1000_c1': $('#1000_c1').addClass('choiceBtn'); $('#1000_c2').removeClass('choiceBtn');$('#1000_c3').removeClass('choiceBtn'); break;
		case '1000_c2': $('#1000_c2').addClass('choiceBtn'); $('#1000_c1').removeClass('choiceBtn');$('#1000_c3').removeClass('choiceBtn'); break;
		case '1000_c3': $('#1000_c3').addClass('choiceBtn'); $('#1000_c1').removeClass('choiceBtn');$('#1000_c2').removeClass('choiceBtn'); break;
		case '1000_ca': $('#1000_ca').addClass('choiceBtn'); $('#1000_c_a').removeClass('choiceBtn'); break;
		case '1000_cb': $('#1000_cb').addClass('choiceBtn'); $('#1000_c_b').removeClass('choiceBtn'); break;
		case '1000_c_a': $('#1000_c_a').addClass('choiceBtn'); $('#1000_ca').removeClass('choiceBtn'); break;
		case '1000_c_b': $('#1000_c_b').addClass('choiceBtn'); $('#1000_cb').removeClass('choiceBtn'); break;
		}
		if ($('#1000_c1').hasClass('choiceBtn') && $('#1000_ca').hasClass('choiceBtn') && $('#1000_cb').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_c1');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_c1\')');
			$('.dr_b1000_c1').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_c1.png\')');
		} else if ($('#1000_c1').hasClass('choiceBtn') && $('#1000_c_a').hasClass('choiceBtn') && $('#1000_cb').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_c1_a');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_c1_a\')');
			$('.dr_b1000_c1_a').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_c1_a.png\')');
		} else if ($('#1000_c1').hasClass('choiceBtn') && $('#1000_ca').hasClass('choiceBtn') && $('#1000_c_b').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_c1_b');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_c1_b\')');
			$('.dr_b1000_c1_b').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_c1_b.png\')');
		} else if ($('#1000_c1').hasClass('choiceBtn') && $('#1000_c_a').hasClass('choiceBtn') && $('#1000_c_b').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_c1_c');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_c1_c\')');
			$('.dr_b1000_c1_c').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_c1_c.png\')');
		}else if($('#1000_c2').hasClass('choiceBtn') && $('#1000_ca').hasClass('choiceBtn') && $('#1000_cb').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_c2');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_c2\')');
			$('.dr_b1000_c2').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_c2.png\')');
		} else if ($('#1000_c2').hasClass('choiceBtn') && $('#1000_c_a').hasClass('choiceBtn') && $('#1000_cb').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_c2_a');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_c2_a\')');
			$('.dr_b1000_c2_a').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_c2_a.png\')');
		} else if ($('#1000_c2').hasClass('choiceBtn') && $('#1000_ca').hasClass('choiceBtn') && $('#1000_c_b').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_c2_b');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_c2_b\')');
			$('.dr_b1000_c2_b').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_c2_b.png\')');
		} else if ($('#1000_c2').hasClass('choiceBtn') && $('#1000_c_a').hasClass('choiceBtn') && $('#1000_c_b').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_c2_c');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_c2_c\')');
			$('.dr_b1000_c2_c').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_c2_c.png\')');
		}else if($('#1000_c3').hasClass('choiceBtn') && $('#1000_ca').hasClass('choiceBtn') && $('#1000_cb').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_c3');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_c3\')');
			$('.dr_b1000_c3').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_c3.png\')');
		} else if ($('#1000_c3').hasClass('choiceBtn') && $('#1000_c_a').hasClass('choiceBtn') && $('#1000_cb').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_c3_a');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_c3_a\')');
			$('.dr_b1000_c3_a').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_c3_a.png\')');
		} else if ($('#1000_c3').hasClass('choiceBtn') && $('#1000_ca').hasClass('choiceBtn') && $('#1000_c_b').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_c3_b');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_c3_b\')');
			$('.dr_b1000_c3_b').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_c3_b.png\')');
		} else if ($('#1000_c3').hasClass('choiceBtn') && $('#1000_c_a').hasClass('choiceBtn') && $('#1000_c_b').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_c3_c');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_c3_c\')');
			$('.dr_b1000_c3_c').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_c3_c.png\')');
		}
	}else if (tkind == '1000_d1' || tkind == '1000_d2' || tkind == '1000_d3' || tkind == '1000_da'|| tkind == '1000_d1_a') {
		switch (tkind) {
		case '1000_d1': $('#1000_d1').addClass('choiceBtn'); $('#1000_d2').removeClass('choiceBtn');$('#1000_d3').removeClass('choiceBtn'); break;
		case '1000_d2': $('#1000_d2').addClass('choiceBtn'); $('#1000_d1').removeClass('choiceBtn');$('#1000_d3').removeClass('choiceBtn'); break;
		case '1000_d3': $('#1000_d3').addClass('choiceBtn'); $('#1000_d1').removeClass('choiceBtn');$('#1000_d2').removeClass('choiceBtn'); break;
		case '1000_da': $('#1000_da').addClass('choiceBtn'); $('#1000_d1_a').removeClass('choiceBtn'); break;
		case '1000_d1_a': $('#1000_d1_a').addClass('choiceBtn'); $('#1000_da').removeClass('choiceBtn'); break;
		}
		if ($('#1000_d1').hasClass('choiceBtn') && $('#1000_da').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_d1');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_d1\')');
			$('.dr_b1000_d1').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_d1.png\')');
		} else if ($('#1000_d1').hasClass('choiceBtn') && $('#1000_d1_a').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_d1_a');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_d1_a\')');
			$('.dr_b1000_d1_a').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_d1_a.png\')');
		} else if ($('#1000_d2').hasClass('choiceBtn') && $('#1000_da').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_d2');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_d2\')');
			$('.dr_b1000_d2').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_d2.png\')');
		} else if ($('#1000_d2').hasClass('choiceBtn') && $('#1000_d1_a').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_d2_a');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_d2_a\')');
			$('.dr_b1000_d2_a').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_d2_a.png\')');
		}else if ($('#1000_d3').hasClass('choiceBtn') && $('#1000_da').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_d3');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_d3\')');
			$('.dr_b1000_d3').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_d3.png\')');
		} else if ($('#1000_d3').hasClass('choiceBtn') && $('#1000_d1_a').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_d3_a');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_d3_a\')');
			$('.dr_b1000_d3_a').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_d3_a.png\')');
		}
	}else if (tkind == '1000_ea' || tkind == '1000_e_a' || tkind == '1000_eb'|| tkind == '1000_e_b') {
		switch (tkind) {
		case '1000_ea': $('#1000_ea').addClass('choiceBtn'); $('#1000_e_a').removeClass('choiceBtn'); break;
		case '1000_e_a': $('#1000_e_a').addClass('choiceBtn'); $('#1000_ea').removeClass('choiceBtn'); break;
		case '1000_eb': $('#1000_eb').addClass('choiceBtn'); $('#1000_e_b').removeClass('choiceBtn'); break;
		case '1000_e_b': $('#1000_e_b').addClass('choiceBtn'); $('#1000_eb').removeClass('choiceBtn'); break;
		}
		if ($('#1000_ea').hasClass('choiceBtn') && $('#1000_eb').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_e1');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_e1\')');
			$('.dr_b1000_e1').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_e1.png\')');
		} else if ($('#1000_e_a').hasClass('choiceBtn') && $('#1000_eb').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_e1_a');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_e1_a\')');
			$('.dr_b1000_e1_a').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_e1_a.png\')');
		} else if ($('#1000_ea').hasClass('choiceBtn') && $('#1000_e_b').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_e1_b');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_e1_b\')');
			$('.dr_b1000_e1_b').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_e1_b.png\')');
		} else if ($('#1000_e_a').hasClass('choiceBtn') && $('#1000_e_b').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_e1_c');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_e1_c\')');
			$('.dr_b1000_e1_c').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_e1_c.png\')');
		}
	}else if (tkind == '1000_fa' || tkind == '1000_f_a' || tkind == '1000_fb'|| tkind == '1000_f_b') {
		switch (tkind) {
		case '1000_fa': $('#1000_fa').addClass('choiceBtn'); $('#1000_f_a').removeClass('choiceBtn'); break;
		case '1000_f_a': $('#1000_f_a').addClass('choiceBtn'); $('#1000_fa').removeClass('choiceBtn'); break;
		case '1000_fb': $('#1000_fb').addClass('choiceBtn'); $('#1000_f_b').removeClass('choiceBtn'); break;
		case '1000_f_b': $('#1000_f_b').addClass('choiceBtn'); $('#1000_fb').removeClass('choiceBtn'); break;
		}
		if ($('#1000_fa').hasClass('choiceBtn') && $('#1000_fb').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_f1');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_f1\')');
			$('.dr_b1000_f1').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_f1.png\')');
		} else if ($('#1000_f_a').hasClass('choiceBtn') && $('#1000_fb').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_f1_a');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_f1_a\')');
			$('.dr_b1000_f1_a').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_f1_a.png\')');
		} else if ($('#1000_fa').hasClass('choiceBtn') && $('#1000_f_b').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_f1_b');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_f1_b\')');
			$('.dr_b1000_f1_b').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_f1_b.png\')');
		} else if ($('#1000_f_a').hasClass('choiceBtn') && $('#1000_f_b').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_f1_c');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_f1_c\')');
			$('.dr_b1000_f1_c').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_f1_c.png\')');
		}
	}else if (tkind == '1000_ga' || tkind == '1000_g_a' || tkind == '1000_gb'|| tkind == '1000_g_b') {
		switch (tkind) {
		case '1000_ga': $('#1000_ga').addClass('choiceBtn'); $('#1000_g_a').removeClass('choiceBtn'); break;
		case '1000_g_a': $('#1000_g_a').addClass('choiceBtn'); $('#1000_ga').removeClass('choiceBtn'); break;
		case '1000_gb': $('#1000_gb').addClass('choiceBtn'); $('#1000_g_b').removeClass('choiceBtn'); break;
		case '1000_g_b': $('#1000_g_b').addClass('choiceBtn'); $('#1000_gb').removeClass('choiceBtn'); break;
		}
		if ($('#1000_ga').hasClass('choiceBtn') && $('#1000_gb').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_g1');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_g1\')');
			$('.dr_b1000_g1').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_g1.png\')');
		} else if ($('#1000_g_a').hasClass('choiceBtn') && $('#1000_gb').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_g1_a');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_g1_a\')');
			$('.dr_b1000_g1_a').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_g1_a.png\')');
		} else if ($('#1000_ga').hasClass('choiceBtn') && $('#1000_g_b').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_g1_b');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_g1_b\')');
			$('.dr_b1000_g1_b').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_g1_b.png\')');
		} else if ($('#1000_g_a').hasClass('choiceBtn') && $('#1000_g_b').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_g1_c');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_g1_c\')');
			$('.dr_b1000_g1_c').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_g1_c.png\')');
		}
	}else if (tkind == '1000_ia' || tkind == '1000_i_a' || tkind == '1000_ib'|| tkind == '1000_i_b') {
		switch (tkind) {
		case '1000_ia': $('#1000_ia').addClass('choiceBtn'); $('#1000_i_a').removeClass('choiceBtn'); break;
		case '1000_i_a': $('#1000_i_a').addClass('choiceBtn'); $('#1000_ia').removeClass('choiceBtn'); break;
		case '1000_ib': $('#1000_ib').addClass('choiceBtn'); $('#1000_i_b').removeClass('choiceBtn'); break;
		case '1000_i_b': $('#1000_i_b').addClass('choiceBtn'); $('#1000_ib').removeClass('choiceBtn'); break;
		}
		if ($('#1000_ia').hasClass('choiceBtn') && $('#1000_ib').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_i1');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_i1\')');
			$('.dr_b1000_i1').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_i1.png\')');
		} else if ($('#1000_i_a').hasClass('choiceBtn') && $('#1000_ib').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_i1_a');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_i1_a\')');
			$('.dr_b1000_i1_a').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_i1_a.png\')');
		} else if ($('#1000_ia').hasClass('choiceBtn') && $('#1000_i_b').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_i1_b');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_i1_b\')');
			$('.dr_b1000_i1_b').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_i1_b.png\')');
		} else if ($('#1000_i_a').hasClass('choiceBtn') && $('#1000_i_b').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_i1_c');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_i1_c\')');
			$('.dr_b1000_i1_c').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_i1_c.png\')');
		}
	}else if (tkind == '1000_ja' || tkind == '1000_j_a' || tkind == '1000_jb'|| tkind == '1000_j_b') {
		switch (tkind) {
		case '1000_ja': $('#1000_ja').addClass('choiceBtn'); $('#1000_j_a').removeClass('choiceBtn'); break;
		case '1000_j_a': $('#1000_j_a').addClass('choiceBtn'); $('#1000_ja').removeClass('choiceBtn'); break;
		case '1000_jb': $('#1000_jb').addClass('choiceBtn'); $('#1000_j_b').removeClass('choiceBtn'); break;
		case '1000_j_b': $('#1000_j_b').addClass('choiceBtn'); $('#1000_jb').removeClass('choiceBtn'); break;
		}
		if ($('#1000_ja').hasClass('choiceBtn') && $('#1000_jb').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_j1');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_j1\')');
			$('.dr_b1000_j1').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_j1.png\')');
		} else if ($('#1000_j_a').hasClass('choiceBtn') && $('#1000_jb').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_j1_a');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_j1_a\')');
			$('.dr_b1000_j1_a').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_j1_a.png\')');
		} else if ($('#1000_ja').hasClass('choiceBtn') && $('#1000_j_b').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_j1_b');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_j1_b\')');
			$('.dr_b1000_j1_b').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_j1_b.png\')');
		} else if ($('#1000_j_a').hasClass('choiceBtn') && $('#1000_j_b').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_j1_c');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_j1_c\')');
			$('.dr_b1000_j1_c').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_j1_c.png\')');
		}
	}else if (tkind == '1000_h1'  || tkind == '1000_h3'|| tkind == '1000_ha'|| tkind == '1000_h_a') {
		switch (tkind) {
		case '1000_h1': $('#1000_h1').addClass('choiceBtn');$('#1000_h3').removeClass('choiceBtn'); break;
		case '1000_h3': $('#1000_h3').addClass('choiceBtn'); $('#1000_h1').removeClass('choiceBtn'); break;
		case '1000_ha': $('#1000_ha').addClass('choiceBtn'); $('#1000_h_a').removeClass('choiceBtn'); break;
		case '1000_h_a': $('#1000_h_a').addClass('choiceBtn'); $('#1000_ha').removeClass('choiceBtn'); break;
		}

		if ($('#1000_h1').hasClass('choiceBtn') && $('#1000_ha').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_h1');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_h1\')');
			$('.dr_b1000_h1').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_h1.png\')');
		} else if ($('#1000_h3').hasClass('choiceBtn') && $('#1000_ha').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_h3');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_h3\')');
			$('.dr_b1000_h3').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_h3.png\')');
		} else if ($('#1000_h1').hasClass('choiceBtn') && $('#1000_h_a').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_h1_a');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_h1_a\')');
			$('.dr_b1000_h1_a').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_h1_a.png\')');
		}else if ($('#1000_h3').hasClass('choiceBtn') && $('#1000_h_a').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b1000_h3_a');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_h3_a\')');
			$('.dr_b1000_h3_a').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b1000_h3_a.png\')');
		}
	}else if (tkind == '800_c1' || tkind == '800_c2' || tkind == '800_c_a' || tkind == '800_c_b') {
		switch (tkind) {
		case '800_c1': $('#800_c1').addClass('choiceBtn'); $('#800_c2').removeClass('choiceBtn'); break;
		case '800_c2': $('#800_c2').addClass('choiceBtn'); $('#800_c1').removeClass('choiceBtn'); break;
		case '800_c_a': $('#800_c_a').addClass('choiceBtn'); $('#800_c_b').removeClass('choiceBtn'); break;
		case '800_c_b': $('#800_c_b').addClass('choiceBtn'); $('#800_c_a').removeClass('choiceBtn'); break;
		}
		if ($('#800_c1').hasClass('choiceBtn') && $('#800_c_a').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b800_c1_a');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'800_c1_a\')');
			$('.dr_b800_c1_a').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b800_c1_a.png\')');
		} else if ($('#800_c1').hasClass('choiceBtn') && $('#800_c_b').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b800_c1_b');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'800_c1_b\')');
			$('.dr_b800_c1_b').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b800_c1_b.png\')');
		} else if ($('#800_c2').hasClass('choiceBtn') && $('#800_c_a').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b800_c2_a');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'800_c2_a\')');
			$('.dr_b800_c2_a').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b800_c2_a.png\')');
		} else if ($('#800_c2').hasClass('choiceBtn') && $('#800_c_b').hasClass('choiceBtn')) {
			$('#'+tway+'id'+tcnt).attr('class', 'dr_b800_c2_b');
			$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'800_c2_b\')');
			$('.dr_b800_c2_b').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b800_c2_b.png\')');
		}
	} else if (tkind == 'corner_1') {
		$('#'+twidth).removeClass('dr_bcorner_2').addClass('dr_bcorner_1');
		$('#'+tway).attr('class', 'dr_bcorner_l1');
		$('#'+tway).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'' + tkind + '\')');
		$('#'+tway).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_l1.png\')');
		$('#'+tcnt).attr('class', 'dr_bcorner_r1');
		$('#'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'' + tkind + '\')');
		$('#'+tcnt).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_r1.png\')');
		$('.drOption').removeClass('choiceBtn');
		$('#'+tkind).addClass('choiceBtn');
	} else if (tkind == 'corner_2') {
		$('#'+twidth).removeClass('dr_bcorner_1').addClass('dr_bcorner_2');
		$('#'+tway).attr('class', 'dr_bcorner_l2');
		$('#'+tway).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'' + tkind + '\')');
		$('#'+tway).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_l2.png\')');
		$('#'+tcnt).attr('class', 'dr_bcorner_r2');
		$('#'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'' + tkind + '\')');
		$('#'+tcnt).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_r2.png\')');
		$('.drOption').removeClass('choiceBtn');
		$('#'+tkind).addClass('choiceBtn');
	}else if (tkind == 'corner_a1' || tkind == 'corner_a2'|| tkind == 'corner_a3'||tkind == 'corner_aa' || tkind == 'corner_a_a'|| tkind == 'corner_ab'||tkind == 'corner_a_b') {
		switch (tkind) {
		case 'corner_a1': $('#corner_a1').addClass('choiceBtn'); $('#corner_a2').removeClass('choiceBtn');$('#corner_a3').removeClass('choiceBtn'); break;
		case 'corner_a2': $('#corner_a2').addClass('choiceBtn'); $('#corner_a1').removeClass('choiceBtn');$('#corner_a3').removeClass('choiceBtn'); break;
		case 'corner_a3': $('#corner_a3').addClass('choiceBtn'); $('#corner_a1').removeClass('choiceBtn');$('#corner_a2').removeClass('choiceBtn'); break;
		case 'corner_aa': $('#corner_aa').addClass('choiceBtn'); $('#corner_a_a').removeClass('choiceBtn'); break;
		case 'corner_a_a': $('#corner_a_a').addClass('choiceBtn'); $('#corner_aa').removeClass('choiceBtn'); break;
		case 'corner_ab': $('#corner_ab').addClass('choiceBtn'); $('#corner_a_b').removeClass('choiceBtn'); break;
		case 'corner_a_b': $('#corner_a_b').addClass('choiceBtn'); $('#corner_ab').removeClass('choiceBtn'); break;
		}
		if ($('#corner_a1').hasClass('choiceBtn') && $('#corner_aa').hasClass('choiceBtn')&& $('#corner_ab').hasClass('choiceBtn')) {
			$('#'+twidth).addClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
			$('#'+tway).attr('class', 'dr_bcorner_l1');
			$('#'+tway).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a1\')');
			$('.dr_bcorner_l1').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a1.png\')');
			$('#'+tcnt).attr('class', 'dr_bcorner_r1');
			$('#'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a1\')');
			$('.dr_bcorner_r1').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a1.png\')');
		} else if ($('#corner_a2').hasClass('choiceBtn') && $('#corner_aa').hasClass('choiceBtn')&& $('#corner_ab').hasClass('choiceBtn')) {
			$('#'+twidth).removeClass('dr_bcorner_1').addClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
			$('#'+tway).attr('class', 'dr_bcorner_l2');
			$('#'+tway).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a2\')');
			$('.dr_bcorner_l2').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a2.png\')');
			$('#'+tcnt).attr('class', 'dr_bcorner_r2');
			$('#'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a2\')');
			$('.dr_bcorner_r2').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a2.png\')');
		} else if ($('#corner_a3').hasClass('choiceBtn') && $('#corner_aa').hasClass('choiceBtn')&& $('#corner_ab').hasClass('choiceBtn')) {
			$('#'+twidth).removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').addClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
			$('#'+tway).attr('class', 'dr_bcorner_l3');
			$('#'+tway).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a3\')');
			$('.dr_bcorner_l3').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a3.png\')');
			$('#'+tcnt).attr('class', 'dr_bcorner_r3');
			$('#'+tway).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a3\')');
			$('.dr_bcorner_r3').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a3.png\')');
		}else if ($('#corner_a1').hasClass('choiceBtn') && $('#corner_a_a').hasClass('choiceBtn')&& $('#corner_ab').hasClass('choiceBtn')) {
			$('#'+twidth).removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').addClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
			$('#'+tway).attr('class', 'dr_bcorner_l1_a');
			$('#'+tway).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a1_a\')');
			$('.dr_bcorner_l1_a').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a1_a.png\')');
			$('#'+tcnt).attr('class', 'dr_bcorner_r1_a');
			$('#'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a1_a\')');
			$('.dr_bcorner_r1_a').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a1_a.png\')');
		}else if ($('#corner_a2').hasClass('choiceBtn') && $('#corner_a_a').hasClass('choiceBtn')&& $('#corner_ab').hasClass('choiceBtn')) {
			$('#'+twidth).removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').addClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
			$('#'+tway).attr('class', 'dr_bcorner_l2_a');
			$('#'+tway).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a2_a\')');
			$('.dr_bcorner_l2_a').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a2_a.png\')');
			$('#'+tcnt).attr('class', 'dr_bcorner_r2_a');
			$('#'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a2_a\')');
			$('.dr_bcorner_r2_a').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a2_a.png\')');
		}else if ($('#corner_a3').hasClass('choiceBtn') && $('#corner_a_a').hasClass('choiceBtn')&& $('#corner_ab').hasClass('choiceBtn')) {
			$('#'+twidth).removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').addClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
			$('#'+tway).attr('class', 'dr_bcorner_l3_a');
			$('#'+tway).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a3_a\')');
			$('.dr_bcorner_l3_a').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a3_a.png\')');
			$('#'+tcnt).attr('class', 'dr_bcorner_r3_a');
			$('#'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a3_a\')');
			$('.dr_bcorner_r3_a').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a3_a.png\')');
		}else if ($('#corner_a1').hasClass('choiceBtn') && $('#corner_aa').hasClass('choiceBtn')&& $('#corner_a_b').hasClass('choiceBtn')) {
			$('#'+twidth).removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').addClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
			$('#'+tway).attr('class', 'dr_bcorner_l1_b');
			$('#'+tway).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a1_b\')');
			$('.dr_bcorner_l1_b').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a1_b.png\')');
			$('#'+tcnt).attr('class', 'dr_bcorner_r1_b');
			$('#'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a1_b\')');
			$('.dr_bcorner_r1_b').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a1_b.png\')');
		}else if ($('#corner_a2').hasClass('choiceBtn') && $('#corner_aa').hasClass('choiceBtn')&& $('#corner_a_b').hasClass('choiceBtn')) {
			$('#'+twidth).removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').addClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
			$('#'+tway).attr('class', 'dr_bcorner_l2_b');
			$('#'+tway).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a2_b\')');
			$('.dr_bcorner_l2_b').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a2_b.png\')');
			$('#'+tcnt).attr('class', 'dr_bcorner_r2_b');
			$('#'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a2_b\')');
			$('.dr_bcorner_r2_b').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a2_b.png\')');
		}else if ($('#corner_a3').hasClass('choiceBtn') && $('#corner_aa').hasClass('choiceBtn')&& $('#corner_a_b').hasClass('choiceBtn')) {
			$('#'+twidth).removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').addClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
			$('#'+tway).attr('class', 'dr_bcorner_l3_b');
			$('#'+tway).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a3_b\')');
			$('.dr_bcorner_l3_b').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a3_b.png\')');
			$('#'+tcnt).attr('class', 'dr_bcorner_r3_b');
			$('#'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a3_b\')');
			$('.dr_bcorner_r3_b').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a3_b.png\')');
		}else if ($('#corner_a1').hasClass('choiceBtn') && $('#corner_a_a').hasClass('choiceBtn')&& $('#corner_a_b').hasClass('choiceBtn')) {
			$('#'+twidth).removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').addClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
			$('#'+tway).attr('class', 'dr_bcorner_l1_c');
			$('#'+tway).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a1_c\')');
			$('.dr_bcorner_l1_c').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a1_c.png\')');
			$('#'+tcnt).attr('class', 'dr_bcorner_r1_c');
			$('#'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a1_c\')');
			$('.dr_bcorner_r1_c').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a1_c.png\')');
		}else if ($('#corner_a2').hasClass('choiceBtn') && $('#corner_a_a').hasClass('choiceBtn')&& $('#corner_a_b').hasClass('choiceBtn')) {
			$('#'+twidth).removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').addClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
			$('#'+tway).attr('class', 'dr_bcorner_l2_c');
			$('#'+tway).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a2_c\')');
			$('.dr_bcorner_l2_c').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a2_c.png\')');
			$('#'+tcnt).attr('class', 'dr_bcorner_r2_c');
			$('#'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a2_c\')');
			$('.dr_bcorner_r2_c').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a2_c.png\')');
		}else if ($('#corner_a3').hasClass('choiceBtn') && $('#corner_a_a').hasClass('choiceBtn')&& $('#corner_a_b').hasClass('choiceBtn')) {
			$('#'+twidth).removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').addClass('dr_bcorner_3_c');
			$('#'+tway).attr('class', 'dr_bcorner_l3_c');
			$('#'+tway).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a3_c\')');
			$('.dr_bcorner_l3_c').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a3_c.png\')');
			$('#'+tcnt).attr('class', 'dr_bcorner_r3_c');
			$('#'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a3_c\')');
			$('.dr_bcorner_r3_c').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a3_c.png\')');
		}
	}  else {
		$('#'+tway+'id'+tcnt).attr('class', 'dr_b'+tkind);
		$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'' + tkind + '\')');
		$('.dr_b'+tkind).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b' + tkind + '.png\')');
		$('.drOption').removeClass('choiceBtn');
		$('#'+tkind).addClass('choiceBtn');
	}
	
	$('#tableItem').html('');
}

function changeCorner(tkind){
	 if (tkind == 'corner_a1' || tkind == 'corner_a2' || tkind == 'corner_a3'||tkind == 'corner_aa' || tkind == 'corner_a_a' || tkind == 'corner_ab'|| tkind == 'corner_a_b') {
		switch (tkind) {
		case 'corner_a1': $('#corner_a1').addClass('choiceBtn'); $('#corner_a2').removeClass('choiceBtn');$('#corner_a3').removeClass('choiceBtn'); break;
		case 'corner_a2': $('#corner_a2').addClass('choiceBtn'); $('#corner_a1').removeClass('choiceBtn');$('#corner_a3').removeClass('choiceBtn'); break;
		case 'corner_a3': $('#corner_a3').addClass('choiceBtn'); $('#corner_a2').removeClass('choiceBtn');$('#corner_a1').removeClass('choiceBtn'); break;
		case 'corner_aa': $('#corner_aa').addClass('choiceBtn'); $('#corner_a_a').removeClass('choiceBtn'); break;
		case 'corner_a_a': $('#corner_a_a').addClass('choiceBtn'); $('#corner_aa').removeClass('choiceBtn'); break;		
		case 'corner_ab': $('#corner_ab').addClass('choiceBtn'); $('#corner_a_b').removeClass('choiceBtn'); break;
		case 'corner_a_b': $('#corner_a_b').addClass('choiceBtn'); $('#corner_ab').removeClass('choiceBtn'); break;
		}
		if ($('#corner_a1').hasClass('choiceBtn') && $('#corner_a_a').hasClass('choiceBtn')&& $('#corner_a_b').hasClass('choiceBtn')) {
			if (current_body == 'bf_l' || current_body == 'bl_r') {
				$('#dcorner1').addClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#bf_l').addClass('dr_bcorner_a1');
				$('#bf_l').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bf_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png)');
				$('#bl_r').addClass('dr_bcorner_a1');
				$('#bl_r').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bl_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png)');
			} else if (current_body == 'bl_l' || current_body == 'bb_r') {
				$('#dcorner3').addClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#bl_l').addClass('dr_bcorner_a1');
				$('#bl_l').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bl_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png)');
				$('#bb_r').addClass('dr_bcorner_a1');
				$('#bb_r').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bb_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png)');
			} else if (current_body == 'br_l' || current_body == 'bf_r') {
				$('#dcorner2').addClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#br_l').addClass('dr_bcorner_a1');
				$('#br_l').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#br_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png)');
				$('#bf_r').addClass('dr_bcorner_a1');
				$('#bf_r').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bf_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png)');
			} else if (current_body == 'bb_l' || current_body == 'br_r') {
				$('#dcorner4').addClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#bb_l').addClass('dr_bcorner_a1');
				$('#bb_l').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bb_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png)');
				$('#br_r').addClass('dr_bcorner_a1');
				$('#br_r').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#br_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png)');
			}
			$('.bcorner_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png');
			$('.bcorner_a_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png');
			$('.bcorner_a_b img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png');	
		} else if ($('#corner_a2').hasClass('choiceBtn') && $('#corner_a_a').hasClass('choiceBtn')&& $('#corner_a_b').hasClass('choiceBtn')) {
			if (current_body == 'bf_l' || current_body == 'bl_r') {
				$('#dcorner1').addClass('dr_bcorner_2').removeClass('dr_bcorner_1').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#bf_l').addClass('dr_bcorner_a2');
				$('#bf_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bf_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2.png)');
				$('#bl_r').addClass('dr_bcorner_a2');
				$('#bl_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bl_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2.png)');
			} else if (current_body == 'bl_l' || current_body == 'bb_r') {
				$('#dcorner3').addClass('dr_bcorner_2').removeClass('dr_bcorner_1').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#bl_l').addClass('dr_bcorner_a2');
				$('#bl_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bl_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2.png)');
				$('#bb_r').addClass('dr_bcorner_a2');
				$('#bb_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bb_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2.png)');
			} else if (current_body == 'br_l' || current_body == 'bf_r') {
				$('#dcorner2').addClass('dr_bcorner_2').removeClass('dr_bcorner_1').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#br_l').addClass('dr_bcorner_a2');
				$('#br_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#br_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2.png)');
				$('#bf_r').addClass('dr_bcorner_a2');
				$('#bf_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bf_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2.png)');
			} else if (current_body == 'bb_l' || current_body == 'br_r') {
				$('#dcorner4').addClass('dr_bcorner_2').removeClass('dr_bcorner_1').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#bb_l').addClass('dr_bcorner_a2');
				$('#bb_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bb_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2.png)');
				$('#br_r').addClass('dr_bcorner_a2');
				$('#br_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#br_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2.png)');
			}
			$('.bcorner_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2.png');
			$('.bcorner_a_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2.png');
			$('.bcorner_a_b img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2.png');	
		} else if ($('#corner_a3').hasClass('choiceBtn') && $('#corner_a_a').hasClass('choiceBtn')&& $('#corner_a_b').hasClass('choiceBtn')) {
			if (current_body == 'bf_l' || current_body == 'bl_r') {
				$('#dcorner1').addClass('dr_bcorner_3').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#bf_l').addClass('dr_bcorner_a3');
				$('#bf_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bf_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3.png)');
				$('#bl_r').addClass('dr_bcorner_a2');
				$('#bl_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bl_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3.png)');
			} else if (current_body == 'bl_l' || current_body == 'bb_r') {
				$('#dcorner3').addClass('dr_bcorner_3').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#bl_l').addClass('dr_bcorner_a3');
				$('#bl_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bl_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3.png)');
				$('#bb_r').addClass('dr_bcorner_a3');
				$('#bb_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bb_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3.png)');
			} else if (current_body == 'br_l' || current_body == 'bf_r') {
				$('#dcorner2').addClass('dr_bcorner_3').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#br_l').addClass('dr_bcorner_a3');
				$('#br_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#br_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3.png)');
				$('#bf_r').addClass('dr_bcorner_a3');
				$('#bf_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bf_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3.png)');
			} else if (current_body == 'bb_l' || current_body == 'br_r') {
				$('#dcorner4').addClass('dr_bcorner_3').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#bb_l').addClass('dr_bcorner_a3');
				$('#bb_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bb_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3.png)');
				$('#br_r').addClass('dr_bcorner_a3');
				$('#br_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#br_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3.png)');
			}
			$('.bcorner_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3.png');
			$('.bcorner_a_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3.png');
			$('.bcorner_a_b img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3.png');	
		} else if ($('#corner_a1').hasClass('choiceBtn') && $('#corner_aa').hasClass('choiceBtn')&& $('#corner_a_b').hasClass('choiceBtn')) {
			if (current_body == 'bf_l' || current_body == 'bl_r') {
				$('#dcorner1').addClass('dr_bcorner_1_a').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#bf_l').addClass('dr_bcorner_a1_a');
				$('#bf_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bf_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1_a.png)');
				$('#bl_r').addClass('dr_bcorner_a1_a');
				$('#bl_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bl_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1_a.png)');
			} else if (current_body == 'bl_l' || current_body == 'bb_r') {
				$('#dcorner3').addClass('dr_bcorner_1_a').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#bl_l').addClass('dr_bcorner_a1_a');
				$('#bl_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bl_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1_a.png)');
				$('#bb_r').addClass('dr_bcorner_a1_a');
				$('#bb_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bb_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1_a.png)');
			} else if (current_body == 'br_l' || current_body == 'bf_r') {
				$('#dcorner2').addClass('dr_bcorner_1_a').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#br_l').addClass('dr_bcorner_a1_a');
				$('#br_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#br_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1_a.png)');
				$('#bf_r').addClass('dr_bcorner_a1_a');
				$('#bf_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bf_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1_a.png)');
			} else if (current_body == 'bb_l' || current_body == 'br_r') {
				$('#dcorner4').addClass('dr_bcorner_1_a').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#bb_l').addClass('dr_bcorner_a1_a');
				$('#bb_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bb_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1_a.png)');
				$('#br_r').addClass('dr_bcorner_a1_a');
				$('#br_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#br_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1_a.png)');
			}
			$('.bcorner_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png');
			$('.bcorner_a_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1_a.png');
			$('.bcorner_a_b img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png');	
		}else if ($('#corner_a2').hasClass('choiceBtn') && $('#corner_aa').hasClass('choiceBtn')&& $('#corner_a_b').hasClass('choiceBtn')) {
			if (current_body == 'bf_l' || current_body == 'bl_r') {
				$('#dcorner1').addClass('dr_bcorner_2_a').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#bf_l').addClass('dr_bcorner_a2_a');
				$('#bf_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bf_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2_a.png)');
				$('#bl_r').addClass('dr_bcorner_a2_a');
				$('#bl_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bl_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2_a.png)');
			} else if (current_body == 'bl_l' || current_body == 'bb_r') {
				$('#dcorner3').addClass('dr_bcorner_2_a').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#bl_l').addClass('dr_bcorner_a2_a');
				$('#bl_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bl_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2_a.png)');
				$('#bb_r').addClass('dr_bcorner_a2_a');
				$('#bb_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bb_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2_a.png)');
			} else if (current_body == 'br_l' || current_body == 'bf_r') {
				$('#dcorner2').addClass('dr_bcorner_2_a').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#br_l').addClass('dr_bcorner_a2_a');
				$('#br_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#br_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2_a.png)');
				$('#bf_r').addClass('dr_bcorner_a2_a');
				$('#bf_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bf_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2_a.png)');
			} else if (current_body == 'bb_l' || current_body == 'br_r') {
				$('#dcorner4').addClass('dr_bcorner_2_a').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#bb_l').addClass('dr_bcorner_a2_a');
				$('#bb_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bb_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2_a.png)');
				$('#br_r').addClass('dr_bcorner_a2_a');
				$('#br_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#br_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2_a.png)');
			}
			$('.bcorner_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2.png');
			$('.bcorner_a_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2_a.png');
			$('.bcorner_a_b img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2.png');	
		}else if ($('#corner_a3').hasClass('choiceBtn') && $('#corner_aa').hasClass('choiceBtn')&& $('#corner_a_b').hasClass('choiceBtn')) {
			if (current_body == 'bf_l' || current_body == 'bl_r') {
				$('#dcorner1').addClass('dr_bcorner_3_a').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#bf_l').addClass('dr_bcorner_a3_a');
				$('#bf_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bf_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3_a.png)');
				$('#bl_r').addClass('dr_bcorner_a3_a');
				$('#bl_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bl_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3_a.png)');
			} else if (current_body == 'bl_l' || current_body == 'bb_r') {
				$('#dcorner3').addClass('dr_bcorner_3_a').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#bl_l').addClass('dr_bcorner_a3_a');
				$('#bl_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bl_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3_a.png)');
				$('#bb_r').addClass('dr_bcorner_a3_a');
				$('#bb_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bb_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3_a.png)');
			} else if (current_body == 'br_l' || current_body == 'bf_r') {
				$('#dcorner2').addClass('dr_bcorner_3_a').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#br_l').addClass('dr_bcorner_a3_a');
				$('#br_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#br_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3_a.png)');
				$('#bf_r').addClass('dr_bcorner_a3_a');
				$('#bf_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bf_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3_a.png)');
			} else if (current_body == 'bb_l' || current_body == 'br_r') {
				$('#dcorner4').addClass('dr_bcorner_3_a').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#bb_l').addClass('dr_bcorner_a3_a');
				$('#bb_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bb_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3_a.png)');
				$('#br_r').addClass('dr_bcorner_a3_a');
				$('#br_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#br_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3_a.png)');
			}
			$('.bcorner_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3.png');
			$('.bcorner_a_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3_a.png');
			$('.bcorner_a_b img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3.png');	
		}else if ($('#corner_a1').hasClass('choiceBtn') && $('#corner_a_a').hasClass('choiceBtn')&& $('#corner_ab').hasClass('choiceBtn')) {
			if (current_body == 'bf_l' || current_body == 'bl_r') {
				$('#dcorner1').addClass('dr_bcorner_1_b').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#bf_l').addClass('dr_bcorner_a1_b');
				$('#bf_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bf_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1_b.png)');
				$('#bl_r').addClass('dr_bcorner_a1_b');
				$('#bl_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bl_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1_b.png)');
			} else if (current_body == 'bl_l' || current_body == 'bb_r') {
				$('#dcorner3').addClass('dr_bcorner_1_b').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#bl_l').addClass('dr_bcorner_a1_b');
				$('#bl_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bl_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1_b.png)');
				$('#bb_r').addClass('dr_bcorner_a1_b');
				$('#bb_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bb_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1_b.png)');
			} else if (current_body == 'br_l' || current_body == 'bf_r') {
				$('#dcorner2').addClass('dr_bcorner_1_b').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#br_l').addClass('dr_bcorner_a1_b');
				$('#br_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#br_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1_b.png)');
				$('#bf_r').addClass('dr_bcorner_a1_b');
				$('#bf_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bf_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1_b.png)');
			} else if (current_body == 'bb_l' || current_body == 'br_r') {
				$('#dcorner4').addClass('dr_bcorner_1_b').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#bb_l').addClass('dr_bcorner_a1_b');
				$('#bb_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bb_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1_b.png)');
				$('#br_r').addClass('dr_bcorner_a1_b');
				$('#br_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#br_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1_b.png)');
			}
			$('.bcorner_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png');
			$('.bcorner_a_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png');
			$('.bcorner_a_b img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1_b.png');	
		}else if ($('#corner_a2').hasClass('choiceBtn') && $('#corner_a_a').hasClass('choiceBtn')&& $('#corner_ab').hasClass('choiceBtn')) {
			if (current_body == 'bf_l' || current_body == 'bl_r') {
				$('#dcorner1').addClass('dr_bcorner_2_b').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#bf_l').addClass('dr_bcorner_a2_b');
				$('#bf_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bf_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2_b.png)');
				$('#bl_r').addClass('dr_bcorner_a2_b');
				$('#bl_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bl_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2_b.png)');
			} else if (current_body == 'bl_l' || current_body == 'bb_r') {
				$('#dcorner3').addClass('dr_bcorner_2_b').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#bl_l').addClass('dr_bcorner_a2_b');
				$('#bl_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bl_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2_b.png)');
				$('#bb_r').addClass('dr_bcorner_a2_b');
				$('#bb_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bb_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2_b.png)');
			} else if (current_body == 'br_l' || current_body == 'bf_r') {
				$('#dcorner2').addClass('dr_bcorner_2_b').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#br_l').addClass('dr_bcorner_a2_b');
				$('#br_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#br_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2_b.png)');
				$('#bf_r').addClass('dr_bcorner_a2_b');
				$('#bf_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bf_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2_b.png)');
			} else if (current_body == 'bb_l' || current_body == 'br_r') {
				$('#dcorner4').addClass('dr_bcorner_2_b').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#bb_l').addClass('dr_bcorner_a2_b');
				$('#bb_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bb_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2_b.png)');
				$('#br_r').addClass('dr_bcorner_a2_b');
				$('#br_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#br_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2_b.png)');
			}
			$('.bcorner_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2.png');
			$('.bcorner_a_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2.png');
			$('.bcorner_a_b img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2_b.png');	
		}else if ($('#corner_a3').hasClass('choiceBtn') && $('#corner_a_a').hasClass('choiceBtn')&& $('#corner_ab').hasClass('choiceBtn')) {
			if (current_body == 'bf_l' || current_body == 'bl_r') {
				$('#dcorner1').addClass('dr_bcorner_3_b').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#bf_l').addClass('dr_bcorner_a3_b');
				$('#bf_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bf_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3_b.png)');
				$('#bl_r').addClass('dr_bcorner_a3_b');
				$('#bl_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bl_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3_b.png)');
			} else if (current_body == 'bl_l' || current_body == 'bb_r') {
				$('#dcorner3').addClass('dr_bcorner_3_b').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#bl_l').addClass('dr_bcorner_a3_b');
				$('#bl_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bl_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3_b.png)');
				$('#bb_r').addClass('dr_bcorner_a3_b');
				$('#bb_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bb_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3_b.png)');
			} else if (current_body == 'br_l' || current_body == 'bf_r') {
				$('#dcorner2').addClass('dr_bcorner_3_b').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#br_l').addClass('dr_bcorner_a3_b');
				$('#br_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#br_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3_b.png)');
				$('#bf_r').addClass('dr_bcorner_a3_b');
				$('#bf_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bf_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3_b.png)');
			} else if (current_body == 'bb_l' || current_body == 'br_r') {
				$('#dcorner4').addClass('dr_bcorner_3_b').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#bb_l').addClass('dr_bcorner_a3_b');
				$('#bb_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bb_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3_b.png)');
				$('#br_r').addClass('dr_bcorner_a3_b');
				$('#br_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#br_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3_b.png)');
			}
			$('.bcorner_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3.png');
			$('.bcorner_a_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3.png');
			$('.bcorner_a_b img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3_b.png');	
		}else if ($('#corner_a1').hasClass('choiceBtn') && $('#corner_aa').hasClass('choiceBtn')&& $('#corner_ab').hasClass('choiceBtn')) {
			if (current_body == 'bf_l' || current_body == 'bl_r') {
				$('#dcorner1').addClass('dr_bcorner_1_c').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#bf_l').addClass('dr_bcorner_a1_c');
				$('#bf_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bf_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1_c.png)');
				$('#bl_r').addClass('dr_bcorner_a1_c');
				$('#bl_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bl_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1_c.png)');
			} else if (current_body == 'bl_l' || current_body == 'bb_r') {
				$('#dcorner3').addClass('dr_bcorner_1_c').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#bl_l').addClass('dr_bcorner_a1_c');
				$('#bl_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bl_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1_c.png)');
				$('#bb_r').addClass('dr_bcorner_a1_c');
				$('#bb_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bb_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1_c.png)');
			} else if (current_body == 'br_l' || current_body == 'bf_r') {
				$('#dcorner2').addClass('dr_bcorner_1_c').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#br_l').addClass('dr_bcorner_a1_c');
				$('#br_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#br_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1_c.png)');
				$('#bf_r').addClass('dr_bcorner_a1_c');
				$('#bf_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bf_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1_c.png)');
			} else if (current_body == 'bb_l' || current_body == 'br_r') {
				$('#dcorner4').addClass('dr_bcorner_1_c').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');
				$('#bb_l').addClass('dr_bcorner_a1_c');
				$('#bb_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#bb_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1_c.png)');
				$('#br_r').addClass('dr_bcorner_a1_c');
				$('#br_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a3_c');
				$('#br_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1_c.png)');
			}
			$('.bcorner_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1.png');
			$('.bcorner_a_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1_a.png');
			$('.bcorner_a_b img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a1_b.png');	
		}else if ($('#corner_a2').hasClass('choiceBtn') && $('#corner_aa').hasClass('choiceBtn')&& $('#corner_ab').hasClass('choiceBtn')) {
			if (current_body == 'bf_l' || current_body == 'bl_r') {
				$('#dcorner1').addClass('dr_bcorner_2_c').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_3_c');
				$('#bf_l').addClass('dr_bcorner_a2_c');
				$('#bf_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3_c');
				$('#bf_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2_c.png)');
				$('#bl_r').addClass('dr_bcorner_a2_c');
				$('#bl_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3_c');
				$('#bl_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2_c.png)');
			} else if (current_body == 'bl_l' || current_body == 'bb_r') {
				$('#dcorner3').addClass('dr_bcorner_2_c').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_3_c');
				$('#bl_l').addClass('dr_bcorner_a2_c');
				$('#bl_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3_c');
				$('#bl_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2_c.png)');
				$('#bb_r').addClass('dr_bcorner_a2_c');
				$('#bb_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3_c');
				$('#bb_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2_c.png)');
			} else if (current_body == 'br_l' || current_body == 'bf_r') {
				$('#dcorner2').addClass('dr_bcorner_2_c').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_3_c');
				$('#br_l').addClass('dr_bcorner_a2_c');
				$('#br_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3_c');
				$('#br_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2_c.png)');
				$('#bf_r').addClass('dr_bcorner_a2_c');
				$('#bf_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3_c');
				$('#bf_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2_c.png)');
			} else if (current_body == 'bb_l' || current_body == 'br_r') {
				$('#dcorner4').addClass('dr_bcorner_2_c').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_3_c');
				$('#bb_l').addClass('dr_bcorner_a2_c');
				$('#bb_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3_c');
				$('#bb_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2_c.png)');
				$('#br_r').addClass('dr_bcorner_a2_c');
				$('#br_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2').removeClass('dr_bcorner_a3_c');
				$('#br_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2_c.png)');
			}
			$('.bcorner_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2.png');
			$('.bcorner_a_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2_a.png');
			$('.bcorner_a_b img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a2_b.png');	
		}else if ($('#corner_a3').hasClass('choiceBtn') && $('#corner_aa').hasClass('choiceBtn')&& $('#corner_ab').hasClass('choiceBtn')) {
			if (current_body == 'bf_l' || current_body == 'bl_r') {
				$('#dcorner1').addClass('dr_bcorner_3_c').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c');
				$('#bf_l').addClass('dr_bcorner_a3_c');
				$('#bf_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a2');
				$('#bf_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3_c.png)');
				$('#bl_r').addClass('dr_bcorner_a3_c');
				$('#bl_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a2');
				$('#bl_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3_c.png)');
			} else if (current_body == 'bl_l' || current_body == 'bb_r') {
				$('#dcorner3').addClass('dr_bcorner_3_c').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c');
				$('#bl_l').addClass('dr_bcorner_a3_c');
				$('#bl_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a2');
				$('#bl_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3_c.png)');
				$('#bb_r').addClass('dr_bcorner_a3_c');
				$('#bb_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a2');
				$('#bb_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3_c.png)');
			} else if (current_body == 'br_l' || current_body == 'bf_r') {
				$('#dcorner2').addClass('dr_bcorner_3_c').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c');
				$('#br_l').addClass('dr_bcorner_a3_c');
				$('#br_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a2');
				$('#br_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3_c.png)');
				$('#bf_r').addClass('dr_bcorner_a3_c');
				$('#bf_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a2');
				$('#bf_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3_c.png)');
			} else if (current_body == 'bb_l' || current_body == 'br_r') {
				$('#dcorner4').addClass('dr_bcorner_3_c').removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c');
				$('#bb_l').addClass('dr_bcorner_a3_c');
				$('#bb_l').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a2');
				$('#bb_l').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3_c.png)');
				$('#br_r').addClass('dr_bcorner_a3_c');
				$('#br_r').removeClass('dr_bcorner_a1').removeClass('dr_bcorner_a3').removeClass('dr_bcorner_a1_a').removeClass('dr_bcorner_a2_a').removeClass('dr_bcorner_a3_a').removeClass('dr_bcorner_a1_b').removeClass('dr_bcorner_a2_b').removeClass('dr_bcorner_a3_b').removeClass('dr_bcorner_a1_c').removeClass('dr_bcorner_a2_c').removeClass('dr_bcorner_a2');
				$('#br_r').css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3_c.png)');
			}
			$('.bcorner_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3.png');
			$('.bcorner_a_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3_a.png');
			$('.bcorner_a_b img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/bcorner_a3_b.png');	
		}
	 }
}

function dr_b1000_a_option_click(tkind) {
	 if (tkind == '1000_a1' || tkind == '1000_a2') {
			switch (tkind) {
			case '1000_ea': $('#1000_ea').addClass('choiceBtn'); $('#1000_e_a').removeClass('choiceBtn'); break;
			case '1000_e_a': $('#1000_e_a').addClass('choiceBtn'); $('#1000_ea').removeClass('choiceBtn'); break;
			case '1000_eb': $('#1000_eb').addClass('choiceBtn'); $('#1000_e_b').removeClass('choiceBtn'); break;		
			case '1000_e_b': $('#1000_e_b').addClass('choiceBtn'); $('#1000_eb').removeClass('choiceBtn'); break;
			}
			if ($('#1000_e_a').hasClass('choiceBtn') && $('#1000_e_b').hasClass('choiceBtn')) {
				$('#'+current_body).attr('class', 'dr-body dr_b1000_e1');
				$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_e1.png)');
				$('.b1000_e img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_e1.png');
				$('.b1000_e_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_e1.png');
			} else if ($('#1000_ea').hasClass('choiceBtn') && $('#1000_e_b').hasClass('choiceBtn')) {
				$('#'+current_body).attr('class', 'dr-body dr_b1000_e1_a');
				$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_e1_a.png)');
				$('.b1000_e img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_e1_a.png');
				$('.b1000_e_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_e1.png');
			} else if ($('#1000_e_a').hasClass('choiceBtn') && $('#1000_eb').hasClass('choiceBtn')) {
				$('#'+current_body).attr('class', 'dr-body dr_b1000_e1_b');
				$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_e1_b.png)');
				$('.b1000_e img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_e1.png');
				$('.b1000_e_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_e1_b.png');
			} else if ($('#1000_ea').hasClass('choiceBtn') && $('#1000_eb').hasClass('choiceBtn')) {
				$('#'+current_body).attr('class', 'dr-body dr_b1000_e1_c');
				$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_e1_c.png)');
				$('.b1000_e img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_e1_a.png');
				$('.b1000_e_a img').attr('src', '/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_e1_b.png');
			}
		}
	if ($('.door-state').attr('data-door-state') == 'show') {
		
	}
	if ($(obj).hasClass('b1000_a1')) {
		$('#'+current_body).addClass('dr_b1000_a1');
		$('#'+current_body).removeClass('dr_b1000_a2');
		$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_a1.png)');
	} else if ($(obj).hasClass('b1000_a2')) {
		$('#'+current_body).addClass('dr_b1000_a2');
		$('#'+current_body).removeClass('dr_b1000_a1');
		$('#'+current_body).css('background', 'url(/images/wardrobe/simulation/dressroom/'+ward_kind+'/b1000_a2.png)');
	}
}
function showAlert(message) {
	$('.alert-contents').css('top', '20%');
	$('.alert-contents').css('left', '50%');
	$('.alert-contents').hide();
	$('.alert-message').html(message);
	$('.alert').removeClass('invisible');
	$('.alert-contents').show(500);
//	$('.alert-contents').draggable({ containment: 'parent', scroll: false });
}
