let isAlive = false
let firstCard;
let secondCard
let cards = []
let sum = 0
let hasBlackJack =false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl =document.querySelector('#sum-el');
let cardsEl =document.querySelector('#cards-el');
let player = {
    name: "Arnav",
    chips: 100
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = `${player.name}: $${player.chips}`

function renderGame() {
    sumEl.textContent = `Sum: ${sum}`
    cardsEl.textContent = `Cards: `
    for (let index = 0; index < cards.length; index++) {
        cardsEl.textContent += JSON.stringify(cards[index]) + " "
    }
    if (sum > 21){
        message = "You Lost!"
        isAlive=false
    }
    else if (sum === 21){
        message = "You won blackjack!";
        hasBlackJack=true
    }
    else{
        message = "Do you want to draw another card?";
    }
    messageEl.innerText = message
}

const newCard = () => {
    if (isAlive && !hasBlackJack){
    let newCard = randomCard()
    cards.push(newCard)
    sum += newCard
    renderGame()
    }
}

const startGame = () => {
    isAlive = true
    firstCard = randomCard()
    secondCard=randomCard()
    sum = firstCard+secondCard
    cards = [firstCard , secondCard]
    renderGame()
}

const randomCard = () => {
    let card = Math.floor(Math.random() * 13)
    console.log(card)
    if (card+1 == 1){
        return 11
    }
    else if (card+1 >10) {
        return 10
    }
    else{
        return card + 1
    }
}