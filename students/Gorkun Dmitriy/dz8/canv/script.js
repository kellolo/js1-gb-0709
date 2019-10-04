const doc = document
const canvas = doc.querySelector('#canv')
const ctx = canvas.getContext('2d')
const xCoordBlock = doc.querySelector('#x-coord')
const yCoordBlock = doc.querySelector('#y-coord')
const clearButton = doc.querySelector('.clear-button')
const downloadButton = doc.querySelector('.download-button')


const system = {
    width: canvas.getAttribute('width'),
    height: canvas.getAttribute('height'),
    currentTool: 'brush',
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
        doc.querySelectorAll('.tool-button').forEach (el => el.classList.remove('active-tool'))
        evt.target.classList.add('active-tool')
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
        } else if (system.currentTool === 'slinky') {
            drawLine(evt)
        } else if (system.currentTool === 'circle') {
            drawCircle()
        } else if (system.currentTool === 'polygon') {
            drawPolygon()
        } else if (system.currentTool === 'eraser') {
            drawEraser()
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

// ластик
function drawEraser(evt) {
    canvas.onmousemove = function (evt) {
        ctx.fillStyle = 'white'
        ctx.fillRect(+xCoordBlock.innerText, +yCoordBlock.innerText, system.brushSize, system.brushSize)
    }
}


// рисуем круг
function drawCircle() {
    ctx.fillStyle = system.currentColor
    radius = system.brushSize
    ctx.beginPath()
    ctx.arc(x,y,radius,0,2*Math.PI)
    ctx.closePath()
    ctx.fill();      

}

// рисуем полигон
function drawPolygon() {
    ctx.fillStyle = system.currentColor
    ctx.arc(x,y,2,0,2*Math.PI)
    ctx.fill();
}

// рисуем карандашом 
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

// очищаем полотно
function clearCanvas () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// сохраняем картинку

download_img = function(el) {
    // получаем url
    var imageURI = canvas.toDataURL("image/jpg");
    el.href = imageURI;
  };


//listeners

doc.addEventListener('input', inputer)
doc.addEventListener('click', clicker)
clearButton.addEventListener('click', clearCanvas)

canvas.addEventListener('mousemove', getCoordinates)
canvas.addEventListener('mousedown', startDraw)
canvas.addEventListener('mouseup', endDraw)



// var ox = canvas.width / 2;
// var oy = canvas.height / 2;
// ctx.font = "42px serif";
// ctx.textAlign = "center";
// ctx.textBaseline = "middle";
// ctx.fillStyle = "#800";
// ctx.fillRect(ox / 2, oy / 2, ox, oy);

