generateBoard();
setMarks();
paintFields();
placeFigures();

function generateBoard() {
  var body = document.querySelector("body");
  body.innerHTML += `<div class="board"></div>`;
  // var board = document.createElement("div");
  // board.className = "board";
  // body.appendChild(board);

  var board = document.querySelector(".board");
  var horisontalMarks = document.createElement("div");
  horisontalMarks.className = "horisontalMarks";
  board.appendChild(horisontalMarks);
  for (let i = 0; i < 8; i++) {
    var horisontalMark = document.createElement("div");
    horisontalMark.className = "horisontalMark";
    horisontalMarks.appendChild(horisontalMark);
  }

  var centralPart = document.createElement("div");
  centralPart.className = "centralPart";
  board.appendChild(centralPart);

  var verticalMarks = document.createElement("div");
  verticalMarks.className = "verticalMarks";
  centralPart.appendChild(verticalMarks);
  for (let i = 0; i < 8; i++) {
    var verticalMark = document.createElement("div");
    verticalMark.className = "verticalMark";
    verticalMarks.appendChild(verticalMark);
  }

  var playField = document.createElement("div");
  playField.className = "playField";
  centralPart.appendChild(playField);

  for (let index = 0; index < 64; index++) {
    var gameField = document.createElement("div");
    gameField.className = "gameField";
    playField.appendChild(gameField);
  }

  var verticalMarks = document.createElement("div");
  verticalMarks.className = "verticalMarks";
  centralPart.appendChild(verticalMarks);
  for (let i = 0; i < 8; i++) {
    var verticalMark = document.createElement("div");
    verticalMark.className = "verticalMark";
    verticalMarks.appendChild(verticalMark);
  }

  var horisontalMarks = document.createElement("div");
  horisontalMarks.className = "horisontalMarks";
  board.appendChild(horisontalMarks);
  for (let i = 0; i < 8; i++) {
    var horisontalMark = document.createElement("div");
    horisontalMark.className = "horisontalMark";
    horisontalMarks.appendChild(horisontalMark);
  }
}

function setMarks() {
  var horisontalMark = document.querySelectorAll(".horisontalMark");
  for (let index = 0; index < horisontalMark.length / 2; index++) {
    horisontalMark[index].innerText = index + 1;
    horisontalMark[index + 8].innerText = index + 1;
  }

  var letterArray = ["A", "B", "C", "D", "E", "F", "G", "H"];

  var verticalMark = document.querySelectorAll(".verticalMark");
  for (let index = 0; index < verticalMark.length / 2; index++) {
    verticalMark[index].innerText = letterArray[index];
    verticalMark[index + 8].innerText = letterArray[index];
  }
}

function paintFields() {
  var flag = true;
  var field = document.querySelectorAll(".gameField");
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (j == 0) flag = !flag;

      if (flag) field[i * 8 + j].classList.add("blackField");
      else field[i * 8 + j].classList.add("whiteField");
      flag = !flag;
    }
  }
}

function placeFigures() {
  var army = ["R", "Kn", "B", "K", "Q", "B", "Kn", "R"];

  var peons = "p";

  var field = document.querySelectorAll(".gameField");
  for (let i = 0; i < 8; i++) {
    field[i].innerText = army[i];
    field[i].classList.add("piece", "whitePiece");
    field[8 + i].innerText = peons;
    field[8 + i].classList.add("piece", "whitePiece");
    field[field.length - 8 + i].innerText = army[i];
    field[field.length - 8 + i].classList.add("piece", "blackPiece");
    field[field.length - 16 + i].innerText = peons;
    field[field.length - 16 + i].classList.add("piece", "blackPiece");
  }
}
