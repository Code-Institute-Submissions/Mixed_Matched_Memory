document.addEventListener('DOMContentLoaded', () => {

    //card options

const cardArray = [
{
 name: 'yoda-dog',
 img: 'assets/images/yoda-dog.png'
},
{
    name: 'yoda-dog',
    img: 'assets/images/yoda-dog.png'
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
]

const grid = document.querySelector('.grid')

//create your board
function createBoard() {
    for (let i = 0, i < cardArray.length; i++){
        var card = document.createElement('img')
        card.setAttribute('src', 'images/card-color.png')
        card.setAttribute('data-id', i)
       // card.addEventListener ('click', flipcard)
       grid.appendChild(card)
    }
}
})