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

let num = +prompt("Введите число в промежутке от 1 - 5");

switch(num) {
   case 1: 
     console.log("Число = " + num);
     break;
   case 2: 
     console.log("Число = " + num);
     break;
   case 3: 
     console.log("Число = " + num);
     break;
   case 4: 
     console.log("Число = " + num);
     break;
   case 5: 
     console.log("Число = " + num);
     break;
   default:
     console.log("Повторите");
 }

 // 3 и 4 задания

 function mathOperation(arg1, arg2, operation) {
    arg1 = +prompt("Введите первое число");
    arg2 = +prompt("Введите второе число");
    operation = prompt("Введите операцию");
    switch(operation) {
        case "-": 
        return arg1 - arg2;
        break;
        case "+": 
        return arg1 + arg2;
        break;
        case "*": 
        return arg1 * arg2;
        break;
        case "/": 
        return arg1 / arg2;
        break;
    
        default: 
        console.log("Повторите");
   }
 }
    
 console.log(mathOperation());
















