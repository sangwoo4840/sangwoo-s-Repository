<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
<title>슬라이딩붙박이운영안</title>
<link href="/css/wow2d_slide.css" type="text/css" rel="stylesheet">
<script src="/js/jquery-1.9.1.js"></script>
<script src="/js/money.js"></script>
<script src="/js/wow2d_slide.js"></script>
</head>
<body>
<div class="wrap-loading display-none">
    <div><img src="/images/loading.gif" width="40%" /></div>
</div>
<div id="contents">

<div id="top">
		<select id="slideList"></select>
		<a href="javascript:;" class="lnbtn" onclick="getSlideLoad();">불러오기</a>
		<a href="javascript: window.location.reload();" class="lnbtn">신규</a>
</div>

<input type="hidden" id="pillar_lr_val" value="L">
<input type="hidden" id="body_lr_val" value="L">
<table style="margin-bottom: 1px; border: 1px solid #997000;">
	<tr>
		<th width="50%" id="menuInfo" class="infoHdr" style="padding: 5px 0 5px 0;">기본정보</th>
		<th width="50%" id="menuOption">옵션</th>
	</tr>
</table>
<table id="slideInfo">
	<tr>
		<th width="33.3%" class="infoHdr">종류</th> 
		<th width="33.3%" class="infoHdr">좌우폭</th>
		<th width="33.3%" class="infoHdr">높이</th>
	</tr>
	<tr>
		<td class="infoHdr"><select id="kind" onchange="selectKind();"></select></td>
		<td class="infoHdr"><input type="tel" id="width" min="2020" max="5000" onchange="limitWidth(this.value);">mm</td>
		<td class="infoHdr"><input type="tel" id="height" min="2230" max="2410" onchange="limitHeight(this.value);">mm</td>
	</tr>
	<tr>
		<th style="background-color: #FFE08C;">몸통구성</th>
		<th>자바라</th>
		<th>기둥</th>
	</tr>
	<tr>
		<td style="background-color: #FFE08C;"><span id="body">-</span></td>
		<td><span id="jabara">-</span></td>
		<td><span id="pillar">-</span></td>
	</tr>
	<tr>
		<td id="body_lr" style="background-color: #FFE08C;" onclick="toggleLR('body');"></td>
		<td></td>
		<td id="pillar_lr" onclick="toggleLR('pillar');"></td>
	</tr>
	<tr>
		<th colspan="3" style="background-color: #FFE08C;">소비자 판매금액</th>
	</tr>
	<tr>
		<td colspan="3" style="background-color: #FFE08C; font-weight: bold;"><span id="tot_price">-</span></td>
	</tr>
</table>
<table id="slideOption">
	<tr>
		<th width="33.3%" class="infoHdr" style="padding: 5px 0 5px 0;">품목</th> 
		<th width="33.3%" class="infoHdr">품목명</th>
		<th width="33.3%" class="infoHdr">수량</th>
	</tr>
	<tbody id="slideOptionBody">
	</tbody>
</table>
천고 마감은 최대 2,410mm까지 가능<br />
장롱 2,180mm + 230mm(필라 마감)<br />
※ 좌우 수평 마감 차이 고려 10mm 여유 필요함<br /><br />
판매가 : 추가 재단발생 시 10만원 부담으로 진행<br /><br />
설치공간 및 제품명 입력<br />
※ 좌우폭은 최소 2,020mm 이상, 5,000mm이하 범위 기준<br />
※ 높이는 최소 2,230mm 이상, 2,410mm이하 범위 기준 / 좌우 마감폭은 최소 40mm 이상필요<br />
<br />
<script type="text/javascript">
function init() {
	$('.ttt1').hide();
	$('.ttt2').attr('colspan', 2);
	$('.ttt2').attr('width', '42%');
}
function tt() {
	$('.ttt1').toggle();
	if ($('.ttt2').attr('colspan') == 2) {
		$('.ttt2').attr('colspan', 1);
		$('.ttt2').attr('width', '21%');
	} else {
		$('.ttt2').attr('colspan', 2);
		$('.ttt2').attr('width', '42%');
	}
}
</script>
<button onclick="tt();">계산</button>
<table id="itemList">
	<thead>
		<tr>
			<th colspan="5" style="background-color: #997000; border-color: #997000;"><span id="itemKind">-</span></th>
		</tr>
		<tr>
			<th colspan="3">구분</th>
			<th colspan="2">모델번호</th>
		</tr>
		<tr>
			<th width="16%">수량</th>
			<th class="ttt1" width="21%">출고가</th>
			<th class="ttt1" width="21%">출고금액</th>
			<th class="ttt2" width="21%">소비자가</th>
			<th class="ttt2" width="21%">판매금액</th>
		</tr>
	</thead>
	<tbody id="itemListBody">
		<tr class="rt">
			<td colspan="2">합 계</td>
			<td style="text-align: right;">-</td>
			<td></td>
			<td style="text-align: right;">-</td>
		</tr>
	</tbody>
</table>
</div>
<div class="layer">
	<div class="bg"></div>
	<div id="layer2" class="pop-layer">
		<div class="pop-container">
			<div class="pop-conts">
				<!--content //-->
				제목 <input type="text" id="title" style="width: 100%;" maxlength="50">
				<div id="storeAlert"></div>
				<div class="btn-r">
					<a href="javascript:;" class="cbtn" onclick="slideStore();">저장</a>
					<a href="javascript:;" class="cbtn">취소</a>
				</div>
				<!--// content-->
			</div>
		</div>
	</div>
</div>
</body>
</html>