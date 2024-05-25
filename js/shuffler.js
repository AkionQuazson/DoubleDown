class Card {
    constructor(value, suit, idNum, effect){
        this.value = value;
        this.suit = suit;
        this.effect = effect || null;
        this.hidden = true;
        this.idNum = idNum;
    }
    render(location){
        let displayCard = document.createElement('div');
        displayCard.id = `card${this.idNum}`
        displayCard.classList = 'card';
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
                play(this.idNum);
            })
        }
        else if (location.classList.contains('deck')) {
            displayCard.addEventListener('click', (e) => {
                e.preventDefault();
                if (this.hidden) {
                    drawDeck();
                }
                else {
                    drawDiscard();
                }
            })
        }
        location.append(displayCard)
    }
}

let deck = [];
let seqId = 0
for (let d = 0; d < 2; d++) {
    deck.push(new Card('W', '🃏'));
    deck.push(new Card('W', '🃏'));
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
        
        deck.push(new Card(val, '♠', seqId));
        seqId++;
        deck.push(new Card(val, '♥', seqId));
        seqId++;
        deck.push(new Card(val, '♣', seqId));
        seqId++;
        deck.push(new Card(val, '♦', seqId));
        seqId++;
    }                   
}

for (let i = 0; i < deck.length; i++) {
    let rand = Math.floor(Math.random() * deck.length);
    const randTarget = deck[rand];
    const iTarget = deck[i];
    deck[i] = randTarget;
    deck[rand] = iTarget;
}

