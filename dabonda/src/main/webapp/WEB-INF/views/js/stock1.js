$(document).ready(function(){
	var btn = $("#searchBtn");
	var search = $("#searchField");
    var header = $("#stockHeader");
    var list = $("#stockList");
    
	btn.hide();
    btn.click(function(){
        if(search.is(":visible")){
        	search.hide();
        	header.css({
        		"top" : "0px"
        	});
        	list.css({
        		"margin-top" : "50px"
        	});
        }else{
        	search.show();
        	btn.hide();
        	header.css({
        		"top" : "220px"
        	});
        	list.css({
        		"margin-top" : "270px"
        	});
        }
    });
    
    $(window).scroll(function(){
    	if ($(window).scrollTop() == 0){// && $(window).scrollTop() != $(document).height() - $(window).height()) {
    		search.show();
        	btn.hide();
        	header.css({
        		"top" : "220px"
        	});
        	list.css({
        		"margin-top" : "270px"
        	});
    	} else if ($(window).scrollTop() > 220){
	    	search.hide();
    		btn.show();
    		header.css({
    			"top" : "0px"
    		});
    		list.css({
	    		"margin-top" : "50px"
    		});
    	}
    });
	
});

function getMajor() {
	var company = $('#company').val();
	$.ajax({
		url : "/stock/major.json",
		dataType : "json",
		type : "get",
		data : {db : company},
	    success : function (result) {
	    	$.each(result, function(key) {
	    		var list = result[key];
		    	var content = "<select id=\"major\" onchange=\"getMinor(this.value);\">";
		    	for(i = 0; i < list.length; i++) {
		    		content += "<option value=\"";
		    		content += list[i].major_cd
		    		content += "\">";
		    		content += list[i].code_nm;
		    		content += "</option>";
		    	}
		    	content += "</select>";
		    	
				$("#majorField").html(content);
	    	});
		}
	});
}

function getMinor(value) {
	var company = $('#company').val();
	$.ajax({
		url : "/stock/minor.json",
		dataType : "json",
		type : "get",
		data : {major_cd : value,
					db : company},
	    success : function (result) {
	    	$.each(result, function(key) {
	    		var list = result[key];
		    	var content = "<select id=\"minor\">";
		    	for(i = 0; i < list.length; i++) {
		    		content += "<option value=\"";
		    		content += list[i].minor_cd
		    		content += "\">";
		    		content += list[i].code_nm;
		    		content += "</option>";
		    	}
		    	content += "</select>";
		    	
				$("#minorField").html(content);
	    	});
		}
	});
}

function getSelect() {
	var minor = '150';
	if ($('#company').val() == 'sb')
		minor = '400';
	getMajor();
	getMinor(minor);
}

var toggle = [];
function searchItem() {
	var company = $('#company').val();
	var major_cd = document.getElementById("major").value;
	var minor_cd = document.getElementById("minor").value;
	var item_cd = document.getElementById("item_cd").value;
	var item_nm = document.getElementById("item_nm").value;
	
	$.ajax({
		url : "/stock/stock.json",
		dataType : "json",
		type : "get",
		data : {major_cd : major_cd,
					minor_cd : minor_cd,
					item_cd : item_cd,
					item_nm : item_nm,
					db : company},
	    success : function (result) {
	    	$.each(result, function(key) {
	    		var list = result[key];
		    	var content = "";
		    	for (i = 0; i < list.length; i++) {
		    		toggle[list[i].rownum] = 0;
		    		content += "<div class=\"grid grid-pad\" id=\"";
		    		content += list[i].item_cd;
		    		content += "\" onclick=\"itemDetail(this.id,'";
		    		content += list[i].wk_end_dt;
		    		content += "','";
		    		content += list[i].wk_qty;
		    		content += "',";
		    		content += list[i].rownum;
		    		content += ");\" style=\"background-color: ";
		    		if (i % 2 == 0)
		    			content += "white";
		    		else
		    			content += "#FFFFCD";
		    		content += "\">";
		    		content += "<div class=\"col-10-12 mobile-col-10-12\">";
		    		content += "<div class=\"content\">";
		    		content += list[i].item_nm;
		    		content += "</div>";
		    		content += "</div>";
		    		content += "<div class=\"col-2-12 mobile-col-2-12\">";
		    		content += "<div class=\"content\">";
		    		content += list[i].issue_qty;
		    		content += "</div>";
		    		content += "</div>";
		    		content += "</div>";
		    	}
		    	
				$("#stockList").html(content);
	    	});
		},
		beforeSend : function(){
			$(".wrap-loading").removeClass("display-none");
	    },
	    complete:function(){
			$('.wrap-loading').addClass('display-none');
		},
	    error:function(e){
	    },
	    timeout:600000
	});
}
function itemDetail(item_cd, wk_end_dt, wk_qty, rownum) {
	var content = "<div id=\"";
	content += item_cd;
	content += "Detail\">";
	content += "<div class=\"col-6-12 mobile-col-6-12\">";
	content += "<div class=\"content\">";
	content += " ┗ ";
	content += item_cd;
	content += "</div>";
	content += "</div>";
	
	if (wk_end_dt == "") {
		content += "<div class=\"col-6-12 mobile-col-6-12\">";
		content += "<div class=\"content\">";
		content += "생산예정없음";
		content += "</div>";
		content += "</div>";
	}
	else {
		content += "<div class=\"col-4-12 mobile-col-4-12\">";
		content += "<div class=\"content\">";
		content += wk_end_dt.replace(/,/gi, "<br />");
		content += "</div>";
		content += "</div>";
		content += "<div class=\"col-2-12 mobile-col-2-12\">";
		content += "<div class=\"content\">";
		content += wk_qty.replace(/,/gi, "<br />");	
		content += "</div>";
		content += "</div>";
	}
	content += "</div>";
	
	if(toggle[rownum] == 0) {
		$("#" + item_cd).append(content);
		toggle[rownum] = 1;
	} else {
		$("#" + item_cd + "Detail").remove();
		toggle[rownum] = 0;
	}
}