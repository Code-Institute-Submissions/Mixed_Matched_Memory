//Credit for helping me learn how to make the memory-game: Code with Ania Kubow, https://www.youtube.com/watch?v=tjyDOHzKN0w, Michelle3334 / freaky_memory on GitHub: https://github.com/Michelle3334


document.addEventListener("DOMContentLoaded", () => {

    //card options

    const cardArray = [{
        name: 'Bacardi',
        img: 'assets/images/Bacardi.jpg',
},
{
        name: 'Bacardi',
        img: 'assets/images/Bacardi.jpg',
},
{
        name: 'Bombay',
        img: 'assets/images/Bombay.jpg'
},
{
        name: 'Bombay',
        img: 'assets/images/Bombay.jpg'
},
{
        name: 'cocktail',
        img: 'assets/images/cocktail.jpg'
},
{
        name: 'cocktail',
        img: 'assets/images/cocktail.jpg'
},
{
        name: 'Corona',
        img: 'assets/images/Corona.jpg'
},
{
        name: 'Corona',
        img: 'assets/images/Corona.jpg'
},
{
        name: 'Jack',
        img: 'assets/images/Jack.jpg'
},
{
        name: 'Jack',
        img: 'assets/images/Jack.jpg'
},
{
        name: 'Wine',
        img: 'assets/images/Wine.jpg'
},
{
        name: 'Wine',
        img: 'assets/images/Wine.jpg'
},
];

//Sort the cards random
cardArray.sort(() => 0.5 - Math.random());

//Constants
const memoryGame = document.querySelector("#memory-game");
const reset = document.getElementById("reset");

let cardsChosen = [];
let cardsChosenId = [];
createBoard();

//create  board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement("img");
        card.setAttribute('src', 'assets/images/card-color.jpg');
        card.setAttribute("class", "game-card");
        card.setAttribute('data-id', i);
        card.setAttribute('id', 'img'+i);
        card.onclick = function() {flipCard(i); };
       grid.appendChild(card);
    }
}

//checkForMatch
function checkForMatch() {
        const cards = document.querySelectorAll("img");
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if (cardsChosen[0] === cardsChosen[1] && cardsChosenId[0] !== cardsChosenId[1]) {
            cards[optionOneId].removeEventListener("click", flipCard);
            cards[optionTwoId].removeEventListener("click", flipCard);
            cardsCorrect.push(cardsChosen);
            movesCounter();
        } else {
            cards[optionOneId].setAttribute("src", "assets/images/card-color.jpg");
            cards[optionTwoId].setAttribute("src", "assets/images/card-color.jpg");
            movesCounter();
        }

//flip the cards
function flipCard(cardId) {
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    document.getElementById('img'+cardId).setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkforMatch, 500)

    }
}
//Reset the Game
reset.addEventListener("click", resetGame);

function resetGame() {
    memoryGame.innerHTML = "";
    document.getElementById("win-message").innerHTML = "";
    cardArray.sort(() => 0.5 - Math.random());
    createMemory(memoryGame, cardArray);
    cardsCorrect = [];
    cardsChosen = [];
    cardsChosenId = [];
}


}
