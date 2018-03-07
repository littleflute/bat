var _v = "v0.0. 31 ";
var s = "plx_" + _v;
s += "<a target = '_blank' href='https://littleflute.github.io/bat/mp3/MereChristianity/cd1/plx.js'>plx.js</a> - ";
s += "<a target = '_blank' href='https://github.com/littleflute/bat/edit/master/mp3/MereChristianity/cd1/plx.js'>plx.js*</a>";

var plxUI = blo0.blMDiv(bl$("id_div_wrap_4_plx" ),"id_mdiv_4_plx",s,350,50,500,50,"green");	
plxUI.v1 = blo0.blDiv(plxUI,plxUI.id + "v1", "v1",blColor[0]);

function _blMp3Class(){
	this.blrF1 = function (b, d){
		b.innerHTML = "1:00_Preface.mp3";
		me.play( b );
	}
	this.blrF2 = function (b, d){
		b.innerHTML = "2:01_Book I, Part 1 - The Law Of Human Nature.mp3";
		me.play( b );
	}
	this.blrF3 = function (b, d){
		b.innerHTML = "3:02_Part 2 - Some Objections.mp3";
		me.play( b );
	}
	this.blrF4 = function (b, d){
		b.innerHTML = "4:03_Part 3 - The Reality Of The Law.mp3";
		me.play( b );
	}
	this.blrF5 = function (b, d){
		b.innerHTML = "5:04_Part 4 - What Lies Behind The Law.mp3";
		me.play( b );
	}
	this.blrF6 = function (b, d){
		b.innerHTML = "6:05_Part 5 - We Have Cause To Be Uneasy.mp3";
		me.play( b );
	}
	this.blrF7 = function (b, d){
		b.innerHTML = "7:06_Book II, Part 1 - The Rival Conceptions Of God.mp3";
		me.play( b );
	}
}
var _mp3Obj = new _blMp3Class ;
blo0.blShowObj2Div(plxUI.v1, _mp3Obj );
