const tag = "blMiApp.js_v0. 13 "; 
blo0.addClass = function (o,className) {  o.classList.add(className); } 

 

var md = blo0.blMD("id_md_4_my_app",tag,50,50,500,100,blGrey[0]);
var s = "<h2>Closable Tabs</h2>";
s+='<p>To close a tab, add onclick="this.parentElement.style.display=\'none\'" to an element inside the tab container.</p>';
s+='<p><strong>Tip:</strong> The w3-button class can be used to style the close button (x):</p>';
var v1 = blo0.blDiv(md,md.id+"v1",s,blGrey[1]);
blo0.addClass(v1,"w3-container");
  
var tb = blo0.blDiv(md,md.id+"v2","::",blGrey[1]);
var v3 = blo0.blDiv(md,md.id+"v3","v3",blGrey[2]);

blo0.addClass( tb ,"w3-bar");
blo0.addClass( tb ,"w3-black");
tb.addBtn = function(name,clr,clickFun){
	var b = blo0.blBtn(tb,tb.id+"" + name,name,blGrey[2]);
	blo0.addClass ( b ,"w3-bar-item");
	blo0.addClass ( b , "w3-button");
	blo0.addClass ( b , clr);	
	b . onclick = function(){
		if(clickFun) clickFun();
	}
}
tb.addBtn("MP3","w3-black",function(){
	v3.innerHTML = "mp3";
});
tb.addBtn("MP4","w3-black",function(){
	var d = bl$("Div_4_MP4List");
	v3.innerHTML = d.innerHTML;
});
