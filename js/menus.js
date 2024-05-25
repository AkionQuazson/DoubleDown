let screens = document.querySelectorAll('.screen');
const startGame = () => {
    screens[0].classList.add('hidden');
    screens[1].classList.remove('hidden');
    newDeck();
    setupGame(8);
    turnUp();
}

const endGame = () => {
    screens[1].classList.add('hidden');
    screens[2].classList.remove('hidden');
    playerCards?.sort((a, b) => (a[1].score > b[1].score ? 1 : -1))
    playerCards.forEach((player) => {
console.log({player, playerCards})
        let scoreDisplay = document.createElement('div');
        scoreDisplay.innerHTML = 'PlayerName' + ' ' + player[1].score;
        screens[2].appendChild(scoreDisplay);
    })
}

const switchToMenu = () => {
    screens[2].classList.add('hidden');
    screens[1].classList.remove('hidden');
}

document.getElementById('gameStartBtn').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    startGame();
})