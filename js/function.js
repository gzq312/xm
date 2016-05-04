//ie6兼容问题
function getClass(classname,obj){
	var obj=obj||document;//给obj赋值
	if(obj.getElementsByClassName){
		//console.log("支持")
		return obj.getElementsByClassName(classname);
	}else{
		var arr=[];
		var alls=obj.getElementsByTagName("*")
		for(var i=0;i<alls.length;i++){
			if(checkbox(alls[i].className,classname)){
				arr.push(alls[i]);
			}
        }
		return arr;
	}
 }
 function checkbox(newarr,oldarr){
	var chlist=newarr.split(" ");
	var flag=false;
	for(i=0;i<chlist.length;i++){
		if(chlist[i]==oldarr){
			flag=true;
		}
	}
	return flag;
}

//获取属性样式
function getStyle(obj,attr){
	if(!obj.currentStyle){
		return getComputedStyle(obj,null)[attr];//guge huohu ie9-11
	}else{
		return obj.currentStyle[attr];//ie6-11
	}
}


// 元素的获取和简化
/*function $(selector,obj){
	var obj=obj||document;
	if(typeof selector=='string'){
		if(selector.charAt(0)=='.'){
			return getClass(selector.substring(1),obj)
		}else if(selector.charAt(0)=='#'){
			return obj.getElementById(selector.substring(1))
		}else if(/^[a-z][a-z1-6]{0,9}$/g.test(selector)){
			return obj.getElementsByTagName(selector)
		}else if(/^<[a-z][a-z1-6]{0,9}>$/.test(selector)){
			return document.createElement(selector.substring(1))
        }
	}else if(typeof selector=='function'){
			window.onload=function(){
				selector()
			}
		}
}*/

function $(selector,obj){
    if(typeof selector=="string"){
		var obj=obj||document;
       if(selector.charAt(0)=="#"){
         return obj.getElementById(selector.substring(1)) 
       }if(selector.charAt(0)=='.'){
       	return getClass(selector.substring(1),obj)
       }if(/^[A-Za-z][A-Za-z1-6]*$/.test(selector)){
       	return obj.getElementsByTagName(selector)
       }
	}else if(typeof selector=="function"){
		window.onload=function(){
			selector()
		}
	}
}


//处理兼容性问题
function getText(obj,val){
	if(val==undefined){
	     // "" ||undefined
		if(typeof obj.textContent=="string"){
	    	console.log("IE9-11、FireFox、Chrome");
	    	return obj.textContent;
	    }
	    else{
	    	console.log("IE6-11、Chrome");
	    	return obj.innerText;
	    }
	}else{
		if(typeof obj.textContent=="string"){
	    	//console.log("IE9-11、FireFox、Chrome");
	    	obj.textContent=val;
	    }
	    else{
	    	//console.log("IE6-11、Chrome");
	    	obj.innerText=val;
	    }
	}
	
  }

//获取所有子节点
function getChild(obj,type){
    var getChild=obj.childNodes;
    var newarr=[];
    type=type||"b";
    if(type=="b"){
	    for(var i=0;i<getChild.length;i++){
	    	if(getChild[i].nodeType==1){
	    		newarr.push(getChild[i]);
    	  	}
        }
    }
    if(type=="a"){
    	for(var i=0;i<getChild.length;i++){
    	if(getChild[i].nodeType==1||(getChild[i].nodeType==3&&trim(getChild[i].nodeValue)!="")){
    		newarr.push(getChild[i]);
	    	}
	    }
	}
    return newarr;
  }
//清除空格
function trim(str,type){
    type=type||"lr";
    if(type=="a"){
    	return str.replace(/\s*/g,"");
    }
    if(type=="l"){
    	return str.replace(/^\s*/g,"");
    }
    if(type=="r"){
    	return str.replace(/\s*$/g,"");
    }if(type=="lr"){
    	return str.replace(/^\s*|\s*$/g,"");
    }
    }
//获取第一个子节点
function getFirst(obj,type){
    return getChild(obj)[0];
    }
//获取最后一个子节点
function getLast(obj,type){
    var get=getChild(obj);
    return get[get.length-1]
  }
//获取任意一个子节点
function getNum(obj,num){
    return getChild(obj)[num];
   }
//获取下一个兄弟节点
function getNext(obj){
    var next=obj.nextSibling;
    if(next==null){//
        return false;
    }
    while(next.nodeType==8||(next.nodeType==3&&trim(next.nodeValue)=="")){
        next=next.nextSibling;
        if(next==null){
        return false;
        }
    }
   return next;
  }
//获取上一个兄弟节点
function getPre(obj){
    var pre=obj.previousSibling;
    if(pre==null){
        return false;
    }
    while(pre.nodeType==8||(pre.nodeType==3&&trim(pre.nodeValue)=="")){
        pre=pre.previousSibling;
        if(pre==null){
        return false;
        }
    }
   return pre;
 }
//插入到之前
function insertBefore(obj1,obj2){
	var parentNode=obj2.parentNode;
	parentNode.insertBefore(obj1,obj2);
}
//插入到之后
function insertAfter(obj1,obj2){
	var next=getNext(obj2);
	insertBefore(obj1,next);
}