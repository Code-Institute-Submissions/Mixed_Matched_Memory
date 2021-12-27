document.addEventListener("DOMContentLoaded", () => {

    //card options

    const cardArray = [{
        name: 'yoda-dog',
        img: 'assets/images/yoda-dog.png',
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

let cardsChosen = [];
let cardsChosenId = [];
createBoard();
//create  board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement("img");
        card.setAttribute('src', 'assets/images/card-color.png');//cardArray[i].img);
        card.setAttribute('data-id', i);
        card.setAttribute('id', 'img'+i);
        card.onclick = function() {flipCard(i); };
       grid.appendChild(card);
    }
}

//check for matches
function checkforMatch() {
       
    var cards = document.querySelectorAll("img");
    var OptionOne = cardArray[document.getElementById('img'+cardsChosenId[0]).getAttribute('data-id')].img;
    var OptionTwo = cardArray[document.getElementById('img'+cardsChosenId[1]).getAttribute('data-id')].img;

    if(OptionOne === OptionTwo){
        alert('A Match! Assign someone a Shot!');
    }

    else{
            alert('Not A Match! Take A Shot');
    }

    document.getElementById('img'+cardsChosenId[0]).setAttribute('src', 'assets/images/card-color.png');
    document.getElementById('img'+cardsChosenId[1]).setAttribute('src', 'assets/images/card-color.png');
    cardsChosenId = [];
    cardsChosen = [];
}

//flip the cards
function flipCard(cardId) {
   // var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    document.getElementById('img'+cardId).setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkforMatch, 500)

    }
}
//Reset the Game
//reset.addEventListener("click", resetGame);

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

   // createMemory();

});
