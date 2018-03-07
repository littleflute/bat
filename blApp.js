  
function _myJobClass()
{
	this.v = "v0.0.13";
	this.blrF1 = function(b,d){
		d.innerHTML = "";
		var v = d.innerHTML;
		function _loadIssue2Comments(o) {
			var a = o[0].body;
			var b = a.split("~~~html");
			var c = b[1].split("~~~"); 
			v += c[0]; 
			v += "<br>";

			var a = o[1].body;
			var b = a.split("~~~html");
			var c = b[1].split("~~~");
			var nb = bl$("mySidebar");
			
			v += c[1]; 
		}
		w3.getHttpObject("https://api.github.com/repos/littleflute/bat/issues/3/comments", _loadIssue2Comments);		
	}
}
function CBlAppClass()
{
	var mfUI = blo0.blMDiv(document.body, "id_div_CXdMainFrame" , "blApp: v0.1. 214 " , 0,0,150,50, blColor[2]);  
	mfUI.style.position = "fixed"; 
	mfUI.b1 = blo0.blBtn(mfUI,mfUI.id+"b1","+",this.v,blGrey[0]);
	mfUI.v 	= blo0.blDiv(mfUI,mfUI.id + "v" , "mfUI.v" ,0,150,190,20,blColor[1]);   
	
	blo0.blShowObj2Div(mfUI.v,new _myJobClass);	

	mfUI.b1.onclick = function(){
		_on_off_div(this,mfUI.v);
	}
 	mfUI.b1.click();  	mfUI.b1.click(); 
}
 
var f = new CBlAppClass;    
