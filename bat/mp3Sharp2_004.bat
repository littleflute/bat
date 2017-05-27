rem v0.0.4
@echo off

for /f "eol=: delims=" %%F in ('dir /b /a-d *#*.mp3') do (
  for /f "tokens=1* eol=# delims=#" %%A in ("%%F") do ren "%%F" "%%A_%%~nB%%~xF"
)
