

function checkAnswer() {
    let correctAnswer = '4';
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";

    }
}


const submitButton = document.getElementById('submit-answer');

// Add a click event listener to the button
submitButton.addEventListener('click', checkAnswer);


