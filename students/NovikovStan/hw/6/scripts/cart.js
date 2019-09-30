const items = [
  "Notebook",
  "Display",
  "Keyboard",
  "Mouse",
  "Phones",
  "Microphone"
];
const prices = [1000, 200, 20, 10, 25, 10];
const ids = [1, 2, 3, 4, 5, 6];
var products = createDTO();
var cart = [];

window.onload = function() {
  var productTable = document.querySelector(".products");

  for (let i = 0; i < products.length; i++) {
    productTable.innerHTML += ` <div class="product-item">
                                    <img src="img/cascade_cat${i +
                                      1}.jpg" alt="js logo">
                                    <div class="desc">
                                        <p>Товар: ${products[i].name}</p> 
                                        <p>Цена: ${products[i].price}</p> 
                                        <button class="buy-btn" onclick="addToCart(cart, ${
                                          products[i].id
                                        })">Купить</button>
                                    </div>
                                </div>`;
    // Вопрос 1. Тут очень странная штука, если передавать cart в addToCart через ${cart}, то это не работает. Почему?
    // <button class="buy-btn" onclick="addToCart(cart, ${products[i].id})">Купить</button>
    // Для чего мы вообще используем атрибут cart в функциях? Можем передавать только id товара, т.к. cart глобальная.
    // Вопрос 2. Почему в этом цикле нельзя сразу применить querySelector('.buy-btn') и сразу поработать с 
    // конкретной созданной кнопкой. Пробовал разные вариации, отклика на событие вообще нет. Может что-то не так делаю.
    // Вопрос 3(глобальный). Для чего мы во все функции передаем параметр cart?  
  }
  document.querySelector(".btn-cart").addEventListener("click", function() {
    document.querySelector(".cart-block").classList.toggle("invisible");
    drawCart(cart);
  });
};

function createProduct(index) {
  return {
    id: index,
    name: items[index],
    price: prices[index]
  };
}

function createDTO() {
  let arr = [];
  for (let i = 0; i < ids.length; i++) {
    arr.push(createProduct(i));
  }
  return arr;
}

function drawCart(cart) {
  var cartBlock = document.querySelector(".cart-block");
  cartBlock.innerHTML = "";
  if (cart.length != 0) {
    cartBlock.innerHTML += `Ваши покупки: <hr>`;
    for (let i = 0; i < cart.length; i++) {
      cartBlock.innerHTML += `<p>${cart[i][0].name}: ${cart[i][0].price * cart[i][1]}</p>`;
    }
    cartBlock.innerHTML += `<hr> Итоговая сумма: ${calcSum(cart)}`;
  } else cartBlock.innerHTML += `<p>Ваша корзина пуста :(</p>`;
}

function addToCart(cart, id) {
  console.log("addToCart happened");
  var itemNumber = -1;
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      for (let j = 0; j < cart.length; j++) {
        if (cart[j][0].id === id) {
          itemNumber = j;
          break;
        }
      }
      itemNumber < 0 ? cart.push([products[i],1]) : cart[itemNumber][1]++;  
      break;
    }
    
  }
  
  drawCart(cart);
}


// Доделать
// function removeFromCart(cart, id) {
//   for (let i = 0; i < cart.length; i++) {
//     if (cart[i].id === id) {
//       cart.splice(i, 1);
//     }
//   }
// }

function resetCart(cart) {
  cart = [];
  drawCart();
}

function calcSum(cart) {
  let sum = 0;

  cart.forEach(el => {
    sum += el[0].price * el[1];
  });
  return sum;
}
