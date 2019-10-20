let userScore = 0;//set variable for userScore
let computerScore = 0;//set variable for computerscore
const userScore_span = document.getElementById("user-score");//finds the ID "user-score" in HTML 
const compScore_span = document.getElementById("comp-score");//find the ID "comp-score" in HTML
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");//finds the rock div "r" in HTML
const paper_div = document.getElementById("p");//finds the paper div "p" in HTML
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
function convertToWord(letter) {
  if (letter === "r") return "Rock ";
  if (letter === "p") return "Paper ";
  return "Scissors ";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore
  compScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub()
  const smallCompWord = "comp".fontsize(3).sub()
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beat  ${convertToWord(computerChoice)}${smallCompWord} You win!....`
  document.getElementById(userChoice).classList.add('green-glow')
}
function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore
  compScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub()
  const smallCompWord = "comp".fontsize(3).sub()
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} lost to  ${convertToWord(computerChoice)}${smallCompWord} You Lost!`
}
function draw(userChoice, computerChoice) {
  
  const smallUserWord = "user".fontsize(3).sub()
  const smallCompWord = "comp".fontsize(3).sub()
  result_p.innerHTML = "It's a draw...."
}
console.log(getComputerChoice());

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function() {
    game("r");
  });
  paper_div.addEventListener("click", function() {
    game("p");
  });
  scissors_div.addEventListener("click", function() {
    game("s");
  });
}

main();
