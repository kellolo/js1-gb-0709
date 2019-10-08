const doc = document
const canvas = doc.querySelector ('#canv')
const ctx = canvas.getContext ('2d')
const xCoordBlock = doc.querySelector ('#x-coord')
const yCoordBlock = doc.querySelector ('#y-coord')

var startXCoord = 0;
var startYCoord = 0;
var arcRadius = 100;
var rectX = 0;
var rectY = 0;

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
        } else if (system.currentTool === "notbrush2") {
            drawSolar(evt);
        }
    } else {
        alert ('choose tool')
    }
}

function endDraw() {
    if (system.currentTool === "line") {
      ctx.lineTo(+xCoordBlock.innerText, +yCoordBlock.innerText);
    } else if (system.currentTool === "rectangle") {
      ctx.rect(
        startXCoord,
        startYCoord,
        rectX,
        rectY
      );
    } else if (system.currentTool === "circle") {
      ctx.beginPath();
      ctx.arc(
        startXCoord,
        startYCoord,
        arcRadius,
        0,
        (Math.PI / 180) * 360,
        true
      );
    }
    ctx.stroke();
    ctx.closePath();
    canvas.onmousemove = null;
  }


  function drawLine(evt) {
    ctx.moveTo(+xCoordBlock.innerText, +yCoordBlock.innerText);
    ctx.beginPath();
    canvas.onmousemove = function(evt) {
      ctx.strokeStyle = system.currentColor;
      ctx.lineWidth = system.brushSize;
      ctx.lineTo(+xCoordBlock.innerText, +yCoordBlock.innerText);
      ctx.stroke();
    };
    ctx.closePath();
  }


 
  function drawSolar(evt) {
    ctx.moveTo(+xCoordBlock.innerText, +yCoordBlock.innerText);
    ctx.beginPath();
    canvas.onmousemove = function(evt) {
      ctx.strokeStyle = system.currentColor;
      ctx.lineWidth = system.brushSize;
      ctx.arcTo(
        +xCoordBlock.innerText,
        +yCoordBlock.innerText,
        +xCoordBlock.innerText,
        +yCoordBlock.innerText,
        1
      );
      ctx.stroke();
      ctx.closePath();
    };
  }
//listeners

doc.addEventListener ('input', inputer)
doc.addEventListener ('click', clicker)

canvas.addEventListener ('mousemove', getCoordinates)
canvas.addEventListener ('mousedown', startDraw)
canvas.addEventListener ('mouseup', endDraw)