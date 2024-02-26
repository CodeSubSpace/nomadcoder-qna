const input = document.querySelector(".input");
const guess = document.querySelector(".guess");
const btn = document.querySelector("button");
const result = document.querySelector(".result");
const resultLog = document.querySelector(".result__log");
const resultFooter = document.querySelector(".result__footer");

function clickController(event){
  event.preventDefault();
  const inputValue = parseInt(input.value);
  const guessValue = parseInt(guess.value);
  
  const randomNumber = Math.floor(Math.random()*(inputValue + 1));
  const logText = `You chose ${guessValue}, the machine chose: ${randomNumber}.`
  
  if (guessValue == randomNumber){
    resultText = 'You won!'
  }
    else {
      resultText = 'You Lost!'
    }

  resultLog.innerText = logText;
  resultFooter.innerText = resultText;
  result.classList.remove('none');
}


btn.addEventListener("click", clickController);