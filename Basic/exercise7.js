let randomNum = Math.floor(Math.random() * 4) + 1;
let guess = prompt("Guess a number between 1 and 5:");
if (parseInt(guess) === randomNum) {
    alert("You guessed right!");
} else {
    alert("Wrong guess. The number was " + randomNum + ".");
}