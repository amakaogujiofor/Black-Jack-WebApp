let firstCard = getRandomCard();
let secondCard = getRandomCard();
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let numbers = [firstCard, secondCard]; //ordered list of items

// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
cardsEl = document.querySelector("#cards-el");

//Get random cards
function getRandomCard() {
  return Math.floor(Math.random() * 11) + 1;
}

function startGame() {
  renderGame();
}

function renderGame() {
  sumEl.innerText = "Sum:" + sum; //sum of cards drawn

  // For loop - Array
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < numbers.length; i++) {
    cardsEl.textContent += numbers[i] + " ";
  }

  //   Logic of the Game
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
  console.log("Drawing a new card from the deck!");
  let card = getRandomCard();
  sum += card;
  numbers.push(card);
  console.log(numbers);
  renderGame();
}
