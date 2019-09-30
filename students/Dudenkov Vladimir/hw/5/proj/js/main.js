
function addItem (id, price, item)
{
    ids.push(id)
    price.push(price)
    items.push(item)
}

const items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Microphone']
const prices = [1000, 200, 20, 10, 25, 10]
const ids = [1, 2, 3, 4, 5, 6]


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
