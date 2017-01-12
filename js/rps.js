
var userInput = document.getElementById("rps");

function compare(choice1,choice2) {
  if (choice1 === choice2) {
        return "The result is a tie!";
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "User wins! Computer choose Scissors.";
        }
        else {
            return "Computer Wins! It choose Paper";
        }
    }     
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
        return "User Wins! Computer choose Rock.";
        }
        else {
            return "Computer Wins! It choose Scissors.";
        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "paper") {
            return "User Wins! Computer choose Paper.";
        }
        else {
            return "Computer Wins! It choose Rock.";
        }
    }
}

userInput.addEventListener("change", function(){
computerChoice = Math.random();
  

if (computerChoice < 0.33) {
    computerChoice = "rock";
}
else if (computerChoice < 0.66) {
    computerChoice = "paper";
} 
else {
    computerChoice = "scissors";
}
 
var output = compare(userInput.value,computerChoice);
  
 var result = document.getElementById("output");
 result.innerHTML = output;
  

});
