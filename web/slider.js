function getNextShuttleTime(){
    const shuttleTimeStrings = ["12:05 AM", "6:15 AM","6:45 AM","7:00 AM","7:20 AM","7:30 AM","7:40 AM","7:50 AM","8:00 AM","8:08 AM","8:28 AM","8:38 AM","8:48 AM","8:55 AM","9:08 AM","9:21 AM","9:41 AM","10:01 AM","10:21 AM","10:31 AM","10:51 AM","11:11 AM","11:36 AM","11:56 AM","12:16 PM","12:41 PM","1:01 PM","1:21 PM","1:46 PM","2:06 PM","2:26 PM","2:51 PM","3:11 PM","3:34 PM","3:59 PM","4:09 PM","4:19 PM","4:33 PM","4:47 PM","4:58 PM","5:12 PM","5:22 PM","5:32 PM","5:46 PM","6:00 PM","6:11 PM","6:25 PM","6:35 PM","6:45 PM","6:59 PM","7:13 PM","7:24 PM","7:38 PM","7:58 PM","8:23 PM","8:43 PM","9:03 PM","9:28 PM","9:48 PM","10:08 PM","11:05 PM"]
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
    return monthNames[dt.getMonth()] + " " + dt.getDate();
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
