
$(document).ready(

  function () {
    createDatabase()
    displayWorkPlanner()
  }
);

function getCurrentDate() {

  //get current date and display in the top page using moment js
  var currentDate = moment().format('dddd, MMMM Do');
  $("#currentDay").text(currentDate);

}


function createDatabase() {

  //define data structures for day planner 
  //check if the stored data is today date if not empty data
  //create new element if empty in localstorage 
  getCurrentDate();

  var myDay = [
    {
      hour: "09",
      task: "",
    },
    {
      hour: "10",
      task: "eat",
    },
    {
      hour: "11",
      task: "code",
    },
    {
      hour: "12",
      task: "code",
    },
    {
      hour: "13",
      task: "code",
    },
    {
      hour: "14",
      task: "code",
    },
    {
      hour: "15",
      task: "code",
    },
    {
      hour: "16",
      task: "code",
    },
    {
      hour: "17",
      task: "code",
    }
  ]

  var showDate = localStorage.setItem('myDay', JSON.stringify(myDay));


  if (showDate == null) {

    console.log(myDay.hour);

    //create data to store each task for every hour
  }



}



// Loop through the data that was created above and render the data by showing it in the html
function displayWorkPlanner() {

  //get the current date to render stored date 
  //create each html tag (p,textarea,button) and loop for each hour
  //make sure to make the add / save button work (create new function that render from data id)

  var output = "";

  var savedDay = JSON.parse(localStorage.getItem('myDay'));

  //check new add task
  if (savedDay) {
    myDay = savedDay;
  }

  console.log("savedDay", savedDay);

  for (var i = 0; i < savedDay.length; i++) {

    var getHour = savedDay[i].hour;
    var getTask = savedDay[i].task;

    console.log("check", getHour);

    //form for each time table
    var timeTable = $('<form>').attr({ "class": "row", "id": "form_" + getHour });

    //render each hour
    var hourArea = $('<div>').text(getHour).attr({ "class": "col-md-2 hour", "id": "div_" + getHour });

    //each task
    var taskArea = $('<textarea>').text(getTask).attr({ "id": "textarea_" + getHour });

    //creates save button
    var buttonIcon = $("<i class='far fa-save fa-lg'></i>");
    var saveButton = $("<button>").attr({ "class": "col-md-1 saveBtn", "id": "Btn_" + getHour });


    //check if hour is past, present future
    var momentPresent = moment().hour();
    var momentCheck = getHour;

    if (momentCheck < momentPresent) {
      taskArea.attr({ "class": "col-md-9 description p-0 past" });
    } else if (momentCheck == momentPresent) {
      taskArea.attr({ "class": "col-md-9 description p-0 present" });
    } else {
      taskArea.attr({ "class": "col-md-9 description p-0 future" });
    }
    saveButton.append(buttonIcon);
    timeTable.append(hourArea, taskArea, saveButton)

    $(".container").append(timeTable);

    $("#Btn_" + getHour).click(
      function () {
        var id = this.id;
        alert("checking button " + id);

        saveWorkPlanner();
        console.log("saveWorkPlanner", saveWorkPlanner);

      }
    );

  }

}

$(".saveBtn").click(
  function () {
    var id = this.id;
    alert("checking button " + id);

    saveWorkPlanner();
    console.log("saveWorkPlanner", saveWorkPlanner);

  }
);


function saveWorkPlanner() {
  localStorage.setItem('myDay', JSON.stringify(myDay));
}


