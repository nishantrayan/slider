 while true; do   
	epiphany-browser  ~/src/slider/web/slider.html &    
	sleep 5;  
	pgrep -fl epiphany-browser | cut -d" " -f1 | xargs kill -9; 
	pushd ~/src/slider ; 
	git pull --rebase ; 
	popd; 
done
