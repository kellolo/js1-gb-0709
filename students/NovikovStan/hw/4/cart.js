// В этой версии скрипта при добавлении/удалении товара производится обновление всей корзины
var cartArray = [];
var cartArea = document.getElementsByClassName("cartArea");
var cartItems = document.getElementsByClassName("cartItems");
var addItem = document.getElementsByClassName("addItem");
var removeItem = document.getElementsByClassName("removeItem");
var clearCartBtn = document.getElementsByClassName("clearCartBtn");
var purchaseResult = document.getElementsByClassName("purchaseResult");

// Парсим товары в массив
var goods = document.getElementsByClassName("product");
// console.log(goods[0].children);

cartVisibility();

// Если корзина пустая, убедимся, что ее не видно. Если не пустая, убедимся, что ее видно.
function cartVisibility() {
  if (cartArray.length == 0) {
    if (!cartArea[0].classList.contains("no__display")) {
      cartArea[0].classList.add("no__display");
    }
  } else {
    if (cartArea[0].classList.contains("no__display")) {
      cartArea[0].classList.remove("no__display");
    }
  }
}

function cartRefresh() {
  cartVisibility();
  cartItems[0].innerHTML = "";
  var cartResult = 0;
  for (let i = 0; i < cartArray.length; i++) {
    var cartItem = document.createElement("div");
    cartItem.classList.add("cartItem");
    var cartItemName = document.createElement("p");
    cartItemName.innerText = cartArray[i][0];
    cartItem.appendChild(cartItemName);
    var cartItemPrice = document.createElement("p");
    cartItemPrice.innerText = cartArray[i][1];
    cartItem.appendChild(cartItemPrice);
    cartItems[0].appendChild(cartItem);
    cartResult += cartArray[i][1];
  }
  purchaseResult[0].innerText = cartResult;
}

clearCartBtn[0].addEventListener("click", function cartClear() {
  cartArray = [];
  cartRefresh();
});

if (addItem.length != 0) {
  //Проверяем, есть ли кнопки "+"
  for (let i = 0; i < addItem.length; i++) {
    addItem[i].addEventListener("click", function addItem(event) {
      // Привязываем функцию на клик по кнопкам с "+"
      for (let j = 0; j < goods.length; j++) {
        if (goods[j] == this.parentNode) {
          // Проверяем, что кнопка принадлежит блоку с товаром

          var itemName = this.parentNode.getElementsByClassName(
            "productName"
          )[0].innerText; // Парсим имя товара
          var itemPrice = parseInt(
            this.parentNode.getElementsByClassName("price")[0].innerText
          ); // Парсим стоимость товара
          var itemNumber;

          for (let k = 0; k < cartArray.length; k++) {
            // Проверяем, есть ли такой товар в корзине
            var itemChecker = false;
            if (cartArray[k][0] == itemName) {
              itemChecker = true;
              itemNumber = k;
              break;
            } else {
              itemChecker = false;
            }
          }

          if (itemChecker) {
            // Если товар уже есть в корзине, то увеличиваем стоимость, если нет, то добавляем в корзину
            cartArray[itemNumber][1] += itemPrice;
          } else {
            cartArray.push([itemName, itemPrice]);
          }

          cartRefresh();
          console.log(cartArray);
        }
      }
    });
  }
}

if (removeItem.length != 0) {
  //Проверяем, есть ли кнопки "-"
  for (let i = 0; i < removeItem.length; i++) {
    removeItem[i].addEventListener("click", function removeItem(event) {
      // Привязываем функцию на клик по кнопкам с "+"
      for (let j = 0; j < goods.length; j++) {
        if (goods[j] == this.parentNode) {
          var itemName = this.parentNode.getElementsByClassName(
            "productName"
          )[0].innerText; // Парсим имя товара
          var itemPrice = parseInt(
            this.parentNode.getElementsByClassName("price")[0].innerText
          ); // Парсим стоимость товара
          var itemNumber;

          for (let k = 0; k < cartArray.length; k++) {
            // Проверяем, есть ли такой товар в корзине
            if (cartArray[k][0] == itemName) {
              cartArray[k][1] -= itemPrice;
              if (cartArray[k][1] == 0) {
                cartArray.splice(k,1);
              } 
              cartRefresh();
              break;
            }
          }
        }
      }
    });
  }
}
