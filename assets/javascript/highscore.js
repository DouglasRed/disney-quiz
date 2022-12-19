const listEl = document.querySelector("#scoreboard-list");
const scoreBtn = document.querySelector("#submit-score");
const formEl = document.querySelector("#score-form");
let leaders = [];
let currentScore = localStorage.getItem("score");

if (!currentScore) {
  document.querySelector("#score-form").className = "hidden";
}

const createEntry = function (highscoreObj) {
  const leaderBoardEl = document.createElement("li");
  leaderBoardEl.className = "leaderboard";
  leaderBoardEl.textContent = highscoreObj.name + " - " + highscoreObj.score;
  console.log(highscoreObj.name);
  console.log(highscoreObj.score);
  listEl.appendChild(leaderBoardEl);
  leaders.push(highscoreObj);
};

const resetScore = function () {
  let score = 0;
  localStorage.setItem("score", JSON.stringify(score));
  currentScore = 0;
  console.log(currentScore, score);
  formEl.className = "hidden";
};
// might have to move the event.prevent
const leaderBoardSubmit = function (event) {
  event.preventDefault();
  console.log("form submitted");
  let currentScore = localStorage.getItem("score");
  const leaderBoardInput = document.querySelector(
    "input[name='leader-board-name']"
  ).value;

  if (!leaderBoardInput) {
    alert("You need to fill out your name or initials!");
  } else if (!currentScore || currentScore === 0) {
    alert("You need to complete the quiz!");
  } else {
    const highscoreObj = {
      name: leaderBoardInput,
      score: currentScore,
    };
    saveLeaderboard(leaders);
    createEntry(highscoreObj);

    saveLeaderboard(highscoreObj);
  }
};

const saveLeaderboard = function () {
  localStorage.setItem("leaderboard", JSON.stringify(leaders));
  resetScore();
};

const loadLeaderboard = function () {
  let savedLeaderboard = localStorage.getItem("leaderboard");
  console.log(savedLeaderboard);
  if (!savedLeaderboard) {
    return false;
  }
  console.log("saved leaderboard found");
  savedLeaderboard = JSON.parse(savedLeaderboard);

  for (let i = 0; i < savedLeaderboard.length; i++) {
    createEntry(savedLeaderboard[i]);
  }
};

loadLeaderboard();
formEl.addEventListener("submit", leaderBoardSubmit);
