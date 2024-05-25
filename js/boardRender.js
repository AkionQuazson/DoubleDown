let others = document.querySelector('.otherPlayers');
let left = document.querySelector('.playerLeft');
let right = document.querySelector('.playerRight');
let current = document.querySelector('.currentPlayer');
let deckSpace = document.querySelector('.deck');
let selectedArea = document.querySelector('.selected');

console.log({deck, others, left, right, current, deckSpace});

let discard = [new Card('', '', 0)]
discard.push(deck.splice(0, 1)[0]);
discard[0].hidden = false;
discard[1].hidden = false;
let playerCards = [];
for (let p = 0; p < 8; p++) {
    playerCards.push([[], {score:0}]);
    for (let i = 0; i < 8; i++) {
        card = deck.splice(0, 1);
        playerCards[p][0].push(card[0]);
// console.log({playerCards, deck});
    }
}
if (playerCards.length > 3) {
    for (let p = 2; p < playerCards.length - 1; p++){
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
// console.log(playerCards[p][0], {target, p});
        target.innerHTML = '';
        for (let i = 0; i < playerCards.length; i++) {
            playerCards[p][0][i]?.render(target);
        }
    }
    selectedArea.innerHTML = '';
    if (selectedCard) {
        selectedCard.render(selectedArea);
    }
    
    deckSpace.innerHTML = '';
    deck[0].render(deckSpace);
    discard[discard.length - 1].render(deckSpace);
        
}