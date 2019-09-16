'use strict';

// второе
(function showX() {
	var getX = function() {
		var a = 2;
		var x = 1 + (a *= 2);
		return x;
	};

	console.log(getX());
})();

// третье
(function () {
	var a;
	var b;

	function randomInteger(min, max) {
		var rand = min + Math.random() * (max + 1 - min);
		return Math.round(rand);
	}

	a = randomInteger(-100,100);
	b = randomInteger(-100,100);

	if (a >= 0 && b >= 0) {
		console.log(`Числа положительные, разность ${a - b}`);
	} else if (a < 0 && b < 0) {
		console.log(`Числа отрицательные, произведение ${a * b}`);
	} else {
		console.log(`Числа разных знаков, сумма ${a + b}`);
	}
})();

// четвертое
(function () {
	function randomInteger(min, max) {
		var rand = min + Math.random() * (max + 1 - min);
		return Math.round(rand);
	};

	function showNumberSeries(min, max) {
		var a = randomInteger(min, max);

		switch (a) {
			case max:
				console.log(a);
				break;
			default:
				while (a <= max) {
					console.log(a++);
				}
		}
	};

	showNumberSeries(0,15);
})();

// пятое и шестое
(function () {
	function addAToB (a,b) {
		return (a + b);
	};

	function subtractBFromA (a,b) {
		return (a - b);
	};

	function multiplyAByB (a,b) {
		return (a * b);
	};

	function divideAByB(a,b) {
		return (a / b);
	};

	function mathOperation (arg1,arg2,operation) {
		switch (operation) {
			case 'сложить':
				console.log(`Результат введеной арифметической операции: ${addAToB(arg1,arg2)}`);
				break;
			case 'вычесть':
				console.log(`Результат введеной арифметической операции: ${subtractBFromA(arg1,arg2)}`);
				break;
			case 'умножить':
				console.log(`Результат введеной арифметической операции: ${multiplyAByB(arg1,arg2)}`);
				break;
			case 'разделить':
				console.log(`Результат введеной арифметической операции: ${divideAByB(arg1,arg2)}`);
				break;
			default:
				console.log('Введена неизвестная арифметическая операция');
		}
	};

	var firstNumber = +prompt('Для выполнения арифметической операции введите первое число',0);
	var secondNumber = +prompt('Введите второе число',0);
	var stringOperationName = prompt('Напишите необходимую операцию с этими двумя числами (доступны действия "сложить", "вычесть", "умножить" или "разделить")');

	mathOperation(firstNumber, secondNumber, stringOperationName);
})();

// седьмое
console.log (`Сравнение null == 0: ${null == 0}`);
console.log (`Сравнение null > 0: ${null > 0}`);
console.log (`Сравнение null < 0: ${null < 0}`);
console.log (`Сравнение null >= 0: ${null >= 0}`);

// восьмое
function power(val, pow) {
	return (pow == 1) ? val : (val * power(val, pow - 1));
};

console.log(`7 в степени 9 равно ${power(7,9)}`);
