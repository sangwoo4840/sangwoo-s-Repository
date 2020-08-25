<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>JANG IN Maps</title>
<style type="text/css">
@import url('http://fonts.googleapis.com/earlyaccess/nanumgothic.css');
body, table, div, p, button {font-family:'Nanum Gothic';}
body {height: 100%; margin: 0 auto; overflow: hidden;}
select {height: 22px;}
input {font-size: 10pt; }
button {height: 24px; font-size: 9pt; cursor: pointer; font-weight: bold; color: white; background-color: #6799FF; border-color: #6799FF; border-radius: 3px;}
th {border-right: 1px solid #ccc;}
#header {
	border-bottom: 1px solid black;
	height: 50px;
}
#searchbar {
	width: 100%;
	min-width: 400px;
	padding-top: 12px;
	cursor: default;
}
#mapsdata {
	margin-left: 20px;
	background-color: #ED9595; border-color: #ED9595;
	display: none;
}
#agencydata {
	margin-left: 7px;
	background-color: #53C14B; border-color: #53C14B;
}
#apartmentdata {
	margin-left: 3px;
	background-color: #53C14B; border-color: #53C14B;
}
#menu {
	width: 300px;
	border-right: 1px solid black;
	float: left;
}
#searchresult {
	overflow-y: scroll;
	font-size: 10pt;
}
#rnumber {
	width: 30px;
	height: 30px;
	padding-top: 10px;
	float: left;
	color: #4374D9;
}
#rdetail {
	width: 230px;
	float: left;
	overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
}
#map {
	float: left;
}
#legend {
	width: 100%;
	max-width: 520px;
	height: 20px;
	border: 1px solid #eee;
	border-radius: 10px;
	font-size: 10pt;
	padding: 5px;
	z-index: 99998;
	position: absolute;
	right: 10px; bottom: 10px;
	background-color: white;
	cursor: default;
	overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
}
#legend0, #legend1, #legend2, #legend3, #legend4, #legend5, #legend6, #legend7, #legend8, #legend9 {
	cursor: pointer;
}
.legendIcon {
	width: 15px;
	vertical-align: middle;
}
#datagrid, #btnData {
	display: none;
}

.area {
    position: absolute;
    background: #fff;
    border: 1px solid #888;
    border-radius: 3px;
    font-size: 12px;
    top: -5px;
    left: 15px;
    padding:2px;
}

.info {
    font-size: 12px;
    padding: 5px;
}
.info .title {
    font-weight: bold;
}
.info .iaddr {
	overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
}

.result {
	border-bottom: 1px solid #eee;
	padding: 10px;
	overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
}
.result .ryyyymm {
	color: #999;
	font-size: 11px;
}
.result .rlocation {
	font-size: 11px;
}
.result .rapt_nm {
	padding-top: 3px;
	font-weight: bold;
}
.bold {
	font-weight: bold;
}
.urlLink {
	text-decoration: none;
	color: #2F9D27;
}
</style>
<link rel="stylesheet" type="text/css" media="screen" href="/jqueryui/jquery-ui.css" />
<link rel="stylesheet" type="text/css" media="screen" href="/jqgrid/css/ui.jqgrid.css" />
<script src="/js/jquery-1.9.1.js"></script>
<script src="/jqueryui/jquery-ui.js"></script>
<script src="/jqgrid/js/i18n/grid.locale-kr.js"></script>
<script src="/jqgrid/js/jquery.jqGrid.min.js"></script>
<script type="text/javascript">
var gridWidth = screen.availWidth;
var gridHeight = $(window).height() - 135;

$(document).ready(function() {
	var userLevel = ${userLevel};
	if (userLevel < 4) {
		$('#mapsdata').show();
	}
	resizeContents();
	
	$('#searchType').change(function() {
		var html = '';
		if ($(this).val() == '0')
			html = '<input type="month" id="yyyymm" style="height: 20px;" value="${date}" onkeydown="onEnter(0);"> <button id="searchYmBtn" onclick="onClick(0);">검색</button><button id="mapsdata" onclick="popMapsData();">관리</button><span id="btnData"><button id="agencydata" onclick="displayAgencyData();">대리점</button><button id="apartmentdata" onclick="displayApartmentData();">아파트</button></span>';
		else
			html = '<input type="text" id="address" style="height: 18px; width: 250px;" onkeydown="onEnter(1);"> <button id="searchAdBtn" onclick="onClick(1);">검색</button><button id="mapsdata" onclick="popMapsData();">관리</button><span id="btnData"><button id="agencydata" onclick="displayAgencyData();">대리점</button><button id="apartmentdata" onclick="displayApartmentData();">아파트</button></span>';
		
		$('#searchForm').html('');
		$('#searchForm').append(html);
		if (userLevel < 4) {
			$('#mapsdata').show();
		}
	});
});
$(window).resize(function() {
	resizeContents();
});

