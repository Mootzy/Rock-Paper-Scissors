let userScore = 0;//set variable for userScore
let computerScore = 0;//set variable for computerscore
const userScore_span = document.getElementById("user-score");//finds the ID "user-score" in HTML 
const compScore_span = document.getElementById("comp-score");//find the ID "comp-score" in HTML
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");//finds the rock div "r" in HTML
const paper_div = document.getElementById("p");//finds the paper div "p" in HTML
const scissors_div = document.getElementById("s")//finds the paper div 'd' in html



function getComputerChoice() { //function for computer choice
  const choices = ["r", "p", "s"];//declare variable "choices" to array [r, p, s]
  const randomNumber = Math.floor(Math.random() * 3);//declare variable 'randomNumber' = random integer between 0-3(math.random()*3)mathfloor() sets the number to round down.
  return choices[randomNumber];// returns var 'choices' as a random integer assigned from the array(arrays fall in the format of 0,1,2)
}
function convertToWord(letter) {
  if (letter === "r") return "Rock ";
  if (letter === "p") return "Paper ";
  return "Scissors ";
}

function win(userChoice, computerChoice) {//function for winning, parameters are userChoice and computerChoice
  userScore++;//user score +1 increments with win
  userScore_span.innerHTML = userScore//finds the userScore span from html
  compScore_span.innerHTML = computerScore;//finds the compScore span from Html
  const smallUserWord = "user".fontsize(3).sub()//declare variable smallUserWord as the string 'user'converts user to small font and puts it below the other words
  const smallCompWord = "comp".fontsize(3).sub()//declare variable smallCompWord to 'comp' change fontsize to 3 and subscript it.
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beat  ${convertToWord(computerChoice)}${smallCompWord} You win!....`//using `` to indicate the mixing and combinig of strings without +, using inbuilt function {converToWord} && changes the <p> in HTML 
  document.getElementById(userChoice).classList.add('green-glow');//adds the class of "green-glow" to whatever the user clicks as a choice.
  setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow')}, 300)//sets a timeout function to remove the green-glow class form userChoice div after 1000ms or 1sec
}
function lose(userChoice, computerChoice) {
  computerScore++;//adds 1 to computerScore each time the function lose is run with the parameters of userChoice and computerChoice
  userScore_span.innerHTML = userScore// assigns the userScore in HTML to the variable userScore in javaS
  compScore_span.innerHTML = computerScore;// assigns the compScore in html to the variable computerScore in javaS
  const smallUserWord = "user".fontsize(3).sub()//assigns the constant variable 'smallUserWord' to the string user' sets it's font to 3, and makes it a subscript
  const smallCompWord = "comp".fontsize(3).sub()//assigns the constant variable 'smallCompWord' to to the string 'comp' with a fontize of 3, and makes it a subscript
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}lost to  ${convertToWord(computerChoice)}${smallCompWord} You Lost!`//converts the result p form HTML converts the userChoice, submits the smallUserWord adds the string 'lost to' converts the computerChoice to word, adds the smallCompWord variable, and concatanates the string 'you lost!' to the end of the string.
  document.getElementById(userChoice).classList.add('red-glow');//when the function lose() is run add the class 'red-glow' to the userChoice 
  setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')}, 300);//sets a setTimeout function to the userChoice element, removes the previously mentioned red-glow class after 1000ms
}
function draw(userChoice, computerChoice) {
  
  const smallUserWord = "user".fontsize(3).sub()
  const smallCompWord = "comp".fontsize(3).sub()
  result_p.innerHTML = "It's a draw...."
  document.getElementById(userChoice).classList.add('grey-glow');
  setTimeout(function() {document.getElementById(userChoice).classList.remove('grey-glow')}, 300);
}
console.log(getComputerChoice());

function game(userChoice) {//function for game parameter = userChoice
  const computerChoice = getComputerChoice();//declare variable computerChoice = getComputerChoice()
  switch (userChoice + computerChoice) {//switch statment, replaces 'if' in the case of 'rs', 'pr', 'sp' perform win() with the pre-set parameters "userChoice, computerChoice"
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);//perform win() function with the pre-set parameters "userChoice, computerChoice"
      break;//VITAL TO THE SWITCH STATMENT, TELLS TO STOP
    case "rp"://in the case of user'r' comp 'p' comp wins
    case "ps"://in the case of user'p' comp 's' comp wins
    case "sr"://in the case of user's' comp 'r' comp wins
      lose(userChoice, computerChoice);//perform function lose() with the perameters of userChoice, and computerChoice
      break;
    case "rr"://in the case of user'r' comp 'r' tie
    case "pp"://in the case of user'p' comp 'p' tie
    case "ss"://in the case of user's' comp 's' tie
      draw(userChoice, computerChoice);//perform the function draw()
      break;
  }
}

function main() {//main function allows for input based on click.
  rock_div.addEventListener("click", function() {//adds an even to clicking on the rock_div, begins function game() with parameter 'r'
    game("r");//begins function game() with parameter 'r'
  });
  paper_div.addEventListener("click", function() {//adds an event to clicking on the paper_div
    game("p");//begins function game() with parameter p
  });
  scissors_div.addEventListener("click", function() {//adds event to clicking on the scissors.div
    game("s");//starts the game with the parameter 's'
  });
}

main();//runs the main function allowing for input based on claicks. 
