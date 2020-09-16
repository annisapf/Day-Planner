
$(document).ready(

  function () {

    createDatabase()

    displayDayPlanner()
  }
);

//Functon to get current date, time and to display in the top page using moment js
function getCurrentDate() {

  var currentDate = moment().format('dddd, MMMM Do YYYY');
  $("#currentDay").text(currentDate);
  return (currentDate);

}

//This function to create database for timetable
function createDatabase() {

  var todayDate = getCurrentDate();

  var myDay = [
    {
      hour: "09",
      task: "",
    },
    {
      hour: "10",
      task: "",
    },
    {
      hour: "11",
      task: "",
    },
    {
      hour: "12",
      task: "",
    },
    {
      hour: "13",
      task: "",
    },
    {
      hour: "14",
      task: "",
    },
    {
      hour: "15",
      task: "",
    },
    {
      hour: "16",
      task: "",
    },
    {
      hour: "17",
      task: "",
    }
  ]

  var dataToday = localStorage.getItem(todayDate)
  if (dataToday == null) {
    localStorage.setItem(todayDate, JSON.stringify(myDay));
  }

}


//displayDayPlanner function renders the HTML to display the timetable 
function displayDayPlanner() {

  var currentDate = getCurrentDate();

  var savedDay = JSON.parse(localStorage.getItem(currentDate));


  for (var i = 0; i < savedDay.length; i++) {

    var getHour = savedDay[i].hour;
    var getTask = savedDay[i].task;

    //create div row
    var timeTable = $('<div>').attr({ "class": "row", "id": "form_" + getHour });

    //create hour area
    var hourArea = $('<div>').text(getHour).attr({ "class": "col-md-2 hour", "id": "div_" + getHour });

    //create textarea
    var taskArea = $('<textarea>').text(getTask).attr({ "id": "textarea_" + getHour });

    //creates save button
    var buttonIcon = $("<i class='far fa-save fa-lg'></i>");
    var saveButton = $("<button>").attr({ "class": "col-md-1 saveBtn", "id": "Btn_" + getHour });


    //check past, present.future
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

    //Function to handle events where save button is clicked
    $("#Btn_" + getHour).click(
      function () {
        var id = this.id;

        console.log(id);

        //Calling saveWorkPlanner function to save textarea
        saveWorkPlanner(id);

      }
    );

  }

}


//Function to save textarea
function saveWorkPlanner(id) {

  var hour_id = id.split("_")[1]

  var textToSave = $("#textarea_" + hour_id).val();

  var currentDate = getCurrentDate();

  var savedDay = JSON.parse(localStorage.getItem(currentDate));

  //loop updated local storage
  for (var i = 0; i < savedDay.length; i++) {

    var getHour = savedDay[i].hour;

    if (getHour == hour_id) {
      savedDay[i].task = textToSave;
      localStorage.setItem(currentDate, JSON.stringify(savedDay));
      break;
    }

  }

}