function onClick(sType) {
	if (sType == 0) {
		$('#searchresult').html('');
		searchApartment();
	} else {
		var addr = $('#address').val();
		displayAddr(addr);
	}
	
	return;
}

function onEnter(sType) {
	if (event.keyCode == 13) {
		if (sType == 0) {
			$('#searchresult').html('');
			searchApartment();
		} else {
			var addr = $('#address').val();
			displayAddr(addr);
		}
		
		return;
	}
}

function resizeContents() {
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	var headerHeight = $("#header").height();
	$('#searchresult').css({'height':(windowHeight-headerHeight-2.5)+'px'});
	$('#map').css({'width':(windowWidth-301)+'px'});
	$('#map').css({'height':(windowHeight-headerHeight-2.5)+'px'});
}

function searchApartment() {
	var date = $('#yyyymm').val();
	displayApartment(date);
}

function mouseOver(i) {
	var id = '#' + i;
	$(id).css("background-color","#EBF7FF");
}

function mouseOut(i) {
	var id = '#' + i;
	$(id).css("background-color","white");
}

function popMapsData() {
	if ($('#contents').css('display') == 'none') {
		$("#contents").show();
		$('#datagrid').hide();
		$('#btnData').hide();
	} else {
		$("#contents").hide();
		$('#datagrid').show();
		$('#btnData').show();
	}
}

function displayAgencyData() {
	$('#datagrid').html('<table id="grid"></table><div id="pagernav"></div>');
	$('#grid').jqGrid({  
        //ajax 호출할 페이지
        url:'/maps/agencymap.json',
        //로딩중일때 출력시킬 로딩내용
        loadtext : 'Loading...',
        //응답값
        datatype: 'json',
        width: gridWidth,
        height: gridHeight,
        rowNum: 9999,
        pager: '#pagernav',
        colNames:['No','영업소','대리점','직배업체','전문점여부','담당소장','대리점코드','사업자번호','대표자명','개인E메일','연락처','매장 영업시간','주차공간','지번주소','도로명주소','우편번호','x','y','사용여부'],
        colModel:[
            {name:'seq',width:40,align:'center'},
            {name:'office',width:70,align:'center',editable:true,edittype:"select",editoptions:{value:"강남:강남;강동:강동;강북:강북;광주1:광주1;광주2:광주2;대구1:대구1;대구2:대구2;부산1:부산1;부산2:부산2"}},
            {name:'agency',width:120,editable:true,editrules:{required:true},key:true},
            {name:'direct',width:100,align:'center',editable:true,edittype:"select",editoptions:{value:"서부직배:서부직배;남부직배:남부직배;동부직배:동부직배;충청직배:충청직배;원주직배:원주직배;대구직배:대구직배;전북직배:전북직배;호남직배:호남직배;부산직배:부산직배;제주:제주"}},
            {name:'specialty',width:100,align:'center',editable:true,edittype:"select",editoptions:{value:"일반점:일반점;전문점:전문점;준전문점-일반:준전문점-일반;준전문점-전문:준전문점-전문"}},
            {name:'manager',width:100,align:'center',editable:true},
            {name:'bp_cd',width:90,align:'center',editable:true},
            {name:'licensee_no',width:90,align:'center',editable:true},
            {name:'licensee_nm',width:90,align:'center',editable:true},
            {name:'licensee_email',editable:true},
            {name:'phone',align:'center',width:110,editable:true},
            {name:'business_hours',align:'center',width:100,editable:true},
            {name:'parking_lot',width:60,align:'right',editable:true},
            {name:'lot_addr',align:'center',editable:true},
            {name:'road_addr',align:'center',editable:true},
            {name:'zip_code',width:70,align:'center',editable:true},
            {name:'x',width:90,align:'right',editable:true,editrules:{required:true}},
            {name:'y',width:90,align:'right',editable:true,editrules:{required:true}},
            {name:'ext1',formatter : function(cellValue,options,rowObject) {
                if (cellValue == 'use') {
                    return '사용';
               } else {
                    return '미사용';
               }},width:70,align:'center',editable:true,edittype:'checkbox',editoptions:{value:'use:disuse'}
            }
        ],
        jsonReader: {
        	id: 'agency',
        	root: 'agencymap'
        },
        caption: '판매 매장 정보',
        editurl: '/maps/mapsdata/editagency'
    }).navGrid('#pagernav', {edit:true,add:true,del:true,search:false}).trigger('reloadGrid');
}

