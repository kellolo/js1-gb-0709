let goodsCart = [{

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

console.log(`Суммарная стоимость товаров в корзине: ${totalPrice(goodsCart)} руб.`);