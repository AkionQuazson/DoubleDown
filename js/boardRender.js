let others = document.querySelector('.otherPlayers');
let left = document.querySelector('.playerLeft');
let right = document.querySelector('.playerRight');
let current = document.querySelector('.currentPlayer');
let deckSpace = document.querySelector('.deck');

console.log({deck, others, left, right, current, deckSpace});

let playerCards = [];
for (let p = 0; p < 8; p++) {
    playerCards.push([[], []]);
    for (let i = 0; i < 8; i++) {
        card = deck.splice(0, 1);
        playerCards[p][0].push(card[0]);
// console.log({playerCards, deck});
    }
}
if (playerCards.length > 3) {
    for (let p = 3; p < playerCards.length; p++){
        let newPlayer = document.createElement('div')
        newPlayer.classList = 'otherPlayer other'+ p;
        others.append(newPlayer);
    }
}
let renderGame = () => {
    let target;
    for (let p = 0; p < playerCards.length; p++) {
        switch(p) {
            case 0:
                target = current;
                break;
            case (playerCards.length - 1):
                target = right;
                break;
            case 1:
                target = left;
                break;
            default:
                target = document.querySelector('.other' + p);
            }
        for (let i = 0; i < playerCards.length; i++) {
            playerCards[p][0][i]?.render(target);
        }
    }
    
    
    deck[0].render(deckSpace);
    deck[1].hidden = false;
    deck[1].render(deckSpace);
        
}