function displayApartmentData() {
	var month = $('#yyyymm').val();
	$('#datagrid').html('<table id="grid"></table><div id="pagernav"></div>');
	$('#grid').jqGrid({
        //ajax 호출할 페이지
        url:'/maps/apartmentmap.json?date=' + month,
        //로딩중일때 출력시킬 로딩내용
        loadtext : 'Loading...',
        //응답값
        datatype: 'json',
        width: gridWidth,
        height: gridHeight,
        rowNum: 9999,
        pager: '#pagernav',
        colNames:['No','고유ID','입주년월','단지명(아파트명)','세대수','공급면적','위치','주소','x','y','Dr.아파트 URL'],
        colModel:[
            {name:'seq',width:40,align:'center'},
            {name:'id',width:50,align:'center',editable:false,key:true},
            {name:'yyyymm',width:60,align:'center',editable:true,editoptions:{
            	   dataInit:function(el){
            	              $(el).datepicker({dateFormat:'yy-mm',
            	            	    prevText: '이전 달',
            	            	    nextText: '다음 달',
            	            	    monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
            	            	    monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
            	            	    dayNames: ['일','월','화','수','목','금','토'],
            	            	    dayNamesShort: ['일','월','화','수','목','금','토'],
            	            	    dayNamesMin: ['일','월','화','수','목','금','토'],
            	            	    showMonthAfterYear: true,
            	            	    yearSuffix: '년'}); //Datepicker 연동
            	   }
            	},editrules:{required:true}
            },
            {name:'apt_nm',editable:true,editrules:{required:true}},
            {name:'household_no',width:50,align:'center',editable:true},
            {name:'area',width:70,align:'center',editable:true},
            {name:'location',width:120,editable:true},
            {name:'addr',editable:true},
            {name:'x',width:90,align:'right',editable:true,editrules:{required:true}},
            {name:'y',width:90,align:'right',editable:true,editrules:{required:true}},
            {name:'url',editable:true}
        ],
        jsonReader: {
        	id: 'apartment',
        	root: 'apartmentmap'
        },
        caption: '아파트 입주 정보',
        editurl: '/maps/mapsdata/editapartment'
    }).navGrid('#pagernav', {edit:true,add:true,del:true,search:false}).trigger('reloadGrid');
}
</script>
</head>
<body>
<div id="header">
	<div id="searchbar"><a href="/maps"><img src="/images/logo.png" width="80px"></a>
		<select id="searchType">
			<option value="0">입주년월</option>
			<option value="1">주소</option>
		</select> 
		<span id="searchForm"><input type="month" id="yyyymm" style="height: 20px;" value="${date}" onkeydown="onEnter(0);"> <button id="searchYmBtn" onclick="onClick(0);">검색</button>
		<button id="mapsdata" onclick="popMapsData();">관리</button><span id="btnData"><button id="agencydata" onclick="displayAgencyData();">대리점</button><button id="apartmentdata" onclick="displayApartmentData();">아파트</button></span></span>
		<span style="position: fixed; right: 0;" id="result"></span>
	</div>
