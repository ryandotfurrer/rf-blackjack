let playerCards = document.querySelector("#player-cards");
let playerScore = document.querySelector("#player-score");
let newCardBtn = document.querySelector("#new-card-btn");
let newGameBtn = document.querySelector("#new-game-btn");
let cardOne = randomCard();
let cardTwo = randomCard();
let cards = [cardOne, cardTwo];

function randomCard() {
	return Math.floor(Math.random() * 11) + 1;
}

newGameBtn.addEventListener("click", () => {
	playerCards.textContent = `Cards: ${cards}`;
});

newCardBtn.addEventListener("click", () => {
	cards.push(randomCard());
	playerCards.textContent = `Cards: ${cards}`;
});

// function getTotalScore() {
// 	for (i = 0; i <= cards.length; i++) {
// 		let score = cards[i];
// 		return score;
// 	}
// }
