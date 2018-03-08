  
function _plxJobClass()
{
	this.v = "v0.0.2";
	
	this.blrAboutPlx= function(b,d){		
		var s = "blrAboutPlx<br>"; 
		s += "<a target='_blank' href='https://github.com/littleflute/bat/edit/master/blAppPlx.js'"
		s += " style='color:blue;'";
		s +=">";
		s += " blAppPlx.js*  ";
		s += "</a>"; 
		s += "<a target='_blank'  href='https://littleflute.github.io/bat/blAppPlx.js'";
		s += " style='color:yellow;'";
		s +=">";
		s += " blAppPlx.js ";
		s += "</a>"; 
		d.innerHTML = s;
		_on_off_div(b,d);
		d.style.background = blGrey[5];
		b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
	}
}
function CBlAppPlxClass()
{ 
	var _plxUI = null;
	var app = bl$("id_div_CXdMainFrame");
	if(app!=null){
		_plxUI = blo0.blDiv(app, app.id + "_plx" , "blAppPlx: v0.0. 13 " , blColor[3]);  
		_plxUI.v = blo0.blDiv(_plxUI, _plxUI.id + "_v" , "v " , blColor[4]);  
		blo0.blShowObj2Div(_plxUI.v,new _plxJobClass);
	} 
	else{
		alert("no 'id_div_CXdMainFrame' !");
	}
}
 
var _blAppPlx = new CBlAppPlxClass;    
