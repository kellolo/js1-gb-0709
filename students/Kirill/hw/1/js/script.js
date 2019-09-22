'use strict';

(function showFahrenheitTemp() {
	var tempCelsius = +prompt('Задайте температуру в градусах Цельсия',0);
	var convertCelsToFahr = function(tempCelsius) {
		var tempFahrenheit = 9 / 5 * tempCelsius + 32;
		return tempFahrenheit;
	};

	console.log(`Температура в градусах Фаренгейта ${convertCelsToFahr(tempCelsius)}`);
})();

(function showAdminName() {
	var admin;
	var name;

	name = 'Василий';
	admin = name;
	console.log(admin);
})();

console.log(1000 + "108");
