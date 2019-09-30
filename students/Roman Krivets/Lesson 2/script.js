// 1 задание

 let a = +prompt('введите первое число', 0);
 let b = +prompt('введите второе число', 0);

if(a >= 0 && b >= 0) {
    console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else {
    console.log(a + b);
}

// 2 задание

a = +prompt("Введите чиcло от 0 до 15:");
        var sum = "";
        switch (a) {
            case 0:
                console.log (a++)
            case 1:
                console.log (a++)
            case 2:
                console.log (a++)
            case 3:
                sum += a++ + " ";
            case 4:
                sum += a++ + " ";
            case 5:
                sum += a++ + " ";
            case 6:
                sum += a++ + " ";
            case 7:
                sum += a++ + " ";
            case 8:
                sum += a++ + " ";
            case 9:
                sum += a++ + " ";
            case 10:
                sum += a++ + " ";
            case 11:
                sum += a++ + " ";
            case 12:
                sum += a++ + " ";
            case 13:
                sum += a++ + " ";
            case 14:
                sum += a++ + " ";
            case 15:
                sum += a++ + " ";
                break;
            default:
                console.log("Пожалуйста, проверьте правильность ввода данных и повторите попытку!");
        }
        console.log(sum);

 // 3 задание

        function add(x, y) {
            return x + y;
        }
        function sub(x, y) {
            return x - y;
        }
        function mult(x, y) {
            return x * y;
        }
        function div(x, y) {
            return x / y;
        }

  // 4 задание

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return add(arg1, arg2);
        case "-":
            return sub(arg1, arg2);
        case "*":
            return mult(arg1, arg2);
        case "/":
            return div(arg1, arg2);
        default:
            return "Пожалуйста, проверьте правильность ввода данных и повторите попытку!";
    }
}
var arg1 = +prompt("Введите число:");
var arg2 = +prompt("Введите число:");
var operation = prompt('Введите необходимую операцию "+", "-", "*", "/"');
console.log(mathOperation(arg1, arg2, operation));

 // 5 задание

 var val = +prompt("Введите число");
        var pow = +prompt("Введите степень для возведения:");
        function power(val, pow) { //(2, 3)
          if (pow == 0)
            return 1;
          else
            return val * power(val, pow - 1); 
        }

  console.log(power(val, pow));
















