
// var for timer
var num = 60;

// vars questions

// vars for display of questions



// on laod screen, display rules

// load on start button
// start timer
$("#Play").on("click", run); 


// display questions and answers

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  //  The decrement function.
  function decrement() {
    //  Decreases the number by one
    number--;
    //  shows the timer in html
    $("#timer").html("<h3>" + number + "</h3>");
    //when timer reaches zero the timer stops and alerts time is up  
    if (number === 0) {
      stop();
      alert("Time Up!");
    }
  }