</div>
<div id="contents">
	<div id="menu">
		<div id="searchresult"></div>
	</div>
	<div id="map"></div>
	<div id="legend">
		<span id="legend0" onclick="clickLegend('본사');"><img src="/images/maps/본사.png" class="legendIcon"> 본사</span>
		<span id="legend1" onclick="clickLegend('강남');"><img src="/images/maps/강남.png" class="legendIcon"> 강남</span>
		<span id="legend2" onclick="clickLegend('강동');"><img src="/images/maps/강동.png" class="legendIcon"> 강동</span>
		<span id="legend3" onclick="clickLegend('강북');"><img src="/images/maps/강북.png" class="legendIcon"> 강북</span>
		<span id="legend4" onclick="clickLegend('광주1');"><img src="/images/maps/광주1.png" class="legendIcon"> 광주1</span>
		<span id="legend5" onclick="clickLegend('광주2');"><img src="/images/maps/광주2.png" class="legendIcon"> 광주2</span>
		<span id="legend6" onclick="clickLegend('대구1');"><img src="/images/maps/대구1.png" class="legendIcon"> 대구1</span>
		<span id="legend7" onclick="clickLegend('대구2');"><img src="/images/maps/대구2.png" class="legendIcon"> 대구2</span>
		<span id="legend8" onclick="clickLegend('부산1');"><img src="/images/maps/부산1.png" class="legendIcon"> 부산1</span>
		<span id="legend9" onclick="clickLegend('부산2');"><img src="/images/maps/부산2.png" class="legendIcon"> 부산2</span>
	</div>
</div>
<div id="datagrid"><table id="grid"></table><div id="pagernav"></div></div>

 <!-- <script type="text/javascript" src="http://apis.daum.net/maps/maps3.js?apikey=457a0d5e7a3a3778f6f070093b6dfd91&libraries=clusterer,services"></script>
카카오  api 키 변경 18/11/27-->

<script type="text/javascript" src="http://dapi.kakao.com/v2/maps/sdk.js?appkey=ed3ba93de9ef9f3724eaba73303e143c&libraries=clusterer,services"></script>

<script>
resizeContents();
var infowindow = new daum.maps.InfoWindow({zIndex:9999});
var aptinfowindow = new daum.maps.InfoWindow({zIndex:9998,removable: true});
var customOverlay = new daum.maps.CustomOverlay({});

var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new daum.maps.LatLng(36.49325755261345, 127.97017714071121), // 지도의 중심좌표
        level: 12 // 지도의 확대 레벨
    };

var map = new daum.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

var mapTypeControl = new daum.maps.MapTypeControl();

//지도에 컨트롤을 추가해야 지도위에 표시됩니다
//daum.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);

//지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new daum.maps.ZoomControl();
map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);

// 마커 이미지의 이미지 주소입니다
var imageSrc;
var aptImageSrc = '/images/maps/aptMarker01.png';
var addrImageSrc = '/images/maps/addrMarker01.png';

//마커 이미지의 이미지 크기 입니다
var imageSize = new daum.maps.Size(24, 35); 
var aptImageSize = new daum.maps.Size(21, 31);
var addrImageSize = new daum.maps.Size(32, 32);

// 마커 이미지를 생성합니다
var markerImage; 
var aptMarkerImage = new daum.maps.MarkerImage(aptImageSrc, aptImageSize);
var addrMarkerImage = new daum.maps.MarkerImage(addrImageSrc, addrImageSize);

var agencyNo = {'본사' : 0, '강남' : 1, '강동' : 2, '강북' : 3, '광주1' : 4, '광주2' : 5, '대구1' : 6, '대구2' : 7, '부산1' : 8, '부산2' : 9};
var agencyIdx = {'본사' : 0, '강남' : 0, '강동' : 0, '강북' : 0, '광주1' : 0, '광주2' : 0, '대구1' : 0, '대구2' : 0, '부산1' : 0, '부산2' : 0};
var agencyToggle = {'본사' : 0, '강남' : 0, '강동' : 0, '강북' : 0, '광주1' : 0, '광주2' : 0, '대구1' : 0, '대구2' : 0, '부산1' : 0, '부산2' : 0};
var agencyData = new Array(new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array());
var agencyMarker = new Array(new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array(), new Array());

