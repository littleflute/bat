del mp4list.txt
rem ------------ echo mp4c.bat v0.0. 32 ; >> mp4list.txt

rem step1: replace space with ''
@echo on
setlocal ENABLEDELAYEDEXPANSION
for %%a in ("* *.mp4") do (
set file=%%a
ren "!file!" "!file: =!"

)

rem ----------- step2: write list to mp4list.txt

call set /a x = 0
for /F "delims=" %%a in ('dir /b *.mp4') do (
call set /a x = !x! + 1
rem echo !x!
echo file '%%a' >> mp4list.txt
)
@echo off