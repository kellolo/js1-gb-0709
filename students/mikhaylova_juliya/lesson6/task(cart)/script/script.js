// массив data создается в файле data.js

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


// считаем тотал корзины

function countBascketPrice(arr) {
    var summ = 0;
    for (var i = 0; i < arr.length; i++) {
        summ += arr[i].price;
    }

    return summ;
}

// добавление события показа корзины

let btnCart = document.querySelector('.btn-cart')

btnCart.addEventListener('click', function () {
    document.querySelector('.cart-block').classList.toggle('invisible')
})

// добавление товаров каталога

function createProduct() {

    let elem = document.querySelector('.products')
    let htmlStr = '';

    for (i = 0; i < data.length; i++) {

        htmlStr += `<div class="product-item">
        <img src="${data[i].img}" alt="img-${data[i].name}" class="product-img">
        <div class="product-desc">
            <h2 class="product-name">${data[i].name}</h2>
            <p class="product-price">${data[i].price} &#36;</p>
            <button class="product-btn">Купить</button>
        </div>
    </div>`
    }
    console.log(htmlStr)
    console.log(elem)
    elem.innerHTML = htmlStr

}

createProduct()