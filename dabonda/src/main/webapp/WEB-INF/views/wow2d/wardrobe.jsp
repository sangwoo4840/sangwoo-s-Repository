<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
<title>장롱 운영표</title>
<link href="/css/wow2d_wardrobe.css?ver=<%=System.currentTimeMillis()%>" type="text/css" rel="stylesheet">
<script type="text/javascript" src="/js/jquery-1.9.1.js"></script>
<script type="text/javascript" src="/js/html2canvas.js"></script>
<script type="text/javascript" src="/js/money.js"></script>
<script type="text/javascript" src="/js/wow2d_wardrobe.js?ver=<%=System.currentTimeMillis()%>"></script>

</head>
<body onclick="closeLayer()">
<div class="wrap-loading display-none">
    <div><img src="/images/loading.gif" width="40%" /></div>
</div>
<div id="contents">
<!-- 	<div id="row" class="headerRow"> -->
<!-- 		<span class="headerL">데이터</span> -->
<!-- 		<span class="headerR medium"><select id="load"><option>데이터</option></select></span> -->
<!-- 		<span class="headerR"> -->
<!-- 		<button id="btnLoad" onclick="cccvvv1()">불러오기</button> -->
<!-- 		<button style="height: 30px; line-height: 28px;" onclick="fffggg1()">test</button> -->
<!-- 		</span> -->
<!-- 	</div> -->
	<div id="row0" class="headerRow">
		<span class="headerL">타입</span>
		<span class="headerR"><select id="type" onchange="changeType();"><option>타입</option><option value="slide">슬라이드장</option><option value="builtin">붙박이장</option><option value="dressroom">드레스룸</option></select><span class="required">*</span></span>
		<span class="headerL">종류</span>
		<span class="headerR"><select id="kind" onchange="changeWrKind();"><option>종류</option></select><span class="required">*</span></span>
	</div>
	<div id="row1" class="headerRow">
		<span class="headerL">붙박이</span>
		<span class="headerR"><button id="btnYes" class="choiceBtn" onclick="isBuiltin(this.id);">예</button><button id="btnNo" onclick="isBuiltin(this.id);">아니오</button></span>
		<span class="headerL">EP</span>
		<span class="headerR"><button id="btnEP_L"  class="disabled" onclick="clickBtnEP(this.id)">좌</button><button id="btnEP_R" class="disabled"  onclick="clickBtnEP(this.id)">우</button></span>
	</div>
	<div id="row2" class="headerRow">
		<span id="lblSpace1" class="headerL">S1</span>
		<span class="headerR"><input type="number" id="ipSpace1" onblur="changeSpace1();"><span class="required">*</span><button id="btnNst" onclick="noStandard();">비규격</button></span>
		<span id="lblSpace2" class="headerL">S2</span>
		<span class="headerR"><input type="number" id="ipSpace2" onblur="changeSpace2();"><span class="required">*</span></span>
		
	</div>
	<div id="row3" class="headerRow">
		<span class="headerL">구성</span>
		<span class="headerR short"><select id="slt1" onchange="changeSlt1();"><option>통</option></select></span>
		<span class="headerR long"><select id="slt2" onchange="changeSlt2();"><option>구성</option></select></span>
	</div>
	<div style="background: #4F9CD0; padding-left: 10px; padding-bottom: 5px;"><span style="color: red; text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white; font-weight: bold; font-size: 10pt;">*는 필수입력사항입니다.</span></div>
	
	<div id="wardrobe_info">
		<ul>
			<ins>슬라이드장</ins>
			<li>너츠</li>
			<li>브리드</li>
			<li>브리드월넛</li>
			<li>페퍼민트</li>
			<li>지앤</li>
		</ul>	
		<ul>
			<ins>붙박이장</ins>
			<li>미카</li>
			<li>플럼</li>
			<li>티라미수</li>
			<li>발트</li>
			<li>수플레</li>
			<li>루이보스</li>
			<li>포엠</li>
			<li>크리미</li>
			<li>리오</li>
			<li>위고</li>
			<li>그렌</li>
			<li>미라벨</li>
			<li>로웰</li>
			<li>디엘</li>
			<li>에셀</li>
		</ul>
		<ul>
			<ins>드레스룸</ins>
			<li>세렌</li>
			<li>에반(월넛)</li>
			<li>에반(메이플)</li>
			<li>플랫폼</li>
			<li>노블</li>
		</ul>
		<br />
	</div>
