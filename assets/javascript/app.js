

// Question set
var questions = [{
  question: " Where were Ross and Emily supposed to go for their honeymoon?",
  answers: ["Athens", "California", "Hawaii", "Mexico"],
  correctAnswer: "Athens",
}, 

{
  question: "What does Chandler's co-worker, Bob, think Chandler's name is?",
  answers: ["Phil", "Johnny", "Willy", "Toby"],
  correctAnswer: "Toby",
}, 

{
  question: "Joey says that giving Rachel pickles during her pregnancy is like giving him what?",
  answers: ["Light Beer", "Salad", "Beans", "Humus"],
  correctAnswer: "Salad",
}, 

{
  question: "Monica and Rachel's apartment is an illegal sublet. Whose apartment is it really?",
  answers: ["Phoebe's mothers", "Rachel's Grandmother", "Monica's Grandmother", "Ron Turner"],
  correctAnswer: "Monica's Grandmother",
}, 

{
  question: "What was the name of the bald headed girl who Ross dumps for Rachel at the beach?",
  answers: ["Jasmine", "Gail", "Leslie", "Bonnie"],
  correctAnswer: "Bonnie",
}, 

{
  question: "How many cushions are there on the coffee house sofa?",
  answers: ["3", "1", "4", "5"],
  correctAnswer: "1",
}, 

{
  question: "What is the name of Joey's sister who punches Chandler?",
  answers: ["Cookie", "Candy", "Jenny", "Zoe"],
  correctAnswer: "Cookie",
}];


// vars for timer
var timer;
var intervalid;
var timerOn = false;
var timeOut = 0;
var timerDisplayText = $("#timer-display");

var gameOver ; 

// vars questions
var correctAnswers = 0;
var wrongAnswers = 0;
var answerBtn = false;
var endBtn = false;


function resetGame () {
  timerDisplayText.text(":30");
};

var game = {
    time: 30,

          // start function
          start: function () {
            // $("#quiz").show();
            // $("#Play").hide();
            timerOn = true;
            timerDisplayText.text(":60");
            timer = setInterval(game.count, 1000)
          },









};





// ready
$(document).ready(function () {
      

// start on play btn
$("#quizModal").on("click", function() {
        // $("#Play").hide();
        // $("#quiz").show();

      // display questions and answers



      },


      function play() {
        var audio = document.getElementById("audio");
        audio.play();
      }
      


      function run() {
      clearInterval(intervalId);

      },


    //  The decrement function.
      function decrement() {

    //  Decreases the number by one
    number--;

    //  shows the timer in html
    $("#timer").html("<h3>" + number + "</h3>");

    //when timer reaches zero the timer stops and alerts time is up  
    if (number === 0) {
      stop();
      ;
    }
  })
})