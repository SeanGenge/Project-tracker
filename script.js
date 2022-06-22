projectTypes = ["Web Application (Full stack)", "Web Application (Back-end)", "Web Application (front-end)", "Application programming interface", "Database"]

function displayCurrentTime(){
    $("#current-time").text(moment().format("MMM D, YYYY [at] h:mm:ss a"));
}

function initProjectTypes() {
    // Dynamically add the project types to the select element
    for (var i = 0;  i < projectTypes.length; i++) {
        var option = document.createElement("option");
        var select = document.getElementById("projectType");
        
        option.value = projectTypes[i];
        option.textContent = projectTypes[i];
        
        select.appendChild(option);
    }
}

setInterval(displayCurrentTime);
initProjectTypes();


