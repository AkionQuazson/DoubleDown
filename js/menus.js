let screens = document.querySelectorAll('.screen');
<<<<<<< HEAD
let players = [];
const startGame = (playerNames) => {
=======
const startGame = () => {
    if (playerList.childElementCount < 2) { 
        alert('Must have 2 or more players.');
        return;
    }
>>>>>>> 183157f4133da45569d962a4f700c8eb1710ad4e
    screens[0].classList.add('hidden');
    screens[1].classList.remove('hidden');
    newDeck();
    players = playerNames;
    setupGame();
    turnUp();
}
let scoreDisplay = document.getElementById("scores");
const endGame = () => {
    screens[1].classList.add('hidden');
    screens[2].classList.remove('hidden');
    scoreDisplay.innerHTML = '';
    playerCards?.sort((a, b) => (a[1].score > b[1].score ? 1 : -1));
    playerCards.forEach((player) => {
        let playerScore = document.createElement('p');
        playerScore.innerHTML = player[1].name + ' ' + player[1].score;
        scoreDisplay.appendChild(playerScore);
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

const randomPlayerName = () => {
    const randomNumber = Math.floor(Math.random() * names.length);
    return names[randomNumber];
}

const playerList = document.getElementById('playerList');
let playerId = 0;
const addNewPlayer = (name) => {
    let newPlayer = document.createElement('div');
    let playerTagId = 'player' + playerId++;
    newPlayer.id = playerTagId;

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

    let removeButton = document.createElement('button');
    removeButton.innerHTML = 'X'
    removeButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (playerList.childElementCount <= 2) {
            alert("It's not much of a game with less than 2 people.")
            return;
        }
        let removedPlayer = document.getElementById(playerTagId);
        playerList.removeChild(removedPlayer);
    })
    newPlayer.appendChild(removeButton);

    playerList.appendChild(newPlayer);
}

document.getElementById('addPlayerBtn').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (playerList.childElementCount >= 8){
        alert("UI is designed for a maximum of 8 players.");
        return;
    }
    addNewPlayer(randomPlayerName());
});

document.getElementById('gameStartBtn').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    let currentPlayers = document.querySelectorAll('.playerNameInput');
    currentPlayers = [... currentPlayers];
    let playerNames = currentPlayers.map((nameInput) => nameInput.value);
    startGame(playerNames);
});
<<<<<<< HEAD

document.getElementById('restartBtn').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    screens[2].classList.add('hidden');
    screens[0].classList.remove('hidden');
})

const rulesModal = document.getElementById('rulesModal');
const closeRulesModal = document.getElementById('closeRulesModal');

document.getElementById('rulesBtnMenu').addEventListener('click', () => {
    rulesModal.classList.remove('hidden');
});

document.getElementById('rulesBtnPlay').addEventListener('click', () => {
    rulesModal.classList.remove('hidden');
});

closeRulesModal.addEventListener('click', () => {
    rulesModal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
    if (e.target === rulesModal) {
        rulesModal.classList.add('hidden');
    }
});

addNewPlayer(randomPlayerName());
addNewPlayer(randomPlayerName());
addNewPlayer(randomPlayerName());
addNewPlayer(randomPlayerName());
=======
addNewPlayer('Player0');
addNewPlayer('Player1');
>>>>>>> 183157f4133da45569d962a4f700c8eb1710ad4e
