const computerScore = document.getElementById("score__computer");
const humanScore = document.getElementById("score__human");
const choicesRock = document.getElementById("choices__rock");
const choicesPaper = document.getElementById("choices__paper");
const choicesScissors = document.getElementById("choices__scissors");
const imgComputer = document.getElementById("imgs__computer");
const imgHuman = document.getElementById("imgs__human");

const getImgSrc = (choice) => {
  if (choice === "rock") return "./png/rock.png";
  if (choice === "paper") return "./png/paper.png";
  if (choice === "scissors") return "./png/scissors.png";
};

const getComputerChoice = () => {
  const random_number = Math.floor(Math.random() * 3); //Bettween 0 and 2
  const arr = ["rock", "paper", "scissors"];
  return arr[random_number];
};

const getWinnerAndIncrementScore = (humanChoice) => {
  const computerChoice = getComputerChoice();
  console.log(computerChoice);
  imgComputer.src = getImgSrc(computerChoice);

  if (humanChoice === computerChoice) return;
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  )
    humanScore.textContent = parseInt(humanScore.textContent) + 1;

  if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "rock")
  )
    computerScore.textContent = parseInt(computerScore.textContent) + 1;
};

choicesRock.addEventListener("click", (e) => {
  imgHuman.src = getImgSrc("rock");
  getWinnerAndIncrementScore("rock");
});

choicesPaper.addEventListener("click", (e) => {
  imgHuman.src = getImgSrc("paper");
  getWinnerAndIncrementScore("paper");
});

choicesScissors.addEventListener("click", (e) => {
  imgHuman.src = getImgSrc("scissors");
  getWinnerAndIncrementScore("paper");
});
