<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="cache-control" content="no-cache"> 
<meta http-equiv="pragma" content="no-cache">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
<title>장인가구 시뮬레이션</title>
<link rel="stylesheet" href="/css/jquery-ui.min.css" />
<link rel="stylesheet" href="/css/lightslider.min.css" />
<link rel="stylesheet" href="/css/wardrobe_simulation.css?ver=<%=System.currentTimeMillis()%>" />
<script type="text/javascript">
var mwow2d = '${mwow2d}';
var on_user = '${on_user}';
</script>
<script type="text/javascript" src="/js/jquery-1.9.1.js"></script>
<script type="text/javascript" src="/js/jquery-ui.min.js"></script>
<script type="text/javascript" src="/js/jquery-ui-touch.js"></script>
<script type="text/javascript" src="/js/jquery-fullscreen.js"></script>
<script type="text/javascript" src="/js/lightslider.min.js"></script>
<script type="text/javascript" src="/js/html2canvas.js"></script>
<script type="text/javascript" src="/js/money.js"></script>
<script type="text/javascript" src="/js/js-func.js"></script>
<script type="text/javascript" src="/js/wardrobe_simulation.js?ver=<%=System.currentTimeMillis()%>"></script>
</head>
<body>
<div class="frame-header">
	<div class="frame-logo">
		<img src="/images/wardrobe/simulation/logo.png" />
	</div>
	<div class="ic-help">
		<div><img src="/images/wardrobe/simulation/ic_help.png" /></div>
		<div>도움말</div>
	</div>
	<div class="help-sub-text invisible">진행중인 화면에서 도움말 버튼을 누르면 해당 화면에 대한 도움말을 확인할 수 있습니다.</div>
</div>

<div class="frame-navi">
	<ul class="navi-wrap">
		<li id="navi-menu-type" class="navi-menu">
			<div class="navi-menu-title">타입 <span class="navi-apply type-state"></span></div>
			<ul class="navi-menu-item invisible">
				<li class="navi-menu-item-li type-item" data-type="slide">슬라이딩</li>
				<li class="navi-menu-item-li type-item" data-type="builtin">붙박이장</li>
				<li class="navi-menu-item-li type-item" data-type="dressroom">드레스룸</li>
			</ul>
		</li>
		<li id="navi-menu-kind" class="navi-menu">
			<div class="navi-menu-title">종류 <span class="navi-apply kind-state"></span></div>
			<ul class="navi-menu-item invisible"></ul>
		</li>
		<li id="navi-menu-width" class="navi-menu">
			<div class="navi-menu-title"><span class="text-width">너비</span> <span class="navi-apply size-width">0</span> (mm)</div>
			<ul class="navi-menu-item w2 invisible">
				<li class="navi-menu-item-li"><input id="width" type="number" value="2000" readonly="readonly" /></li>
				<li class="navi-menu-item-li"><div class="input-number" data-space="width">1</div><div class="input-number" data-space="width">2</div><div class="input-number" data-space="width">3</div></li>
				<li class="navi-menu-item-li"><div class="input-number" data-space="width">4</div><div class="input-number" data-space="width">5</div><div class="input-number" data-space="width">6</div></li>
				<li class="navi-menu-item-li"><div class="input-number" data-space="width">7</div><div class="input-number" data-space="width">8</div><div class="input-number" data-space="width">9</div></li>
				<li class="navi-menu-item-li"><div class="input-number" data-space="width">모두지움</div><div class="input-number" data-space="width">0</div><div class="input-number" data-space="width">지움</div></li>
				<li class="navi-menu-item-li"><div class="input-apply" data-space="width">적용</div></li>
			</ul>
		</li>
		<li id="navi-menu-height" class="navi-menu">
			<div class="navi-menu-title"><span class="text-height">높이</span> <span class="navi-apply size-height">0</span> (mm)</div>
			<ul class="navi-menu-item w2 right invisible">
				<li class="navi-menu-item-li"><input id="height" type="number" value="2240" readonly="readonly" /></li>
				<li class="navi-menu-item-li"><div class="input-number" data-space="height">1</div><div class="input-number" data-space="height">2</div><div class="input-number" data-space="height">3</div></li>
				<li class="navi-menu-item-li"><div class="input-number" data-space="height">4</div><div class="input-number" data-space="height">5</div><div class="input-number" data-space="height">6</div></li>
				<li class="navi-menu-item-li"><div class="input-number" data-space="height">7</div><div class="input-number" data-space="height">8</div><div class="input-number" data-space="height">9</div></li>
				<li class="navi-menu-item-li"><div class="input-number" data-space="height">모두지움</div><div class="input-number" data-space="height">0</div><div class="input-number" data-space="height">지움</div></li>
				<li class="navi-menu-item-li"><div class="input-apply" data-space="height">적용</div></li>
			</ul>
		</li>
		<li id="navi-menu-construct" class="navi-menu">
			<div class="navi-menu-title">구성</div>
			<ul class="navi-menu-item wm h3"></ul>
		</li>
		<li id="navi-menu-door">
			<div class="navi-menu-title">문짝 <span class="navi-apply door-state" data-door-state="show">보임</span></div>
		</li>
		<li id="navi-menu-finish" class="navi-menu">
			<div class="navi-menu-title">마감 <span class="navi-apply finish-state"></span></div>
			<ul class="navi-menu-item invisible">
				<li class="navi-menu-item-li finish-item" data-finish="builtin">붙박이</li>
				<li class="navi-menu-item-li finish-item" data-finish="none">없음</li>
				<li class="navi-menu-item-li finish-item" data-finish="ep_l">EP(좌)</li>
				<li class="navi-menu-item-li finish-item" data-finish="ep_r">EP(우)</li>
				<li class="navi-menu-item-li finish-item" data-finish="ep_lr">EP(좌우)</li>
			</ul>
		</li>
		<li id="navi-menu-result" class="navi-menu">
			<div class="navi-menu-title">견적</div>
		</li>
		<li id="navi-menu-init">
			<div class="navi-menu-title">초기화</div>
		</li>
			<li id="navi-menu-nst">
			<div class="navi-menu-title">비규격<span class="navi-apply nst-yesno" data-nst-yesno="hide">미사용</span></div>
		</li>
		<li id="navi-menu-mobile" class="invisible">
			<div class="navi-menu-title">출고가확인</div>
