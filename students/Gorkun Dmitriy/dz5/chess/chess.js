// ДЗ №5

// вариант 1 - через циклы

function createChess() {
    let alpha = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] //алфавит с A до H
    let table = document.querySelector('.table1')
    
    // заполняем верхнюю строку заголовков
    let row = document.createElement('tr')
    table.appendChild(row)
    
    for (let k = 0; k <= 8; k++) {
        let th = document.createElement('th')
        row.appendChild(th)
        th.innerText = alpha[k]
    }
    
    // заполняем строки таблицы (первая ячейка - заголовок, остальные - пустые)
    
    for (let i = 1; i <= 8; i++) {
        let row = document.createElement('tr')
        let th = document.createElement('th')     
        row.appendChild(th)
        th.innerText = i
        table.appendChild(row)
        for (let j = 1; j <= 8; j++) {
            let cell = document.createElement('td')
            row.appendChild(cell)
        }
    }
}

createChess()

// вариант 2 - через метод массива

function createChess2() {
    table = document.querySelector('.table2')
    let arr = [
        ['',  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
        ['1',  '',  '',  '',  '',  '',  '',  '',  ''],
        ['2',  '',  '',  '',  '',  '',  '',  '',  ''],
        ['3',  '',  '',  '',  '',  '',  '',  '',  ''],
        ['4',  '',  '',  '',  '',  '',  '',  '',  ''],
        ['5',  '',  '',  '',  '',  '',  '',  '',  ''],
        ['6',  '',  '',  '',  '',  '',  '',  '',  ''],
        ['7',  '',  '',  '',  '',  '',  '',  '',  ''],
        ['8',  '',  '',  '',  '',  '',  '',  '',  '']
    ]
    arr.forEach (function(row) {
        rowTable = document.createElement('tr')
        table.appendChild(rowTable)
        row.forEach (function(cell) {
            cellTable = document.createElement('td')
            cellTable.innerText = cell
            rowTable.appendChild(cellTable)
        })
    })
}

createChess2()
