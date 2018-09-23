 while true; do
    ./show_shuttle.sh
    pushd ~/src/slider
	git pull --rebase
	popd
done
