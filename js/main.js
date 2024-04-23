// Add all your JS here

let tryingValue = 0;
let maximumAttempts = 9;
const minimum = 30;
const maximum = 69;
const attempted = document.getElementById('attempts');
let randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

const numGuess = document.getElementById('guess');
const submitBtn = document.getElementById('submit');
const outputed = document.getElementById('output');

submitBtn.addEventListener('click', function() {
    const userValue = Number(numGuess.value);
    tryingValue++;

    switch(true) {
        case tryingValue == maximumAttempts:
            attempted.textContent = ` 😪You have reached the maximum number of attempts ${tryingValue}. Game over! 🥴Try again`;
            submitBtn.disabled = true;
            break;

        case userValue < minimum || userValue > maximum:
            attempted.textContent = `😇 Please enter a number between ${minimum} and ${maximum} 🙏🏽`;
            break;

        case userValue === randomNumber:
            attempted.textContent = `You picked the right number, it is ${userValue}`;
            outputed.textContent = `You guessed the number in ${tryingValue} tries! Congratulations 👏!`;
            submitBtn.disabled = true;
            break;

        case userValue < randomNumber:
            attempted.textContent = `The number you picked is too low!`;
            break;

        case userValue > randomNumber:
            attempted.textContent = `The number you picked is too high!`;
            break;
    }
});
