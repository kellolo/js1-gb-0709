const doc = document
const canvas = doc.querySelector ('#canv')
const ctx = canvas.getContext ('2d')
const xCoordBlock = doc.querySelector ('#x-coord')
const yCoordBlock = doc.querySelector ('#y-coord')


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
        if (system.currentTool === 'brush') {
            drawLine (evt)
        }
    } else {
        alert ('choose tool')
    }
}

function endDraw () {
    canvas.onmousemove = null
}


function drawLine (evt) {
    canvas.onmousemove = function (evt) {
        ctx.fillStyle = system.currentColor
        ctx.fillRect (+xCoordBlock.innerText, +yCoordBlock.innerText, system.brushSize, system.brushSize)
    }
}
//listeners

doc.addEventListener ('input', inputer)
doc.addEventListener ('click', clicker)

canvas.addEventListener ('mousemove', getCoordinates)
canvas.addEventListener ('mousedown', startDraw)
canvas.addEventListener ('mouseup', endDraw)