<!-- 			<ul class="navi-menu-item invisible"> -->
<!-- 				<li class="navi-menu-item-li mobile-item" data-mobile="price">단가확인</li> -->
<!-- 				<li class="navi-menu-item-li mobile-item" data-mobile="save">저장</li> -->
<!-- 				<li class="navi-menu-item-li mobile-item" data-mobile="load">불러오기</li> -->
<!-- 			</ul> -->
		</li>
	</ul>
</div>

<div class="frame-info"></div>

<div class="frame-contents invisible">
	<div class="frame-board">
		<div class="frame-measure-horizontal measure-tot"><span>2000</span></div>
		<div class="frame-measure-horizontal">
			<div class="measure-left"><span>1000</span></div>
			<div class="measure-center"><span></span></div>
			<div class="measure-right"><span>1000</span></div>
		</div>
		<div class="frame-measure-vertical measure-tot"><span>2240</span></div>
		<div class="frame-measure-vertical">
			<div class="measure-top"><span>70</span></div>
			<div class="measure-bottom"><span>2170</span></div>
		</div>
		<div class="frame-finish">
			<div class="frame-body"></div>
		</div>
		<div class="body-blind invisible"></div>
	</div>
	
	<div id="controller" class="invisible">
		<ul id="controller-header">
			<li class="controller-header-item header-body" data-controller="body">몸통</li>
			<li class="controller-header-item header-option" data-controller="option">옵션</li>
			<li class="controller-header-item header-door" data-controller="door">문짝</li>
		</ul>
		<ul id="controller-contents"></ul>
	</div>
	
	<div class="frame-dressroom">
		<div class="frame-dr-body above"></div>
		<div class="frame-dr-body forward invisible"></div>
		<div class="frame-dr-body left invisible"></div>
		<div class="frame-dr-body right invisible"></div>
		<div class="frame-dr-body backward invisible"></div>
		<div class="body-blind invisible"></div>
	</div>

	<div id="controller-dr-map" class="invisible">
		<div class="controller-dr-title">
			드레스룸
			<img class="controller-dr-soh" data-soh="show" src="/images/wardrobe/simulation/ic_expand_less.png" width="30px" />
		</div>
		<div class="dressroom-map">
			<div class="dressroom-map-top">
				<div class="dressroom-map-way forward">F</div>
			</div>
			<div class="dressroom-map-middle">
				<div class="dressroom-map-way left">L</div>
				<div class="dressroom-map-way above dressroom-map-selected"></div>
				<div class="dressroom-map-way right">R</div>
			</div>
			<div class="dressroom-map-bottom">
				<div class="dressroom-map-way backward">B</div>
			</div>
			
			<div class="dressroom-map-cri">
				<div class="dr-cri-text">기준</div>
				<div class="dr-cri-l">좌</div>
				<div class="dr-cri-r">우</div>
			</div>
		</div>
	</div>	
	<div id="controller-dr" class="invisible">
		<ul id="controller-dr-header">
			<li class="controller-dr-header-item dr-header-body" data-controller="body">몸통</li>
			<li class="controller-dr-header-item dr-header-option" data-controller="option">옵션</li>
		</ul>
		<ul id="controller-dr-contents"></ul>
	</div>
