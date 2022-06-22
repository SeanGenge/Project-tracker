
function displayCurrentTime(){
    $("#current-time").text(moment().format("MMM D, YYYY [at] h:mm:ss a"));
}

setInterval(displayCurrentTime);

$('#modal-button').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })





