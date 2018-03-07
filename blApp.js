
function CXdMainFrame()
{
	var mfUI = blo0.blMDiv(document.body, "id_div_CXdMainFrame" , "v0.1. 134 " , 0,0,50,50, blColor[2]);  
	mfUI.style.position = "fixed";
	mfUI.style.top = "50px";
	mfUI.style.left = "1px"; 
	mfUI.style.width = "70px";
	mfUI.style.height = "50px"; 
	mfUI.b1 = blo0.blBtn(mfUI,mfUI.id+"b1","+",this.v,blGrey[0]);
	var s = "<div id = 'id_div_toolbar_4_blApp' style='width:100%;height:50px;'>v0.1. 51 </div>"; 
	mfUI.d 	= blo0.blMDiv(mfUI, "id_div_CXdMainFrame_ui" ,s,0,150,190,20,blColor[1]);   
	mfUI.d.followDiv = mfUI;

	mfUI.b1.onclick = function(){
		_on_off_div(this,mfUI.d);
	}
 	mfUI.b1.click();
 	mfUI.b1.click();

	mfUI.d.d2	= blo0.blDiv(mfUI.d,mfUI.d.id+"d2","",blColor[1]); 

    	var s = 'links: ';
     	s += '<a href="https://littleflute.github.io/blog" target="_blank">blog</a>-';
     	s += '<a href="https://littleflute.github.io/xd" target="_blank">xd</a><br>-';
     	s += '<a href="blApp.js" target="_blank">blApp.js</a> - ';
     	s += '<a href="https://github.com/littleflute/bat/edit/master/blApp.js" target="_blank">blApp.js*</a>';
	mfUI.d.d3	= blo0.blDiv(mfUI.d,mfUI.d.id+"d3",s,blGrey[0]);	 

	_load_plx_btn(blo0,mfUI.d.d2,"_xdPlxSet","http://www.beautifullover.org/zb_users/theme/HTML5CSS3/script/xdPlxSet.js","lightblue"); 
	CXdBtn_Handle_Main ( 'id_div_toolbar_4_blApp' ); 
}

﻿function CXdBtn_Handle_Main (idDivBoss)
{ 
	var o	= bl$(idDivBoss);  
	o.hm	= blo0.blDiv(o,o.id+"hm","",blColor[1]); 

	o.b2 = blo0.blBtn(o.hm,o.hm.id+"b2","hm",blGrey[0]);
	o.b2.onclick = function(){
		var d = bl$("id_div_CXdMainFrame_ui");	_on_off_div(this,d.handle); _on_off_div(this,d.main);
	} 
	o.b2.click();	o.b2.click();
}
function CXdAPP()
{
    var f = new CXdMainFrame;    
}
var gApp = new CXdAPP;  
