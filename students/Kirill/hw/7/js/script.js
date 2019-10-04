'use strict';

const doc = document;
const canvas = doc.querySelector("#canv");
const ctx = canvas.getContext("2d");
const xCoordBlock = doc.querySelector("#x-coord");
const yCoordBlock = doc.querySelector("#y-coord");

const system = {
  width: canvas.getAttribute("width"),
  height: canvas.getAttribute("height"),
  currentTool: "",
  currentColor: "black",
  brushSize: 5
};

var startXCoord = 0;
var startYCoord = 0;
var arcRadius = 100;
var rectX = 0;
var rectY = 0;

function renderSystem(sysObj, elem, action) {
  sysObj[elem] = action;
}

function getCoordinates(evt) {
  //берем коорд курсора
  xCoordBlock.innerText = evt.offsetX;
  yCoordBlock.innerText = evt.offsetY;
}

function clicker(evt) {
  // для элементов "инструменты" (tools-button)
  if (evt.target.classList.contains("tool-button")) {
    renderSystem(system, "currentTool", evt.target.dataset["name"]);
  }
  if (evt.target.dataset["name"] === "clear-all") {
    ctx.clearRect(0, 0, system.width, system.height);
    system.currentTool = false;
  }
}

function inputer(evt) {
  // для элементов "инструменты" (select-)
  if (evt.target.id === "select-size") {
    renderSystem(system, "brushSize", evt.target.value);
  }
  if (evt.target.id === "select-color") {
    renderSystem(system, "currentColor", evt.target.value);
  }
}

//drawing functions
function startDraw(evt) {
  if (system.currentTool) {
    if (system.currentTool === "brush") {
      drawLine(evt);
    } else if (system.currentTool === "line") {
      drawStraightLine(evt);
    } else if (system.currentTool === "rectangle") {
      drawRectangle(evt);
    } else if (system.currentTool === "circle") {
      drawCircle(evt);
    } else if (system.currentTool === "solar") {
      drawSolar(evt);
    }
  } else {
    alert("choose tool");
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

function drawStraightLine(evt) {
  ctx.beginPath();
  ctx.moveTo(+xCoordBlock.innerText, +yCoordBlock.innerText);
  ctx.strokeStyle = system.currentColor;
  ctx.lineWidth = system.brushSize;
}

function drawRectangle(evt) {
  startXCoord = +xCoordBlock.innerText;
  startYCoord = +yCoordBlock.innerText;
  ctx.strokeStyle = system.currentColor;
  ctx.lineWidth = system.brushSize;
  ctx.beginPath();
  canvas.onmousemove = function (evt) {
      rectX = +xCoordBlock.innerText - startXCoord;
      rectY = +yCoordBlock.innerText - startYCoord
  }

}

function drawCircle(evt) {
  startXCoord = +xCoordBlock.innerText;
  startYCoord = +yCoordBlock.innerText;
  ctx.strokeStyle = system.currentColor;
  ctx.lineWidth = system.brushSize;

  canvas.onmousemove = function(evt) {
    arcRadius = Math.sqrt(
      Math.pow(+xCoordBlock.innerText - startXCoord, 2) +
        Math.pow(+yCoordBlock.innerText - startYCoord, 2)
    );
  };
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

doc.addEventListener("input", inputer);
doc.addEventListener("click", clicker);

canvas.addEventListener("mousemove", getCoordinates);
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mouseup", endDraw);