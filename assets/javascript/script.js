const startQuizEl = document.querySelector(".start-quiz");
const promptBoxEl = document.querySelector(".prompt-box");
const promptTextEl = document.querySelector(".prompt");
const mainTextEl = document.querySelector(".main-text");
let shuffledQuestions;
let currentQuestionIndex;

const questions = [
  {
    question: "This is Question 1",
    answers: [
      { text: "Answer choice 1", correct: true },
      { text: "Answer choice 2", correct: false },
      { text: "Answer choice 3", correct: false },
      { text: "Answer choice 4", correct: false },
    ],
  },
  {
    question: "This is Question 2",
    answers: [
      { text: "Answer choice 1", correct: false },
      { text: "Answer choice 2", correct: true },
      { text: "Answer choice 3", correct: false },
      { text: "Answer choice 4", correct: false },
    ],
  },
  {
    question: "This is Question 3",
    answers: [
      { text: "Answer choice 1", correct: false },
      { text: "Answer choice 2", correct: false },
      { text: "Answer choice 3", correct: true },
      { text: "Answer choice 4", correct: false },
    ],
  },
];

const startQuiz = function () {
  document.querySelector(".start-quiz").className = "hidden";
  mainTextEl.className = "hidden";
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  console.log(shuffledQuestions);
  setNextQuestion();
};

const setNextQuestion = function () {
  displayQuestion(shuffledQuestions[currentQuestionIndex]);
};

const displayQuestion = function (newQuestion) {
  let question = questions[currentQuestionIndex];
  promptTextEl.textContent = newQuestion.question;
  newQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.className = "btn answer-choice";
    console.log(button);
    promptBoxEl.appendChild(button);

    if (answer.correct) {
      button.setAttribute("correct", true);
    } else {
      button.setAttribute("incorrect", true);
    }

    button.addEventListener("click", selectAnswer);
  });
  console.log(newQuestion, question);
};

const selectAnswer = function (event) {
  let target = event.target;
  console.log(target);
  console.log(target.hasAttribute("correct"));
};

startQuizEl.addEventListener("click", startQuiz);
