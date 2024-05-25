let selectedCard

const passTurn = () => {
    //Animate rotation and resize of otherPlayers ()
    //Move current player to end of line
    let lastPlayer = playerCards.splice(playerCards.length - 1, 1);
    playerCards = lastPlayer.concat(playerCards);
    //Re-render player cards
// console.log({playerCards, lastPlayer});
    renderGame();
}

const turnUp = () => {
    //For each player: 
    playerCards.forEach((player, i) => {
        let playCards = player[0];
        let randSelect = Math.floor(Math.random() * playCards.length);
        let randSelect2
        do{
            randSelect2 = Math.floor(Math.random() * playCards.length);

        } while (randSelect === randSelect2)
        if (randSelect === randSelect2 - (playCards.length / 2)) randSelect2--;
        if (randSelect === randSelect2 + (playCards.length / 2)) randSelect2++;
        playCards[randSelect].hidden = false;
        playCards[randSelect2].hidden = false;
    })
    renderGame();
        //randomly select any of the player's cards.
        //Randomly select another, except that it can't be +-4 (half of the starting size)
        //If playing 12, pick a third, except that it can't be +-6 of either of the faceup cards
}

const drawDeck = () => {
    if (selectedCard) return;
    selectedCard = deck.splice(0, 1)[0];
    selectedCard.hidden = false;
    console.log('Drawing from deck', selectedCard)
    //Select the top card of the deck
    //Render 2nd-from-top deck
    //Animate it moving to the selected zone.
    //turn it faceup
    renderGame();
}
const drawDiscard = () => {
    if (selectedCard) return;
    selectedCard = discard.splice(discard.length - 1, 1)[0];
    console.log('Drawing from discard', selectedCard)
    setTimeout(() => {
        deckSpace.addEventListener('click', (e) => {
            e.preventDefault();
            if (selectedCard) {
                discard.push(selectedCard);
                selectedCard = undefined;
            }
        })
    }, 100);
        //Select top card of discard
        //Render 2nd-from-top discard
        //Animate it moving to the selected zone.
    renderGame();
}

const play = (cardId) => {
    if (!selectedCard) return;
    //consider making deck flash if !selectedCard
    let slot = playerCards[0][0].find((card) => {
        return card.idNum === cardId
    })
    discard.push(playerCards[0][0][slot]);
    playerCards[0][0][slot] = [selectedCard][0];
    playerCards[0][0][slot].hidden = false;
console.log({playerCards, discard, selectedCard, slot})
    // selectedCard = undefined;
    //Take card from Selected
    //if triggered selection is +- 4 of revealed card (+-6 in case of 12)
    passTurn();
}

const turnAllUp = () => {
    playerCards.forEach((player, i) => {
        let score = 0
        player[0].forEach((card) => {
            card.hidden = false;
            switch(card.value) {
                case 'A':
                    score += 1;
                    break;
                case 'J':
                    score += 10;
                    break;
                case 'Q':
                    score += 10;
                    break;
                case 'K':
                    break;
                case 'W':
                    val -= 3;
                    break;
                default:
                    score += card.value;
                }
        })
        playerCards[1][score] = score;

    })
}

turnUp();
console.log('gameplay.js')
