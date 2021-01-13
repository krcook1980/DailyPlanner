//Global Variables
var topDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var currentHour = moment().hour();
var hours = [9, 10, 11, 12, 1, 2, 3, 4, 5];
var militaryHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var newRow = $("<div class='row time-block'>" + hours[i] + "</div>");
var tasks = [];
var newTask = $(".description").value;

$("#currentDay").text(topDate);


//time blocks for standard business hours listed in rows
for (var i = 0; i < hours.length; i++) {
    var newRow = $("<div class='row time-block'></div>");
    var hourDiv = $("<div class='col-md-1 hour'>" + hours[i] + "</div>");
    var descDiv = $("<div class='input-group mb-1 col-md-8'>" + "</div>");
    var inpDiv = $("<input type='text' class='form-control description pb-5' placeholder='' aria-label='description' aria-describedby='button-addon2'>");
    var btnDiv = $("<button class='saveBtn btn' type='button' id='button-addon1'>" + "Save" + "</button>");
    if (hours[i] > 8) {
        hourDiv.append(" am");
    }
    else {
        hourDiv.append(" pm");
    }


   

    inpDiv.attr("id", hours[i]); 
    btnDiv.attr("data-id", hours[i]);
    descDiv.append(inpDiv, btnDiv);
    newRow.append(hourDiv, descDiv);
    $(".container").append(newRow);

    var prevTask = localStorage.getItem(hours[i]);
     //if my key = my id then .text myt nonsense
     if (prevTask){
        $("#"+hours[i]).val(prevTask); 
     }
 
    compareTime();
}


$(".saveBtn").click(saveTasks);



function compareTime() {
    if (militaryHours[i] > currentHour) {
        inpDiv.addClass("future");
    }
    else if (militaryHours[i] < currentHour) {
        inpDiv.addClass("past");
    }
    else if (militaryHours[i] == currentHour) {
        inpDiv.addClass("present")
    }
}


       function saveTasks(){
         
       var textId = $(this).attr("data-id");
       var textTask = ($("#"+ textId).val());
        localStorage.setItem(textId, textTask);
       }
        
   