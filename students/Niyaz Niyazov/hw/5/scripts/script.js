
let letters = ["","A", "B", "C", "D", "E", "F", "G", "I"]
let main_div = document.querySelector("#table_area")

generateChessTable = (rowsCount, colsCount) => {
    
    let table = document.querySelector("#table_area")
    
    for (let row = rowsCount; row > 0; row--) {
        let tr = document.createElement('tr')
        tr.classList.add('row')
        table.appendChild(tr)
        tr.innerHTML = row

        for (let col = 0; col < colsCount; col++) {
            let td = document.createElement('td')
            td.classList.add('cell')
            tr.appendChild(td)
            
            if ((col%2!=0 && row%2==0) || (col%2==0 && row%2!=0)) {
                td.style.backgroundColor = "black"
            }

        }
    }
    let tr = document.createElement('tr')
    table.appendChild(tr)
    let td = document.createElement('td')

    for (let col = 0; col <= colsCount; col++) {
        let td = document.createElement('td')
        td.classList.add('letters')
        tr.appendChild(td)
        td.innerHTML = letters[col]
    }
}


generateChessTable(8, 8)
    