// 鼠标在小div上移动的时候	
divSmall.onmousemove = e=>{
    // 求鼠标相对于小div的坐标，即求glass的坐标
    var [x, y] = [e.clientX-box.offsetLeft, e.clientY-box.offsetTop];
    // 让鼠标在glass中心点上
    x-=glass.offsetWidth/2;
    y-=glass.offsetHeight/2;
    // 边界处理
    if(x<0)x=0;
    if(y<0)y=0;
    var maxX = divSmall.offsetWidth-glass.offsetWidth;
    if(x>maxX)x=maxX;
    var maxY = divSmall.offsetHeight-glass.offsetHeight;
    if(y>maxY)y=maxY;
    // glass镜子的坐标
    [glass.style.left, glass.style.top] = [x+'px', y+'px'];
    // 大图的坐标
    imgBig.style.left = -2*x+"px";
    imgBig.style.top = -2*y+"px";
    // 镜子和小图是2倍的关系，小图和大图也是2倍的关系，所以乘2。
    // 镜子在小图中向右移动时，大图应该按照2倍的比例，向左移动，所以乘-2。
    imgSmall2.style.left = -1*x+"px"; // 镜子中的小图，设置坐标
    imgSmall2.style.top = -1*y+"px";
}
// 鼠标进入小div时
divSmall.onmouseover = ()=>{
    // 让镜子先透明度为0显示出来，然后做透明度运动，让透明度逐渐到100
    glass.style.display = "block";
    glass.style.opacity = 0;	
    startMove(glass, {"opacity":100});
    // 让大div先透明度为0显示出来，然后做透明度运动，让透明度逐渐到100
    divBig.style.display = "block";
    divBig.style.opacity = 0;	
    startMove(divBig, {"opacity":100});
}
// 鼠标离开小div时
divSmall.onmouseout = ()=>{
    // 让镜子透明度逐渐到0，到了0之后，让镜子隐藏起来
    startMove(glass, {"opacity":0}, ()=>{
        glass.style.display = "none";
    });
    // 让大div透明度逐渐到0，到了0之后，让大div隐藏起来
    startMove(divBig, {"opacity":0}, ()=>{
        divBig.style.display = "none";
    });
}