$.ajax({
	url: '/maps/agencymap.json',
	dataType: 'json',
	type : "get",
	//data : {date : date},
	success: function(data) {
		var position = {
				office: '본사',
				manager: '서승리차장',
			    agency: '본사전시장',
			    bp_cd: '41',
			    licensee_nm: '조재민',
			    phone: '032-822-7772',
			    zip_code: '21693',
			    road_addr: '인천 남동구 아암대로 1139',
			    x: 37.38631213588405,
			    y: 126.69419128444119,
			    imageSrc: '/images/maps/본사.png',
			    idx: 0
			};
		
		agencyData[agencyNo[position.office]][0] = position;
		displayMarker(position);
		agencyIdx[position.office]++;
		
		var position2 = {
				office: '본사',
				manager: '정승민대리',
			    agency: '잠실직영점',
			    bp_cd: '61',
			    licensee_nm: '조재민',
			    phone: '02-2042-1900',
			    zip_code: '05567',
			    road_addr: '서울특별시 송파구 백제고분로 177',
			    x: 37.5049838902,
			    y: 127.0866731146,
			    imageSrc: '/images/maps/본사.png',
			    idx: 1
			};
		
		agencyData[agencyNo[position2.office]][1] = position2;
		displayMarker(position2);
		agencyIdx[position2.office]++;
		
		var position3 = {
				office: '본사',
				manager: '김상규과장',
			    agency: '일산직영점',
			    bp_cd: '71',
			    licensee_nm: '조재민',
			    phone: '031-924-5989',
			    zip_code: '10233',
			    road_addr: '경기도 고양시 일산서구 경의로 893 (덕이동)',
			    x: 37.6969288,
			    y: 126.7590018,
			    imageSrc: '/images/maps/본사.png',
			    idx: 2
			};
		
		agencyData[agencyNo[position3.office]][2] = position3;
		displayMarker(position3);
		agencyIdx[position3.office]++;
		
		var position4 = {
				office: '본사',
				manager: '김병국사원',
			    agency: '서구아울렛',
			    bp_cd: '81',
			    licensee_nm: '조재민',
			    phone: '032-572-1631',
			    zip_code: '10233',
			    road_addr: '인천광역시 서구 석남동 223-739',
			    x:  37.4995701678, 
			    y: 126.6535547446,
			    imageSrc: '/images/maps/본사.png',
			    idx: 3
			};
		
		agencyData[agencyNo[position4.office]][3] = position4;
		displayMarker(position4);
		agencyIdx[position4.office]++;
		
		var position5 = {
				office: '본사',
				manager: '서승리차장',
			    agency: '고양직영점',
			    bp_cd: '91',
			    licensee_nm: '조재민',
			    phone: '02-353-7622',
			    zip_code: '10596',
			    road_addr: '경기도 고양시 덕양구 동산동 76-22',
			    x:  37.6463556665,
			    y: 126.8980109143,
			    imageSrc: '/images/maps/본사.png',
			    idx: 4
			};
		
		agencyData[agencyNo[position5.office]][4] = position5;
		displayMarker(position5);
		agencyIdx[position5.office]++;
		
		$.each(data, function(key, val) {
			for(i = 0; i < val.length; i++) {
				if (val[i].ext1 == 'use') {
					var positions = {
						office: val[i].office,
						manager: val[i].manager,
				    	agency: val[i].agency,
				    	bp_cd: val[i].bp_cd,
				    	licensee_nm: val[i].licensee_nm,
				    	phone: val[i].phone,
				    	zip_code: val[i].zip_code,
				    	road_addr: val[i].road_addr,
				    	x: val[i].x,
				    	y: val[i].y,
				    	imageSrc: '/images/maps/' + val[i].office + '.png',
				    	idx: agencyIdx[val[i].office]
					};
				
					agencyData[agencyNo[positions.office]][agencyIdx[positions.office]] = positions;
					displayMarker(positions);
					agencyIdx[positions.office]++;
				}
			}
		});
	},
	error: function() {
		$('#map').html('<div style="text-align: center; padding: 10px; padding-bottom: 20px;">정보를 불러올 수 없습니다.</div>');
	}
});

function displayMarker(place) {
	markerImage = new daum.maps.MarkerImage(place.imageSrc, imageSize);
    // 마커를 생성하고 지도에 표시합니다
    var marker = new daum.maps.Marker({
    	map: map, // 마커를 표시할 지도
        position: new daum.maps.LatLng(place.x, place.y),
        title : place.agency, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage // 마커 이미지 
    });

    agencyMarker[agencyNo[place.office]][place.idx] = marker;
	
    // 마커에 클릭이벤트를 등록합니다
    daum.maps.event.addListener(marker, 'mouseover', function() {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent('<div class="info" style="padding-left:10px;">' + place.office + '(' + place.manager + ')<br /><span class="bold">' + place.agency + '</span>(' + place.bp_cd + ')<br />대표자 : ' + place.licensee_nm + '(' + place.phone + ')<br />(' + place.zip_code + ')' + place.road_addr + '&nbsp;&nbsp;&nbsp;</div>');
        infowindow.open(map, marker);
    });
    
    daum.maps.event.addListener(marker, 'mouseout', function() {
        // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
        infowindow.close();
    });
}

