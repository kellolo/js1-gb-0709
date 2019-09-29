const items = [`Notebook`, `Display`, `Keyboard`, `Mouse`, `Phones`, `Microphone`]
const price = [1000, 200, 20, 10, 25, 10]
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

/*let goodsCart = [{

goods1: {
    price: 100, 
    madeIn: `Russia`, 
}
},
{
goods2: {
    price: 200, 
    madeIn: `Russia`, 
}
},
{
goods3: {
    price: 300, 
    madeIn: `Russia`, 
}
},
{
goods4: {
    price: 400, 
    madeIn: `Russia`, 
}
},
{
goods5: {
    price: 500, 
    madeIn: `Russia`, 
}
}
]  
    
function totalPrice(goodsCart) {
  return goodsCart.map(object => Object.values(object)[0].price).reduce((p, c) => p + c);
}

console.log(`Суммарная стоимость товаров в корзине: ${totalPrice(goodsCart)} руб.`);*/