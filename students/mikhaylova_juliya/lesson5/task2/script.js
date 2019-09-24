// все данные я импортирую из файла data.js и они лежат в переменной data

// создаем корзину
let basket = []

// создаем функцию добавления элементов в корзину

function addItemsToBasket(item) {
    basket.push(item)
}

// добавляем элементы в корзину
for (let i = 0; i < data.length; i++) {
    addItemsToBasket(data[i])
}

console.log(basket)

// считаем тотал корзины

function countBascketPrice(arr) {
    var summ = 0;
    for (var i = 0; i < arr.length; i++) {
        summ += arr[i].price;
    }

    return summ;
}

console.log(countBascketPrice(basket))