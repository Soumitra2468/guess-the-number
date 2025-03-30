let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let previousGuesses = [];

const submit = document.getElementById("submit");
const guess = document.getElementById("guess");
const result = document.getElementById("result");
const playAgain = document.getElementById("play-again");

submit.addEventListener("click", function (event) {
    event.preventDefault();

    let guessValue = Number(guess.value);

    if (isNaN(guessValue) || guessValue < 1 || guessValue > 100) {
        alert("⚠️ Please enter a valid number between 1 and 100.");
        return;
    }

    attempts++;
    previousGuesses.push(guessValue);
    result.style.display = "block";

    if (guessValue === randomNumber) {
        result.innerHTML = `🎉 Congratulations! You guessed the correct number in <strong>${attempts}</strong> attempts!<br>
        🏆 Previous guesses: <strong>${previousGuesses.join(", ")}</strong>`;
        result.style.color = "green";
        playAgain.style.display = "block";
        submit.disabled = true;
    } else if (guessValue < randomNumber) {
        result.innerHTML = `📉 Too low! Try again. <br>Attempts: <strong>${attempts}</strong><br>
        🔢 Previous guesses: <strong>${previousGuesses.join(", ")}</strong>`;
        result.style.color = "yellow";
    } else {
        result.innerHTML = `📈 Too high! Try again. <br>Attempts: <strong>${attempts}</strong><br>
        🔢 Previous guesses: <strong>${previousGuesses.join(", ")}</strong>`;
        result.style.color = "yellow";
    }
});

playAgain.addEventListener("click", function () {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    previousGuesses = [];
    result.innerHTML = "";
    result.style.display = "none";
    result.style.color = "";
    guess.value = "";
    playAgain.style.display = "none";
    submit.disabled = false;
});
