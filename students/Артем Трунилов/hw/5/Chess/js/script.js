
/* 
Задача 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. 
Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. 
Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
*/

function chess() {
    let board = document.createElement('div')
    board.className = 'blockChess'
    document.body.appendChild(board)

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {

            let boardChess = document.querySelector('.blockChess')
            let content = ''
            
            if (i == 0 || i == 9) {
                content = j > 0 && j < 9 ? 'ABCDEFGH'.charAt(j - 1) : null
                boardChess.innerHTML += `<div class = 'blockFigure'> ${content ? content : ''} </div>`
            } else if (j == 0 || j == 9) {
                content = 9 - i
                boardChess.innerHTML += `<div class='blockFigure'> ${content} </div>`
            } else if ((i + j) % 2)
                boardChess.innerHTML += `<div class='blackFigure'> ${content} </div>`
            else
                boardChess.innerHTML += `<div class='whiteFigure'> ${content} </div>`
        }
    }
}

chess()