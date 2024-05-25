let others = document.querySelector('.otherPlayers');
let left = document.querySelector('.playerLeft');
let right = document.querySelector('.playerRight');
let current = document.querySelector('.currentPlayer');
let deckSpace = document.querySelector('.deck');
let selectedArea = document.querySelector('.selected');

deckSpace.addEventListener('click', (e) => {
    e.preventDefault();
    if (selectedCard) {
        discard.push(selectedCard);
        selectedCard = undefined;
        passTurn();
    }
})

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
        for (let i = 0; i < playerCards[0][0].length; i++) {
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