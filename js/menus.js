let screens = document.querySelectorAll('.screen');
const startGame = () => {
    screens[0].classList.add('hidden');
    screens[1].classList.remove('hidden');
    newDeck();
    setupGame(playerList.childElementCount);
    turnUp();
}

const endGame = () => {
    screens[1].classList.add('hidden');
    screens[2].classList.remove('hidden');
    playerCards?.sort((a, b) => (a[1].score > b[1].score ? 1 : -1));
    playerCards.forEach((player) => {
        let scoreDisplay = document.createElement('p');
        scoreDisplay.innerHTML = player[1].name + ' ' + player[1].score;
        screens[2].appendChild(scoreDisplay);
    });
}

const switchToMenu = () => {
    screens[2].classList.add('hidden');
    screens[1].classList.remove('hidden');
}

const playerList = document.getElementById('playerList');
let playerId = 0;
const addNewPlayer = (name) => {
    let newPlayer = document.createElement('div');
    newPlayer.id = 'player' + playerId++;
    let nameInput = document.createElement('input');
    nameInput.classList = 'playerNameInput';
    nameInput.value = name;
    newPlayer.appendChild(nameInput);

    playerList.appendChild(newPlayer);
}

document.getElementById('addPlayerBtn').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    addNewPlayer('AnotherPlayer');
});

document.getElementById('gameStartBtn').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    startGame();
});
addNewPlayer('Player1');
addNewPlayer('Player2');
addNewPlayer('Player3');
addNewPlayer('Player4');
addNewPlayer('Player5');
addNewPlayer('Player6');
addNewPlayer('Player7');
addNewPlayer('Player8');