  
function _plxJobClass()
{
	this.v = "v0.0.1";
}
function CBlAppPlxClass()
{ 
	var _plxUI = null;
	var app = bl$("id_div_CXdMainFrame");
	if(app!=null){
		_plxUI = blo0.blDiv(app, app.id + "_plx" , "blAppPlx: v0.0. 12 " , blColor[3]);  
		_plxUI.v = blo0.blDiv(_plxUI, _plxUI.id + "_v" , "v " , blColor[4]);  
		blo0.blShowObj2Div(_plxUI.v,new _plxJobClass);
	} 
	else{
		alert("no 'id_div_CXdMainFrame' !");
	}
}
 
var _blAppPlx = new CBlAppPlxClass;    
