 
function CBlAppPlxClass()
{ 
	var app = bl$("id_div_CXdMainFrame");
	if(app!=null){
		var mfUI = blo0.blMDiv(app, app.id + "_plx" , "blAppPlx: v0.0. 11 " , 0,0,150,50, blColor[3]);  
	} 
	else{
		alert("no 'id_div_CXdMainFrame' !");
	}
}
 
var _blAppPlx = new CBlAppPlxClass;    
