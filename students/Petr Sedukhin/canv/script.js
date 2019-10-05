const doc = document
const canvas = doc.querySelector ('#canv')
const ctx = canvas.getContext ('2d')
const xCoordBlock = doc.querySelector ('#x-coord')
const yCoordBlock = doc.querySelector ('#y-coord')
let xCoordFinish = 0
let yCoordFinish = 0
let xCoordStart = 0
let yCoordStart = 0


const system = {
    width: canvas.getAttribute ('width'),
    height: canvas.getAttribute ('height'),
    currentTool: '',
    currentColor: 'black',
    brushSize: 5
}

function renderSystem (sysObj, elem, action) {
    sysObj [elem] = action
}

function getCoordinates (evt) {
    //берем коорд курсора
    xCoordBlock.innerText = evt.offsetX
    yCoordBlock.innerText = evt.offsetY
    
}

function getCoordinatesStart (evt) {
    //берем коорд курсора
    xCoordStart = evt.offsetX
    yCoordStart = evt.offsetY
}

function getCoordinatesFinish (evt) {
    //берем коорд курсора
    xCoordFinish = evt.offsetX
    yCoordFinish = evt.offsetY
}

function clicker (evt) {
// для элементов "инструменты" (tools-button)
    if (evt.target.classList.contains ('tool-button')) {
        renderSystem (system, 'currentTool', evt.target.dataset['name'])
    }
}

function inputer (evt) {
// для элементов "инструменты" (select-)
    if (evt.target.id === 'select-size') {
        renderSystem (system, 'brushSize', evt.target.value)
    }
    if (evt.target.id === 'select-color') {
        renderSystem (system, 'currentColor', evt.target.value)
    }
}

//drawing functions
function startDraw (evt) {
    if (system.currentTool) {
        switch (system.currentTool){
            case 'brush':
                drawLine (evt);
                break;
            case 'eraser':
                eraser (evt);
                break;
            case 'fill':    
                fill (evt);
                break;
            case 'rect': 
                drowRect (evt);
                break;
        }        
    } else {
        alert ('choose tool')
    }
}

function endDraw (evt) {
    canvas.onmousemove = null
}


function drawLine (evt) {
    canvas.onmousemove = function (evt) {
        ctx.fillStyle = system.currentColor
        ctx.fillRect (+xCoordBlock.innerText, +yCoordBlock.innerText, system.brushSize, system.brushSize)
    }
}

function eraser (evt) {
    canvas.onmousemove = function (evt) {
        ctx.clearRect (+xCoordBlock.innerText, +yCoordBlock.innerText, system.brushSize, system.brushSize)
    }
}

function fill (evt) {
    ctx.fillStyle = system.currentColor
    ctx.fillRect (0, 0, system.width, system.height)
}

function drowRect (evt) { 
    getCoordinatesFinish(evt)
    ctx.fillStyle = system.currentColor
    ctx.fillRect(xCoordStart, yCoordStart, xCoordFinish - xCoordStart, yCoordFinish - yCoordStart)
}

function checkTool(evt){   
    if (system.currentTool == 'rect'){
        getCoordinatesStart(evt)
        canvas.addEventListener ('mouseup', drowRect)
        canvas.removeEventListener ('mouseup', endDraw)
    }else{
        startDraw()
        canvas.removeEventListener('mouseup', drowRect)
        canvas.addEventListener ('mouseup', endDraw)
    }
}

//listeners

doc.addEventListener ('input', inputer)
doc.addEventListener ('click', clicker)
canvas.addEventListener ('mousemove', getCoordinates)
canvas.addEventListener ('mousedown', checkTool)





