function getNextShuttleTime(){
    const shuttleTimeStrings = ['5:45 pm']
    const shuttleTimes = $.map(shuttleTimeStrings, function(ts){
        var hm = ts.split(":");
        var hour = parseInt(hm[0]);
        var slot = hm[1].split(" ")[1].toLowerCase();
        var minute = parseInt(hm[1].split(" ")[0]);
        if(slot == "pm" && hour < 12){
            hour = hour + 12;
        } else if(slot == 'am' && hour == 12){
            hour = 0;
        }
        var dt = new Date($.now());
        dt.setHours(hour);
        dt.setMinutes(minute);
        return dt;
    });
    var nextShuttleTimes = $.grep(shuttleTimes, function(dt){
        console.log(fmtDate(dt));
        return dt.getTime() >= new Date($.now()).getTime();
    });
    if(nextShuttleTimes.length == 0){
        return null;
    } else {
        return nextShuttleTimes[0];
    }
}
function fmtTime(dt){
    return dt.getHours() + ":" + dt.getMinutes();
}
function fmtDate(dt){
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[dt.getMonth()] + " " + dt.getDate() + ", " + dt.getYear();
}
$(document).ready(function(){

    var dt = new Date($.now());
    $('.currentDate').text(fmtDate(dt))
    $('.currentTime').text(fmtTime(dt));
    var nextShuttleTime = getNextShuttleTime();
    if(nextShuttleTime != null) {
        $('.nextShuttleTime').text(fmtTime(getNextShuttleTime()));
    } else {
        $('.nextShuttleTime').text("NO MORE!");
    }

});
