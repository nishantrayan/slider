 check_update()
 {
    cd /home/pi/src/slider
    UPSTREAM=${1:-'@{u}'}
    LOCAL=$(git rev-parse @)
    REMOTE=$(git rev-parse "$UPSTREAM")
    BASE=$(git merge-base @ "$UPSTREAM")

    if [ $LOCAL = $REMOTE ]; then
        echo "uptodate"
    elif [ $LOCAL = $BASE ]; then
        echo "pull"
    elif [ $REMOTE = $BASE ]; then
        echo "push"
    else
        echo "diverged"
    fi
 }
 /home/pi/src/slider/scripts/show_shuttle.sh
 while true; do
    cd /home/pi/src/slider && git remote update
    update=$(check_update)
    if [ "$update" = "pull" ]; then;
        echo "Updates in remote"
        cd /home/pi/src/slider && git stash
        cd /home/pi/src/slider && git pull --rebase
        cd /home/pi/src/slider && git stash pop
        cd /home/pi/src/slider && ./scripts/show_shuttle.sh
    else
        echo "No updates in remote!"
    fi
    sleep 2
done
