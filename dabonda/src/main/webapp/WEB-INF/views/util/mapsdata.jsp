<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>데이터 관리</title>
<style type="text/css">
@import url('http://fonts.googleapis.com/earlyaccess/nanumgothic.css');
body, table, div, p, button {font-family:'Nanum Gothic';}
input {
	width: 100%;
}
</style>
<script src="/js/jquery-1.9.1.js"></script>
</head>
<body>
<form>
<table>
	<tr>
		<td>입주년월</td>
		<td colspan="2"><input type="month" min="2015-01" max="2999-12-31" required="required"></td>
	</tr>
	<tr>
		<td>단지명(아파트명)</td>
		<td colspan="2"><input type="text" required="required"></td>
	</tr>
	<tr>
		<td>세대수</td>
		<td colspan="2"><input type="text"></td>
	</tr>
	<tr>
		<td>공급면적</td>
		<td colspan="2"><input type="text"></td>
	</tr>
	<tr>
		<td>위치</td>
		<td colspan="2"><input type="text" required="required"></td>
	</tr>
	<tr>
		<td>주소</td>
		<td colspan="2"><input type="text" required="required"></td>
	</tr>
	<tr>
		<td>좌표</td>
		<td><input type="text" required="required"></td>
		<td><input type="text" required="required"></td>
	</tr>
	<tr>
		<td>URL</td>
		<td colspan="2"><input type="text"></td>
	</tr>
	<tr>
		<td colspan="3"><button>입력</button></td>
	</tr>
</table>
</form>
</body>
</html>