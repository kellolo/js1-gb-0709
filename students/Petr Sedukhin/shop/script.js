const items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Microphone', 'Camera']
const prices = [1000, 200, 20, 10, 25, 10, 40]
const imgs = ['notebook.jpg', 'display.jpg', 'keyboard.jpg', 'mouse.jpg', 'phones.jpg', 'microphone.jpg', 'camera.jpg']
const ids = [1, 2, 3, 4, 5, 6, 7]
const products = createDTO ()
let cart = []

renderProds(products)

function createProduct (index) {
    return {
        id: ids [index],
        name: items [index],
        price: prices [index],
        img: imgs [index]
    }  
}

function createDTO () {
    let arr = []
    for (let i = 0; i < ids.length; i++) {
        arr.push (createProduct(i))
    }
    return arr
}

function renderProds() {
    htmlString = ''
    products.forEach((el) => {
        htmlString += `<div class = 'product-item'>
        <img src="img/${el.img}">
        <h2>${el.name}</h2>
        <p>price: ${el.price}</p>
        <button class="buy-btn" data-id = "${el.id}">Добавить в корзину</button>
        </div>`
    })
    document.querySelector('.products').innerHTML = htmlString
}

function calcSum (cart) {
    let sum = 0
    cart.forEach(el => {
        sum += el.price
    })
    return sum
}

 function addProduct (index) {
    //добавление в корзину
    console.log ('Вы добавили в корзину ' + products [index].name)
}

//всплытие и захват событий
document.querySelector('.btn-cart').addEventListener ('click', function () {
    document.querySelector ('.cart-block').classList.toggle ('invisible')})
    
document.querySelector ('.products').addEventListener ('click', function (e) {
    if (e.target.classList.contains ('buy-btn')) {
        addProduct (+e.target.dataset ['id'] - 1)
    }
})
