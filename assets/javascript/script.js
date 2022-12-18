const startQuizEl = document.querySelector(".start-quiz");
const promptBoxEl = document.querySelector(".prompt-box");
const promptTextEl = document.querySelector(".prompt");
const mainTextEl = document.querySelector(".main-text");
const buttonContainerEl = document.querySelector(".button-container");
let time = document.querySelector(".time");
// let timer = JSON.parse(time).innerHTML;
let timer = JSON.parse(document.querySelector(".time").innerHTML);
let shuffledQuestions;
let currentQuestionIndex;
let score = 0;
const questions = [
  {
    question: "This is Question 1",
    answers: [
      { text: "Answer choice 1", correct: true },
      { text: "tfyrfjjyyhjy", correct: false },
      { text: "Ayjyyyjgfhhjnice 3", correct: false },
      { text: "Cdfhjmmjukjk,j", correct: false },
    ],
  },
  {
    question: "This is Question 2",
    answers: [
      { text: "Aghfjhjhjfj", correct: false },
      { text: "fhfgkuyttdg", correct: true },
      { text: "323546667587", correct: false },
      { text: "087sfgjhgfjf87", correct: false },
    ],
  },
  {
    question: "This is Question 3",
    answers: [
      { text: "07894jh54kl5", correct: false },
      { text: "3544uktyuk", correct: false },
      { text: "4tythgfdsghkj", correct: true },
      { text: "Happy Birthday", correct: false },
    ],
  },
];

const startQuiz = function () {
  setTimeout(finalResults, 20000);
  setInterval(startClock, 1000);
  document.querySelector(".timer").classList.remove("hidden");
  document.querySelector(".start-quiz").className = "hidden";
  mainTextEl.className = "hidden";
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  setNextQuestion();
};
const startClock = function () {
  timer--;
  console.log(timer);
  time.innerHTML = timer;
};

const setNextQuestion = function () {
  resetState();
  displayQuestion(shuffledQuestions[currentQuestionIndex]);
};

const displayQuestion = function (newQuestion) {
  if (currentQuestionIndex === questions.length) {
    saveScore();
    finalResults();
  }
  promptTextEl.textContent = newQuestion.question;
  newQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.className = "btn answer-choice";
    buttonContainerEl.appendChild(button);

    if (answer.correct) {
      button.setAttribute("correct", true, "quiz-btn", true);
    } else {
      button.setAttribute("incorrect", true), "quiz-btn", true;
    }

    button.addEventListener("click", selectAnswer);
  });
  currentQuestionIndex++;
  saveScore();
};

const selectAnswer = function (event) {
  let target = event.target;
  console.log(target);
  console.log(target.hasAttribute("correct"));
  if (target.hasAttribute("correct")) {
    score += 20;
    console.log("Correct answer! +20 points");
    console.log(score);
    setNextQuestion();
  } else {
    score -= 15;
    if (score < 0) {
      score = 0;
    }
    console.log(score);
    console.log("Incorrect answer! -15 points");
    setNextQuestion();
  }
};

const resetState = function () {
  promptTextEl.innerHTML = "";
  buttonContainerEl.innerHTML = "";
};

const saveScore = function () {
  localStorage.setItem("score", JSON.stringify(score));
};

const finalResults = function () {
  window.location.assign("./scoreboard.html");
  window.alert("Submit your score");
};

startQuizEl.addEventListener("click", startQuiz);
