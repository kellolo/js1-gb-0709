/*
Задача 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

// Решение 1.

function convertObject(number) {
    
    if (isNaN(+number) || number < 0 || number > 999) {
        console.log("Ошибка! Некорректное значение");
        return {};
    }
    var hundreds = Math.floor(number / 100);
    var dozens = Math.floor(number % 100 / 10);
    var units = number % 100 % 10;

    var obj = { 'единицы': units, 'десятки': dozens, 'сотни': hundreds };
    return obj;
}
var number = +prompt('Введите число от 0 до 999:');
console.log(convertObject(number));

// Решение 2.

function changeObject(number) {

    var obj = {};

    if (isNaN(+number) || number < 0 || number > 999) {
        console.log("Ошибка! Некорректное значение");
        return obj;
    }
    number += ''; // -----> '123'
    var numberString = [...number];   // -----> ['1', '2', '3']
    var property = ['единицы', 'десятки', 'сотни'];
    for (var i = 0; i < numberString.length; i++) {
        obj[property[i]] = +numberString[numberString.length - i - 1];
    }
    return obj;
}

number = +prompt('Введите число от 0 до 999:');
console.log(changeObject(number));

/* 
Задача 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины. 
*/

var products = [['numark', 42, 2], ['pioneer', 30, 3], ['denon', 20, 1]];

function countBasketPrice(products) {
    var totalBasket = 0;
    for (var i = 0; i < products.length; i++) {
        totalBasket += products[i][1] * products[i][2];
    }
    return totalBasket;
}
console.log(`Общая стоимость заказа в корзине: ${countBasketPrice(products)}$`);

/* 
Задача 3. Продолжить работу с интернет-магазином.
a) В прошлой задаче реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
b) Реализовать такие объекты.
c) Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

var shoppingBag = [
    {
        name: 'numark',
        price: 42,
        quantity: 2
    },
    {
        name: 'pioneer',
        price: 30,
        quantity: 3
    },
    {
        name: 'denon',
        price: 20,
        quantity: 1
    }
];

function orderValue(products) {
    var totalBasket = 0;
    for (var i = 0; i < products.length; i++) {
        totalBasket += products[i].price * products[i].quantity;
    }
    return totalBasket;
}
console.log(`Общая стоимость заказа в корзине: ${orderValue(shoppingBag)}$`);