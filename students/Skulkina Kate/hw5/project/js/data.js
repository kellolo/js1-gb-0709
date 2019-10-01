const items = ['Подушка', 'Светильник', 'Пуфик', 'Стул', 'Игрушка', 'Цветок']
const prices = [400, 1000, 3000, 2000, 250, 900]
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

function calk (cart) {
let sum = 0

cart.forEach(el => {
    sum+=el.price
})
return sum
}