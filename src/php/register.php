<?php
	header("content-type:text/html;charset=utf-8");
	
$uname = $_POST["uname"];
$upwd = $_POST["upwd"];

$db = mysql_connect("localhost","root","");

mysql_select_db("newegg",$db);

mysql_query("set user utf-8");

$sql = "INSERT INTO `user`(`uname`, `upwd`) VALUES ('$uname','$upwd')";

$row = mysql_query($sql);

if( $row ){
	echo "<script> alert('注册成功!');location.href = 'login.html';</script>";
}else{
	echo "<script> alert('注册失败！');location.href = 'registre.html';</script>";
}

?>