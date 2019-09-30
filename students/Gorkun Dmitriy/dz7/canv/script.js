const doc = document
const canvas = doc.querySelector('#canv')
const ctx = canvas.getContext('2d')
const xCoordBlock = doc.querySelector('#x-coord')
const yCoordBlock = doc.querySelector('#y-coord')


const system = {
    width: canvas.getAttribute('width'),
    height: canvas.getAttribute('height'),
    currentTool: '',
    currentColor: 'black',
    brushSize: 5
}

function renderSystem(elem, action) {
    system[elem] = action
}

function getCoordinates(evt) {
    //берем коорд курсора 
    dx = evt.movementX
    dy = evt.movementY
    x = xCoordBlock.innerText = evt.offsetX
    y = yCoordBlock.innerText = evt.offsetY
}

function clicker(evt) {
    // для элементов "инструменты" (tools-button)
    if (evt.target.classList.contains('tool-button')) {
        renderSystem('currentTool', evt.target.dataset['name'])
    }
}

function inputer(evt) {
    // для элементов "инструменты" (select-)
    if (evt.target.id === 'select-size') {
        renderSystem('brushSize', evt.target.value)
    }
    if (evt.target.id === 'select-color') {
        renderSystem('currentColor', evt.target.value)
    }
}

//drawing functions
function startDraw(evt) {
    if (system.currentTool) {
        if (system.currentTool === 'brush') {
            drawBrush(evt)
        }
        else if (system.currentTool === 'line') {
            drawLine(evt)
        }
        else if (system.currentTool === 'circle') {
            drawCircle(evt)
        }

    } else {
        alert('choose tool')
    }
}

function endDraw() {
    canvas.onmousemove = null
}

// рисуем кистью
function drawBrush(evt) {
    canvas.onmousemove = function (evt) {
        ctx.fillStyle = system.currentColor
        ctx.fillRect(+xCoordBlock.innerText, +yCoordBlock.innerText, system.brushSize, system.brushSize)
    }
}


// рисуем круг
function drawCircle(evt) {
    canvas.onmousemove = function (evt) {
        ctx.fillStyle = system.currentColor
        ctx.arc(x, y, system.brushSize, 0, 2*Math.PI, false);
    }
}

// рисуем кривую 
function drawLine (evt) {
    canvas.onmousemove = function (evt) {
        ctx.strokeStyle = system.currentColor
        ctx.lineWidth = system.brushSize;
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(x-dx, y-dy)
        ctx.stroke()
        ctx.closePath()
    }
}

//listeners

doc.addEventListener('input', inputer)
doc.addEventListener('click', clicker)

canvas.addEventListener('mousemove', getCoordinates)
canvas.addEventListener('mousedown', startDraw)
canvas.addEventListener('mouseup', endDraw)
ctx.fillStyle = '#f0f'
ctx.arc(100,75,50,0*Math.PI,1.5*Math.PI)