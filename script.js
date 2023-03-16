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

     
      localStorage.setItem(time, text); //storage data when you activate tje SetItem function.
  })
  //call any data from the container parent *each hour in the calendar and as your preference 24hr day or 12hr.
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
      // get current hours using dayjs
      var currentHour = dayjs().hour(); 

      // loop over each children from the container parent (each hour in the dairy)
      $(".time-block").each(function () {
          var blockHour = parseInt($(this).attr("id").split("-")[1]);
          console.log( blockHour, currentHour)
          console.log('hour-1pm'.split('-'))

          //identify if the children has pass the current time then execute java and css accordingly
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
})