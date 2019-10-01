const items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Microphone', 'Camera']
const prices = [1000, 200, 20, 10, 25, 10, 40]
const imgs = ['notebook.jpg', 'display.jpg', 'keyboard.jpg', 'mouse.jpg', 'phones.jpg', 'microphone.jpg', 'camera.jpg']
const ids = [1, 2, 3, 4, 5, 6, 7]
let cart = []

function createProduct (index) {
    return {
        id: ids[index],
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

function pictProds(data) {
    let el = document.querySelector ('.products')
    for (let i = 0; i < data.length; i++ ){
        el.innerHTML += `<div class = 'product-item'>
        <img src="img/${data[i].img}">
        <h2>${data[i].name}</h2>
        <p>price: ${data[i].price}</p>
        <button class="btn-prod" data-id = "${data[i].id}">Добавить в корзину</button>
        </div>`
    } 
    return el
}

function prodFoCart (prod) {
    return {
        id: prod.id,
        name: prod.name,
        price: prod.price,
        img: prod.img,
        qty: 1,
        totalPrice: function () {
            return this.price*this.qty
        }
    }
}

function addToCart(prod){
    let btnProd = document.querySelectorAll('.btn-prod')
    for (let i = 0; i < btnProd.length; i++){
        btnProd[i].addEventListener ('click', function () {
            id = btnProd[i-1].getAttribute('data-id')
            console.log(id)
            cart.push(prodFoCart(prod[id]))
        })
    }   
    return true   
}

function calcSum (cart) {
    let sum = 0
    cart.forEach(el => {
        sum += el.price
    })
    return sum
}

function showCart(){
    let btnCart = document.querySelector('.btn-cart')
    btnCart.addEventListener ('click', function () {
        document.querySelector ('.cart-block').classList.toggle ('invisible')
     })
     return true
}
