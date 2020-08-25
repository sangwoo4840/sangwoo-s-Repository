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
<link rel="stylesheet" href="/css/wardrobe_simulation.css" />
<script type="text/javascript">
var mwow2d = '${mwow2d}';
var on_user = '${on_user}';
</script>
<script src="/js/jquery-1.9.1.js"></script>
<script src="/js/jquery-ui.min.js"></script>
<script src="/js/jquery-ui-touch.js"></script>
<script src="/js/jquery-fullscreen.js"></script>
<script src="/js/html2canvas.js"></script>
<script src="/js/money.js"></script>
<script src="/js/wardrobe_simulation.js"></script>
</head>
<body>
<div class="frame-header">
	<div class="frame-logo">
		<img src="/images/wardrobe/simulation/logo.png" />
	</div>
</div>

<div class="frame-navi">
	<ul class="navi-wrap">
		<li id="navi-menu-basic" class="navi-menu">기초 정보</li>
		<li id="navi-menu-basic-item" class="navi-menu-items invisible">
			<div class="menu-item-box">
				<ul class="item-list-header">
					<li class="header-item btn-slide" style="width: 50%;">슬라이딩</li>
					<li class="header-item btn-builtin" style="width: 50%;">붙박이장</li>
				</ul>
				<div>넓이 <span class="size-width">2000</span> (mm)</div>
				<div><img class="btn-width-sub" src="/images/wardrobe/simulation/ic_remove_circle.png" /><input id="width" type="range" min="2000" max="2000" step="10" value="2000" /><img class="btn-width-add" src="/images/wardrobe/simulation/ic_add_circle.png" /></div>
				<div>높이 <span class="size-height">2240</span> (mm)</div>
				<div><img class="btn-height-sub" src="/images/wardrobe/simulation/ic_remove_circle.png" /><input id="height" type="range" min="2240" max="2400" step="10" value="2240" /><img class="btn-height-add" src="/images/wardrobe/simulation/ic_add_circle.png" /></div>
				<div><img class="btn-basic-apply invisible" src="/images/wardrobe/simulation/ic_check.png" /></div>
			</div>
		</li>
		<li id="navi-menu-construct" class="navi-menu">구성 선택</li>
		<li id="navi-menu-construct-item" class="navi-menu-items invisible">
			<div class="menu-construct-note">기초 정보를 적용해 주세요.</div>
			<div class="menu-item-box invisible">
				<ul class="item-list-header"></ul>
				<ul class="item-list"></ul>
			</div>
		</li>
		<li id="navi-menu-body" class="navi-menu">몸통 변경</li>
		<li id="navi-menu-body-item" class="navi-menu-items invisible">
			<div class="menu-body-note">화면에서 몸통을 선택해 주세요.</div>
			<div class="menu-item-box invisible"></div>
		</li>
		<li id="navi-menu-option" class="navi-menu">옵션 선택</li>
		<li id="navi-menu-option-item" class="navi-menu-items invisible">
			<div class="menu-option-note">화면에서 몸통을 선택해 주세요.</div>
			<div class="menu-item-box invisible"></div>
		</li>
		<li id="navi-menu-door" class="navi-menu">도어 선택</li>
		<li id="navi-menu-door-item" class="navi-menu-items invisible">
			<div class="menu-door-note">화면에서 몸통을 선택해 주세요.</div>
			<div class="menu-item-box invisible"></div>
		</li>
		<li id="navi-menu-result">견적 확인</li>
	</ul>
</div>
<div class="frame-note">
<div><img src="/images/wardrobe/simulation/ic_left.png" />START!</div>
<p>장인가구 장롱 시뮬레이션 프로그램입니다.</p>
<ul>
<li>기초 정보를 눌러 장롱의 종류를 선택하고 넓이와 높이를 입력하세요.</li>
<li>입력한 넓이에 맞는 몸통 구성 중 마음에 드는 구성을 선택해 주세요.</li>
<li>화면에 배치된 가구를 끌어서 원하는 배치를 만드세요.</li>
<li>각각의 몸통을 선택하면 몸통 종류와 문짝을 선택할 수 있어요.</li>
</ul>
</div>
<div class="frame-contents invisible">
	<div class="btn-refresh"><img src="/images/wardrobe/simulation/ic_refresh.png" />초기화</div>
	<div class="frame-measure-horizontal measure-tot"><span>0</span></div>
	<div class="frame-measure-horizontal">
		<div class="measure-left"><span>0</span></div>
		<div class="measure-center"><span></span></div>
		<div class="measure-right"><span>0</span></div>
	</div>
	<div class="frame-board">
		<div class="frame-measure-vertical measure-tot"><span>0</span></div>
		<div class="frame-measure-vertical">
			<div class="measure-top"><span>0</span></div>
			<div class="measure-bottom"><span>2170</span></div>
		</div>
		<div class="frame-body"></div>
		<div class="body-blind invisible"></div>
	</div>
	<div class="frame-result invisible">
		<div class="result-table"></div>
		<div class="result-menu" style="text-align: center; margin-bottom: 20px;">
			<div>
				<span class="result-door"></span>
				<span class="result-retry">재설정</span>
			</div>
			<div class="result-save-box invisible">
				<input id="title" type="text" placeholder="제목" style="height: 30px;"><span class="result-save">저장</span>
			</div>
		</div>
	</div>
</div>
<div class="frame-footer">
	<div class="footer-note note-basic invisible">장롱의 종류와 장롱을 놓을 공간의 넓이와 높이를 설정하신 후 <img src="/images/wardrobe/simulation/ic_check.png" />버튼을 누르면 화면이 구성됩니다.</div>
	<div class="footer-note note-construct invisible">
		<div>넓이에 맞는 몸통 구성이 표시됩니다.</div>
		<div>화면에 표시된 몸통은 끌어서 자리를 바꿀 수 있습니다.</div>
	</div>
	<div class="footer-note note-body invisible">화면에 표시된 몸통을 선택하면 해당 몸통의 종류를 변경할 수 있습니다.</div>
	<div class="footer-note note-door invisible">
		<div>같은 종류의 도어만 선택가능합니다.</div>
		<div><span class="highlight">도어 변경</span>을 누르면 화면에 구성한 도어를 초기화하고 새로운 도어를 선택할 수 있습니다.</div>
		<div><span class="highlight">도어 가림</span>을 누르면 도어가 사라져 몸통을 확인할 수 있습니다. 한번 더 누르면 해제됩니다.</div>
	</div>
	<div class="footer-note note-option invisible"></div>
	<div class="footer-note note-alert invisible"></div>
</div>
<div class="loading invisible"></div>
</body>
</html>
