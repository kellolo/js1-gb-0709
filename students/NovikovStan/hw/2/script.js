var task3Btn = document.getElementById("task3__button");
var task3Result = document.getElementById("task3__result");
var task5Btn = document.getElementById("task5__calculate");
var task5Result = document.getElementById("task5__result");
var task8Btn = document.getElementById("task8__calculate");
var task8Result = document.getElementById("task8__result");

task3Btn.addEventListener("click", function task3Calc(event) {
  var a = parseInt(document.getElementById("task3__inputA").value);
  var b = parseInt(document.getElementById("task3__inputB").value);
  if (!isNaN(a) && !isNaN(b)) {
    if (a >= 0 && b >= 0) {
      task3Result.innerText = a - b;
    } else if (a < 0 && b < 0) {
      task3Result.innerText = a * b;
    } else {
      task3Result.innerText = a + b;
    }
  } else {
    task3Result.innerText = "Введены недопустимые значения!";
  }
});

function addition(a, b) {
  if (!isNaN(a) && !isNaN(b)) {
    return a + b;
  } else return "Введены недопустимые значения!";
}

function subtraction(a, b) {
  if (!isNaN(a) && !isNaN(b)) {
    return a - b;
  } else return "Введены недопустимые значения!";
}

function multiplication(a, b) {
  if (!isNaN(a) && !isNaN(b)) {
    return a * b;
  } else return "Введены недопустимые значения!";
}

function division(a, b) {
  if (!isNaN(a) && !isNaN(b) && b != 0) {
    return a / b;
  } else return "Введены недопустимые значения!";
}

function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case "+":
      return addition(arg1, arg2);
    case "-":
      return subtraction(arg1, arg2);
    case "*":
      return multiplication(arg1, arg2);
    case "/":
      return division(arg1, arg2);
  }
}

task5Btn.addEventListener("click", function task3Calc(event) {
  var a = parseInt(document.getElementById("task5__inputA").value);
  var b = parseInt(document.getElementById("task5__inputB").value);
  var operations = document.getElementsByClassName("task5__selector_operation");
  var selectedIndex = document.getElementById("task5__selector").selectedIndex;
  var operator = operations[selectedIndex].value;
  task5Result.innerText = mathOperation(a, b, operator);
});

function power(val, pow) {
  if (pow > 0) {
    if (pow > 1) {
      return val * power(val, pow - 1);
    } else {
      return val;
    }
  } else return "Недопустимое значение степени.";
}



task8Btn.addEventListener("click", function task3Calc(event) {
  var val = parseInt(document.getElementById("task8__inputVal").value);
  var pow = parseInt(document.getElementById("task8__inputPov").value);
  if (!isNaN(val) && !isNaN(pow)) {
    task8Result.innerText = power(val, pow);
  } else {
    task8Result.innerText = "Введены недопустимые значения!";
  }
});
