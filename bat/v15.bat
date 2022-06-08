ffmpeg -i %1 -vf "scale=trunc(iw/10)*2:trunc(ih/10)*2" -c:v libx265 -crf 28 		%2
