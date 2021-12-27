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
const grid = document.querySelector('.grid');
const reset = document.getElementById("reset");

let cardsChosen = [];
let cardsChosenId = [];
createBoard();

//create  board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement("img");
        card.setAttribute('src', 'assets/images/card-color.jpg');
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
            alert('Not A Match! Take A Shot!');
    }

    document.getElementById('img'+cardsChosenId[0]).setAttribute('src', 'assets/images/card-color.png');
    document.getElementById('img'+cardsChosenId[1]).setAttribute('src', 'assets/images/card-color.png');
    cardsChosenId = [];
    cardsChosen = [];
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
//reset.addEventListener("click", resetGame);

function resetGame() {
    memoryGame.innerHTML = "";
    document.getElementById("win-message").innerHTML = "";
    cardArray.sort(() => 0.5 - Math.random());
    createMemory(memoryGame, cardArray);
    cardsCorrect = [];
    cardsChosen = [];
    cardsChosenId = [];
}


});
