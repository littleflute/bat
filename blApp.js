function _myJobClass()
{
	this.v = "v0.0.2";
	this.blrAboutMe = function(b,d){
		var s = 'blrAboutMe: '; 
     		s += '<a href="blApp.js" target="_blank">blApp.js</a> - ';
     		s += '<a href="https://github.com/littleflute/bat/edit/master/blApp.js" target="_blank">blApp.js*</a>';
		d.v	= blo0.blDiv(d,d.id+"v",s,blGrey[0]);
	}
}
function CXdMainFrame()
{
	var mfUI = blo0.blMDiv(document.body, "id_div_CXdMainFrame" , "mfUI: v0.1. 151 " , 0,0,150,50, blColor[2]);  
	mfUI.style.position = "fixed";
	mfUI.style.top = "50px";
	mfUI.style.left = "1px"; 
	mfUI.style.width = "70px";
	mfUI.style.height = "50px"; 
	mfUI.b1 = blo0.blBtn(mfUI,mfUI.id+"b1","+",this.v,blGrey[0]);
	var s = "<div id = 'id_div_toolbar_4_blApp' style='width:100%;height:50px;'>v0.1. 51 </div>"; 
	mfUI.d 	= blo0.blMDiv(mfUI, "id_div_CXdMainFrame_ui" ,s,0,150,190,20,blColor[1]);   
	mfUI.d.jobView = blo0.blDiv(mfUI.d,mfUI.d.id + "jobView","jobView",blColor[4]);
	blo0.blShowObj2Div(mfUI.d.jobView,new _myJobClass);
	mfUI.d.followDiv = mfUI;

	mfUI.b1.onclick = function(){
		_on_off_div(this,mfUI.d);
	}
 	mfUI.b1.click();
 	mfUI.b1.click();

	mfUI.d.d2	= blo0.blDiv(mfUI.d,mfUI.d.id+"d2","mfUI.d.d2",blColor[1]); 

    		 

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
