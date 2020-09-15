
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
      hour: "17",
      task: "sleep",
    },
    {
      hour: "18",
      task: "eat",
    },
    {
      hour: "12",
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

  var retrievedObject = localStorage.getItem('myDay');
  console.log("retrieved", retrievedObject);

  var schedule = JSON.parse(retrievedObject)


  for (var i = 0; i < schedule.length; i++) {

    var getHour = schedule[i].hour;
    var getTask = schedule[i].task;

    console.log(getHour);

    //check if hour is past, present future
    var momentPresent = moment().hour();
    var momentCheck = getHour;

    if (momentCheck < momentPresent) {
      $('#task-area').css("background", "red");

      console.log("past");

    } else if (momentCheck = momentPresent) {
      $('#task-area').css("background", "grey");
      console.log("present");
    } else {
      $('#task-area').css("background", "blue");
      console.log("future");
    }

    output = '<li class="row-agenda">' + getHour + '<textarea id="task-area">' + getTask + '</textarea>' + '<button id="' + getHour + '" class="save-button">' + '<i class="far fa-save fa-lg"></i>' + "add" + '</button>' + '</li>';
    $(".container").append(output)


  }

  $(".save-button").click(
    function () {
      var id = this.id;
      alert("checking button " + id);


    }
  );
}


