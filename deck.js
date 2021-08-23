
//ALL the code for the deck of cards
//Contains all the deck functionality
//encapsulate (a full deck of cards, half of decks, a hand, a pile of cards, a discard) inside of this deck class
//a global consant variable -- it's essentially a static variable
const SUITS = ["♠", "♣", "♥", "♦"]
const VALUES = [
  "A",
  "K",
  "Q",
  "J",
  "10",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2"
]

//create an unique card with each suit and each value for const SUIT and const VALUES
export default class Deck {
  constructor(cards = freshDeck()) {
    this.cards = cards
  }

  get numberOfCards() {
    return this.cards.length
  }

  pop() {
    return this.cards.shift()
  }

  push(card) {
    this.cards.push(card)
  }

  //this code is creating a random shuffle every time
  shuffle() {
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1))
      const oldValue = this.cards[newIndex]
      this.cards[newIndex] = this.cards[i]
      this.cards[i] = oldValue
    }
  }
}

//defining each card
class Card {
  constructor(suit, value) {
    this.suit = suit
    this.value = value
  }
//ternary operator (conditional) to determines if card not club or spade return black, if not, returns red
//data attribute
  get color() {
    return this.suit === "♣" || this.suit === "♠" ? "black" : "red"
  }

  getHTML() {
    const cardDiv = document.createElement("div")
    cardDiv.innerText = this.suit
    cardDiv.classList.add("card", this.color)
    cardDiv.dataset.value = `${this.value} ${this.suit}`
    return cardDiv
  }
}

//map functionality creates array of arrays but flatMap turns into ONE array of 52 cards
function freshDeck() {
  return SUITS.flatMap(suit => {
    return VALUES.map(value => {
      return new Card(suit, value)
    })
  })
}

