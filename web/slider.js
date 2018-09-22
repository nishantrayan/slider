$(document).ready(function(){
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    var dt = new Date($.now());
    var currentTime = dt.getHours() + ":" + dt.getMinutes();
    var currentDate = monthNames[dt.getMonth()] + " " + dt.getDate() + ", " + dt.getYear();
    $('.currentDate').text(currentDate)
    $('.currentTime').text(currentTime);

});
