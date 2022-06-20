
function displayCurrentTime(){
    $("#current-time").text(moment().format("MMM Do YYYY, h:mm:ss"));
}

setInterval(displayCurrentTime);




