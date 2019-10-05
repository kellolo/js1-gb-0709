const items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Microphone']
const prices = [1000, 200, 20, 10, 25, 10]
const ids = [1, 2, 3, 4, 5, 6]
var products = createDTO();
var cart = [];

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

function addToCart(cart, id) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            cart.push(products[i]);
            break;
        }
    }
}

function removeFromCart(cart, id) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            cart.splice(i, 1);
        }
    }
}

function resetCart(cart) {
    cart = [];
}


function calcSum (cart) {
    let sum = 0
    cart.forEach(el => {
        sum += el.price
    })
    return sum
}