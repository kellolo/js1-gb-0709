'use strict';

// первое
(function drawChessField (size = 40, color1 = 'white', color2 = 'black') {
    let table = document.createElement(`table`);
    let letters = ['','A','B','C','D','E','F','G','H',''];

    for (let i = 0, k = 9; i < letters.length; i++, k--) {
        let newRow = table.insertRow(i);
        for (let j = 0; j < letters.length; j++) {
            let newCell = newRow.insertCell(j);
            newCell.setAttribute('width', `${size}px`);
            newCell.setAttribute('height', `${size}px`);

            switch(i) {
                case 0:
                case 9:
                    newCell.innerText = letters [j];
                    break;
                default:
                    if ( j === 0 || j === 9 ) {
                        newCell.innerHTML = k;
                    } else {
                        ( j % 2 == 0 && i % 2 == 0 || j % 2 == 1 && i % 2 == 1) ?
                        newCell.setAttribute('style', `background-color: ${color1}`) : newCell.setAttribute('style', `background-color: ${color2}`)
                    }
                    break;
            }
        }
    }
    document.querySelector('section').appendChild(table);
})();

// второе

(function drawChessField (size = 40) {
    let table = document.createElement(`table`);
    const letters = ['','A','B','C','D','E','F','G','H',''];
    const blacksNearChessmenСells = ['8', 'Л(ч)', 'К(ч)', 'С(ч)', 'Ф(ч)', 'Кр(ч)', 'С(ч)', 'К(ч)', 'Л(ч)', '8'];
    const blacksFartherChessmenCells = ['7', 'п(ч)', 'п(ч)', 'п(ч)', 'п(ч)', 'п(ч)', 'п(ч)', 'п(ч)', 'п(ч)', '7'];
    const whitesNearChessmenCells = ['1', 'Л(б)', 'К(б)', 'С(б)', 'Ф(б)', 'Кр(б)', 'С(б)', 'К(б)', 'Л(б)', '1'];
    const whitesFartherChessmenCells = ['2', 'п(б)', 'п(б)', 'п(б)', 'п(б)', 'п(б)', 'п(б)', 'п(б)', 'п(б)', '2'];

    for (let i = 0, k = 9; i < letters.length; i++, k--) {
        let newRow = table.insertRow(i);
        for (let j = 0; j < letters.length; j++) {
            let newCell = newRow.insertCell(j);
            newCell.setAttribute('width', `${size}px`);
            newCell.setAttribute('height', `${size}px`);

            switch(i) {
                case 0:
                case 9:
                    newCell.innerText = letters [j];
                    newCell.classList.add('legend-cell');
                    break;
                case 1:
                    newCell.innerHTML = blacksNearChessmenСells [j];
                    (j == 0 || j == 9) ? newCell.classList.add('legend-cell') : (j % 2 == 1) ? newCell.classList.add('white-cell') : newCell.classList.add('black-cell');
                    break;
                case 2:
                    newCell.innerHTML = blacksFartherChessmenCells [j];
                    (j == 0 || j == 9) ? newCell.classList.add('legend-cell') : (j % 2 == 0) ? newCell.classList.add('white-cell') : newCell.classList.add('black-cell');
                    break;
                case 7:
                    newCell.innerHTML = whitesFartherChessmenCells [j];
                    (j == 0 || j == 9) ? newCell.classList.add('legend-cell') : (j % 2 == 1) ? newCell.classList.add('white-cell') : newCell.classList.add('black-cell');
                    break;
                case 8:
                    newCell.innerHTML = whitesNearChessmenCells [j];
                    (j == 0 || j == 9) ? newCell.classList.add('legend-cell') : (j % 2 == 0) ? newCell.classList.add('white-cell') : newCell.classList.add('black-cell');
                    break;
                default:
                    if ( j === 0 || j === 9 ) {
                        newCell.innerHTML = k;
                        newCell.classList.add('legend-cell');
                    } else {
                        ( j % 2 == 0 && i % 2 == 0 || j % 2 == 1 && i % 2 == 1) ?
                        newCell.classList.add('white-cell') : newCell.classList.add('black-cell')
                    }
                    break;
            }
        }
    }
    document.querySelectorAll('section')[1].appendChild(table);
})();

// третье

(function drawChessField (size = 40) {
    let table = document.createElement(`table`);
    const letters = ['','A','B','C','D','E','F','G','H',''];
    const blacksNearChessmenСells = ['8','&#9820;','&#9822;','&#9821;','&#9819;','&#9818;','&#9821;','&#9822;','&#9820;','8'];
    const blacksFartherChessmenCells = ['7','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','7'];
    const whitesNearChessmenCells = ['1','&#9814;','&#9816;','&#9815;','&#9813;','&#9812;','&#9815;','&#9816;','&#9814;','1'];
    const whitesFartherChessmenCells = ['2','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','2'];

    for (let i = 0, k = 9; i < letters.length; i++, k--) {
        let newRow = table.insertRow(i);
        for (let j = 0; j < letters.length; j++) {
            let newCell = newRow.insertCell(j);
            newCell.setAttribute('width', `${size}px`);
            newCell.setAttribute('height', `${size}px`);

            switch(i) {
                case 0:
                case 9:
                    newCell.innerText = letters [j];
                    newCell.classList.add('legend-cell');
                    break;
                case 1:
                    newCell.innerHTML = blacksNearChessmenСells [j];
                    (j == 0 || j == 9) ? newCell.classList.add('legend-cell') : (j % 2 == 1) ? newCell.classList.add('white-cell') : newCell.classList.add('black-cell');
                    break;
                case 2:
                    newCell.innerHTML = blacksFartherChessmenCells [j];
                    (j == 0 || j == 9) ? newCell.classList.add('legend-cell') : (j % 2 == 0) ? newCell.classList.add('white-cell') : newCell.classList.add('black-cell');
                    break;
                case 7:
                    newCell.innerHTML = whitesFartherChessmenCells [j];
                    (j == 0 || j == 9) ? newCell.classList.add('legend-cell') : (j % 2 == 1) ? newCell.classList.add('white-cell') : newCell.classList.add('black-cell');
                    break;
                case 8:
                    newCell.innerHTML = whitesNearChessmenCells [j];
                    (j == 0 || j == 9) ? newCell.classList.add('legend-cell') : (j % 2 == 0) ? newCell.classList.add('white-cell') : newCell.classList.add('black-cell');
                    break;
                default:
                    if ( j === 0 || j === 9 ) {
                        newCell.innerHTML = k;
                        newCell.classList.add('legend-cell');
                    } else {
                        ( j % 2 == 0 && i % 2 == 0 || j % 2 == 1 && i % 2 == 1) ?
                        newCell.classList.add('white-cell') : newCell.classList.add('black-cell')
                    }
                    break;
            }
        }
    }
    document.querySelectorAll('section')[2].appendChild(table);
})();

