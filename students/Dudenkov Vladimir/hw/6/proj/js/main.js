// реляционные базы данных
// СУБД

const items = ['E-Bike', 'Control', 'Accum', 'PC', 'Motor']
const prices = [1000, 100, 500, 70, 150]
const ids = [1, 2, 3, 4, 5]


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

let test

let btnProduct = document.querySelector('.buy-btn')
btnProduct.addEventListener('click', function () {
    test = createProduct(1)
})