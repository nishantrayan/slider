 while true; do
    /home/pi/src/slider/scripts/show_shuttle.sh
    pushd /home/pi/src/slider
	git pull --rebase
	popd
done
