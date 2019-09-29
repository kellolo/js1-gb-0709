let cartCount = document.querySelector('.cartCount')
cartCount.innerHTML = 'test'
const imgCatalog = 'https://placehold.it/200x150'
let catalog = document.querySelector ('.products')

// массив всех позиций товаров магазина
let arrProducts = []


// объект корзины
let cart = {
    products: []
    , getSum: function () {
        sum = 0
        this.products.forEach(el => {
            sum += el.price
        })
        return sum
    }
    , addProduct(id) {
        this.products.push(arrProducts[id - 1])
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


// функция создания нового товара
function Product(id, name, category, price) {
    this.id = id
    this.name = name
    this.category = category
    this.price = +price
}



// вывод товаров на страницу
function showProducts () {
    let htmlString = ``
    arrProducts.forEach (function (el) {
        htmlString += `
                    <div class="product-item">
                        <div class="desc">
                        <h3 class="cart-item">${el.name}</h3>
                        <img class="img" src="${imgCatalog}">
                        </div>
                        <p>Цена: <span class="product-price">${el.price}</span>$</p>
                        <button class="buy-btn" type="button" data-id="${el.id}">В корзину</button>
                        <div class="prod-block invisible"></div>
                    </div>
                    `
    })
    catalog.innerHTML = htmlString
}


catalog.addEventListener('click', function(e) {
    if (e.target.classList.contains ('buy-btn')) {
        cart.addProduct (+e.target.dataset ['id'])
    }
})

// добавление новых товаров в ассортимент магазина
arrProducts.push(new Product(1, 'Тостер', 'Бытовая техника', 2000))
arrProducts.push(new Product(2, 'Кофеварка', 'Бытовая техника', 1000))
arrProducts.push(new Product(3, 'Телевизор', 'Электроника', 35000))
arrProducts.push(new Product(4, 'Принтер', 'Электроника', 6000))
arrProducts.push(new Product(5, 'Роутер', 'Электроника', 4000))

showProducts ()