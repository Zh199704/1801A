
$('li>ul').css("display", "none")
$("#newe").mouseover(function() {
	var ul = $(this).children("ul")
	$(this).css("background", "url(../images/未标题-1.jpg)no-repeat 59px white")
	ul.stop().slideDown(300)
}).mouseout(function() {
	$(this).css("background", "url(../images/未标题-3.jpg)no-repeat 59px")
	var ul = $(this).children("ul")
	ul.stop().slideUp(300)
})

$("#kefu").mouseover(function() {
	var ul = $(this).children("ul")
	$(this).css("background", "url(../images/未标题-1.jpg)no-repeat 59px white")
	ul.stop().slideDown(300)
}).mouseout(function() {
	$(this).css("background", "url(../images/未标题-3.jpg)no-repeat 59px")
	var ul = $(this).children("ul")
	ul.stop().slideUp(300)
})

$('#input1').click(function() {
	input1.laceho = null
}).blur(function() {
	input1.value = "请输入你要搜索的关键字"
})

$('#input2').click(function() {
	input2.value = null
}).blur(function() {
	input2.value = "输入Email地址"
})

$('#username').click(function() {
	username.value = null
}).blur(function() {
	
})

$('#logo_l').mouseenter(function(){
	$('#gs').css("display","block")
}).mouseleave(function(){
	$('#gs').css("display","none")
}).mousemove(function(e){
	$('#gs').css({"left":e.clientX + 10,"top":e.clientY + 10})
})

$('#bg>span').mouseover(function() {
	$('#banner_l').css("background", "#fdfbfb")
	$(this).css({
		"background": "#ffffff",
		"box-shadow": "0px 2px 2px 2px #cdcdcd"
	})
}).mouseout(function() {
	$('#banner_l').css("background", "#ffffff")
	$(this).css({
		"background": "",
		"box-shadow": ""
	})
})

$("#banner_l>ul>li:eq(0)").mouseenter(function(){
	$(this).css({"box-shadow":"0px 1px 0px 0px #cdcdcd"})
	$("#banner_l>ul>li:eq(0)>ul").css({"display":"block",
	"box-shadow":"-1px 1px 0px 0px #cdcdcd"})
}).mouseleave(function(){
	$(this).css({"box-shadow":""})
	$("#banner_l>ul>li:eq(0)>ul").css("display","none")
})

$("#banner_l>ul>li:eq(1)").mouseenter(function(){
	$(this).css({"box-shadow":"0px 1px 0px 0px #cdcdcd"})
	$("#banner_l>ul>li:eq(1)>ul").css({"display":"block",
	"box-shadow":"-1px 1px 0px 0px #cdcdcd"})
}).mouseleave(function(){
	$(this).css({"box-shadow":""})
	$("#banner_l>ul>li:eq(1)>ul").css("display","none")
})

$("#banner_l>ul>li:eq(2)").mouseenter(function(){
	$(this).css({"box-shadow":"0px 1px 0px 0px #cdcdcd"})
	$("#banner_l>ul>li:eq(2)>ul").css({"display":"block",
	"box-shadow":"-1px 1px 0px 0px #cdcdcd"})
}).mouseleave(function(){
	$(this).css({"box-shadow":""})
	$("#banner_l>ul>li:eq(2)>ul").css("display","none")
})

$("#banner_l>ul>li:eq(3)").mouseenter(function(){
	$(this).css({"box-shadow":"0px 1px 0px 0px #cdcdcd"})
	$("#banner_l>ul>li:eq(3)>ul").css({"display":"block",
	"box-shadow":"-1px 1px 0px 0px #cdcdcd"})
}).mouseleave(function(){
	$(this).css({"box-shadow":""})
	$("#banner_l>ul>li:eq(3)>ul").css("display","none")
})

$("#banner_l>ul>li:eq(4)>span:eq(0)").mouseenter(function(){
	$(this).css({"box-shadow":"0px 1px 0px 0px #cdcdcd"})
	$("#banner_l>ul>li:eq(4)>span>ul:eq(0)").css({"display":"block",
	"box-shadow":"-1px 1px 0px 0px #cdcdcd"})
}).mouseleave(function(){
	$(this).css({"box-shadow":""})
	$("#banner_l>ul>li:eq(4)>span>ul").css("display","none")
})

$("#banner_l>ul>li:eq(4)>span:eq(1)").mouseenter(function(){
	$(this).css({"box-shadow":"0px 1px 0px 0px #cdcdcd"})
	$("#banner_l>ul>li:eq(4)>span>ul:eq(1)").css({"display":"block",
	"box-shadow":"-1px 1px 0px 0px #cdcdcd"})
}).mouseleave(function(){
	$(this).css({"box-shadow":""})
	$("#banner_l>ul>li:eq(4)>span>ul").css("display","none")
})

$("#banner_l>ul>li:eq(4)>span:eq(2)").mouseenter(function(){
	$(this).css({"box-shadow":"0px 1px 0px 0px #cdcdcd"})
	$("#banner_l>ul>li:eq(4)>span>ul:eq(2)").css({"display":"block",
	"box-shadow":"-1px 1px 0px 0px #cdcdcd"})
}).mouseleave(function(){
	$(this).css({"box-shadow":""})
	$("#banner_l>ul>li:eq(4)>span>ul").css("display","none")
})

