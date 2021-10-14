let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let numbers = []; //ordered list of items
let clearEl = document.getElementById("clear");

let player = {
  name: "Guest",
  chips: 2000,
  currency: "\u20A6",
};

let playerEl = document.querySelector("#player-el");
playerEl.textContent = player.name + ": " + player.currency + player.chips;

// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
cardsEl = document.querySelector("#cards-el");

//Get random cards
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  numbers = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  // For loop - Array
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < numbers.length; i++) {
    cardsEl.textContent += numbers[i] + " ";
  }

  //   Logic of the Game
  sumEl.innerText = "Sum:" + sum; //sum of cards drawn
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
    isAlive = true;
  } else if (sum === 21) {
    message = "Congrats,you've got Black Jack";
    hasBlackJack = true;
  } else {
    message = "Oops!! You're out of the game ";
    isAlive = false;
  }
  messageEl.innerText = message;
}

// New Card Setup:
function newGame() {
  //cCondition to start New Game:
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    numbers.push(card);
    console.log(numbers);
    renderGame();
  }
}

function clearGame() {
  if (isAlive === false) {
    // clearEl.innerText = "Ready to Play again?";
    cardsEl.textContent = "Cards: ";
    sumEl.innerText = "Sum:";
    messageEl.innerText = "Ready to Play Again?";
  }
}
