var name = prompt("ENTER YOUR INITIALS");

//getting all requiered elements
var intructionsBox = document.querySelector("#instructionsBox");
var boxInt = document.querySelector("#boxInt");
var startBtn = document.querySelector("#startBtn");
var timerEl = document.querySelector("#timer");
var questions = document.querySelector("#questons");
var choice = document.querySelector("a");
var choice = document.querySelector("b");
var choice = document.querySelector("c");
var continueBtn = document.querySelector("#continueBtn");
var questionnaire = document.querySelector("#questionnaire");
var question = document.querySelector("#question");
var answerA = document.querySelector("#answerA");
var answerB = document.querySelector("#answerB");
var answerC = document.querySelector("#answerC");
var scores = document.querySelector("#scores");
var scoreBoard = document.querySelector("#scoreBoard");
var displayDoneBtn = document.querySelector("#displayDoneBtn");
var finishBtn = document.querySelector("#finishBtn");
var displayStartOver = document.querySelector("#displayStartOver");
var startOver = document.querySelector("#startOver");
//STARTING POINTS
var indexQuestions = 0;
var rightAnswers = 0;
var wrongAnswers = 0;
// Creating an array of objects for questions, answers, and options.
var questions = [
  {
    question: "what is html used for?",
    answerIndex: 0,
    choices: [
      " a) Html is used to create electronic documents that are displayed on the World Wide Web.",
      " b) Html is hypertext.",
      " c) Html is microsoft word.",
    ],
  },
  {
    question: "what does Css stand for?",
    answerIndex: 1,
    choices: [
      " a) Css stands for collins safe and sorry.",
      " b) Css stands for Cascading Style Sheets.",
      " c) Css saves a lot of work.",
    ],
  },
  {
    question: "what is the fuction of Javascript?",
    answerIndex: 2,
    choices: [
      " a) Javascript adds styling.",
      " b) Javascript is the body of a Website.",
      " c) Javascript adds dynamic and intereactive elements to websites.",
    ],
  },
];

//START BUTTON DISPLAYING TIMER AND QUESTIONS
function start() {
  boxInt.style.display = "none";
  startBtn.classList.add("hide");
  setTime();
  displayQuestion();
}

//SCORE BOARD FUNCTION
function scoreboard() {
  if (localStorage.getItem("highScores") === null) {
    localStorage.setItem("highScores", " ");
  }
  //save current score
  var storage = localStorage.getItem("highScores");
  storage = storage + "," + rightAnswers;
  localStorage.setItem("highScores", storage);
  var array = storage.split(",");
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
    var listTag = document.createElement("li");
    listTag.textContent = name + "   " + "your score is" + "   " + array[i];
    scores.appendChild(listTag);
  }
  scoreBoard.style.display = "inline";
  displayDoneBtn.style.display = "block";
  displayStartOver.style.display = "block";
}
// SETTING THE TIMER
var seconds = 10;
function setTime() {
  var interval = setInterval(function () {
    seconds--;
    timerEl.textContent = "Seconds: " + seconds;
    if (seconds === 0) {
      clearInterval(interval);
      // var questionnare to hide
      questionnaire.style.display = "none";
      // score board
      alert("Game Over!");
      scoreboard();
    }
  }, 1000);
}

//DISPLAY QUESTIONS FROM ARRAY
function displayQuestion() {
  questionnaire.style.display = "block";
  question.textContent = questions[indexQuestions].question;
  answerA.textContent = questions[indexQuestions].choices[0];
  answerB.textContent = questions[indexQuestions].choices[1];
  answerC.textContent = questions[indexQuestions].choices[2];
}

//CHOICES
//SHOW NEXT QUESTION + EVENT LISTENERS
//RIGHT/WRONG ANSWERS

answerA.addEventListener("click", function () {
  if (0 === questions[indexQuestions].answerIndex) {
    alert("Correct");
    rightAnswers++;
  } else {
    alert("wrong");
    wrongAnswers++;
  }
  indexQuestions++;
  displayQuestion();
});

answerB.addEventListener("click", function () {
  if (1 === questions[indexQuestions].answerIndex) {
    alert("Correct");
    rightAnswers++;
  } else {
    alert("wrong");
    wrongAnswers++;
  }
  indexQuestions++;
  displayQuestion();
});

answerC.addEventListener("click", function () {
  if (2 === questions[indexQuestions].answerIndex) {
    alert("Correct");
    rightAnswers++;
  } else {
    alert("wrong");
    wrongAnswers++;
  }
  indexQuestions++;
  displayQuestion();
});
function refreshPage() {
  window.location.reload();
}

//EVENT LISTENERS FOR START BUTTON AND FINISH BUTTON

startOver.addEventListener("click", function () {
  refreshPage();
});

finishBtn.addEventListener("click", function () {
  window.localStorage.clear();
  refreshPage();
});

document.getElementById("startBtn").addEventListener("click", start);
