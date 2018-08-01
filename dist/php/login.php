<?php
	header("content-type:text/html;charset=utf-8");
	
$uname = $_POST["uname"];

$upwd = $_POST["upwd"];

$db = mysql_connect("localhost","root","");

mysql_select_db("newegg",$db);

mysql_query("set user utf-8");

$sql = "SELECT * FROM `user` WHERE uname='$uname'";

$set = mysql_query($sql);

$arr = mysql_fetch_array($set);

if($uname == $arr['uname']){
	if($upwd == $arr['upwd']){
		echo "<script>alert('登录成功！');window.location = 'index.html';</script>";
	}else{
		echo "<script>alert('密码错误！');window.location = 'login.html';</script>";
	}
}else{
	echo "<script>alert('用户名不存在！');window.location = 'login.html';</script>";
}

?>