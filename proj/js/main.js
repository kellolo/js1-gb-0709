// реляционные базы данных
// СУБД
const imgCatalog = 'https://placehold.it/200x150'
const items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Microphone']
const prices = [1000, 200, 20, 10, 25, 10]
const ids = [1, 2, 3, 4, 5, 6]
const products = createDTO () //заглушка пришедших данных

function createProduct (index) {
    return {
        id: index,
        name: items [index],
        price: prices [index]
    }
}

function createDTO () {
    let arr = []
    for (let i = 0; i < ids.length; i++) {
        arr.push (createProduct(i))
    }
    return arr
}

function calcSum (cart) {
    let sum = 0
    cart.forEach(el => {
        sum += el.price
    })
    return sum
}

let btnCart = document.querySelector ('.btn-cart')

btnCart.addEventListener ('click', function () {
    document.querySelector ('.cart-block').classList.toggle ('invisible')
})

function renderCatalog () {
    // способ 1 (Грут)
    let htmlString = ''

    // for (let i = 0; i < products.length; i++) {
    //     //products [i] - текущий товар из массива товаров
    //     htmlString += `
    //                 <div class="product-item">
    //                     <div class="desc">
    //                     <h3 class="cart-item">${products[i].name}</h3>
    //                     <img class="img" src="${imgCatalog}">
    //                     </div>
    //                     <p>Цена: <span class="product-price">${products[i].price}</span>$</p>
    //                     <button class="buy-btn" type="button" data-id="${products[i].id}">В корзину</button>
    //                     <div class="prod-block invisible"></div>
    //                 </div>
    //                 `
    // }

    products.forEach (function (el) {
        htmlString += `
                    <div class="product-item">
                        <div class="desc">
                        <h3 class="cart-item">${el.name}</h3>
                        <img class="img" src="${imgCatalog}">
                        </div>
                        <p>Цена: <span class="product-price">${el.price}</span>$</p>
                        <button class="buy-btn" type="button" data-id="${el.id}">В корзину</button>
                        <div class="prod-block invisible"></div>
                    </div>
                    `
    })
    document.querySelector ('.products').innerHTML = htmlString
}
//data-аттрибуты
renderCatalog ()

function addProduct (index) {
    //добавление в корзину
    console.log ('Вы добавили в корзину ' + products [index].name)
}

//всплытие и захват событий
document.querySelector ('.products').addEventListener ('click', function (e) {
    if (e.target.classList.contains ('buy-btn')) {
        addProduct (+e.target.dataset ['id'])
    }
})
