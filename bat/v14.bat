ffmpeg -i %1 -vf "scale=trunc(iw/8)*2:trunc(ih/8)*2" -c:v libx265 -crf 28 		%2
