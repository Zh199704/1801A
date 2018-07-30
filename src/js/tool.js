
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

var list = $('#banner_r_ul');
var btnss = $('#banner_r_ol').children();
var index = 0;
var timer7 = setInterval(lunbo1,2000)
function lunbo1(){
	index++;
	if (index == 4) {
		index = 1;
		list.css("left","0")
	}
	for (var i = 0;i<btnss.length;i++) {
		btnss[i].className = "";
	}
	btnss[index == 3?0:index].className = "blue"
	startMove(banner_r_ul,{"left":-230*index})
}
list.mouseenter(function(){
	clearInterval(timer7)
}).mouseleave(function(){
	timer7 = setInterval(lunbo1,2000)
})
for( let i = 0 ; i < btnss.length ; i++ ){
	btns[i].onmouseover = function(){
		index = i-1;
		lunbo1();
	}
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


var imgs = Array.from(document.querySelectorAll("#mid_t_r_b img" ))
var xb = 0;
setInterval(lunbo3,2000)
function lunbo3(){
	xb++
	if ( xb==imgs.length ) {
		xb = 0
	}
	for (var i = 0; i < imgs.length; i++) {
		startMove(imgs[i],{"opacity":0})
	}
	startMove(imgs[xb],{"opacity":100})
}
		

$('#mid_haop_b>li').mouseenter(function(){
	var ind = $(this).index()
	$('#mid_haop_b>li:not(:eq('+ind+'))').stop().animate({"width":170})
	$(this).stop().animate({"width":690})
})

$('#mid_xingq>ul:eq(0)>li').mouseenter(function(){
	
	var ind = $(this).index();
	$('#mid_xingq>ul:gt(0)').removeClass("xianshi").eq(ind).addClass("xianshi");
	
})


var listt = $('#mid_xingq_ul');
var btnsss = $('#mid_xingq_ol').children();
var indexx = 0;
var timer9 = setInterval(lunbo4,2000)
function lunbo4(){
	indexx++;
	if (indexx == 3) {
		indexx = 1;
		listt.css("left","0")
	}
	for (var i = 0;i<btnsss.length;i++) {
		
		btnsss[i].style.background = ""
	}
	btnsss[indexx == 2?0:indexx].style.background = "blue"
	startMove(mid_xingq_ul,{"left":-238*indexx})
}
listt.mouseenter(function(){
	clearInterval(timer9)
}).mouseleave(function(){
	timer9 = setInterval(lunbo4,2000)
})
for( let i = 0 ; i < btnsss.length ; i++ ){
	btnsss[i].onmouseover = function(){
		indexx = i-1;
		lunbo4();
	}
}

var ctlis = $('#conner_l_ul');
var ctbtns = $('#conner_l_ol').children();
var ctindex = 0;
var timer10 = setInterval(lunbo5,3000)
function lunbo5(){
	ctindex++;
	if (ctindex == 3) {
		ctindex = 1;
		ctlis.css("left","0")
	}
	for (var i = 0;i<ctbtns.length;i++) {
		
		ctbtns[i].style.background = ""
	}
	ctbtns[ctindex == 2?0:ctindex].style.background = "#ff6600"
	startMove(conner_l_ul,{"left":-480*ctindex})
}
ctlis.mouseenter(function(){
	clearInterval(timer10)
}).mouseleave(function(){
	timer10 = setInterval(lunbo5,3000)
})
for( let i = 0 ; i < ctbtns.length ; i++ ){
	ctbtns[i].onmouseover = function(){
		ctindex = i-1;
		lunbo5();
	}
}


var cmlis = $('#conner_lm_ul');
var cmbtns = $('#conner_lm_ol').children();
var cmindex = 0;
var timer11 = setInterval(lunbo6,3000)
function lunbo6(){
	cmindex++;
	if (cmindex == 3) {
		cmindex = 1;
		cmlis.css("left","0")
	}
	for (var i = 0;i<cmbtns.length;i++) {
		
		cmbtns[i].style.background = ""
	}
	cmbtns[cmindex == 2?0:cmindex].style.background = "#ff6600"
	startMove(conner_lm_ul,{"left":-480*cmindex})
}
cmlis.mouseenter(function(){
	clearInterval(timer11)
}).mouseleave(function(){
	timer11 = setInterval(lunbo6,3000)
})
for( let i = 0 ; i < cmbtns.length ; i++ ){
	cmbtns[i].onmouseover = function(){
		cmindex = i-1;
		lunbo6();
	}
}

var cm2lis = $('#conner_lm2_ul');
var cm2btns = $('#conner_lm2_ol').children();
var cm2index = 0;
var timer12 = setInterval(lunbo7,3000)
function lunbo7(){
	cm2index++;
	if (cm2index == 3) {
		cm2index = 1;
		cm2lis.css("left","0")
	}
	for (var i = 0;i<cm2btns.length;i++) {
		
		cm2btns[i].style.background = ""
	}
	cm2btns[cm2index == 2?0:cm2index].style.background = "#ff6600"
	startMove(conner_lm2_ul,{"left":-480*cm2index})
}
cm2lis.mouseenter(function(){
	clearInterval(timer12)
}).mouseleave(function(){
	timer12 = setInterval(lunbo7,3000)
})
for( let i = 0 ; i < cm2btns.length ; i++ ){
	cm2btns[i].onmouseover = function(){
		cm2index = i-1;
		lunbo7();
	}
}

var cm3lis = $('#conner_lm3_ul');
var cm3btns = $('#conner_lm3_ol').children();
var cm3index = 0;
var timer13 = setInterval(lunbo8,3000)
function lunbo8(){
	cm3index++;
	if (cm3index == 3) {
		cm3index = 1;
		cm3lis.css("left","0")
	}
	for (var i = 0;i<cm3btns.length;i++) {
		
		cm3btns[i].style.background = ""
	}
	cm3btns[cm3index == 2?0:cm3index].style.background = "#ff6600"
	startMove(conner_lm3_ul,{"left":-480*cm3index})
}
cm3lis.mouseenter(function(){
	clearInterval(timer13)
}).mouseleave(function(){
	timer13 = setInterval(lunbo8,3000)
})
for( let i = 0 ; i < cm3btns.length ; i++ ){
cm3btns[i].onmouseover = function(){
	cm3index = i-1;
	lunbo8();
	}
}

var cm4lis = $('#conner_lm4_ul');
var cm4btns = $('#conner_lm4_ol').children();
var cm4index = 0;
var timer14 = setInterval(lunbo9,3000)
function lunbo9(){
	cm4index++;
	if (cm4index == 3) {
		cm4index = 1;
		cm4lis.css("left","0")
	}
	for (var i = 0;i<cm4btns.length;i++) {
		
		cm4btns[i].style.background = ""
	}
	cm4btns[cm4index == 2?0:cm4index].style.background = "#ff6600"
	startMove(conner_lm4_ul,{"left":-480*cm4index})
}
cm4lis.mouseenter(function(){
	clearInterval(timer14)
}).mouseleave(function(){
	timer14 = setInterval(lunbo9,3000)
})
for( let i = 0 ; i < cm4btns.length ; i++ ){
	cm4btns[i].onmouseover = function(){
		cm4index = i-1;
		lunbo9();
	}
}


$('#conner_r_t1').mouseenter(function(){
	$('#conner_r_t1>ul').css("display","block")
	$('#conner_r_t2>ul').css("display","none")
})
$('#conner_r_t2').mouseenter(function(){
	$(this).css("background","#FFFFFF")
	$('#conner_r_t2>ul').css("display","block")
	$('#conner_r_t1>ul').css("display","none")
})
$('#conner_r_m1').mouseenter(function(){
	$('#conner_r_m1>ul').css("display","block")
	$('#conner_r_m2>ul').css("display","none")
})
$('#conner_r_m2').mouseenter(function(){
	$(this).css("background","#FFFFFF")
	$('#conner_r_m2>ul').css("display","block")
	$('#conner_r_m1>ul').css("display","none")
})
$('#conner_r_m3').mouseenter(function(){
	$('#conner_r_m3>ul').css("display","block")
	$('#conner_r_m4>ul').css("display","none")
})
$('#conner_r_m4').mouseenter(function(){
	$(this).css("background","#FFFFFF")
	$('#conner_r_m4>ul').css("display","block")
	$('#conner_r_m3>ul').css("display","none")
})
$('#conner_r_m5').mouseenter(function(){
	$('#conner_r_m5>ul').css("display","block")
	$('#conner_r_m6>ul').css("display","none")
})
$('#conner_r_m6').mouseenter(function(){
	$(this).css("background","#FFFFFF")
	$('#conner_r_m6>ul').css("display","block")
	$('#conner_r_m5>ul').css("display","none")
})
$('#conner_r_b1').mouseenter(function(){
	$('#conner_r_b1>ul').css("display","block")
	$('#conner_r_b2>ul').css("display","none")
})
$('#conner_r_b2').mouseenter(function(){
	$(this).css("background","#FFFFFF")
	$('#conner_r_b2>ul').css("display","block")
	$('#conner_r_b1>ul').css("display","none")
})
