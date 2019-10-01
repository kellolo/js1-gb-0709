
//  Задача 2. Сделать генерацию корзины.

const items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Microphone']
const prices = [1000, 200, 20, 10, 25, 10]
const ids = [1, 2, 3, 4, 5, 6]


function createProduct(index) {
    return {
        id: index + 1,
        name: items[index],
        price: prices[index]
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
    let totalBasket = document.querySelector('.basket')
    let content = cart.length == 0 ? 'Корзина пуста' : `В корзине ${cart.length} товаров на сумму ${sum}$`
    totalBasket.innerHTML = `<p class='text'> ${content} </p>`
}

let shoppingBag = createDTO()
countBasketPrice(shoppingBag)