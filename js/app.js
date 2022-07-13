let gameDesc = document.querySelector("#game-desc");
let message = document.querySelector("#message");
let playerCards = document.querySelector("#player-cards");
let playerScore = document.querySelector("#player-score");
let total = document.querySelector("#total");
let newCardBtn = document.querySelector("#new-card-btn");
let newGameBtn = document.querySelector("#new-game-btn");
let cardOne = randomCard();
let cardTwo = randomCard();
let cards = [cardOne, cardTwo];
let totalScore = 0;

function randomCard() {
	let randomNumber = Math.floor(Math.random() * 11) + 1;
	if (randomNumber > 10) {
		return 10;
	} else if (randomNumber === 1) {
		return 11;
	} else {
		return randomNumber;
	}
}

function hideElement(element) {
	element.style.display = "none";
}

function showElement(element) {
	element.style.display = "block";
}

function newGame() {
	cards = [];
	totalScore = 0;
	cardOne = randomCard();
	cardTwo = randomCard();
	cards = [cardOne, cardTwo];
	updatePlayerCards();
	updateTotal();
	hideElement(gameDesc);
	hideElement(newGameBtn);
	showElement(newCardBtn);
}

function updatePlayerCards() {
	playerCards.textContent = `Cards: ${cards}`;
}

function updateTotal() {
	cards.reduce(function summarize(sum, number) {
		totalScore = sum + number;
		return totalScore;
	}, 0);

	total.textContent = `Total: ${totalScore}`;
}

function displayMessage() {
	if (totalScore > 21) {
		message.textContent = `You lost!`;
		hideElement(newCardBtn);
		showElement(newGameBtn);
	} else if (totalScore === 21) {
		message.textContent = `You got Blackjack, congrats!`;
		hideElement(newCardBtn);
		showElement(newGameBtn);
	} else {
		message.textContent = `You have ${totalScore} points, draw again?`;
	}
}

newGameBtn.addEventListener("click", () => {
	newGame();
	displayMessage();
});

newCardBtn.addEventListener("click", () => {
	cards.push(randomCard());
	updatePlayerCards();
	updateTotal();
	displayMessage();
});
