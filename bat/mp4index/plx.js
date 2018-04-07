//plx.js 
var _div = function (id, html){					
	var	r = document.createElement("div");		
	r.id = id;				
	r.innerHTML = html; 				
	document.body.appendChild(r);	 	
}				
	
_div ("id_div_1"," plx.js : v0.0. 5 ");	