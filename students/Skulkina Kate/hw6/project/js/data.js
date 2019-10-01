const items = ['Подушка', 'Светильник', 'Пуфик', 'Стул', 'Игрушка', 'Цветок']
const prices = [400, 1000, 3000, 2000, 250, 900]
const ids = [1, 2, 3, 4, 5, 6]
const img = ['img/podushka.jpg', 'img/lamp.jpg', 'img/pufic.jpg', 'img/slider1.jpg', 'img/toy.jpg', 'img/flo.jpg']
const product = createDTO()


function createProduct(index) {
    return {
        id: index,
        name: items[index],
        price: prices[index],
        img: img[index]
    }
}

function createDTO() {
    let arr = []
    for (let i = 0; i < ids.length; i++) {
        arr.push(createProduct(i))
    }
    return arr
}

function calk(cart) {
    let sum = 0

    cart.forEach(el => {
        sum += el.price
    })
    return sum
}

function addCatalog() {

    let htmlString = ''

    product.forEach (function(el) {
        htmlString += `    
           <div class="posts-news-wrap">
            <div class="post-main-wrap">
            <img src="${el.img}" class="posts-news-wrap-img" >
            <div class="posts-news-info">
                <h3 class="posts-news-info-title">${el.name} </h3>
                <p class="posts-news-info-paragraf">${el.price} рублей</p>
                <button class = "read-buttom" data-id="${el.id}">Buy</button>
        
            </div>
            </div>
            </div>
            `
    })
    document.querySelector('.blok1-shop-wrap').innerHTML = htmlString
}
addCatalog()

function addproduct(index) {
    console.log ('Вы добавили в корзину: ' + product [index].name)

}
document.querySelector('.blok1-shop-wrap').addEventListener('click', function(e){
    if (e.target.classList.contains ('read-buttom')) {
        addproduct (+e.target.dataset ['id'])
    }
})
//     function name_shop() {
//         let name = document.querySelector('.posts-news-info-title')
//         items.forEach(item => {
//             name.innerHTML = item
//         })
//         return name
//     }


//     function name_price() {
//         let price = document.querySelector('.posts-news-info-paragraf')
//         prices.forEach(el => {
//             price.innerHTML = el
//         })
//         return price
//     }