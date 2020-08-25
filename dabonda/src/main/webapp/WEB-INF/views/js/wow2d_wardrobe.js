var showChk = false;
$(function() {
	init();
	
	var filter = "win16|win32|win64|mac|macintel";

	if ( navigator.platform ) {
		if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) {
			//mobile

			
		} else {
			//pc

			$('#show_bl').mouseover(function() {
				if (!$('#show_bl_sub').hasClass('hidden')) showChk = true;
				else showChk = false;
				$('#show_bl_sub').removeClass('hidden');
			}).mouseout(function() {
				if (!showChk) $('#show_bl_sub').addClass('hidden');
				showChk = false;
			});
			
			$('#show_bf').mouseover(function() {
				if (!$('#show_bf_sub').hasClass('hidden')) showChk = true;
				else showChk = false;
				$('#show_bf_sub').removeClass('hidden');
			}).mouseout(function() {
				if (!showChk) $('#show_bf_sub').addClass('hidden');
				showChk = false;
			});
			
			$('#show_ba').mouseover(function() {
				if (!$('#show_ba_sub').hasClass('hidden')) showChk = true;
				else showChk = false;
				$('#show_ba_sub').removeClass('hidden');
			}).mouseout(function() {
				if (!showChk) $('#show_ba_sub').addClass('hidden');
				showChk = false;
			});
			
			$('#show_bb').mouseover(function() {
				if (!$('#show_bb_sub').hasClass('hidden')) showChk = true;
				else showChk = false;
				$('#show_bb_sub').removeClass('hidden');
			}).mouseout(function() {
				if (!showChk) $('#show_bb_sub').addClass('hidden');
				showChk = false;
			});
			
			$('#show_br').mouseover(function() {
				if (!$('#show_br_sub').hasClass('hidden')) showChk = true;
				else showChk = false;
				$('#show_br_sub').removeClass('hidden');
			}).mouseout(function() {
				if (!showChk) $('#show_br_sub').addClass('hidden');
				showChk = false;
			});
		}
	}
});

var contents_html = '';

var isBI = true;
var optionArray = new Array();
var cnt = 0;
var ipSpace1 = 0;
var ipSpace2 = 0;
var sumDiv = 0;
var pillarWidth = 0;
var chkRemoveDiv = true;
var bfWidth = 0, blrWidth = 0;

var setDr = new Array();

var combiList = new Array();
var firstId = '';
var lastId = '';

// 타입 변경
function changeType() {
	var type = $('#type').val();
	var kind = $('#kind').val();
	init();	
	if (kind != '타입') {
		$.ajax({
			url : '/wardrobe/kind.json',
			dataType : 'json',
			type : 'get',
			data : {type : type, kind : kind},
		    success : function (result) {
		    	$.each(result, function(key) {
		    		var list = result[key];
			    	var content = '';
			    	
			    	for (i = 0; i < list.length; i++) {
			    		if (list[i].wr_cd == null) break;
			    		content = '<option value="' + list[i].wr_cd + '">' + list[i].name + '</option>';
			    		$("#kind").append(content);
			    	}
			    	
			    	switch (type) {
			    	case 'slide':
			    		$('#wardrobe_info').hide();
			    		$('#row1').show();
			    		$('#row2').show();
			    		$('#lblSpace1').html('폭');
			    		$('#lblSpace2').html('높이');
			    		$('#btnNst').show();
			    		$('#menubar_slide').show();
			    		$('#wardrobe1').show();
			    		$('#information_slide').show();
			    		break;
			    	case 'builtin':
			    		$('#wardrobe_info').hide();
			    		$('#row1').show();
			    		$('#row2').show();
			    		$('#lblSpace1').html('폭');
			    		$('#lblSpace2').html('높이');
			    		$('#btnNst').show();
			    		$('#row3').show();
			    		$('#menubar_builtin').show();
			    		$('#wardrobe1').show();
			    		$('#body').css('width', '500px');
			    		$('#jabara').css('width', '500px');
			    		$('#information_builtin').show();
			    		break;
			    	case 'builtinCombi':
			    		$('#wardrobe_info').hide();
			    		$('#row1').show();
			    		$('#row2').show();
			    		$('#lblSpace1').html('폭');
			    		$('#lblSpace2').html('높이');
			    		$('#btnNst').show();
			    		$('#row3').show();
			    		$('#menubar_builtinCombi').show();
			    		$('#wardrobe1').show();
			    		$('#body').css('width', '500px');
			    		$('#jabara').css('width', '500px');
			    		$('#information_builtin').show();
			    		break;
			    	case 'dressroom':
			    		$('#wardrobe_info').hide();
			    		$('#row2').show();
			    		$('#lblSpace1').html('가로폭');
			    		$('#lblSpace2').html('세로폭');
			    		$('#btnNst').hide();
			    		$('#menubar_dressroom').show();
			    		$('#wardrobe2').show();
			    		$('#information_dressroom').show();
			    		break;
			    	}
		    	});
			},
			beforeSend : function() {},
			complete:function() {},
		    error:function(e) {},
		    timeout:180000
		});
	}
}

// 장롱 종류 변경
function changeWrKind() {
	var type = $('#type').val();
	var kind = $('#kind').val();

	initWardrobe();
	if (kind == 'bi_a018' || kind == 'bi_a019') {
		$('#btn260').addClass('disabled');
		$('#btn260').attr('disabled', 'disabled');
		
		$('#btn260_a').addClass('disabled');
		$('#btn260_a').attr('disabled', 'disabled');
		
		$('#btn260_b').addClass('disabled');
		$('#btn260_b').attr('disabled', 'disabled');
	} else {
//		$('#btn260').show();
//		$('#btn260').attr('disabled', 'disabled');
		$('#btn260').removeClass('disabled');
		 var input = document.getElementById("btn260");
		input.removeAttribute('disabled');
		$('#btn260_a').removeClass('disabled');
		$('#btn260_b').removeClass('disabled');
//		$('#btn260_a').show();
//		$('#btn260_a').attr('disabled', 'disabled');
		
//		$('#btn260_b').show();
//		$('#btn260_b').attr('disabled', 'disabled');
	}
	if (type == 'dressroom') return;
	
	setDr = new Array();
	
	if (kind != '종류') {
		$.ajax({
			url : '/wardrobe/option.json',
			dataType : 'json',
			type : 'get',
			data : {kind : kind},
		    success : function (result) {
		    	optionArray = new Array();
		    	
		    	$.each(result, function(key) {
		    		var list = result[key];
			    	var content = '';
			    	var ochk = false;
			    	
			    	if (type == 'builtin' || type == 'builtinCombi' )
			    		setDr = list[0].item_nm.split('-');
			    	
			    	for (i = 1; i < list.length; i++) {
			    		optionArray[i-1] = new item();
			    		optionArray[i-1].item_grp = list[i].item_grp;
			    		optionArray[i-1].item_cd = list[i].item_cd;
			    		optionArray[i-1].dp2 = list[i].dp2;
			    		optionArray[i-1].qty = 0;
			    		
			    		ochk = false;
			    		for (j = 0; j < optionArray.length - 1; j++) {
			    			if (optionArray[j].item_cd == list[i].item_cd)
			    				ochk = true;
			    		}
			    		
			    		if (!ochk)
		    				content += '<input type="hidden" id="' + list[i].item_cd + '" value="0">';
			    	}
			    	
			    	$("#optionList").html(content);
		    	});
			},
			beforeSend : function() {},
		    complete:function() {},
		    error:function(e) {},
		    timeout:180000
		});
	}
	
	$('#wardrobe1').css('background-image', 'url(\'/images/wardrobe/builtin/wardrobeback.jpg\')');
	if (kind == 'bi_a005'){
		$('#wardrobe1').css('background-image', 'url(\'/images/wardrobe/builtin/wardrobeback2.jpg\')');
	}
	if(kind == 'bi_a013'||kind == 'bi_a014'){
		$('#btnNst').addClass('hidden');				
	}else{
		$('#btnNst').removeClass('hidden');
	}
}

//비규격 설정
function noStandard(){
	if(!$('#btnNst').hasClass('choiceBtn')){
		$('#btnNst').addClass('choiceBtn');
	}else $('#btnNst').removeClass('choiceBtn');
}
// 붙박이 여부 변경
function isBuiltin(bid) {
	if (bid == 'btnYes') {
		if (!$('#btnYes').hasClass('choiceBtn')) {
			$('#btnYes').addClass('choiceBtn');
			$('#btnNo').removeClass('choiceBtn');
			if(kind == 'bi_a013'||kind == 'bi_a014'){
				$('#btnNst').addClass('hidden');				
			}else{
				$('#btnNst').removeClass('hidden');
				}
			$('#btnEP_L').addClass('disabled');
			$('#btnEP_R').addClass('disabled');
			$('#btnEP_L').removeClass('choiceBtn');
			$('#btnEP_R').removeClass('choiceBtn');
			$('#slt1').removeClass('disabled');
			$('#slt1').removeAttr('disabled');
			$('#slt2').removeClass('disabled');
			$('#slt2').removeAttr('disabled');
			isBI = true;
			initBody();
		}
	} else if (bid == 'btnNo') {
		if (!$('#btnNo').hasClass('choiceBtn')) {
			$('#btnNo').addClass('choiceBtn');
			$('#btnYes').removeClass('choiceBtn');
			$('#btnNst').addClass('hidden');
			$('#btnEP_L').removeClass('disabled');
			$('#btnEP_R').removeClass('disabled');
			$('#slt1').addClass('disabled');
			$('#slt1').attr('disabled', 'disabled');
			$('#slt2').addClass('disabled');
			$('#slt2').attr('disabled', 'disabled');
			isBI = false;
			$('#ipSpace2').val(2240);
			ipSpace2 = 2240;
			$('#emptySpaceH').html(70);
			$('#emptySpaceH_slide').html(70);
			initBody();
		}
	}
}

function clickBtnEP(eid) {
	if (!$('#'+eid).hasClass('disabled')) {
		if ($('#'+eid).hasClass('choiceBtn')) {
			$('#'+eid).removeClass('choiceBtn');
		} else {
			$('#'+eid).addClass('choiceBtn');
		}
		$('#tableItem').html('');
		
		$('#pillarL').html('');
		$('#pillarR').html('');
		if ($('#btnEP_L').hasClass('choiceBtn') && firstId != '')
			$('#pillarL').html('EP');
		if ($('#btnEP_R').hasClass('choiceBtn') && firstId != '')
			$('#pillarR').html('EP');
	}
}

function init() {
	$('#row1').hide();
	$('#row2').hide();
	$('#row3').hide();
	$('#menubar_slide').hide();
	$('#information_slide').hide();
	$('#menubar_builtin').hide();
	$('#menubar_builtinCombi').hide();
	$('#wardrobe1').hide();
	$('#information_builtin').hide();
	$('#menubar_dressroom').hide();
	$('#wardrobe2').hide();
	$('#information_dressroom').hide();
	$('#kind').html('<select id="kind"><option>종류</option></select>');
	
	$('#wardrobe_info').show();
	
	initWardrobe();
}

function initWardrobe() {
	initBody();
	$('#sumDiv').html('0');
	$('#ipSpace1').val('');
	$('#ipSpace2').val('');
	$('#emptySpace').html('0');
	$('#emptySpaceH').html('0');
	$('#sumDiv_slide').html('0');
	$('#emptySpace_slide').html('0');
	$('#emptySpaceH_slide').html('0');

	$('#position').html('-');
	$('#slt1').html('<option>통</option>');
	idxDr = 0;
	$('#btnChangeDoor').html('문짝 ' + (idxDr + 1));
	bfWidth = 0;
	blrWidth = 0;
	isBuiltin('btnYes');
	
	$('#btnW1000').removeClass('btnWSelect');
	$('#btnW900').removeClass('btnWSelect');
	$('#btnW800').removeClass('btnWSelect');
	$('#btnW600').removeClass('btnWSelect');
	$('#btnW450').removeClass('btnWSelect');
	$('#btnW400').removeClass('btnWSelect');
	$('#btnW290').removeClass('btnWSelect');
	$('#btnDK001').addClass('disabled');
	$('#btnDK002').addClass('disabled');
	$('#btnDK003').addClass('disabled');
	$('#btnDK004').addClass('disabled');
	$('#btnDK005').addClass('disabled');
	$('#btnDK006').addClass('disabled');
	$('#btnDK007').addClass('disabled');
	$('#btnDK008').addClass('disabled');
	$('#btnDK009').addClass('disabled');
	$('#btnDK010').addClass('disabled');
	$('#btnDK011').addClass('disabled');
	$('#btnDK012').addClass('disabled');
	$('#btnDK013').addClass('disabled');
	$('#btnDK014').addClass('disabled');
	$('#btnDK015').addClass('disabled');
	$('#btnDK016').addClass('disabled');
	
	if($('#kind').val()=='dr_a004'){
		$('#ipSpace2').attr('disabled', 'disabled');
		$('#ipSpace2').addClass('disabled');
		$('#ipSpace2').val(2170);
	}else{
		$('#ipSpace2').removeAttr('disabled', 'disabled');
		$('#ipSpace2').removeClass('disabled');
		$('#ipSpace2').val('');
	}
}

function initBody() {
	var wt = $('#type').val();
	
	$('#workBar').fadeOut();
	cnt = 0;
	if ($('#ipSpace1').val() == '') ipSpace1 = 0;
	if ($('#ipSpace2').val() == '') ipSpace2 = 0;
	
	$('#alertTxt').html('');
	$('#alert').addClass('hidden');
	$('#alert').removeClass('contentsRow');
	$('#tableItem').html('');
	
	switch (wt) {
	case 'slide':
		initOption();
		sumDiv = 0;
		chkRemoveDiv = true;
		
		$('#btn1140').removeClass('disabled');
		$('#btn978').removeClass('disabled');
		$('#btnChangeDoor_slide').removeClass('disabled');
		
		$('#body').html('<div id="pillarL_sub" class="hidden"></div><div id="pillarL"></div><div id="pillarR_sub" class="hidden"></div><div id="pillarR"></div>');
		setAll();
		break;
	case 'builtin':
		initOption();
		sumDiv = 0;
		chkRemoveDiv = true;
		
		$('#body').html('<div id="pillarL_sub" class="hidden"></div><div id="pillarL"></div><div id="pillarR_sub" class="hidden"></div><div id="pillarR"></div>');
		$('#slt1 option:eq(0)').attr('selected', 'selected');
		$('#slt2').html('<option>구성</option>');
		setAll();
		break;
	case 'builtinCombi':
		initOption();
		sumDiv = 0;
		chkRemoveDiv = true;
		
		$('#body').html('<div id="pillarL_sub" class="hidden"></div><div id="pillarL"></div><div id="pillarR_sub" class="hidden"></div><div id="pillarR"></div>');
		$('#slt1 option:eq(0)').attr('selected', 'selected');
		$('#slt2').html('<option>구성</option>');
		setAll();
		break;
	case 'dressroom':
		switch ($('#kind').val()) {
		case 'dr_a001':
			$('#btnW1000').addClass('disabled');
			$('#btnW900').removeClass('disabled');
			$('#btnW800').removeClass('disabled');
			$('#btnW600').removeClass('disabled');
			$('#btnW450').addClass('disabled');
			$('#btnW400').removeClass('disabled');
			$('#btnW290').addClass('disabled');
			break;
		case 'dr_a002':
			$('#btnW1000').addClass('disabled');
			$('#btnW900').addClass('disabled');
			$('#btnW800').removeClass('disabled');
			$('#btnW600').removeClass('disabled');
			$('#btnW450').addClass('disabled');
			$('#btnW400').removeClass('disabled');
			$('#btnW290').addClass('disabled');
			break;
		case 'dr_a003':
			$('#btnW1000').addClass('disabled');
			$('#btnW900').addClass('disabled');
			$('#btnW800').removeClass('disabled');
			$('#btnW600').removeClass('disabled');
			$('#btnW450').addClass('disabled');
			$('#btnW400').removeClass('disabled');
			$('#btnW290').addClass('disabled');
			break;
		case 'dr_a004':
			$('#btnW1000').removeClass('disabled');
			$('#btnW900').removeClass('disabled');
			$('#btnW800').addClass('disabled');
			$('#btnW600').removeClass('disabled');
			$('#btnW450').removeClass('disabled');
			$('#btnW400').addClass('disabled');
			$('#btnW290').removeClass('disabled');
			break;
		case 'dr_a005':
			$('#btnW1000').removeClass('disabled');
			$('#btnW900').addClass('disabled');
			$('#btnW800').addClass('disabled');
			$('#btnW600').addClass('disabled');
			$('#btnW450').addClass('disabled');
			$('#btnW400').addClass('disabled');
			$('#btnW290').addClass('disabled');
			break;
		}
		
//		dwr = 0;
		direction = '';
		bf_sum = 0;
		bl_sum = 0;
		br_sum = 0;
		bb_sum = 0;
		
		$('#emptySpaceF').html(ipSpace1);
		$('#emptySpaceL').html(ipSpace2);
		$('#emptySpaceR').html(ipSpace2);
		$('#emptySpaceB').html(ipSpace1);
		
		$('#info_dr_f').hide();
		$('#info_dr_l').hide();
		$('#info_dr_r').hide();
		$('#info_dr_b').hide();
		
		var aboveHtml = '';
		aboveHtml += '<div id="darea1" class="above_area" onclick="showArea(event, this.id)"></div><div id="darea2" class="above_area" onclick="showArea(event, this.id)"></div><div id="darea3" class="above_area" onclick="showArea(event, this.id)"></div><div id="darea4" class="above_area" onclick="showArea(event, this.id)"></div>';
		if($('#kind').val()!='dr_a004'){
		aboveHtml += '<div id="dcorner1" class="above_area" onclick="setCorner(event, this.id)"></div><div id="dcorner2" class="above_area" onclick="setCorner(event, this.id)"></div><div id="dcorner3" class="above_area" onclick="setCorner(event, this.id)"></div><div id="dcorner4" class="above_area" onclick="setCorner(event, this.id)"></div>';
		}
		aboveHtml += '<div id="dline1" onclick="addDoor(1);"></div><div id="dline2" onclick="addDoor(2);"></div><div id="dline3" onclick="addDoor(3);"></div><div id="dline4" onclick="addDoor(4);"></div><div id="dsize1" class="hidden"></div><div id="dsize2" class="hidden"></div><div id="dsize3" class="hidden"></div><div id="dsize4" class="hidden"></div>';		
		$('#body_above').html(aboveHtml);
		if($('#kind').val()!='dr_a004'){
			$('#body_forward').html('<div id="bf_l"></div><div id="bf_area"><div id="bf_cri"></div></div><div id="bf_r"></div>');
		}else{
			$('#body_forward').html('<div id="bf_l"></div><div id="bf_area"><div id="bf_cri"></div><div id="epL"></div><div id="epR"></div></div><div id="bf_r"></div>');
		}
		
		$('#body_left').html('<div id="bl_l"></div><div id="bl_area"><div id="bl_cri"></div></div><div id="bl_r"></div>');
		$('#body_right').html('<div id="br_l"></div><div id="br_area"><div id="br_cri"></div></div><div id="br_r"></div>');
		$('#body_backward').html('<div id="bb_l"></div><div id="bb_area"><div id="bb_cri"></div></div><div id="bb_r"></div>');
		
		$('#body_above').removeClass('hidden');
		$('#body_forward').addClass('hidden');
		$('#body_left').addClass('hidden');
		$('#body_right').addClass('hidden');
		$('#body_backward').addClass('hidden');
		 if($('#kind').val()!='dr_a004'){
				$('#show_ba').show();
				$('#show_bl').show();
				$('#show_bf').show();
				$('#show_ba').show();
				$('#show_bb').show();
				$('#show_br').show();
				$('#cri_l').show();
				$('#cri_r').show();
				$('#ep_l').addClass('hidden');
				$('#ep_r').addClass('hidden');
				$('#show_ba_sub').show();
				$('#show_bl_sub').show();
				$('#show_bf_sub').show();
				$('#show_ba_sub').show();
				$('#show_bb_sub').show();
				$('#show_br_sub').show();
			 showArea(event, 'area');
		}else if($('#kind').val()=='dr_a004'){
			$('#show_ba').hide();
			$('#show_bl').hide();
			$('#show_bf').hide();
			$('#show_ba').hide();
			$('#show_bb').hide();
			$('#show_br').hide();
			$('#cri_l').hide();
			$('#cri_r').hide();
			$('#ep_l').removeClass('hidden');
			$('#ep_r').removeClass('hidden');
			if($('#ep_l').hasClass('choiceBtn')){setEP('epL');}
			if($('#ep_r').hasClass('choiceBtn')){setEP('epR');}
			$('#show_ba_sub').hide();
			$('#show_bl_sub').hide();
			$('#show_bf_sub').hide();
			$('#show_ba_sub').hide();
			$('#show_bb_sub').hide();
			$('#show_br_sub').hide();
			showArea(event, 'darea1');
		}
		if($('#kind').val()=='dr_a005'){
		$('#dcorner1').css('width', 96.5).css('height', 96.5);
		$('#dcorner2').css('width', 96.5).css('height', 96.5);
		$('#dcorner3').css('width',96.5).css('height', 96.5);
		$('#dcorner4').css('width', 96.5).css('height', 96.5);
		}else{
			$('#dcorner1').css('width', 80).css('height', 80);
			$('#dcorner2').css('width', 80).css('height', 80);
			$('#dcorner3').css('width', 80).css('height', 80);
			$('#dcorner4').css('width', 80).css('height', 80);
			}
		$('#darea1').css('width', bfWidth+'px');
		$('#darea2').css('width', blrWidth+'px').css('transform', 'translate(-'+(blrWidth/2 - 40)+'px, '+(blrWidth/2 - 40)+'px) rotate(270deg)');
		$('#darea3').css('width', blrWidth+'px').css('transform', 'translate('+(blrWidth/2 - 40)+'px, '+(blrWidth/2 - 40)+'px) rotate(90deg)');
		$('#darea4').css('width', bfWidth+'px');
		
		$('#dline1').css('width', bfWidth+'px');
		$('#dline2').css('height', blrWidth+'px').css('line-height', blrWidth+'px');
		$('#dline3').css('height', blrWidth+'px').css('line-height', blrWidth+'px');
		$('#dline4').css('width', bfWidth+'px');
		
		break;
	}
}

function setEP(epLR) {
	var areawid=$('#ipSpace1').val();
	if(epLR=='epL'){
		if($('#ep_l').hasClass('choiceBtn')){
			$('#ep_l').removeClass('choiceBtn');
			$('#epL').css('background-image', 'url(\'\')');
			$('#epL').css('width','0px');

		}else{
			$('#ep_l').addClass('choiceBtn');
			$('#epL').css('background-image', 'url(\'/images/wardrobe/dressroom/dr_a004/pillar.jpg\')');
			$('#epL').css('width','5px');

		}
	}else if(epLR=='epR'){
		if($('#ep_r').hasClass('choiceBtn')){
			$('#ep_r').removeClass('choiceBtn');
			$('#epR').css('background-image', 'url(\'\')');
			$('#epR').css('width','0px');
			$('#epL').css('left',0);
			$('#epR').css('left',bf_sum);
		}else{
			$('#ep_r').addClass('choiceBtn');
			$('#epR').css('background-image', 'url(\'/images/wardrobe/dressroom/dr_a004/pillar.jpg\')');
			$('#epR').css('width','5px');
			$('#epL').css('left',5);
			$('#epR').css('left',bf_sum+5);

		}
	}
	if($('#ep_l').hasClass('choiceBtn')&&$('#ep_r').hasClass('choiceBtn')){
		$('#bf_area').css('width', areawid/10 + 10);
	}else if((!$('#ep_l').hasClass('choiceBtn')&&$('#ep_r').hasClass('choiceBtn'))||($('#ep_l').hasClass('choiceBtn')&&!$('#ep_r').hasClass('choiceBtn'))){
		$('#bf_area').css('width', areawid/10 + 5);
	}else{
		$('#bf_area').css('width', areawid/10);
	}
		
}
function initOption() {
	for (i = 0; i < optionArray.length; i++)
		$('#'+optionArray[i].item_cd).val(0);
}

function setAll() {
	$('#tableItem').html('');
	setBody();
	setJabara();
	setPillar();
	setDiv();
	getPositionBody();
}

function clickBtnBody(bid) {
	if ($('#ipSpace1').val() == '' || $('#ipSpace2').val() == '') {
		alert('폭과 높이를 입력해주세요.');
		return;
	}
	
	addBody(bid);
	setAll();
	chkDoor();

	if($('#kind').val() == 'bi_a011'||$('#kind').val() == 'bi_a012'||$('#kind').val() == 'bi_a013'||$('#kind').val() == 'bi_a014'||$('#kind').val() == 'bi_a001'||$('#kind').val() == 'bi_a009'||$('#kind').val() == 'bi_a007'){
	$('.b1000').css('background-image', 'url(\'/images/wardrobe/builtin/b1000_900_a_a1.jpg\')');
	$('.b900').css('background-image', 'url(\'/images/wardrobe/builtin/b1000_900_a_a1.jpg\')');
	$('.b500').css('background-image', 'url(\'/images/wardrobe/builtin/b500_450_a.jpg\')');
	$('.b450').css('background-image', 'url(\'/images/wardrobe/builtin/b500_450_a.jpg\')');
	}
	
	if ($('#kind').val() == 'bi_a018') {
		$('.b1000').css('background-image', 'url(\'/images/wardrobe/builtin/bi_a018/b1000_900_a.jpg\')');
		$('.b900').css('background-image', 'url(\'/images/wardrobe/builtin/bi_a018/b1000_900_a.jpg\')');
		$('.b500').css('background-image', 'url(\'/images/wardrobe/builtin/bi_a018/b1000_900_d.jpg\')');
		$('.b450').css('background-image', 'url(\'/images/wardrobe/builtin/bi_a018/b1000_900_d.jpg\')');
	}
	
	if ($('#kind').val() == 'bi_a019') {
		$('.b1000').css('background-image', 'url(\'/images/wardrobe/builtin/bi_a019/b1000_900_a.jpg\')');
		$('.b900').css('background-image', 'url(\'/images/wardrobe/builtin/bi_a019/b1000_900_a.jpg\')');
		$('.b500').css('background-image', 'url(\'/images/wardrobe/builtin/bi_a019/b1000_900_d.jpg\')');
		$('.b450').css('background-image', 'url(\'/images/wardrobe/builtin/bi_a019/b1000_900_d.jpg\')');
	}
}

function addBody(bid) {
	if ($('#'+bid).hasClass('disabled')) return;
	
	var addDiv = '<div id="did' + cnt + '" class="';
	var tempDiv = 0;
	var b260_color = 'I';
	
	switch(bid) {
	case 'btn1140': addDiv += 'b1140'; tempDiv = 1140; break;
	case 'btn978': addDiv += 'b978'; tempDiv = 978; break;
	
	case 'btn1000': addDiv += 'b1000'; tempDiv = 1000; break;
	case 'btn900': addDiv += 'b900'; tempDiv = 900; break;
	case 'btn500': addDiv += 'b500'; tempDiv = 500; break;
	case 'btn450': addDiv += 'b450'; tempDiv = 450; break;
	case 'btn260_a': addDiv += 'b260_a'; tempDiv = 260; b260_color = 'I'; break;
	case 'btn260_b': addDiv += 'b260_b'; tempDiv = 260; b260_color = 'W'; break;
	}
	addDiv += '" onclick="revisionBody(\'layer2\', ' + cnt + ', ' + tempDiv + ');">';
	
	if (bid == 'btn1140' || bid == 'btn978') {
		addDiv += '<div id="did' + cnt + '_r" class="dr' + tempDiv + '"></div>';
		addDiv += '<div id="kid' + cnt + '" class="k' + tempDiv + '" onclick="changeKind(' + cnt + ', ' + tempDiv + ');">옷<span class="required" style="float: right; margin-right: 5px;"><</span></div>';		
	} else if (bid == 'btn1000' || bid == 'btn900') {
		addDiv += '<div id="did' + cnt + '_r1" class="dr' + tempDiv + '"></div><div id="did' + cnt + '_r2" class="dr' + tempDiv + '"></div>';
		addDiv += '<div id="kid' + cnt + '" class="k' + tempDiv + '" onclick="changeKind(' + cnt + ', ' + tempDiv + ');">옷<span class="required" style="float: right; margin-right: 5px;"><</span></div>';
	} else if (bid == 'btn500' || bid == 'btn450') {
		addDiv += '<div id="did' + cnt + '_r" class="dr' + tempDiv + '"></div>';
		addDiv += '<div id="kid' + cnt + '" class="k' + tempDiv + '" onclick="changeKind2(' + cnt + ', ' + tempDiv + ');">반<span class="required" style="float: right; margin-right: 5px;"><</span></div>';	
	} else if (bid == 'btn260_a' || bid == 'btn260_b') {
		addDiv += '<div class="dr' + tempDiv + '"></div>';
		addDiv += '<div id="kid' + cnt + '" class="k' + tempDiv + '" onclick="change260(event, ' + cnt + ');">' + b260_color + '</div>';
	}
	addDiv += '<div id="fid' + cnt + '" class="f' + tempDiv + ' hidden"></div></div>';
	var subWidth = 30;
	
	if (sumDiv + tempDiv != (ipSpace1 - subWidth)) {
		if (isBI)
			subWidth = 70;
		else
			subWidth = 30;
		
		if (sumDiv + tempDiv > (ipSpace1 - subWidth)) {
			alert('더이상 추가할 수 없습니다.');
			return;
		}
	}
	
	sumDiv += tempDiv;
	cnt++;
	
	if (sumDiv == 1140) $('#btn978').addClass('disabled'); if (sumDiv == 3420) $('#btnChangeDoor_slide').addClass('disabled');
	if (sumDiv == 978) $('#btn1140').addClass('disabled'); if (sumDiv == 2934) $('#btnChangeDoor_slide').addClass('disabled');
	
	$('#body').append(addDiv);
	
	firstId = $('#pillarR').next().attr('id');
	lastId = 'did' + (cnt - 1);
}

function revisionBody(el, tcnt, nwidth) {
	if (chkRemoveDiv) {
		var temp = $('#' + el);
		var bg = temp.prev().hasClass('bg');

		if (bg) {
			$('.layer').show();	
		} else {
			temp.show();
		}

		if (temp.outerHeight() < $(document).height())
			temp.css('margin-top', '-' + temp.outerHeight() / 2 + 'px');
		else
			temp.css('top', '0px');
		if (temp.outerWidth() < $(document).width())
			temp.css('margin-left', '-' + temp.outerWidth() / 2 + 'px');
		else
			temp.css('left', '0px');

		temp.find('a.cbtn').unbind('click');
		temp.find('a.cbtn').click(function(e) {
			if (bg) {
				$('#optionBox').html('');
				$('.pop-layer').css('height', 176);
				$('.pop-layer').css('margin-top', '0px');
				$('.layer').hide();
				$('#fid'+tcnt).addClass('hidden');
			} else {
				temp.hide();
			}
		});

		$('.layer .bg').unbind('click');
		$('.layer .bg').click(function(e) {
			$('#optionBox').html('');
			$('.pop-layer').css('height', 176);
			$('.pop-layer').css('margin-top', '0px');
			$('.layer').hide();
			$('#fid'+tcnt).addClass('hidden');
		});
		
		$('#fid'+tcnt).removeClass('hidden');
		var conts = '';
		conts += '<button style="width:100%; color: red;" onclick="removeBody(\'did' + tcnt + '\', ' + nwidth + ');">몸통삭제</button>';
		conts += '<hr>';
		if($('#kind').val() == 'bi_a012'&&setDr[idxDr] == 'LCR')
			{
			
			}else{				
				conts += '<button onclick="moveBody(\'did' + tcnt + '\', \'l\')"><</button>';
				conts += '<button onclick="moveBody(\'did' + tcnt + '\', \'r\')">></button>';
				conts += '<hr>';
			}
		
		conts += '<button style="width:100%; color: #4F9CD0;" onclick="showOption(' + tcnt + ', ' + nwidth + ');">옵션</button><div id="optionBox"></div>';
		$('.pop-conts').html(conts);
	}
	
	chkRemoveDiv = true;
}

var ocnt = 0;
var selectBodyWidth = 0;
function showOption(tcnt, nwidth) {
	
	var oitem_grp = '';
	var ktxt = $('#kid'+tcnt).html().substring(0, 1);
	var otxt = '';
	ocnt = 0;
	selectBodyWidth = nwidth;
	switch (ktxt) {
	case '옷': oitem_grp = 'o'+nwidth+'_s1'; break;
	case '이': oitem_grp = 'o'+nwidth+'_s2'; break;
	case '칸': oitem_grp = 'o'+nwidth+'_s3'; break;
	case '반': oitem_grp = 'o'+nwidth+'_s1'; break;
	if($('#kind').val() == 'bi_a011'||$('#kind').val() == 'bi_a012')
		var ktxt = $('#kid'+tcnt).html().substring(0, 4);
	case '옷(서)': oitem_grp = 'o'+nwidth+'_s1'; break;
	case '이(서)': oitem_grp = 'o'+nwidth+'_s2'; break;
	case '칸(서)': oitem_grp = 'o'+nwidth+'_s3'; break;
	case '옷(I)': oitem_grp = 'o'+nwidth+'_s1'; break;
	case '이(I)': oitem_grp = 'o'+nwidth+'_s2'; break;
	case '칸(I)': oitem_grp = 'o'+nwidth+'_s3'; break;
	case '반(서)': oitem_grp = 'o'+nwidth+'_s1'; break;
	
	}
	
	const optionArrayCopy = JSON.parse(JSON.stringify(optionArray));
	
	for (i = 0; i<optionArrayCopy.length; i++) {
		if ($('#kind').val() == 'bi_a018' && $('#kid'+tcnt).html().substring(0, 4) == '옷(서)' ) {
			if (oitem_grp == optionArrayCopy[i].item_grp  && (optionArrayCopy[i].item_cd == 'WCDZ-1106B' || optionArrayCopy[i].item_cd == 'WCDZ-2106B')) {
				optionArrayCopy.splice(i,1);
			}
		} else if ($('#kind').val() == 'bi_a018' && $('#kid'+tcnt).html().substring(0, 1) == '옷') {
			if (oitem_grp == optionArrayCopy[i].item_grp  && (optionArrayCopy[i].item_cd == 'WPH-5105' || optionArrayCopy[i].item_cd == 'WPH-4105')) {
				optionArrayCopy.splice(i,1);
			}
		}
		
		if ($('#kind').val() == 'bi_a018'  && $('#kid'+tcnt).html().substring(0, 4) == '이(서)') {
			if (oitem_grp == optionArrayCopy[i].item_grp  && (optionArrayCopy[i].item_cd == 'WCDZ-5106B' || optionArrayCopy[i].item_cd == 'WCDZ-4106B' )) {
				optionArrayCopy.splice(i,1);
			}
		} else if ($('#kind').val() == 'bi_a018' && $('#kid'+tcnt).html().substring(0, 1) == '이') {
			if ( oitem_grp == optionArrayCopy[i].item_grp  && (optionArrayCopy[i].item_cd == 'WPH-5105' ||  optionArrayCopy[i].item_cd == 'BP-2105' || optionArrayCopy[i].item_cd == 'BP-1105' || optionArrayCopy[i].item_cd == 'WCD-5105B' || optionArrayCopy[i].item_cd == 'WCD-4105B')) {
				optionArrayCopy.splice(i,1);
			}
		}
		
		if ($('#kind').val() == 'bi_a018' && $('#kid'+tcnt).html().substring(0, 4) == '칸(서)') {
			if (oitem_grp == optionArrayCopy[i].item_grp  && (optionArrayCopy[i].item_cd == 'WCDZ-1106B' || optionArrayCopy[i].item_cd == 'WCDZ-2106B')) {
				optionArrayCopy.splice(i,1);
			}
		} else if ($('#kind').val() == 'bi_a018'  && $('#kid'+tcnt).html().substring(0, 1) == '칸') {
			if ( oitem_grp == optionArrayCopy[i].item_grp  && optionArrayCopy[i].item_cd == 'WCD-5105D') {
				optionArrayCopy.splice(i,1);
			}
		}
		if ($('#kind').val() == 'bi_a018' && $('#kid'+tcnt).html().substring(0, 4) != '반(서)') {
			if (oitem_grp == optionArrayCopy[i].item_grp  && (optionArrayCopy[i].item_cd == 'BP-3105' || optionArrayCopy[i].item_cd == 'BP-4105')) {
				optionArrayCopy.splice(i,1);
			}
			
		}
	}
	
	
	for (i = 0; i<optionArrayCopy.length; i++) {
		if ($('#kind').val() == 'bi_a019' && $('#kid'+tcnt).html().substring(0, 4) == '옷(서)' ) {
			if (oitem_grp == optionArrayCopy[i].item_grp  && (optionArrayCopy[i].item_cd == 'WCDZ-1106B' || optionArrayCopy[i].item_cd == 'WCDZ-2106B')) {
				optionArrayCopy.splice(i,1);
			}
		} else if ($('#kind').val() == 'bi_a019' && $('#kid'+tcnt).html().substring(0, 1) == '옷') {
			if (oitem_grp == optionArrayCopy[i].item_grp  && (optionArrayCopy[i].item_cd == 'WPH-5105' || optionArrayCopy[i].item_cd == 'WPH-4105')) {
				optionArrayCopy.splice(i,1);
			}
		}
		
		if ($('#kind').val() == 'bi_a019'  && $('#kid'+tcnt).html().substring(0, 4) == '이(서)') {
			if (oitem_grp == optionArrayCopy[i].item_grp  && (optionArrayCopy[i].item_cd == 'WCDZ-5106B' || optionArrayCopy[i].item_cd == 'WCDZ-4106B' )) {
				optionArrayCopy.splice(i,1);
			}
		} else if ($('#kind').val() == 'bi_a019' && $('#kid'+tcnt).html().substring(0, 1) == '이') {
			if ( oitem_grp == optionArrayCopy[i].item_grp  && (optionArrayCopy[i].item_cd == 'WPH-5105' ||  optionArrayCopy[i].item_cd == 'BP-2105' || optionArrayCopy[i].item_cd == 'BP-1105' || optionArrayCopy[i].item_cd == 'WCD-5105B' || optionArrayCopy[i].item_cd == 'WCD-4105B')) {
				optionArrayCopy.splice(i,1);
			}
		}
		
		if ($('#kind').val() == 'bi_a019' && $('#kid'+tcnt).html().substring(0, 4) == '칸(서)') {
			if (oitem_grp == optionArrayCopy[i].item_grp  && (optionArrayCopy[i].item_cd == 'WCDZ-1106B' || optionArrayCopy[i].item_cd == 'WCDZ-2106B')) {
				optionArrayCopy.splice(i,1);
			}
		} else if ($('#kind').val() == 'bi_a019'  && $('#kid'+tcnt).html().substring(0, 1) == '칸') {
			if ( oitem_grp == optionArrayCopy[i].item_grp  && optionArrayCopy[i].item_cd == 'WCD-5105D') {
				optionArrayCopy.splice(i,1);
			}
		}
		if ($('#kind').val() == 'bi_a019' && $('#kid'+tcnt).html().substring(0, 4) != '반(서)') {
			if (oitem_grp == optionArrayCopy[i].item_grp  && (optionArrayCopy[i].item_cd == 'BP-3105' || optionArrayCopy[i].item_cd == 'BP-4105')) {
				optionArrayCopy.splice(i,1);
			}
			
		}
	}
	var ooaa = 'n';
	for (i = 0; i < optionArrayCopy.length; i++) {  
		if (oitem_grp == optionArrayCopy[i].item_grp) {
			
			console.log(optionArrayCopy[i].item_cd);
			otxt += '<div id="oid' + ocnt + '" class="optionItem ' + optionArrayCopy[i].item_cd + '"><div></div><div style="height: 38px; line-height: 38px;">' + optionArrayCopy[i].dp2 + '</div>';
			otxt += '<div><button style="width: 25%; color: #47C83E;" onclick="moveOption(\'prev\', \'oid' + ocnt + '\', ' + tcnt + ');"><</button>';
			if ($('#did'+tcnt).hasClass(optionArrayCopy[i].item_cd)) {
				otxt += '<span id="obid' + ocnt + '"><button style="width: 50%; color: red;" onclick="removeOption(' + tcnt + ', ' + nwidth + ', \'' + optionArrayCopy[i].item_cd + '\', ' + ocnt + ');">옵션삭제</button></span>';
			} else {
				otxt += '<span id="obid' + ocnt + '"><button style="width: 50%; color: #47C83E;" onclick="addOption(' + tcnt + ', ' + nwidth + ', \'' + optionArrayCopy[i].item_cd + '\', ' + ocnt + ');">옵션추가</button></span>';
			}
			otxt += '<button style="width: 25%; color: #47C83E;" onclick="moveOption(\'next\', \'oid' + ocnt + '\', ' + tcnt + ');">></button></div></div>';
			ocnt++;
		}
	}
	
	if (ocnt != 0) {
		$('#optionBox').html(otxt);
		$('.pop-layer').css('height', 254);
		$('.pop-layer').css('margin-top', '-127px');
	}
	
	if (ooaa == 'y') {
		$('#optionBox').append('<div id="wcdop" style="margin-top: 10px;"><div>옷걸이봉 설치</div><button id="wcdopyes" onclick="ooooaaaa('+tcnt+', \'yes\', ' + nwidth + ')">예</button><button id="wcdopno" onclick="ooooaaaa('+tcnt+', \'no\', ' + nwidth + ')">아니오</button></div>');
		if ($('#did'+tcnt).hasClass('s4')) {
			$('#wcdopyes').addClass('choiceBtn');
		} else
			$('#wcdopno').addClass('choiceBtn');
		$('#wcdop').hide();
//		$('.pop-layer').css('height', 324);
//		$('.pop-layer').css('margin-top', '-162px');
	}
	
	if (ocnt > 1) {
		for (i = 1; i < ocnt; i++) {
			$('#oid'+i).hide();
		}
	}
}

function moveOption(way, oid, tcnt) {
	if (ocnt > 1) {
		var show_option = '';
		
		if (way == 'prev') {
			for (i = 0; i < ocnt; i++) {
				if (i != 0 && '#'+oid == '#oid'+i)
					show_option = '#oid'+(i-1);
				$('#oid'+i).hide();
			}
			if (show_option == '')
				show_option = '#oid'+(ocnt-1);
			
			$(show_option).show();
			if (($(show_option).hasClass('WCD-4014B') || $(show_option).hasClass('WCD-5014B')) && ($('#did'+tcnt).hasClass('WCD-4014B') || $('#did'+tcnt).hasClass('WCD-5014B'))) {
				$('#wcdop').remove();
				$('#optionBox').append('<div id="wcdop" style="margin-top: 10px;"><div>옷걸이봉 설치</div><button id="wcdopyes" onclick="ooooaaaa('+tcnt+', \'yes\', '+selectBodyWidth+')">예</button><button id="wcdopno" onclick="ooooaaaa('+tcnt+', \'no\', '+selectBodyWidth+')">아니오</button></div>');
				if ($('#did'+tcnt).hasClass('s4')) {
					$('#wcdopyes').addClass('choiceBtn');
				} else
					$('#wcdopno').addClass('choiceBtn');
				$('#wcdop').show();
				$('.pop-layer').css('height', 324);
				$('.pop-layer').css('margin-top', '-162px');
			} else {
				$('#wcdop').hide();
				$('.pop-layer').css('height', 254);
				$('.pop-layer').css('margin-top', '-127px');
			}
		} else if (way == 'next') {
			for (i = 0; i < ocnt; i++) {
				if (i != ocnt - 1 && '#'+oid == '#oid'+i)
					show_option = '#oid'+(i+1);
				$('#oid'+i).hide();
			}
			
			if (show_option == '')
				show_option = '#oid0';
			
			$(show_option).show();
			if (($(show_option).hasClass('WCD-4014B') || $(show_option).hasClass('WCD-5014B')) && ($('#did'+tcnt).hasClass('WCD-4014B') || $('#did'+tcnt).hasClass('WCD-5014B'))) {
				$('#wcdop').remove();
				$('#optionBox').append('<div id="wcdop" style="margin-top: 10px;"><div>옷걸이봉 설치</div><button id="wcdopyes" onclick="ooooaaaa('+tcnt+', \'yes\', '+selectBodyWidth+')">예</button><button id="wcdopno" onclick="ooooaaaa('+tcnt+', \'no\', '+selectBodyWidth+')">아니오</button></div>');
				if ($('#did'+tcnt).hasClass('s4')) {
					$('#wcdopyes').addClass('choiceBtn');
				} else
					$('#wcdopno').addClass('choiceBtn');
				$('#wcdop').show();
				$('.pop-layer').css('height', 324);
				$('.pop-layer').css('margin-top', '-162px');
			} else {
				$('#wcdop').hide();
				$('.pop-layer').css('height', 254);
				$('.pop-layer').css('margin-top', '-127px');
			}
		}
	}
}

function addOption(tcnt, nwidth, item_cd, oidx) {
	var wt = $('#type').val();
	var wk = $('#kind').val();
	if (!$('#did'+tcnt).hasClass(item_cd)) {
		$('#did'+tcnt).append('<div class="oi o' + nwidth + ' ' + item_cd + '" style="background-image: url(\'/images/wardrobe/' + wt + '/' + wk + '/' + item_cd + '.png\');"></div>');
		$('#did'+tcnt).addClass(item_cd);
		$('#'+item_cd).val(parseInt($('#'+item_cd).val()) + 1);
		$('#obid'+oidx).html('<button style="width: 50%; color: red;" onclick="removeOption(' + tcnt + ', ' + nwidth + ', \'' + item_cd + '\', ' + oidx + ');">옵션삭제</button>');
		$('#tableItem').html('');
		
		var calc1000 = Math.floor(50000000 / ipSpace1) / 100;
		var calc900 = Math.floor(45000000 / ipSpace1) / 100;
		
		var calc500 = Math.floor(25000000 / ipSpace1) / 100;
		var calc450 = Math.floor(22500000 / ipSpace1) / 100;
		
		$('.o1000').css('width', calc1000 + 'px');
		$('.o900').css('width', calc900 + 'px');
		
		$('.o500').css('width', calc500 + 'px');
		$('.o450').css('width', calc450 + 'px');

		$('.o1000').css('background-size', calc1000 + 'px 200px');

		$('.o900').css('background-size', calc900 + 'px 200px');
		
		$('.o500').css('background-size', calc500 + 'px 200px');
		$('.o450').css('background-size', calc450 + 'px 200px');
		
		
		if (item_cd == 'WCD-4014B' || item_cd == 'WCD-5014B') {
			$('#optionBox').append('<div id="wcdop" style="margin-top: 10px;"><div>옷걸이봉 설치</div><button id="wcdopyes" onclick="ooooaaaa('+tcnt+', \'yes\','+nwidth+')">예</button><button id="wcdopno" onclick="ooooaaaa('+tcnt+', \'no\','+nwidth+')">아니오</button></div>');
			if ($('#did'+tcnt).hasClass('s4')) {
				$('#wcdopyes').addClass('choiceBtn');
			} else
				$('#wcdopno').addClass('choiceBtn');
			$('.pop-layer').css('height', 324);
			$('.pop-layer').css('margin-top', '-162px');
		}
		if (item_cd == 'MRC-0001' && $('#did'+tcnt).hasClass('MRC-0002')) {
			$('#did'+tcnt+' .oi.MRC-0002').remove();
			$('#did'+tcnt).removeClass('MRC-0002');
			$('#obid'+(oidx+1)).html('<button style="width: 50%; color: #47C83E;" onclick="addOption(' + tcnt + ', ' + nwidth + ', \'MRC-0002\', ' + (oidx+1) + ');">옵션추가</button>');
			$('#MRC-0002').val(parseInt($('#MRC-0002').val()) - 1);
		} else if (item_cd == 'MRC-0002' && $('#did'+tcnt).hasClass('MRC-0001')) {
			$('#did'+tcnt+' .oi.MRC-0001').remove();
			$('#did'+tcnt).removeClass('MRC-0001');
			$('#obid'+(oidx-1)).html('<button style="width: 50%; color: #47C83E;" onclick="addOption(' + tcnt + ', ' + nwidth + ', \'MRC-0001\', ' + (oidx-1) + ');">옵션추가</button>');
			$('#MRC-0001').val(parseInt($('#MRC-0001').val()) - 1);
		}
		if (item_cd == 'WCDZ-1106B' && $('#did'+tcnt).hasClass('WCDZ-2106B')) {
			$('#did'+tcnt+' .oi.WCDZ-2106B').remove();
			$('#did'+tcnt).removeClass('WCDZ-2106B');
			$('#obid'+(oidx+1)).html('<button style="width: 50%; color: #47C83E;" onclick="addOption(' + tcnt + ', ' + nwidth + ', \'WCDZ-2106B\', ' + (oidx+1) + ');">옵션추가</button>');
			$('#WCDZ-2106B').val(parseInt($('#WCDZ-2106B').val()) - 1);
		} else if (item_cd == 'WCDZ-2106B' && $('#did'+tcnt).hasClass('WCDZ-1106B')) {
			$('#did'+tcnt+' .oi.WCDZ-1106B').remove();
			$('#did'+tcnt).removeClass('WCDZ-1106B');
			$('#obid'+(oidx-1)).html('<button style="width: 50%; color: #47C83E;" onclick="addOption(' + tcnt + ', ' + nwidth + ', \'WCDZ-1106B\', ' + (oidx-1) + ');">옵션추가</button>');
			$('#WCDZ-1106B').val(parseInt($('#WCDZ-1106B').val()) - 1);
		}
		
		if (item_cd == 'WCD-1013' && $('#did'+tcnt).hasClass('WCD-2013')) {
			$('#did'+tcnt+' .oi.WCD-2013').remove();
			$('#did'+tcnt).removeClass('WCD-2013');
			$('#obid'+(oidx+1)).html('<button style="width: 50%; color: #47C83E;" onclick="addOption(' + tcnt + ', ' + nwidth + ', \'WCD-2013\', ' + (oidx+1) + ');">옵션추가</button>');
			$('#WCD-2013').val(parseInt($('#WCD-2013').val()) - 1);
		} else if (item_cd == 'WCD-2013' && $('#did'+tcnt).hasClass('WCD-1013')) {
			$('#did'+tcnt+' .oi.WCD-1013').remove();
			$('#did'+tcnt).removeClass('WCD-1013');
			$('#obid'+(oidx-1)).html('<button style="width: 50%; color: #47C83E;" onclick="addOption(' + tcnt + ', ' + nwidth + ', \'WCD-1013\', ' + (oidx-1) + ');">옵션추가</button>');
			$('#WCD-1013').val(parseInt($('#WCD-1013').val()) - 1);
		}
		
		if (item_cd == 'WCD-1012' && $('#did'+tcnt).hasClass('WCD-2012')) {
			$('#did'+tcnt+' .oi.WCD-2012').remove();
			$('#did'+tcnt).removeClass('WCD-2012');
			$('#obid'+(oidx+1)).html('<button style="width: 50%; color: #47C83E;" onclick="addOption(' + tcnt + ', ' + nwidth + ', \'WCD-2012\', ' + (oidx+1) + ');">옵션추가</button>');
			$('#WCD-2012').val(parseInt($('#WCD-2012').val()) - 1);
		} else if (item_cd == 'WCD-2012' && $('#did'+tcnt).hasClass('WCD-1012')) {
			$('#did'+tcnt+' .oi.WCD-1012').remove();
			$('#did'+tcnt).removeClass('WCD-1012');
			$('#obid'+(oidx-1)).html('<button style="width: 50%; color: #47C83E;" onclick="addOption(' + tcnt + ', ' + nwidth + ', \'WCD-1012\', ' + (oidx-1) + ');">옵션추가</button>');
			$('#WCD-1012').val(parseInt($('#WCD-1012').val()) - 1);
		}
	}
}

function ooooaaaa(tcnt, yesno, nwidth) {
	$('#tableItem').html('');
	if (yesno == 'yes') {
		var calc1000 = Math.floor(50000000 / ipSpace1) / 100;
		var calc900 = Math.floor(45000000 / ipSpace1) / 100;
		$('#did'+tcnt).addClass('s4');
		$('#wcdopyes').addClass('choiceBtn');
		$('#wcdopno').removeClass('choiceBtn');
		$('#did'+tcnt).append('<div class="oi o' + nwidth + ' s4" style="background-image: url(\'/images/wardrobe/builtin/s4.png\');"></div>');
		$('.o1000').css('width', calc1000 + 'px');
		$('.o900').css('width', calc900 + 'px');
		$('.o1000').css('background-size', calc1000 + 'px 200px');
		$('.o900').css('background-size', calc900 + 'px 200px');
	} else if (yesno == 'no') {
		$('#did'+tcnt).removeClass('s4');
		$('#wcdopyes').removeClass('choiceBtn');
		$('#wcdopno').addClass('choiceBtn');
		$('#did'+tcnt+' .oi.s4').remove();
	}
}

function removeOption(tcnt, nwidth, item_cd, oidx) {
	if (item_cd == 'WCD-4014B' || item_cd == 'WCD-5014B') {
		$('#wcdop').remove();
		$('#did'+tcnt+' .oi.s4').remove();
		$('#did'+tcnt).removeClass('s4');
	}
	$('.pop-layer').css('height', 254);
	$('.pop-layer').css('margin-top', '-127px');
	$('#did'+tcnt+' .oi.'+item_cd).remove();
	$('#did'+tcnt).removeClass(item_cd);
	$('#'+item_cd).val(parseInt($('#'+item_cd).val()) - 1);
	$('#obid'+oidx).html('<button style="width: 50%; color: #47C83E;" onclick="addOption(' + tcnt + ', ' + nwidth + ', \'' + item_cd + '\', ' + oidx + ');">옵션추가</button>');
	$('#tableItem').html('');
}

function moveBody(did, lor) {
	if (lor == 'l') {
		if (did != firstId) {
			if ($('#'+did).prev().attr('id') == firstId)
				firstId = did;
			if (did == lastId)
				lastId = $('#'+did).prev().attr('id');
			$('#'+did).insertBefore('#'+$('#'+did).prev().attr('id'));
		}
	} else if (lor == 'r') {
		if (did != lastId) {
			if ($('#'+did).next().attr('id') == lastId)
				lastId = did;
			if (did == firstId)
				firstId = $('#'+did).next().attr('id');
			$('#'+did).insertAfter('#'+$('#'+did).next().attr('id'));
		}
	}
	
	setAll();
	chkDoor();
}

function removeBody(did, nwidth) {
	if (chkRemoveDiv) {
		var olist = $('#'+did).attr('class').split(' ');
		for (i = 1; i < olist.length; i++) {
			$('#'+olist[i]).val(parseInt($('#'+olist[i]).val()) - 1);
		}
		
		sumDiv -= nwidth;
		$('#'+did).remove();
		
		if (sumDiv == 0) {
			$('#btn1140').removeClass('disabled');
			$('#btn978').removeClass('disabled');
		}
		if (sumDiv == 2280 || sumDiv == 1956) $('#btnChangeDoor_slide').removeClass('disabled');
		
		firstId = $('#pillarR').next().attr('id');
		lastId = firstId;
		while (true) {
			lastId = $('#'+lastId).next().attr('id');
			if ($('#'+lastId).next().attr('id') == null)
				break;
		}
		
		setAll();
		chkDoor();
		
		$('.layer').hide();
	}
	chkRemoveDiv = true;
}

function setBody() {
//	var subWidth = 0;
//	if (!isBI)
//		subWidth = 140;
	$('#sumDiv_slide').html(sumDiv);
	$('#sumDiv').html(sumDiv);
//	if (ipSpace1 - sumDiv - subWidth < 0) {
	if (ipSpace1 - sumDiv < 0) {
		$('#emptySpace_slide').html('0');
		$('#emptySpace').html('0');
	} else {
//		$('#emptySpace_slide').html(ipSpace1 - sumDiv - subWidth);
//		$('#emptySpace').html(ipSpace1 - sumDiv - subWidth);
		if (ipSpace1 - sumDiv == 30)
			$('#emptySpace_slide').html('30 <font style="color:red;">기둥엣지</font>');
		else
			$('#emptySpace_slide').html(ipSpace1 - sumDiv);
		$('#emptySpace').html(ipSpace1 - sumDiv);
	}
}

function setPillar() {
	var pillar_subWidth = 0;
	
	if (isBI) {
		var tbwidth = 0;
		if ($('#type').val() == 'builtin')
			tbwidth = 500;
		else 
			tbwidth = ipSpace1 / 10;
		
		if (sumDiv >= ipSpace1) {
			pillarWidth = 0;
		} else if (sumDiv + 30 == ipSpace1) {
			pillarWidth = (15 * $('#body').width()) / ipSpace1;
		}else {
			pillarWidth = (((ipSpace1 - sumDiv) / 2) * tbwidth) / ipSpace1;
		}
	} else {
		if ($('#type').val() == 'builtin') {
			if (sumDiv + 30 <= ipSpace1 && ipSpace1 < sumDiv + 140)
				pillarWidth = (15 * $('#body').width()) / ipSpace1;
			else
				pillarWidth = (70 * $('#body').width()) / ipSpace1;
			pillar_subWidth = (((ipSpace1 - sumDiv) / 2) * $('#body').width()) / ipSpace1 - pillarWidth;
		} else {
			if (sumDiv + 30 <= ipSpace1 && ipSpace1 < sumDiv + 140)
				pillarWidth = 1.5;
			else
				pillarWidth = 7.0;
			pillar_subWidth = (((ipSpace1 - sumDiv) / 2) * (ipSpace1 / 10)) / ipSpace1 - pillarWidth;
		}
	}
	
	if (firstId != null && isBI && (ipSpace1 - sumDiv > 460 || (ipSpace1 - sumDiv < 70 && ipSpace1 - sumDiv != 30))) {
		$('#pillarL').addClass('hidden');
		$('#jPillarL').addClass('hidden');
		$('#pillarR').addClass('hidden');
		$('#jPillarR').addClass('hidden');
	} else {
		$('#pillarL').removeClass('hidden');
		$('#jPillarL').removeClass('hidden');
		$('#pillarR').removeClass('hidden');
		$('#jPillarR').removeClass('hidden');
	}
	
	if (firstId != '') {
		$('#pillarL').css('width', pillarWidth);
		$('#pillarL_sub').css('width', pillar_subWidth);
		$('#jPillarL').css('width', pillarWidth);
		$('#jPillarL_sub').css('width', pillar_subWidth);
		$('#pillarR').css('width', pillarWidth);
		$('#pillarR_sub').css('width', pillar_subWidth);
		$('#jPillarR').css('width', pillarWidth);
		$('#jPillarR_sub').css('width', pillar_subWidth);
	
		var wt = $('#type').val();
		var wk = $('#kind').val();
		$('#pillarL').css('background-image', 'url(\'/images/wardrobe/' + wt + '/' + wk + '/pillar.jpg\')');
		$('#jPillarL').css('background-image', 'url(\'/images/wardrobe/' + wt + '/' + wk + '/pillar.jpg\')');
		$('#pillarR').css('background-image', 'url(\'/images/wardrobe/' + wt + '/' + wk + '/pillar.jpg\')');
		$('#jPillarR').css('background-image', 'url(\'/images/wardrobe/' + wt + '/' + wk + '/pillar.jpg\')');
	}
	
	if (pillar_subWidth == 0) {
		$('#jPillarL_sub').remove();
		$('#jPillarR_sub').remove();
	}
	
	$('#pillarL').html('');
	$('#pillarR').html('');
	if (!isBI) {
		if ($('#btnEP_L').hasClass('choiceBtn') && firstId != '')
			$('#pillarL').html('EP');
		if ($('#btnEP_R').hasClass('choiceBtn') && firstId != '')
			$('#pillarR').html('EP');
	}
}

function getPositionBody() {
	var chkId = false;
	var nextId = $('#pillarR').attr('id');
	var position = '';
	
	while (!chkId) {
		nextId = $('#'+nextId).next().attr('id');
		
		if ($('#'+nextId).hasClass('b1000'))
			position += 'A';
		else if ($('#'+nextId).hasClass('b900'))
			position += 'B';
		else if ($('#'+nextId).hasClass('b500'))
			position += 'C';
		else if ($('#'+nextId).hasClass('b450'))
			position += 'D';
		else if ($('#'+nextId).hasClass('b260_a') || $('#'+nextId).hasClass('b260_b'))
			position += 'E';
		
		if ($('#'+nextId).next().attr('id') == null)
			chkId = true;
	}
	
	if (position == '') position = '-';
	$('#position').html(position);
}

function setDiv() {
	var calc1000 = Math.floor(50000000 / ipSpace1) / 100;
	var calc900 = Math.floor(45000000 / ipSpace1) / 100;
	var calc500 = Math.floor(25000000 / ipSpace1) / 100;
	var calc450 = Math.floor(22500000 / ipSpace1) / 100;
	var calc260 = Math.floor(13000000 / ipSpace1) / 100;
	
	$('.b1000').css('width', calc1000 + 'px');
	$('.b900').css('width', calc900 + 'px');
	$('.b500').css('width', calc500 + 'px');
	$('.b450').css('width', calc450 + 'px');
	$('.b260_a').css('width', calc260 + 'px');
	$('.b260_b').css('width', calc260 + 'px');
	
	$('.o1000').css('width', calc1000 + 'px');
	$('.o900').css('width', calc900 + 'px');
	$('.o500').css('width', calc500 + 'px');
	$('.o450').css('width', calc450 + 'px');
	$('.o260').css('width', calc260 + 'px');
	
	$('.f1000').css('width', calc1000 - 4 + 'px');
	$('.f900').css('width', calc900 - 4 + 'px');
	$('.f500').css('width', calc500 - 4 + 'px');
	$('.f450').css('width', calc450 - 4 + 'px');
	$('.f260').css('width', calc260 - 4 + 'px');
	
//	if ($('#kind').val() == 'bi_a018') {
//		$('.o1000').css('background-size', calc1000 + 'px 240px');
//		$('.b1000').css('background-size', calc1000 + 'px 240px');
//		$('.b900').css('background-size', calc900 + 'px 240px');
//		$('.o900').css('background-size', calc900 + 'px 240px');
//	} else {
		$('.o1000').css('background-size', calc1000 + 'px 200px');
		$('.b1000').css('background-size', calc1000 + 'px 200px');
		$('.b900').css('background-size', calc900 + 'px 200px');
		$('.o900').css('background-size', calc900 + 'px 200px');
//	}
	
	
	$('.b500').css('background-size', calc500 + 'px 200px');
	$('.b450').css('background-size', calc450 + 'px 200px');
	$('.b260_a').css('background-size', calc260 + 'px 200px');
	$('.b260_b').css('background-size', calc260 + 'px 200px');
	
	
	
	$('.o500').css('background-size', calc500 + 'px 200px');
	$('.o450').css('background-size', calc450 + 'px 200px');
	$('.o260').css('background-size', calc260 + 'px 200px');
	
	$('.dr1000').css('width', calc1000 / 2 + 'px');
	$('.dr900').css('width', calc900 / 2 + 'px');
	$('.dr500').css('width', calc500 + 'px');
	$('.dr450').css('width', calc450 + 'px');
	$('.dr260').css('width', calc260 + 'px');
	
	$('.dr1000').css('background-size', calc1000 / 2 + 'px 200px');
	$('.dr900').css('background-size', calc900 / 2 + 'px 200px');
	$('.dr500').css('background-size', calc500 + 'px 200px');
	$('.dr450').css('background-size', calc450 + 'px 200px');
	
	$('.k1000').css('width', calc1000 - 2 + 'px');
	$('.k900').css('width', calc900 - 2 + 'px');
	$('.k500').css('width', calc500 - 2 + 'px');
	$('.k450').css('width', calc450 - 2 + 'px');
	$('.k260').css('width', calc260 - 2 + 'px');
}

function changeSpace1() {
	if ($('#ipSpace1').val() == '') return;
	if ($('#kind option:selected').val() == '종류') {
		$('#ipSpace1').val('');
		alert('종류를 먼저 골라주세요.');
		return;
	}
	
	if ($('#type').val() == 'slide') {
		ipSpace1 = $('#ipSpace1').val();
		if (ipSpace1 < 2000) {
			$('#ipSpace1').val(2000);
			ipSpace1 = 2000;
		} else if (ipSpace1 > 4900) {
			$('#ipSpace1').val(4900);
			ipSpace1 = 4900;
		}
		
		$('#body').css('width', (ipSpace1 / 10) + 'px');
		$('#jabara').css('width', (ipSpace1 / 10) + 'px');
		
		initBody();
		
		if ($('#ipSpace2').val() == '') return;
		
		if (isBI && ipSpace2 > 0) {
			var s978 = 0, s1140 = 0;
			s978 = ipSpace1 % 978;
			s1140 = ipSpace1 % 1140;
			
			if ((70 <= s978 && s978 <= 460) && (70 <= s1140 && s1140 <= 460)) {
				if (s978 < s1140)
					for (i = 1; i < ipSpace1 / 978; i++)
						clickBtnBody('btn978');
				else
					for (i = 1; i < ipSpace1 / 1140; i++)
						clickBtnBody('btn1140');
			} else if (70 <= s978 && s978 <= 460) {
				for (i = 1; i < ipSpace1 / 978; i++)
					clickBtnBody('btn978');
			} else if (70 <= s1140 && s1140 <= 460) {
				for (i = 1; i < ipSpace1 / 1140; i++)
					clickBtnBody('btn1140');
			} else if (s978 == 30) {
				for (i = 1; i < ipSpace1 / 978; i++)
					clickBtnBody('btn978');
			} else if (s1140 == 30) {
				for (i = 1; i < ipSpace1 / 1140; i++)
					clickBtnBody('btn1140');
			} else {
				alert('현재 폭은 몸통 구성이 불가능합니다.');
				$('#ipSpace1').val('');
			}
		}
	} else if ($('#type').val() == 'builtin') {
		debugger;
		ipSpace1 = $('#ipSpace1').val();
		/*if (ipSpace1 < 2000) {
			$('#ipSpace1').val(2000);
			ipSpace1 = 2000;*/
			if (ipSpace1 < 1000) {
				$('#ipSpace1').val(1000);
				ipSpace1 = 1000;
		} else if (ipSpace1 > 6000) {
			$('#ipSpace1').val(6000);
			ipSpace1 = 6000;
		}
		
	 	initBody();
	 	calcBody();
	}else if ($('#type').val() == 'dressroom') {
		ipSpace1 = $('#ipSpace1').val();
		if (ipSpace1 < 2000) {
			$('#ipSpace1').val(2000);
			ipSpace1 = 2000;
		} else if (ipSpace1 > 5000) {
			$('#ipSpace1').val(5000);
			ipSpace1 = 5000;
		}
		bfWidth = ipSpace1 / 10;
		$('#body_forward').css('width', bfWidth+'px');
		$('#body_backward').css('width', bfWidth+'px');
		$('#body_above').css('width', bfWidth+'px');
		$('#darea1').css('width', bfWidth+'px');
		$('#dline1').css('width', bfWidth+'px');
		$('#darea4').css('width', bfWidth+'px');
		$('#dline4').css('width', bfWidth+'px');
		$('#body_above').css('border-top', '1px solid #ccc');
		$('#body_above').css('border-bottom', '1px solid #ccc');
		
		$('#emptySpaceF').html(ipSpace1);
		$('#emptySpaceB').html(ipSpace1);
		
		initBody();
	}
}

function changeSpace2() {
	if ($('#ipSpace2').val() == '') return;
	if ($('#kind option:selected').val() == '종류') {
		$('#ipSpace2').val('');
		alert('종류를 먼저 골라주세요.');
		return;
	}
	
	if ($('#type').val() == 'slide') {
		ipSpace2 = $('#ipSpace2').val();
		if (ipSpace2 < 2210) {
			$('#ipSpace2').val(2210);
			ipSpace2 = 2210;
		}else if (ipSpace2 > 2400 && !$('#btnNst').hasClass('choiceBtn') ) {
			$('#ipSpace2').val(2400);
			ipSpace2 = 2400;
		}else if (ipSpace2 > 2600 && $('#btnNst').hasClass('choiceBtn') ) {
			$('#ipSpace2').val(2600);
			ipSpace2 = 2600;
		}
		
		if (!isBI) {
			if (ipSpace2 < 2240) {
				alert('2240이하의 높이는 붙박이 마감이 필요한 높이입니다.');
				isBuiltin('btnYes');
			} else {
				$('#ipSpace2').val(2240);
				ipSpace2 = 2240;
			}
		}
		
		$('#emptySpaceH_slide').html(ipSpace2 - 2170);
		
		if ($('#jPillarR').next().attr('id') != null) {
			var jheight = (ipSpace2 - 2170) * 30 / 230;
			$('#jPillarL').css('height', jheight + 'px');
			$('#jPillarL_sub').css('height', jheight + 'px');
			$('#jPillarR').css('height', jheight + 'px');
			$('#jPillarR_sub').css('height', jheight + 'px');
			$('#jCeil').css('height', (57 - jheight) + 'px');
			$('.j1140_2').css('height', jheight + 'px');
			$('.j1140').css('height', jheight + 'px');
			$('.j978_2').css('height', jheight + 'px');
			$('.j978').css('height', jheight + 'px');
		}
		
		$('#tableItem').html('');
		
		if ($('#ipSpace1').val() == '') return;
		
		if (isBI && ipSpace1 > 0 && sumDiv == 0) {
			var s978 = 0, s1140 = 0;
			s978 = ipSpace1 % 978;
			s1140 = ipSpace1 % 1140;
			
			if ((70 <= s978 && s978 <= 460) && (70 <= s1140 && s1140 <= 460)) {
				if (s978 < s1140)
					for (i = 1; i < ipSpace1 / 978; i++)
						clickBtnBody('btn978');
				else
					for (i = 1; i < ipSpace1 / 1140; i++)
						clickBtnBody('btn1140');
			} else if (70 <= s978 && s978 <= 460) {
				for (i = 1; i < ipSpace1 / 978; i++)
					clickBtnBody('btn978');
			} else if (70 <= s1140 && s1140 <= 460) {
				for (i = 1; i < ipSpace1 / 1140; i++)
					clickBtnBody('btn1140');
			} else if (s978 == 30) {
				for (i = 1; i < ipSpace1 / 978; i++)
					clickBtnBody('btn978');
			} else if (s1140 == 30) {
				for (i = 1; i < ipSpace1 / 1140; i++)
					clickBtnBody('btn1140');
			} else {
				alert('현재 폭은 몸통 구성이 불가능합니다.');
				$('#ipSpace1').val('');
			}
		}
	} else if ($('#type').val() == 'builtin') {
		ipSpace2 = $('#ipSpace2').val();
		if (ipSpace2 < 2210) {
			$('#ipSpace2').val(2210);
			ipSpace2 = 2210;
		} else if (ipSpace2 > 2400 && !$('#btnNst').hasClass('choiceBtn') ) {
			$('#ipSpace2').val(2400);
			ipSpace2 = 2400;
		}else if (ipSpace2 > 2600 && $('#btnNst').hasClass('choiceBtn') ) {
			$('#ipSpace2').val(2600);
			ipSpace2 = 2600;
		}
		
		if (!isBI) {
			if (ipSpace2 < 2240) {
				alert('2240이하의 높이는 붙박이 마감이 필요한 높이입니다.');
				isBuiltin('btnYes');
			} else {
				$('#ipSpace2').val(2240);
				ipSpace2 = 2240;
			}
		}
		
		$('#emptySpaceH').html(ipSpace2 - 2170);
		
		if ($('#jPillarR').next().attr('id') != null) {
			var jheight = (ipSpace2 - 2170) * 30 / 230;
			$('#jPillarL').css('height', jheight + 'px');
			$('#jPillarL_sub').css('height', jheight + 'px');
			$('#jPillarR').css('height', jheight + 'px');
			$('#jPillarR_sub').css('height', jheight + 'px');
			$('#jCeil').css('height', (57 - jheight) + 'px');
			$('.j2000').css('height', jheight + 'px');
			$('.j1800').css('height', jheight + 'px');
			$('.j1500').css('height', jheight + 'px');
			$('.j1350').css('height', jheight + 'px');
		}
		
		$('#tableItem').html('');
	}else if ($('#type').val() == 'builtinCombi') {
		ipSpace2 = $('#ipSpace2').val();
		if (ipSpace2 < 2210) {
			$('#ipSpace2').val(2210);
			ipSpace2 = 2210;
		} else if (ipSpace2 > 2400 && !$('#btnNst').hasClass('choiceBtn') ) {
			$('#ipSpace2').val(2400);
			ipSpace2 = 2400;
		}else if (ipSpace2 > 2600 && $('#btnNst').hasClass('choiceBtn') ) {
			$('#ipSpace2').val(2600);
			ipSpace2 = 2600;
		}
		
		if (!isBI) {
			if (ipSpace2 < 2240) {
				alert('2240이하의 높이는 붙박이 마감이 필요한 높이입니다.');
				isBuiltin('btnYes');
			} else {
				$('#ipSpace2').val(2240);
				ipSpace2 = 2240;
			}
		}
		
		$('#emptySpaceH').html(ipSpace2 - 2170);
		
		if ($('#jPillarR').next().attr('id') != null) {
			var jheight = (ipSpace2 - 2170) * 30 / 230;
			$('#jPillarL').css('height', jheight + 'px');
			$('#jPillarL_sub').css('height', jheight + 'px');
			$('#jPillarR').css('height', jheight + 'px');
			$('#jPillarR_sub').css('height', jheight + 'px');
			$('#jCeil').css('height', (57 - jheight) + 'px');
			$('.j2000').css('height', jheight + 'px');
			$('.j1800').css('height', jheight + 'px');
			$('.j1500').css('height', jheight + 'px');
			$('.j1350').css('height', jheight + 'px');
		}
		
		$('#tableItem').html('');
	} else if ($('#type').val() == 'dressroom') {
		ipSpace2 = $('#ipSpace2').val();
		if (ipSpace2 < 2000) {
			$('#ipSpace2').val(2000);
			ipSpace2 = 2000;
		} else if (ipSpace2 > 5000) {
			$('#ipSpace2').val(5000);
			ipSpace2 = 5000;
		}
		blrWidth = ipSpace2 / 10;
		$('#body_left').css('width', blrWidth+'px');
		$('#body_right').css('width', blrWidth+'px');
		$('#body_above').css('height', blrWidth+'px');
		$('#darea2').css('width', blrWidth+'px');
		$('#darea2').css('transform', 'translate(-'+(blrWidth/2 - 40)+'px, '+(blrWidth/2 - 40)+'px) rotate(270deg)');
		$('#dline2').css('height', blrWidth+'px');
		$('#dline2').css('line-height', blrWidth+'px');
		$('#darea3').css('width', blrWidth+'px');
		$('#darea3').css('transform', 'translate('+(blrWidth/2 - 40)+'px, '+(blrWidth/2 - 40)+'px) rotate(90deg)');
		$('#dline3').css('height', blrWidth+'px');
		$('#dline3').css('line-height', blrWidth+'px');
		$('#body_above').css('border-left', '1px solid #ccc');
		$('#body_above').css('border-right', '1px solid #ccc');
		
		$('#emptySpaceL').html(ipSpace2);
		$('#emptySpaceR').html(ipSpace2);
		
		initBody();
	}
}

//통 구하기
function calcBody() {
	debugger;
	var width = $('#ipSpace1').val();
	var q1 = 0;
	var q2 = 0;
	var q3 = 0;
	var q4 = 0;
	var q5 = 0;
	var tcnt = 0;
	var tsum = 0;
	var kind = $('#kind').val()
	combiList = new Array();
	if (kind == 'bi_a018' || kind == 'bi_a019') {
//		if (width >= 260 + 70) {
//			//math.floor = 소수점 이하 버림.
//			q5 = Math.floor(width / 260);
//			if (q5 > 1)
//				q5 = 1;
//			
//			for (i5 = q5; i5 >= 0; i5--) {
				if (width >= 450 + 140) {
					q4 = Math.floor(width  / 450);
					if (q4 > 1)
						q4 = 1;
					
					for (i4 = q4; i4 >= 0; i4--) {
						if (width  - (i4 * 450) >= 500 + 140) {
							q3 = Math.floor((width  - (i4 * 450)) / 500);
							if (q3 > 1)
								q3 = 1;
							if (i4 > 0)
								q3 = 0;
							
							for (i3 = q3; i3 >= 0; i3--) {
								if (width  - (i4 * 450) - (i3 * 500) >= 900 + 140) {
									q2 = Math.floor((width  - (i4 * 450) - (i3 * 500)) / 900);
									
									for (i2 = q2; i2 >= 0; i2--) {
										if (width  - (i4 * 450) - (i3 * 500) - (i2 * 900) >= 1000 + 140) {
											q1 = Math.floor((width  - (i4 * 450) - (i3 * 500) - (i2 * 900)) / 1000);
											
											for (i1 = q1; i1 >= 0; i1--) {
												tsum = i1 * 1000 + i2 * 900 + i3 * 500 + i4 * 450;
												if (tsum <= width - 70 && tsum >= width - 460) {
													combiList[tcnt] = new Array();
													combiList[tcnt][0] = tsum;
													combiList[tcnt][1] = i1;
													combiList[tcnt][2] = i2;
													combiList[tcnt][3] = i3;
													combiList[tcnt][4] = i4;
//													combiList[tcnt][5] = i5;
													tcnt++;
												}
											}
										} else {
											tsum = i2 * 900 + i3 * 500 + i4 * 450;
											if (tsum <= width - 70 && tsum >= width - 460) {
												combiList[tcnt] = new Array();
												combiList[tcnt][0] = tsum;
												combiList[tcnt][1] = 0;
												combiList[tcnt][2] = i2;
												combiList[tcnt][3] = i3;
												combiList[tcnt][4] = i4;
//												combiList[tcnt][5] = i5;
												tcnt++;
											}
										}
									}
								} else {
									tsum = i3 * 500 + i4 * 450;
									if (tsum <= width - 70 && tsum >= width - 460) {
										combiList[tcnt] = new Array();
										combiList[tcnt][0] = tsum;
										combiList[tcnt][1] = 0;
										combiList[tcnt][2] = 0;
										combiList[tcnt][3] = i3;
										combiList[tcnt][4] = i4;
//										combiList[tcnt][5] = i5;
										tcnt++;
									}
								}
							}
						} else {
							tsum = i4 * 450;
							if (tsum <= width - 70 && tsum >= width - 460) {
								combiList[tcnt] = new Array();
								combiList[tcnt][0] = tsum;
								combiList[tcnt][1] = 0;
								combiList[tcnt][2] = 0;
								combiList[tcnt][3] = 0;
								combiList[tcnt][4] = i4;
//								combiList[tcnt][5] = i5;
								tcnt++;
							}
						}
					}
				} 
//				else {
//					tsum = i5 * 260;
//					if (tsum <= width - 70 && tsum >= width - 460) {
//						combiList[tcnt] = new Array();
//						combiList[tcnt][0] = tsum;
//						combiList[tcnt][1] = 0;
//						combiList[tcnt][2] = 0;
//						combiList[tcnt][3] = 0;
//						combiList[tcnt][4] = 0;
//						combiList[tcnt][5] = i5;
//						tcnt++;
//					}
//				}
			}
//		}
//	}
		
	
	if(kind == 'bi_a001' || kind == 'bi_a002' || kind == 'bi_a003' || kind == 'bi_a004' || kind == 'bi_a005' || kind == 'bi_a006' || kind == 'bi_a007' || kind == 'bi_a008' || 
	   kind == 'bi_a009' || kind == 'bi_a010' || kind == 'bi_a011' || kind == 'bi_a012' || kind == 'bi_a013' || kind == 'bi_a014' || kind == 'bi_a015' || kind == 'bi_a016' ){
	if (width >= 260 + 70) {
		//math.floor = 소수점 이하 버림.
		q5 = Math.floor(width / 260);
		if (q5 > 1)
			q5 = 1;
		
		for (i5 = q5; i5 >= 0; i5--) {
			if (width - (i5 * 260) >= 450 + 70) {
				q4 = Math.floor((width - (i5 * 260)) / 450);
				if (q4 > 1)
					q4 = 1;
				
				for (i4 = q4; i4 >= 0; i4--) {
					if (width - (i5 * 260) - (i4 * 450) >= 500 + 70) {
						q3 = Math.floor((width - (i5 * 260) - (i4 * 450)) / 500);
						if (q3 > 1)
							q3 = 1;
						if (i4 > 0)
							q3 = 0;
						
						for (i3 = q3; i3 >= 0; i3--) {
							if (width - (i5 * 260) - (i4 * 450) - (i3 * 500) >= 900 + 70) {
								q2 = Math.floor((width - (i5 * 260) - (i4 * 450) - (i3 * 500)) / 900);
								
								for (i2 = q2; i2 >= 0; i2--) {
									if (width - (i5 * 260) - (i4 * 450) - (i3 * 500) - (i2 * 900) >= 1000 + 70) {
										q1 = Math.floor((width - (i5 * 260) - (i4 * 450) - (i3 * 500) - (i2 * 900)) / 1000);
										
										for (i1 = q1; i1 >= 0; i1--) {
											tsum = i1 * 1000 + i2 * 900 + i3 * 500 + i4 * 450 + i5 * 260;
											if (tsum <= width - 70 && tsum >= width - 460) {
												combiList[tcnt] = new Array();
												combiList[tcnt][0] = tsum;
												combiList[tcnt][1] = i1;
												combiList[tcnt][2] = i2;
												combiList[tcnt][3] = i3;
												combiList[tcnt][4] = i4;
												combiList[tcnt][5] = i5;
												tcnt++;
											}
										}
									} else {
										tsum = i2 * 900 + i3 * 500 + i4 * 450 + i5 * 260;
										if (tsum <= width - 70 && tsum >= width - 460) {
											combiList[tcnt] = new Array();
											combiList[tcnt][0] = tsum;
											combiList[tcnt][1] = 0;
											combiList[tcnt][2] = i2;
											combiList[tcnt][3] = i3;
											combiList[tcnt][4] = i4;
											combiList[tcnt][5] = i5;
											tcnt++;
										}
									}
								}
							} else {
								tsum = i3 * 500 + i4 * 450 + i5 * 260;
								if (tsum <= width - 70 && tsum >= width - 460) {
									combiList[tcnt] = new Array();
									combiList[tcnt][0] = tsum;
									combiList[tcnt][1] = 0;
									combiList[tcnt][2] = 0;
									combiList[tcnt][3] = i3;
									combiList[tcnt][4] = i4;
									combiList[tcnt][5] = i5;
									tcnt++;
								}
							}
						}
					} else {
						tsum = i4 * 450 + i5 * 260;
						if (tsum <= width - 70 && tsum >= width - 460) {
							combiList[tcnt] = new Array();
							combiList[tcnt][0] = tsum;
							combiList[tcnt][1] = 0;
							combiList[tcnt][2] = 0;
							combiList[tcnt][3] = 0;
							combiList[tcnt][4] = i4;
							combiList[tcnt][5] = i5;
							tcnt++;
						}
					}
				}
			} else {
				tsum = i5 * 260;
				if (tsum <= width - 70 && tsum >= width - 460) {
					combiList[tcnt] = new Array();
					combiList[tcnt][0] = tsum;
					combiList[tcnt][1] = 0;
					combiList[tcnt][2] = 0;
					combiList[tcnt][3] = 0;
					combiList[tcnt][4] = 0;
					combiList[tcnt][5] = i5;
					tcnt++;
				}
			}
		}
	}
	}
	var sumBody = 0;
	var chkEqual = false;
	$('#slt1').html('<option>통</option>');
	$('#slt2').html('<option>구성</option>');
	if (kind == 'bi_a018' || kind == 'bi_a019') {
		for (i = tcnt - 1; i >= 0; i--) {
			sumBody = 0;
			chkEqual = false;
	
			sumBody = combiList[i][1] + combiList[i][2] + combiList[i][3] + combiList[i][4];
			var idxSlt1 = $('#slt1 option').size();
			for (j = 1; j < idxSlt1; j++) {
				if ($('#slt1 option:eq(' + j + ')').val() == sumBody)
					chkEqual = true;
			}
			
			if (!chkEqual)
				$('#slt1').append('<option value="' + sumBody + '">' + sumBody + '통</option>');
		}
	} else {
		for (i = tcnt - 1; i >= 0; i--) {
			sumBody = 0;
			chkEqual = false;
	
			sumBody = combiList[i][1] + combiList[i][2] + combiList[i][3] + combiList[i][4] + combiList[i][5];
			var idxSlt1 = $('#slt1 option').size();
			for (j = 1; j < idxSlt1; j++) {
				if ($('#slt1 option:eq(' + j + ')').val() == sumBody)
					chkEqual = true;
			}
			
			if (!chkEqual)
				$('#slt1').append('<option value="' + sumBody + '">' + sumBody + '통</option>');
		}
	}
}

function changeSlt1() {
	debugger;
	$('#slt2').html('<option>구성</option>');
	
	if ($('#ipSpace1').val() == '' || $('#ipSpace2').val() == '') {
		$('#slt1 option').removeAttr('selected');
		$('#slt1 option:eq(0)').attr('selected', 'selected');
		alert('폭과 높이를 입력해주세요.');
		return;
	}
	
	var selectBody = $('#slt1 option:selected').val();
	var sumBody = 0;
	var txtBody = '';
	var txtBodySub = '';
	
	if ($('#kind').val() == 'bi_a018' || $('#kind').val() == 'bi_a019' ) {
		for (i = combiList.length - 1; i >= 0; i--) {
			sumBody = combiList[i][1] + combiList[i][2] + combiList[i][3] + combiList[i][4];
			
			if (selectBody == sumBody) {
				txtBody = '';
				txtBodySub = '';
				
				if (combiList[i][1] > 0)
					txtBody += '1000장-' + combiList[i][1] + '통';
				if (combiList[i][2] > 0) {
					if (txtBody != '') txtBody += ', ';
					txtBody += '900장-' + combiList[i][2] + '통';
				}
				if (combiList[i][3] > 0) {
					if (txtBody != '') txtBody += ', ';
					txtBody += '500장-' + combiList[i][3] + '통';
				}
				if (combiList[i][4] > 0) {
					if (txtBody != '') txtBody += ', ';
					txtBody += '450장-' + combiList[i][4] + '통';
				}
				
				for (tb1 = 0; tb1 < combiList[i][1]; tb1++)
					txtBodySub += 'A';
				for (tb2 = 0; tb2 < combiList[i][2]; tb2++)
					txtBodySub += 'B';
				for (tb3 = 0; tb3 < combiList[i][3]; tb3++)
					txtBodySub += 'C';
				for (tb4 = 0; tb4 < combiList[i][4]; tb4++)
					txtBodySub += 'D';
				
				$('#slt2').append('<option value="' + i + '">' + txtBody + ' (' + txtBodySub + ')</option>');
			}
		}
	} else {
		for (i = combiList.length - 1; i >= 0; i--) {
			sumBody = combiList[i][1] + combiList[i][2] + combiList[i][3] + combiList[i][4] + combiList[i][5];
			
			if (selectBody == sumBody) {
				txtBody = '';
				txtBodySub = '';
				
				if (combiList[i][1] > 0)
					txtBody += '1000장-' + combiList[i][1] + '통';
				if (combiList[i][2] > 0) {
					if (txtBody != '') txtBody += ', ';
					txtBody += '900장-' + combiList[i][2] + '통';
				}
				if (combiList[i][3] > 0) {
					if (txtBody != '') txtBody += ', ';
					txtBody += '500장-' + combiList[i][3] + '통';
				}
				if (combiList[i][4] > 0) {
					if (txtBody != '') txtBody += ', ';
					txtBody += '450장-' + combiList[i][4] + '통';
				}
				
				if (combiList[i][5] > 0) {
					if (txtBody != '') txtBody += ', ';
					txtBody += '선반장-' + combiList[i][5] + '통';
				}
				 
				for (tb1 = 0; tb1 < combiList[i][1]; tb1++)
					txtBodySub += 'A';
				for (tb2 = 0; tb2 < combiList[i][2]; tb2++)
					txtBodySub += 'B';
				for (tb3 = 0; tb3 < combiList[i][3]; tb3++)
					txtBodySub += 'C';
				for (tb4 = 0; tb4 < combiList[i][4]; tb4++)
					txtBodySub += 'D';
				
				for (tb5 = 0; tb5 < combiList[i][5]; tb5++)
					txtBodySub += 'E';
				
				$('#slt2').append('<option value="' + i + '">' + txtBody + ' (' + txtBodySub + ')</option>');
			}
		}
	}
	
}

function changeSlt2() {
	$('#body').html('<div id="pillarL_sub" class="hidden"></div><div id="pillarL"></div><div id="pillarR_sub" class="hidden"></div><div id="pillarR"></div>');
	var sb = $('#slt2 option:selected').val();
	ipSpace1 = $('#ipSpace1').val();
	cnt = 0;
	sumDiv = 0;
	
	initOption();
	setBody();
	setPillar();
	setDiv();
	
	for (tb1 = 0; tb1 < combiList[sb][1]; tb1++)
		addBody('btn1000');
	for (tb2 = 0; tb2 < combiList[sb][2]; tb2++)
		addBody('btn900');
	for (tb3 = 0; tb3 < combiList[sb][3]; tb3++)
		addBody('btn500');
	for (tb4 = 0; tb4 < combiList[sb][4]; tb4++)
		addBody('btn450');
	for (tb5 = 0; tb5 < combiList[sb][5]; tb5++)
		addBody('btn260_a');
	
	setAll();
	chkDoor();
	
	if($('#kind').val() == 'bi_a011' 
			||$('#kind').val() == 'bi_a012'||$('#kind').val() == 'bi_a013'
			||$('#kind').val() == 'bi_a014'||$('#kind').val() == 'bi_a001'
			||$('#kind').val() == 'bi_a009'||$('#kind').val() == 'bi_a007'){
		$('.b1000').css('background-image', 'url(\'/images/wardrobe/builtin/b1000_900_a_a1.jpg\')');
		$('.b900').css('background-image', 'url(\'/images/wardrobe/builtin/b1000_900_a_a1.jpg\')');
		$('.b500').css('background-image', 'url(\'/images/wardrobe/builtin/b500_450_a.jpg\')');
		$('.b450').css('background-image', 'url(\'/images/wardrobe/builtin/b500_450_a.jpg\')');
	}
	
	if ( $('#kind').val() == 'bi_a018') {
		$('.b1000').css('background-image', 'url(\'/images/wardrobe/builtin/bi_a018/b1000_900_a.jpg\')');
		$('.b900').css('background-image', 'url(\'/images/wardrobe/builtin/bi_a018/b1000_900_a.jpg\')');
		$('.b500').css('background-image', 'url(\'/images/wardrobe/builtin/bi_a018/b1000_900_d.jpg\')');
		$('.b450').css('background-image', 'url(\'/images/wardrobe/builtin/bi_a018/b1000_900_d.jpg\')');
	}
	
	if ( $('#kind').val() == 'bi_a019') {
		$('.b1000').css('background-image', 'url(\'/images/wardrobe/builtin/bi_a019/b1000_900_a.jpg\')');
		$('.b900').css('background-image', 'url(\'/images/wardrobe/builtin/bi_a019/b1000_900_a.jpg\')');
		$('.b500').css('background-image', 'url(\'/images/wardrobe/builtin/bi_a019/b1000_900_d.jpg\')');
		$('.b450').css('background-image', 'url(\'/images/wardrobe/builtin/bi_a019/b1000_900_d.jpg\')');
	}
}

function changeKind(id, twidth) {
	var kind = $('#kid'+id).html().substring(0, 1);
	
	if ($('#type').val() == 'slide') {
		switch (kind) {
		case '옷':
			$('#kid'+id).html('이<span class="required" style="float: right; margin-right: 5px;"><</span>');
			$('#did'+id).css('background-image', 'url("/images/wardrobe/slide/b' + twidth + '_b.jpg")');
			break;
		case '이':
			$('#kid'+id).html('칸<span class="required" style="float: right; margin-right: 5px;"><</span>');
			$('#did'+id).css('background-image', 'url("/images/wardrobe/slide/b' + twidth + '_c.jpg")');
			break;
		case '칸':
			$('#kid'+id).html('옷<span class="required" style="float: right; margin-right: 5px;"><</span>');
			$('#did'+id).css('background-image', 'url("/images/wardrobe/slide/b' + twidth + '_a.jpg")');
			break;
		}
	}
	else if ($('#type').val() == 'builtin') {
	if($('#kind').val() == 'bi_a011'||$('#kind').val() == 'bi_a012'||$('#kind').val() == 'bi_a016'){
		var kind = $('#kid'+id).html().substring(0, 4);
		var kid = $('#kid'+id).attr('id');
		switch (kind) {
		
		case '옷<sp':
			$('#kid'+id).html('이<span class="required" style="float: right; margin-right: 5px;"><</span>');
			$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/b1000_900_c_c.jpg")');
			break;
		case '이<sp':
			$('#kid'+id).html('칸<span class="required" style="float: right; margin-right: 5px;"><</span>');
			$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/b1000_900_b_b.jpg")');		
			break;
		case '칸<sp':	
				if($('#kind').val() == 'bi_a012'&&$('#did0_r1').hasClass('drLR2')||$('#kind').val() == 'bi_a012'&&$('#did0_r2').hasClass('drLR2'))
				{					
					if($('#kind').val() == 'bi_a012'&&$('#did0_r1').hasClass('drLR2')&&setDr[idxDr]=='LCR'){						
						if(kid=='kid0'||kid=='kid'+(cnt-1)){
							$('#kid'+id).html('옷(I)<span class="required" style="float: right; margin-right: 5px;"><</span>');
							$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/b1000_900_g.jpg")');		
						}else{
							$('#kid'+id).html('옷(I)<span class="required" style="float: right; margin-right: 5px;"><</span>');
							$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/b1000_900_g.jpg")');
						}
					}else{
					$('#kid'+id).html('옷(I)<span class="required" style="float: right; margin-right: 5px;"><</span>');
					$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/b1000_900_g.jpg")')
					}		
				}else{
				$('#kid'+id).html('옷(I)<span class="required" style="float: right; margin-right: 5px;"><</span>');
				$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/b1000_900_g.jpg")');
				}
			break;
			
		case '옷(I)':
			$('#kid'+id).html('이(I)<span class="required" style="float: right; margin-right: 5px;"><</span>');
			$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/b1000_900_h.jpg")');
			break;
		case '이(I)':
			$('#kid'+id).html('칸(I)<span class="required" style="float: right; margin-right: 5px;"><</span>');
			$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/b1000_900_j.jpg")');
			break;
		case '칸(I)':
			if($('#kind').val() == 'bi_a012'&&$('#did0_r1').hasClass('drLR2')||$('#kind').val() == 'bi_a012'&&$('#did0_r2').hasClass('drLR2')){
				if($('#kind').val() == 'bi_a012'&&$('#did0_r1').hasClass('drLR2')&&setDr[idxDr]=='LCR'){
				if(kid=='kid0'||kid=='kid'+(cnt-1)){
					$('#kid'+id).html('옷<span class="required" style="float: right; margin-right: 5px;"><</span>');
					$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/b1000_900_a_a1.jpg")');		
				}else{
					$('#kid'+id).html('옷(서)<span class="required" style="float: right; margin-right: 5px;"><</span>');
					$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/b1000_900_d.jpg")');
					}
				}else{
					$('#kid'+id).html('옷<span class="required" style="float: right; margin-right: 5px;"><</span>');
					$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/b1000_900_a_a1.jpg")');
				}
			}
			else{
			$('#kid'+id).html('옷(서)<span class="required" style="float: right; margin-right: 5px;"><</span>');
			$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/b1000_900_d.jpg")');
			}
			break;
		case '옷(서)':
			$('#kid'+id).html('이(서)<span class="required" style="float: right; margin-right: 5px;"><</span>');
			$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/b1000_900_e.jpg")');
			break;
		case '이(서)':
			$('#kid'+id).html('칸(서)<span class="required" style="float: right; margin-right: 5px;"><</span>');
			$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/b1000_900_f.jpg")');
			break;
		case '칸(서)':
			$('#kid'+id).html('옷<span class="required" style="float: right; margin-right: 5px;"><</span>');
			$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/b1000_900_a_a1.jpg")');
			break;			
		}
	}else if($('#kind').val() == 'bi_a001'||$('#kind').val() == 'bi_a009'||$('#kind').val() == 'bi_a002'||$('#kind').val() == 'bi_a003'||$('#kind').val() == 'bi_a004'||$('#kind').val() == 'bi_a007'||$('#kind').val() == 'bi_a008'||$('#kind').val() == 'bi_a010'){
		var kind = $('#kid'+id).html().substring(0, 4);
	switch (kind) {
	case '옷<sp':
		$('#kid'+id).html('이<span class="required" style="float: right; margin-right: 5px;"><</span>');
		$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/b1000_900_c_c.jpg")');
		break;
	case '이<sp':
		$('#kid'+id).html('칸<span class="required" style="float: right; margin-right: 5px;"><</span>');
		$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/b1000_900_b_b.jpg")');
		break;
	case '칸<sp':
		$('#kid'+id).html('옷(I)<span class="required" style="float: right; margin-right: 5px;"><</span>');
		$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/b1000_900_g.jpg")');
		break;
	case '옷(I)':
		$('#kid'+id).html('이(I)<span class="required" style="float: right; margin-right: 5px;"><</span>');
		$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/b1000_900_h.jpg")');
		break;
	case '이(I)':
		$('#kid'+id).html('칸(I)<span class="required" style="float: right; margin-right: 5px;"><</span>');
		$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/b1000_900_j.jpg")');
		break;
	case '칸(I)':
		$('#kid'+id).html('옷<span class="required" style="float: right; margin-right: 5px;"><</span>');
		$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/b1000_900_a_a1.jpg")');
		break;	
		}		
		
	}else if($('#kind').val() == 'bi_a013'||$('#kind').val() == 'bi_a014'){
	switch (kind) {
	case '옷':
		$('#kid'+id).html('이<span class="required" style="float: right; margin-right: 5px;"><</span>');
		$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/b1000_900_c_c.jpg")');
		break;
	case '이':
		$('#kid'+id).html('칸<span class="required" style="float: right; margin-right: 5px;"><</span>');
		$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/b1000_900_b_b.jpg")');
		break;
	case '칸':
		$('#kid'+id).html('옷<span class="required" style="float: right; margin-right: 5px;"><</span>');
		$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/b1000_900_a_a1.jpg")');
		break;
	}
	}else if ($('#kind').val() == 'bi_a018') {
		var kind = $('#kid'+id).html().substring(0, 4);
		switch (kind) {
		case '옷<sp':
			$('#kid'+id).html('이<span class="required" style="float: right; margin-right: 5px;"><</span>');
			$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/bi_a018/b1000_900_b.jpg")');
			break;
		case '이<sp':
			$('#kid'+id).html('칸<span class="required" style="float: right; margin-right: 5px;"><</span>');
			$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/bi_a018/b1000_900_c.jpg")');
			break;
		case '칸<sp':
			$('#kid'+id).html('옷(서)<span class="required" style="float: right; margin-right: 5px;"><</span>');
			$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/bi_a018/b1000_900_h.jpg")');
			break;
//		case '옷(I)':
//			$('#kid'+id).html('이(I)<span class="required" style="float: right; margin-right: 5px;"><</span>');
//			$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/bi_a018/b1000_900_f.jpg")');
//			break;
//		case '이(I)':
//			$('#kid'+id).html('칸(I)<span class="required" style="float: right; margin-right: 5px;"><</span>');
//			$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/bi_a018/b1000_900_g.jpg")');
//			break;
//		case '칸(I)':
//			$('#kid'+id).html('옷(서)<span class="required" style="float: right; margin-right: 5px;"><</span>');
//			$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/bi_a018/b1000_900_h.jpg")');
//			break;
		case '옷(서)':
			$('#kid'+id).html('이(서)<span class="required" style="float: right; margin-right: 5px;"><</span>');
			$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/bi_a018/b1000_900_i.jpg")');
			break;
		case '이(서)':
			$('#kid'+id).html('칸(서)<span class="required" style="float: right; margin-right: 5px;"><</span>');
			$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/bi_a018/b1000_900_j.jpg")');
			break;
		case '칸(서)':
			$('#kid'+id).html('옷<span class="required" style="float: right; margin-right: 5px;"><</span>');
			$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/bi_a018/b1000_900_a.jpg")');
			break;			
		}
	}else if ($('#kind').val() == 'bi_a019') {
		var kind = $('#kid'+id).html().substring(0, 4);
		switch (kind) {
		case '옷<sp':
			$('#kid'+id).html('이<span class="required" style="float: right; margin-right: 5px;"><</span>');
			$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/bi_a019/b1000_900_b.jpg")');
			break;
		case '이<sp':
			$('#kid'+id).html('칸<span class="required" style="float: right; margin-right: 5px;"><</span>');
			$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/bi_a019/b1000_900_c.jpg")');
			break;
		case '칸<sp':
			$('#kid'+id).html('옷(서)<span class="required" style="float: right; margin-right: 5px;"><</span>');
			$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/bi_a019/b1000_900_h.jpg")');
			break;
//		case '옷(I)':
//			$('#kid'+id).html('이(I)<span class="required" style="float: right; margin-right: 5px;"><</span>');
//			$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/bi_a018/b1000_900_f.jpg")');
//			break;
//		case '이(I)':
//			$('#kid'+id).html('칸(I)<span class="required" style="float: right; margin-right: 5px;"><</span>');
//			$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/bi_a018/b1000_900_g.jpg")');
//			break;
//		case '칸(I)':
//			$('#kid'+id).html('옷(서)<span class="required" style="float: right; margin-right: 5px;"><</span>');
//			$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/bi_a018/b1000_900_h.jpg")');
//			break;
		case '옷(서)':
			$('#kid'+id).html('이(서)<span class="required" style="float: right; margin-right: 5px;"><</span>');
			$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/bi_a019/b1000_900_i.jpg")');
			break;
		case '이(서)':
			$('#kid'+id).html('칸(서)<span class="required" style="float: right; margin-right: 5px;"><</span>');
			$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/bi_a019/b1000_900_j.jpg")');
			break;
		case '칸(서)':
			$('#kid'+id).html('옷<span class="required" style="float: right; margin-right: 5px;"><</span>');
			$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/bi_a019/b1000_900_a.jpg")');
			break;			
		}
	}else{
		switch (kind) {
	case '옷':
		$('#kid'+id).html('이<span class="required" style="float: right; margin-right: 5px;"><</span>');
		$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/b1000_900_b.jpg")');
		break;
	case '이':
		$('#kid'+id).html('칸<span class="required" style="float: right; margin-right: 5px;"><</span>');
		$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/b1000_900_c.jpg")');
		break;
	case '칸':
		$('#kid'+id).html('옷<span class="required" style="float: right; margin-right: 5px;"><</span>');
		$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/b1000_900_a_a1.jpg")');
		break;
			}
		}
	}
	
	$('#did'+id+' .oi').remove();
	var olist = $('#did'+id).attr('class').split(' ');
	for (i = 1; i < olist.length; i++) {
		$('#'+olist[i]).val(parseInt($('#'+olist[i]).val()) - 1);
		$('#did'+id).removeClass(olist[i]);
	}
	
	$('#tableItem').html('');
	
	chkRemoveDiv = false;
}

function change260(e, id) {
	var color = $('#kid'+id).html();
	e.stopPropagation();
	switch (color) {
	case 'I':
		$('#kid'+id).html('W');
		$('#did'+id).attr('class', 'b260_b');
		break;
	case 'W':
		$('#kid'+id).html('I');
		$('#did'+id).attr('class', 'b260_a');
		break;
	}
		
	$('#tableItem').html('');
}

function initDoor() {
	var chkId = false;
	var nextId = $('#pillarR').attr('id');
	
	while (!chkId) {
		nextId = $('#'+nextId).next().attr('id');

		if ($('#'+nextId).hasClass('b1140')) {
			$('#'+nextId+'_r').attr('class', 'dr1140');
			$('#'+nextId+'_r').css('background', '');
		} else if ($('#'+nextId).hasClass('b978')) {
			$('#'+nextId+'_r').attr('class', 'dr978');
			$('#'+nextId+'_r').css('background', '');
			
		} else if ($('#'+nextId).hasClass('b1000')) {
			$('#'+nextId+'_r1').attr('class', 'dr1000');
			$('#'+nextId+'_r2').attr('class', 'dr1000');
			$('#'+nextId+'_r1').css('background-image', '');
			$('#'+nextId+'_r2').css('background-image', '');
		} else if ($('#'+nextId).hasClass('b900')) {
			$('#'+nextId+'_r1').attr('class', 'dr900');
			$('#'+nextId+'_r2').attr('class', 'dr900');
			$('#'+nextId+'_r1').css('background-image', '');
			$('#'+nextId+'_r2').css('background-image', '');
		} else if ($('#'+nextId).hasClass('b500')) {
			$('#'+nextId+'_r').attr('class', 'dr500');
			$('#'+nextId+'_r').css('background-image', '');
		} else if ($('#'+nextId).hasClass('b450')) {
			$('#'+nextId+'_r').attr('class', 'dr450');
			$('#'+nextId+'_r').css('background-image', '');
		}
		
		if ($('#'+nextId).next().attr('id') == null)
			chkId = true;
	}
}

var sd_door_lr = 'l';
function changeDoor() {
	if ($('#type').val() == 'slide') {
		if ($('#btnChangeDoor_slide').hasClass('disabled')) return;
		
		if ($('#btnChangeDoor_slide').html() == '좌문짝') {
			$('#btnChangeDoor_slide').html('우문짝');
			sd_door_lr = 'r';
			idxDr = 1;
		} else {
			$('#btnChangeDoor_slide').html('좌문짝');
			sd_door_lr = 'l';
			idxDr = 0;
		}
		
		setDoor();
		
		if ($('#pillarL').hasClass('hidden')) {
			$('#workBar').fadeOut();
		} else {
			$('#workBar').removeClass('hidden');
			$('#workBar').fadeIn();
		}
	} else if ($('#type').val() == 'builtin') {
		idxDr++;
		
		if (setDr.length <= idxDr)
			idxDr = 0;
		
		$('#btnChangeDoor').html('문짝 ' + (idxDr + 1));
		chkDoor();
	}
	$('#tableItem').html('');
}

var drC1, drC2, drLR1, drLR2, drMCR, drLCM;
var idxDr = 0;
var typeDr;
function chkDoor() {
	var chkId = false;
	var dFirstId = firstId;
	var dLastId = lastId;
	
	$('#alertTxt').html('');
	$('#alert').addClass('hidden');
	$('#alert').removeClass('contentsRow');
	
	if ($('#type').val() == 'builtin' || $('#type').val() == 'builtinCombi') {
		while (true) {
			if ($('#'+dFirstId).hasClass('b260_a') || $('#'+dFirstId).hasClass('b260_b'))
				dFirstId = $('#'+dFirstId).next().attr('id');
			else
				break;
		}
		while (true) {
			if ($('#'+dLastId).hasClass('b260_a') || $('#'+dLastId).hasClass('b260_b'))
				dLastId = $('#'+dLastId).prev().attr('id');
			else
				break;
		}
		
		if (dLastId == null)
			dLastId = dFirstId;
		
		drC1 = 'drC1';
		drC2 = 'drC2';
		drLR1 = 'drLR1';
		drLR2 = 'drLR2';
		drMCR = 'drMCR';
		drLCM = 'drLCM';
		
		switch (setDr[idxDr]) {
		case 'LCR' :	typeDr = 'LR'; break;
		case 'CLRC' : typeDr = 'LR'; drC1 = 'drLR1'; drC2 = 'drLR2'; drLR1 = 'drC1'; drLR2 = 'drC2'; break;
		case 'ALR' : typeDr = 'I'; drC1 = 'drLR1'; drC2 = 'drLR2'; break;
		case 'AC' : typeDr = 'I'; break;
		case 'MCR' : typeDr = 'I'; drLCM = 'drLR2'; break;
		case 'LCM' : typeDr = 'I'; drMCR = 'drLR2'; break;
		}
		
		if (typeDr == 'LR' && !(($('#'+dFirstId).hasClass('b1000') && $('#'+dLastId).hasClass('b1000'))
				|| ($('#'+dFirstId).hasClass('b1000') && $('#'+dLastId).hasClass('b500'))
				|| ($('#'+dFirstId).hasClass('b900') && $('#'+dLastId).hasClass('b900'))
				|| ($('#'+dFirstId).hasClass('b900') && $('#'+dLastId).hasClass('b450')))) {
			$('#alert').removeClass('hidden');
			$('#alert').addClass('contentsRow');
			$('#alertTxt').html('몸통배치 또는 문짝구성을 변경해주세요.');
			$('#workBar').fadeOut();
			initDoor();
			return;
		}
		if(typeDr == 'LR'&&ipSpace1 < 2000){
			$('#alert').removeClass('hidden');
			$('#alert').addClass('contentsRow');
			$('#alertTxt').html('몸통배치 또는 문짝구성을 변경해주세요.');
			$('#workBar').fadeOut();
			initDoor();
			return;
		}

	}

	setDoor();
	
	if ($('#pillarL').hasClass('hidden')) {
		$('#workBar').fadeOut();
	} else {
		$('#workBar').removeClass('hidden');
		$('#workBar').fadeIn();
	}
}

function setDoor() {
	initDoor();
	
	var chkId = false;
	var dFirstId = firstId;
	var dLastId = lastId;
	var nextId = $('#pillarR').attr('id');
	
	while (true) {
		if ($('#'+dFirstId).hasClass('b260_a') || $('#'+dFirstId).hasClass('b260_b'))
			dFirstId = $('#'+dFirstId).next().attr('id');
		else
			break;
	}
	while (true) {
		if ($('#'+dLastId).hasClass('b260_a') || $('#'+dLastId).hasClass('b260_b'))
			dLastId = $('#'+dLastId).prev().attr('id');
		else
			break;
	}
	
	if (dLastId == null)
		dLastId = dFirstId;
	
	var wt = $('#type').val();
	var wk = $('#kind').val();
	
	if (wt == 'slide') {
		var bcnt = 0;
		while (true) {
			nextId = $('#'+nextId).next().attr('id');
			bcnt++;
			
			if ($('#'+nextId).next().attr('id') == null)
				break;
		}
		
		if (bcnt == 1) {
			if ($('#'+dFirstId).hasClass('b1140'))
				$('#'+dFirstId+'_r').attr('class', 'dr1140');
			else if ($('#'+dFirstId).hasClass('b978'));
				$('#'+dFirstId+'_r').attr('class', 'dr978');
		} else if (bcnt == 2) {
			if ($('#'+dFirstId).hasClass('b1140')) {
				if (sd_door_lr == 'l') {
					$('#'+dFirstId+'_r').addClass('d1140L');
					$('#'+dLastId+'_r').addClass('d1140C');
				} else {
					$('#'+dFirstId+'_r').addClass('d1140C');
					$('#'+dLastId+'_r').addClass('d1140R');
				}
			} else if ($('#'+dFirstId).hasClass('b978')) {
				if (sd_door_lr == 'l') {
					$('#'+dFirstId+'_r').addClass('d978L');
					$('#'+dLastId+'_r').addClass('d978C');
				} else {
					$('#'+dFirstId+'_r').addClass('d978C');
					$('#'+dLastId+'_r').addClass('d978R');
				}
			}
		} else {
			if ($('#'+dFirstId).hasClass('b1140')) {
				$('.dr1140').addClass('d1140C');
				$('#'+dFirstId+'_r').attr('class', 'dr1140 d1140L');
				$('#'+dLastId+'_r').attr('class', 'dr1140 d1140R');
			} else {
				$('.dr978').addClass('d978C');
				$('#'+dFirstId+'_r').attr('class', 'dr978 d978L');
				$('#'+dLastId+'_r').attr('class', 'dr978 d978R');
			}
		}
		
		togDoor();
		
		$('.d1140L').css('background', 'url(\'/images/wardrobe/slide/' + wk + '/dr1140_l.jpg\')');
		$('.d1140C').css('background', 'url(\'/images/wardrobe/slide/' + wk + '/dr1140_c.jpg\')');
		$('.d1140R').css('background', 'url(\'/images/wardrobe/slide/' + wk + '/dr1140_r.jpg\')');
		$('.d978L').css('background', 'url(\'/images/wardrobe/slide/' + wk + '/dr978_l.jpg\')');
		$('.d978C').css('background', 'url(\'/images/wardrobe/slide/' + wk + '/dr978_c.jpg\')');
		$('.d978R').css('background', 'url(\'/images/wardrobe/slide/' + wk + '/dr978_r.jpg\')');
	} else if (wt == 'builtin') {
		chkId = false;
		while (!chkId) {
			nextId = $('#'+nextId).next().attr('id');
			
			if ($('#'+nextId).hasClass('b1000')) {
				$('#'+nextId+'_r1').attr('class', 'dr1000 ' + drC2 + ' d500L');
				$('#'+nextId+'_r2').attr('class', 'dr1000 ' + drC2 + ' d500R');
			} else if ($('#'+nextId).hasClass('b900')) {
				$('#'+nextId+'_r1').attr('class', 'dr900 ' + drC2 + ' d450L');
				$('#'+nextId+'_r2').attr('class', 'dr900 ' + drC2 + ' d450R');
			} else if ($('#'+nextId).hasClass('b500')) {
				$('#'+nextId+'_r').attr('class', 'dr500 ' + drC1);
			} else if ($('#'+nextId).hasClass('b450')) {
				$('#'+nextId+'_r').attr('class', 'dr450 ' + drC1);
			}
			
			if ($('#'+nextId).next().attr('id') == null)
				chkId = true;
		}
		
		if (setDr[idxDr] == 'LCR' || setDr[idxDr] == 'CLRC') {
			if ($('#'+dFirstId).hasClass('b1000') && $('#'+dLastId).hasClass('b1000')) {
				$('#'+dFirstId+'_r1').attr('class', 'dr1000 ' + drLR2 + ' d500L');
				$('#'+dLastId+'_r2').attr('class', 'dr1000 ' + drLR2 + ' d500R');
			} else if ($('#'+dFirstId).hasClass('b1000') && $('#'+dLastId).hasClass('b500')) {
				$('#'+dFirstId+'_r1').attr('class', 'dr1000 ' + drLR2 + ' d500L');
				$('#'+dFirstId+'_r2').attr('class', 'dr1000 ' + drC1);
				$('#'+dLastId+'_r').attr('class', 'dr500 ' + drLR2 + ' d500R');
			} else if ($('#'+dFirstId).hasClass('b500') && $('#'+dLastId).hasClass('b1000')) {
				$('#'+dFirstId+'_r').attr('class', 'dr500 ' + drLR2 + ' d500L');
				$('#'+dLastId+'_r1').attr('class', 'dr1000 ' + drC1);
				$('#'+dLastId+'_r2').attr('class', 'dr1000 ' + drLR2 + ' d500R');
			} else if ($('#'+dFirstId).hasClass('b500') && $('#'+dLastId).hasClass('b500') && dFirstId != dLastId) {
				$('#'+dFirstId+'_r').attr('class', 'dr500 ' + drLR2 + ' d500L');
				$('#'+dLastId+'_r').attr('class', 'dr500 ' + drLR2 + ' d500R');
			} else if ($('#'+dFirstId).hasClass('b900') && $('#'+dLastId).hasClass('b900')) {
				$('#'+dFirstId+'_r1').attr('class', 'dr900 ' + drLR2 + ' d450L');
				$('#'+dLastId+'_r2').attr('class', 'dr900 ' + drLR2 + ' d450R');
			} else if ($('#'+dFirstId).hasClass('b900') && $('#'+dLastId).hasClass('b450')) {
				$('#'+dFirstId+'_r1').attr('class', 'dr900 ' + drLR2 + ' d450L');
				$('#'+dFirstId+'_r2').attr('class', 'dr900 ' + drC1);
				$('#'+dLastId+'_r').attr('class', 'dr450 ' + drLR2 + ' d450R');
			} else if ($('#'+dFirstId).hasClass('b450') && $('#'+dLastId).hasClass('b900')) {
				$('#'+dFirstId+'_r').attr('class', 'dr450 ' + drLR2 + ' d450L');
				$('#'+dLastId+'_r1').attr('class', 'dr900 ' + drC1);
				$('#'+dLastId+'_r2').attr('class', 'dr900 ' + drLR2 + ' d450R');
			} else if ($('#'+dFirstId).hasClass('b450') && $('#'+dLastId).hasClass('b450') && dFirstId != dLastId) {
				$('#'+dFirstId+'_r').attr('class', 'dr450 ' + drLR2 + ' d450L');
				$('#'+dLastId+'_r').attr('class', 'dr450 ' + drLR2 + ' d450R');
			}
		} else if (setDr[idxDr] == 'MCR' || setDr[idxDr] == 'LCM') {
			if ($('#'+dFirstId).hasClass('b1000')) {
				$('#'+dFirstId+'_r1').attr('class', 'dr1000 ' + drMCR + ' d500L');
				$('#'+dFirstId+'_r2').attr('class', 'dr1000 ' + drMCR + ' d500R');
			} else if ($('#'+dFirstId).hasClass('b900')) {
				$('#'+dFirstId+'_r1').attr('class', 'dr900 ' + drMCR + ' d450L');
				$('#'+dFirstId+'_r2').attr('class', 'dr900 ' + drMCR + ' d450R');
			} else if ($('#'+dFirstId).hasClass('b500')) {
				$('#'+dFirstId+'_r').attr('class', 'dr500 ' + drMCR + ' d500R');
			} else if ($('#'+dFirstId).hasClass('b450')) {
				$('#'+dFirstId+'_r').attr('class', 'dr450 ' + drMCR + ' d450R');
			}
			if ($('#'+dLastId).hasClass('b1000')) {
				$('#'+dLastId+'_r1').attr('class', 'dr1000 ' + drLCM + ' d500L');
				$('#'+dLastId+'_r2').attr('class', 'dr1000 ' + drLCM + ' d500R');
			} else if ($('#'+dLastId).hasClass('b900')) {
				$('#'+dLastId+'_r1').attr('class', 'dr900 ' + drLCM + ' d450L');
				$('#'+dLastId+'_r2').attr('class', 'dr900 ' + drLCM + ' d450R');
			} else if ($('#'+dLastId).hasClass('b500')) {
				$('#'+dLastId+'_r').attr('class', 'dr500 ' + drLCM + ' d500R');
			} else if ($('#'+dLastId).hasClass('b450')) {
				$('#'+dLastId+'_r').attr('class', 'dr450 ' + drLCM + ' d450R');
			}
		}
		
		togDoor();
		
		$('.drLR2.d500L').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drLR_L.jpg\')');
		$('.drLR2.d450L').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drLR_L.jpg\')');
		$('.drLR1').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drLR_R.jpg\')');
		$('.drLR2.d500R').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drLR_R.jpg\')');
		$('.drLR2.d450R').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drLR_R.jpg\')');
		$('.drC2.d500L').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drC_L.jpg\')');
		$('.drC2.d450L').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drC_L.jpg\')');
		$('.drC1').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drC_R.jpg\')');
		$('.drC2.d500R').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drC_R.jpg\')');
		$('.drC2.d450R').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drC_R.jpg\')');
		$('.drMCR.d500L').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drMCR_L.jpg\')');
		$('.drMCR.d500R').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drMCR_R.jpg\')')
		$('.drMCR.d450L').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drMCR_L.jpg\')');
		$('.drMCR.d450R').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drMCR_R.jpg\')');
		$('.drLCM.d500L').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drLCM_L.jpg\')');
		$('.drLCM.d500R').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drLCM_R.jpg\')')
		$('.drLCM.d450L').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drLCM_L.jpg\')');
		$('.drLCM.d450R').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drLCM_R.jpg\')');
	} else if (wt == 'builtinCombi') {
		chkId = false;
		while (!chkId) {
			nextId = $('#'+nextId).next().attr('id');
			
			if ($('#'+nextId).hasClass('b1000')) {
				$('#'+nextId+'_r1').attr('class', 'dr1000 ' + drC2 + ' d500L');
				$('#'+nextId+'_r2').attr('class', 'dr1000 ' + drC2 + ' d500R');
			} else if ($('#'+nextId).hasClass('b900')) {
				$('#'+nextId+'_r1').attr('class', 'dr900 ' + drC2 + ' d450L');
				$('#'+nextId+'_r2').attr('class', 'dr900 ' + drC2 + ' d450R');
			} else if ($('#'+nextId).hasClass('b500')) {
				$('#'+nextId+'_r').attr('class', 'dr500 ' + drC1);
			} else if ($('#'+nextId).hasClass('b450')) {
				$('#'+nextId+'_r').attr('class', 'dr450 ' + drC1);
			}
			
			if ($('#'+nextId).next().attr('id') == null)
				chkId = true;
		}
		
		if (setDr[idxDr] == 'LCR' || setDr[idxDr] == 'CLRC') {
			if ($('#'+dFirstId).hasClass('b1000') && $('#'+dLastId).hasClass('b1000')) {
				$('#'+dFirstId+'_r1').attr('class', 'dr1000 ' + drLR2 + ' d500L');
				$('#'+dLastId+'_r2').attr('class', 'dr1000 ' + drLR2 + ' d500R');
			} else if ($('#'+dFirstId).hasClass('b1000') && $('#'+dLastId).hasClass('b500')) {
				$('#'+dFirstId+'_r1').attr('class', 'dr1000 ' + drLR2 + ' d500L');
				$('#'+dFirstId+'_r2').attr('class', 'dr1000 ' + drC1);
				$('#'+dLastId+'_r').attr('class', 'dr500 ' + drLR2 + ' d500R');
			} else if ($('#'+dFirstId).hasClass('b500') && $('#'+dLastId).hasClass('b1000')) {
				$('#'+dFirstId+'_r').attr('class', 'dr500 ' + drLR2 + ' d500L');
				$('#'+dLastId+'_r1').attr('class', 'dr1000 ' + drC1);
				$('#'+dLastId+'_r2').attr('class', 'dr1000 ' + drLR2 + ' d500R');
			} else if ($('#'+dFirstId).hasClass('b500') && $('#'+dLastId).hasClass('b500') && dFirstId != dLastId) {
				$('#'+dFirstId+'_r').attr('class', 'dr500 ' + drLR2 + ' d500L');
				$('#'+dLastId+'_r').attr('class', 'dr500 ' + drLR2 + ' d500R');
			} else if ($('#'+dFirstId).hasClass('b900') && $('#'+dLastId).hasClass('b900')) {
				$('#'+dFirstId+'_r1').attr('class', 'dr900 ' + drLR2 + ' d450L');
				$('#'+dLastId+'_r2').attr('class', 'dr900 ' + drLR2 + ' d450R');
			} else if ($('#'+dFirstId).hasClass('b900') && $('#'+dLastId).hasClass('b450')) {
				$('#'+dFirstId+'_r1').attr('class', 'dr900 ' + drLR2 + ' d450L');
				$('#'+dFirstId+'_r2').attr('class', 'dr900 ' + drC1);
				$('#'+dLastId+'_r').attr('class', 'dr450 ' + drLR2 + ' d450R');
			} else if ($('#'+dFirstId).hasClass('b450') && $('#'+dLastId).hasClass('b900')) {
				$('#'+dFirstId+'_r').attr('class', 'dr450 ' + drLR2 + ' d450L');
				$('#'+dLastId+'_r1').attr('class', 'dr900 ' + drC1);
				$('#'+dLastId+'_r2').attr('class', 'dr900 ' + drLR2 + ' d450R');
			} else if ($('#'+dFirstId).hasClass('b450') && $('#'+dLastId).hasClass('b450') && dFirstId != dLastId) {
				$('#'+dFirstId+'_r').attr('class', 'dr450 ' + drLR2 + ' d450L');
				$('#'+dLastId+'_r').attr('class', 'dr450 ' + drLR2 + ' d450R');
			}
		} else if (setDr[idxDr] == 'MCR' || setDr[idxDr] == 'LCM') {
			if ($('#'+dFirstId).hasClass('b1000')) {
				$('#'+dFirstId+'_r1').attr('class', 'dr1000 ' + drMCR + ' d500L');
				$('#'+dFirstId+'_r2').attr('class', 'dr1000 ' + drMCR + ' d500R');
			} else if ($('#'+dFirstId).hasClass('b900')) {
				$('#'+dFirstId+'_r1').attr('class', 'dr900 ' + drMCR + ' d450L');
				$('#'+dFirstId+'_r2').attr('class', 'dr900 ' + drMCR + ' d450R');
			} else if ($('#'+dFirstId).hasClass('b500')) {
				$('#'+dFirstId+'_r').attr('class', 'dr500 ' + drMCR + ' d500R');
			} else if ($('#'+dFirstId).hasClass('b450')) {
				$('#'+dFirstId+'_r').attr('class', 'dr450 ' + drMCR + ' d450R');
			}
			if ($('#'+dLastId).hasClass('b1000')) {
				$('#'+dLastId+'_r1').attr('class', 'dr1000 ' + drLCM + ' d500L');
				$('#'+dLastId+'_r2').attr('class', 'dr1000 ' + drLCM + ' d500R');
			} else if ($('#'+dLastId).hasClass('b900')) {
				$('#'+dLastId+'_r1').attr('class', 'dr900 ' + drLCM + ' d450L');
				$('#'+dLastId+'_r2').attr('class', 'dr900 ' + drLCM + ' d450R');
			} else if ($('#'+dLastId).hasClass('b500')) {
				$('#'+dLastId+'_r').attr('class', 'dr500 ' + drLCM + ' d500R');
			} else if ($('#'+dLastId).hasClass('b450')) {
				$('#'+dLastId+'_r').attr('class', 'dr450 ' + drLCM + ' d450R');
			}
		}
		
		togDoor();
		
		$('.drLR2.d500L').css('background-image', 'url(\'/images/wardrobe/builtinCombi/' + wk + '/drLR_L.jpg\')');
		$('.drLR2.d450L').css('background-image', 'url(\'/images/wardrobe/builtinCombi/' + wk + '/drLR_L.jpg\')');
		$('.drLR1').css('background-image', 'url(\'/images/wardrobe/builtinCombi/' + wk + '/drLR_R.jpg\')');
		$('.drLR2.d500R').css('background-image', 'url(\'/images/wardrobe/builtinCombi/' + wk + '/drLR_R.jpg\')');
		$('.drLR2.d450R').css('background-image', 'url(\'/images/wardrobe/builtinCombi/' + wk + '/drLR_R.jpg\')');
		$('.drC2.d500L').css('background-image', 'url(\'/images/wardrobe/builtinCombi/' + wk + '/drC_L.jpg\')');
		$('.drC2.d450L').css('background-image', 'url(\'/images/wardrobe/builtinCombi/' + wk + '/drC_L.jpg\')');
		$('.drC1').css('background-image', 'url(\'/images/wardrobe/builtinCombi/' + wk + '/drC_R.jpg\')');
		$('.drC2.d500R').css('background-image', 'url(\'/images/wardrobe/builtinCombi/' + wk + '/drC_R.jpg\')');
		$('.drC2.d450R').css('background-image', 'url(\'/images/wardrobe/builtinCombi/' + wk + '/drC_R.jpg\')');
		$('.drMCR.d500L').css('background-image', 'url(\'/images/wardrobe/builtinCombi/' + wk + '/drMCR_L.jpg\')');
		$('.drMCR.d500R').css('background-image', 'url(\'/images/wardrobe/builtinCombi/' + wk + '/drMCR_R.jpg\')')
		$('.drMCR.d450L').css('background-image', 'url(\'/images/wardrobe/builtinCombi/' + wk + '/drMCR_L.jpg\')');
		$('.drMCR.d450R').css('background-image', 'url(\'/images/wardrobe/builtinCombi/' + wk + '/drMCR_R.jpg\')');
		$('.drLCM.d500L').css('background-image', 'url(\'/images/wardrobe/builtinCombi/' + wk + '/drLCM_L.jpg\')');
		$('.drLCM.d500R').css('background-image', 'url(\'/images/wardrobe/builtinCombi/' + wk + '/drLCM_R.jpg\')')
		$('.drLCM.d450L').css('background-image', 'url(\'/images/wardrobe/builtinCombi/' + wk + '/drLCM_L.jpg\')');
		$('.drLCM.d450R').css('background-image', 'url(\'/images/wardrobe/builtinCombi/' + wk + '/drLCM_R.jpg\')');
	}
}

var showDr = false;
function clickTogDoor() {
	showDr = !showDr;
	togDoor();
}

function togDoor() {
	var chkId = false;
	var nextId = $('#pillarR').attr('id');
	
	

	
	if (showDr) {
		$('#btnTogDoor').html('문짝숨김');
		$('#btnTogDoor_slide').html('문짝숨김');
	} else {
		$('#btnTogDoor').html('문짝표시');
		$('#btnTogDoor_slide').html('문짝표시');
	}
	
	while (!chkId) {
		nextId = $('#'+nextId).next().attr('id');
		
		var wk = $('#kind').val();
		var n1, n2;
		if ($('#'+nextId).hasClass('b1000')) {
			n1 = 1000; n2 = 500;
		} else {
			n1 = 900; n2 = 450;
		}
		
		var nn;
		if ($('#'+nextId).hasClass('b500')) {
			nn = 500;
		} else {
			nn = 450;
		}
		if (!showDr) {
			if ($('#'+nextId).hasClass('b1140') || $('#'+nextId).hasClass('b978')) {
				$('#'+nextId+'_r').addClass('hidden');
				
			} else if ($('#'+nextId).hasClass('b1000') || $('#'+nextId).hasClass('b900')) {			
				$('#'+nextId+'_r1').addClass('hidden');
				$('#'+nextId+'_r2').addClass('hidden');
			} else if ($('#'+nextId).hasClass('b500') || $('#'+nextId).hasClass('b450')) {
				$('#'+nextId+'_r').addClass('hidden');
			}
		} else {
			
			if ($('#'+nextId).hasClass('b1140') || $('#'+nextId).hasClass('b978')) {
				$('#'+nextId+'_r').removeClass('hidden');
				
			} else if ($('#'+nextId).hasClass('b1000') || $('#'+nextId).hasClass('b900')) {
				
				if($('#'+nextId+' .k'+n1).html().substring(0, 4)=='옷(서)'||$('#'+nextId+' .k'+n1).html().substring(0, 4)=='이(서)'||$('#'+nextId+' .k'+n1).html().substring(0, 4)=='칸(서)'){
					if($('#kind').val() == 'bi_a011'||$('#kind').val() == 'bi_a016'){
					$('#'+nextId+'_r1').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drLR_La.jpg\')');
					$('#'+nextId+'_r2').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drLR_Ra.jpg\')');
					}
					if($('#kind').val() == 'bi_a012'){
					$('#'+nextId+'_r1').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drC_La.jpg\')');
					$('#'+nextId+'_r2').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drC_Ra.jpg\')');					
					}
					if ($('#kind').val() == 'bi_a018') {
						$('#'+nextId+'_r1').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drLR_La.jpg\')');
						$('#'+nextId+'_r2').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drLR_Ra.jpg\')');
					}
					if ($('#kind').val() == 'bi_a019') {
						$('#'+nextId+'_r1').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drLR_La.jpg\')');
						$('#'+nextId+'_r2').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drLR_Ra.jpg\')');
					}
			}else{
					if($('#kind').val() == 'bi_a011'||$('#kind').val() == 'bi_a016'){
					$('#'+nextId+'_r1').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drLR_L.jpg\')');
					$('#'+nextId+'_r2').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drLR_R.jpg\')');
					}
					if ($('#kind').val() == 'bi_a018') {
						$('#'+nextId+'_r1').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drLR_L.jpg\')');
						$('#'+nextId+'_r2').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drLR_R.jpg\')');
					}
					if ($('#kind').val() == 'bi_a019') {
						$('#'+nextId+'_r1').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drLR_L.jpg\')');
						$('#'+nextId+'_r2').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drLR_R.jpg\')');
					}
			}
				$('#'+nextId+'_r1').removeClass('hidden');
				$('#'+nextId+'_r2').removeClass('hidden');
			} else if ($('#'+nextId).hasClass('b500') || $('#'+nextId).hasClass('b450')) {
				
				if($('#'+nextId+' .k'+nn).html().substring(0, 4)=='반(서)'){
					if($('#kind').val() == 'bi_a011'||$('#kind').val() == 'bi_a016'){
					$('#'+nextId+'_r').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drLR_Ra.jpg\')');
					}
					if($('#kind').val() == 'bi_a018') {
						$('#'+nextId+'_r').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drLR_Ra.jpg\')');
					}
					if($('#kind').val() == 'bi_a019') {
						$('#'+nextId+'_r').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drLR_Ra.jpg\')');
					}
					if($('#kind').val() == 'bi_a012'){
					$('#'+nextId+'_r').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drC_Ra.jpg\')');
					}
				}else{
					if($('#kind').val() == 'bi_a011'||$('#kind').val() == 'bi_a016'){
						$('#'+nextId+'_r').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drLR_R.jpg\')');
						}
					if($('#kind').val() == 'bi_a018') {
						$('#'+nextId+'_r').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drLR_R.jpg\')');
					}
					if($('#kind').val() == 'bi_a019') {
						$('#'+nextId+'_r').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/drLR_R.jpg\')');
					}
				}
				
				$('#'+nextId+'_r').removeClass('hidden');
			}
		}
		
		if ($('#'+nextId).next().attr('id') == null)
			chkId = true;
	}
	

}

function setJabara() {
	var nextId = $('#pillarR').attr('id');
	var chkId = false;
	
	var addJabara = '';
	var jcnt = 0;
	var jwidth = 0;
	var jtemp = 0;
	
	if (isBI)
		$('#jabara').html('<div id="jCeil" class="hidden"></div></div><div id="jPillarL"></div><div id="jPillarR"></div>');
	else
		$('#jabara').html('<div id="jCeil" class="hidden"></div><div id="jPillarL_sub" class="hidden"></div><div id="jPillarL"></div><div id="jPillarR_sub" class="hidden"></div><div id="jPillarR"></div>');
	$('#jabara_sub').html('<div id="jabara_sub_cri"></div>');
	
	if ($('#type').val() == 'slide') {
		if ($('#'+nextId).next().attr('id') != null) {
		chkId = false;
		nextId = $('#pillarR').attr('id');
		jcnt = 0;
		while (!chkId) {
			nextId = $('#'+nextId).next().attr('id');
			addJabara = '<div id="jsid' + jcnt + '" class="';
		
			if ($('#'+nextId).hasClass('b1140'))
				addJabara += 'j1140';
			else if ($('#'+nextId).hasClass('b978'))
				addJabara += 'j978';
		
			addJabara += '"></div>';
		
			$('#jabara').append(addJabara);
			jcnt++;
		
			if ($('#'+nextId).next().attr('id') == null)
				chkId = true;
		}
	
		chkId = false;
		nextId = $('#jPillarR').attr('id');
		while (!chkId) {
			nextId = $('#'+nextId).next().attr('id');
		
			if ($('#'+nextId).hasClass('j1140') && $('#'+nextId).next().hasClass('j1140')) {
				$('#'+nextId).next().remove();
				$('#'+nextId).attr('class', 'j1140_2');
			} else if ($('#'+nextId).hasClass('j978') && $('#'+nextId).next().hasClass('j978')) {
				$('#'+nextId).next().remove();
				$('#'+nextId).attr('class', 'j978_2');
			}
		
			if ($('#'+nextId).next().attr('id') == null)
				chkId = true;
		}
		
		var jheight = (ipSpace2 - 2170) * 30 / 230;
		$('#jPillarL').css('height', jheight + 'px');
		$('#jPillarL_sub').css('height', jheight + 'px');
		$('#jPillarR').css('height', jheight + 'px');
		$('#jPillarR_sub').css('height', jheight + 'px');
		$('#jCeil').css('height', (57 - jheight) + 'px');
		$('.j1140').css('height', jheight + 'px');
		$('.j1140_2').css('height', jheight + 'px');
		$('.j978').css('height', jheight + 'px');
		$('.j978_2').css('height', jheight + 'px');
		
		var wk = $('#kind').val();
		$('#jPillarL').css('background-image', 'url(\'/images/wardrobe/slide/' + wk + '/pillar.jpg\')');
		$('#jPillarR').css('background-image', 'url(\'/images/wardrobe/slide/' + wk + '/pillar.jpg\')');
		$('.j1140').css('background-image', 'url(\'/images/wardrobe/slide/' + wk + '/jabara.jpg\')');
		$('.j1140_2').css('background-image', 'url(\'/images/wardrobe/slide/' + wk + '/jabara.jpg\')');
		$('.j978').css('background-image', 'url(\'/images/wardrobe/slide/' + wk + '/jabara.jpg\')');
		$('.j978_2').css('background-image', 'url(\'/images/wardrobe/slide/' + wk + '/jabara.jpg\')');
		}
	} else if ($('#type').val() == 'builtin') {
		if ($('#'+nextId).next().attr('id') != null) {
			while (!chkId) {
				nextId = $('#'+nextId).next().attr('id');
			
				if ($('#'+nextId).hasClass('b1000')) {
					jtemp = jwidth + 1000;
				} else if ($('#'+nextId).hasClass('b900'))
					jtemp = jwidth + 900;
				else if ($('#'+nextId).hasClass('b500'))
					jtemp = jwidth + 500;
				else if ($('#'+nextId).hasClass('b450'))
					jtemp = jwidth + 450;
				else if ($('#'+nextId).hasClass('b260_a') || $('#'+nextId).hasClass('b260_b'))
					jtemp = jwidth + 260;
			
				if (2000 < jtemp) {
					if (1800 < jwidth)
						addJabara = '<div id="jid' + jcnt + '" class="j2000"><div>';
					else if (1500 < jwidth)
						addJabara = '<div id="jid' + jcnt + '" class="j1800"><div>';
					else if (1350 < jwidth)
						addJabara = '<div id="jid' + jcnt + '" class="j1500"><div>';
					else
						addJabara = '<div id="jid' + jcnt + '" class="j1350"><div>';
					
					$('#jabara').append(addJabara);
					$('#jid'+jcnt).css('width', Math.floor(($('#body').width() * 100) * jwidth / ipSpace1) / 100 - 2 + 'px');
					jcnt++;
					jwidth = jtemp - jwidth;
				} else
					jwidth = jtemp;
				
				if ($('#'+nextId).next().attr('id') == null) {
					if (1800 < jwidth)
						addJabara = '<div id="jid' + jcnt + '" class="j2000"><div>';
					else if (1500 < jwidth)
						addJabara = '<div id="jid' + jcnt + '" class="j1800"><div>';
					else if (1350 < jwidth)
						addJabara = '<div id="jid' + jcnt + '" class="j1500"><div>';
					else
						addJabara = '<div id="jid' + jcnt + '" class="j1350"><div>';
					
					$('#jabara').append(addJabara);
					$('#jid'+jcnt).css('width', Math.floor(($('#body').width() * 100) * jwidth / ipSpace1) / 100 - 2 + 'px');
					
					chkId = true;
				}
			}
			
			chkId = false;
			nextId = $('#pillarR').attr('id');
			jcnt = 0;
			while (!chkId) {
				nextId = $('#'+nextId).next().attr('id');
				addJabara = '<div id="jsid' + jcnt + '" class="';
			
				if ($('#'+nextId).hasClass('b1000'))
					addJabara += 'j1000';
				else if ($('#'+nextId).hasClass('b900'))
					addJabara += 'j900';
				else if ($('#'+nextId).hasClass('b500'))
					addJabara += 'j500';
				else if ($('#'+nextId).hasClass('b450'))
					addJabara += 'j450';
				else if ($('#'+nextId).hasClass('b260_a') || $('#'+nextId).hasClass('b260_b'))
					addJabara += 'j260';
			
				addJabara += '"></div>';
			
				$('#jabara_sub').append(addJabara);
				jcnt++;
			
				if ($('#'+nextId).next().attr('id') == null)
					chkId = true;
			}
		
			chkId = false;
			nextId = $('#jabara_sub_cri').attr('id');
			while (!chkId) {
				nextId = $('#'+nextId).next().attr('id');
			
				if ($('#'+nextId).hasClass('j1000') && $('#'+nextId).next().hasClass('j1000')) {
					$('#'+nextId).next().remove();
					$('#'+nextId).attr('class', 'j1000_2');
				} else if ($('#'+nextId).hasClass('j900') && $('#'+nextId).next().hasClass('j900')) {
					$('#'+nextId).next().remove();
					$('#'+nextId).attr('class', 'j900_2');
				}
			
				if ($('#'+nextId).next().attr('id') == null)
					chkId = true;
			}
			
			var jheight = (ipSpace2 - 2170) * 30 / 230;
			$('#jPillarL').css('height', jheight + 'px');
			$('#jPillarL_sub').css('height', jheight + 'px');
			$('#jPillarR').css('height', jheight + 'px');
			$('#jPillarR_sub').css('height', jheight + 'px');
			$('#jCeil').css('height', (57 - jheight) + 'px');
			$('.j2000').css('height', jheight + 'px');
			$('.j1800').css('height', jheight + 'px');
			$('.j1500').css('height', jheight + 'px');
			$('.j1350').css('height', jheight + 'px');
			
			var wk = $('#kind').val();
			$('#jPillarL').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/pillar.jpg\')');
			$('#jPillarR').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/pillar.jpg\')');
			$('.j2000').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/jabara.jpg\')');
			$('.j1800').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/jabara.jpg\')');
			$('.j1500').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/jabara.jpg\')');
			$('.j1350').css('background-image', 'url(\'/images/wardrobe/builtin/' + wk + '/jabara.jpg\')');
		}
	}
}



var dwr = 0;
var dwr_width = 0;
function selectDrWidth(w) {
	dwr = w;
	switch (w) {
	case 1000:
		if ($('#btnW1000').hasClass('disabled')) break;
		$('#btnW1000').addClass('btnWSelect'); $('#btnW900').removeClass('btnWSelect');$('#btnW800').removeClass('btnWSelect'); $('#btnW600').removeClass('btnWSelect');$('#btnW450').removeClass('btnWSelect'); $('#btnW400').removeClass('btnWSelect');$('#btnW290').removeClass('btnWSelect');
		switch ($('#kind').val()) {
		case 'dr_a004':
		$('#btnDK001').removeClass('disabled');
		$('#btnDK002').removeClass('disabled');
		$('#btnDK003').addClass('disabled');
		$('#btnDK004').addClass('disabled');
		$('#btnDK005').addClass('disabled');
		$('#btnDK006').addClass('disabled');
		$('#btnDK007').addClass('disabled');
		$('#btnDK008').addClass('disabled');
		$('#btnDK009').removeClass('disabled');
		$('#btnDK010').removeClass('disabled');
		$('#btnDK011').removeClass('disabled');
		$('#btnDK012').addClass('disabled');
		$('#btnDK013').addClass('disabled');
		$('#btnDK014').removeClass('disabled');
		$('#btnDK015').addClass('disabled');
		$('#btnDK016').addClass('disabled');
		break;
		case 'dr_a005':
			$('#btnDK001').addClass('disabled');
			$('#btnDK002').removeClass('disabled');
			$('#btnDK003').removeClass('disabled');
			$('#btnDK004').addClass('disabled');
			$('#btnDK005').addClass('disabled');
			$('#btnDK006').addClass('disabled');
			$('#btnDK007').removeClass('disabled');
			$('#btnDK008').addClass('disabled');
			$('#btnDK009').addClass('disabled');
			$('#btnDK010').addClass('disabled');
			$('#btnDK011').addClass('disabled');
			$('#btnDK012').addClass('disabled');
			$('#btnDK013').removeClass('disabled');
			$('#btnDK014').removeClass('disabled');
			$('#btnDK015').removeClass('disabled');
			$('#btnDK016').removeClass('disabled');
			break;
		}
		dwr_width = 62;
		break;
	case 900:
		if ($('#btnW900').hasClass('disabled')) break;
		$('#btnW1000').removeClass('btnWSelect');$('#btnW900').addClass('btnWSelect'); $('#btnW800').removeClass('btnWSelect'); $('#btnW600').removeClass('btnWSelect');$('#btnW450').removeClass('btnWSelect'); $('#btnW400').removeClass('btnWSelect');$('#btnW290').removeClass('btnWSelect');
		switch ($('#kind').val()) {
		case 'dr_a001':
			$('#btnDK001').removeClass('disabled');
			$('#btnDK002').addClass('disabled');
			$('#btnDK003').addClass('disabled');
			$('#btnDK004').addClass('disabled');
			$('#btnDK005').addClass('disabled');
			$('#btnDK006').addClass('disabled');
			$('#btnDK007').addClass('disabled');
			$('#btnDK008').addClass('disabled');
			$('#btnDK009').addClass('disabled');
			$('#btnDK010').addClass('disabled');
			$('#btnDK011').addClass('disabled');
			$('#btnDK012').addClass('disabled');
			$('#btnDK013').addClass('disabled');
			$('#btnDK014').addClass('disabled');
			$('#btnDK015').addClass('disabled');
			$('#btnDK016').addClass('disabled');
			break;
		case 'dr_a004':
			$('#btnDK001').removeClass('disabled');
			$('#btnDK002').removeClass('disabled');
			$('#btnDK003').addClass('disabled');
			$('#btnDK004').addClass('disabled');
			$('#btnDK005').addClass('disabled');
			$('#btnDK006').addClass('disabled');
			$('#btnDK007').addClass('disabled');
			$('#btnDK008').removeClass('disabled');
			$('#btnDK009').addClass('disabled');
			$('#btnDK010').addClass('disabled');
			$('#btnDK011').addClass('disabled');
			$('#btnDK012').addClass('disabled');
			$('#btnDK013').addClass('disabled');
			$('#btnDK014').removeClass('disabled');
			$('#btnDK015').addClass('disabled');
			$('#btnDK016').addClass('disabled');
			break;
		}
		dwr_width = 62;
		break;
	case 800:
		if ($('#btnW800').hasClass('disabled')) break;
		$('#btnW1000').removeClass('btnWSelect');$('#btnW900').removeClass('btnWSelect'); $('#btnW800').addClass('btnWSelect'); $('#btnW600').removeClass('btnWSelect');$('#btnW450').removeClass('btnWSelect'); $('#btnW400').removeClass('btnWSelect');$('#btnW290').removeClass('btnWSelect');
		switch ($('#kind').val()) {
		case 'dr_a001':
			$('#btnDK001').addClass('disabled');
			$('#btnDK002').removeClass('disabled');
			$('#btnDK003').removeClass('disabled');
			$('#btnDK004').removeClass('disabled');
			$('#btnDK005').removeClass('disabled');
			$('#btnDK006').removeClass('disabled');
			//$('#btnDK006').addClass('disabled');
			$('#btnDK007').addClass('disabled');
			$('#btnDK008').addClass('disabled');
			$('#btnDK009').addClass('disabled');
			$('#btnDK010').addClass('disabled');
			$('#btnDK011').addClass('disabled');
			$('#btnDK012').addClass('disabled');
			$('#btnDK013').addClass('disabled');
			$('#btnDK014').addClass('disabled');
			$('#btnDK015').addClass('disabled');
			$('#btnDK016').addClass('disabled');
			break;
		case 'dr_a002':
			$('#btnDK001').addClass('disabled');
			$('#btnDK002').removeClass('disabled');
			$('#btnDK003').removeClass('disabled');
			$('#btnDK004').addClass('disabled');
			$('#btnDK005').addClass('disabled');
			$('#btnDK006').addClass('disabled');
			$('#btnDK007').addClass('disabled');
			$('#btnDK007').addClass('disabled');
			$('#btnDK008').addClass('disabled');
			$('#btnDK009').addClass('disabled');
			$('#btnDK010').addClass('disabled');
			$('#btnDK011').addClass('disabled');
			$('#btnDK012').addClass('disabled');
			$('#btnDK013').addClass('disabled');
			$('#btnDK014').addClass('disabled');
			$('#btnDK015').addClass('disabled');
			$('#btnDK016').addClass('disabled');
			break;
		case 'dr_a003':
			$('#btnDK001').addClass('disabled');
			$('#btnDK002').removeClass('disabled');
			$('#btnDK003').removeClass('disabled');
			$('#btnDK004').addClass('disabled');
			$('#btnDK005').addClass('disabled');
			$('#btnDK006').addClass('disabled');
			$('#btnDK007').addClass('disabled');
			$('#btnDK007').addClass('disabled');
			$('#btnDK008').addClass('disabled');
			$('#btnDK009').addClass('disabled');
			$('#btnDK010').addClass('disabled');
			$('#btnDK011').addClass('disabled');
			$('#btnDK012').addClass('disabled');
			$('#btnDK013').addClass('disabled');
			$('#btnDK014').addClass('disabled');
			$('#btnDK015').addClass('disabled');
			$('#btnDK016').addClass('disabled');
			break;
		}
		dwr_width = 40;
		break;
	case 600:
		if ($('#btnW600').hasClass('disabled')) break;
		$('#btnW1000').removeClass('btnWSelect');$('#btnW900').removeClass('btnWSelect'); $('#btnW800').removeClass('btnWSelect'); $('#btnW600').addClass('btnWSelect');$('#btnW450').removeClass('btnWSelect'); $('#btnW400').removeClass('btnWSelect');$('#btnW290').removeClass('btnWSelect');
		switch ($('#kind').val()) {
		case 'dr_a001':
			$('#btnDK001').addClass('disabled');
			$('#btnDK002').removeClass('disabled');
			$('#btnDK003').removeClass('disabled');
			$('#btnDK004').addClass('disabled');
			$('#btnDK005').addClass('disabled');
			$('#btnDK006').addClass('disabled');
			$('#btnDK007').addClass('disabled');
			$('#btnDK008').addClass('disabled');
			$('#btnDK009').addClass('disabled');
			$('#btnDK010').addClass('disabled');
			$('#btnDK011').addClass('disabled');
			$('#btnDK012').addClass('disabled');
			$('#btnDK013').addClass('disabled');
			$('#btnDK014').addClass('disabled');
			$('#btnDK015').addClass('disabled');
			$('#btnDK016').addClass('disabled');
			break;
		case 'dr_a002':
			$('#btnDK001').addClass('disabled');
			$('#btnDK002').removeClass('disabled');
			$('#btnDK003').removeClass('disabled');
			$('#btnDK004').addClass('disabled');
			$('#btnDK005').addClass('disabled');
			$('#btnDK006').addClass('disabled');
			$('#btnDK007').addClass('disabled');
			$('#btnDK008').addClass('disabled');
			$('#btnDK009').addClass('disabled');
			$('#btnDK010').addClass('disabled');
			$('#btnDK011').addClass('disabled');
			$('#btnDK012').addClass('disabled');
			$('#btnDK013').addClass('disabled');
			$('#btnDK014').addClass('disabled');
			$('#btnDK015').addClass('disabled');
			$('#btnDK016').addClass('disabled');
			break;
		case 'dr_a003':
			$('#btnDK001').addClass('disabled');
			$('#btnDK002').removeClass('disabled');
			$('#btnDK003').removeClass('disabled');
			$('#btnDK004').addClass('disabled');
			$('#btnDK005').addClass('disabled');
			$('#btnDK006').addClass('disabled');
			$('#btnDK007').addClass('disabled');
			$('#btnDK008').addClass('disabled');
			$('#btnDK009').addClass('disabled');
			$('#btnDK010').addClass('disabled');
			$('#btnDK011').addClass('disabled');
			$('#btnDK012').addClass('disabled');
			$('#btnDK013').addClass('disabled');
			$('#btnDK014').addClass('disabled');
			$('#btnDK015').addClass('disabled');
			$('#btnDK016').addClass('disabled');
			break;
		case 'dr_a004':
			$('#btnDK001').addClass('disabled');
			$('#btnDK002').addClass('disabled');
			$('#btnDK003').addClass('disabled');
			$('#btnDK004').addClass('disabled');
			$('#btnDK005').addClass('disabled');
			$('#btnDK006').addClass('disabled');
			$('#btnDK007').addClass('disabled');
			$('#btnDK008').addClass('disabled');
			$('#btnDK009').addClass('disabled');
			$('#btnDK010').addClass('disabled');
			$('#btnDK011').removeClass('disabled');
			$('#btnDK012').addClass('disabled');
			$('#btnDK013').addClass('disabled');
			$('#btnDK014').addClass('disabled');
			$('#btnDK015').addClass('disabled');
			$('#btnDK016').addClass('disabled');
			break;
		}
		dwr_width = 40;
		break;
	case 450:
		if ($('#btnW450').hasClass('disabled')) break;
		$('#btnW1000').removeClass('btnWSelect');$('#btnW900').removeClass('btnWSelect'); $('#btnW800').removeClass('btnWSelect'); $('#btnW600').removeClass('btnWSelect');$('#btnW450').addClass('btnWSelect'); $('#btnW400').removeClass('btnWSelect');$('#btnW290').removeClass('btnWSelect');
			$('#btnDK001').addClass('disabled');
			$('#btnDK002').addClass('disabled');
			$('#btnDK003').addClass('disabled');
			$('#btnDK004').addClass('disabled');
			$('#btnDK005').addClass('disabled');
			$('#btnDK006').addClass('disabled');
			$('#btnDK007').addClass('disabled');
			$('#btnDK008').addClass('disabled');
			$('#btnDK009').addClass('disabled');
			$('#btnDK010').addClass('disabled');
			$('#btnDK011').addClass('disabled');
			$('#btnDK012').removeClass('disabled');
			$('#btnDK012').html('반장');
			$('#btnDK013').addClass('disabled');
			$('#btnDK014').addClass('disabled');
			$('#btnDK015').addClass('disabled');
			$('#btnDK016').addClass('disabled');
			dwr_width = 40;
			break;
	case 400:
		if ($('#btnW400').hasClass('disabled')) break;
		$('#btnW1000').removeClass('btnWSelect');$('#btnW900').removeClass('btnWSelect'); $('#btnW800').removeClass('btnWSelect'); $('#btnW600').removeClass('btnWSelect');$('#btnW450').removeClass('btnWSelect'); $('#btnW400').addClass('btnWSelect');$('#btnW290').removeClass('btnWSelect');
		switch ($('#kind').val()) {
		case 'dr_a001':
			$('#btnDK001').addClass('disabled');
			$('#btnDK002').addClass('disabled');
			$('#btnDK003').removeClass('disabled');
			$('#btnDK004').addClass('disabled');
			$('#btnDK005').addClass('disabled');
			$('#btnDK006').addClass('disabled');
			$('#btnDK007').removeClass('disabled');
			$('#btnDK008').addClass('disabled');
			$('#btnDK009').addClass('disabled');
			$('#btnDK010').addClass('disabled');
			$('#btnDK011').addClass('disabled');
			$('#btnDK012').addClass('disabled');
			$('#btnDK013').addClass('disabled');
			$('#btnDK014').addClass('disabled');
			$('#btnDK015').addClass('disabled');
			$('#btnDK016').addClass('disabled');
			break;
		case 'dr_a002':
			$('#btnDK001').addClass('disabled');
			$('#btnDK002').addClass('disabled');
			$('#btnDK003').addClass('disabled');
			$('#btnDK004').addClass('disabled');
			$('#btnDK005').addClass('disabled');
			$('#btnDK006').addClass('disabled');
			$('#btnDK007').removeClass('disabled');
			$('#btnDK008').addClass('disabled');
			$('#btnDK009').addClass('disabled');
			$('#btnDK010').addClass('disabled');
			$('#btnDK011').addClass('disabled');
			$('#btnDK012').addClass('disabled');
			$('#btnDK013').addClass('disabled');
			$('#btnDK014').addClass('disabled');
			$('#btnDK015').addClass('disabled');
			$('#btnDK016').addClass('disabled');
			break;
		case 'dr_a003':
			$('#btnDK001').addClass('disabled');
			$('#btnDK002').addClass('disabled');
			$('#btnDK003').addClass('disabled');
			$('#btnDK004').addClass('disabled');
			$('#btnDK005').addClass('disabled');
			$('#btnDK006').addClass('disabled');
			$('#btnDK007').removeClass('disabled');
			$('#btnDK008').addClass('disabled');
			$('#btnDK009').addClass('disabled');
			$('#btnDK010').addClass('disabled');
			$('#btnDK011').addClass('disabled');
			$('#btnDK012').addClass('disabled');
			$('#btnDK013').addClass('disabled');
			$('#btnDK014').addClass('disabled');
			$('#btnDK015').addClass('disabled');
			$('#btnDK016').addClass('disabled');
			break;
		}
		dwr_width = 40;
		break;
	case 290:
		if ($('#btnW290').hasClass('disabled')) break;
		$('#btnW1000').removeClass('btnWSelect');$('#btnW900').removeClass('btnWSelect'); $('#btnW800').removeClass('btnWSelect'); $('#btnW600').removeClass('btnWSelect');$('#btnW450').removeClass('btnWSelect'); $('#btnW400').removeClass('btnWSelect');$('#btnW290').addClass('btnWSelect');
			$('#btnDK001').addClass('disabled');
			$('#btnDK002').addClass('disabled');
			$('#btnDK003').addClass('disabled');
			$('#btnDK004').addClass('disabled');
			$('#btnDK005').addClass('disabled');
			$('#btnDK006').addClass('disabled');
			$('#btnDK007').addClass('disabled');
			$('#btnDK008').addClass('disabled');
			$('#btnDK009').addClass('disabled');
			$('#btnDK010').addClass('disabled');
			$('#btnDK011').addClass('disabled');
			$('#btnDK012').removeClass('disabled');
			$('#btnDK012').html('코너장');
			$('#btnDK013').addClass('disabled');
			$('#btnDK014').addClass('disabled');
			$('#btnDK015').addClass('disabled');
			$('#btnDK016').addClass('disabled');
			dwr_width = 40;
			break;
		}
}

var direction = '';
function showArea(e, darea) {
	if (darea != 'area' && !$('#'+darea).hasClass('above_area')) return;
	
	direction = darea;
	showChk = true;
	
	$('#show_bl_sub').addClass('hidden');
	$('#show_bf_sub').addClass('hidden');
	$('#show_ba_sub').addClass('hidden');
	$('#show_bb_sub').addClass('hidden');
	$('#show_br_sub').addClass('hidden');
	
	$('#body_forward').addClass('hidden');
	$('#body_left').addClass('hidden');
	$('#body_right').addClass('hidden');
	$('#body_backward').addClass('hidden');
	$('#body_above').addClass('hidden');
	
	$('#cri_l').removeClass('hidden');
	$('#cri_r').removeClass('hidden');
	
	switch (darea) {
	case 'darea1':
		$('#show_bf_sub').removeClass('hidden');
		$('#body_forward').removeClass('hidden');
		
		if (bf_cri == 'left') {
			$('#cri_l').addClass('choiceBtn');
			$('#cri_r').removeClass('choiceBtn');
		} else if (bf_cri == 'right') {
			$('#cri_l').removeClass('choiceBtn');
			$('#cri_r').addClass('choiceBtn');
		}
		break;
	case 'darea2':
		$('#show_bl_sub').removeClass('hidden');
		$('#body_left').removeClass('hidden');
		
		if (bl_cri == 'left') {
			$('#cri_l').addClass('choiceBtn');
			$('#cri_r').removeClass('choiceBtn');
		} else if (bl_cri == 'right') {
			$('#cri_l').removeClass('choiceBtn');
			$('#cri_r').addClass('choiceBtn');
		}
		break;
	case 'darea3':
		$('#show_br_sub').removeClass('hidden');
		$('#body_right').removeClass('hidden');
		
		if (br_cri == 'left') {
			$('#cri_l').addClass('choiceBtn');
			$('#cri_r').removeClass('choiceBtn');
		} else if (br_cri == 'right') {
			$('#cri_l').removeClass('choiceBtn');
			$('#cri_r').addClass('choiceBtn');
		}
		break;
	case 'darea4':
		$('#show_bb_sub').removeClass('hidden');
		$('#body_backward').removeClass('hidden');
		
		if (bb_cri == 'left') {
			$('#cri_l').addClass('choiceBtn');
			$('#cri_r').removeClass('choiceBtn');
		} else if (bb_cri == 'right') {
			$('#cri_l').removeClass('choiceBtn');
			$('#cri_r').addClass('choiceBtn');
		}
		break;
	default:
		$('#show_ba_sub').removeClass('hidden');
		$('#body_forward').addClass('hidden');
		$('#body_left').addClass('hidden');
		$('#body_right').addClass('hidden');
		$('#body_above').removeClass('hidden');
		$('#cri_l').addClass('hidden');
		$('#cri_r').addClass('hidden');
		$('#area_nm').html('윗면');
		break;
	}
	
	e.stopPropagation();
}

var isDrF = false, isDrL = false, isDrR = false, isDrB = false;
function addDoor(n) {
	switch (n) {
	case 1:
		if (!isDrF) {
			if (bf_sum != 0 || $('#dcorner1').hasClass('on_corner') || $('#dcorner2').hasClass('on_corner')) {
				alert('장롱을 놓은 벽에는 문을 놓을 수 없습니다.');
				return;
			}
			isDrF = true;
			$('#dline1').html('문');
			$('#dline1').css('border-bottom', '1px solid red');
			$('#darea1').removeClass('above_area');
			$('#dcorner1').removeClass('above_area');
			$('#dcorner2').removeClass('above_area');
		} else {
			isDrF = false;
			$('#dline1').html('');
			$('#dline1').css('border-bottom', '');
			$('#darea1').addClass('above_area');
			if (!isDrL) $('#dcorner1').addClass('above_area');
			if (!isDrR) $('#dcorner2').addClass('above_area');
		}
		break;
	case 2:
		if (!isDrL) {
			if (bl_sum != 0 || $('#dcorner1').hasClass('on_corner') || $('#dcorner3').hasClass('on_corner')) {
				alert('장롱을 놓은 벽에는 문을 놓을 수 없습니다.');
				return;
			}
			isDrL = true;
			$('#dline2').html('문');
			$('#dline2').css('border-right', '1px solid red');
			$('#darea2').removeClass('above_area');
			$('#dcorner1').removeClass('above_area');
			$('#dcorner3').removeClass('above_area');
		} else {
			isDrL = false;
			$('#dline2').html('');
			$('#dline2').css('border-right', '');
			$('#darea2').addClass('above_area');
			if (!isDrF) $('#dcorner1').addClass('above_area');
			if (!isDrB) $('#dcorner3').addClass('above_area');
		}
		break;
	case 3:
		if (!isDrR) {
			if (br_sum != 0 || $('#dcorner2').hasClass('on_corner') || $('#dcorner4').hasClass('on_corner')) {
				alert('장롱을 놓은 벽에는 문을 놓을 수 없습니다.');
				return;
			}
			isDrR = true;
			$('#dline3').html('문');
			$('#dline3').css('border-left', '1px solid red');
			$('#darea3').removeClass('above_area');
			$('#dcorner2').removeClass('above_area');
			$('#dcorner4').removeClass('above_area');
		} else {
			isDrR = false;
			$('#dline3').html('');
			$('#dline3').css('border-left', '');
			$('#darea3').addClass('above_area');
			if (!isDrF) $('#dcorner2').addClass('above_area');
			if (!isDrB) $('#dcorner4').addClass('above_area');
		}
		break;
	case 4:
		if (!isDrB) {
			if (bb_sum != 0 || $('#dcorner3').hasClass('on_corner') || $('#dcorner4').hasClass('on_corner')) {
				alert('장롱을 놓은 벽에는 문을 놓을 수 없습니다.');
				return;
			}
			isDrB = true;
			$('#dline4').html('문');
			$('#dline4').css('border-top', '1px solid red');
			$('#darea4').removeClass('above_area');
			$('#dcorner3').removeClass('above_area');
			$('#dcorner4').removeClass('above_area');
		} else {
			isDrB = false;
			$('#dline4').html('');
			$('#dline4').css('border-top', '');
			$('#darea4').addClass('above_area');
			if (!isDrL) $('#dcorner3').addClass('above_area');
			if (!isDrR) $('#dcorner4').addClass('above_area');
		}
		break;
	}
}

function setCorner(e, dcorner) {
	var wk = $('#kind').val();
	if(wk!='dr_a005'){
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
			if ($('#ipSpace1').val() / 10 - bf_sum < 80 || $('#ipSpace2').val() / 10 - bl_sum < 80) {
				alert('코너장을 놓기 위한 공간이 부족합니다.');
				return;
			}
			
			$('#dcorner1').css('background-image', 'url(\'/images/wardrobe/dressroom/' + wk + '/ucorner_fl.png\')');
			$('#dcorner1').addClass('on_corner').addClass('dr_bcorner_1');
			
			$('#bf_l').addClass('dr_bcorner_l1');
			$('#bf_l').css('width', '80px');
			$('#bf_l').attr('onclick', 'revisionDr(\'layer2\', \'bf_l\', \'bl_r\', \'dcorner1\', \'corner_1\')');
			$('#bf_l').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_l1.png\')');
			$('#bf_area').css('width', $('#bf_area').width() - 80);
			$('#darea1').css('width', $('#darea1').width() - 80).css('margin-left', 80);
			bf_sum += 80;
			
			$('#bl_r').addClass('dr_bcorner_r1');
			$('#bl_r').css('width', '80px');
			$('#bl_r').attr('onclick', 'revisionDr(\'layer2\', \'bf_l\', \'bl_r\', \'dcorner1\', \'corner_1\')');
			$('#bl_r').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_r1.png\')');
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
		$('#emptySpaceF').html((bfWidth - bf_sum) * 10);
		$('#emptySpaceL').html((blrWidth - bl_sum) * 10);
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
			if ($('#ipSpace1').val() / 10 - bf_sum < 80 || $('#ipSpace2').val() / 10 - br_sum < 80) {
				alert('코너장을 놓기 위한 공간이 부족합니다.');
				return;
			}
			
			$('#dcorner2').css('background-image', 'url(\'/images/wardrobe/dressroom/' + wk + '/ucorner_fr.png\')');
			$('#dcorner2').addClass('on_corner').addClass('dr_bcorner_1');
			
			$('#bf_r').addClass('dr_bcorner_r1');
			$('#bf_r').css('width', '80px');
			$('#bf_r').attr('onclick', 'revisionDr(\'layer2\', \'br_l\', \'bf_r\', \'dcorner2\', \'corner_1\')');
			$('#bf_r').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_r1.png\')');
			$('#bf_area').css('width', $('#bf_area').width() - 80);
			$('#darea1').css('width', $('#darea1').width() - 80);
			$('#darea1').css('margin-right', 80);
			bf_sum += 80;
			
			$('#br_l').addClass('dr_bcorner_l1');
			$('#br_l').css('width', '80px');
			$('#br_l').attr('onclick', 'revisionDr(\'layer2\', \'br_l\', \'bf_r\', \'dcorner2\', \'corner_1\')');
			$('#br_l').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_l1.png\')');
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
		$('#emptySpaceF').html((bfWidth - bf_sum) * 10);
		$('#emptySpaceR').html((blrWidth - br_sum) * 10);
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
			if ($('#ipSpace1').val() / 10 - bb_sum < 80 || $('#ipSpace2').val() / 10 - bl_sum < 80) {
				alert('코너장을 놓기 위한 공간이 부족합니다.');
				return;
			}
			
			$('#dcorner3').css('background-image', 'url(\'/images/wardrobe/dressroom/' + wk + '/ucorner_bl.png\')');
			$('#dcorner3').addClass('on_corner').addClass('dr_bcorner_1');
			
			$('#bb_r').addClass('dr_bcorner_r1');
			$('#bb_r').css('width', '80px');
			$('#bb_r').attr('onclick', 'revisionDr(\'layer2\', \'bl_l\', \'bb_r\', \'dcorner3\', \'corner_1\')');
			$('#bb_r').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_r1.png\')');
			$('#bb_area').css('width', $('#bb_area').width() - 80);
			$('#darea4').css('width', $('#darea4').width() - 80);
			$('#darea4').css('margin-left', 80);
			bb_sum += 80;
			
			$('#bl_l').addClass('dr_bcorner_l1');
			$('#bl_l').css('width', '80px');
			$('#bl_l').attr('onclick', 'revisionDr(\'layer2\', \'bl_l\', \'bb_r\', \'dcorner3\', \'corner_1\')');
			$('#bl_l').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_l1.png\')');
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
		$('#emptySpaceL').html((blrWidth - bl_sum) * 10);
		$('#emptySpaceB').html((bfWidth - bb_sum) * 10);
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
			if ($('#ipSpace1').val() / 10 - bb_sum < 80 || $('#ipSpace2').val() / 10 - br_sum < 80) {
				alert('코너장을 놓기 위한 공간이 부족합니다.');
				return;
			}
			
			$('#dcorner4').css('background-image', 'url(\'/images/wardrobe/dressroom/' + wk + '/ucorner_br.png\')');
			$('#dcorner4').addClass('on_corner').addClass('dr_bcorner_1');
			
			$('#bb_l').addClass('dr_bcorner_l1');
			$('#bb_l').css('width', '80px');
			$('#bb_l').attr('onclick', 'revisionDr(\'layer2\', \'bb_l\', \'br_r\', \'dcorner4\', \'corner_1\')');
			$('#bb_l').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_l1.png\')');
			$('#bb_area').css('width', $('#bb_area').width() - 80);
			$('#darea4').css('width', $('#darea4').width() - 80);
			$('#darea4').css('margin-right', 80);
			bb_sum += 80;
			
			$('#br_r').addClass('dr_bcorner_r1');
			$('#br_r').css('width', '80px');
			$('#br_r').attr('onclick', 'revisionDr(\'layer2\', \'bb_l\', \'br_r\', \'dcorner4\', \'corner_1\')');
			$('#br_r').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_r1.png\')');
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
		$('#emptySpaceR').html((blrWidth - br_sum) * 10);
		$('#emptySpaceB').html((bfWidth - bb_sum) * 10);
		break;
	}
	}else if(wk=='dr_a005'){
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
				bl_sum -= 96.5;
			} else {
				if ($('#ipSpace1').val() / 10 - bf_sum < 96.5 || $('#ipSpace2').val() / 10 - bl_sum < 96.5) {
					alert('코너장을 놓기 위한 공간이 부족합니다.');
					return;
				}
				
				$('#dcorner1').css('background-image', 'url(\'/images/wardrobe/dressroom/' + wk + '/ucorner_fl.png\')');
				$('#dcorner1').addClass('on_corner').addClass('dr_bcorner_1');
				$('#bf_l').removeClass('dr_bcorner_l1').removeClass('dr_bcorner_l2').removeClass('dr_bcorner_l3').removeClass('dr_bcorner_l1_a').removeClass('dr_bcorner_l2_a').removeClass('dr_bcorner_l3_a').removeClass('dr_bcorner_l1_b').removeClass('dr_bcorner_l2_b').removeClass('dr_bcorner_l3_b').removeClass('dr_bcorner_l1_c').removeClass('dr_bcorner_l2_c').removeClass('dr_bcorner_l3_c');
				$('#bf_l').addClass('dr_bcorner_l1');
				$('#bf_l').css('width', '96px');
				$('#bf_l').attr('onclick', 'revisionDr(\'layer2\', \'bf_l\', \'bl_r\', \'dcorner1\', \'corner_a1\')');
				$('#bf_l').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a1.png\')');
				$('#bf_area').css('width', $('#bf_area').width() - 96);
				$('#darea1').css('width', $('#darea1').width() - 96.5).css('margin-left', 96.5);
				bf_sum += 96.5;
				$('#bl_r').removeClass('dr_bcorner_r1').removeClass('dr_bcorner_r2').removeClass('dr_bcorner_r3').removeClass('dr_bcorner_r1_a').removeClass('dr_bcorner_r2_a').removeClass('dr_bcorner_r3_a').removeClass('dr_bcorner_r1_b').removeClass('dr_bcorner_r2_b').removeClass('dr_bcorner_r3_b').removeClass('dr_bcorner_r1_c').removeClass('dr_bcorner_r2_c').removeClass('dr_bcorner_r3_c');
				$('#bl_r').addClass('dr_bcorner_r1');
				$('#bl_r').css('width', '96px');
				$('#bl_r').attr('onclick', 'revisionDr(\'layer2\', \'bf_l\', \'bl_r\', \'dcorner1\', \'corner_a1\')');
				$('#bl_r').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a1.png\')');
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
				if ($('#ipSpace1').val() / 10 - bf_sum < 96.5 || $('#ipSpace2').val() / 10 - br_sum < 96.5) {
					alert('코너장을 놓기 위한 공간이 부족합니다.');
					return;
				}
				
				$('#dcorner2').css('background-image', 'url(\'/images/wardrobe/dressroom/' + wk + '/ucorner_fr.png\')');
				$('#dcorner2').addClass('on_corner').addClass('dr_bcorner_1');
				$('#bf_r').removeClass('dr_bcorner_r1').removeClass('dr_bcorner_r2').removeClass('dr_bcorner_r3').removeClass('dr_bcorner_r1_a').removeClass('dr_bcorner_r2_a').removeClass('dr_bcorner_r3_a').removeClass('dr_bcorner_r1_b').removeClass('dr_bcorner_r2_b').removeClass('dr_bcorner_r3_b').removeClass('dr_bcorner_r1_c').removeClass('dr_bcorner_r2_c').removeClass('dr_bcorner_r3_c');
				$('#bf_r').addClass('dr_bcorner_r1');
				$('#bf_r').css('width', '96px');
				$('#bf_r').attr('onclick', 'revisionDr(\'layer2\', \'br_l\', \'bf_r\', \'dcorner2\', \'corner_a1\')');
				$('#bf_r').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a1.png\')');
				$('#bf_area').css('width', $('#bf_area').width() - 96);
				$('#darea1').css('width', $('#darea1').width() - 96.5);
				$('#darea1').css('margin-right', 96.5);
				bf_sum += 96.5;
				$('#br_l').removeClass('dr_bcorner_l1').removeClass('dr_bcorner_l2').removeClass('dr_bcorner_l3').removeClass('dr_bcorner_l1_a').removeClass('dr_bcorner_l2_a').removeClass('dr_bcorner_l3_a').removeClass('dr_bcorner_l1_b').removeClass('dr_bcorner_l2_b').removeClass('dr_bcorner_l3_b').removeClass('dr_bcorner_l1_c').removeClass('dr_bcorner_l2_c').removeClass('dr_bcorner_l3_c');
				$('#br_l').addClass('dr_bcorner_l1');
				$('#br_l').css('width', '96px');
				$('#br_l').attr('onclick', 'revisionDr(\'layer2\', \'br_l\', \'bf_r\', \'dcorner2\', \'corner_a1\')');
				$('#br_l').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a1.png\')');
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
				if ($('#ipSpace1').val() / 10 - bb_sum < 96.5 || $('#ipSpace2').val() / 10 - bl_sum < 96.5) {
					alert('코너장을 놓기 위한 공간이 부족합니다.');
					return;
				}
				
				$('#dcorner3').css('background-image', 'url(\'/images/wardrobe/dressroom/' + wk + '/ucorner_bl.png\')');
				$('#dcorner3').addClass('on_corner').addClass('dr_bcorner_1');
				$('#bb_r').removeClass('dr_bcorner_r1').removeClass('dr_bcorner_r2').removeClass('dr_bcorner_r3').removeClass('dr_bcorner_r1_a').removeClass('dr_bcorner_r2_a').removeClass('dr_bcorner_r3_a').removeClass('dr_bcorner_r1_b').removeClass('dr_bcorner_r2_b').removeClass('dr_bcorner_r3_b').removeClass('dr_bcorner_r1_c').removeClass('dr_bcorner_r2_c').removeClass('dr_bcorner_r3_c');
				$('#bb_r').addClass('dr_bcorner_r1');
				$('#bb_r').css('width', '96px');
				$('#bb_r').attr('onclick', 'revisionDr(\'layer2\', \'bl_l\', \'bb_r\', \'dcorner3\', \'corner_a1\')');
				$('#bb_r').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a1.png\')');
				$('#bb_area').css('width', $('#bb_area').width() - 96);
				$('#darea4').css('width', $('#darea4').width() - 96.5);
				$('#darea4').css('margin-left', 96.5);
				bb_sum += 96.5;
				$('#bl_l').removeClass('dr_bcorner_l1').removeClass('dr_bcorner_l2').removeClass('dr_bcorner_l3').removeClass('dr_bcorner_l1_a').removeClass('dr_bcorner_l2_a').removeClass('dr_bcorner_l3_a').removeClass('dr_bcorner_l1_b').removeClass('dr_bcorner_l2_b').removeClass('dr_bcorner_l3_b').removeClass('dr_bcorner_l1_c').removeClass('dr_bcorner_l2_c').removeClass('dr_bcorner_l3_c');
				$('#bl_l').addClass('dr_bcorner_l1');
				$('#bl_l').css('width', '96px');
				$('#bl_l').attr('onclick', 'revisionDr(\'layer2\', \'bl_l\', \'bb_r\', \'dcorner3\', \'corner_a1\')');
				$('#bl_l').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a1.png\')');
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
				if ($('#ipSpace1').val() / 10 - bb_sum < 96.5 || $('#ipSpace2').val() / 10 - br_sum < 96.5) {
					alert('코너장을 놓기 위한 공간이 부족합니다.');
					return;
				}
				
				$('#dcorner4').css('background-image', 'url(\'/images/wardrobe/dressroom/' + wk + '/ucorner_br.png\')');
				$('#dcorner4').addClass('on_corner').addClass('dr_bcorner_1');
				$('#bb_l').removeClass('dr_bcorner_l1').removeClass('dr_bcorner_l2').removeClass('dr_bcorner_l3').removeClass('dr_bcorner_l1_a').removeClass('dr_bcorner_l2_a').removeClass('dr_bcorner_l3_a').removeClass('dr_bcorner_l1_b').removeClass('dr_bcorner_l2_b').removeClass('dr_bcorner_l3_b').removeClass('dr_bcorner_l1_c').removeClass('dr_bcorner_l2_c').removeClass('dr_bcorner_l3_c');
				$('#bb_l').addClass('dr_bcorner_l1');
				$('#bb_l').css('width', '96px');
				$('#bb_l').attr('onclick', 'revisionDr(\'layer2\', \'bb_l\', \'br_r\', \'dcorner4\', \'corner_a1\')');
				$('#bb_l').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a1.png\')');
				$('#bb_area').css('width', $('#bb_area').width() - 96);
				$('#darea4').css('width', $('#darea4').width() - 96.5);
				$('#darea4').css('margin-right', 96.5);
				bb_sum += 96.5;
				$('#br_r').removeClass('dr_bcorner_r1').removeClass('dr_bcorner_r2').removeClass('dr_bcorner_r3').removeClass('dr_bcorner_r1_a').removeClass('dr_bcorner_r2_a').removeClass('dr_bcorner_r3_a').removeClass('dr_bcorner_r1_b').removeClass('dr_bcorner_r2_b').removeClass('dr_bcorner_r3_b').removeClass('dr_bcorner_r1_c').removeClass('dr_bcorner_r2_c').removeClass('dr_bcorner_r3_c');
				$('#br_r').addClass('dr_bcorner_r1');
				$('#br_r').css('width', '96px');
				$('#br_r').attr('onclick', 'revisionDr(\'layer2\', \'bb_l\', \'br_r\', \'dcorner4\', \'corner_a1\')');
				$('#br_r').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a1.png\')');
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

var bf_cri = 'left', bl_cri = 'right', br_cri = 'left', bb_cri = 'right';
function selectCri(lr) {
	if (lr == 'left') {
		$('#cri_l').addClass('choiceBtn');
		$('#cri_r').removeClass('choiceBtn');
	} else if (lr == 'right') {
		$('#cri_l').removeClass('choiceBtn');
		$('#cri_r').addClass('choiceBtn');
	}
	
	if (!$('#body_forward').hasClass('hidden')) {
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
	} else if (!$('#body_left').hasClass('hidden')) {
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
	} else if (!$('#body_right').hasClass('hidden')) {
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
	} else if (!$('#body_backward').hasClass('hidden')) {
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
function addDr(btnDrid) {
	var wk = $('#kind').val();
	if (wk == '종류')
		return;
	
	if ($('#btn'+btnDrid).hasClass('disabled'))
		return;
	if(wk=='dr_a004'){
		if (bfWidth == 0 ) {
			alert('폭을 입력해주세요.');
			return;
		}
	}else{
		if (bfWidth == 0 || blrWidth == 0) {
			alert('폭을 입력해주세요.');
			return;
		}
		
	}

	var tempWidth = 0;
	var tempKind = '';
	var tempText = '';
	switch (btnDrid) {
	case 'DK001':
		switch (dwr) {
		case 900:
			switch (wk) {
			case 'dr_a001':tempKind = '900_a1'; break;
			case 'dr_a004':tempKind = '900_d1_1'; break;
			}break;
		case 1000:tempKind = '1000_k1_1';break;
		}
		tempText = dwr+'<br>이불장';
		break;
	case 'DK002':
		switch (dwr) {
		case 1000:
			switch (wk) {
			case 'dr_a004':tempKind = '1000_a1_1';break;
			case 'dr_a005':tempKind = '1000_e1';break;
			}break;
		case 900: tempKind = '900_b1_1'; break;
		case 800: tempKind = '800_a1'; break;
		case 600: tempKind = '600_a1'; break;
		}
		tempText = dwr+'<br>옷장';
		break;
	case 'DK003':
		switch (dwr) {
		case 1000: tempKind = '1000_f1'; break;
		case 800: tempKind = '800_b1'; break;
		case 600: tempKind = '600_b1'; break;
		case 400: tempKind = '400_b'; break;
		}
		tempText = dwr+'<br>정리장';
		break;
	case 'DK004':
		switch (dwr) {
		case 800: tempKind = '800_c1_a'; break;
		}
		tempText = dwr+'<br>옵션장';
		break;
	case 'DK005':
		switch (dwr) {
		case 800: tempKind = '800_d1'; break;
		}
		tempText = dwr+'<br>3단서랍';
		break;
	case 'DK006':
		switch (dwr) {
		case 800: tempKind = '800_e1'; break;
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
		case 450: tempKind = '450_a1_1'; break;
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
		case 900:tempKind = '900_e1_1'; break;
		case 1000:
		switch (wk) {
			case 'dr_a004':tempKind = '1000_l1_1';break;
			case 'dr_a005':tempKind = '1000_h1'; break;
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
	
	
	if (!$('#body_forward').hasClass('hidden')) {
		tempWidth = dwr / 10;
		if (direction == 'darea1' && bf_sum + tempWidth <= bfWidth) {
//			if ($('#bf_cri').next().attr('id') == null && bf_cri == 'left') {
//				bl_sum -= 40;
//			} else if (bfWidth - bf_sum < 60 && bf_cri == 'right') {
//				
//			}
			$('#bf_area').append('<div id="bfid'+cnt+'" class="dr_b' + tempKind + '" style="float: ' + bf_cri + '" onclick="revisionDr(\'layer2\', \'bf\', ' + cnt + ', \'' + tempWidth + '\', \'' + tempKind + '\')"><div id="fid' + cnt + '" class="df' + dwr + ' hidden"></div></div>');
			$('.dr_b' + tempKind).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b' + tempKind + '.png\')');
			$('#darea1').append('<div id="baid'+cnt+'" class="dr_u' + dwr + '" style="float: ' + bf_cri + '; font-size: 10pt; text-align: center;">' + tempText + '</div>');
			$('.dr_u' + dwr).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/u' + dwr + '_a.png\')');
			bf_sum += tempWidth;
			bfLastId = 'bfid'+cnt;
			cnt++;
			showSize(1);
			$('#info_dr_f').show();
			$('#emptySpaceF').html((bfWidth - bf_sum) * 10);
			$('#epL').css('left',5);
			$('#epR').css('left',bf_sum+5);
		}
		bfFirstId = $('#bf_cri').next().attr('id');
	}
	
	if (!$('#body_left').hasClass('hidden')) {
		tempWidth = dwr / 10;
		if (direction == 'darea2' && bl_sum + tempWidth <= blrWidth) {
			$('#bl_area').append('<div id="blid'+cnt+'" class="dr_b' + tempKind + '" style="float: ' + bl_cri + '" onclick="revisionDr(\'layer2\', \'bl\', ' + cnt + ', \'' + tempWidth + '\', \'' + tempKind + '\')"><div id="fid' + cnt + '" class="df' + dwr + ' hidden"></div></div>');
			$('.dr_b' + tempKind).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b' + tempKind + '.png\')');
			$('#darea2').append('<div id="baid'+cnt+'" class="dr_u' + dwr + '" style="float: ' + bl_cri + '; font-size: 10pt; text-align: center;">' + tempText + '</div>');
			$('.dr_u' + dwr).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/u' + dwr + '_a.png\')');
			bl_sum += tempWidth;
			blLastId = 'blid'+cnt;
			cnt++;
		}
		blFirstId = $('#bl_cri').next().attr('id');
		showSize(2);
		$('#info_dr_l').show();
		$('#emptySpaceL').html((blrWidth - bl_sum) * 10);
	}
	
	if (!$('#body_right').hasClass('hidden')) {
		tempWidth = dwr / 10;
		if (direction == 'darea3' && br_sum + tempWidth <= blrWidth) {
			$('#br_area').append('<div id="brid'+cnt+'" class="dr_b' + tempKind + '" style="float: ' + br_cri + '" onclick="revisionDr(\'layer2\', \'br\', ' + cnt + ', \'' + tempWidth + '\', \'' + tempKind + '\')"><div id="fid' + cnt + '" class="df' + dwr + ' hidden"></div></div>');
			$('.dr_b' + tempKind).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b' + tempKind + '.png\')');
			$('#darea3').append('<div id="baid'+cnt+'" class="dr_u' + dwr + '" style="float: ' + br_cri + '; font-size: 10pt; text-align: center;">' + tempText + '</div>');
			$('.dr_u' + dwr).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/u' + dwr + '_a.png\')');
			br_sum += tempWidth;
			brLastId = 'brid'+cnt;
			cnt++;
		}
		brFirstId = $('#br_cri').next().attr('id');
		showSize(3);
		$('#info_dr_r').show();
		$('#emptySpaceR').html((blrWidth - br_sum) * 10);
	}
	
	if (!$('#body_backward').hasClass('hidden')) {
		tempWidth = dwr / 10;
		if (direction == 'darea4' && bb_sum + tempWidth <= bfWidth) {
			$('#bb_area').append('<div id="bbid'+cnt+'" class="dr_b' + tempKind + '" style="float: ' + bb_cri + '" onclick="revisionDr(\'layer2\', \'bb\', ' + cnt + ', ' + tempWidth + ', \'' + tempKind + '\')"><div id="fid' + cnt + '" class="df' + dwr + ' hidden"></div></div>');
			$('.dr_b' + tempKind).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b' + tempKind + '.png\')');
			$('#darea4').append('<div id="baid'+cnt+'" class="dr_u' + dwr + '" style="float: ' + bb_cri + '; -ms-transform: rotate(180deg); -webkit-transform: rotate(180deg); -moz-transform: rotate(180deg); -o-transform: rotate(180deg); transform: rotate(180deg); font-size: 10pt; text-align: center;">' + tempText + '</div>');
			$('.dr_u' + dwr).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/u' + dwr + '_a.png\')');
			bb_sum += tempWidth;
			bbLastId = 'bbid'+cnt;
			cnt++;
		}
		bbFirstId = $('#bb_cri').next().attr('id');
		showSize(4);
		$('#info_dr_b').show();
		$('#emptySpaceB').html((bfWidth - bb_sum) * 10);
	}
	if($('#kind').val()=='dr_a004'){
		$('.dr_u600').css('height','62px');
		$('.dr_u600_b').css('height','62px');
		$('.dr_u600_l').css('width','62px');
		$('.dr_u600_r').css('width','62px');
	}
	$('#tableItem').html('');
	$('#workBar').removeClass('hidden');
	$('#workBar').fadeIn();
}

function showSize(n) {
	if($('#kind').val()!='dr_a005'){
	switch (n) {
	case 1:
		if ($('#dcorner1').hasClass('on_corner') && $('#dcorner2').hasClass('on_corner')) {
			$('.dc1_f').remove();
			$('.dc2_f').remove();
			$('#dsize1').addClass('hidden');
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
			$('#dsize1').addClass('hidden');
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
			$('#dsize1').addClass('hidden');
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
			$('#dsize2').addClass('hidden');
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
			$('#dsize2').addClass('hidden');
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
			$('#dsize3').addClass('hidden');
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
			$('#dsize3').addClass('hidden');
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
			$('#dsize4').addClass('hidden');
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
			$('#dsize4').addClass('hidden');
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
	}else if($('#kind').val()=='dr_a005'){
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
		$('#dsize1').removeClass('hidden');
		$('#dsize1').css('width', (bf_sum-2-s)+'px');
		$('#dsize1').html('<div style="width: '+(((bf_sum-s)/2)-20)+'px; float: left;"><hr></div><div style="width: 38px; float: left; font-size:8pt; text-align: center; cursor: default;">'+((bf_sum-s)*10)+'</div><div style="width: '+(((bf_sum-s)/2)-20)+'px; float: left;"><hr></div>');
		$('#dsize1').css('left', l);
		$('#dsize1').css('right', r);
		break;
	case 2:
		$('#dsize2').removeClass('hidden');
		$('#dsize2').css('width', (bl_sum-2-s)+'px');
		$('#dsize2').html('<div style="width: '+(((bl_sum-s)/2)-20)+'px; float: left;"><hr></div><div style="width: 38px; float: left; font-size:8pt; text-align: center; cursor: default;">'+((bl_sum-s)*10)+'</div><div style="width: '+(((bl_sum-s)/2)-20)+'px; float: left;"><hr></div>');
		$('#dsize2').css('width', (bl_sum-2-s)+'px').css('transform', 'translate(-'+((bl_sum-2-s)/2 - l)+'px, '+((bl_sum-2-s)/2 - r)+'px) rotate(270deg)');
		break;
	case 3:
		$('#dsize3').removeClass('hidden');
		$('#dsize3').css('width', (br_sum-2-s)+'px');
		$('#dsize3').html('<div style="width: '+(((br_sum-s)/2)-20)+'px; float: left;"><hr></div><div style="width: 38px; float: left; font-size:8pt; text-align: center; cursor: default;">'+((br_sum-s)*10)+'</div><div style="width: '+(((br_sum-s)/2)-20)+'px; float: left;"><hr></div>');
		$('#dsize3').css('width', (br_sum-2-s)+'px').css('transform', 'translate('+((br_sum-2-s)/2 - l)+'px, '+((br_sum-2-s)/2 - r)+'px) rotate(90deg)');
		break;
	case 4:
		$('#dsize4').removeClass('hidden');
		$('#dsize4').css('width', (bb_sum-2-s)+'px');
		$('#dsize4').html('<div style="width: '+(((bb_sum-s)/2)-20)+'px; float: left;"><hr></div><div style="width: 38px; float: left; font-size:8pt; text-align: center; cursor: default;">'+((bb_sum-s)*10)+'</div><div style="width: '+(((bb_sum-s)/2)-20)+'px; float: left;"><hr></div>');
		$('#dsize4').css('left', l);
		$('#dsize4').css('right', r);
		break;
	}
}

var chkRemoveDr = true;
function revisionDr(el, tway, tcnt, twidth, tkind) {
	if (chkRemoveDr) {
		var temp = $('#' + el);
		var bg = temp.prev().hasClass('bg');

		if (bg) {
			$('.layer').show();	
		} else {
			temp.show();
		}

		if (temp.outerHeight() < $(document).height())
			temp.css('margin-top', '-' + temp.outerHeight() / 2 + 'px');
		else
			temp.css('top', '0px');
		if (temp.outerWidth() < $(document).width())
			temp.css('margin-left', '-' + temp.outerWidth() / 2 + 'px');
		else
			temp.css('left', '0px');

		temp.find('a.cbtn').unbind('click');
		temp.find('a.cbtn').click(function(e) {
			if (bg) {
				$('.layer').hide();
				$('#fid'+tcnt).addClass('hidden');
			} else {
				temp.hide();
			}
		});

		$('.layer .bg').unbind('click');
		$('.layer .bg').click(function(e) {
			$('.layer').hide();
			$('#fid'+tcnt).addClass('hidden');
		});
		
		$('.pop-layer').css('height', 120);
		$('.pop-layer').css('margin-top', '-60px');
		
		$('#fid'+tcnt).removeClass('hidden');
		var conts = '';
		conts += '<button style="width:100%; color: red;" onclick="removeDr(\'' + tway + '\', ' + tcnt + ', ' + twidth + ')">몸통삭제</button>';
		conts += '<hr>';
		conts += '<button onclick="moveDr(\'' + tway + '\', '+ tcnt + ', \'l\')"><</button>';
		conts += '<button onclick="moveDr(\'' + tway + '\', ' + tcnt + ', \'r\')">></button>';
		
		if (tkind == '1000_a1_0'|| tkind == '1000_a1_1'|| tkind == '1000_a2_0'|| tkind == '1000_a2_1'||tkind == '1000_a3_0' ||tkind == '1000_a3_1' ||tkind == '1000_a4_0' ||tkind == '1000_a4_1' 
			||tkind == '1000_b1' || tkind == '1000_b2'|| tkind == '1000_b3' || tkind == '1000_b1_a'
			||tkind == '1000_c1' ||tkind == '1000_c1_a' ||tkind == '1000_c1_b' ||tkind == '1000_c1_c' 
			|| tkind == '1000_c2'|| tkind == '1000_c2_a'|| tkind == '1000_c2_b'|| tkind == '1000_c2_c'
			|| tkind == '1000_c3'|| tkind == '1000_c3_a'|| tkind == '1000_c3_b'|| tkind == '1000_c3_c'
			||tkind == '1000_d1'||tkind == '1000_d1_a' || tkind == '1000_d2'|| tkind == '1000_d2_a'|| tkind == '1000_d3'|| tkind == '1000_d3_a'
			||tkind == '1000_e1' || tkind == '1000_e1_a'|| tkind == '1000_e1_b'|| tkind == '1000_e1_c'
			||tkind == '1000_f1' || tkind == '1000_f1_a'|| tkind == '1000_f1_b'|| tkind == '1000_f1_c'
			||tkind == '1000_g1' || tkind == '1000_g1_a'|| tkind == '1000_g1_b'|| tkind == '1000_g1_c'
			||tkind == '1000_h1' || tkind == '1000_h2' || tkind == '1000_h3'||tkind == '1000_h1_a'||tkind == '1000_h2_a'||tkind == '1000_h3_a'||tkind == '1000_h2_b'
			||tkind == '1000_i1' || tkind == '1000_i1_a'|| tkind == '1000_i1_b'|| tkind == '1000_i1_c'
			||tkind == '1000_j1' || tkind == '1000_j1_a'|| tkind == '1000_j1_b'|| tkind == '1000_j1_c'
			||tkind == '1000_k1_0'|| tkind == '1000_k1_1'|| tkind == '1000_k2_0'|| tkind == '1000_k2_1'||tkind == '1000_k3_0'|| tkind == '1000_k3_1'|| tkind == '1000_k4_0'|| tkind == '1000_k4_1'
			||tkind == '1000_l1_0'|| tkind == '1000_l1_1'|| tkind == '1000_l2_0'|| tkind == '1000_l2_1'||tkind == '1000_l3_0'|| tkind == '1000_l3_1'|| tkind == '1000_l4_0'|| tkind == '1000_l4_1'
			||tkind == '900_a1' || tkind == '900_a2' /*|| tkind == '900_a'*/
			||tkind == '900_b1_0' || tkind == '900_b2_0'||tkind == '900_b1_1' || tkind == '900_b2_1'||tkind == '900_b3_0' || tkind == '900_b4_0'||tkind == '900_b3_1' || tkind == '900_b4_1'
			||tkind == '900_c1' || tkind == '900_c2'|| tkind == '900_c3'
			||tkind == '900_d1_0' || tkind == '900_d2_0'||tkind == '900_d1_1' || tkind == '900_d2_1'||tkind == '900_d3_0' || tkind == '900_d4_0'||tkind == '900_d3_1' || tkind == '900_d4_1'
			||tkind == '900_e1_0' || tkind == '900_e2_0'||tkind == '900_e1_1' || tkind == '900_e2_1'||tkind == '900_e3_0' || tkind == '900_e4_0'||tkind == '900_e3_1' || tkind == '900_e4_1'
			|| tkind == '800_a1' || tkind == '800_a2' 
			|| tkind == '800_b1_a' || tkind == '800_b2_a' || tkind == '800_b3' || tkind == '800_b_a' || tkind == '800_b1' || tkind == '800_b2'
			|| tkind == '800_c1_a' || tkind == '800_c1_b' || tkind == '800_c2_a' || tkind == '800_c2_b'
			|| tkind == '800_d1_a' || tkind == '800_d2' || tkind == '800_d1'
			|| tkind == '800_e1' || tkind == '800_e2'
		/*	|| tkind == '600_a' */|| tkind == '600_a1' || tkind == '600_a2'
			/*|| tkind == '600_b' */|| tkind == '600_b1' || tkind == '600_b2'
			|| tkind == '600_c1' || tkind == '600_c2'|| tkind == '600_c3'
			|| tkind == '450_a1_0'|| tkind == '450_a1_1'|| tkind == '450_a2_0'|| tkind == '450_a2_1'
			|| tkind == '400_a1_a' || tkind == '400_a1' || tkind == '400_a2') {
			conts += '<hr>';
			conts += '<div id="optionBox"></div>';
			$('.pop-conts').html(conts);
			showDrKind(tway, tcnt, twidth, tkind);
		} else if (tkind == 'corner_1' || tkind == 'corner_2'
			|| tkind == 'corner_a1'|| tkind == 'corner_a2'|| tkind == 'corner_a3'
			|| tkind == 'corner_a1_a'|| tkind == 'corner_a2_a'|| tkind == 'corner_a3_a'
			|| tkind == 'corner_a1_b'|| tkind == 'corner_a2_b'|| tkind == 'corner_a3_b'
			|| tkind == 'corner_a1_c'|| tkind == 'corner_a2_c'|| tkind == 'corner_a3_c') {
			conts = '<div id="optionBox"></div>';
			$('.pop-conts').html(conts);
			showDrKind(tway, tcnt, twidth, tkind);
		} else
			$('.pop-conts').html(conts);
	}
	
	chkRemoveDr = true;
}

function moveDr(tway, tcnt, lor) {
	if (lor == 'l') {
		switch (tway) {
		case 'bf':
			if (bf_cri == 'left') {
				if ('bfid'+tcnt != bfFirstId) {
					if ($('#bfid'+tcnt).prev().attr('id') == bfFirstId)
						bfFirstId = 'bfid'+tcnt;
					if ('bfid'+tcnt == bfLastId)
						bfLastId = $('#bfid'+tcnt).prev().attr('id');
				
					$('#bfid'+tcnt).insertBefore('#'+$('#bfid'+tcnt).prev().attr('id'));
					$('#baid'+tcnt).insertBefore('#'+$('#baid'+tcnt).prev().attr('id'));
				}
			} else if (bf_cri == 'right') {
				if ('bfid'+tcnt != bfLastId) {
					if ($('#bfid'+tcnt).next().attr('id') == bfLastId)
						bfLastId = 'bfid'+tcnt;
					if ('bfid'+tcnt == bfFirstId)
						bfFirstId = $('#bfid'+tcnt).next().attr('id');
					
					$('#bfid'+tcnt).insertAfter('#'+$('#bfid'+tcnt).next().attr('id'));
					$('#baid'+tcnt).insertAfter('#'+$('#baid'+tcnt).next().attr('id'));
				}
			}
		break;
		case 'bl':
			if (bl_cri == 'left') {
				if ('blid'+tcnt != blFirstId) {
					if ($('#blid'+tcnt).prev().attr('id') == blFirstId)
						blFirstId = 'blid'+tcnt;
					if ('blid'+tcnt == blLastId)
						blLastId = $('#blid'+tcnt).prev().attr('id');
				
					$('#blid'+tcnt).insertBefore('#'+$('#blid'+tcnt).prev().attr('id'));
					$('#baid'+tcnt).insertBefore('#'+$('#baid'+tcnt).prev().attr('id'));
				}
			} else if (bl_cri == 'right') {
				if ('blid'+tcnt != blLastId) {
					if ($('#blid'+tcnt).next().attr('id') == blLastId)
						blLastId = 'blid'+tcnt;
					if ('blid'+tcnt == blFirstId)
						blFirstId = $('#blid'+tcnt).next().attr('id');
					
					$('#blid'+tcnt).insertAfter('#'+$('#blid'+tcnt).next().attr('id'));
					$('#baid'+tcnt).insertAfter('#'+$('#baid'+tcnt).next().attr('id'));
				}
			}
		break;
		case 'br':
			if (br_cri == 'left') {
				if ('brid'+tcnt != brFirstId) {
					if ($('#brid'+tcnt).prev().attr('id') == brFirstId)
						brFirstId = 'brid'+tcnt;
					if ('brid'+tcnt == brLastId)
						brLastId = $('#brid'+tcnt).prev().attr('id');
				
					$('#brid'+tcnt).insertBefore('#'+$('#brid'+tcnt).prev().attr('id'));
					$('#baid'+tcnt).insertBefore('#'+$('#baid'+tcnt).prev().attr('id'));
				}
			} else if (br_cri == 'right') {
				if ('brid'+tcnt != brLastId) {
					if ($('#brid'+tcnt).next().attr('id') == brLastId)
						brLastId = 'brid'+tcnt;
					if ('brid'+tcnt == brFirstId)
						brFirstId = $('#brid'+tcnt).next().attr('id');
					
					$('#brid'+tcnt).insertAfter('#'+$('#brid'+tcnt).next().attr('id'));
					$('#baid'+tcnt).insertAfter('#'+$('#baid'+tcnt).next().attr('id'));
				}
			}
		break;
		case 'bb':
			if (bb_cri == 'left') {
				if ('bbid'+tcnt != bbFirstId) {
					if ($('#bbid'+tcnt).prev().attr('id') == bbFirstId)
						bbFirstId = 'bbid'+tcnt;
					if ('bbid'+tcnt == bbLastId)
						bbLastId = $('#bbid'+tcnt).prev().attr('id');
				
					$('#bbid'+tcnt).insertBefore('#'+$('#bbid'+tcnt).prev().attr('id'));
					$('#baid'+tcnt).insertBefore('#'+$('#baid'+tcnt).prev().attr('id'));
				}
			} else if (bb_cri == 'right') {
				if ('bbid'+tcnt != bbLastId) {
					if ($('#bbid'+tcnt).next().attr('id') == bbLastId)
						bbLastId = 'bbid'+tcnt;
					if ('bbid'+tcnt == bbFirstId)
						bbFirstId = $('#bbid'+tcnt).next().attr('id');
					
					$('#bbid'+tcnt).insertAfter('#'+$('#bbid'+tcnt).next().attr('id'));
					$('#baid'+tcnt).insertAfter('#'+$('#baid'+tcnt).next().attr('id'));
				}
			}
		break;
		}
	} else if (lor == 'r') {
		switch (tway) {
		case 'bf':
			if (bf_cri == 'left') {
				if ('bfid'+tcnt != bfLastId) {
					if ($('#bfid'+tcnt).next().attr('id') == bfLastId)
						bfLastId = 'bfid'+tcnt;
					if ('bfid'+tcnt == bfFirstId)
						bfFirstId = $('#bfid'+tcnt).next().attr('id');
				
					$('#bfid'+tcnt).insertAfter('#'+$('#bfid'+tcnt).next().attr('id'));
					$('#baid'+tcnt).insertAfter('#'+$('#baid'+tcnt).next().attr('id'));
				}
			} else if (bf_cri == 'right') {
				if ('bfid'+tcnt != bfFirstId) {
					if ($('#bfid'+tcnt).prev().attr('id') == bfFirstId)
						bfFirstId = 'bfid'+tcnt;
					if ('bfid'+tcnt == bfLastId)
						bfLastId = $('#bfid'+tcnt).prev().attr('id');
					
					$('#bfid'+tcnt).insertBefore('#'+$('#bfid'+tcnt).prev().attr('id'));
					$('#baid'+tcnt).insertBefore('#'+$('#baid'+tcnt).prev().attr('id'));
				}
			}
		break;
		case 'bl':
			if (bl_cri == 'left') {
				if ('blid'+tcnt != blLastId) {
					if ($('#blid'+tcnt).next().attr('id') == blLastId)
						blLastId = 'blid'+tcnt;
					if ('blid'+tcnt == blFirstId)
						blFirstId = $('#blid'+tcnt).next().attr('id');
				
					$('#blid'+tcnt).insertAfter('#'+$('#blid'+tcnt).next().attr('id'));
					$('#baid'+tcnt).insertAfter('#'+$('#baid'+tcnt).next().attr('id'));
				}
			} else if (bl_cri == 'right') {
				if ('blid'+tcnt != blFirstId) {
					if ($('#blid'+tcnt).prev().attr('id') == blFirstId)
						blFirstId = 'blid'+tcnt;
					if ('blid'+tcnt == blLastId)
						blLastId = $('#blid'+tcnt).prev().attr('id');
					
					$('#blid'+tcnt).insertBefore('#'+$('#blid'+tcnt).prev().attr('id'));
					$('#baid'+tcnt).insertBefore('#'+$('#baid'+tcnt).prev().attr('id'));
				}
			}
		break;
		case 'br':
			if (br_cri == 'left') {
				if ('brid'+tcnt != brLastId) {
					if ($('#brid'+tcnt).next().attr('id') == brLastId)
						brLastId = 'brid'+tcnt;
					if ('brid'+tcnt == brFirstId)
						brFirstId = $('#brid'+tcnt).next().attr('id');
				
					$('#brid'+tcnt).insertAfter('#'+$('#brid'+tcnt).next().attr('id'));
					$('#baid'+tcnt).insertAfter('#'+$('#baid'+tcnt).next().attr('id'));
				}
			} else if (br_cri == 'right') {
				if ('brid'+tcnt != brFirstId) {
					if ($('#brid'+tcnt).prev().attr('id') == brFirstId)
						brFirstId = 'brid'+tcnt;
					if ('brid'+tcnt == brLastId)
						brLastId = $('#brid'+tcnt).prev().attr('id');
					
					$('#brid'+tcnt).insertBefore('#'+$('#brid'+tcnt).prev().attr('id'));
					$('#baid'+tcnt).insertBefore('#'+$('#baid'+tcnt).prev().attr('id'));
				}
			}
		break;
		case 'bb':
			if (bb_cri == 'left') {
				if ('bbid'+tcnt != bbLastId) {
					if ($('#bbid'+tcnt).next().attr('id') == bbLastId)
						bbLastId = 'bbid'+tcnt;
					if ('bbid'+tcnt == bbFirstId)
						bbFirstId = $('#bbid'+tcnt).next().attr('id');
				
					$('#bbid'+tcnt).insertAfter('#'+$('#bbid'+tcnt).next().attr('id'));
					$('#baid'+tcnt).insertAfter('#'+$('#baid'+tcnt).next().attr('id'));
				}
			} else if (bb_cri == 'right') {
				if ('bbid'+tcnt != bbFirstId) {
					if ($('#bbid'+tcnt).prev().attr('id') == bbFirstId)
						bbFirstId = 'bbid'+tcnt;
					if ('bbid'+tcnt == bbLastId)
						bbLastId = $('#bbid'+tcnt).prev().attr('id');
					
					$('#bbid'+tcnt).insertBefore('#'+$('#bbid'+tcnt).prev().attr('id'));
					$('#baid'+tcnt).insertBefore('#'+$('#baid'+tcnt).prev().attr('id'));
				}
			}
		break;
		}
	}
}

function removeDr(tway, tcnt, nwidth) {
	if (chkRemoveDr) {
		$('#'+tway+'id'+tcnt).remove();
		$('#baid'+tcnt).remove();
		
		switch (tway) {
		case 'bf':
			bf_sum -= nwidth;
			
			bfFirstId = $('#bf_cri').next().attr('id');
			bfLastId = bfFirstId;
			while (true) {
				bfLastId = $('#'+bfLastId).next().attr('id');
				if ($('#'+bfLastId).next().attr('id') == null)
					break;
			}
			showSize(1);
			$('#emptySpaceF').html((bfWidth - bf_sum) * 10);
			if (bf_sum == 0) $('#info_dr_f').hide();
			$('#epL').css('left',5);
			$('#epR').css('left',bf_sum+5);
			break;
		case 'bl':
			bl_sum -= nwidth;
			
			blFirstId = $('#bl_cri').next().attr('id');
			blLastId = blFirstId;
			while (true) {
				blLastId = $('#'+blLastId).next().attr('id');
				if ($('#'+blLastId).next().attr('id') == null)
					break;
			}
			showSize(2);
			$('#emptySpaceL').html((blrWidth - bl_sum) * 10);
			if (bl_sum == 0) $('#info_dr_l').hide();
			break;
		case 'br':
			br_sum -= nwidth;
			
			brFirstId = $('#br_cri').next().attr('id');
			brLastId = brFirstId;
			while (true) {
				brLastId = $('#'+brLastId).next().attr('id');
				if ($('#'+brLastId).next().attr('id') == null)
					break;
			}
			showSize(3);
			$('#emptySpaceR').html((blrWidth - br_sum) * 10);
			if (br_sum == 0) $('#info_dr_r').hide();
			break;
		case 'bb':
			bb_sum -= nwidth;
			
			bbFirstId = $('#bb_cri').next().attr('id');
			bbLastId = bbFirstId;
			while (true) {
				bbLastId = $('#'+bbLastId).next().attr('id');
				if ($('#'+bbLastId).next().attr('id') == null)
					break;
			}
			showSize(4);
			$('#emptySpaceB').html((bfWidth - bb_sum) * 10);
			if (bb_sum == 0) $('#info_dr_b').hide();
			break;
		}
		
		$('.layer').hide();
		
		$('#tableItem').html('');
	}
	chkRemoveDr = true;
}

function showDrKind(tway, tcnt, twidth, tkind) {
	var conts = '';
	if ($('#kind').val() == 'dr_a001') {
		if (tkind == '900_a1' || tkind == '900_a2'/* || tkind == '900_a'*/) {
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">문짝색상</div>';
			conts += '<button id="900_a1" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_a1\')">화이트</button><button id="900_a2" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_a2\')">월넛</button>';
			
			$('.pop-layer').css('height', 210);
			$('.pop-layer').css('margin-top', '-105px');
		} else if (tkind == '800_a1' || tkind == '800_a2') {
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">측판종류</div>';
			conts += '<button id="800_a1" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'800_a1\')">철제</button><button id="800_a2" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'800_a2\')">목재</button>';
			
			$('.pop-layer').css('height', 210);
			$('.pop-layer').css('margin-top', '-105px');
		} else if (tkind == '800_b1' || tkind == '800_b2' /*|| tkind == '800_b_a'*/) {
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">측판종류</div>';
			conts += '<button id="800_b1" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'800_b1\')">철제</button><button id="800_b2" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'800_b2\')">목재</button>';
			
			$('.pop-layer').css('height', 210);
			$('.pop-layer').css('margin-top', '-105px');
		} else if (tkind == '800_c1_a' || tkind == '800_c1_b' || tkind == '800_c2_a' || tkind == '800_c2_b') {
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">천판종류</div>';
			conts += '<button id="800_c1" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'800_c1\')">대</button><button id="800_c2" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'800_c2\')">소</button>';
			conts += '<div style="width: 100%; margin-top: 10px; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">옵션</div>';
			conts += '<button id="800_c_a" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'800_c_a\')">바지걸이</button><button id="800_c_b" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'800_c_b\')">악세사리</button>';
			
			$('.pop-layer').css('height', 280);
			$('.pop-layer').css('margin-top', '-140px');
		} else if (tkind == '800_d1_a' || tkind == '800_d2' || tkind == '800_d1') {
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">천판종류</div>';
			conts += '<button id="800_d1_a" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'800_d1\')">대</button><button id="800_d2_a" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'800_d2\')">소</button>';
			
			$('.pop-layer').css('height', 210);
			$('.pop-layer').css('margin-top', '-105px');
		} else if (tkind == '800_e1' || tkind == '800_e2') {
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">천판종류</div>';
			conts += '<button id="800_e1" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'800_e1\')">대</button><button id="800_e2" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'800_e2\')">소</button>';
			
			$('.pop-layer').css('height', 210);
			$('.pop-layer').css('margin-top', '-105px');
		} else if (/*tkind == '600_a' ||*/ tkind == '600_a1' || tkind == '600_a2') {
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">측판종류</div>';
			conts += '<button id="600_a1" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'600_a1\')">철제</button><button id="600_a2" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'600_a2\')">목재</button>';
			
			$('.pop-layer').css('height', 210);
			$('.pop-layer').css('margin-top', '-105px');
		} else if (/*tkind == '600_b' ||*/ tkind == '600_b1' || tkind == '600_b2') {
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">측판종류</div>';
			conts += '<button id="600_b1" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'600_b1\')">철제</button><button id="600_b2" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'600_b2\')">목재</button>';
			
			$('.pop-layer').css('height', 210);
			$('.pop-layer').css('margin-top', '-105px');
		} else if (tkind == '400_a1' || tkind == '400_a2') {
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">옵션도어</div>';
			conts += '<button id="400_a1" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'400_a1\')">없음</button><button id="400_a2_a" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'400_a2\')">있음</button>';
			
			$('.pop-layer').css('height', 210);
			$('.pop-layer').css('margin-top', '-105px');
		} else if (tkind == 'corner_1' || tkind == 'corner_2') {
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">측판종류</div>';
			conts += '<button id="corner_1" class="drOption" onclick="changeDrKind(\'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_1\')">철제</button><button id="corner_2" class="drOption" onclick="changeDrKind(\'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_2\')">목재</button>';
			
			$('.pop-layer').css('height', 100);
			$('.pop-layer').css('margin-top', '-50px');
		}	
		
		$('#optionBox').html(conts);
		$('#'+tkind).addClass('choiceBtn');
		
		if (tkind == '800_c1_a' || tkind == '800_c1_b' || tkind == '800_c2_a' || tkind == '800_c2_b') {
			switch (tkind) {
			case '800_c1_a': $('#800_c1').addClass('choiceBtn'); $('#800_c_a').addClass('choiceBtn'); break;
			case '800_c1_b': $('#800_c1').addClass('choiceBtn'); $('#800_c_b').addClass('choiceBtn'); break;
			case '800_c2_a': $('#800_c2').addClass('choiceBtn'); $('#800_c_a').addClass('choiceBtn'); break;
			case '800_c2_b': $('#800_c2').addClass('choiceBtn'); $('#800_c_b').addClass('choiceBtn'); break;
			}
		}
	} else if ($('#kind').val() == 'dr_a002' || $('#kind').val() == 'dr_a003') {
		if (tkind == '800_a2' || tkind == '800_a1') {
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">옵션</div>';
			conts += '<button id="800_a1" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'800_a1\')">없음</button><button id="800_a2" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'800_a2\')">코디서랍</button>';
			
			$('.pop-layer').css('height', 210);
			$('.pop-layer').css('margin-top', '-105px');
		} else if (tkind == '800_b1' || tkind == '800_b2' || tkind == '800_b3' || tkind == '800_b') {
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">옵션</div>';
			conts += '<button id="800_b1" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'800_b1\')" style="width:140px;">없음</button><button id="800_b2" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'800_b2\')">2단서랍</button><button id="800_b3" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'800_b3\')">옵션도어</button>';
			
			$('.pop-layer').css('height', 240);
			$('.pop-layer').css('margin-top', '-120px');
		} else {
			$('.pop-layer').css('height', 150);
			$('.pop-layer').css('margin-top', '-75px');
		}
		
		$('#optionBox').html(conts);
		$('#'+tkind).addClass('choiceBtn');
	}else if ($('#kind').val() == 'dr_a004' ) {
		if (tkind == '1000_a1_0'|| tkind == '1000_a2_0'|| tkind == '1000_a1_1'|| tkind == '1000_a2_1'||tkind == '1000_a3_0'|| tkind == '1000_a4_0'|| tkind == '1000_a3_1'|| tkind == '1000_a4_1') {//옷장
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">문짝상태</div>';
			conts += '<button id="1000_a1_aa" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_a1_aa\')">문짝표시</button><button id="1000_a1_bb" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_a1_bb\')">문짝숨김</button>';
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">하부장형태(문짝색상)</div>';
			conts += '<button id="1000_a1" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_a1\')">일반형(G)</button><button id="1000_a2" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_a2\')">일반형(DG)</button>';
			conts += '<button id="1000_a3" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_a3\')">서랍형(G)</button><button id="1000_a4" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_a4\')">서랍형(DG)</button>';
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">옵션</div>';
			conts += '<button id="1000_a_a" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_a_a\')">바지걸이</button><button id="1000_a_b" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_a_b\')">타이걸이</button>';			
			conts += '<button id="1000_a_c" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_a_c\')">공용CC경1</button><button id="1000_a_d" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_a_d\')">공용CC경2</button>';	
			
			$('.pop-layer').css('height', 475);
			$('.pop-layer').css('margin-top', '-170px');
		}else if (tkind == '1000_b1' || tkind == '1000_b2'|| tkind == '1000_b3') {
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">문짝색상</div>';
			conts += '<button id="1000_b1" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_b1\')">그레이</button><button id="1000_b2" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_b2\')">다크그레이</button><button id="1000_b3" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_b3\')" style="width:140px;">문짝없음</button>';
			
			$('.pop-layer').css('height', 250);
			$('.pop-layer').css('margin-top', '-105px');
		}else if (tkind == '1000_c1' ||tkind == '1000_c1_a' ||tkind == '1000_c1_b' ||tkind == '1000_c1_c' || tkind == '1000_c2'|| tkind == '1000_c2_a'|| tkind == '1000_c2_b'|| tkind == '1000_c2_c'|| tkind == '1000_c3'|| tkind == '1000_c3_a'|| tkind == '1000_c3_b'|| tkind == '1000_c3_c') {
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">문짝색상</div>';
			conts += '<button id="1000_c1" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_c1\')">그레이</button><button id="1000_c2" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_c2\')">다크그레이</button><button id="1000_c3" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_c3\')" style="width:140px;">문짝없음</button>';
			conts += '<div style="width: 100%; margin-top: 10px; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">LED조명</div>';
			conts +='<button id="1000_ca" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_ca\')">없음</button><button id="1000_c_a" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_c_a\')">추가</button>';	
			conts += '<div style="width: 100%; margin-top: 10px; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">타공판</div>';
			conts +='<button id="1000_cb" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_cb\')">없음</button><button id="1000_c_b" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_c_b\')">추가</button>';	

			$('.pop-layer').css('height', 395);
			$('.pop-layer').css('margin-top', '-170px');
		} else if (tkind == '1000_d1' || tkind == '1000_d2'|| tkind == '1000_d3' || tkind == '1000_d1_a' || tkind == '1000_d2_a'|| tkind == '1000_d3_a') {
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">문짝색상</div>';
			conts += '<button id="1000_d1" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_d1\')">그레이</button><button id="1000_d2" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_d2\')">다크그레이</button><button id="1000_d3" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_d3\')" style="width:140px;">문짝없음</button>';
			conts += '<div style="width: 100%; margin-top: 10px; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">옵션</div>';
			conts +='<button id="1000_da" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_da\')">없음</button><button id="1000_d1_a" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_d1_a\')">3단서랍통</button>';	
			
			$('.pop-layer').css('height', 320);
			$('.pop-layer').css('margin-top', '-140px');
		}else if (tkind == '1000_k1_0'|| tkind == '1000_k2_0'|| tkind == '1000_k1_1'|| tkind == '1000_k2_1'||tkind == '1000_k3_0'|| tkind == '1000_k4_0'|| tkind == '1000_k3_1'|| tkind == '1000_k4_1') {//이불장
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">문짝상태</div>';
			conts += '<button id="1000_k1_aa" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_k1_aa\')">문짝표시</button><button id="1000_k1_bb" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_k1_bb\')">문짝숨김</button>';
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">하부장형태(문짝색상)</div>';
			conts += '<button id="1000_k1" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_k1\')">일반형(G)</button><button id="1000_k2" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_k2\')">일반형(DG)</button>';
			conts += '<button id="1000_k3" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_k3\')">서랍형(G)</button><button id="1000_k4" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_k4\')">서랍형(DG)</button>';
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">옵션</div>';
			//conts += '<button id="1000_k_e" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_k_e\')" style="width:140px;">1단서랍</button><button id="1000_k_a" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_k_a\')">코디서랍</button><button id="1000_k_b" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_k_b\')">타이걸이</button>';			
			conts += '<button id="1000_k_a" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_k_a\')">코디서랍</button><button id="1000_k_b" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_k_b\')">타이걸이</button>';
			conts += '<button id="1000_k_c" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_k_c\')">공용CC경1</button><button id="1000_k_d" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_k_d\')">공용CC경2</button>';	
			
			$('.pop-layer').css('height', 415);
			$('.pop-layer').css('margin-top', '-170px');
		}else if (tkind == '1000_l1_0'|| tkind == '1000_l2_0'|| tkind == '1000_l1_1'|| tkind == '1000_l2_1'||tkind == '1000_l3_0'|| tkind == '1000_l4_0'|| tkind == '1000_l3_1'|| tkind == '1000_l4_1') {//칸막이
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">문짝상태</div>';
			conts += '<button id="1000_l1_aa" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_l1_aa\')">문짝표시</button><button id="1000_l1_bb" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_l1_bb\')">문짝숨김</button>';
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">하부장형태(문짝색상)</div>';
			conts += '<button id="1000_l1" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_l1\')">일반형(G)</button><button id="1000_l2" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_l2\')">일반형(DG)</button>';
			conts += '<button id="1000_l3" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_l3\')">서랍형(G)</button><button id="1000_l4" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_l4\')">서랍형(DG)</button>';
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">옵션</div>';
			conts += '<button id="1000_l_a" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_l_a\')">3단서랍</button><button id="1000_l_b" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_l_b\')">타이걸이</button>';			
			conts += '<button id="1000_l_c" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_l_c\')">공용CC경1</button><button id="1000_l_d" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_l_d\')">공용CC경2</button>';	
			
			$('.pop-layer').css('height', 475);
			$('.pop-layer').css('margin-top', '-170px');
		}else if (tkind == '900_b1_0'|| tkind == '900_b2_0'|| tkind == '900_b1_1'|| tkind == '900_b2_1'||tkind == '900_b3_0'|| tkind == '900_b4_0'|| tkind == '900_b3_1'|| tkind == '900_b4_1') {//옷장
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">문짝상태</div>';
			conts += '<button id="900_b1_aa" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_b1_aa\')">문짝표시</button><button id="900_b1_bb" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_b1_bb\')">문짝숨김</button>';
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">하부장형태(문짝색상)</div>';
			conts += '<button id="900_b1" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_b1\')">일반형(G)</button><button id="900_b2" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_b2\')">일반형(DG)</button>';
			conts += '<button id="900_b3" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_b3\')">서랍형(G)</button><button id="900_b4" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_b4\')">서랍형(DG)</button>';
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">옵션</div>';
			conts += '<button id="900_a_a" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_a_a\')">바지걸이</button><button id="900_a_b" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_a_b\')">타이걸이</button>';			
			conts += '<button id="900_a_c" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_a_c\')">공용CC경1</button><button id="900_a_d" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_a_d\')">공용CC경2</button>';	
			
			$('.pop-layer').css('height', 475);
			$('.pop-layer').css('margin-top', '-170px');
		}else if (tkind == '900_d1_0'|| tkind == '900_d2_0'|| tkind == '900_d1_1'|| tkind == '900_d2_1'||tkind == '900_d3_0'|| tkind == '900_d4_0'|| tkind == '900_d3_1'|| tkind == '900_d4_1') {//이불장
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">문짝상태</div>';
			conts += '<button id="900_d1_aa" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_d1_aa\')">문짝표시</button><button id="900_d1_bb" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_d1_bb\')">문짝숨김</button>';
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">하부장형태(문짝색상)</div>';
			conts += '<button id="900_d1" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_d1\')">일반형(G)</button><button id="900_d2" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_d2\')">일반형(DG)</button>';
			conts += '<button id="900_d3" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_d3\')">서랍형(G)</button><button id="900_d4" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_d4\')">서랍형(DG)</button>';
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">옵션</div>';
			//conts += '<button id="900_d_e" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_d_e\')" style="width:140px;">1단서랍</button><button id="900_d_a" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_d_a\')">코디서랍</button><button id="900_d_b" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_d_b\')">타이걸이</button>';			
			conts += '</button><button id="900_d_a" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_d_a\')">코디서랍</button><button id="900_d_b" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_d_b\')">타이걸이</button>';
			conts += '<button id="900_d_c" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_d_c\')">공용CC경1</button><button id="900_d_d" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_d_d\')">공용CC경2</button>';	
			
			$('.pop-layer').css('height', 475);
			$('.pop-layer').css('margin-top', '-170px');
		}else if (tkind == '900_e1_0'|| tkind == '900_e2_0'|| tkind == '900_e1_1'|| tkind == '900_e2_1'||tkind == '900_e3_0'|| tkind == '900_e4_0'|| tkind == '900_e3_1'|| tkind == '900_e4_1') {//칸막이장
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">문짝상태</div>';
			conts += '<button id="900_e1_aa" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_e1_aa\')">문짝표시</button><button id="900_e1_bb" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_e1_bb\')">문짝숨김</button>';
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">하부장형태(문짝색상)</div>';
			conts += '<button id="900_e1" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_e1\')">일반형(G)</button><button id="900_e2" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_e2\')">일반형(DG)</button>';
			conts += '<button id="900_e3" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_e3\')">서랍형(G)</button><button id="900_e4" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_e4\')">서랍형(DG)</button>';
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">옵션</div>';
			conts += '<button id="900_e_a" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_e_a\')">3단서랍</button><button id="900_e_b" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_e_b\')">타이걸이</button>';			
			conts += '<button id="900_e_c" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_e_c\')">공용CC경1</button><button id="900_e_d" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_e_d\')">공용CC경2</button>';	
			
			$('.pop-layer').css('height', 475);
			$('.pop-layer').css('margin-top', '-170px');
		}else if (tkind == '900_c1' || tkind == '900_c2'|| tkind == '900_c3') {
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">문짝색상</div>';
			conts += '<button id="900_c1" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_c1\')">그레이</button><button id="900_c2" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_c2\')">다크그레이</button><button id="900_c3" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'900_c3\')" style="width:140px;">문짝없음</button>';
			
			$('.pop-layer').css('height', 250);
			$('.pop-layer').css('margin-top', '-105px');
		}else if (tkind == '600_c1' || tkind == '600_c2'|| tkind == '600_c3') {
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">문짝색상</div>';
			conts += '<button id="600_c1" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'600_c1\')">그레이</button><button id="600_c2" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'600_c2\')">다크그레이</button><button id="600_c3" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'600_c3\')" style="width:140px;">문짝없음</button>';
			
			$('.pop-layer').css('height', 250);
			$('.pop-layer').css('margin-top', '-105px');
		}else if (tkind == '450_a1_0'|| tkind == '450_a2_0'|| tkind == '450_a1_1'|| tkind == '450_a2_1') {
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">문짝상태</div>';
			conts += '<button id="450_a1_aa" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'450_a1_aa\')">문짝표시</button><button id="450_a1_bb" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'450_a1_bb\')">문짝숨김</button>';
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">문짝색상</div>';
			conts += '<button id="450_a1" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'450_a1\')">그레이</button><button id="450_a2" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'450_a2\')">다크그레이</button>';
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">옵션</div>';
			conts += '<button id="450_a1_a" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'450_a1_a\')">옷걸이봉';
			
			$('.pop-layer').css('height', 350);
			$('.pop-layer').css('margin-top', '-105px');
		}
		
		$('#optionBox').html(conts);
		$('#'+tkind).addClass('choiceBtn');
		
		if (tkind == '1000_a1_1' || tkind == '1000_a2_1' || tkind == '1000_a1_0' || tkind == '1000_a2_0' ||tkind == '1000_a3_1' || tkind == '1000_a4_1' || tkind == '1000_a3_0' || tkind == '1000_a4_0' ) {
			switch (tkind) {//옷장
			case '1000_a1_0': $('#1000_a1_aa').addClass('choiceBtn'); $('#1000_a1').addClass('choiceBtn'); break;
			case '1000_a1_1': $('#1000_a1_bb').addClass('choiceBtn'); $('#1000_a1').addClass('choiceBtn'); break;
			case '1000_a2_0': $('#1000_a1_aa').addClass('choiceBtn'); $('#1000_a2').addClass('choiceBtn'); break;
			case '1000_a2_1': $('#1000_a1_bb').addClass('choiceBtn'); $('#1000_a2').addClass('choiceBtn'); break;
			case '1000_a3_0': $('#1000_a1_aa').addClass('choiceBtn'); $('#1000_a3').addClass('choiceBtn'); break;
			case '1000_a3_1': $('#1000_a1_bb').addClass('choiceBtn'); $('#1000_a3').addClass('choiceBtn'); break;
			case '1000_a4_0': $('#1000_a1_aa').addClass('choiceBtn'); $('#1000_a4').addClass('choiceBtn'); break;
			case '1000_a4_1': $('#1000_a1_bb').addClass('choiceBtn'); $('#1000_a4').addClass('choiceBtn'); break;
			}
			if($('#'+tway+'opa'+tcnt).hasClass('WPH-5105_a')){ $('#1000_a_a').addClass('choiceBtn');}
			if($('#'+tway+'opb'+tcnt).hasClass('BWO-0001_a')){ $('#1000_a_b').addClass('choiceBtn');}
			if($('#'+tway+'opc'+tcnt).hasClass('MRC-0001_a')){ $('#1000_a_c').addClass('choiceBtn');}
			if($('#'+tway+'opd'+tcnt).hasClass('MRC-0002_a')){ $('#1000_a_d').addClass('choiceBtn');}
			
		}
		if (tkind == '1000_k1_1' || tkind == '1000_k2_1' || tkind == '1000_k1_0' || tkind == '1000_k2_0'||tkind == '1000_k3_1' || tkind == '1000_k4_1' || tkind == '1000_k3_0' || tkind == '1000_k4_0' ) {
			switch (tkind) {
			case '1000_k1_0': $('#1000_k1_aa').addClass('choiceBtn'); $('#1000_k1').addClass('choiceBtn'); break;
			case '1000_k1_1': $('#1000_k1_bb').addClass('choiceBtn'); $('#1000_k1').addClass('choiceBtn'); break;
			case '1000_k2_0': $('#1000_k1_aa').addClass('choiceBtn'); $('#1000_k2').addClass('choiceBtn'); break;
			case '1000_k2_1': $('#1000_k1_bb').addClass('choiceBtn'); $('#1000_k2').addClass('choiceBtn'); break;
			case '1000_k3_0': $('#1000_k1_aa').addClass('choiceBtn'); $('#1000_k3').addClass('choiceBtn'); break;
			case '1000_k3_1': $('#1000_k1_bb').addClass('choiceBtn'); $('#1000_k3').addClass('choiceBtn'); break;
			case '1000_k4_0': $('#1000_k1_aa').addClass('choiceBtn'); $('#1000_k4').addClass('choiceBtn'); break;
			case '1000_k4_1': $('#1000_k1_bb').addClass('choiceBtn'); $('#1000_k4').addClass('choiceBtn'); break;
			}
			if($('#'+tway+'opa'+tcnt).hasClass('WCD-5105B_a')){ $('#1000_k_a').addClass('choiceBtn');}
			if($('#'+tway+'opb'+tcnt).hasClass('BWO-0001_a')){ $('#1000_k_b').addClass('choiceBtn');}
			if($('#'+tway+'opc'+tcnt).hasClass('MRC-0001_a')){ $('#1000_k_c').addClass('choiceBtn');}
			if($('#'+tway+'opd'+tcnt).hasClass('MRC-0002_a')){ $('#1000_k_d').addClass('choiceBtn');}
			if($('#'+tway+'ope'+tcnt).hasClass('WCDZ-5014B_a')){ $('#1000_k_e').addClass('choiceBtn');}
			
		}
		if (tkind == '1000_l1_1' || tkind == '1000_l2_1' || tkind == '1000_l1_0' || tkind == '1000_l2_0'||tkind == '1000_l3_1' || tkind == '1000_l4_1' || tkind == '1000_l3_0' || tkind == '1000_l4_0' ) {
			switch (tkind) {
			case '1000_l1_0': $('#1000_l1_aa').addClass('choiceBtn'); $('#1000_l1').addClass('choiceBtn'); break;
			case '1000_l1_1': $('#1000_l1_bb').addClass('choiceBtn'); $('#1000_l1').addClass('choiceBtn'); break;
			case '1000_l2_0': $('#1000_l1_aa').addClass('choiceBtn'); $('#1000_l2').addClass('choiceBtn'); break;
			case '1000_l2_1': $('#1000_l1_bb').addClass('choiceBtn'); $('#1000_l2').addClass('choiceBtn'); break;
			case '1000_l3_0': $('#1000_l1_aa').addClass('choiceBtn'); $('#1000_l3').addClass('choiceBtn'); break;
			case '1000_l3_1': $('#1000_l1_bb').addClass('choiceBtn'); $('#1000_l3').addClass('choiceBtn'); break;
			case '1000_l4_0': $('#1000_l1_aa').addClass('choiceBtn'); $('#1000_l4').addClass('choiceBtn'); break;
			case '1000_l4_1': $('#1000_l1_bb').addClass('choiceBtn'); $('#1000_l4').addClass('choiceBtn'); break;
			}
			if($('#'+tway+'opa'+tcnt).hasClass('WCD-5105D_a')){ $('#1000_l_a').addClass('choiceBtn');}
			if($('#'+tway+'opb'+tcnt).hasClass('BWO-0001_a')){ $('#1000_l_b').addClass('choiceBtn');}
			if($('#'+tway+'opc'+tcnt).hasClass('MRC-0001_a')){ $('#1000_l_c').addClass('choiceBtn');}
			if($('#'+tway+'opd'+tcnt).hasClass('MRC-0002_a')){ $('#1000_l_d').addClass('choiceBtn');}
			
		}
		if (tkind == '900_b1_1' || tkind == '900_b2_1' || tkind == '900_b1_0' || tkind == '900_b2_0'||tkind == '900_b3_1' || tkind == '900_b4_1' || tkind == '900_b3_0' || tkind == '900_b4_0'  ) {
			switch (tkind) {
			case '900_b1_0': $('#900_b1_aa').addClass('choiceBtn'); $('#900_b1').addClass('choiceBtn'); break;
			case '900_b1_1': $('#900_b1_bb').addClass('choiceBtn'); $('#900_b1').addClass('choiceBtn'); break;
			case '900_b2_0': $('#900_b1_aa').addClass('choiceBtn'); $('#900_b2').addClass('choiceBtn'); break;
			case '900_b2_1': $('#900_b1_bb').addClass('choiceBtn'); $('#900_b2').addClass('choiceBtn'); break;
			case '900_b3_0': $('#900_b1_aa').addClass('choiceBtn'); $('#900_b3').addClass('choiceBtn'); break;
			case '900_b3_1': $('#900_b1_bb').addClass('choiceBtn'); $('#900_b3').addClass('choiceBtn'); break;
			case '900_b4_0': $('#900_b1_aa').addClass('choiceBtn'); $('#900_b4').addClass('choiceBtn'); break;
			case '900_b4_1': $('#900_b1_bb').addClass('choiceBtn'); $('#900_b4').addClass('choiceBtn'); break;
			}
			if($('#'+tway+'opa'+tcnt).hasClass('WPH-4105_a')){ $('#900_a_a').addClass('choiceBtn');}
			if($('#'+tway+'opb'+tcnt).hasClass('BWO-0001_a')){ $('#900_a_b').addClass('choiceBtn');}
			if($('#'+tway+'opc'+tcnt).hasClass('MRC-0001_a')){ $('#900_a_c').addClass('choiceBtn');}
			if($('#'+tway+'opd'+tcnt).hasClass('MRC-0002_a')){ $('#900_a_d').addClass('choiceBtn');}
			
		}
		if (tkind == '900_d1_1' || tkind == '900_d2_1' || tkind == '900_d1_0' || tkind == '900_d2_0'||tkind == '900_d3_1' || tkind == '900_d4_1' || tkind == '900_d3_0' || tkind == '900_d4_0' ) {
			switch (tkind) {
			case '900_d1_0': $('#900_d1_aa').addClass('choiceBtn'); $('#900_d1').addClass('choiceBtn'); break;
			case '900_d1_1': $('#900_d1_bb').addClass('choiceBtn'); $('#900_d1').addClass('choiceBtn'); break;
			case '900_d2_0': $('#900_d1_aa').addClass('choiceBtn'); $('#900_d2').addClass('choiceBtn'); break;
			case '900_d2_1': $('#900_d1_bb').addClass('choiceBtn'); $('#900_d2').addClass('choiceBtn'); break;
			case '900_d3_0': $('#900_d1_aa').addClass('choiceBtn'); $('#900_d3').addClass('choiceBtn'); break;
			case '900_d3_1': $('#900_d1_bb').addClass('choiceBtn'); $('#900_d3').addClass('choiceBtn'); break;
			case '900_d4_0': $('#900_d1_aa').addClass('choiceBtn'); $('#900_d4').addClass('choiceBtn'); break;
			case '900_d4_1': $('#900_d1_bb').addClass('choiceBtn'); $('#900_d4').addClass('choiceBtn'); break;
			}
			if($('#'+tway+'opa'+tcnt).hasClass('WCD-4105B_a')){ $('#900_d_a').addClass('choiceBtn');}
			if($('#'+tway+'opb'+tcnt).hasClass('BWO-0001_a')){ $('#900_d_b').addClass('choiceBtn');}
			if($('#'+tway+'opc'+tcnt).hasClass('MRC-0001_a')){ $('#900_d_c').addClass('choiceBtn');}
			if($('#'+tway+'opd'+tcnt).hasClass('MRC-0002_a')){ $('#900_d_d').addClass('choiceBtn');}
			if($('#'+tway+'ope'+tcnt).hasClass('WCDZ-4014B_a')){ $('#900_d_e').addClass('choiceBtn');}
		}
		if (tkind == '900_e1_1' || tkind == '900_e2_1' || tkind == '900_e1_0' || tkind == '900_e2_0'||tkind == '900_e3_1' || tkind == '900_e4_1' || tkind == '900_e3_0' || tkind == '900_e4_0' ) {
			switch (tkind) {
			case '900_e1_0': $('#900_e1_aa').addClass('choiceBtn'); $('#900_e1').addClass('choiceBtn'); break;
			case '900_e1_1': $('#900_e1_bb').addClass('choiceBtn'); $('#900_e1').addClass('choiceBtn'); break;
			case '900_e2_0': $('#900_e1_aa').addClass('choiceBtn'); $('#900_e2').addClass('choiceBtn'); break;
			case '900_e2_1': $('#900_e1_bb').addClass('choiceBtn'); $('#900_e2').addClass('choiceBtn'); break;
			case '900_e3_0': $('#900_e1_aa').addClass('choiceBtn'); $('#900_e3').addClass('choiceBtn'); break;
			case '900_e3_1': $('#900_e1_bb').addClass('choiceBtn'); $('#900_e3').addClass('choiceBtn'); break;
			case '900_e4_0': $('#900_e1_aa').addClass('choiceBtn'); $('#900_e4').addClass('choiceBtn'); break;
			case '900_e4_1': $('#900_e1_bb').addClass('choiceBtn'); $('#900_e4').addClass('choiceBtn'); break;
			}
			if($('#'+tway+'opa'+tcnt).hasClass('WCD-4105D_a')){ $('#900_e_a').addClass('choiceBtn');}
			if($('#'+tway+'opb'+tcnt).hasClass('BWO-0001_a')){ $('#900_e_b').addClass('choiceBtn');}
			if($('#'+tway+'opc'+tcnt).hasClass('MRC-0001_a')){ $('#900_e_c').addClass('choiceBtn');}
			if($('#'+tway+'opd'+tcnt).hasClass('MRC-0002_a')){ $('#900_e_d').addClass('choiceBtn');}
			
		}
		if (tkind == '450_a1_1' || tkind == '450_a2_1' || tkind == '450_a1_0' || tkind == '450_a2_0' ) {
			switch (tkind) {
			case '450_a1_0': $('#450_a1_aa').addClass('choiceBtn'); $('#450_a1').addClass('choiceBtn'); break;
			case '450_a1_1': $('#450_a1_bb').addClass('choiceBtn'); $('#450_a1').addClass('choiceBtn'); break;
			case '450_a2_0': $('#450_a1_aa').addClass('choiceBtn'); $('#450_a2').addClass('choiceBtn'); break;
			case '450_a2_1': $('#450_a1_bb').addClass('choiceBtn'); $('#450_a2').addClass('choiceBtn'); break;
			}
			if($('#'+tway+'opa'+tcnt).hasClass('BP-4105_a')){ $('#450_a1_a').addClass('choiceBtn');}
		}
		
		if (tkind == '1000_d1' || tkind == '1000_d2'|| tkind == '1000_d3'  || tkind == '1000_d1_a' || tkind == '1000_d2_a'|| tkind == '1000_d3_a') {
			switch (tkind) {
			case '1000_d1': $('#1000_d1').addClass('choiceBtn'); $('#1000_da').addClass('choiceBtn'); break;
			case '1000_d2': $('#1000_d2').addClass('choiceBtn'); $('#1000_da').addClass('choiceBtn'); break;
			case '1000_d3': $('#1000_d3').addClass('choiceBtn'); $('#1000_da').addClass('choiceBtn'); break;
			case '1000_d1_a': $('#1000_d1').addClass('choiceBtn'); $('#1000_d1_a').addClass('choiceBtn'); break;
			case '1000_d2_a': $('#1000_d2').addClass('choiceBtn'); $('#1000_d1_a').addClass('choiceBtn'); break;
			case '1000_d3_a': $('#1000_d3').addClass('choiceBtn'); $('#1000_d1_a').addClass('choiceBtn'); break;
			}
		}else if(tkind == '1000_c1' || tkind == '1000_c1_a' ||tkind == '1000_c1_b' ||tkind == '1000_c1_c' || tkind == '1000_c2'|| tkind == '1000_c2_a'|| tkind == '1000_c2_b'|| tkind == '1000_c2_c'|| tkind == '1000_c3'|| tkind == '1000_c3_a'|| tkind == '1000_c3_b'|| tkind == '1000_c3_c'){
			switch (tkind) {
			case '1000_c1': $('#1000_c1').addClass('choiceBtn'); $('#1000_ca').addClass('choiceBtn');$('#1000_cb').addClass('choiceBtn'); break;
			case '1000_c2': $('#1000_c2').addClass('choiceBtn'); $('#1000_ca').addClass('choiceBtn');$('#1000_cb').addClass('choiceBtn'); break;
			case '1000_c3': $('#1000_c3').addClass('choiceBtn'); $('#1000_ca').addClass('choiceBtn');$('#1000_cb').addClass('choiceBtn'); break;
			case '1000_c1_a': $('#1000_c1').addClass('choiceBtn'); $('#1000_c_a').addClass('choiceBtn'); $('#1000_cb').addClass('choiceBtn'); break;
			case '1000_c1_b': $('#1000_c1').addClass('choiceBtn'); $('#1000_ca').addClass('choiceBtn'); $('#1000_c_b').addClass('choiceBtn');break;
			case '1000_c1_c': $('#1000_c1').addClass('choiceBtn'); $('#1000_c_a').addClass('choiceBtn'); $('#1000_c_b').addClass('choiceBtn');break;
			case '1000_c2_a': $('#1000_c2').addClass('choiceBtn'); $('#1000_c_a').addClass('choiceBtn');  $('#1000_cb').addClass('choiceBtn');break;
			case '1000_c2_b': $('#1000_c2').addClass('choiceBtn'); $('#1000_ca').addClass('choiceBtn'); $('#1000_c_b').addClass('choiceBtn');break;
			case '1000_c2_c': $('#1000_c2').addClass('choiceBtn'); $('#1000_c_a').addClass('choiceBtn'); $('#1000_c_b').addClass('choiceBtn');break;
			case '1000_c3_a': $('#1000_c3').addClass('choiceBtn'); $('#1000_c_a').addClass('choiceBtn');  $('#1000_cb').addClass('choiceBtn');break;
			case '1000_c3_b': $('#1000_c3').addClass('choiceBtn'); $('#1000_ca').addClass('choiceBtn'); $('#1000_c_b').addClass('choiceBtn');break;
			case '1000_c3_c': $('#1000_c3').addClass('choiceBtn'); $('#1000_c_a').addClass('choiceBtn'); $('#1000_c_b').addClass('choiceBtn');break;
			}
		}
	}else if ($('#kind').val() == 'dr_a005' ) {
		if (tkind == '1000_f1' || tkind == '1000_f1_a'|| tkind == '1000_f1_b'|| tkind == '1000_f1_c') {
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">조명옷걸이</div>';
			conts +='<button id="1000_fa" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_fa\')">없음</button><button id="1000_f_a" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_f_a\')">추가</button>';	
			conts += '<div style="width: 100%; margin-top: 10px; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">유리도어</div>';
			conts +='<button id="1000_fb" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_fb\')">없음</button><button id="1000_f_b" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_f_b\')">추가</button>';
			
			$('.pop-layer').css('height', 280);
			$('.pop-layer').css('margin-top', '-140px');
		}else if (tkind == '1000_e1' || tkind == '1000_e1_a'|| tkind == '1000_e1_b'|| tkind == '1000_e1_c') {
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">조명옷걸이</div>';
			conts +='<button id="1000_ea" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_ea\')">없음</button><button id="1000_e_a" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_e_a\')">추가</button>';	
			conts += '<div style="width: 100%; margin-top: 10px; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">유리도어</div>';
			conts +='<button id="1000_eb" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_eb\')">없음</button><button id="1000_e_b" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_e_b\')">추가</button>';
			
			$('.pop-layer').css('height', 280);
			$('.pop-layer').css('margin-top', '-140px');
		}else if (tkind == '1000_g1' || tkind == '1000_g1_a'|| tkind == '1000_g1_b'|| tkind == '1000_g1_c') {
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">조명옷걸이</div>';
			conts +='<button id="1000_ga" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_ga\')">없음</button><button id="1000_g_a" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_g_a\')">추가</button>';	
			conts += '<div style="width: 100%; margin-top: 10px; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">유리도어</div>';
			conts +='<button id="1000_gb" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_gb\')">없음</button><button id="1000_g_b" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_g_b\')">추가</button>';
			
			$('.pop-layer').css('height', 280);
			$('.pop-layer').css('margin-top', '-140px');
		} else if (tkind == '1000_i1' || tkind == '1000_i1_a'|| tkind == '1000_i1_b'|| tkind == '1000_i1_c') {
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">조명옷걸이</div>';
			conts +='<button id="1000_ia" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_ia\')">없음</button><button id="1000_i_a" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_i_a\')">추가</button>';	
			conts += '<div style="width: 100%; margin-top: 10px; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">유리도어</div>';
			conts +='<button id="1000_ib" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_ib\')">없음</button><button id="1000_i_b" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_i_b\')">추가</button>';
			
			$('.pop-layer').css('height', 280);
			$('.pop-layer').css('margin-top', '-140px');
		}else if (tkind == '1000_j1' || tkind == '1000_j1_a'|| tkind == '1000_j1_b'|| tkind == '1000_j1_c') {
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">조명옷걸이</div>';
			conts +='<button id="1000_ja" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_ja\')">없음</button><button id="1000_j_a" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_j_a\')">추가</button>';	
			conts += '<div style="width: 100%; margin-top: 10px; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">유리도어</div>';
			conts +='<button id="1000_jb" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_jb\')">없음</button><button id="1000_j_b" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_j_b\')">추가</button>';
			
			$('.pop-layer').css('height', 280);
			$('.pop-layer').css('margin-top', '-140px');
		}else if (tkind == '1000_h1' || tkind == '1000_h1_a'|| tkind == '1000_h3'|| tkind == '1000_h3_a') {
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">몸통구성</div>';
			conts += '<button id="1000_h1" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_h1\')">기본</button><button id="1000_h3" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_h3\')">4단서랍</button>';
			conts += '<div style="width: 100%; margin-top: 10px; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">옵션</div>';
			conts +='<div id="change_h1"><button id="1000_ha" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_ha\')">없음</button><button id="1000_h_a" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_h_a\')">유리도어</button></div>';

			$('.pop-layer').css('height', 320);
			$('.pop-layer').css('margin-top', '-140px');			
		}else if ( tkind == '1000_h2'|| tkind == '1000_h2_a'|| tkind == '1000_h2_b') {
			conts += '<div style="width: 100%; margin-top: 10px; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">옵션</div>';
			conts +='<div id="change_h1"><button id="1000_h2" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_h2\')" style="width:140px;">기본</button><button id="1000_h2_a" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_h2_a\')">옵션거울</button><button id="1000_h2_b" class="drOption" onclick="changeDrKind(\'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'1000_h2_b\')">유리도어</button></div>';

			$('.pop-layer').css('height', 280);
			$('.pop-layer').css('margin-top', '-140px');			
		}else if (tkind == 'corner_a1' || tkind == 'corner_a2'|| tkind == 'corner_a3'||tkind == 'corner_a1_a' || tkind == 'corner_a2_a'|| tkind == 'corner_a3_a'||tkind == 'corner_a1_b' || tkind == 'corner_a2_b'|| tkind == 'corner_a3_b'||tkind == 'corner_a1_c' || tkind == 'corner_a2_c'|| tkind == 'corner_a3_c') {
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">옷걸이구성</div>';
			conts += '<button id="corner_a1" class="drOption" onclick="changeDrKind(\'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a1\')" style="width:140px;">상하부장</button><button id="corner_a2" class="drOption" onclick="changeDrKind(\'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a2\')">상부장</button><button id="corner_a3" class="drOption" onclick="changeDrKind(\'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\',\'corner_a3\')">하부장</button>';
			conts += '<div style="width: 100%; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">조명옷걸이</div>';
			conts +='<button id="corner_aa" class="drOption" onclick="changeDrKind(\'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_aa\')">없음</button><button id="corner_a_a" class="drOption" onclick="changeDrKind(\'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a_a\')">추가</button>';	
			conts += '<div style="width: 100%; margin-top: 10px; margin-bottom: 10px; color: #4F9CD0; font-weight: bold; font-size: 10pt;">유리도어</div>';
			conts +='<button id="corner_ab" class="drOption" onclick="changeDrKind(\'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_ab\')">없음</button><button id="corner_a_b" class="drOption" onclick="changeDrKind(\'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a_b\')">추가</button>';
			
			$('.pop-layer').css('height', 280);
			$('.pop-layer').css('margin-top', '-140px');			
		}

		$('#optionBox').html(conts);
		$('#'+tkind).addClass('choiceBtn');
		
		if (tkind == '1000_e1' || tkind == '1000_e1_a'|| tkind == '1000_e1_b'|| tkind == '1000_e1_c') {
			switch (tkind) {
			case '1000_e1': $('#1000_ea').addClass('choiceBtn'); $('#1000_eb').addClass('choiceBtn'); break;
			case '1000_e1_a': $('#1000_e_a').addClass('choiceBtn'); $('#1000_eb').addClass('choiceBtn'); break;
			case '1000_e1_b': $('#1000_ea').addClass('choiceBtn'); $('#1000_e_b').addClass('choiceBtn'); break;
			case '1000_e1_c': $('#1000_e_a').addClass('choiceBtn'); $('#1000_e_b').addClass('choiceBtn'); break;
			}
		}else if (tkind == '1000_f1' || tkind == '1000_f1_a'|| tkind == '1000_f1_b'|| tkind == '1000_f1_c') {
			switch (tkind) {
			case '1000_f1': $('#1000_fa').addClass('choiceBtn'); $('#1000_fb').addClass('choiceBtn'); break;
			case '1000_f1_a': $('#1000_f_a').addClass('choiceBtn'); $('#1000_fb').addClass('choiceBtn'); break;
			case '1000_f1_b': $('#1000_fa').addClass('choiceBtn'); $('#1000_f_b').addClass('choiceBtn'); break;
			case '1000_f1_c': $('#1000_f_a').addClass('choiceBtn'); $('#1000_f_b').addClass('choiceBtn'); break;
			}
		}else if (tkind == '1000_g1' || tkind == '1000_g1_a'|| tkind == '1000_g1_b'|| tkind == '1000_g1_c') {
			switch (tkind) {
			case '1000_g1': $('#1000_ga').addClass('choiceBtn'); $('#1000_gb').addClass('choiceBtn'); break;
			case '1000_g1_a': $('#1000_g_a').addClass('choiceBtn'); $('#1000_gb').addClass('choiceBtn'); break;
			case '1000_g1_b': $('#1000_ga').addClass('choiceBtn'); $('#1000_g_b').addClass('choiceBtn'); break;
			case '1000_g1_c': $('#1000_g_a').addClass('choiceBtn'); $('#1000_g_b').addClass('choiceBtn'); break;
			}
		}else if (tkind == '1000_i1' || tkind == '1000_i1_a'|| tkind == '1000_i1_b'|| tkind == '1000_i1_c') {
			switch (tkind) {
			case '1000_i1': $('#1000_ia').addClass('choiceBtn'); $('#1000_ib').addClass('choiceBtn'); break;
			case '1000_i1_a': $('#1000_i_a').addClass('choiceBtn'); $('#1000_ib').addClass('choiceBtn'); break;
			case '1000_i1_b': $('#1000_ia').addClass('choiceBtn'); $('#1000_i_b').addClass('choiceBtn'); break;
			case '1000_i1_c': $('#1000_i_a').addClass('choiceBtn'); $('#1000_i_b').addClass('choiceBtn'); break;
			}
		}else if (tkind == '1000_j1' || tkind == '1000_j1_a'|| tkind == '1000_j1_b'|| tkind == '1000_j1_c') {
			switch (tkind) {
			case '1000_j1': $('#1000_ja').addClass('choiceBtn'); $('#1000_jb').addClass('choiceBtn'); break;
			case '1000_j1_a': $('#1000_j_a').addClass('choiceBtn'); $('#1000_jb').addClass('choiceBtn'); break;
			case '1000_j1_b': $('#1000_ja').addClass('choiceBtn'); $('#1000_j_b').addClass('choiceBtn'); break;
			case '1000_j1_c': $('#1000_j_a').addClass('choiceBtn'); $('#1000_j_b').addClass('choiceBtn'); break;
			}
		}else if (tkind == '1000_h1' || tkind == '1000_h1_a'|| tkind == '1000_h3'|| tkind == '1000_h3_a') {
			switch (tkind) {
			case '1000_h1': $('#1000_h1').addClass('choiceBtn'); $('#1000_ha').addClass('choiceBtn'); break;
			case '1000_h1_a': $('#1000_h1').addClass('choiceBtn'); $('#1000_h_a').addClass('choiceBtn'); break;
			case '1000_h3': $('#1000_h3').addClass('choiceBtn'); $('#1000_ha').addClass('choiceBtn'); break;
			case '1000_h3_a': $('#1000_h3').addClass('choiceBtn'); $('#1000_h_a').addClass('choiceBtn'); break;
			}
			
		}else if (tkind == '1000_h2'|| tkind == '1000_h2_a'|| tkind == '1000_h2_b') {
			switch (tkind) {
			case '1000_h2': $('#1000_h2').addClass('choiceBtn'); break;
			case '1000_h2_a': $('#1000_h2a').addClass('choiceBtn'); break;
			case '1000_h2_b':  $('#1000_h2b').addClass('choiceBtn'); break;
			}
		}else if (tkind == 'corner_a1' || tkind == 'corner_a2'|| tkind == 'corner_a3'||tkind == 'corner_a1_a' || tkind == 'corner_a2_a'|| tkind == 'corner_a3_a'||tkind == 'corner_a1_b' || tkind == 'corner_a2_b'|| tkind == 'corner_a3_b'||tkind == 'corner_a1_c' || tkind == 'corner_a2_c'|| tkind == 'corner_a3_c') {
			switch (tkind) {
			case 'corner_a1': $('#corner_a1').addClass('choiceBtn'); $('#corner_aa').addClass('choiceBtn');$('#corner_ab').addClass('choiceBtn'); break;
			case 'corner_a2': $('#corner_a2').addClass('choiceBtn'); $('#corner_aa').addClass('choiceBtn');$('#corner_ab').addClass('choiceBtn'); break;
			case 'corner_a3': $('#corner_a3').addClass('choiceBtn'); $('#corner_aa').addClass('choiceBtn');$('#corner_ab').addClass('choiceBtn'); break;
			case 'corner_a1_a': $('#corner_a1').addClass('choiceBtn'); $('#corner_a_a').addClass('choiceBtn');$('#corner_ab').addClass('choiceBtn'); break;
			case 'corner_a2_a': $('#corner_a2').addClass('choiceBtn'); $('#corner_a_a').addClass('choiceBtn');$('#corner_ab').addClass('choiceBtn'); break;
			case 'corner_a3_a': $('#corner_a3').addClass('choiceBtn'); $('#corner_a_a').addClass('choiceBtn');$('#corner_ab').addClass('choiceBtn'); break;
			case 'corner_a1_b': $('#corner_a1').addClass('choiceBtn'); $('#corner_aa').addClass('choiceBtn');$('#corner_a_b').addClass('choiceBtn'); break;
			case 'corner_a2_b': $('#corner_a2').addClass('choiceBtn'); $('#corner_aa').addClass('choiceBtn');$('#corner_a_b').addClass('choiceBtn'); break;
			case 'corner_a3_b': $('#corner_a3').addClass('choiceBtn'); $('#corner_aa').addClass('choiceBtn');$('#corner_a_b').addClass('choiceBtn'); break;
			case 'corner_a1_c': $('#corner_a1').addClass('choiceBtn'); $('#corner_a_a').addClass('choiceBtn');$('#corner_a_b').addClass('choiceBtn'); break;
			case 'corner_a2_c': $('#corner_a2').addClass('choiceBtn'); $('#corner_a_a').addClass('choiceBtn');$('#corner_a_b').addClass('choiceBtn'); break;
			case 'corner_a3_c': $('#corner_a3').addClass('choiceBtn'); $('#corner_a_a').addClass('choiceBtn');$('#corner_a_b').addClass('choiceBtn'); break;
			}
		}
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
			$('#'+tway+'id'+tcnt).append('<div id='+tway+'opa'+tcnt + '  class="'+optionA + '" style="background-image: url(\'/images/wardrobe/dressroom/' + wk + '/WPH-5105_a.png\');"></div>');						
		}else if($('#1000_a1_aa').hasClass('choiceBtn')&&$('#1000_a_a').hasClass('choiceBtn')){							
			$('div').remove('#'+tway+'opa'+tcnt);						
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opa'+tcnt + '  class="'+optionA + '"></div>');						
		}else if(!$('#1000_a_a').hasClass('choiceBtn')){$('div').remove('#'+tway+'opa'+tcnt);}							
									
		if($('#1000_a1_bb').hasClass('choiceBtn')&&$('#1000_a_b').hasClass('choiceBtn')){							
			$('div').remove('#'+tway+'opb'+tcnt);						
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opb'+tcnt + '  class="'+optionB + '" style="background-image: url(\'/images/wardrobe/dressroom/' + wk + '/BWO-0001_a.png\');"></div>');						
		}else if($('#1000_a1_aa').hasClass('choiceBtn')&&$('#1000_a_b').hasClass('choiceBtn')){							
			$('div').remove('#'+tway+'opb'+tcnt);						
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opb'+tcnt + '  class="'+optionB + '"></div>');						
		}else if(!$('#1000_a_b').hasClass('choiceBtn')){$('div').remove('#'+tway+'opb'+tcnt);}							
									
		if($('#1000_a1_bb').hasClass('choiceBtn')&&$('#1000_a_c').hasClass('choiceBtn')){							
			$('div').remove('#'+tway+'opc'+tcnt);						
			$('div').remove('#'+tway+'opd'+tcnt);						
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opc'+tcnt + '  class="'+optionC + '" style="background-image: url(\'/images/wardrobe/dressroom/' + wk + '/MRC-0001_a.png\');"></div>');						
		}else if($('#1000_a1_aa').hasClass('choiceBtn')&&$('#1000_a_c').hasClass('choiceBtn')){							
			$('div').remove('#'+tway+'opc'+tcnt);						
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opc'+tcnt + '  class="'+optionC + '"></div>');						
		}else if(!$('#1000_a_c').hasClass('choiceBtn')){$('div').remove('#'+tway+'opc'+tcnt);}							
									
		if($('#1000_a1_bb').hasClass('choiceBtn')&&$('#1000_a_d').hasClass('choiceBtn')){							
			$('div').remove('#'+tway+'opc'+tcnt);						
			$('div').remove('#'+tway+'opd'+tcnt);						
			$('#'+tway+'id'+tcnt).append('<div  id='+tway+'opd'+tcnt + '  class="'+optionD + '" style="background-image: url(\'/images/wardrobe/dressroom/' + wk + '/MRC-0002_a.png\');"></div>');						
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
									
	}else if (tkind == '1000_c1' ||tkind == '1000_c1_a' || tkind == '1000_c2'|| tkind == '1000_c3'  || tkind == '1000_ca'||tkind == '1000_cb'|| tkind == '1000_c_a'|| tkind == '1000_c_b') {								
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
		$('#'+tway).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_l1_a.png\')');							
		$('#'+tcnt).attr('class', 'dr_bcorner_r1');							
		$('#'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'' + tkind + '\')');							
		$('#'+tcnt).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_r1_a.png\')');							
		$('.drOption').removeClass('choiceBtn');							
		$('#'+tkind).addClass('choiceBtn');							
	} else if (tkind == 'corner_2') {								
		$('#'+twidth).removeClass('dr_bcorner_1').addClass('dr_bcorner_2');							
		$('#'+tway).attr('class', 'dr_bcorner_l2');							
		$('#'+tway).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'' + tkind + '\')');							
		$('#'+tway).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_l2_a.png\')');							
		$('#'+tcnt).attr('class', 'dr_bcorner_r2');							
		$('#'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'' + tkind + '\')');							
		$('#'+tcnt).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_r2_a.png\')');							
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
			$('.dr_bcorner_l1').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a1_a.png\')');						
			$('#'+tcnt).attr('class', 'dr_bcorner_r1');						
			$('#'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a1\')');						
			$('.dr_bcorner_r1').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a1_a.png\')');						
		} else if ($('#corner_a2').hasClass('choiceBtn') && $('#corner_aa').hasClass('choiceBtn')&& $('#corner_ab').hasClass('choiceBtn')) {							
			$('#'+twidth).removeClass('dr_bcorner_1').addClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');						
			$('#'+tway).attr('class', 'dr_bcorner_l2');						
			$('#'+tway).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a2\')');						
			$('.dr_bcorner_l2').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a2_a.png\')');						
			$('#'+tcnt).attr('class', 'dr_bcorner_r2');						
			$('#'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a2\')');						
			$('.dr_bcorner_r2').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a2_a.png\')');						
		} else if ($('#corner_a3').hasClass('choiceBtn') && $('#corner_aa').hasClass('choiceBtn')&& $('#corner_ab').hasClass('choiceBtn')) {							
			$('#'+twidth).removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').addClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');						
			$('#'+tway).attr('class', 'dr_bcorner_l3');						
			$('#'+tway).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a3\')');						
			$('.dr_bcorner_l3').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a3_a.png\')');						
			$('#'+tcnt).attr('class', 'dr_bcorner_r3');						
			$('#'+tway).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a3\')');						
			$('.dr_bcorner_r3').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a3_a.png\')');						
		}else if ($('#corner_a1').hasClass('choiceBtn') && $('#corner_a_a').hasClass('choiceBtn')&& $('#corner_ab').hasClass('choiceBtn')) {							
			$('#'+twidth).removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').addClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');						
			$('#'+tway).attr('class', 'dr_bcorner_l1_a');						
			$('#'+tway).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a1_a\')');						
			$('.dr_bcorner_l1_a').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a1_a_a.png\')');						
			$('#'+tcnt).attr('class', 'dr_bcorner_r1_a');						
			$('#'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a1_a\')');						
			$('.dr_bcorner_r1_a').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a1_a_a.png\')');						
		}else if ($('#corner_a2').hasClass('choiceBtn') && $('#corner_a_a').hasClass('choiceBtn')&& $('#corner_ab').hasClass('choiceBtn')) {							
			$('#'+twidth).removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').addClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');						
			$('#'+tway).attr('class', 'dr_bcorner_l2_a');						
			$('#'+tway).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a2_a\')');						
			$('.dr_bcorner_l2_a').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a2_a_a.png\')');						
			$('#'+tcnt).attr('class', 'dr_bcorner_r2_a');						
			$('#'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a2_a\')');						
			$('.dr_bcorner_r2_a').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a2_a_a.png\')');						
		}else if ($('#corner_a3').hasClass('choiceBtn') && $('#corner_a_a').hasClass('choiceBtn')&& $('#corner_ab').hasClass('choiceBtn')) {							
			$('#'+twidth).removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').addClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');						
			$('#'+tway).attr('class', 'dr_bcorner_l3_a');						
			$('#'+tway).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a3_a\')');						
			$('.dr_bcorner_l3_a').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a3_a_a.png\')');						
			$('#'+tcnt).attr('class', 'dr_bcorner_r3_a');						
			$('#'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a3_a\')');						
			$('.dr_bcorner_r3_a').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a3_a_a.png\')');						
		}else if ($('#corner_a1').hasClass('choiceBtn') && $('#corner_aa').hasClass('choiceBtn')&& $('#corner_a_b').hasClass('choiceBtn')) {							
			$('#'+twidth).removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').addClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');						
			$('#'+tway).attr('class', 'dr_bcorner_l1_b');						
			$('#'+tway).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a1_b\')');						
			$('.dr_bcorner_l1_b').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a1_b_a.png\')');						
			$('#'+tcnt).attr('class', 'dr_bcorner_r1_b');						
			$('#'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a1_b\')');						
			$('.dr_bcorner_r1_b').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a1_b_a.png\')');						
		}else if ($('#corner_a2').hasClass('choiceBtn') && $('#corner_aa').hasClass('choiceBtn')&& $('#corner_a_b').hasClass('choiceBtn')) {							
			$('#'+twidth).removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').addClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');						
			$('#'+tway).attr('class', 'dr_bcorner_l2_b');						
			$('#'+tway).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a2_b\')');						
			$('.dr_bcorner_l2_b').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a2_b_a.png\')');						
			$('#'+tcnt).attr('class', 'dr_bcorner_r2_b');						
			$('#'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a2_b\')');						
			$('.dr_bcorner_r2_b').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a2_b_a.png\')');						
		}else if ($('#corner_a3').hasClass('choiceBtn') && $('#corner_aa').hasClass('choiceBtn')&& $('#corner_a_b').hasClass('choiceBtn')) {							
			$('#'+twidth).removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').addClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');						
			$('#'+tway).attr('class', 'dr_bcorner_l3_b');						
			$('#'+tway).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a3_b\')');						
			$('.dr_bcorner_l3_b').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a3_b_a.png\')');						
			$('#'+tcnt).attr('class', 'dr_bcorner_r3_b');						
			$('#'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a3_b\')');						
			$('.dr_bcorner_r3_b').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a3_b_a.png\')');						
		}else if ($('#corner_a1').hasClass('choiceBtn') && $('#corner_a_a').hasClass('choiceBtn')&& $('#corner_a_b').hasClass('choiceBtn')) {							
			$('#'+twidth).removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').addClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');						
			$('#'+tway).attr('class', 'dr_bcorner_l1_c');						
			$('#'+tway).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a1_c\')');						
			$('.dr_bcorner_l1_c').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a1_c_a.png\')');						
			$('#'+tcnt).attr('class', 'dr_bcorner_r1_c');						
			$('#'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a1_c\')');						
			$('.dr_bcorner_r1_c').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a1_c_a.png\')');						
		}else if ($('#corner_a2').hasClass('choiceBtn') && $('#corner_a_a').hasClass('choiceBtn')&& $('#corner_a_b').hasClass('choiceBtn')) {							
			$('#'+twidth).removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').addClass('dr_bcorner_2_c').removeClass('dr_bcorner_3_c');						
			$('#'+tway).attr('class', 'dr_bcorner_l2_c');						
			$('#'+tway).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a2_c\')');						
			$('.dr_bcorner_l2_c').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a2_c_a.png\')');						
			$('#'+tcnt).attr('class', 'dr_bcorner_r2_c');						
			$('#'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a2_c\')');						
			$('.dr_bcorner_r2_c').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a2_c_a.png\')');						
		}else if ($('#corner_a3').hasClass('choiceBtn') && $('#corner_a_a').hasClass('choiceBtn')&& $('#corner_a_b').hasClass('choiceBtn')) {							
			$('#'+twidth).removeClass('dr_bcorner_1').removeClass('dr_bcorner_2').removeClass('dr_bcorner_3').removeClass('dr_bcorner_1_a').removeClass('dr_bcorner_2_a').removeClass('dr_bcorner_3_a').removeClass('dr_bcorner_1_b').removeClass('dr_bcorner_2_b').removeClass('dr_bcorner_3_b').removeClass('dr_bcorner_1_c').removeClass('dr_bcorner_2_c').addClass('dr_bcorner_3_c');						
			$('#'+tway).attr('class', 'dr_bcorner_l3_c');						
			$('#'+tway).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a3_c\')');						
			$('.dr_bcorner_l3_c').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a3_c_a.png\')');						
			$('#'+tcnt).attr('class', 'dr_bcorner_r3_c');						
			$('#'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', \'' + tcnt + '\', \'' + twidth + '\', \'corner_a3_c\')');						
			$('.dr_bcorner_r3_c').css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/bcorner_a3_c_a.png\')');						
		}							
	}  else {								
		$('#'+tway+'id'+tcnt).attr('class', 'dr_b'+tkind);							
		$('#'+tway+'id'+tcnt).attr('onclick', 'revisionDr(\'layer2\', \'' + tway + '\', ' + tcnt + ', ' + twidth + ', \'' + tkind + '\')');							
		$('.dr_b'+tkind).css('background', 'url(\'/images/wardrobe/dressroom/' + wk + '/b' + tkind + '_a.png\')');							
		$('.drOption').removeClass('choiceBtn');							
		$('#'+tkind).addClass('choiceBtn');							
	}								
									
	$('#tableItem').html('');								
}									



function clickWork() {
	$('#tableItem').html('');
	
	work();
	getItem();
}

var arrayBody = '';
var arrayDoor = '';
var arrayJabara = '';
var arrayJabara_sub = '';
var valuePillar = 0;
var valueEP = '';
var arrayOption = '';

var dataDtl_body = '';
var dataDtl_option = '';
function work() {
	var wt = $('#type').val();
	if (wt == 'slide') {
		arrayBody = '';
		arrayDoor = '';
		arrayJabara = '';
		valuePillar = 0;
		valueEP = '';
		arrayOption = '';
		
		var dFirstId = firstId;
		var dLastId = lastId;
		var nextId = $('#pillarR').attr('id');
		var chkId = false;
		var wcnt = 0;
		
		var n;
		while (!chkId) {
			nextId = $('#'+nextId).next().attr('id');
			
			if ($('#'+nextId).hasClass('b1140')) {
				n = 1140;
			} else {
				n = 978;
			}
			
			
			switch ($('#'+nextId+' .k'+n).html().substring(0, 4)) {
				case '옷<sp': arrayBody += 'b' + n + '_s1,'; dataDtl_body += n + '_옷,'; break;
				case '이<sp': arrayBody += 'b' + n + '_s2,'; dataDtl_body += n + '_이,'; break;
				case '칸<sp': arrayBody += 'b' + n + '_s3,'; dataDtl_body += n + '_칸,'; break;
				case '옷(I)': arrayBody += 'b' + n + '_s5,'; dataDtl_body += n + '_옷(I),'; break;
				case '이(I)': arrayBody += 'b' + n + '_s6,'; dataDtl_body += n + '_이(I),'; break;
				case '칸(I)': arrayBody += 'b' + n + '_s7,'; dataDtl_body += n + '_칸(I),'; break;
				case '옷(서)': arrayBody += 'b' + n + '_s1,'; dataDtl_body += n + '_옷(서),'; break;
				case '이(서)': arrayBody += 'b' + n + '_s2,'; dataDtl_body += n + '_이(서),'; break;
				case '칸(서)': arrayBody += 'b' + n + '_s3,'; dataDtl_body += n + '_칸(서),'; break;
			
				
			}
			// 저장 불러오기용
			if ($('#'+nextId).attr('class').replace('b1140', '').replace('b978', '') == '')
				dataDtl_option += wcnt + '_none,';
			else
				dataDtl_option += wcnt + '_' + $('#'+nextId).attr('class').replace('b1140 ', '').replace('b978 ', '').replace(' ', '@') + ',';
			
			wcnt++;
			
			if ($('#'+nextId).next().attr('id') == null)
				chkId = true;
		}
		
		arrayDoor = 'd'+n+'_s'+wcnt;
		if (wcnt == 2) arrayDoor += '_'+sd_door_lr;
		
		nextId = $('#jPillarR').attr('id');
		chkId = false;
		
		while (!chkId) {
			nextId = $('#'+nextId).next().attr('id');
			
			arrayJabara += $('#'+nextId).attr('class') + ',';
			
			if ($('#'+nextId).next().attr('id') == null)
				chkId = true;
		}
		
/*		if (isBI) {
			valuePillar = (ipSpace1 - sumDiv) / 2;
			if (valuePillar == 15) valuePillar = 70;
		} else {
			valuePillar = 70;
			if ($('#btnEP_L').hasClass('choiceBtn'))
				valueEP += 'L';
			if ($('#btnEP_R').hasClass('choiceBtn'))
				valueEP += 'R';
		}*/
		
		if (isBI){
			if ($('#btnEP_L').hasClass('choiceBtn')){
				valuePillar = (ipSpace1 - sumDiv) -70;
				valueEP += 'L';
			}
			if ($('#btnEP_R').hasClass('choiceBtn')){
				valuePillar = (ipSpace1 - sumDiv) -70;
				valueEP += 'R';
			}
			if(!$('#btnEP_L').hasClass('choiceBtn')&&!$('#btnEP_R').hasClass('choiceBtn')){
				valuePillar = (ipSpace1 - sumDiv) / 2;
			}
		}	
		else {
			valuePillar = 1;
			if ($('#btnEP_L').hasClass('choiceBtn'))
				valueEP += 'L';
			if ($('#btnEP_R').hasClass('choiceBtn'))
				valueEP += 'R';
		}
		
		
		
		
		var tempArray = new Array();
		var tochk = false;
		for (i = 0; i < optionArray.length; i++) {
			tochk = false;
			for (j = 0; j < tempArray.length; j++) {
				if (optionArray[i].item_cd == tempArray[j])
					tochk = true;
			}
			if (!tochk)
				tempArray.push(optionArray[i].item_cd);
		}
		
		var oidx = 0;
		for (i = 0; i < tempArray.length; i++) {
			oidx = $('#'+tempArray[i]).val();
			for (j = 0; j < oidx; j++) {
				arrayOption += tempArray[i] + ',';
			}
		}
		
	} else if (wt == 'builtin') {		
		arrayBody = '';
		arrayDoor = '';
		arrayJabara = '';
		arrayJabara_sub = '';
		valuePillar = 0;
		valueEP = '';
		arrayOption = '';
		
		var dFirstId = firstId;
		var dLastId = lastId;
		var nextId = $('#pillarR').attr('id');
		var chkId = false;
		var wcnt = 0;
		
		while (true) {
			if ($('#'+dFirstId).hasClass('b260_a') || $('#'+dFirstId).hasClass('b260_b'))
				dFirstId = $('#'+dFirstId).next().attr('id');
			else
				break;
		}
		while (true) {
			if ($('#'+dLastId).hasClass('b260_a') || $('#'+dLastId).hasClass('b260_b'))
				dLastId = $('#'+dLastId).prev().attr('id');
			else
				break;
		}
		
		while (!chkId) {
			nextId = $('#'+nextId).next().attr('id');
			
			if ($('#'+nextId).hasClass('b1000') || $('#'+nextId).hasClass('b900')) {
				var n1, n2;
				if ($('#'+nextId).hasClass('b1000')) {
					n1 = 1000; n2 = 500;
				} else {
					n1 = 900; n2 = 450;
				}
				
				if ($('#kind').val() == 'bi_a018') {
					switch ($('#'+nextId+' .k'+n1).html().substring(0, 4)) {
						case '옷<sp': arrayBody += 'b' + n1 + '_s1,'; break;
						case '이<sp':
							if ($('#'+nextId).hasClass('s4'))
								arrayBody += 'b' + n1 + '_s4,';
							else
								arrayBody += 'b' + n1 + '_s2,'; break;
						case '칸<sp': arrayBody += 'b' + n1 + '_s3,'; break;
												
						case '옷(서)': arrayBody += 'b' + n1 + '_s5,'; break;
						case '이(서)': arrayBody += 'b' + n1 + '_s6,'; break;
						case '칸(서)': arrayBody += 'b' + n1 + '_s7,'; break;
					}
				}else if ($('#kind').val() == 'bi_a019') {
					switch ($('#'+nextId+' .k'+n1).html().substring(0, 4)) {
					case '옷<sp': arrayBody += 'b' + n1 + '_s1,'; break;
					case '이<sp':
						if ($('#'+nextId).hasClass('s4'))
							arrayBody += 'b' + n1 + '_s4,';
						else
							arrayBody += 'b' + n1 + '_s2,'; break;
					case '칸<sp': arrayBody += 'b' + n1 + '_s3,'; break;
											
					case '옷(서)': arrayBody += 'b' + n1 + '_s5,'; break;
					case '이(서)': arrayBody += 'b' + n1 + '_s6,'; break;
					case '칸(서)': arrayBody += 'b' + n1 + '_s7,'; break;
				}
			} 
				else {
					switch ($('#'+nextId+' .k'+n1).html().substring(0, 4)) {
					case '옷<sp': arrayBody += 'b' + n1 + '_s1,'; break;
					case '이<sp':
						if ($('#'+nextId).hasClass('s4'))
							arrayBody += 'b' + n1 + '_s4,';
						else
							arrayBody += 'b' + n1 + '_s2,'; break;
					case '칸<sp': arrayBody += 'b' + n1 + '_s3,'; break;
					
					case '옷(I)': arrayBody += 'b' + n1 + '_s5,'; break;
					case '이(I)': arrayBody += 'b' + n1 + '_s6,'; break;
					case '칸(I)': arrayBody += 'b' + n1 + '_s7,'; break;
					
					case '옷(서)': arrayBody += 'b' + n1 + '_s1,'; break;
					case '이(서)': arrayBody += 'b' + n1 + '_s2,'; break;
					case '칸(서)': arrayBody += 'b' + n1 + '_s3,'; break;
					}
				}
				if (typeDr == 'LR') {
					if (nextId == dFirstId) {
						if ($('#'+nextId+'_r1').hasClass('drLR2')) {
							if($('#kind').val() == 'bi_a012'&&$('#'+nextId+' .k'+n1).html().substring(0, 4)=='옷(I)'||$('#kind').val() == 'bi_a012'&&$('#'+nextId+' .k'+n1).html().substring(0, 4)=='이(I)'||$('#kind').val() == 'bi_a012'&&$('#'+nextId+' .k'+n1).html().substring(0, 4)=='칸(I)'){
								arrayDoor += 'd' + n2 + '_lr2b,';
							}else{
							arrayDoor += 'd' + n2 + '_lr2,';
							}
						} else if ($('#'+nextId+'_r1').hasClass('drC2')) {
							if($('#'+nextId+' .k'+n1).html().substring(0, 4)=='옷(서)'||$('#'+nextId+' .k'+n1).html().substring(0, 4)=='이(서)'||$('#'+nextId+' .k'+n1).html().substring(0, 4)=='칸(서)'){
								arrayDoor += 'd' + n2 + '_c2a,';
							}else if($('#kind').val() == 'bi_a012'&&$('#'+nextId+' .k'+n1).html().substring(0, 4)=='옷(I)'||$('#kind').val() == 'bi_a012'&&$('#'+nextId+' .k'+n1).html().substring(0, 4)=='이(I)'||$('#kind').val() == 'bi_a012'&&$('#'+nextId+' .k'+n1).html().substring(0, 4)=='칸(I)'){
								arrayDoor += 'd' + n2 + '_c2b,';
							}else{
							arrayDoor += 'd' + n2 + '_c2,';
							}
						}
						if ($('#'+nextId+'_r2').hasClass('drLR2')) {
							if($('#kind').val() == 'bi_a012'&&$('#'+nextId+' .k'+n1).html().substring(0, 4)=='옷(I)'||$('#kind').val() == 'bi_a012'&&$('#'+nextId+' .k'+n1).html().substring(0, 4)=='이(I)'||$('#kind').val() == 'bi_a012'&&$('#'+nextId+' .k'+n1).html().substring(0, 4)=='칸(I)'){
								arrayDoor += 'd' + n2 + '_lr2b,';
							}else{
							arrayDoor += 'd' + n2 + '_lr2,';
							}
						} else if ($('#'+nextId+'_r2').hasClass('drC2')) {
							if($('#'+nextId+' .k'+n1).html().substring(0, 4)=='옷(서)'||$('#'+nextId+' .k'+n1).html().substring(0, 4)=='이(서)'||$('#'+nextId+' .k'+n1).html().substring(0, 4)=='칸(서)'){
								arrayDoor += 'd' + n2 + '_c2a,';
							}else if($('#kind').val() == 'bi_a012'&&$('#'+nextId+' .k'+n1).html().substring(0, 4)=='옷(I)'||$('#kind').val() == 'bi_a012'&&$('#'+nextId+' .k'+n1).html().substring(0, 4)=='이(I)'||$('#kind').val() == 'bi_a012'&&$('#'+nextId+' .k'+n1).html().substring(0, 4)=='칸(I)'){
								arrayDoor += 'd' + n2 + '_c2b,';
							}else{
							arrayDoor += 'd' + n2 + '_c2,';
						}
						} else if ($('#'+nextId+'_r2').hasClass('drLR1')) {
							arrayDoor += 'd' + n2 + '_lr1,';
						} else if ($('#'+nextId+'_r2').hasClass('drC1')) {
							arrayDoor += 'd' + n2 + '_c1,';
						}
					} else if (nextId != dLastId) {
						if ($('#'+nextId+'_r1').hasClass('drC2')) {
							if($('#'+nextId+' .k'+n1).html().substring(0, 4)=='옷(서)'||$('#'+nextId+' .k'+n1).html().substring(0, 4)=='이(서)'||$('#'+nextId+' .k'+n1).html().substring(0, 4)=='칸(서)'){
								arrayDoor += 'd' + n2 + '_c2a,';
							}else if($('#kind').val() == 'bi_a012'&&$('#'+nextId+' .k'+n1).html().substring(0, 4)=='옷(I)'||$('#kind').val() == 'bi_a012'&&$('#'+nextId+' .k'+n1).html().substring(0, 4)=='이(I)'||$('#kind').val() == 'bi_a012'&&$('#'+nextId+' .k'+n1).html().substring(0, 4)=='칸(I)'){
								arrayDoor += 'd' + n2 + '_c2b,';
							}else{
							arrayDoor += 'd' + n2 + '_c2,';
						}
						} else if ($('#'+nextId+'_r1').hasClass('drLR2')) {
							if($('#kind').val() == 'bi_a012'&&$('#'+nextId+' .k'+n1).html().substring(0, 4)=='옷(I)'||$('#kind').val() == 'bi_a012'&&$('#'+nextId+' .k'+n1).html().substring(0, 4)=='이(I)'||$('#kind').val() == 'bi_a012'&&$('#'+nextId+' .k'+n1).html().substring(0, 4)=='칸(I)'){
								arrayDoor += 'd' + n2 + '_lr2b,';
							}else{
							arrayDoor += 'd' + n2 + '_lr2,';
							}
						}
					} else if (nextId == dLastId) {
						if ($('#'+nextId+'_r1').hasClass('drC1')) {
							arrayDoor += 'd' + n2 + '_c1,';
						} else if ($('#'+nextId+'_r1').hasClass('drLR1')) {
							arrayDoor += 'd' + n2 + '_lr1,';
						}
					}
				} else {
					if ($('#'+nextId+'_r1').hasClass('drLR2')) {
						if($('#'+nextId+' .k'+n1).html().substring(0, 4)=='옷(서)'||$('#'+nextId+' .k'+n1).html().substring(0, 4)=='이(서)'||$('#'+nextId+' .k'+n1).html().substring(0, 4)=='칸(서)'){
							arrayDoor += 'd' + n2 + '_lr2a,';
						}else if($('#kind').val() == 'bi_a011'&&$('#'+nextId+' .k'+n1).html().substring(0, 4)=='옷(I)'||$('#kind').val() == 'bi_a011'&&$('#'+nextId+' .k'+n1).html().substring(0, 4)=='이(I)'||$('#kind').val() == 'bi_a011'&&$('#'+nextId+' .k'+n1).html().substring(0, 4)=='칸(I)'){
							arrayDoor += 'd' + n2 + '_lr2b,';
						}else if($('#kind').val() == 'bi_a012'&&$('#'+nextId+' .k'+n1).html().substring(0, 4)=='옷(I)'||$('#kind').val() == 'bi_a012'&&$('#'+nextId+' .k'+n1).html().substring(0, 4)=='이(I)'||$('#kind').val() == 'bi_a012'&&$('#'+nextId+' .k'+n1).html().substring(0, 4)=='칸(I)'){
							arrayDoor += 'd' + n2 + '_lr2b,';
						}else if($('#kind').val() == 'bi_a016'&&$('#'+nextId+' .k'+n1).html().substring(0, 4)=='옷(I)'||$('#kind').val() == 'bi_a016'&&$('#'+nextId+' .k'+n1).html().substring(0, 4)=='이(I)'||$('#kind').val() == 'bi_a016'&&$('#'+nextId+' .k'+n1).html().substring(0, 4)=='칸(I)'){
							arrayDoor += 'd' + n2 + '_lr2b,';
						}else{
							arrayDoor += 'd' + n2 + '_lr2,';
						}
					} else if ($('#'+nextId+'_r1').hasClass('drC2')) {
						if($('#'+nextId+' .k'+n1).html().substring(0, 4)=='옷(서)'||$('#'+nextId+' .k'+n1).html().substring(0, 4)=='이(서)'||$('#'+nextId+' .k'+n1).html().substring(0, 4)=='칸(서)'){
							arrayDoor += 'd' + n2 + '_c2a,';
						}else if($('#kind').val() == 'bi_a012'&&$('#'+nextId+' .k'+n1).html().substring(0, 4)=='옷(I)'||$('#kind').val() == 'bi_a012'&&$('#'+nextId+' .k'+n1).html().substring(0, 4)=='이(I)'||$('#kind').val() == 'bi_a012'&&$('#'+nextId+' .k'+n1).html().substring(0, 4)=='칸(I)'){
							arrayDoor += 'd' + n2 + '_c2b,';
						}else{
						arrayDoor += 'd' + n2 + '_c2,';
						}
					} else if ($('#'+nextId+'_r1').hasClass('drMCR')) {
						arrayDoor += 'd' + n2 + '_mcr,';
					} else if ($('#'+nextId+'_r1').hasClass('drLCM')) {
						arrayDoor += 'd' + n2 + '_lcm,';
					}
				}
			} else if ($('#'+nextId).hasClass('b500') || $('#'+nextId).hasClass('b450')) {
				var nn;
				if ($('#'+nextId).hasClass('b500')) {
					nn = 500;
				} else {
					nn = 450;
				}
				switch ($('#'+nextId+' .k'+nn).html().substring(0, 4)) {
				case '반<sp': arrayBody += 'b' + nn + '_s1,'; break;
				case '반(서)': arrayBody += 'b' + nn + '_s2,'; break;
				case '반(I)': arrayBody += 'b' + nn + '_s3,'; break;
				}
				if (typeDr == 'LR') {
					if (nextId == dFirstId) {
						if ($('#'+nextId+'_r').hasClass('drLR2')) {	
							arrayDoor += 'd' + nn + '_lr2,';
						} else if ($('#'+nextId+'_r').hasClass('drC2')) {
							arrayDoor += 'd' + nn + '_c2,';
						}
					} else if (nextId != dLastId) {
						if ($('#'+nextId+'_r').hasClass('drC1')) {
							if($('#'+nextId+' .k'+nn).html().substring(0, 4)=='반(서)'){
								arrayDoor += 'd' + nn + '_c1a,';
							}else{
							arrayDoor += 'd' + nn + '_c1,';
						}
						} else if ($('#'+nextId+'_r').hasClass('drLR1')) {
							arrayDoor += 'd' + nn + '_lr1,';
						}	
					}
				} else {
					if ($('#'+nextId+'_r').hasClass('drMCR')) {
						arrayDoor += 'd' + nn + '_c1,';
					} else if ($('#'+nextId+'_r').hasClass('drC1')) {
						if($('#'+nextId+' .k'+nn).html().substring(0, 4)=='반(서)'){
							arrayDoor += 'd' + nn + '_c1a,';
						}else{
						arrayDoor += 'd' + nn + '_c1,';
						}
					} else if ($('#'+nextId+'_r').hasClass('drC2')) {
						arrayDoor += 'd' + nn + '_c1,';
					} else if ($('#'+nextId+'_r').hasClass('drLR1')) {
						if($('#'+nextId+' .k'+nn).html().substring(0, 4)=='반(서)'){
							arrayDoor += 'd' + nn + '_lr1a,';
						}else{
						arrayDoor += 'd' + nn + '_lr1,';
						}
					} else if ($('#'+nextId+'_r').hasClass('drLR2')) {
						arrayDoor += 'd' + nn + '_lr1,';
					} else if ($('#'+nextId+'_r').hasClass('drLCM')) {
						arrayDoor += 'd' + nn + '_lr1,';
					}
				}
			} else if ($('#'+nextId).hasClass('b260_a')) {
				arrayBody += 'b260_s1,';
			} else if ($('#'+nextId).hasClass('b260_b')) {
				arrayBody += 'b260_s2,';
			}
			
			wcnt++;
			
			if ($('#'+nextId).next().attr('id') == null)
				chkId = true;
		}
		
		nextId = $('#jPillarR').attr('id');
		chkId = false;
		
		while (!chkId) {
			nextId = $('#'+nextId).next().attr('id');
			
			arrayJabara += $('#'+nextId).attr('class') + ',';
			
			if ($('#'+nextId).next().attr('id') == null)
				chkId = true;
		}
		
		nextId = $('#jabara_sub_cri').attr('id');
		chkId = false;
		
		while (!chkId) {
			nextId = $('#'+nextId).next().attr('id');
			
			arrayJabara_sub += $('#'+nextId).attr('class') + ',';
			
			if ($('#'+nextId).next().attr('id') == null)
				chkId = true;
		}
		
		if (isBI){
			if ($('#btnEP_L').hasClass('choiceBtn')){
				valuePillar = (ipSpace1 - sumDiv) -70;
				valueEP += 'L';
			}
			if ($('#btnEP_R').hasClass('choiceBtn')){
				valuePillar = (ipSpace1 - sumDiv) -70;
				valueEP += 'R';
			}
			if(!$('#btnEP_L').hasClass('choiceBtn')&&!$('#btnEP_R').hasClass('choiceBtn')){
				valuePillar = (ipSpace1 - sumDiv) / 2;
			}
		}	
		else {
			valuePillar = 1;
			if ($('#btnEP_L').hasClass('choiceBtn'))
				valueEP += 'L';
			if ($('#btnEP_R').hasClass('choiceBtn'))
				valueEP += 'R';
		}
		
		var tempArray = new Array();
		var tochk = false;
		for (i = 0; i < optionArray.length; i++) {
			tochk = false;
			for (j = 0; j < tempArray.length; j++) {
				if (optionArray[i].item_cd == tempArray[j])
					tochk = true;
			}
			if (!tochk)
				tempArray.push(optionArray[i].item_cd);
		}
		
		var oidx = 0;
		for (i = 0; i < tempArray.length; i++) {
			oidx = $('#'+tempArray[i]).val();
			for (j = 0; j < oidx; j++) {
				arrayOption += tempArray[i] + ',';
			}
		}
	} else if (wt == 'dressroom') {
		arrayBody = '';
		var nextId = '';
		if ($('#kind').val() =='dr_a004') {
			if (bf_sum > 0) {
				nextId = 'epR';
				
				while (true) {
					nextId = $('#'+nextId).next().attr('id');
					if (nextId == null) break;
					
					arrayBody += $('#'+nextId).attr('class').replace('dr_', '').replace('_0', '').replace('_1', '')+ ',';
				}
			}
		}else{
			if (bf_sum > 0) {
				nextId = 'bf_cri';
				
				while (true) {
					nextId = $('#'+nextId).next().attr('id');
					if (nextId == null) break;
					
					arrayBody += $('#'+nextId).attr('class').replace('dr_', '') + ',';
				}
			}
		}
		
		if (bl_sum > 0) {
			nextId = 'bl_cri';
			
			while (true) {
				nextId = $('#'+nextId).next().attr('id');
				if (nextId == null) break;
				
				arrayBody += $('#'+nextId).attr('class').replace('dr_', '') + ',';
			}
		}
		if (br_sum > 0) {
			nextId = 'br_cri';
			
			while (true) {
				nextId = $('#'+nextId).next().attr('id');
				if (nextId == null) break;
				
				arrayBody += $('#'+nextId).attr('class').replace('dr_', '') + ',';
			}
		}
		if (bb_sum != 0) {
			nextId = 'bb_cri';
			
			while (true) {
				nextId = $('#'+nextId).next().attr('id');
				if (nextId == null) break;
				
				arrayBody += $('#'+nextId).attr('class').replace('dr_', '') + ',';
			}
		}
		var i=0;
		while (i<50) {
				nextId = 'fid'+i;
				
				while (true) {
					nextId = $('#'+nextId).next().attr('id');
					if (nextId == null) break;
					
					arrayBody += $('#'+nextId).attr('class').replace('_a', '') + ',';
				}
				i++
			}
	
		if ($('#kind').val() =='dr_a004') {
				 if($('#ep_l').hasClass('choiceBtn')&&$('#ep_r').hasClass('choiceBtn')){
					 	arrayBody +='pep_lr,pep_lr,'
					}else if((!$('#ep_l').hasClass('choiceBtn')&&$('#ep_r').hasClass('choiceBtn'))||($('#ep_l').hasClass('choiceBtn')&&!$('#ep_r').hasClass('choiceBtn'))){
						arrayBody +='pep_lr,';
					}
		}
		 if ($('#kind').val() != 'dr_a005' ) {
			if ($('#dcorner1').hasClass('on_corner') && $('#dcorner1').hasClass('dr_bcorner_1'))
				arrayBody += 'bcorner_1,';
			else if ($('#dcorner1').hasClass('on_corner') && $('#dcorner1').hasClass('dr_bcorner_2'))
				arrayBody += 'bcorner_2,';
			if ($('#dcorner2').hasClass('on_corner') && $('#dcorner2').hasClass('dr_bcorner_1'))
				arrayBody += 'bcorner_1,';
			else if ($('#dcorner2').hasClass('on_corner') && $('#dcorner2').hasClass('dr_bcorner_2'))
				arrayBody += 'bcorner_2,';
			if ($('#dcorner3').hasClass('on_corner') && $('#dcorner3').hasClass('dr_bcorner_1'))
				arrayBody += 'bcorner_1,';
			else if ($('#dcorner3').hasClass('on_corner') && $('#dcorner3').hasClass('dr_bcorner_2'))
				arrayBody += 'bcorner_2,';
			if ($('#dcorner4').hasClass('on_corner') && $('#dcorner4').hasClass('dr_bcorner_1'))
				arrayBody += 'bcorner_1,';
			else if ($('#dcorner4').hasClass('on_corner') && $('#dcorner4').hasClass('dr_bcorner_2'))
				arrayBody += 'bcorner_2,';
		 }	 else if ($('#kind').val() == 'dr_a005' ) {
			 if($('#dcorner1').hasClass('on_corner') && $('#dcorner1').hasClass('dr_bcorner_1'))
					arrayBody += 'bcorner_a1,';
			 else if ($('#dcorner1').hasClass('on_corner') && $('#dcorner1').hasClass('dr_bcorner_2'))
					arrayBody += 'bcorner_a2,';
			 else if ($('#dcorner1').hasClass('on_corner') && $('#dcorner1').hasClass('dr_bcorner_3'))
					arrayBody += 'bcorner_a3,';
			 else if($('#dcorner1').hasClass('on_corner') && $('#dcorner1').hasClass('dr_bcorner_1_a'))
					arrayBody += 'bcorner_a1_a,';
			 else if ($('#dcorner1').hasClass('on_corner') && $('#dcorner1').hasClass('dr_bcorner_2_a'))
					arrayBody += 'bcorner_a2_a,';
			 else if ($('#dcorner1').hasClass('on_corner') && $('#dcorner1').hasClass('dr_bcorner_3_a'))
					arrayBody += 'bcorner_a3_a,';
			 else if($('#dcorner1').hasClass('on_corner') && $('#dcorner1').hasClass('dr_bcorner_1_b'))
					arrayBody += 'bcorner_a1_b,';
			 else if ($('#dcorner1').hasClass('on_corner') && $('#dcorner1').hasClass('dr_bcorner_2_b'))
					arrayBody += 'bcorner_a2_b,';
			 else if ($('#dcorner1').hasClass('on_corner') && $('#dcorner1').hasClass('dr_bcorner_3_b'))
					arrayBody += 'bcorner_a3_b,';
			 else if($('#dcorner1').hasClass('on_corner') && $('#dcorner1').hasClass('dr_bcorner_1_c'))
					arrayBody += 'bcorner_a1_c,';
			 else if ($('#dcorner1').hasClass('on_corner') && $('#dcorner1').hasClass('dr_bcorner_2_c'))
					arrayBody += 'bcorner_a2_c,';
			 else if ($('#dcorner1').hasClass('on_corner') && $('#dcorner1').hasClass('dr_bcorner_3_c'))
					arrayBody += 'bcorner_a3_c,';
			 if($('#dcorner2').hasClass('on_corner') && $('#dcorner2').hasClass('dr_bcorner_1'))
					arrayBody += 'bcorner_a1,';
			 else if ($('#dcorner2').hasClass('on_corner') && $('#dcorner2').hasClass('dr_bcorner_2'))
					arrayBody += 'bcorner_a2,';
			 else if ($('#dcorner2').hasClass('on_corner') && $('#dcorner2').hasClass('dr_bcorner_3'))
					arrayBody += 'bcorner_a3,';
			 else if($('#dcorner2').hasClass('on_corner') && $('#dcorner2').hasClass('dr_bcorner_1_a'))
					arrayBody += 'bcorner_a1_a,';
			 else if ($('#dcorner2').hasClass('on_corner') && $('#dcorner2').hasClass('dr_bcorner_2_a'))
					arrayBody += 'bcorner_a2_a,';
			 else if ($('#dcorner2').hasClass('on_corner') && $('#dcorner2').hasClass('dr_bcorner_3_a'))
					arrayBody += 'bcorner_a3_a,';
			 else if($('#dcorner2').hasClass('on_corner') && $('#dcorner2').hasClass('dr_bcorner_1_b'))
					arrayBody += 'bcorner_a1_b,';
			 else if ($('#dcorner2').hasClass('on_corner') && $('#dcorner2').hasClass('dr_bcorner_2_b'))
					arrayBody += 'bcorner_a2_b,';
			 else if ($('#dcorner2').hasClass('on_corner') && $('#dcorner2').hasClass('dr_bcorner_3_b'))
					arrayBody += 'bcorner_a3_b,';
			 else if($('#dcorner2').hasClass('on_corner') && $('#dcorner2').hasClass('dr_bcorner_1_c'))
					arrayBody += 'bcorner_a1_c,';
			 else if ($('#dcorner2').hasClass('on_corner') && $('#dcorner2').hasClass('dr_bcorner_2_c'))
					arrayBody += 'bcorner_a2_c,';
			 else if ($('#dcorner2').hasClass('on_corner') && $('#dcorner2').hasClass('dr_bcorner_3_c'))
					arrayBody += 'bcorner_a3_c,';
			 if($('#dcorner3').hasClass('on_corner') && $('#dcorner3').hasClass('dr_bcorner_1'))
					arrayBody += 'bcorner_a1,';
			 else if ($('#dcorner3').hasClass('on_corner') && $('#dcorner3').hasClass('dr_bcorner_2'))
					arrayBody += 'bcorner_a2,';
			 else if ($('#dcorner3').hasClass('on_corner') && $('#dcorner3').hasClass('dr_bcorner_3'))
					arrayBody += 'bcorner_a3,';
			 else if($('#dcorner3').hasClass('on_corner') && $('#dcorner3').hasClass('dr_bcorner_1_a'))
					arrayBody += 'bcorner_a1_a,';
			 else if ($('#dcorner3').hasClass('on_corner') && $('#dcorner3').hasClass('dr_bcorner_2_a'))
					arrayBody += 'bcorner_a2_a,';
			 else if ($('#dcorner3').hasClass('on_corner') && $('#dcorner3').hasClass('dr_bcorner_3_a'))
					arrayBody += 'bcorner_a3_a,';
			 else if($('#dcorner3').hasClass('on_corner') && $('#dcorner3').hasClass('dr_bcorner_1_b'))
					arrayBody += 'bcorner_a1_b,';
			 else if ($('#dcorner3').hasClass('on_corner') && $('#dcorner3').hasClass('dr_bcorner_2_b'))
					arrayBody += 'bcorner_a2_b,';
			 else if ($('#dcorner3').hasClass('on_corner') && $('#dcorner3').hasClass('dr_bcorner_3_b'))
					arrayBody += 'bcorner_a3_b,';
			 else if($('#dcorner3').hasClass('on_corner') && $('#dcorner3').hasClass('dr_bcorner_1_c'))
					arrayBody += 'bcorner_a1_c,';
			 else if ($('#dcorner3').hasClass('on_corner') && $('#dcorner3').hasClass('dr_bcorner_2_c'))
					arrayBody += 'bcorner_a2_c,';
			 else if ($('#dcorner3').hasClass('on_corner') && $('#dcorner3').hasClass('dr_bcorner_3_c'))
					arrayBody += 'bcorner_a3_c,';
			 if($('#dcorner4').hasClass('on_corner') && $('#dcorner4').hasClass('dr_bcorner_1'))
					arrayBody += 'bcorner_a1,';
			 else if ($('#dcorner4').hasClass('on_corner') && $('#dcorner4').hasClass('dr_bcorner_2'))
					arrayBody += 'bcorner_a2,';
			 else if ($('#dcorner4').hasClass('on_corner') && $('#dcorner4').hasClass('dr_bcorner_3'))
					arrayBody += 'bcorner_a3,';
			 else if($('#dcorner4').hasClass('on_corner') && $('#dcorner4').hasClass('dr_bcorner_1_a'))
					arrayBody += 'bcorner_a1_a,';
			 else if ($('#dcorner4').hasClass('on_corner') && $('#dcorner4').hasClass('dr_bcorner_2_a'))
					arrayBody += 'bcorner_a2_a,';
			 else if ($('#dcorner4').hasClass('on_corner') && $('#dcorner4').hasClass('dr_bcorner_3_a'))
					arrayBody += 'bcorner_a3_a,';
			 else if($('#dcorner4').hasClass('on_corner') && $('#dcorner4').hasClass('dr_bcorner_1_b'))
					arrayBody += 'bcorner_a1_b,';
			 else if ($('#dcorner4').hasClass('on_corner') && $('#dcorner4').hasClass('dr_bcorner_2_b'))
					arrayBody += 'bcorner_a2_b,';
			 else if ($('#dcorner4').hasClass('on_corner') && $('#dcorner4').hasClass('dr_bcorner_3_b'))
					arrayBody += 'bcorner_a3_b,';
			 else if($('#dcorner4').hasClass('on_corner') && $('#dcorner4').hasClass('dr_bcorner_1_c'))
					arrayBody += 'bcorner_a1_c,';
			 else if ($('#dcorner4').hasClass('on_corner') && $('#dcorner4').hasClass('dr_bcorner_2_c'))
					arrayBody += 'bcorner_a2_c,';
			 else if ($('#dcorner4').hasClass('on_corner') && $('#dcorner4').hasClass('dr_bcorner_3_c'))
					arrayBody += 'bcorner_a3_c,'; 
		 }
	}
}

function item() {
	var item_grp = '';
	var item_cd = '';
	var item_nm = '';
	var qty = 0;
	var factory_price = 0;
	var retail_price = 0;
}

var itemArray = new Array();
var dh_qty = 0;
function getItem() {
	var type = $('#type').val();
	var kind = $('#kind').val();
	var width = $('#ipSpace1').val();
	var height = $('#ipSpace2').val();
	
	$.ajax({
		url : '/wardrobe/item.json',
		dataType : 'json',
		type : 'get',
		data : {type: type,
					kind : kind,
					width : width,
					height : height,
					body : arrayBody,
					door : arrayDoor,
					jabara : arrayJabara,
					jabara_sub : arrayJabara_sub,
					pillar : valuePillar,
					ep : valueEP,
					option : arrayOption},
		success : function (result) {
	    	itemArray = new Array();
				    	
	    	$.each(result, function(key) {
	    		var list = result[key];
		    	var content = '<table id="tbItem"><thead><tr><th width="118px;">품목</th><th width="198px;">품목명</th><th width="48px;">수량</th><th width="48px;">재고</th><th width="88px;" class="famt number">출고금액</th><th width="88px;" class="ramt number">판매금액</th></tr></thead><tbody>';

		    	var tot_factory = 0;
		    	var tot_retail = 0;
		    	var notot_factory = 0;
		    	var notot_retail = 0;
		    	var nochk = false;
		    	for (i = 0; i < list.length; i++) {
		    		itemArray[i] = new item();
		    		itemArray[i].item_cd = list[i].item_cd;
		    		itemArray[i].qty = list[i].qty;
					    		
		    		if (i == 0 || (i != 0 && list[i].dp1 != list[i-1].dp1)) {
		    			if (list[i].dp1 == '옵션') {
		    				content += '<tr class="rs">';
					    	content += '<td>소계</td>';
					    	content += '<td colspan="3"></td>';
					    	content += '<td class="number famt">' + tot_factory.format() + '</td>';
					    	content += '<td class="number ramt">' + tot_retail.format() + '</td></tr>';
					    	notot_factory = tot_factory;
					    	notot_retail = tot_retail;
					    	nochk = true;
		    			}
					    			
		    			content += '<tr>';
		    			content += '<td colspan="6" class="rh">' + list[i].dp1 + '</td>';
		    			content += '</tr>';
		    		}
		    		
		    		if ((kind == 'dr_a001' && list[i].item_cd == 'DH-0002A2') || (kind == 'dr_a002' && list[i].item_cd == 'DH-0001A2') || (kind == 'dr_a003' && list[i].item_cd == 'DH-0001A2')) {
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
		    		
		    		content += '<tr class="rc">';
		    		content += '<td>' + list[i].item_cd + '</td>';
			   		content += '<td>' + list[i].dp2 + '</td>';
			   		content += '<td class="number">' + list[i].qty + '</td>';
			   		content += '<td id="st' + i + '" class="number st" style="cursor: pointer;';
			   		if (list[i].issue_qty <= 0 || list[i].issue_qty < list[i].qty)
			   			content += ' color: red;';
			   		content += '" onclick="openLayer(event, this.id, \'' + list[i].item_cd + '\');">' + list[i].issue_qty.format() + '</td>';
			   		content += '<td class="number famt">' + list[i].factory_amt.format() + '</td>';
			   		tot_factory += list[i].factory_amt;
			   		content += '<td class="number ramt">' + list[i].retail_amt.format() + '</td>';
			   		tot_retail += list[i].retail_amt;
			   		content += '</tr>';

			   		if ((type == 'slide' || type == 'builtin' || type == 'builtinCombi')&& ((i != list.length - 1 && list[i].dp1 != '옵션' && list[i+1].dp1 == '옵션') || (i == list.length - 1 && list[i].dp1 != '옵션'))) {
			   			var tempContent = ''
			   			tempContent += '<tr class="rc">';
			   			tempContent += '<td></td><td style="font-weight: bold;">재단비용</td><td></td><td></td><td class="number famt">';
			   			if (isBI) {
			   				/*var tempTotFac = 0;
			   				
			   				if (ipSpace1 - sumDiv != 140 && ipSpace1 - sumDiv != 240 && ipSpace1 - sumDiv != 340 && ipSpace1 - sumDiv != 460)
			   					tempTotFac += 39600;
			   				if (ipSpace2 - 2170 != 70 && ipSpace2 - 2170 != 120 && ipSpace2 - 2170 != 170 && ipSpace2 - 2170 != 230)
			   					tempTotFac += 39600;
			   				
		    				tempContent += tempTotFac.format();
		    				tot_factory += tempTotFac;*/
			   				if(kind == 'bi_a013'||kind == 'bi_a014'){
			   				tempContent += '56,100';
			   				tot_factory += 56100;
			   				}else{
			   					tempContent += '79,200';
				   				tot_factory += 79200;
			   				}
		    			} else {
		    				switch(valueEP) {
		    				case 'L': tempContent += '39,600'; tot_factory += 39600; break;
		    				case 'R': tempContent += '39,600'; tot_factory += 39600; break;
		    				case 'LR': tempContent += '79,200'; tot_factory += 79200; break;
		    				}
		    			}
			   			tempContent += '</td><td class="number ramt">';
		    			if (isBI) {
		    				if(kind == 'bi_a013'||kind == 'bi_a014'){
		    					tempContent += '70,000';
			    				tot_retail += 70000;
		    				}else{
		    				tempContent += '100,000';
		    				tot_retail += 100000;
		    				}
		    			} else {
		    				switch(valueEP) {
		    				case 'L': tempContent += '50,000'; tot_retail += 50000; break;
		    				case 'R': tempContent += '50,000'; tot_retail += 50000; break;
		    				case 'LR': tempContent += '100,000'; tot_retail += 100000; break;
		    				}
		    			}
		    			tempContent += '</td>';
		    			tempContent += '</tr>';
		    			
		    			if (!isBI && (!$('#btnEP_L').hasClass('choiceBtn') && !$('#btnEP_R').hasClass('choiceBtn'))) {
				   			tempContent = '';
				   		}
				   		
				   		content += tempContent;
		    		}
		    	}

		    	if (nochk) {
		    		content += '<tr class="rs">';
		    		content += '<td>소계</td>';
		    		content += '<td colspan="3"></td>';
		    		content += '<td class="number famt">' + (tot_factory - notot_factory).format() + '</td>';
		    		content += '<td class="number ramt">' + (tot_retail - notot_retail).format() + '</td></tr>';
		    	}
					    	
		    	content += '<tr class="rt">';
		    	content += '<td>합계</td>';
		    	content += '<td colspan="3"></td>';
		    	content += '<td class="number famt">' + tot_factory.format() + '</td>';
		    	content += '<td class="number ramt">' + tot_retail.format() + '</td></tr>';
					    	
		    	content += '<tr><td colspan="6"><br /></td></tr>';
		    	content += '<tr class="rs" style="background: #FFE08C; cursor: pointer;">';
		    	content += '<td colspan="6" onclick="showSave(\'layer2_s\');return false;">저 장</td>';
		    	content += '</tr>';
		    	content += '</tbody></table>';
					    	
		    	$('#tableItem').html(content);
							
		    	$('.famt').hide();
		    	$('.ramt').attr('colspan', 3);
	    	});
		},
		beforeSend : function() {
			$(".wrap-loading").removeClass("display-none");
		},
	    complete:function() {
	    	$('.wrap-loading').addClass('display-none');
	    },
	    error:function(e) {},
	    timeout:180000
	});
}

function clickDisplayAmt() {
	$('.famt').toggle();
//	if ($('.ramt').attr('colspan') == 2) {
//		$('.ramt').attr('colspan', 1);
//	} else {
//		$('.ramt').attr('colspan', 2);
//	}
}

function openLayer(e, stid, item_cd) {
	var de = document.documentElement;
	var b = document.body;
	var divLeft = e.clientX;
	var divTop = e.clientY;
	var scrollLeft = document.all ? (!de.scrollLeft ? b.scrollLeft : de.scrollLeft) : (window.pageXOffset ? window.pageXOffset : window.scrollX);
	var scrollTop = document.all ? (!de.scrollTop ? b.scrollTop : de.scrollTop) : (window.pageYOffset ? window.pageYOffset : window.scrollY);
	e.stopPropagation();
	
	$.ajax({
		url : '/wardrobe/stock.json',
		dataType : 'json',
		type : 'post',
		data : {item_cd : item_cd},
		success : function (result) {
		   	$.each(result, function(key) {
		   		var list = result[key];
		    	var content = '<table width="166px"><tr><td colspan="3">';
		    	content += item_cd;
		    	content += '</td></tr><tr><td width="50px">재고</td><td width="80px"></td><td width="30px" class="number">';
		    	content += list[0].issue_qty;
		    	content += '</td></tr>';
		    	if (list[0].wk_end_dt != null) {
		    		content += '<tr><td>계획</td><td>';
		    		content += list[0].wk_end_dt.substring(0, 10) + '</td><td class="number">';
		    		content += list[0].sum_wk_ord_qty + '</td></tr>';
		    		for (i = 1; i < list.length; i++) {
		    			content += '<tr><td></td><td>';
		    			content += list[i].wk_end_dt.substring(0, 10) + '</td><td class="number">';
			    		content += list[i].sum_wk_ord_qty + '</td></tr>';
		    		}
		    	} else if (list[0].in_min_dt != null) {
		    		content += '<tr><td>계획</td><td>';
		    		content += list[0].in_min_dt.substring(0, 10) + '</td><td class="number">';
		    		content += list[0].odr_qty + '</td></tr>';
		    		for (i = 1; i < list.length; i++) {
		    			content += '<tr><td></td><td>';
		    			content += list[i].in_min_dt.substring(0, 10) + '</td><td class="number">';
			    		content += list[i].odr_qty + '</td></tr>';
		    		}
		    	}
		    	content += '</table>';
		    	
		    	$('.popupLayer').html(content);

		    	$('.st').css('border', '0');
		    	$('#'+stid).css('border', '1px solid red');
		    	$('.popupLayer').css({
		    		"top": divTop + scrollTop,
		    		"left": divLeft + scrollLeft,
		    		"position": "absolute"
		    	}).show();
		   	});
		},
		beforeSend : function() {
			$(".wrap-loading").removeClass("display-none");
		},
		complete:function() {
			$('.wrap-loading').addClass('display-none');
		},
		error:function(e) {},
		timeout:180000
	});
}
function closeLayer() {
	$('.popupLayer').hide();
	$('.st').css('border', '0');
}

var img_no_dr, img_dr;
var img_above = '', img_forward = '', img_backward = '', img_left = '', img_right = '';
function showSave(el) {
	var temp = $('#' + el);
	var bg = temp.prev().hasClass('bg_s');

	if (bg) {
		$('.layer_s').fadeIn();
	} else {
		temp.fadeIn();
	}

	if (temp.outerHeight() < $(document).height())
		temp.css('margin-top', '-' + temp.outerHeight() / 2 + 'px');
	else
		temp.css('top', '0px');
	if (temp.outerWidth() < $(document).width())
		temp.css('margin-left', '-' + temp.outerWidth() / 2 + 'px');
	else
		temp.css('left', '0px');
	
	var type = $('#type').val();
	if (type == 'slide' || type == 'builtin' || type == 'builtinCombi') {
		showDr = false;
		togDoor();
	    html2canvas(document.getElementById("wardrobe1"), {
	        onrendered: function (canvas) {
	        	img_no_dr = canvas.toDataURL("image/png");
	        }
	    });
	    
	    showDr = true;
	    togDoor();
	    html2canvas(document.getElementById("wardrobe1"), {
	        onrendered: function (canvas) {
	        	img_dr = canvas.toDataURL("image/png");
	        }
	    });
	} else if (type == 'dressroom') {
		if (bf_sum > 0) {
			showArea(event, 'darea1');
			html2canvas(document.getElementById("wardrobe2"), {
		        onrendered: function (canvas) {
		        	img_forward = canvas.toDataURL("image/png");
		        }
		    });
		}
		if (bl_sum > 0) {
			showArea(event, 'darea2');
			html2canvas(document.getElementById("wardrobe2"), {
		        onrendered: function (canvas) {
		        	img_left = canvas.toDataURL("image/png");
		        }
		    });
		}
		if (br_sum > 0) {
			showArea(event, 'darea3');
			html2canvas(document.getElementById("wardrobe2"), {
		        onrendered: function (canvas) {
		        	img_right = canvas.toDataURL("image/png");
		        }
		    });
		}
		if (bb_sum > 0) {
			showArea(event, 'darea4');
			html2canvas(document.getElementById("wardrobe2"), {
		        onrendered: function (canvas) {
		        	img_backward = canvas.toDataURL("image/png");
		        }
		    });
		}
		showArea(event, 'area');
		html2canvas(document.getElementById("wardrobe2"), {
	        onrendered: function (canvas) {
	        	img_above = canvas.toDataURL("image/png");
	        }
	    });
	}

	temp.find('a.cbtn').unbind('click');
	temp.find('a.cbtn').click(function(e) {
		if (!chkSave) {
			if (bg) {
				$('.layer_s').fadeOut();
				$('#title').val('');
				$('#alertSave').html('');
			} else {
				temp.fadeOut();
			}
		}
		chkSave = false;
	});

	$('.layer_s .bg_s').unbind('click');
	$('.layer_s .bg_s').click(function(e) {
		$('.layer_s').fadeOut();
		$('#title').val('');
		$('#alertSave').html('');
	});
}

var chkSave = false;
function saveWardrobe() {
	$('#alertSave').html('');
	
	var title = $('#title').val();
	if (title.trim() == '') {
		$('#alertSave').html('제목을 입력하세요.');
		chkSave = true;
		return false;
	}
	
	var special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
	if (special_pattern.test(title.trim()) == true ) {
		$('#alertSave').html('특수문자는 사용할 수 없습니다.');
		chkSave = true;
	    return false;
	}
	
	var type = $('#type').val();
	var kind = $('#kind').val();
	
	if (type == 'slide') {
		var position = $('#position').html();
		var width = $('#ipSpace1').val();
		var height = $('#ipSpace2').val();
		
		var chk_bi = '';
		if (isBI) chk_bi = 'Y';
		else chk_bi = 'N';
		
		$.ajax({
			url : '/wardrobe/save/slide.json',
			dataType : 'json',
			type : 'post',
			data : {title : title,
				width : width,
				height : height,
				kind : kind,
				body : arrayBody,
				door : arrayDoor,
				jabara : arrayJabara,
				pillar : valuePillar,
				ep : valueEP,
				option : arrayOption,
				position : position,
				img_no_dr : img_no_dr,
				img_dr : img_dr,
				
				type : type,
				chk_bi : chk_bi,
				door_num : idxDr,
				dataDtl_body : dataDtl_body,
				dataDtl_option : dataDtl_option},
		    success : function (result) {
		    	$.each(result, function(key) {
		    		var list = result[key];
		    		var rslt = list[0].result;
		    		
		    		if (rslt == 0) {
		    			$('#alertSave').html('저장에 실패했습니다.');
		    		} else if (rslt == 1) {
		    			window.location.reload();
		    		} else if (rslt == 2) {
		    			$('#alertSave').html('이미 저장된 제목입니다.');
		    		}
		    	});
		    },
			beforeSend : function() {
				$(".wrap-loading").removeClass("display-none");
			},
		    complete : function() {
		    	$('.wrap-loading').addClass('display-none');
		    },
		    error : function(e) {},
		    timeout : 180000
		});
	} else if (type == 'builtin' || type == 'builtinCombi') {
		var position = $('#position').html();
		var width = $('#ipSpace1').val();
		var height = $('#ipSpace2').val();
		
		var chk_bi = '';
		if (isBI) chk_bi = 'Y';
		else chk_bi = 'N';
		
		$.ajax({
			url : '/wardrobe/save/builtin.json',
			dataType : 'json',
			type : 'post',
			data : {title : title,
				width : width,
				height : height,
				kind : kind,
				body : arrayBody,
				door : arrayDoor,
				jabara : arrayJabara,
				jabara_sub : arrayJabara_sub,
				pillar : valuePillar,
				ep : valueEP,
				option : arrayOption,
				position : position,
				img_no_dr : img_no_dr,
				img_dr : img_dr,
				
				type : type,
				chk_bi : chk_bi,
				door_num : idxDr},
		    success : function (result) {
		    	$.each(result, function(key) {
		    		var list = result[key];
		    		var rslt = list[0].result;
		    		
		    		if (rslt == 0) {
		    			$('#alertSave').html('저장에 실패했습니다.');
		    		} else if (rslt == 1) {
		    			window.location.reload();
		    		} else if (rslt == 2) {
		    			$('#alertSave').html('이미 저장된 제목입니다.');
		    		}
		    	});
		    },
			beforeSend : function() {
				$(".wrap-loading").removeClass("display-none");
			},
		    complete : function() {
		    	$('.wrap-loading').addClass('display-none');
		    },
		    error : function(e) {},
		    timeout : 180000
		});
	} else if (type == 'dressroom') {
		var fb_width = $('#ipSpace1').val();
		var lr_width = $('#ipSpace2').val();
		
		$.ajax({
			url : '/wardrobe/save/dressroom.json',
			dataType : 'json',
			type : 'post',
			data : {title : title,
				fb_width : fb_width,
				lr_width : lr_width,
				kind : kind,
				body : arrayBody,
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
		    			$('#alertSave').html('저장에 실패했습니다.');
		    		} else if (rslt == 1) {
		    			window.location.reload();
		    		} else if (rslt == 2) {
		    			$('#alertSave').html('이미 저장된 제목입니다.');
		    		}
		    	});
		    },
			beforeSend : function() {
				$(".wrap-loading").removeClass("display-none");
			},
		    complete : function() {
		    	$('.wrap-loading').addClass('display-none');
		    },
		    error : function(e) {},
		    timeout : 180000
		});
	}
	
	chkSave = true;
}


////////////////////////////////////////////////


var qwerty1 = 'slide';
var qwerty2 = 'sd_a001';
var qwerty3 = 'EP_L';
var qwerty4 = 3500;
var qwerty5 = 2240;
var qwerty6 = ''; // 몸통 split
var qwerty7 = ''; // 몸통종류 split
function cccvvv1() {
	qwerty1 = 'slide';
	qwerty2 = 'sd_a001';
	qwerty3 = 'EP_L';
	qwerty4 = 3500;
	qwerty5 = 2240;
	qwerty6 = ''; // 몸통 split
	qwerty7 = ''; // 몸통종류 split
	
	$('#type').val(qwerty1);
	changeType2();
}
function cccvvv2() {
	$('#kind').val(qwerty2);
	changeWrKind2();
}
function cccvvv3() {
	if (qwerty3 == 'EP_L') {
		isBuiltin('btnNo');
		clickBtnEP('btnEP_L');
	}
	
	$('#ipSpace1').val(qwerty4);
	changeSpace1();
	$('#ipSpace2').val(qwerty5);
	changeSpace2();
	
	for (i = 0; i < 3; i++) {
		clickBtnBody('btn978');
	}
	for (j = 0; j < 3; j++) {
		var cv3 = generateRandom(0, 2);
		for (k = 0; k < cv3; k++)
			changeKind(j, 978);

		// 옵션수만큼 반복
		addOption(j, 978, 'BWO-0002', 0);
	}
}

var generateRandom = function (min, max) {
	var ranNum = Math.floor(Math.random()*(max-min+1)) + min;
		return ranNum;
}

function fffggg1() {
	qwerty1 = 'dressroom';
	qwerty2 = 'dr_a001';
	qwerty4 = 3500;
	qwerty5 = 3000;
	qwerty6 = ''; // 몸통 split
	qwerty7 = ''; // 몸통종류 split
	
	$('#type').val(qwerty1);
	changeType2();
}
function fffggg2() {
	$('#kind').val(qwerty2);
	changeWrKind2();
}
function fffggg3() {
	$('#ipSpace1').val(qwerty4);
	changeSpace1();
	$('#ipSpace2').val(qwerty5);
	changeSpace2();
	
	// 코너장 추가
	setCorner(event, 'dcorner2');
	
	// F
	showArea(event, 'darea1');
	selectCri('right');
	selectDrWidth(800);
	addDr('DK004');
	selectDrWidth(800);
	addDr('DK003');
	selectDrWidth(600);
	addDr('DK002');
	
	// R
	showArea(event, 'darea3');
	selectCri('left');
	selectDrWidth(800);
	addDr('DK005');
	selectDrWidth(800);
	addDr('DK006');
	
	showArea(event, 'area');
}

function changeType2() {
	var type = $('#type').val();

	init();
	
	if (kind != '타입') {
		$.ajax({
			url : '/wardrobe/kind.json',
			dataType : 'json',
			type : 'get',
			data : {type : type},
		    success : function (result) {
		    	$.each(result, function(key) {
		    		var list = result[key];
			    	var content = '';
			    	
			    	for (i = 0; i < list.length; i++) {
			    		if (list[i].wr_cd == null) break;
			    		content = '<option value="' + list[i].wr_cd + '">' + list[i].name + '</option>';
			    		$("#kind").append(content);
			    	}
			    	
			    	switch (type) {
			    	case 'slide':
			    		$('#wardrobe_info').hide();
			    		$('#row1').show();
			    		$('#row2').show();
			    		$('#lblSpace1').html('폭');
			    		$('#lblSpace2').html('높이');
			    		$('#menubar_slide').show();
			    		$('#wardrobe1').show();
			    		$('#information_slide').show();
			    		break;
			    	case 'builtin':
			    		$('#wardrobe_info').hide();
			    		$('#row1').show();
			    		$('#row2').show();
			    		$('#lblSpace1').html('폭');
			    		$('#lblSpace2').html('높이');
			    		$('#row3').show();
			    		$('#menubar_builtin').show();
			    		$('#wardrobe1').show();
			    		$('#body').css('width', '500px');
			    		$('#jabara').css('width', '500px');
			    		$('#information_builtin').show();
			    		break;
			    	case 'builtinCombi' :
			    		$('#wardrobe_info').hide();
			    		$('#row1').show();
			    		$('#row2').show();
			    		$('#lblSpace1').html('폭');
			    		$('#lblSpace2').html('높이');
			    		$('#row3').show();
			    		$('#menubar_builtin').show();
			    		$('#wardrobe1').show();
			    		$('#body').css('width', '500px');
			    		$('#jabara').css('width', '500px');
			    		$('#information_builtin').show();
			    		break;
			    	case 'dressroom':
			    		$('#wardrobe_info').hide();
			    		$('#row2').show();
			    		$('#lblSpace1').html('가로폭');
			    		$('#lblSpace2').html('세로폭');
			    		$('#menubar_dressroom').show();
			    		$('#wardrobe2').show();
			    		$('#information_dressroom').show();
			    		break;
			    	}
		    	});
			},
			beforeSend : function() {},
			complete:function() {
				if (type == 'slide' || type == 'builtin')
					cccvvv2();
				else if (type == 'dressroom')
					fffggg2();
			},
		    error:function(e) {},
		    timeout:180000
		});
	}
}

// 장롱 종류 변경
function changeWrKind2() {
	var type = $('#type').val();
	var kind = $('#kind').val();
	
	initWardrobe();
	
	if (type == 'dressroom') {
		fffggg3();
		return;
	}
	
	setDr = new Array();
	
	if (kind != '종류') {
		$.ajax({
			url : '/wardrobe/option.json',
			dataType : 'json',
			type : 'get',
			data : {kind : kind},
		    success : function (result) {
		    	optionArray = new Array();
		    	
		    	$.each(result, function(key) {
		    		var list = result[key];
			    	var content = '';
			    	var ochk = false;
			    	
			    	if (type == 'builtin')
			    		setDr = list[0].item_nm.split('-');
			    	
			    	for (i = 1; i < list.length; i++) {
			    		optionArray[i-1] = new item();
			    		optionArray[i-1].item_grp = list[i].item_grp;
			    		optionArray[i-1].item_cd = list[i].item_cd;
			    		optionArray[i-1].dp2 = list[i].dp2;
			    		optionArray[i-1].qty = 0;
			    		
			    		ochk = false;
			    		for (j = 0; j < optionArray.length - 1; j++) {
			    			if (optionArray[j].item_cd == list[i].item_cd)
			    				ochk = true;
			    		}
			    		
			    		if (!ochk)
		    				content += '<input type="hidden" id="' + list[i].item_cd + '" value="0">';
			    	}
			    	
			    	$("#optionList").html(content);
		    	});
			},
			beforeSend : function() {},
		    complete:function() {
		    	if (type == 'slide' || type == 'builtin')
					cccvvv3();
		    },
		    error:function(e) {},
		    timeout:180000
		});
	}
	
	$('#wardrobe1').css('background-image', 'url(\'/images/wardrobe/builtin/wardrobeback.jpg\')');
	if (kind == 'bi_a005')
		$('#wardrobe1').css('background-image', 'url(\'/images/wardrobe/builtin/wardrobeback2.jpg\')');
}

function changeKind2(id, twidth) {
	var kind = $('#kid'+id).html().substring(0, 4);
	var kid = $('#kid'+id).attr('id');
	
	if($('#kind').val() == 'bi_a012'){
	switch (kind) {
	
	case '반<sp':
		if($('#kind').val() == 'bi_a012'&&$('#did0_r1').hasClass('drLR2')||'bi_a012'&&$('#did0_r2').hasClass('drLR2'))	
		{					
			if('bi_a012'&&$('#did0_r1').hasClass('drLR2')&&setDr[idxDr]=='LCR'){						
				if(kid=='kid0'||kid=='kid'+(cnt-1)){
					$('#kid'+id).html('반<span class="required" style="float: right; margin-right: 5px;"><</span>');
					$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/b500_450_a.jpg")');							
				}else{
					$('#kid'+id).html('반(서)<span class="required" style="float: right; margin-right: 5px;"><</span>');
					$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/b500_450_a_a.jpg")');				
				}
			}else{
				$('#kid'+id).html('반<span class="required" style="float: right; margin-right: 5px;"><</span>');
				$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/b500_450_a.jpg")');
			}

		}else{
			$('#kid'+id).html('반(서)<span class="required" style="float: right; margin-right: 5px;"><</span>');
			$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/b500_450_a_a.jpg")');
		}
		break;
	case '반(서)':
		$('#kid'+id).html('반<span class="required" style="float: right; margin-right: 5px;"><</span>');
		$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/b500_450_a.jpg")');
		break;
			
		}
	}
	if($('#kind').val() == 'bi_a011'||$('#kind').val() == 'bi_a016'){
		switch (kind) {
		case '반<sp':
			$('#kid'+id).html('반(서)<span class="required" style="float: right; margin-right: 5px;"><</span>');
			$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/b500_450_a_a.jpg")');	
			break;
		case '반(서)':
			$('#kid'+id).html('반<span class="required" style="float: right; margin-right: 5px;"><</span>');
			$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/b500_450_a.jpg")');
			break;
		}
	}
	
	if($('#kind').val() == 'bi_a018') {
		switch (kind) {
		case '반<sp':
			$('#kid'+id).html('반(서)<span class="required" style="float: right; margin-right: 5px;"><</span>');
			$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/bi_a018/b1000_900_k.jpg")');
			break;
		case '반(서)':
			$('#kid'+id).html('반<span class="required" style="float: right; margin-right: 5px;"><</span>');
			$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/bi_a018/b1000_900_d.jpg")');
			break;
		}
	}
	
	if($('#kind').val() == 'bi_a019') {
		switch (kind) {
		case '반<sp':
			$('#kid'+id).html('반(서)<span class="required" style="float: right; margin-right: 5px;"><</span>');
			$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/bi_a019/b1000_900_k.jpg")');
			break;
		case '반(서)':
			$('#kid'+id).html('반<span class="required" style="float: right; margin-right: 5px;"><</span>');
			$('#did'+id).css('background-image', 'url("/images/wardrobe/builtin/bi_a019/b1000_900_d.jpg")');
			break;
		}
	}

	$('#did'+id+' .oi').remove();
	var olist = $('#did'+id).attr('class').split(' ');
	for (i = 1; i < olist.length; i++) {
		$('#'+olist[i]).val(parseInt($('#'+olist[i]).val()) - 1);
		$('#did'+id).removeClass(olist[i]);
	}
	
	$('#tableItem').html('');
	
	chkRemoveDiv = false;
}