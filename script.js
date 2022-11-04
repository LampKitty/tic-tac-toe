const cells = document.querySelectorAll('.gameboard>div');



const gameBoard = (() => {

    let playField =
        ['', '', '',
        '', '', '',
        '', '', '',];

    const populateArr = (cells, cell, sign) =>
        playField[Array.from(cells).indexOf(cell, 0)] = sign;


    return { playField, populateArr, isWinner };
})();

const displayController = (() => {

    let lastSign = '';

    cells.forEach(cell => cell.addEventListener('click', function () {

        if (cell.lastChild != null) {
            return;
        }

        if(lastSign === 'x'){
            let circle = document.createElement('img');
            circle.src = 'img/circle.png';
            circle.setAttribute('style', 'width: 100px; height: 100px;');
            gameBoard.populateArr(cells, cell, '0');
            cell.appendChild(circle);
            lastSign = '0';
        }
        else if(lastSign === '0' || lastSign === ''){
            let cross = document.createElement('img');
            cross.src = 'img/cross.png';
            cross.setAttribute('style', 'width: 100px; height: 100px;');
            gameBoard.populateArr(cells, cell, 'x');
            cell.appendChild(cross);
            lastSign = 'x';
        }
        

        console.log(gameBoard.playField);
    }));

    return {}
})();

const player = (name) => {
    const placeMark = () => { };
    return {
        placeMark,
    }
}

