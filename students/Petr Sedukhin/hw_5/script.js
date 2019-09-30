const styles = [
    'table {width: 640px; height: 640px; border-spacing: 0px; margin: 50px auto; border: 1px solid black;}',
    '.desc td {position: relative;}',
    '.desc tr:nth-child(odd) td:nth-child(odd) {background:brown;}',
    '.desc tr:nth-child(even) td:nth-child(even) {background: brown;}',
    '.num {position: absolute; margin: -5px -25px;}',
    '.let {position: absolute; margin: auto; margin-left: 40%; margin-top: -70px;}',
    '.fig {background-size: 450px 155px; background-image: url(shs.png); height: 77px; width: 77px; position: absolute; top: 0px;}',
    '.black {background-position-y: 0px;}',
    '.white {background-position-y: -77px;}',
    '.lad 1 {background-position-x: 0px;}',
    '.pesh {background-position-x: -380px;}',
    '.hor {background-position-x: -525px;}',
    '.slon {background-position-x: -605px;}',
    '.king {background-position-x: -753px;}',
    '.queen {background-position-x: -680px;}'
    ] 

function setStyle(styles){           
    let el = document.querySelector ('body')
    el.innerHTML += '<style type="text/css">'
    el = document.querySelector ('style')
    for (let i = 0; i < styles.length; i++){
        el.innerHTML += styles[i]
    }
}    

function makeDesc(){
    let el = document.querySelector ('body')
    el.innerHTML += `<table class = 'desc'><tbody>`;
    el = document.querySelector('tbody')
    for (let i = 1; i <= 8; i++){
        el.innerHTML += '<tr>'
    }
    el = [...document.querySelectorAll('tr')]
    el.forEach(element => {
        for(let i = 1; i <= 8; i++){
            element.innerHTML += '<td>'
        }  
    });
}

function getTds(){
    return el = [...document.querySelectorAll('td')]
}

function setLets(arr){
    let lets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    for (i = 0; i < 8; i++){
        arr[i].innerHTML += `<div class = let>${lets[i]}</div>`
    }
}

function setNums(arr){
    for (i = 0; i <= 57; i += 8){
        arr[i].innerHTML += `<div class = num>${i/8 + 1}</div>`
    }
}

function blackFigs(arr){
    for (i = 0; i <= 64; i++){
        if (i == 0 || i == 56){
            arr[i].innerHTML += `<div class ="fig black lad"></div>`
        }else if(i == 8 || i == 48){
            arr[i].innerHTML += `<div class ="fig black hor"></div>`
        }else if(i == 16 || i == 40){
            arr[i].innerHTML += `<div class ="fig black slon"></div>`
        }else if(i == 24){
            arr[i].innerHTML += `<div class ="fig black king"></div>`
        }else if(i == 32){
            arr[i].innerHTML += `<div class ="fig black queen"></div>`
        }
    }
    for (i = 1; i < 58; i+=8){
        arr[i].innerHTML += `<div class ="fig black pesh"></div>`
    }
}

function whiteFigs(arr){
    for (i = 0; i <= 64; i++){
        if (i == 7 || i == 63){
            arr[i].innerHTML += `<div class ="fig white lad"></div>`
        }else if(i == 15 || i == 55){
            arr[i].innerHTML += `<div class ="fig white hor"></div>`
        }else if(i == 23 || i == 47){
            arr[i].innerHTML += `<div class ="fig white slon"></div>`
        }else if(i == 31){
            arr[i].innerHTML += `<div class ="fig white king"></div>`
        }else if(i == 39){
            arr[i].innerHTML += `<div class ="fig white queen"></div>`
        }
    }
    for (i = 6; i < 63; i+=8){
        arr[i].innerHTML += `<div class ="fig white pesh"></div>`
    }
}

function makeDeskWithChes(){
    setStyle(styles)
    makeDesc()
    setLets(getTds())
    setNums(getTds())
    blackFigs(getTds())
    whiteFigs(getTds())
}