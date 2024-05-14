const passTurn = () => {
    //Animate rotation and resize of otherPlayers ()
    //Move current player to end of line
    //Re-render player cards
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
        if (randSelect === randSelect2 - (playCards.length / 2)) randSelect2++;
        if (randSelect === randSelect2 + (playCards.length / 2)) randSelect2--;
        playCards[randSelect].hidden = false;
        playCards[randSelect2].hidden = false;
    })
    renderGame();
        //randomly select any of the player's cards.
        //Randomly select another, except that it can't be +-4 (half of the starting size)
        //If playing 12, pick a third, except that it can't be +-6 of either of the faceup cards
}

const drawDeck = () => {
    //Select the top card of the deck
    //Render 2nd-from-top deck
    //Animate it moving to the selected zone.
    //turn it faceup
}
const drawDiscard = () => {
    //Select top card of discard
    //Render 2nd-from-top discard
    //Animate it moving to the selected zone.

}

const play = () => {
    //Take card from Selected
    //if triggered selection is +- 4 of revealed card (+-6 in case of 12)
}

const turnAllUp = () => {
    playerCards.forEach((player, i) => {
        player[0].forEach((card) => {
            card.hidden = false;
        })
    })
}

turnUp();
console.log('gameplay.js')