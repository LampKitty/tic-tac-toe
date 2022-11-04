const cells = document.querySelectorAll('.gameboard>div');



const gameBoard = (() => {

let playField = 
['','','',
'','','',
'','','',]



return {playField,};
})();

const displayController = (() => {

    cells.forEach(cell => cell.addEventListener('click', function() {
   
        if(cell.lastChild != null) {
            return;
        }

        let cross = document.createElement('img');
        cross.setAttribute('style','width: 100px; height: 100px;')
        cross.src = 'img/cross.png';
        cell.appendChild(cross);

        gameBoard.playField[Array.from(cells).indexOf(cell, 0)] = 'x';
        
    }));    

    return {}
})();

const player = (name) => {
    const placeMark = () => {};
    return {
        placeMark,
    }
}

