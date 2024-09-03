let guessInput = document.getElementById(`guessInput`);
let guessBtn = document.getElementById(`guessBtn`);
let guessOutput = document.getElementById(`guessOutput`);
let scoreBtn = document.getElementById(`scoreBtn`);
let highScoreBtn = document.getElementById(`highScoreBtn`);
let resetBtn = document.getElementById(`resetBtn`);
let againBtn = document.getElementById(`againBtn`);


let randomNumber = Math.trunc((Math.random() * 50) +1);

guessBtn.onclick = function() {
    switch(true) {
        case scoreBtn.textContent < 1:
            guessOutput.textContent = `OOPS! YOU LOST THE GAME`;
        break;  
  
        case guessInput.value < 1:
            guessOutput.textContent =`ENTER A VALUE FROM THE NUMBER RANGE`;
        break;

        case guessInput.value > 50:
            guessOutput.textContent =`ENTER A VALUE FROM THE NUMBER RANGE`;
        break;

        case guessInput.value == randomNumber:
            guessOutput.textContent = `YAYY!! YOU GUESSED RIGHT`;
        break;

        case guessInput.value > randomNumber:
            guessOutput.textContent = `NUMBER TOO HIGH`;
            scoreBtn.textContent = Number(scoreBtn.textContent) - 1;
        break;

        case guessInput.value < randomNumber:
            guessOutput.textContent = `NUMBER TOO LOW`;
            scoreBtn.textContent = Number(scoreBtn.textContent) - 1;
        break;  
    }

    if (guessInput.value == randomNumber && scoreBtn.textContent > highScoreBtn.textContent ) {
        highScoreBtn.textContent = scoreBtn.textContent;
    } else {
        highScoreBtn.textContent = highScoreBtn.textContent
    }
}

againBtn.onclick = function() {
    scoreBtn.textContent = 20;
    randomNumber = Math.trunc((Math.random() * 50) +1);
}

resetBtn.onclick = function() {
    mainScore = 20;
    scoreBtn.textContent = 20;
    highScoreBtn.textContent = 0;
    guessInput.value = "";
    guessOutput.textContent = `START GUESSING...`;
}

