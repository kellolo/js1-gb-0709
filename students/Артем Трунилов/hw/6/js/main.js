
/*
Задача 1. Сделать так, чтобы товары в каталоге выводились при помощи JS:
а) Создать массив товаров (сущность Product);
б) При загрузке страницы на базе данного массива генерировать вывод из него. 
HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS.
*/

const items = ['Клейсон Джордж. Самый богатый человек в Вавилоне',
    'Роберт Кийосаки. Богатый папа бедный папа',
    'Робин Шарма. Монах который продал свой Феррари',
    'Стивен Кови. Семь навыков высокоэффективных людей',
    'Дейл Карнеги. Как перестать беспокоиться и начать жить',
    'Роберт Чалдини. Психология влияния'
]

const prices = [16, 20, 15, 17, 12, 14]
const ids = [1, 2, 3, 4, 5, 6]
const image = ['img/babylon.jpg', 'img/rich.jpg', 'img/ferrari.jpg', 'img/seven.jpg', 'img/dale.jpg', 'img/psychology.jpg']


function createProduct(index) {
    return {
        id: index + 1,
        name: items[index],
        price: prices[index],
        image: image[index]
    }
}

function createDTO() {
    let arr = []
    for (let i = 0; i < ids.length; i++) {
        arr.push(createProduct(i))
    }
    return arr
}

function countBasketPrice(cart) {
    let sum = 0
    cart.forEach(el => {
        sum += el.price
    })
    // return
    let totalBasket = document.querySelector('.cart-block')
    let content = cart.length == 0 ? 'Корзина пуста' : `В корзине ${cart.length} товаров на сумму ${sum}$`
    totalBasket.innerHTML = `<p class='text'> ${content} </p>`

}

let btnCart = document.querySelector('.btn-cart')

btnCart.addEventListener('click', function () {
    document.querySelector('.cart-block').classList.toggle('invisible')
})

let shoppingBag = createDTO()
countBasketPrice(shoppingBag)
let out = ''

shoppingBag.forEach(el => {
    out += `<div class="card" style="width: 18rem;">
    <img src="${el.image}" class="card-img-top" alt="...">
    <div class="card-body"><h5 class="card-title fontsize"> ${el.name} </h5>
    <p class="card-text"> ${el.price} USD</p> 
    <button class="btn btn-primary">Купить</button></div>
    </div>`
})

document.querySelector('.catalog').innerHTML = out