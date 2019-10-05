// реляционные базы данных
// СУБД
const imgCatalog = 'https://placehold.it/200x150'
const items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Microphone']
const prices = [1000, 200, 20, 10, 25, 10]
const ids = [1, 2, 3, 4, 5, 6]

let userCart = []

const products = createDTO () //заглушка пришедших данных

function createProduct (index) {
    return {
        id: index,
        name: items [index],
        price: prices [index],
        img: imgCatalog
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
    let htmlString = ''
    products.forEach (function (el) {
        htmlString += `
                    <div class="product-item">
                        <div class="desc">
                        <h3 class="cart-item">${el.name}</h3>
                        <img class="img" src="${el.img}">
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

function renderCart () {
    let htmlString = ''
    userCart.forEach (el => {
        htmlString += `
            <div class="cart-item" data-id="${el.id}">
                <div class="product-bio">
                    <img src="${el.img}" alt="" style="width: 100px; height: 80px">
                    <div class="product-desc">
                        <p class="product-title">${el.name}</p>
                        <p class="product-quantity">${el.quantity}</p>
                        <p class="product-single-price">${el.price}</p>
                    </div>
                    <div class="right-block">
                        <button class="del-btn" data-id="${el.id}">&times;</button>
                    </div>
                </div>
            </div>
        `
    })

    document.querySelector ('.cart-block').innerHTML = htmlString
}

function addProduct (index) {
    let prod = products [index]
    let find = userCart.find (el => el.id === index)

    if (!find) {
        userCart.push ({
            id: index,
            name: products [index].name,
            price: products [index].price,
            img: products [index].img,
            quantity: 1
        })
    } else {
        find.quantity++
    }
    renderCart ()
    //добавление в корзину
    //console.log ('Вы добавили в корзину ' + products [index].name)
}

function removeProduct (index) {
    let prod = products [index]
    let find = userCart.find (el => el.id === index)

    if (find.quantity > 1) {
        find.quantity--
    } else {
        userCart.splice (userCart.indexOf (find), 1)
    }
    renderCart ()
    //добавление в корзину
    //console.log ('Вы добавили в корзину ' + products [index].name)
}

//всплытие и захват событий
document.querySelector ('.products').addEventListener ('click', function (e) {
    if (e.target.classList.contains ('buy-btn')) {
        addProduct (+e.target.dataset ['id'])
    } 
})


document.querySelector ('.cart-block').addEventListener ('click', function (e) {
    if (e.target.classList.contains ('del-btn')) {
        removeProduct (+e.target.dataset ['id'])
    } 
})
