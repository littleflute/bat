;v0.6.9
 
del index.html
echo ^<!DOCTYPE html^>  >> index.html
echo ^<html^>	>> 	index.html
echo ^<head^>	>> 	index.html
echo ^<title^>	>> 	index.html
echo Creat html by Bat	>>index.html 
echo ^</title^>	>> 	index.html
echo ^</head^>	>> 	index.html
echo ^<body^>	>> 	index.html

echo para 1: %1 ^<br^>	>> 	index.html

echo ^<a href="http://www.beautifullover.org" target="_blank"^>	>> 	index.html
echo beautifullover ^</a^>	>>	index.html
echo ^</br^>	>>index.html

echo ^<a href="https://github.com/littleflute/BlCDs/issues/519" target="_blank"^>	>> 	index.html
echo issue519 ^</a^>	>>	index.html

echo ^<div id="curSong" style="border:1px solid green;"^>^</div^>	>>index.html
echo ^<p id="demo" style="border:1px solid red;"^>^</p^>		>> index.html
 
setlocal ENABLEDELAYEDEXPANSION
call set /a x = 0

for /F "delims=" %%a in ('dir /b *.mp3') do (
	rem echo %%a >>index.html
	if !x! == 10 (
		echo ^<br^> >>index.html
	)
	if !x! == 20 (
		echo ^<br^> >>index.html
	)
	if !x! == 30 (
		echo ^<br^> >>index.html
	)
	if !x! == 40 (
		echo ^<br^> >>index.html
	)
	call set /a x = !x! + 1
	if !x! == 1 (
		 echo ^<br^> ^<div id='song1'^>%%a^</div^>	>>index.html
	)
	echo ^<button id = "!x!" onclick="play(this)"^>!x!:%%a^</button^> >>index.html
)
 

echo ^<br^>^<audio id="mp3Player" controls^> 	>>index.html
echo 	^<source src="01 Owner of a Lonely Heart.mp3" type="audio/mpeg"^>	>>index.html
echo	Your browser does not supoort hte audio element!	>>index.html
echo ^</audio^>		>>index.html

echo ^<div id="timerShow" style="border:1px solid blue;"^>^</div^>	>>index.html
echo ^<button onclick="playId(1)"^>test^</button^>	>>index.html

echo ^<script^>								>> index.html

echo 	var xmlhttp = new XMLHttpRequest();				>> index.html
echo 	xmlhttp.onreadystatechange = function() {				>>index.html
echo    	if(this.readyState == 4 ^&^& this.status == 200) {		>>index.html
echo        		var myObj = JSON.parse(this.responseText); 		>>index.html
echo        		document.getElementById("demo").innerHTML = myObj.songNum;	>>index.html
echo    	}								>>index.html
echo 	};		>> index.html
echo 	xmlhttp.open("GET", "https://littleflute.github.io/Elton-John/l.json", true);	>>index.html
echo 	xmlhttp.send();							>>index.html

echo var oldBtn = null;		>>index.html
echo function play(o){		>>index.html
echo    if(oldBtn) oldBtn.style.backgroundColor = "green";	>>index.html
echo 	var p = document.getElementById("mp3Player");	>>index.html
echo    var s = o.innerHTML; 				>>index.html
echo    s = s.split(":");				>>index.html
echo 	p.src = s[1];	>>index.html
echo 	p.play();	>>index.html
echo 	var s = document.getElementById("curSong");	>>index.html
echo 	if(s) s.innerHTML = p.src;				>>index.html
echo    o.style.backgroundColor="yellow";		>>index.html
echo    oldBtn = o;					>>index.html
echo }	>>index.html

echo var nTimer = 0;			>>index.html
echo setInterval(myTimeFun, 1000);	>>index.html

echo function myTimeFun(){		>>index.html
echo    nTimer++;			>>index.html
echo    var t = document.getElementById("timerShow"); 		>> index.html
echo    var p = document.getElementById("mp3Player"); 		>> index.html
echo	t.innerHTML = nTimer + ": " + p.currentTime + "/" + p.duration;		>> index.html
echo	if(p.ended) playId(parseInt(oldBtn.id)+1);	>>index.html
echo }>>index.html

echo function playId(id){	>>index.html
echo    var b = document.getElementById(id);	>>index.html 
echo    if(b==null) b = document.getElementById("1");	>>index.html
echo    play(b);	>>index.html
echo }>>index.html

echo //*		>>index.html
echo function mp3Engine(){	>>index.html
echo    this.p = document.getElementById("mp3Player");	>>index.html
echo    this.setVolume = function(v){	>>index.html
echo         this.p.volume = v;	>>index.html
echo    }>>index.html
echo }	>>index.html
echo var me = new mp3Engine();	>>index.html
echo me.setVolume(0.2);		>>index.html
echo //*/	>>index.html
echo ^</script^>							>>index.html


echo ^</body^>	>> 	index.html
echo ^</html^>	>> 	index.html