
function displayCurrentTime(){
    $("#current-time").text(moment().format("MMM Do YYYY, h:mm:ss"));
}

setInterval(displayCurrentTime);

$('#modal-button').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })





