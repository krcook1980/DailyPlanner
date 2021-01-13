//Global Variables
var topDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var currentHour = moment().hour();
var hours = [9, 10, 11, 12, 1, 2, 3, 4, 5];
var militaryHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var newRow = $("<div class='row time-block'>" + hours[i] + "</div>");

$("#currentDay").text(topDate);


//time blocks for standard business hours listed in rows
for (var i = 0; i < hours.length; i++) {
    //variables for sections of the website
    var newRow = $("<div class='row time-block'></div>");
    var hourDiv = $("<div class='col-md-1 hour'>" + hours[i] + "</div>");
    var descDiv = $("<div class='input-group mb-1 col-md-8'>" + "</div>");
    var inpDiv = $("<input type='text' class='form-control description pb-5' placeholder='' aria-label='description' aria-describedby='button-addon2'>");
    var btnDiv = $("<button class='saveBtn btn' type='button' id='button-addon1'>" + "Save" + "</button>");
    //Check local storage for previously saved tasks
    var prevTask = localStorage.getItem(hours[i]);

    //append the hour, text box and save buttons to the page
    inpDiv.attr("id", hours[i]);
    btnDiv.attr("data-id", hours[i]);
    descDiv.append(inpDiv, btnDiv);
    newRow.append(hourDiv, descDiv);
    $(".container").append(newRow);

    //add am or pm to hour div
    if (hours[i] > 8) {
        hourDiv.append(" am");
    }
    else {
        hourDiv.append(" pm");
    }

    //if task exists in local storage, add it to the text task box
    if (prevTask) {
        $("#" + hours[i]).val(prevTask);
    }

    compareTime();
}

//function to decern if time sections are past current or future
function compareTime() {
    if (militaryHours[i] > currentHour) {
        inpDiv.addClass("future");
    }
    else if (militaryHours[i] < currentHour) {
        inpDiv.addClass("past");
    }
    else if (militaryHours[i] == currentHour) {
        inpDiv.addClass("present");
    }
}

//function to push tasks to local storage upon clicking the save button
function saveTasks() {
    var textId = $(this).attr("data-id");
    var textTask = ($("#" + textId).val());
    localStorage.setItem(textId, textTask);
}

$(".saveBtn").click(saveTasks);