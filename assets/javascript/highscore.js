const listEl = document.querySelector("scoreboard-list");
let leaders = [];
let currentScore = localStorage.getItem("score");

// const leaveScore = function () {
//   document.querySelector(".score-form").classList.remove("hidden");
//   const scoreBtn = document.querySelector("submit-score");
//   scoreBtn.addEventListener("submit", leaderBoardInput);
// };

const createEntry = function (highscoreObj) {
  const leaderBoardEl = document.createElement("li");
  leaderBoardEl.className = "leaderboard";
  leaderBoardEl.textContent = highscoreObj.name + " - " + highscoreObj.score;
  console.log(highscoreObj.name);
  console.log(highscoreObj.score);
  listEl.appendChild(leaderBoardEl);
};

const leaderBoardInput = function (event) {
  event.preventDefault();

  let currentScore = localStorage.getItem("score");
  const leaderBoardInput = document.querySelector(
    "input[name='leader-board-name']"
  ).value;

  if (!leaderBoardInput) {
    alert("You need to fill out your name or initials!");
  } else {
    alert("You need to complete the quiz!");
  }
  const highscoreObj = {
    name: leaderBoardInput,
    score: currentScore,
  };
  createEntry(highscoreObj);
};

// const loadScore = function () {
//   let currentScore = localStorage.getItem("score");
//   if (!currentScore) {
//     return false;
//   }
//   console.log("Found score!");
//   currentScore = JSON.parse(currentScore);
//   // createEntry();
// };

// const loadHighscore = function () {
//   let highscores = localStorage.getItem("highscore");
//   if (!highscores) {
//     return false;
//   }
//   console.log("Found highscore!");
//   highscores = JSON.parse(highscores);

//   for (let i = 0; i < highscores.length; i++) {
//     recordHighScore([i]);
//   }
// };

// loadScore();
