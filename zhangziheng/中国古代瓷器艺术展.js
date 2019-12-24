/*
* @Author: we
* @Date:   2019-12-20 16:45:33
* @Last Modified by:   we
* @Last Modified time: 2019-12-23 12:43:24
*/
var box=document.getElementById("box");
var slider=document.getElementById("slider");
var navList=document.getElementById("nav").children;
var right=document.getElementById("right");
var left=document.getElementById("left");
var i=1;
var isMoving=false;
navList[0].style.border="solid 2px white";
function next(){
	if(!isMoving){
		isMoving=true;
		i++;
		navChange();
		animate(slider,{left:-1062*i},function(){
			if(i>=6){
				slider.style.left="-1062px";
				i=1;
			}
			isMoving=false;
		});
		
	}
	
}
function pre(){
	if(!isMoving){
		isMoving=true;
		i--;
		navChange();
		animate(slider,{left:-1062*i},function(){
			if(i<=0){
				slider.style.left="-5310px";
				i=5;
			}
			isMoving=false;
		});
		
	}
}
var time1=setInterval(next,2000);
box.onmouseover=function(){
	animate(left,{opacity:50});
	animate(right,{opacity:50});
	clearInterval(time1);
}
box.onmouseout=function(){
	animate(left,{opacity:0});
	animate(right,{opacity:0});
	time1=setInterval(next,2000);
}
for(var j=0;j<navList.length;j++){
	navList[j].i=j;
	navList[j].onclick=function(){
		i=this.i+1;
		navChange();
		animate(slider,{left:-1062*i});
	}
}
function navChange(){
	for(var k=0;k<navList.length;k++){
		navList[k].style.border="none";
	}
	if(i>5){
		navList[0].style.border="solid 2px white";
	}
	else if(i<1){
		navList[4].style.border="solid 2px white";
	}
	else{		
		navList[i-1].style.border="solid 2px white";
	}
}
right.onclick=next;
left.onclick=pre;

var img0=document.getElementById("img0");
var txt=document.getElementById("txt");
var lists=document.getElementById("list").children;
var num=0;
for(var j=0;j<lists.length;j++){
	lists[j].onmouseover=function(){
		for(var k=0;k<lists.length;k++){
			lists[k].style.border="2px black solid";
		}
		this.style.border="2px red solid";
		if(this.value==4){
			img0.src="image/汝窑.jpg"
			txt.innerHTML="汝窑：宋代五大名窑之首，因宋金战乱而失传，传世品仅有60余件。汝瓷胎质细腻，以名贵玛瑙入釉，色泽随光变幻。其釉色温润古朴，其釉面平滑细腻如同美玉。器表呈蝉翼纹般细小开片，釉下有稀疏氧泡，在阳光下时隐时现，似晨星闪烁，在胎与釉结合处微现红晕。天青无纹水仙盆（北宋汝窑）莲花氏碗（北宋汝窑）"
		}
		if(this.value==1){
			img0.src="image/哥窑.jpg"
			txt.innerHTML="哥窑：哥窑器物胎色较深，胎质细腻，足边及口沿釉薄处可见深色胎。制作工艺精湛，装烧方法采用支钉支烧或垫烧，一些盘炉器物的足底有极为规整的圆形支烧痕。釉色以青灰、米黄为多，釉质肥润，釉面有细碎的片纹，纹分两种，一种开较大的黑色片纹，另一种是在黑色片纹中又开细小的黄色片纹，俗称“金丝铁线”，是哥窑器物最显著的特点之一。"
		}
		if(this.value==2){
			img0.src="image/官窑.jpg"
			txt.innerHTML="官窑：官窑瓷器选料精细，胎质细腻，胎色呈紫黑色，足边及口沿釉薄处呈紫褐色，有“紫口铁足”之称。官窑瓷器釉厚如凝脂，釉面莹润如玉，光泽柔和。釉面有粉青、翠青、灰青、米黄等多种，釉面纹片是官窑器物的特征之一。它以古朴庄重的造型、莹润如玉的釉色、鳞鳞如波的纹片，协同紫口铁足之美，形成了和谐优美、神完气足的艺术珍品。"
		}
		if(this.value==3){
			img0.src="image/定窑.jpg"
			txt.innerHTML="定窑：定瓷胎质坚密、细腻，釉色透明，柔润媲玉。定窑以装饰见长，其刻花奔逸，印花典雅，辅助以剔花、堆花。定窑以白色为多，之有红、黑、紫、绿诸色。剔花花鸟纹枕（定窑）花盘（定窑）白瓷杯（定窑）白瓷注子（定窑）官款花口盘（定窑）"
		}
		console.log(img0.style.src);
	}
}