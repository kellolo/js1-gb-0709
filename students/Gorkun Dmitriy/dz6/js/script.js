const imgCatalog = 'https://placehold.it/200x150'
let cartCount = document.querySelector('.cart-count')
let cartBlock = document.querySelector('.cart-block')
let cartButton= document.querySelector('.btn-cart')
let catalog = document.querySelector('.products')
let arrProducts = []

cartBlock.innerHTML = 'Корзина пуста'
cartCount.innerHTML = 'Корзина пуста'


// объект корзины
let cart = {
    products: []
    , getSum: function () {
        sum = 0
        this.products.forEach(el => {
            sum += el.price*el.count
        })
        return sum
    }
    , 
    
    getCount() {
        count = 0
        this.products.forEach(el => {
            count += el.count
        })
        return count
    },

    addProduct(id) {
        let product = this.products.find(item => item.id == arrProducts[id - 1].id);
        if (product) product.count++
        else this.products.push(arrProducts[id - 1])
        this.show()
    }
    , clear() {
        this.products = []
        this.show()
    }
    , show() {
        cartCount.innerHTML = `${this.getCount()} шт. на сумму ${this.getSum()}$`
    }
}


// функция создания нового товара
function Product(id, name, category, price) {
    this.id = id
    this.name = name
    this.category = category
    this.price = +price
    this.count = 1
}

// вывод товаров на страницу
function showProducts() {
    let htmlString = ``
    arrProducts.forEach(function (el) {
        htmlString += `
                    <div class="product-item">
                        <div class="desc">
                        <h3 class="product-name">${el.name}</h3>
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

// функция отображения содержимого корзины
function renderCart() {
    let htmlString = ``
    cart.products.forEach(function (el) {
        htmlString += `<p>${el.name}</p><p>${el.price*el.count}$</p><p>${el.count} шт.</p>`
    })
    htmlString += `<p><strong>ИТОГО</strong>:</p><p>${cart.getSum()}$</p><p>${cart.getCount()} шт.</p>`
    htmlString += `<p></p><p></p><a href="#" class = "cart-clear">Очистить</a>`
    cartBlock.innerHTML = htmlString
}

// обработчик для добавления товара в корзину
catalog.addEventListener('click', function (e) {
    if (e.target.classList.contains('buy-btn')) {
        cart.addProduct(+e.target.dataset['id'])
        renderCart()
    }
})

// обработчик для очистки корзины
cartBlock.addEventListener('click', function (e) {
    if (e.target.classList.contains('cart-clear')) {
        cart.clear()
        cartBlock.innerHTML = 'Корзина пуста'
            cartCount.innerHTML = 'Корзина пуста'
    }
})

// обработчик для показа содержимого корзины
cartButton.addEventListener('click', function (e) {
    cartBlock.classList.toggle('invisible')
    setTimeout(function(){cartBlock.classList.add('invisible')}, 10000)
})


// добавление новых товаров в ассортимент магазина
arrProducts.push(new Product(1, 'Тостер', 'Бытовая техника', 2000))
arrProducts.push(new Product(2, 'Кофеварка', 'Бытовая техника', 1000))
arrProducts.push(new Product(3, 'Телевизор', 'Электроника', 35000))
arrProducts.push(new Product(4, 'Принтер', 'Электроника', 6000))
arrProducts.push(new Product(5, 'Роутер', 'Электроника', 4000))

showProducts()