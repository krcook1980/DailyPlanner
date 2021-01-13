//Global Variables
var topDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var currentHour = moment().format("h");
var hours = [9, 10, 11, 12, 1, 2, 3, 4, 5];
var newRow = $("<div class='row time-block'>" + hours [i] + "</div>");
var tasks = [];
var newTask = $(".description").value;

$("#currentDay").text(topDate);


//time blocks for standard business hours listed in rows
for (var i = 0; i < hours.length; i++){
    var newRow = $("<div class='row time-block'></div>" );
    var hourDiv = $("<div class='col-md-2 hour'>"+ hours[i] + "</div>");
    
    var descDiv = $("<div class='input-group mb-5 col-md-8'>"+"</div>");
    var inpDiv = $("<input type='text' class='form-control description' placeholder='description' aria-label='description' aria-describedby='button-addon2'>");
    var btnDiv = $("<button class='saveBtn btn' type='button' id='button-addon1'>"+"Save"+"</button>");
    inpDiv.attr("id", hours[i]);
    btnDiv.attr("id", hours[i]);
    descDiv.append(inpDiv, btnDiv);
    newRow.append(hourDiv, descDiv);
    $(".container").append(newRow); 

    //time blocks are color coded for past present future *** how compare time hours?
    hours = [9, 10, 11, 12, 13, 14, 15, 16, 17]
    currentHour = moment().format("H");
    if (hours[i] > currentHour){
    inpDiv.addClass("future"); 
     }
    else if(hours[i] < currentHour){
     inpDiv.addClass("past");     
    }
    else if (hours[i] == currentHour){
     inpDiv.addClass("present")
    }
}

//can enter tasks in time block, click save sends to local storage
      //push the save button id and description to local storage
        //get text entered in description
        //newTask variable set global, but need to associate with id
      
        //function saveTasks(){}
        //1st, pull from local storage any info there
            //var storedTask = JSON.parse(localStorage.getItem("tasks"));
            //if (storedTask !== null){
                //tasks = storedTasks;
               // tasks.push(id of input + "description field" )
            //}
  
        


    //put prev saved task in the appropriate hour
        //input.text(prevTask) ... need input id