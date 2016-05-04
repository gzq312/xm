window.onload=function(){
/*轮播图*/
  var as=getClass("lunbo")[0].getElementsByTagName('a');
	//console.log(as);
	var btns=getClass('btn')[0].getElementsByTagName('li');
	//console.log(btns)
	var index=0;
	var t=setInterval(lunbo,2000)
	function lunbo(){
		index++;
		if(index>as.length-1){
			index=0;
		}
		for(var i=0;i<as.length;i++){
			//as[i].style.zIndex="0";
			//透明度动画
			animate(as[i],{opacity:0});
			btns[i].style.background=""
		}
		//as[index].style.zIndex="99"
		animate(as[index],{opacity:1});
		btns[index].style.background="#fff";
	}
	for(var i=0;i<btns.length;i++){
		btns[i].ss=i;
		//console.log(i)
		btns[i].onclick=function(){
			for(var j=0;j<btns.length;j++){
				//as[j].style.zIndex="0";
				animate(as[j],{opacity:0});
			    btns[j].style.background=""
			}
			//as[this.ss].style.zIndex="99"
			animate(as[this.ss],{opacity:1});
		    this.style.background="#fff";
          index =this.ss;
		}
	}

	var wbox=getClass('w-box')[0];
	//console.log(wbox)
	wbox.onmouseover=function(){
		clearInterval(t);
		//console.log(t)
	       
	}
	wbox.onmouseout=function(){
		t=setInterval(lunbo,2000)
	}
	var leftbtn=getClass("btn2left")[0];
	var rightbtn=getClass("btn2right")[0];
	leftbtn.onclick=function(){
		index--;
			if(index==-1){
				index=as.length-1;
			}
			for(var i=0;i<as.length;i++){
				//as[i].style.zIndex="0";
				animate(as[i],{opacity:0});
				btns[i].style.background=""
			}
			//as[index].style.zIndex="99";
			animate(as[index],{opacity:1});
			btns[index].style.background="#fff"
	}
	rightbtn.onclick=function(){
		lunbo();

	}
//选项卡
   var links=getClass('dpright');
      //console.log(links)  
	var divs=getClass('dapei');
	 //console.log(divs)
	var ass,ds;
	for(var i=0;i<links.length;i++){
		ass=links[i].getElementsByTagName("a");
		//console.log(as)
		ds=divs[i].getElementsByClassName("dp-right");
		 //console.log(ds)
		  tab(ass,ds);
	}
	//console.log(divs)
	function tab(anniu,rongqi){
	   	for(var i=0;i<anniu.length;i++){
			anniu[i].aa=i;
			anniu[i].onmouseover=function(){
			   for(var j=0;j<rongqi.length;j++){
					rongqi[j].style.display="none";
				}
					rongqi[this.aa].style.display="block"
			}
		}
	 }
//明星单品
  function wntj(a){
   var mxdp=getClass("mxdp")[a];
	//console.log(mxdp)
	var tus=mxdp.getElementsByClassName("mxdp-a");
	//console.log(tus)
	var tuw=parseInt(getStyle(tus[0],"width"));
	//alert(tuw)
	var mxbtn=getClass("mxdp-btn")[a];
	//console.log(mxbtn)
	var mxlbtn=getClass("mxdpl",mxbtn)[0];
	var mxrbtn=getClass("mxdpr",mxbtn)[0];
	console.log(mxrbtn)
	mxdp.style.width=tuw*tus.length+"px";
	var indes=0;
	var mxdpt=setInterval(mxdpweel,3000);
	function mxdpweel(){
		indes++;
		if(indes==tus.length){
			indes=0;
		}
		animate(mxdp,{marginLeft:-indes*tuw},500);
	}
	mxlbtn.onclick=function(){
		indes--;
		if(indes<0){
			indes=0;
		}
		animate(mxdp,{marginLeft:-tuw*indes},500);
	}
	mxrbtn.onclick=function(){
		indes++;
		if(indes>tus.length-1){
			indes=1;
		}
		animate(mxdp,{marginLeft:-tuw*indes},500);
	}
	mxbtn.onmouseover=function(){
		clearInterval(mxdpt)
	}
	mxbtn.onmouseout=function(){
	mxdpt=setInterval(mxdpweel,3000);
	}
	}
	var mxdp=$(".mxdp");
	for(var i=0;i<mxdp.length;i++){
       wntj(i)
	}
//内容轮播
	var lis=lis=$('.nr-btn')[0].getElementsByTagName('li');
	/*alert(lis.length)*/
	for(var i=0;i<lis.length;i++){
		nrweel(i)
	}
	function nrweel(x){
	var tsk=$(".tsk-box")[x];
	//console.log(tsk)
	var tsks=$('.tsk')[x];
	//console.log(tsks.length)
	var aw=parseInt(getStyle(tsks,'width'));
	//alert(aw)
	var lis=$('.nr-btn')[x].getElementsByTagName('li');
	var nrbtn=getClass('nr-btn2')[x];
	var nrlbtn=getClass('l-btn',nrbtn)[x];
	var nrrbtn=getClass('r-btn',nrbtn)[x];
	//console.log(nrlbtn)
	var nr=0;
	//console.log(lis.length)
	tsk.style.width=aw*lis.length+"px";
		for(var i=0;i<lis.length;i++){
			lis[i].ind=i;
			lis[i].onmouseover=function(){
				for(var j=0;j<lis.length;j++){
					lis[j].className="";
				}
				lis[this.ind].className="hott";
				animate(tsk,{marginLeft:-aw*this.ind},300);
				nr=this.ind;
			}
		}
		
	nrlbtn.onclick=function(){
		nr--;
		if(nr==-1){
			nr=lis.length-1;
		}
		animate(tsk,{marginLeft:-aw*nr},300)
		for(var i=0;i<lis.length;i++){
			lis[i].className="";
		}
		    lis[nr].className="hott";
	}
	nrrbtn.onclick=function(){
	     nr++;
	     if(nr>lis.length-1){
	     	nr=0;
	     }
	     animate(tsk,{marginLeft:-aw*nr},300)
		for(var i=0;i<lis.length;i++){
			lis[i].className="";
		}
		    lis[nr].className="hott";
	}
	}
//按需显示
	var flor=$(".flor");
	//console.log(flor)
	var tops=[];
	var wwh=document.documentElement.clientHeight;
	for(var i=0;i<flor.length;i++){
		tops.push(flor[i].offsetTop)
	}
	//console.log(tops)
	window.onscroll=function(){
	 	var st=document.body.scrollTop||document.documentElement.scrollTop;
	 	//alert(st)
	 	//console.log(st)
	 		for(var i=0;i<tops.length;i++){
	 		if(st+wwh>tops[i]){
				var img=$('img',flor[i])
				for(var j=0;j<img.length;j++){
					img[j].src=img[j].getAttribute('asrc')
				}
	 		}
	 	}
	}
	window.onscroll();
//为你推荐
	/*var wntj=$(".weini")[0];
	//console.log(wntj)
	var wns=$('.mxdp-a',wntj);
	//console.log(wns)
	var wnw=parseInt(getStyle(wns[0],"width"));
	//alert(wnw)
	var wn=0;
	wntj.style.width=wns.length*wnw+"px";
	var wna=setInterval(,1000)
	function wntj(){
		wn++;
		if(wn==wns.length){
				wn=0;
			}
			animate(wntj,{marginLeft:-wn*wnw},500);
		
	}*/

}













