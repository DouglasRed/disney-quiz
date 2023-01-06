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
    question: "What is the highest grossing Star Wars movie as of 2023",
    answers: [
      { text: "The Force Awakens", correct: true },
      { text: "The Empire Strikes Back", correct: false },
      { text: "A New Hope", correct: false },
      { text: "The Last Jedi ", correct: false },
    ],
  },
  {
    question: "Where was East High in High School Musical located",
    answers: [
      { text: "Chicago, Illinois", correct: false },
      { text: "Albuquerque, New Mexico", correct: true },
      { text: "Miami, Florida", correct: false },
      { text: "Reno, Nevada", correct: false },
    ],
  },
  {
    question: "Which Character is not a Disney character",
    answers: [
      { text: "Spider-man", correct: false },
      { text: "Hawkeye", correct: false },
      { text: "Batman", correct: true },
      { text: "Black Widow", correct: false },
    ],
  },
  {
    question:
      "In Encanto, which character could heal others through their homecooked meals?",
    answers: [
      { text: "Pepa Madrigal", correct: false },
      { text: "Bruno Madrigal", correct: false },
      { text: "Mirabel Madrigal", correct: false },
      { text: "Julieta Madrigal", correct: true },
    ],
  },
  {
    question: "In \"That's So Raven\" what was Raven's secret ability?",
    answers: [
      { text: "She had telekenisis", correct: false },
      { text: "She was part mermaid", correct: false },
      { text: "She was a math genius", correct: false },
      { text: "She could see the future", correct: true },
    ],
  },
  {
    question:
      "In Kim Possible, who was her behind the scenes technological partner?",
    answers: [
      { text: "Wade", correct: true },
      { text: "Dr Drakken", correct: false },
      { text: "Ron", correct: false },
      { text: "Rufus", correct: false },
    ],
  },
  {
    question: "In Hannah Montana, who had a photographic memory ",
    answers: [
      { text: "Miley Cyrus", correct: false },
      { text: "Rico Suave", correct: true },
      { text: "Jake Ryan", correct: false },
      { text: "Lilly Truscott", correct: false },
    ],
  },
  {
    question: "What were the name of the bullies in the Proud Family",
    answers: [
      { text: "The Nasty Sisters", correct: false },
      { text: "The Sticky Sisters", correct: false },
      { text: "The Ugly Sisters", correct: false },
      { text: "The Gross Sisters", correct: true },
    ],
  },
  {
    question:
      "What is the name of the bellboy in The Suite Life of Zack and Cody ",
    answers: [
      {
        text: "Esteban Montoya Julio Ricardo de la Rosa Ramírez",
        correct: false,
      },
      {
        text: "Esteban Ricardo Julio Montoya de la Rosa Rodriguez",
        correct: false,
      },
      {
        text: "Esteban Julio Ricardo Montoya de la Rosa Ramírez",
        correct: true,
      },
      {
        text: "Esteban Ricardo Montoya Julio de la Rosa Rodriguez",
        correct: false,
      },
    ],
  },
];

const startQuiz = function () {
  setInterval(startClock, 1000);
  document.querySelector(".timer").classList.remove("hidden");
  document.querySelector(".start-quiz").className = "hidden";
  mainTextEl.className = "hidden";
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  setNextQuestion();
};
const startClock = function () {
  if (timer > 0) {
    timer--;
    console.log(timer);
    time.innerHTML = timer;
  } else {
    timer = 0;
    finalResults();
  }
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
    timer -= 10;
    time.innerHTML = timer;
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
  clearInterval();
  window.location.assign("./scoreboard.html");
};

startQuizEl.addEventListener("click", startQuiz);
