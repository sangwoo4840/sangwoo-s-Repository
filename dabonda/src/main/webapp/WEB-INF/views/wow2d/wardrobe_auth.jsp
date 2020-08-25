<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
<title>장롱 운영표 대리점 권한 관리</title>
<style type="text/css">
#contents { -ms-user-select: none; -moz-user-select: -moz-none; -khtml-user-select: none; -webkit-user-select: none; user-select: none; }
#list_agent, #list_auth { width: 350px; height: 600px; margin: 0 auto; border: 1px solid #aaa; overflow-y: scroll; }
.list_agent_item, .list_auth_item { padding: 3px; cursor: pointer; }
.list_agent_item:hover, .selected { background: #777 !important; color: white; }
.list_agent_item:hover span, .selected span { background: white !important; color: black; }
.team, .wrtype { margin-right: 5px; top: 0; padding: 2px; font-size: 8pt; background: #555; color: white; }

#all_add, #all_sub { border: 1px solid #754C00; padding: 0 3px 0 3px; font-size: 9pt; cursor: pointer; }
#all_add { border-right: 0; }
#all_sub { border-left: 0; }
.selected_brown { background: #997000; color: white; }
#list_kind { width: 750px; border: 1px solid #aaa; display: inline-block; }
.list_kind_item { border: 1px solid #aaa; margin: 3px 10px 3px 10px; padding: 0 5px 5px 5px; float: left; cursor: pointer; }
.list_kind_item:hover { background: #aaa; }
</style>
<script src="/js/jquery-1.9.1.js"></script>
<script type="text/javascript">
$(function() {
	getAgent();
	getKind();
});

function getAgent() {
	$.ajax({
		url : '/wardrobe/auth/agent.json',
		dataType : 'json',
		type : 'get',
	    success : function (result) {
	    	$.each(result, function(key) {
	    		var list = result[key];
		    	var content = '';
		    	
		    	if (list == '' || list == null) {
// 		    		alert('권한이 없습니다.');
		    		history.back();
		    	}
		    	
		    	for (i = 0; i < list.length; i++) {
		    		content = '<div id="';
		    		content += list[i].email;
		    		content += '" class="list_agent_item" style="background: ';
		    		if (i % 2 == 0) content += '#eee';
		    		else content += '#fff';
		    		content += ';" onclick="selectList(this.id, \'';
		    		content += list[i].name;
		    		content += '\')"><span class="team">';
		    		content += list[i].team;
		    		content += '</span>';
		    		content += list[i].name;
		    		content += '</div>';
		    		$('#list_agent').append(content);
		    	}
	    	});
		},
		beforeSend : function() {},
		complete:function() {},
	    error:function(e) {},
	    timeout:180000
	});
}

function getKind() {
	$.ajax({
		url : '/wardrobe/auth/kind.json',
		dataType : 'json',
		type : 'get',
	    success : function (result) {
	    	$.each(result, function(key) {
	    		var list = result[key];
		    	var content = '';
		    	
		    	for (i = 0; i < list.length; i++) {
		    		content = '<div class="list_kind_item" onclick="selectKind(\'';
		    		content += list[i].wr_cd;
		    		content += '\', \'';
		    		content += list[i].name;
		    		content += '\')"><span class="wrtype" ';
		    		switch (list[i].type) {
		    		case 'slide': content += 'style="background: #22741C;">슬라이드장'; break;
		    		case 'builtin': content += 'style="background: #24468A;">불박이장'; break;
		    		case 'dressroom': content += 'style="background: #791212;">드레스룸'; break;
		    		}
		    		content += '</span>';
		    		content += list[i].name;
		    		content += '</div>';
		    		$('#list_kind').append(content);
		    	}
	    	});
		},
		beforeSend : function() {},
		complete:function() {},
	    error:function(e) {},
	    timeout:180000
	});
}

function selectAddSub(addsub) {
	if (addsub == 'add') {
		$('#all_add').addClass('selected_brown');
		$('#all_sub').removeClass('selected_brown');
	} else {
		$('#all_add').removeClass('selected_brown');
		$('#all_sub').addClass('selected_brown');
	}		
}

function selectKind(wr_cd, name) {
	var addTxt = '';
	var addsub = '';
	if ($('#all_add').hasClass('selected_brown')) {
		addTxt = '추가';
		addsub = 'add';
	} else if ($('#all_sub').hasClass('selected_brown')) {
		addTxt = '삭제';
		addsub = 'sub';
	}
	if (confirm(name + ' 권한을 전체' + addTxt + ' 하시겠습니까?')) {
		$.ajax({
			url : '/wardrobe/auth/setall',
			dataType : 'json',
			type : 'post',
			data : {wr_cd : wr_cd,
				addsub : addsub},
		    success : function (result) {
		    	$.each(result, function(key) {
		    		var list = result[key];
		    		var rslt = list[0].result;
		    		
		    		if (rslt == 0) {
// 		    			$('#alertSave').html('저장에 실패했습니다.');
		    		} else if (rslt == 1) {
		    			window.location.reload();
		    		}
		    	});
		    },
			beforeSend : function() {},
		    complete : function() {},
		    error : function(e) {},
		    timeout : 180000
		});
	} else {
	}
}

var email = '';
function selectList(did, name) {
	$('.list_agent_item').removeClass('selected');
	$('div[id="'+did+'"]').addClass('selected');
	$('#select_agent').html(name);
	$('input:checkbox[id=cb_all]').prop('checked', false);
	$("#list_auth").html('');
	
	email = did;
	
	$.ajax({
		url : '/wardrobe/auth/auth.json',
		dataType : 'json',
		type : 'get',
		data : { email : email },
	    success : function (result) {
	    	$.each(result, function(key) {
	    		var list = result[key];
		    	var content = '';
		    	
		    	for (i = 0; i < list.length; i++) {
		    		content = '<div class="list_auth_item" onclick="selectAuth(\'';
		    		content += list[i].wr_cd;
		    		content += '\')"><input type="checkbox" id="';
		    		content += list[i].wr_cd;
		    		content += '" name="cb_auth"';
		    		if (list[i].auth == 'Y')
		    			content += ' checked';
		    		content += '><span class="wrtype" ';
		    		switch (list[i].type) {
		    		case 'slide': content += 'style="background: #22741C;">슬라이드장'; break;
		    		case 'builtin': content += 'style="background: #24468A;">불박이장'; break;
		    		case 'dressroom': content += 'style="background: #791212;">드레스룸'; break;
		    		}
		    		content += '</span>';
		    		content += list[i].name;
		    		if (list[i].status == 'T')
		    			content += '(테스트)';
		    		else if (list[i].status == 'N')
		    			content += '(사용안함)';
		    		content += '</div>';
		    		$('#list_auth').append(content);
		    	}
	    	});
		},
		beforeSend : function() {},
		complete:function() {},
	    error:function(e) {},
	    timeout:180000
	});
}

function selectAuth(aid) {
	if ($('input:checkbox[id=' + aid + ']').is(':checked'))
		$('input:checkbox[id=' + aid + ']').prop('checked', false);
	else
		$('input:checkbox[id=' + aid + ']').prop('checked', true);
}

function checkAll() {
	if ($('input:checkbox[id=cb_all]').is(':checked'))
		$('input:checkbox[name=cb_auth]').prop('checked', true);
	else
		$('input:checkbox[name=cb_auth]').prop('checked', false);
}

function setAuth() {
	if (confirm('권한을 설정하시겠습니까?')) {
		var auth = '';
		$('input:checkbox[name=cb_auth]:checked').each(function (key, val) {
			auth += $(this).attr('id') + ',';
		});
		
		$.ajax({
			url : '/wardrobe/auth/set',
			dataType : 'json',
			type : 'post',
			data : {email : email,
				auth : auth},
		    success : function (result) {
		    	$.each(result, function(key) {
		    		var list = result[key];
		    		var rslt = list[0].result;
		    		
		    		if (rslt == 0) {
// 		    			$('#alertSave').html('저장에 실패했습니다.');
		    		} else if (rslt == 1) {
		    			window.location.reload();
		    		}
		    	});
		    },
			beforeSend : function() {},
		    complete : function() {},
		    error : function(e) {},
		    timeout : 180000
		});
	} else {
	}
}
</script>
</head>
<body>
<div id="contents" style="width: 800px; margin: 0 auto; border: 1px solid #aaa;">
<table style="width: 800px;">
	<tr>
		<td colspan="2" style="padding-left: 21.5px;">전체권한 <span id="all_add" class="selected_brown" onclick="selectAddSub('add')">추가</span><span id="all_sub" onclick="selectAddSub('sub')">삭제</span></td>
	</tr>
	<tr>
		<td colspan="2" style="padding-left: 21.5px;">
			<div id="list_kind"></div>
		</td>
	</tr>
	<tr>
		<td style="padding-left: 21.5px;">선택 - <span id="select_agent">없음</span></td><td style="padding-left: 26px;"><input type="checkbox" id="cb_all" onclick="checkAll()"><label for="cb_all" style="cursor: pointer;">전체</label></td>
	</tr>
	<tr>
		<td style="width: 50%;">
			<div id="list_agent"></div>
		</td>
		<td style="width: 50%;">
			<div id="list_auth"></div>
		</td>
	</tr>
	<tr>
		<td colspan="2" style="text-align: center; border-top: 1px solid #aaa; cursor: pointer;" onclick="setAuth()">저장</td>
	</tr>
</table>
</div>
</body>
</html>