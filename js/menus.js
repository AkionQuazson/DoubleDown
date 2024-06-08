let screens = document.querySelectorAll('.screen');
const startGame = () => {
    if (playerList.childElementCount < 2) { 
        alert('Must have 2 or more players.');
        return;
    }
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

    let switchButton = document.createElement('button');
    switchButton.innerText = 'View Board';
    switchButton.addEventListener('click', (event) => {
        event.preventDefault();
        viewPlayOrScore();
    });
    screens[2].appendChild(switchButton);
    switchButton.innerText = 'View Scores';
    screens[1].appendChild(switchButton);
    console.log('Appended switchButtons');
}

const viewPlayOrScore = () => {
    screens[2].classList.toggle('hidden');
    screens[1].classList.toggle('hidden');
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
    
    let removePlayerButton = document.createElement('button');
    removePlayerButton.innerText = 'X';
    removePlayerButton.classList = 'removeButton';
    removePlayerButton.addEventListener('click', (event) => {
        event.preventDefault();
        event.target.parentElement.remove();
    })
    newPlayer.appendChild(removePlayerButton);

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
addNewPlayer('Player0');
addNewPlayer('Player1');