<!--/////////////// 슬라이드장▽ ///////////////-->
	<div id="menubar_slide" class="headerRow btn">
		<button id="btn1140" onclick="clickBtnBody(this.id);">1140몸통</button>
		<button id="btn978" onclick="clickBtnBody(this.id);">978몸통</button>
		<button id="btnTogDoor_slide" onclick="clickTogDoor();">문짝표시</button>
		<button id="btnChangeDoor_slide" onclick="changeDoor();">좌문짝</button>
		<button id="btnInit" onclick="initBody();">초기화</button>
	</div>
<!--/////////////// 슬라이드장△ ///////////////-->

<!--/////////////// 붙박이장▽ ///////////////-->
	<div id="menubar_builtin" class="headerRow btn">
		<button id="btn1000" onclick="clickBtnBody(this.id);">1000(A)</button>
		<button id="btn900" onclick="clickBtnBody(this.id);">900(B)</button>
		<button id="btn500" onclick="clickBtnBody(this.id);">500(C)</button>
		<button id="btn450" onclick="clickBtnBody(this.id);">450(D)</button>
		<button id="btn260">선반장(E)<ul><li id="btn260_a" onclick="clickBtnBody('btn260_a');">아이보리</li><li id="btn260_b" onclick="clickBtnBody('btn260_b');">월넛</li></ul></button>
		<button id="btnTogDoor" onclick="clickTogDoor();">문짝표시</button>
		<button id="btnChangeDoor" onclick="changeDoor();">문짝 1</button>
		<button id="btnInit" onclick="initBody();">초기화</button>
	</div>

	<div id="wardrobe1"><div id="jabara"><div id="jCeil" class="hidden" ></div><div id="jPillarL_sub" class="hidden"></div><div id="jPillarL" class="hidden"></div><div id="jPillarR_sub" class="hidden"></div><div id="jPillarR" class="hidden"></div></div><div id="jabara_sub"><div id="jabara_sub_cri"></div></div><div id="body"><div id="pillarL_sub" class="hidden"></div><div id="pillarL" class="hidden"></div><div id="pillarR_sub" class="hidden"></div><div id="pillarR" class="hidden"></div></div></div>

	<div id="information_slide" class="contentsRow">
		<div>
		<span class="contentsL">몸통</span>[ <span id="sumDiv_slide" class="contentsR">0</span> ]
		</div>
		<div>
		<span class="contentsL long">남은폭</span>[ <span id="emptySpace_slide" class="contentsR">0</span> ]
		</div>
		<div>
		<span class="contentsL long">남은높이</span>[ <span id="emptySpaceH_slide" class="contentsR">0</span> ]
		</div>
	</div>
	
	<div id="information_builtin" class="contentsRow">
		<span class="contentsL">몸통</span>[ <span id="sumDiv" class="contentsR">0</span> ]
		<span class="contentsL long">남은폭</span>[ <span id="emptySpace" class="contentsR">0</span> ]
		<span class="contentsL long">남은높이</span>[ <span id="emptySpaceH" class="contentsR">0</span> ]
		<span class="contentsL">배치</span>[ <span id="position" class="contentsR">-</span> ]
	</div>
<!--/////////////// 붙박이장△ ///////////////-->
	
