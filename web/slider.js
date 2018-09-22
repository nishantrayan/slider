function getNextShuttleTime(){
    return new Date($.now());
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
    $('.nextShuttleTime').text(fmtTime(getNextShuttleTime()));
});
