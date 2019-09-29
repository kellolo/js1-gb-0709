'use strict';

//первое

(function () {
	let primes = [2]
	let num = 2

	while (num <= 100) {
		let numcheck = true
		for (let i = 0; i < primes.length; i++) {
			if (num % primes [i] === 0) numcheck = false
		}
		if (numcheck) primes.push (num)
		num++
	}

	console.log(`Простые числа до ста: ${primes}`);
})();

// третье

(function () {
	var goodsInBasket = [[`Яблоко`,10,1],[`Картофель`,30,2],[`Груша`,15,1],[`Свёкла`,50,7],]; // [`Товар`, Цена, Количество]
	
	function countBasketPrice (basket) {
		
		var getCosts = function () {
			var goodCosts = [];

			for (let good of basket) {
				var singleGoodCost= +good[1] * +good[2];
				goodCosts.push(singleGoodCost);
			}
			return goodCosts;
		};

		var getArraySum = function (array) {
			var sum = 0;
			for(var i = 0; i < array.length; i++){
				sum += array[i];
			}
			return sum;
		};

		return getArraySum(getCosts());
	}

	console.log(`Итоговая общая стоимость товаров в корзине равна ${countBasketPrice(goodsInBasket)}`);
})();

//четвертое
(function () {
	for (let i = 0; i <= 9; console.log(i++)) {
		// здесь пусто
	};
})();

// пятое
(function () {
	var elem = `*`;
	for (var i = 0; i < 20; i++) {
		console.log (elem);
		elem += `*`;
	};
})();