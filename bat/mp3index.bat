;v0.2.8
 
del index.html
echo ^<!DOCTYPE html^>  >> index.html
echo ^<html^>	>> 	index.html
echo ^<head^>	>> 	index.html
echo ^<title^>	>> 	index.html
 Creat html by Bat 
echo ^</title^>	>> 	index.html
echo ^</head^>	>> 	index.html
echo ^<body^>	>> 	index.html

echo para 1: %1 ^<br^>	>> 	index.html

echo ^<a href="http://www.beautifullover.org" target="_blank"^>	>> 	index.html
echo beautifullover ^</a^>	>>	index.html
echo ^</br^>	>>index.html

echo ^<a href="https://github.com/littleflute/BlCDs/issues/519" target="_blank"^>	>> 	index.html
echo issue519 ^</a^>	>>	index.html


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
	echo ^<button onclick="play('%%a')"^>!x!:%%a^</button^> >>index.html
)

echo ^<audio id="mp3Player" controls^> 	>>index.html
echo 	^<source src="01 Owner of a Lonely Heart.mp3" type="audio/mpeg"^>	>>index.html
echo	Your browser does not supoort hte audio element!	>>index.html
echo ^</audio^>		>>index.html


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

echo	//--	>>index.html
echo function play(url){		>>index.html
echo 	var p = document.getElementById("mp3Player");	>>index.html
echo	p.src = url;	>>index.html
echo	p.play();	>>index.html
echo }	>>index.html	>>index.html

echo ^</script^>							>>index.html


echo ^</body^>	>> 	index.html
echo ^</html^>	>> 	index.html
