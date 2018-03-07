 
function CXdMainFrame()
{
	var mfUI = blo0.blMDiv(document.body, "id_div_CXdMainFrame" , "mfUI: v0.1. 153 " , 0,0,150,50, blColor[2]);  
	mfUI.style.position = "fixed";
	mfUI.style.top = "50px";
	mfUI.style.left = "1px"; 
	mfUI.style.width = "70px";
	mfUI.style.height = "50px"; 
	mfUI.b1 = blo0.blBtn(mfUI,mfUI.id+"b1","+",this.v,blGrey[0]);
	var s = "<div id = 'id_div_toolbar_4_blApp' style='width:100%;height:50px;'>v0.1. 51 </div>"; 
	mfUI.d 	= blo0.blMDiv(mfUI, "id_div_CXdMainFrame_ui" ,s,0,150,190,20,blColor[1]);   
	mfUI.d.jobView = blo0.blDiv(mfUI.d,mfUI.d.id + "jobView","jobView",blColor[4]);
	//blo0.blShowObj2Div(mfUI.d.jobView,new _myJobClass);
	mfUI.d.followDiv = mfUI;

	mfUI.b1.onclick = function(){
		_on_off_div(this,mfUI.d);
	}
 	mfUI.b1.click();
 	mfUI.b1.click(); 
}
 
var f = new CXdMainFrame;    
