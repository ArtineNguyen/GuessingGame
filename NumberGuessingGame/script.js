
/*    let finalMessage = "";

    for (let i = 0; i < numOfCoin.length; i++) {
        if (numOfCoin[i] >= 1) {
          finalMessage += `<li>${unit[i]} * ${numOfCoin[i]}</li>`;
        }
      }
      document.getElementById("resultarea").innerHTML = finalMessage;
*/

//Random number between 1 t0 100

/*let random = Math.floor(Math.random() * (100 - 1 + 1);
console.log("random number", random);
let history = [];

function guess() {
  const guessNumber = document.getElementById("guessNumber").value;
  console.log(guessNumber);
  if (history.includes(guessNumber)) {
    console.log("You already say that Number");
    return;
  }
  history.pushState(guessNumber);

  if (numberAvailable === 0) {
    document.getElementById('prompt').innerHTML = `Game Over!`
    return 0;
  }

if (guessNumber < random) {
    document.getElementById('prompt').innerHTML = 'Too Low!')
  }*/

/*if (guessNumber > random) {
  document.getElementById('guess').innerHTML = 'Too High!'
  document.getElementById('guess').classList.add('alert')
  document.getElementById('prompt').innerHTML = `<span style='color: red; font-size: 35px'>${guess}</span> is high`
}*/
/*
  if (guessNumber === random) {
    document.getElementById('prompt').style.color = 'black'
    document.getElementById('prompt').innerHTML = `Your guess of <span style='color: green'>${guess}</span> is correct!`
    document.getElementById('prompt').innerHTML = `You <span style='color: green; font-size: 35px'>won</span> with a guess of <span style='color: green; font-size: 35px'>${guess}</span> is low`
    document.getElementById('guess').classList.add('alert-success')
    document.getElementById('guess').classList.remove('alert')
    document.getElementById('resetGameButton').style.visibility = 'hidden'
    document.getElementById('guess').innerHTML = `You <span style='color: green'>won</span>!`
    document.getElementById('numberGuesse').innerHTML = 5
    numberGueses = 5
    document.getElementById('guess').value = ''
    random = Math.floor(Math.random() * 100) + 1
    return
  }

  document.getElementById('guess').value = ''
  numberGueses -= 1
  document.getElementById('numberGueses').innerHTML = numberGueses

  if (numberGueses === 0) {
    document.getElementById('prmopt').innerHTML = `Game Over!`
    return
  }

function resetGame() {
  random = Math.floor(Math.random() * 100) + 1
  document.getElementById('resetGameButton').style.visibility = 'hidden'
  document.getElementById('guess').style.visibility = 'hidden'
  document.getElementById('numberOfRemainingGuesses').innerHTML = 5
  document.getElementById('prompt').innerHTML = `New Game`
  numberOfAvailableGuesses = 5
}*/
let random = Math.floor(Math.random() * (100 - 1 + 1));
let count = 4;
let history =[];
console.log(random);
function guess() {

  if (count == 0) {
    document.getElementById('numberGueses').innerHTML = 'Game Over';
    return;
  }
  count--;
  console.log("turn", count)
  document.getElementById("numberGueses").innerHTML = count + 1;
  const guessNumber = document.getElementById("guessNumber").value;
  document.getElementById("guessNumber").value = "";
  if (random == guessNumber) {
    document.getElementById("prompt").innerHTML = "corect";
  }
  if (random > guessNumber) {
    document.getElementById("prompt").innerHTML = "Too High";
  }
  if (random < guessNumber) {
    document.getElementById("prompt").innerHTML = "Too Low";
  }
}

function resetGame() {
  count = 4;
  document.getElementById("numberGueses").innerHTML = count + 1;
  document.getElementById('prompt').innerHTML = `New Game`
  numberOfAvailableGuesses = 5
}