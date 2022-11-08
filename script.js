const cells = document.querySelectorAll('.gameboard>div');
const renameButtons = document.querySelectorAll('.rename_button');
const winner = document.querySelector('.winner');
const restartButton = document.querySelector('.restart_button');

const Player = (name, sign, displayElement) => {
    return { name, sign, displayElement };
}

let player1 = Player('Player 1', 'x');
let player2 = Player('Player 2', '0');

const gameBoard = (() => {

    let playField =
        ['', '', '',
            '', '', '',
            '', '', '',];


    const populateArr = (cells, cell, sign) =>
        playField[Array.from(cells).indexOf(cell, 0)] = sign;

    const isWinner = (sign) => {
        if ((playField[0] === sign & playField[1] === sign & playField[2] === sign)
            || (playField[3] === sign & playField[4] === sign & playField[5] === sign)
            || (playField[6] === sign & playField[7] === sign & playField[8] === sign)) {
            if (sign === player1.sign) {
                winner.innerHTML = player1.displayElement.innerHTML + ' won!';
                winner.classList.remove('hidden');
            } else if (sign === player2.sign) {
                winner.innerHTML = player2.displayElement.innerHTML + ' won!';
                winner.classList.remove('hidden');
            }
        }
        else if
            ((playField[0] === sign & playField[3] === sign & playField[6] === sign)
            || (playField[1] === sign & playField[4] === sign & playField[7] === sign)
            || (playField[2] === sign & playField[5] === sign & playField[8] === sign)) {
            if (sign === player1.sign) {
                winner.innerHTML = player1.displayElement.innerHTML + ' won!';
                winner.classList.remove('hidden');
            } else if (sign === player2.sign) {
                winner.innerHTML = player2.displayElement.innerHTML + ' won!';
                winner.classList.remove('hidden');
            }
        }
        else if
            ((playField[0] === sign & playField[4] === sign & playField[8] === sign)
            || (playField[2] === sign & playField[4] === sign & playField[6] === sign)) {
            if (sign === player1.sign) {
                winner.innerHTML = player1.displayElement.innerHTML + ' won!';
                winner.classList.remove('hidden');
            } else if (sign === player2.sign) {
                winner.innerHTML = player2.displayElement.innerHTML + ' won!';
                winner.classList.remove('hidden');
            }
        }
    }

    restartButton.addEventListener('click', function () {
        cells.forEach(cell => cell.innerHTML = '');
        displayController.setSign();
        winner.innerHTML = '';
        for (i in playField) {
            playField[i] = '';
        }
    });

    return { populateArr, isWinner };
})();

const displayController = (() => {

    let sign = 'x';

    const setSign = () => sign = 'x';

    cells.forEach(cell => cell.addEventListener('click', function () {

        if (cell.lastChild != null) {
            return;
        }

        if (sign === '0') {
            let circle = document.createElement('img');
            circle.src = 'img/circle.png';
            circle.setAttribute('style', 'width: 100px; height: 100px;');
            gameBoard.populateArr(cells, cell, '0');
            cell.appendChild(circle);
            gameBoard.isWinner(sign);
            sign = 'x';
        }
        else if (sign === 'x') {
            let cross = document.createElement('img');
            cross.src = 'img/cross.png';
            cross.setAttribute('style', 'width: 100px; height: 100px;');
            gameBoard.populateArr(cells, cell, 'x');
            cell.appendChild(cross);
            gameBoard.isWinner(sign);
            sign = '0';
        }

    }));

    renameButtons.forEach(renameButton =>
        renameButton.addEventListener('click', function () {
            renameButton.previousElementSibling.classList.add('hidden');
            renameButton.parentElement.firstElementChild.classList.add('visible');
        }
        ));

    document.addEventListener('click', function (event) {
        const renameInputs = document.querySelectorAll('.rename');
        renameInputs.forEach(renameInput => {
            // reference player elements for later use
            if (renameInput.nextElementSibling.innerHTML === 'Player 1') {
                player1.displayElement = renameInput.nextElementSibling;
            } else if (renameInput.nextElementSibling.innerHTML === 'Player 2') {
                player2.displayElement = renameInput.nextElementSibling;
            }
            if (!renameInput.contains(event.target)) {
                renameInput.classList.remove('visible');
                renameInput.nextElementSibling.innerHTML = renameInput.value;
                renameInput.nextElementSibling.classList.remove('hidden');
            }
        })
    }, true);

    return { setSign }
})();




