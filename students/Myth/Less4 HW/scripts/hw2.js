
let items =[]

for (let i = 1; i <= 10; i++){
    items.push({id:`${i}`, name:`Жеванный крот${i}`, price:10*`${i}`, quantity:`${i}`})
}

let Basket = {
    userBasket: [],

    createBasket(input_data) {
        for (let i in input_data) {
            this.userBasket.push(input_data[i])
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


