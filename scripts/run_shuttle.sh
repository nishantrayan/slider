 while true; do
    /home/pi/src/slider/scripts/show_shuttle.sh
    cd /home/pi/src/slider && git pull --rebase
done