<!--/////////////// 드레스룸▽ ///////////////-->
	<div id="menubar_dressroom">
		<div class="headerRow btn_top">
			<button id="btnW1000" onclick="selectDrWidth(1000)">1000</button>
			<button id="btnW900" onclick="selectDrWidth(900)">900</button>
			<button id="btnW800" onclick="selectDrWidth(800)">800</button>
			<button id="btnW600" onclick="selectDrWidth(600)">600</button>
			<button id="btnW450" onclick="selectDrWidth(450)">450</button>
			<button id="btnW400" onclick="selectDrWidth(400)">400</button>
			<button id="btnW290" onclick="selectDrWidth(290)">290</button>
			<button id="btnInit" onclick="initBody();">초기화</button>
		</div>
		<div class="headerRow btn_bot">
			<button id="btnDK013" class="disabled" onclick="addDr('DK013')">액세사리</button>		
			<button id="btnDK014" class="disabled" onclick="addDr('DK014')">칸막이</button>		
			<button id="btnDK001" class="disabled" onclick="addDr('DK001')">이불장</button>
			<button id="btnDK002" class="disabled" onclick="addDr('DK002')">옷장</button>
			<button id="btnDK003" class="disabled" onclick="addDr('DK003')">정리장</button>
			<button id="btnDK004" class="disabled" onclick="addDr('DK004')">옵션장</button>
			<button id="btnDK006" class="disabled" onclick="addDr('DK006')">수납박스</button>
			<button id="btnDK007" class="disabled" onclick="addDr('DK007')">코디장</button><br>
			<button id="btnDK015" class="disabled" onclick="addDr('DK015')">1단서랍</button>
			<button id="btnDK016" class="disabled" onclick="addDr('DK016')">2단서랍</button>
			<button id="btnDK005" class="disabled" onclick="addDr('DK005')">3단서랍</button>
			<button id="btnDK008" class="disabled" onclick="addDr('DK008')">서랍형옷장</button>
			<button id="btnDK009" class="disabled" onclick="addDr('DK009')">TV장</button>
			<button id="btnDK010" class="disabled" onclick="addDr('DK010')">독서실책상</button>
			<button id="btnDK011" class="disabled" onclick="addDr('DK011')">화장대장</button>		
			<button id="btnDK012" class="disabled" onclick="addDr('DK012')">코너장</button>					
		</div>
	</div>
	<div id="wardrobe2">
		<div id="wr2_setbar">
			<button id="cri_l" class="hidden choiceBtn" onclick="selectCri('left')">기준(좌)</button>
			<button id="ep_l" class="hidden" onclick="setEP('epL')">EP(좌)</button>
			<div style="width: 280px; height: 40px; top: 0; left: 160px; position: absolute;">
				<div id="show_ba" onclick="showArea(event, 'area')"></div>
				<div id="show_ba_sub"></div>
				<div id="show_bf" onclick="showArea(event, 'darea1')">F</div>
				<div id="show_bf_sub" class="hidden"></div>
				<div id="show_bl" onclick="showArea(event, 'darea2')">L</div>
				<div id="show_bl_sub" class="hidden"></div>
				<div id="show_br" onclick="showArea(event, 'darea3')">R</div>
				<div id="show_br_sub" class="hidden"></div>
				<div id="show_bb" onclick="showArea(event, 'darea4')">B</div>
				<div id="show_bb_sub" class="hidden"></div>
			</div>
			<button id="cri_r" class="hidden" onclick="selectCri('right')">기준(우)</button>
			<button id="ep_r" class="hidden" onclick="setEP('epR')">EP(우)</button>
		</div>
		<div id="body_above"></div>
		<div id="body_forward" class="hidden"></div>
		<div id="body_left" class="hidden"></div>
		<div id="body_right" class="hidden"></div>
		<div id="body_backward" class="hidden"></div>
	</div>
	
	<div id="information_dressroom">
		<div class="contentsRow">
			<span style="margin-left: 5px;">남은 폭</span>
			<span id="info_dr_f"><span class="contentsL short" style="color: red;">F</span>[ <span id="emptySpaceF" class="contentsR">0</span> ]</span>
			<span id="info_dr_l"><span class="contentsL short" style="color: red;">L</span>[ <span id="emptySpaceL" class="contentsR">0</span> ]</span>
			<span id="info_dr_r"><span class="contentsL short" style="color: red;">R</span>[ <span id="emptySpaceR" class="contentsR">0</span> ]</span>
			<span id="info_dr_b"><span class="contentsL short" style="color: red;">B</span>[ <span id="emptySpaceB" class="contentsR">0</span> ]</span>
		</div>
	</div>
<!--/////////////// 드레스룸△ ///////////////-->
	

	
	<div id="alert" class="hidden">
		<div id="alertTxt"></div>
	</div>
	<div id="workBar">
		<button id="btnWork" onclick="clickWork();">[ 조견표 ]</button>
		<button id="btnDisplayAmt" onclick="clickDisplayAmt();">계산</button>
	</div>
	<div id="tableItem"></div>
	
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
	
	<div class="layer_s">
		<div class="bg_s"></div>
		<div id="layer2_s" class="pop-layer_s">
			<div class="pop-container_s">
				<div class="pop-conts_s" style="text-align: center;">
					<!--content //-->
					제목 <input type="text" id="title" style="width: 100%;" maxlength="50">
					<div id="alertSave"></div>
					<div class="btn-r">
						<a href="javascript:;" class="cbtn" onclick="saveWardrobe();">저장</a>
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

