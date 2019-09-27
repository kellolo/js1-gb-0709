const simpleNum = prompt('Введите трехзначное число', 648)  // получаем число, введенное пользователем
let num = new objectNum(simpleNum)

function objectNum(simpleNum) {                             // создаем функцию-конструктор для прототипа objectNum
    if (simpleNum < 1000) {                                 // если число меньше 1000, то преобразуем в строку
        simpleNum = simpleNum.toString()                    // и присваиваем значения созданному объекту
        this.units = simpleNum[2]
        this.tens = simpleNum[1]
        this.hundreds = simpleNum[0]
    }
    else alert('Число должно быть меньше 999')              // если число больше 1000, выводим предупреждение
}

console.log(`введенное число ${simpleNum}, единицы: ${num.units || 'отсутствуют'}, десятки: ${num.tens || 'отсутствуют'}, сотни: ${num.hundreds || 'отсутствуют'}`)
