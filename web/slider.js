$(document).ready(function(){
    var currentTime = new Date($.now());
    var formattedTime = currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();

    $('.currentTime').text('Current time is '+ formattedTime);
});
