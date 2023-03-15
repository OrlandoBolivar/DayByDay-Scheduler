var timeDisplayEl = $('#time-display');



// display time 
function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeDisplayEl.text(rightNow);
}



$(document).ready(function () {
  $("#currentDay").text(dayjs().format("MMMM DD YYYY, h:mm:ss a")); 
  $(".fas").on("click", function () {
      console.log(this);
      var text = $(this).parent().siblings(".description").val(); 
      var time = $(this).parent().parent().attr("id"); 

      //set items in local storage.
      localStorage.setItem(time, text);
  })
  //load any saved data from LocalStorage - do this for each hour created. Should follow html 24 hour to 12 hour conversion.
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12pm"));
  $("#hour-13pm .description").val(localStorage.getItem("hour-13pm"));
  $("#hour-14pm .description").val(localStorage.getItem("hour-14pm"));
  $("#hour-15pm .description").val(localStorage.getItem("hour-15pm"));
  $("#hour-16pm .description").val(localStorage.getItem("hour-16pm"));
  $("#hour-17pm .description").val(localStorage.getItem("hour-17pm"));
  $("#hour-18pm .description").val(localStorage.getItem("hour-18pm"));
  $("#hour-19pm .description").val(localStorage.getItem("hour-19pm"));

  function hourTracker() {
      //get current number of hours.
      var currentHour = dayjs().hour(); // use of moment.js

      // loop over time blocks
      $(".time-block").each(function () {
          var blockHour = parseInt($(this).attr("id").split("-")[1]);
          console.log( blockHour, currentHour)
          console.log('hour-1pm'.split('-'))

          //check if we've moved past this time, click into css/html given classes of past, present, or future
          if (blockHour < currentHour) {
              $(this).addClass("past");
              $(this).removeClass("future");
              $(this).removeClass("present");
          }
          else if (blockHour === currentHour) {
              $(this).removeClass("past");
              $(this).addClass("present");
              $(this).removeClass("future");
          }
          else {
              $(this).removeClass("present");
              $(this).removeClass("past");
              $(this).addClass("future");
          }
      })
  }
  hourTracker()
// // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// var today = new Date();
//   var day = today.getDay();
//   var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
//   console.log("Today is : " + daylist[day] + ".");
//   var hour = today.getHours();
//   var minute = today.getMinutes();
//   var second = today.getSeconds();
//   var prepand = (hour >= 12)? " PM ":" AM ";
//   hour = (hour >= 12)? hour - 12: hour;
//   if (hour===0 && prepand===' PM ') 
//   { 
//   if (minute===0 && second===0)
//   { 
//   hour=12;s
//   prepand=' Noon';
//   } 
//   else
//   { 
//   hour=12;
//   prepand=' PM';
//   } 
//   } 
//   if (hour===0 && prepand===' AM ') 
//   { 
//   if (minute===0 && second===0)
//   { 
//   hour=12;
//   prepand=' Midnight';
//   } 
//   else
//   { 
//   hour=12;
//   prepand=' AM';
//   } 
//   } 
//   console.log(today);

// console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);
// // the code isn't run until the browser has finished rendering all the elements
// // in the html.
// $(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
// });
})