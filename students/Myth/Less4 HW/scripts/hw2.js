
let items =[
    {id:1, name:"Жеванный крот1", price:10, quantity:1},
    {id:2, name:"Жеванный крот2", price:10, quantity:2},
    {id:3, name:"Жеванный крот3", price:10, quantity:1},
    {id:4, name:"Жеванный крот4", price:10, quantity:1},
    {id:5, name:"Жеванный крот5", price:10, quantity:1},
    {id:6, name:"Жеванный крот6", price:10, quantity:1},
]


let Basket = {
    userBasket: [],

    createBasket(input_json) {
        for (let i in input_json) {
            this.userBasket.push(input_json[i])
        }
        return this.userBasket
    },

    countAllProductsInBasket() {
        let total = 0;
        for (let i = 0; i < this.userBasket.length; i++) {
            total += this.userBasket[i].quantity
        }
        console.log("Количество товаров в корзине: " );
        return total;
    },


    countTotalPrice() {
        let total = 0;
        for (let i in this.userBasket) {
            total += this.userBasket[i].price * this.userBasket[i].quantity ;
        }
        console.log("Общая сумма товаров в корзине состовляет: ");
        return total;
    },
}


