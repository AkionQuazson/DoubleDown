class Card {
    constructor(value, suit, idNum, effect){
        this.value = value || 0;
        this.suit = suit || '';
        this.effect = effect || '';
        this.hidden = true;
        this.idNum = idNum || -1;
    }
    render(location){
        let displayCard = document.createElement('div');
        displayCard.id = `card${this.idNum}`
        displayCard.classList = 'card';
        if (this.idNum === -1) {
            displayCard.classList += ' nonexistent'
            this.hidden = false;
        }
        else {
            if (this.hidden) {
                displayCard.classList += ' facedown'
            }
            else {
                displayCard.classList += ' faceup'
                displayCard.innerHTML = this.value + ' ' + this.suit;
            }
            if (location.classList.contains('currentPlayer')) {
                displayCard.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    play(this.idNum);
                })
            }
            else if (location.classList.contains('deck')) {
                displayCard.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (this.hidden) {
                        drawDeck();
                    }
                    else {
                        drawDiscard();
                    }
                })
            }
        }
        location.append(displayCard)
    }
}

let deck;
const newDeck = () => {
    deck = [];
    let seqId = 5;
    for (let d = 0; d < 2; d++) {
    deck.push(new Card('W', '🃏', seqId++, 'Worth -3 points'));
    deck.push(new Card('W', '🃏', seqId++, 'Worth -3 points'));
console.log({deck})
    for (let i = 1; i<=13; i++) {
        let val = i;
        switch(val) {
            case 1:
                val = 'A';
                break;
            case 11:
                val = 'J';
                break;
            case 12:
                val = 'Q';
                break;
            case 13:
                val = 'K';
            }
                
            deck.push(new Card(val, '♠', seqId++));
            deck.push(new Card(val, '♥', seqId++));
            deck.push(new Card(val, '♣', seqId++));
            deck.push(new Card(val, '♦', seqId++));
        }                   
    }
    shuffle();
}
const shuffle = () => {
    for (let i = 0; i < deck.length; i++) {
        let rand = Math.floor(Math.random() * deck.length);
        const randTarget = deck[rand];
        const iTarget = deck[i];
        deck[i] = randTarget;
        deck[rand] = iTarget;
    }
}

let discard
let playerCards
let setupGame = () => {
    console.log("setupGame: players: ",players)
    let playerNumber = players.length
    discard = [new Card()]
    discard.push(deck.splice(0, 1)[0]);
    discard[0].hidden = false;
    discard[1].hidden = false;
    playerCards = [];
    for (let p = 0; p < playerNumber; p++) {
        let name = playerList.children[p].children[0].value;
        playerCards.push([[], {score:0, name}]);
        for (let i = 0; i < 8; i++) {
            card = deck.splice(0, 1);
            playerCards[p][0].push(card[0]);
    // console.log({playerCards, deck});
        }
    }
    others.innerHTML = '';
    if (playerCards.length > 3) {
        for (let p = 2; p < playerCards.length - 1; p++){
            let newPlayer = document.createElement('div')
            newPlayer.classList = 'otherPlayer other'+ p;
            others.append(newPlayer);
        }
    }
}