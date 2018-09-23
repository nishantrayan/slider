 while true; do
    ~/src/slider/scripts/show_shuttle.sh
    pushd ~/src/slider
	git pull --rebase
	popd
done
