<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
<title>붙박이장 운영안</title>
<link href="/css/wow2d_builtin.css" type="text/css" rel="stylesheet">
<script src="/js/jquery-1.9.1.js"></script>
<script src="/js/html2canvas.js"></script>
<script src="/js/money.js"></script>
<script src="/js/wow2d_builtin.js"></script>
</head>
<body onclick="closeLayer()">
<div class="wrap-loading display-none">
    <div><img src="/images/loading.gif" width="40%" /></div>
</div>
<div id="contents">
	<div class="headerRow">
		<span class="headerL">타입</span>
		<span class="headerR"><select id="type"><option>붙박이장</option></select><span class="required">*</span></span>
		<span class="headerL">종류</span>
		<span class="headerR">${kind}<span class="required">*</span></span>
	</div>
	<div class="headerRow">
		<span class="headerL">붙박이</span>
		<span class="headerR"><button id="btnYes" class="choiceBtn" onclick="isBuiltin(this.id);">예</button><button id="btnNo" onclick="isBuiltin(this.id);">아니오</button></span>
		<span class="headerL">EP</span>
		<span class="headerR"><button id="btnEP_L" class="disable" onclick="clickBtnEP(this.id)">좌</button><button id="btnEP_R" class="disable" onclick="clickBtnEP(this.id)">우</button></span>
	</div>
	<div class="headerRow">
		<span class="headerL">폭</span>
		<span class="headerR"><input type="number" id="ipSpace1" onblur="changeSpace1();"><span class="required">*</span></span>
		<span class="headerL">높이</span>
		<span class="headerR"><input type="number" id="ipSpace2" onchange="changeSpace2();"><span class="required">*</span></span>
	</div>
	<div class="headerRow">
		<span class="headerL">구성</span>
		<span class="headerR short"><select id="slt1" onchange="changeSlt1();"><option>통</option></select></span>
		<span class="headerR long"><select id="slt2" onchange="changeSlt2();"><option>구성</option></select></span>
	</div>
	<div style="background: #4F9CD0; padding-left: 10px; padding-bottom: 5px;"><span style="color: red; text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white; font-weight: bold; font-size: 10pt;">*는 필수입력사항입니다.</span></div>
	<div id="menubar" class="headerRow btn">
		<button id="btn1000" onclick="clickBtnBody(this.id);">1000(A)</button>
		<button id="btn900" onclick="clickBtnBody(this.id);">900(B)</button>
		<button id="btn500" onclick="clickBtnBody(this.id);">500(C)</button>
		<button id="btn450" onclick="clickBtnBody(this.id);">450(D)</button>
		<button id="btn260">선반장(E)<ul><li onclick="clickBtnBody('btn260_a');">아이보리</li><li onclick="clickBtnBody('btn260_b');">월넛</li></ul></button>
		<button id="btnTogDoor" onclick="clickTogDoor();">문짝표시</button>
		<button id="btnChangeDoor" onclick="changeDoor();">문짝 1</button>
		<button id="btnInit" onclick="initBody();">초기화</button>
	</div>

	<div id="wardrobe">
		<div id="jabara">
			<div id="jCeil" class="drHide"></div>
			<div id="jPillarL_sub" class="drHide"></div>
			<div id="jPillarL" class="drHide"></div>
			<div id="jPillarR_sub" class="drHide"></div>
			<div id="jPillarR" class="drHide"></div>
		</div>
		<div id="body">
			<div id="pillarL_sub" class="drHide"></div>
			<div id="pillarL" class="drHide"></div>
			<div id="pillarR_sub" class="drHide"></div>
			<div id="pillarR" class="drHide"></div>
		</div>
	</div>
	
	<div id="jabara_sub"><div id="jabara_sub_cri"></div></div>
	
	<div class="layer">
		<div class="bg"></div>
		<div id="layer2" class="pop-layer">
			<div class="pop-container">
				<div class="pop-conts" style="text-align: center;">
					<!--content //-->
					<!--// content-->
				</div>
			</div>
		</div>
	</div>

	<div id="information" class="contentsRow">
		<span class="contentsL">몸통</span>[ <span id="sumDiv" class="contentsR">0</span> ]
		<span class="contentsL long">남은폭</span>[ <span id="emptySpace" class="contentsR">0</span> ]
		<span class="contentsL long">남은높이</span>[ <span id="emptySpaceH" class="contentsR">0</span> ]
		<span class="contentsL">배치</span>[ <span id="position" class="contentsR">-</span> ]
	</div>
	<div id="alert" class="drHide">
		<div id="alertTxt"></div>
	</div>
	<div id="workBar">
		<button id="btnWork" onclick="clickWork();">[ 조견표 ]</button>
		<button id="btnDisplayAmt" onclick="clickDisplayAmt();">계산</button>
	</div>
	<div id="tableItem"></div>
	
	<div class="layer_s">
		<div class="bg_s"></div>
		<div id="layer2_s" class="pop-layer_s">
			<div class="pop-container_s">
				<div class="pop-conts_s" style="text-align: center;">
					<!--content //-->
					제목 <input type="text" id="title" style="width: 100%;" maxlength="50">
					<div id="alertSave"></div>
					<div class="btn-r">
						<a href="javascript:;" class="cbtn" onclick="saveBuiltin();">저장</a>
						<a href="javascript:;" class="cbtn">취소</a>
					</div>
					<!--// content-->
				</div>
			</div>
		</div>
	</div>
	<div class="popupLayer"></div>
	<div id="optionList"></div>
</div>
</body>
</html>