function clickLegend(office) {
	var id = '#legend' + agencyNo[office];
	
	if (agencyToggle[office] == 0) {
		for (i = 0; i < agencyIdx[office]; i++) {
			agencyMarker[agencyNo[office]][i].setMap(null);
		}
		agencyToggle[office] = 1;
		$(id).css('color', '#aaa');
	} else {
		for (i = 0; i < agencyIdx[office]; i++) {
			displayMarker(agencyData[agencyNo[office]][i]);
		}
		agencyToggle[office] = 0;
		$(id).css('color', 'black');
	}
}

var clusterer = new daum.maps.MarkerClusterer({
	map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
	averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
	minLevel: 10 // 클러스터 할 최소 지도 레벨 
});

var circles = [];
var contents = [];

displayApartment('${date}');
function displayApartment(date) {
	clusterer.clear();
	
	for ( var i = 0; i < circles.length; i++ ) {
		circles[i].setMap(null);
	}   
	circles = [];
	contents = [];
	
	map.setCenter(new daum.maps.LatLng(36.49325755261345, 127.97017714071121));
	map.setLevel(12);
	
	$.ajax({
		url: '/maps/apartmentmap.json',
		dataType: 'json',
		type : "get",
		data : {date : date},
		success: function(data) {
			var markers = $(data.apartmentmap).map(function(i, position) {
		        return new daum.maps.Marker({
		            position : new daum.maps.LatLng(position.x, position.y),
		        	image : aptMarkerImage
		        });
		    });
			
		    clusterer.addMarkers(markers);
		    
			$.each(data, function(key, val) {
				for(i = 0; i < val.length; i++) {
					var positions = {
						yyyymm: val[i].yyyymm,
						apt_nm: val[i].apt_nm,
						household_no: val[i].household_no,
						area: val[i].area,
						location: val[i].location,
						addr: val[i].addr,
					    x: val[i].x,
					    y: val[i].y,
					    url: val[i].url,
					    seq: i
					};
					
					var ym = positions.yyyymm.split('-');
					
					$('#searchresult').append('<div id="div' + i + '" class="result" onclick="clickBounds(' + i + ', ' + positions.x + ', ' + positions.y + ');" onmouseover="mouseOver(this.id);" onmouseout="mouseOut(this.id);"><div id="rnumber">'
					+ (i + 1) + '</div><div id="rdetail"><div style="padding-top: 3px;"><span class="ryyyymm">' + ym[0] +'년 ' + ym[1] + '월 | </span><span class="rlocation">' + positions.location + '</span></div><div class="rapt_nm">' + positions.apt_nm + '</div></div></div>');
					
					displayCircle(positions);
				}
			});
		},
		error: function() {
			$('#map').html('<div style="text-align: center; padding: 10px; padding-bottom: 20px;">정보를 불러올 수 없습니다.</div>');
		}
	});
}

