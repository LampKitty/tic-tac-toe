const cells = document.querySelectorAll('.gameboard>div');



const gameBoard = (() => {

    let playField =
        ['', '', '',
        '', '', '',
        '', '', '',];

    const populateArr = (cells, cell, sign) =>
        playField[Array.from(cells).indexOf(cell, 0)] = sign;

    const isWinner = (sign) => {
        if((playField[0] === sign & playField[1] === sign & playField[2] === sign)
        ||(playField[3] === sign & playField[4] === sign & playField[5] === sign)
        ||(playField[6] === sign & playField[7] === sign & playField[8] === sign)) {
            console.log('winner');
        }
        else if ((playField[0] === sign & playField[3] === sign & playField[6] === sign)
        ||(playField[1] === sign & playField[4] === sign & playField[7] === sign)
        ||(playField[2] === sign & playField[5] === sign & playField[8] === sign)) {
            console.log('winner');
        }
        else if ((playField[0] === sign & playField[4] === sign & playField[8] === sign)
        ||(playField[2] === sign & playField[4] === sign & playField[6] === sign)) {
            console.log('winner');
        }
    }

    return { populateArr, isWinner };
})();

const displayController = (() => {

    let sign = 'x';

    cells.forEach(cell => cell.addEventListener('click', function () {

        if (cell.lastChild != null) {
            return;
        }

        if(sign === '0'){
            let circle = document.createElement('img');
            circle.src = 'img/circle.png';
            circle.setAttribute('style', 'width: 100px; height: 100px;');
            gameBoard.populateArr(cells, cell, '0');
            cell.appendChild(circle);
            gameBoard.isWinner(sign);
            sign = 'x';
        }
        else if(sign === 'x'){
            let cross = document.createElement('img');
            cross.src = 'img/cross.png';
            cross.setAttribute('style', 'width: 100px; height: 100px;');
            gameBoard.populateArr(cells, cell, 'x');
            cell.appendChild(cross);
            gameBoard.isWinner(sign);
            sign = '0';
        }
        
    }));

    return {}
})();

const player = (name) => {
    
}

