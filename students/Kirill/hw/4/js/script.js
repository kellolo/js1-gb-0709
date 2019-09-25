'use strict';

// первое
(function () {
    let number = [...prompt (`Введите число от 0 до 999`)];

    if (number.length >= 4) {
        console.log(`Число больше 999`);
    } else {
        while (number.length < 3) {
            number.unshift(0);
        }

        let objectFromNumber = {
            единицы: +number[2],
            десятки: +number[1],
            сотни: +number[0]
        };

        console.log(objectFromNumber);
    }
})();