var beforeId = null;
function displayCircle(place) {
	var circle = new daum.maps.Circle({
	    center : new daum.maps.LatLng(place.x, place.y),  // 원의 중심좌표 입니다 
	    radius: 500, // 미터 단위의 원의 반지름입니다 
    	strokeWeight: 2, // 선의 두께입니다 
	    strokeColor: '#75B8FA', // 선의 색깔입니다
    	strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
	    strokeStyle: 'solid', // 선의 스타일 입니다
	    fillColor: '#CFE7FF', // 채우기 색깔입니다
	    fillOpacity: 0.3  // 채우기 불투명도 입니다   
	});

	// 지도에 원을 표시합니다 
	circle.setMap(map);
	circles.push(circle);
	
	daum.maps.event.addListener(circle, 'mouseover', function(mouseEvent) {
        customOverlay.setContent('<div class="area">' + place.apt_nm + '</div>');
        
        customOverlay.setPosition(mouseEvent.latLng);
        customOverlay.setMap(map);
    });
	
	daum.maps.event.addListener(circle, 'mousemove', function(mouseEvent) {
        customOverlay.setPosition(mouseEvent.latLng); 
    });

    daum.maps.event.addListener(circle, 'mouseout', function() {
        customOverlay.setMap(null);
    }); 

    var content = '<div class="info">' + 
    '   <table style="text-align: left;"><tr><th style="border-top: 1px solid #ccc;">입주년월</th><td style="border-top: 1px solid #ccc;">' + place.yyyymm + '</td></tr>' +
    '   <tr><th>단지명</th><td><span class="bold">' + place.apt_nm + '</span></td></tr>' +
    '   <tr><th>세대수</th><td>' + place.household_no + '</td></tr>' +
    '   <tr><th>공급면적</th><td>' + place.area + ' m<sup>2</sup></td></tr>' +
    '   <tr><th style="border-bottom: 1px solid #ccc;">주소</th><td style="border-bottom: 1px solid #ccc;">' + place.addr + '</td></tr>' +
    '   <tr><td colspan="2" style="text-align: center;"><a class="urlLink" href="' + place.url + '" target="_blank"><기타정보></a></td></tr>' +
	'</div>';
	contents.push(content);
	
    // 다각형에 click 이벤트를 등록하고 이벤트가 발생하면 다각형의 이름과 면적을 인포윈도우에 표시합니다 
    daum.maps.event.addListener(circle, 'click', function(mouseEvent) {
		aptinfowindow.setContent(content); 
		aptinfowindow.setPosition(mouseEvent.latLng); 
		aptinfowindow.setMap(map);
		
		if (beforeId != null) {
			$(beforeId).unbind();
			$(beforeId).css("background-color", "white");
		}
		var id = '#div' + place.seq;
		beforeId = id;
		$(id).css("background-color", "#D9E5FF");
		$(id).mouseout(function() {
			$(id).css("background-color", "#D9E5FF");
		});
		$(id).attr("tabindex", -1).focus();
		$(id).removeAttr("tabindex");
    });
}

function clickBounds(i, x, y) {
	if (beforeId != null) {
		$(beforeId).unbind();
		$(beforeId).css("background-color", "white");
	}
	var bounds = new daum.maps.LatLngBounds();
	bounds.extend(new daum.maps.LatLng(x, y));
	map.setBounds(bounds);
	map.setLevel(5);
	
	aptinfowindow.setContent(contents[i]); 
	aptinfowindow.setPosition(new daum.maps.LatLng(x, y)); 
	aptinfowindow.setMap(map);
	
	var id = '#div' + i;
	beforeId = id;
	$(id).css("background-color", "#D9E5FF");
	$(id).mouseout(function() {
		$(id).css("background-color", "#D9E5FF");
	});
}

var geocoder = new daum.maps.services.Geocoder();
var addrInfowindow = new daum.maps.InfoWindow({zIndex:9997,removable:true});
var beforeAdMarker = null;
function displayAddr(addr) {

	// 주소로 좌표를 검색합니다
	geocoder.addressSearch(addr, function(result, status) {

	    // 정상적으로 검색이 완료됐으면 
		addrInfowindow.close();
	    if (beforeAdMarker != null)
	    	beforeAdMarker.setMap(null);
	        
	     if (status === daum.maps.services.Status.OK) {

	        var coords = new daum.maps.LatLng(result[0].y, result[0].x);

	        // 결과값으로 받은 위치를 마커로 표시합니다
	        var marker = new daum.maps.Marker({
	            map: map,
	            position: coords,
	        });
	        marker.setDraggable(true)
	        beforeAdMarker = marker;
	        
	        // 인포윈도우로 장소에 대한 설명을 표시합니다

	        addrInfowindow.setContent('<div style="padding:5px;"><pre>' +coords+ '</pre></div>');
	        addrInfowindow.open(map, marker);

	        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
	        map.setCenter(coords);
	        
	        var bounds = new daum.maps.LatLngBounds();
	    	bounds.extend(new daum.maps.LatLng(coords));
	    	function setBounds() {
	    	    // LatLngBounds 객체에 추가된 좌표들을 기준으로 지도의 범위를 재설정합니다
	    	    // 이때 지도의 중심좌표와 레벨이 변경될 수 있습니다
	    	    map.setBounds(bounds);
	    	}
	    	map.setLevel(5);
	        
	    } 
	});   
}
daum.maps.event.addListener(map, 'click', function(mouseEvent) {
    // 클릭한 위도, 경도 정보를 가져옵니다 
    var latlng = mouseEvent.latLng;
    
    var message = '<table><tr><td>' + latlng.getLat() + '</td><td>';
    message += latlng.getLng() + '</td></tr></table>';
    $('#result').html(message);
});
</script>
</body>
</html>