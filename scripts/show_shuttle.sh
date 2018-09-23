pgrep -fl epiphany-browser | cut -d" " -f1 | xargs kill -9;
epiphany-browser  ~/src/slider/web/slider.html &