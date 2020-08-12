echo mi.bat_ v0. 23
rem Usages: mi mp4

del index.html
@echo off
echo ^<!DOCYPE html^> 												>>index.html
echo ^<html^> 													>>index.html
echo ^<title^>blMi index.html^</title^>										>>index.html
echo ^<meta name="viewport" content="width=device-width, initial-scale=1"^>					>>index.html
echo ^<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"^>					>>index.html
echo ^<body^> 													>>index.html

echo ^<script src="https://www.w3schools.com/lib/w3.js"^>^</script^>						>>index.html
echo ^<script src="https://littleflute.github.io/JavaScript/blclass.js"^>^</script^>				>>index.html
echo ^<script src="blMiApp.js"^>^</script^>									>>index.html

echo ^<div id="id_div_4_mi.bat" ^>										>>index.html
echo ^<a target="_blank" href="https://github.com/littleflute/bat"^>bat.git v0. 23 ^</a^> -			>>index.html
echo ^<a target="_blank" href="https://github.com/littleflute/bat/edit/master/bat/mi/mi.bat"^> mi.bat *^</a^>-	>>index.html 
echo ^</div^>						 							>>index.html
echo ^<div class="w3-bar w3-black"^>abc^</div^>									>>index.html

echo ^<br^> >>index.html 



echo ^<div id = "Div_4_MP4List" ^>							 				>>index.html
@echo on
setlocal ENABLEDELAYEDEXPANSION
call set /a x = 0
for /F "delims="  %%a in ('dir /b *.mp4') do (
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
@echo off  




echo ^</html^> 													>>index.html
echo ^</body^> 													>>index.html
