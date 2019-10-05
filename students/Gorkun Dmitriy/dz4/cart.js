let arrProducts = []
let cart = {
    products: [],
    getSum: function () {
        sum = 0
        for (let key in this.products) { 
            sum += this.products[key].price * this.products[key].count
        }
        return sum
    },
    addProduct (product) {
        current_product = this.products.find(item => item.id == product.id)
        if (current_product) current_product.count++
        else this.products.push(product)
    }
}

function Product(_id, _name, _category, _price) {
    this.id = _id
    this.name = _name
    this.category = _category
    this.price = _price
    this.count = 1
}

function createProducts() {

    let flag = true
    while (flag) {
        id = prompt(`Введите id товара`)
        name = prompt(`Введите название товара`)
        category = prompt(`Введите категорию товара`)
        price = +prompt(`Введите стоимость товара`)
        arrProducts.push(new Product(id, name, category, price))
        flag = confirm(`Добавить еще товар в корзину?`)
    }

}

createProducts()
console.log(arrProducts)
cart.addProduct(arrProducts[0])
cart.addProduct(arrProducts[2])
cart.addProduct(arrProducts[2])
cart.addProduct(arrProducts[1])
console.log(cart.products)
console.log(`В корзине находятся товары на сумму ${cart.getSum()}$`)