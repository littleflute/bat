del mp4list.txt
rem ------------ echo mp4c.bat v0.0. 31 ; >> mp4list.txt

rem step1: replace space with ''
@echo on
setlocal ENABLEDELAYEDEXPANSION
for %%a in ("* *.mp4") do (
set file=%%a
ren "!file!" "!file: =!"

)

rem ----------- step2: write list to mp4list.txt

