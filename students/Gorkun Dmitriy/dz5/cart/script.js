let table = document.querySelector(`table`)
let cartCount = document.querySelector(`.cartCount`)
let arrProducts = []
let cart = {
    products: []
    , getSum: function () {
        sum = 0
        this.products.forEach(el => {
            sum += el.price
        })
        return sum
    }
    , addProduct() {
        i = prompt(`Введите порядковый номер покупаемого товара`)
        this.products.push(arrProducts[i - 1])
        this.show()
    }
    , clear() {
        this.products = []
        this.show()
    }
    , show() {
        cartCount.innerHTML = `<p>В корзине лежат товары в количестве ${this.products.length} шт. 
                                на общую сумму ${this.getSum()}$</p>`
    }
}

function Product(id, name, category, price) {
    this.id = prompt(`Введите id товара`)
    this.name = prompt(`Введите название товара`)
    this.category = prompt(`Введите категорию товара`)
    this.price = +prompt(`Введите стоимость товара`)
    let tr = document.createElement(`tr`)
    tr.innerHTML = `<td>${arrProducts.length+1}</td><td>${this.id}</td><td>${this.name}</td><td>${this.category}</td><td>${this.price}</td>`
    table.appendChild(tr)
}

function createProduct() {
    let flag = true
    arrProducts.push(new Product())
}