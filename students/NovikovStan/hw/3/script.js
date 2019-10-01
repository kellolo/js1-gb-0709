var task1Result = document.getElementById("task1__result");
var task2Result = document.getElementById("task2__result");
var task4Result = document.getElementById("task4__result");
var cart = document.getElementById("cartTable");
var task5Result = '';
var cartArray = [];

function simpleCheck(number) {
  var i = 2; // Начинаем с 2 по определению простого числа.
  var resultArray = [];

  while (i <= number) {
    var simple = true;
    var j = 2;
    while (j < i) {
      if (i % j === 0) {
        simple = false;
        break;
      } else j++;
    }
    if (simple) resultArray.push(i);
    i++;
  }

  return resultArray;
}

task1Result.innerText = simpleCheck(100);

function randomCart() {
    result = 0;
    for (let i = 0; i < 10; i++) {
        cartArray[i] = ['product'+ i, 10 * Math.floor(Math.random() * Math.floor(100))];
        cart.innerText += cartArray[i][0] + ": " + cartArray[i][1] + "\n";
        result += cartArray[i][1];
    }
    task2Result.innerText = result;
}

randomCart();

for (let i = 0; i < 10; task4Result.innerText += i++ + " ") {
    //Пусто
}


for (let i = 0; i < 20; i++) {
    task5Result += 'x';
    console.log(task5Result);
}