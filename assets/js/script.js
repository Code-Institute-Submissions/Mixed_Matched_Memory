document.addEventListener("DOMContentLoaded", () => {

    //card options

    const cardArray = [{
        name: 'yoda-dog',
        img: 'ass',
},
{
        name: 'yoda-dog',
        img: 'assets/images/yoda-dog.png',
},
{
        name: 'spider',
        img: 'assets/images/spider.png'
},
{
        name: 'spider',
        img: 'assets/images/spider.png'
},
{
        name: 'kitten',
        img: 'assets/images/kitten.png'
},
{
        name: 'kitten',
        img: 'assets/images/kitten.png'
},
{
        name: 'hamster',
        img: 'assets/images/hamster.png'
},
{
        name: 'hamster',
        img: 'assets/images/hamster.png'
},
{
        name: 'curlydog',
        img: 'assets/images/curlydog.png'
},
{
        name: 'curlydog',
        img: 'assets/images/curlydog.png'
},
{
        name: 'cat',
        img: 'assets/images/cat.png'
},
{
        name: 'cat',
        img: 'assets/images/cat.png'
},
];

//Sort the cards random
cardArray.sort(() => 0.5 - Math.random());

//Constants
const grid = document.querySelector('.grid');
const scoreDisplay = document.querySelector("#score");
const movesCount = document.querySelector("#moves");
const reset = document.getElementById("reset");

let cardsChosen = []
let cardsChosenId = []

//create  board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement("img")
        card.setAttribute('src', 'images/card-color.png')
        card.setAttribute('data-id', i)
       card.addEventListener ('click', flipcard)
       grid.appendChild(card)
    }
}

//check for matches
function checkforMatch() {
    var cards = document.querySelectorAll("img")
    const OptionOneId = cardsChosenId[0]
    const OptionTwoId = cardsChosenId[1]
}

//flip the cards
function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
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
    scoreDisplay.innerHTML = 0;
    cardsChosen = [];
    cardsChosenId = [];
    movesCount.innerHTML = 0;
    moves = 0;
}

//Count each move
function movesCounter() {
     movesCount.innerHTML++;
     moves++;
    }

    createMemory();

});