</div>

<div class="frame-result invisible">
	<div class="result-table"></div>
	<div class="result-menu" style="text-align: center; margin-bottom: 20px;">
		<div class="result-save-box invisible">
			<input id="title" type="text" placeholder="제목" style="height: 30px;"><span class="result-save">저장</span>
		</div>
	</div>
</div>

<div class="loading invisible"></div>
<div class="alert invisible">
	<div class="alert-contents">
		<div class="alert-message"></div>
		<div class="alert-confirm"><span>확인</span></div>
	</div>
</div>

<div class="frame-help invisible">
	<div class="frame-help-item help-main invisible">
		<div style="height: 660px; border: 1px solid #F00;">
			<div style="margin-top: 40px;">
				<div style="width: 19%; padding: 0 0.5% 0 0.5%; float: left;">
					아래 타입 중 하나를 선택합니다.<br /><br />
					<span style="color: #FFE400;">슬라이딩<br />
					붙박이장<br />
					드레스룸</span><br /><br />
					타입을 선택하면 해당 타입의 종류가 나타납니다.<br />
					종류를 선택하면 해당 타입의 최소 공간으로 화면에 구성됩니다.
				</div>
				<div style="width: 19%; padding: 0 0.5% 0 0.5%; float: left;">
					장롱이 들어갈 공간의 너비와 높이를 설정합니다.<br /><br />
					<span style="color: #FFE400;">슬라이딩</span><br />너비 2026 ~ 4800<br />높이 2240 ~ 2400<br /><br />
					<span style="color: #FFE400;">붙박이장</span><br />너비 2000 ~ 5800<br />높이 2240 ~ 2400<br /><br />
					<span style="color: #FFE400;">드레스룸</span><br />너비 2000 ~ 5000<br />높이 2000 ~ 5000
				</div>
				<div style="width: 9%; padding: 0 0.5% 0 0.5%; float: left;">
					<span style="color: #FFE400;">슬라이딩</span><br />너비에 따라 몸통이 자동구성됩니다.<br /><br />
					<span style="color: #FFE400;">붙박이장</span><br />너비에 맞는 몸통 구성이 나타납니다.<br /><br />
					<span style="color: #FFE400;">드레스룸</span><br />몸통 종류가 나타납니다. 그림을 눌러서 화면에 추가할 수 있습니다.
				</div>
				<div style="width: 9%; padding: 0 0.5% 0 0.5%; float: left;">
					<span style="color: #FFE400;">문짝 보임</span><br />구성된 문짝의 모습을 확인할 수 있습니다.<br /><br />
					<span style="color: #FFE400;">문짝 가림</span><br />몸통 종류와 추가된 옵션의 모습을 확인할 수 있습니다.
				</div>
				<div style="width: 10%;float: left;"><br /></div>
				<div style="width: 9%; padding: 0 0.5% 0 0.5%; float: left;">
					구성한 장롱의 상세 품목과 금액을 확인할 수 있습니다.
				</div>
			</div>
		</div>
	</div>
	
	<div class="frame-help-item help-space invisible">
		<div style="width: 20%; position: relative; left: 20%; height: 280px; border: 1px solid #F00;">
			<div style="margin-top: 80px; padding: 0 5px 0 5px;">
				숫자를 누르면 입력칸에 숫자가 입력됩니다.<br /><br />
				원하는 너비와 높이를 입력했다면 <span style="color: #FFE400;">적용</span> 버튼을 눌러야 메뉴바에 적용됩니다.
			</div>
		</div>
	</div>
	
	<div class="frame-help-item help-construct invisible">
		<div class="help-construct-box" style="height: auto; margin-top: 40px; border: 1px solid #F00;">
			<div style="padding: 0 5px 0 5px;">
				<span style="color: #FFE400;">슬라이딩</span><br />
				슬라이딩은 너비에 따라 자동구성되므로 구성 메뉴를 사용할 수 없습니다.<br /><br />
				<span style="color: #FFE400;">붙박이장</span><br />
				누르면 선택한 몸통 구성이 화면에 나타납니다. 몸통은 끌어서 순서를 변경할 수 있습니다.<br /><br />
				<span style="color: #FFE400;">드레스룸</span><br />
				코너장을 제외한 몸통이 나타납니다. F, L, R, B 화면에서 몸통을 누르면 해당 화면에 추가됩니다.
			</div>
		</div>
	</div>
	
	<div class="frame-help-item help-body invisible">
		<div style="height: 570px; margin-top: 80px; border: 1px solid #F00;">
			<div style="padding: 0 5px 0 5px;">
				구성된 장롱의 몸통을 누르면 몸통 종류 변경, 옵션 추가 및 제거, 문짝 변경이 가능한 창이 나타납니다.<br />
				장롱 종류를 변경하면 구성했던 내부 몸통과 옵션이 초기화되므로 문짝을 먼저 정한 후에 내부 구성을 완료해야 합니다.<br /><br />
				<span style="color: #FFE400;">슬라이딩</span><br />
				몸통 변경과 옵션 추가 및 제거가 가능합니다. 슬라이딩의 문짝은 몸통 구성에 따라 자동으로 구성됩니다.<br /><br />
				<span style="color: #FFE400;">붙박이장</span><br />
				몸통 변경과 옵션 추가 및 제거, 문짝 변경이 가능합니다. 문짝은 장롱 종류에 따라 1~2종을 선택할 수 있습니다.<br /><br />
				<span style="color: #FFE400;">드레스룸</span><br />
				드레스룸 맵의 붉은 부분이 현재 화면에 보여집니다.<br />
				코너장은 위에서 보는 화면의 구석을 누르면 추가 및 제거가 가능합니다.<br />
				F, L, R, B 화면에서는 메뉴바의 구성 메뉴에서 몸통을 눌러 추가할 수 있습니다.<br />
				각 화면의 기준 좌, 우를 선택하여 몸통이 추가되는 방향을 정할 수 있습니다.<br />
				기준 방향은 사람이 방 중앙에서 해당 화면을 바라볼 때를 기준으로 합니다.<br />
				(B 화면의 경우 몸통이 구성되는 화면과 위에서 본 화면이 반대입니다.)
			</div>
		</div>
	</div>
	
	<div class="frame-help-item help-controller invisible">
		<div class="help-controller-box" style="height: auto; width: 600px; top: 20%; left: 10%; border: 1px solid #F00; position: absolute;">
			<div style="margin-left: 205px; margin-right: 5px;">
				선택한 몸통의 종류, 옵션, 문짝을 변경할 수 있습니다. 해당 창의 머리부분을 끌어서 움직일 수 있습니다.<br /><br />
				<span style="color: #FFE400;">몸통</span><br />
				같은 크기의 몸통 중 하나로 변경할 수 있습니다.<br /><br />
				<span style="color: #FFE400;">옵션</span><br />
				선택한 몸통에 추가할 수 있는 옵션이 나타납니다. 추가된 옵션은 화면 몸통에 나타납니다.<br /><br />
				<span style="color: #FFE400;">문짝</span><br />
				좌문, 우문을 선택합니다. 반장은 우문만 선택 가능합니다.
			</div>
		</div>
	</div>
</div>
</body>
</html>
