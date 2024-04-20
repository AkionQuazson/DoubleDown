let others = document.querySelector('.otherPlayers');
let left = document.querySelector('.playerLeft');
let right = document.querySelector('.playerRight');
let current = document.querySelector('.currentPlayer');
let deckSpace = document.querySelector('.deck');

console.log({deck, others, left, right, current, deckSpace});

deck[0].render(deckSpace);
deck[1].hidden = false;
deck[1].render(deckSpace);