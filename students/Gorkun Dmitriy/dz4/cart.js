
function Product(_id, _name, _category, _price) {
    this.id = _id
    this.name = _name
    this.category = _category
    this.price = _price
}

function createCart() {

    let flag = true
    let i = 0
    while (flag) {
        id = +prompt(`Введите id товара`)
        name = prompt(`Введите название товара`)
        category = prompt(`Введите категорию товара`)
        price = +prompt(`Введите стоимость товара`)
        cart.products[i] = new Product(id, name, category, price)
        i++
        flag = confirm(`Добавить еще товар в корзину?`)
    }

}

cart = {
    products: [],
    getSum: function () {
        sum = 0
        for (let product in this.products) { sum += this.products[product].price }
        return sum
    }
}
createCart()
console.log(cart.products)
console.log(`В корзине находятся товары на сумму ${cart.getSum()} рублей`)