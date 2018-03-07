  
function _myJobClass()
{
	this.v = "v0.0.21";
	this.blrF1 = function(b,d){
		d.innerHTML = "blrF1 <br>"; 
		function _loadIssue3Comments(o) {
			for(i in o){
				var a = o[i].body;
				var b = a.split("~~~html");
				var c = b[1].split("~~~"); 
				d.innerHTML += c[0]; 
				d.innerHTML += "<br>";
			}
 
		}
		w3.getHttpObject("https://api.github.com/repos/littleflute/bat/issues/3/comments", _loadIssue3Comments);		
	}
}
function CBlAppClass()
{
	var mfUI = blo0.blMDiv(document.body, "id_div_CXdMainFrame" , "blApp: v0.1. 221 " , 0,0,150,50, blColor[2]);  
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