$("#banner_l>ul>li:eq(4)>span:eq(3)").mouseenter(function(){
	$(this).css({"box-shadow":"0px 1px 0px 0px #cdcdcd"})
	$("#banner_l>ul>li:eq(4)>span>ul:eq(3)").css({"display":"block",
	"box-shadow":"-1px 1px 0px 0px #cdcdcd"})
}).mouseleave(function(){
	$(this).css({"box-shadow":""})
	$("#banner_l>ul>li:eq(4)>span>ul").css("display","none")
})

$("#banner_l>ul>li:eq(4)>span:eq(4)").mouseenter(function(){
	$(this).css({"box-shadow":"0px 1px 0px 0px #cdcdcd"})
	$("#banner_l>ul>li:eq(4)>span>ul:eq(4)").css({"display":"block",
	"box-shadow":"-1px 1px 0px 0px #cdcdcd"})
}).mouseleave(function(){
	$(this).css({"box-shadow":""})
	$("#banner_l>ul>li:eq(4)>span>ul").css("display","none")
})

$("#nav_r_b").mouseenter(function(){
	$("#nav_r_b>a").css("color","#2d2d2c")
	$("#nav_r_b>a").css({"background":"#ffffff","border-top":"2px solid #ff6600","border-left":"2px solid #ff6600"})
	$("#nav_r_b>ul").css({"display":"block","border-left":"2px solid #ff6600","border-bottom":"2px solid #ff6600","border-right":"2px solid #ff6600"})
	$("#nav_r_b").mouseleave(function(){
		$("#nav_r_b>a").css("color","#ffffff")
		$("#nav_r_b>ul").css("display","none")
		$("#nav_r_b>a").css({"border":"none","background":"url(../images/sprite_v140425.png)no-repeat 98px -1253px"})

	})
})
$("#nav_r_b2").mouseenter(function(){
	$("#nav_r_b2>a").css("color","#2d2d2c")
	$("#nav_r_b2>a").css({"background":"#ffffff","border-top":"2px solid #ff6600","border-left":"2px solid #ff6600"})
	$("#nav_r_b2>ul").css({"display":"block","border-left":"2px solid #ff6600","border-bottom":"2px solid #ff6600","border-right":"2px solid #ff6600"})
	$("#nav_r_b2").mouseleave(function(){
		$("#nav_r_b2>a").css("color","#ffffff")
		$("#nav_r_b2>ul").css("display","none")
		$("#nav_r_b2>a").css({"border":"none","background":"url(../images/sprite_v140425.png)no-repeat 98px -1253px"})
	})
})

var lis = Array.from(document.querySelectorAll("#ul1 li"))
var btns = Array.from(document.querySelectorAll("#ol1 li"))
var len = btns.length
var now = 0
btns.forEach((btn,index) =>{
	btn.onclick = () =>{
		now = index
		tab(btn)
	}
})
var tab = (btn) =>{
	lis.forEach((li,index) =>{
		li.style.display = "block"
		startMove(li,{"opacity":0},() =>{
			li.style.display = "none"
		})
		btns[index].style.background = "";
	})
	startMove(lis[now],{"opacity":100},() =>{
		lis[now].style.display = "block"
	})
	btns[now].style.background = "#ff6200"
}
tab()
var ds = () =>{
	now++
	if(now == len){
		now = 0
	}
	tab()
}
var timer1 = setInterval(ds,2000)
ul1.onmouseover = () =>{
	clearInterval(timer1)
}
ul1.onmouseout = () =>{
	timer1 = setInterval(ds,2000)
}

var ul3 = document.querySelector("#lb1")
var timer3;
var timer2;
var timer4;
timer2 = setTimeout(function(){
	startMove(ul3,{"left":-771},fn)
},2000);

var fn1 = () => {
	timer3 = setTimeout(function(){	
	startMove(ul3,{"left":-771},fn)
	},2000)
};

var fn = () => {
	timer4 = setTimeout(function(){
	startMove(ul3,{"left":0},fn1)
	},2000)
};


//var lii = Array.from(document.querySelectorAll("#lb1 li"))

lb1.onmouseenter = function () {
	clearTimeout(timer2)
	clearTimeout(timer3)
	clearTimeout(timer4)
}
lb1.onmouseleave = function () {
	clearTimeout(timer2)
	clearTimeout(timer3)
	clearTimeout(timer4)
	timer2 = setTimeout(function(){
	startMove(ul3,{"left":-771},fn)
},2000);
}
var starttime = new Date("2018/8/22");
setInterval(function () {
	var nowtime = new Date();
	var time = starttime - nowtime;
	var hour = parseInt(time / 1000 / 60 / 60 % 24);
	var minute = parseInt(time / 1000 / 60 % 60);
	var seconds = parseInt(time / 1000 % 60);
	$('.timespan').html( hour + ":" + minute + ":" + seconds  );
}, 1000);
