class Card{
    constructor(suit,strVal,numVal){
        this.suit = suit;
        this.strVal = strVal;
        this.numVal = numVal;
    }
    showInfo(){
        console.log(this.strVal + " of " + this.suit);
    }
}

class Deck{
    constructor(){
        this.cards = [];
        this.suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
        this.sVal = ["King", "Queen", "Jack", "Ten", "Nine", "Eight", "Seven", "Six", "Five", "Four", "Three", "Two", "Ace"];
        for(var i=0; i<this.suits.length; i++){
            for(var j=0; j<this.sVal.length; j++){
                var card = new Card(this.suits[i], this.sVal[j], 13-j);
                this.cards.push(card);
            }
        }
    }
    shuffle(){
        var currentIndex = this.cards.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = this.cards[currentIndex];
            this.cards[currentIndex] = this.cards[randomIndex];
            this.cards[randomIndex] = temporaryValue;
        }
        return; 
    }
    reset(){
        this.cards = [];
        for(var i=0; i<this.suits.length; i++){
            for(var j=0; j<this.sVal.length; j++){
                var card = new Card(this.suits[i], this.sVal[j], 13-j);
                this.cards.push(card);
            }
        }
        return;
    }
    deal(){
        return this.cards.pop();
    }
}

class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
    }
    draw(deck){
        this.hand.push(deck.deal());
        return this;
    }
    discard(){
        this.hand.pop();
        return this;
    }
    playCard(){
        return this.hand.pop();
    }
}

const deck = new Deck();
const player1 = new Player("Jack Jocker");
const player2 = new Player("I´m BatMan");

console.log(deck.shuffle());
console.log(player2.draw(deck).draw(deck).draw(deck).draw(deck).draw(deck).hand);
console.log(player2.discard().hand);
console.log(player2.playCard());