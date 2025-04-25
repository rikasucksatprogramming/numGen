// Initializes all required elements 
const userInput = document.getElementById("myInput");
const submitBtn = document.getElementById("mySubmit"); // POV I spent 10 minutes trying to figure out why shit wasn't working just for me to have spelled it wrong...
const output = document.getElementById("myOutput");

const min = 10;
const max = 50;
let randomNum;

// Generates random number (Works)
randomNum = Math.floor(Math.random() * (max - min)) + min;
console.log(randomNum);


// Checks and displays info wheather info is correct or incorrect
submitBtn.onclick = function(){
    if(userInput.value == randomNum){
        
        output.textContent = "Correct Guess";
    } else if(userInput.value > randomNum) {
        output.textContent = "Too high! Try again sucker!";
    }
    else if(userInput.value < randomNum) {
        output.textContent = "To low! Try again sucker!"
    }
}


