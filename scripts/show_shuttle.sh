epiphany-browser  ~/src/slider/web/slider.html &
sleep 10;
pgrep -fl epiphany-browser | cut -d" " -f1 | xargs kill -9;
