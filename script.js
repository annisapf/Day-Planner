
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


function createDatabase(currentDate) {

  //define data structures for day planner 
  //check if the stored data is today date if not empty data
  //create new element if empty in localstorage 
  getCurrentDate();

  var myDay = {
    hour: "10",
    task: "sleep",
  }

  var showDate = localStorage.setItem('myDay', JSON.stringify(myDay));
  var retrievedObject = localStorage.getItem('myDay');

  var getHourObject = JSON.parse(retrievedObject).hour;
  var getTaskObject = JSON.parse(retrievedObject).task;


  console.log("this is hour", getHourObject);
  console.log("this is task", getTaskObject);

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


}


