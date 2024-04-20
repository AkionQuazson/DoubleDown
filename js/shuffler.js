class Card {
    constructor(value, suit, effect){
        this.value = value;
        this.suit = suit;
        this.effect = effect || null;
        this.hidden = true;
    }
    render(location){
        let displayCard = document.createElement('div');
        displayCard.classList = 'card';
        if (this.hidden) {
            displayCard.classList += ' facedown'
        }
        else {
            displayCard.classList += ' faceup'
            displayCard.innerHTML = this.value + ' ' + this.suit;
        }
        location.append(displayCard)
    }
}

let deck = [];
for (let d = 0; d < 2; d++) {
    deck.push(new Card('W', 'joker'));
    deck.push(new Card('W', 'joker'));
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
        
        deck.push(new Card(val, 'spade'));
        deck.push(new Card(val, 'club'));
        deck.push(new Card(val, 'heart'));
        deck.push(new Card(val, 'diamond'));
    }                   
}

for (let i = 0; i < deck.length; i++) {
    let rand = Math.floor(Math.random() * deck.length);
    const randTarget = deck[rand];
    const iTarget = deck[i];
    deck[i] = randTarget;
    deck[rand] = iTarget;
}

