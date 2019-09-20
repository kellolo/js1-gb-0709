
let items=  [
    {name:"Процессор Intel Core I7 8700", price:848},
    {name:"Материнская плата ASUS H110M-R/C/SI", price:118},
    {name:"Монитор Dell SE2219H", price:227},
    {name:"Wi-Fi роутер ZYXEL NBG-418N v2", price:47},
    {name:"Принтер Epson L3100 (C11CG88401-N)", price:340},
    {name:"Клавиатура SVEN Standard 307M", price:16},
    ];


let Basket = {
goodList: [],
items_in_basketObj() {
    return this.goodList;
},
/**
 * Общая сумма товаров в корзине
 */
countTotalPrice(){
    let total = 0;
    for(let i = 0; i < this.goodList.length; i++){
        total += (this.goodList[i].price*this.goodList[i].count);
    }
    //console.log("Общая сумма товаров в корзине состовляет: " );
    return total;
},
/**
 * Количество товаров в корзине
 */
countTotalNumber(){
    let total = 0;
    for(let i = 0; i < this.goodList.length; i++){
        total += (this.goodList[i].count);
    }
    //console.log("Количество товаров в корзине: " );
    return total;
},
/**
 * Проверка на существование товаров в корзине
 */
putProduct(prod, count){
    let idx = this.goodList.findIndex(function(elem){
        return elem.name === prod.name;
    });

    if (idx === -1) {
        this.goodList.push(Object.assign({}, prod));
        this.goodList[this.goodList.length - 1].count = count;
    }else{
        this.goodList[idx].count += count;
    }
        
},

printBasketTotalValues() {
    let basketDiv = document.querySelector('#total_div');
    let inputValues = document.querySelectorAll("input");
    let inputCount = +inputValues[i].value;
    
    goodListStr = '<ul>';
    if (this.goodList.length > 0) {
        
        //goodListStr = items_in_basket_List;
        
        goodListStr += `<p>В корзине ${this.countTotalNumber()} товаров на сумму ${this.countTotalPrice()} azn.</p>`
    }
    
    basketDiv.innerHTML = goodListStr;
}
};
/**
* Генерация таблицы витрина с товарами 
* 
*/
function generateTable(){
    let ths = ["Название товаров", "Цена", "Количество", "Добавление в корзину"]; //Загаловки
    let itemsTable = document.getElementById("items_table");

    let table = document.createElement('TABLE'); //Создание таблицы
    table.border = '0';
    table.cellspacing = "0";
    table.cellpadding = "15";
    table.height = "190";
    let tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
    //Создание первой строки для загаловок
    let tr = document.createElement('TR');
    tableBody.appendChild(tr); 

    for (let i = 0; i < 4; i++) {
        let th = document.createElement('TH');
        tr.appendChild(th);
        th.appendChild(document.createTextNode(ths[i])); //Добавление названий загаловок
    }	i=0;
    
    for (let i = 0; i < items.length; i++) { //Создание строк таблицы
        let tr = document.createElement('TR');
        tableBody.appendChild(tr); 
        //Добавление названий товаров в первый столбец
        let td1 = document.createElement('TD');
        td1.width = '350';
        td1.appendChild(document.createTextNode(`${i+1}. ${items[i].name}`));
        tr.appendChild(td1);
        let td2 = document.createElement('TD');
        td2.width = '75';
        td2.align = 'center';
        //Добавление цен во второй столбец
        td2.appendChild(document.createTextNode(`${items[i].price}`));
        tr.appendChild(td2);
        //Добавление количество покупки данного товара в третий столбец
        let td3 = document.createElement('TD');
        td3.width = '50';
        td3.align = 'center';
        input = document.createElement('input');
        input.id = `input${i}`;
        input.type = "number";
        //input.align = "center";
        input.maxvalue= "10";
        //input.size = "4"
        input.value = "1";
        input.min ="1";
        input.style = "width: 48px", align="center";


;
        
        td3.appendChild(input);
        tr.appendChild(td3);
        // Добавление кнопки в последний столбец
        let td4 = document.createElement('TD');
        td4.width = '75';
        td4.align = 'center';
        btn = document.createElement('button');
        btn.id = `btn${i+1}`;
        //let value = document.createTextNode("Добавить в корзину");
        btn.appendChild(document.createTextNode("Добавить в корзину"));
        document.body.appendChild(btn);
        td4.appendChild(btn);
        
            btn.onclick = function(){
            let inputValues = 0;
            inputValues = document.querySelectorAll("input");
            let inputCount = +inputValues[i].value;
            if (inputCount > 0) {
                Basket.putProduct(items[i], inputCount);
                generateBasketStrFromGoodList(items_in_basket);
                Basket.printBasketTotalValues();
            };
            
            };
        tr.appendChild(td4);
}
  this.items_table.appendChild(table);
};


generateTable();


items_in_basket = Basket.items_in_basketObj();
let items_in_basket_List = `<ol>`;
function generateBasketStrFromGoodList(items_in_basket){
items_in_basket_List = `<ol>`;
for (let i = 0; i < items_in_basket.length; i++) {
    
    let currentGood = items_in_basket[i];
    //items_in_basket_List = `<ul>`;
    if (items_in_basket.length > 0) {
        items_in_basket_List += `<li> ${currentGood.name} - ${currentGood.price} azn  - ${currentGood.count} штук</li>`
    } else{
        break;
    }
}
//document.getElementById("items_list").innerText = `<ul>`;

document.getElementById("items_list").innerHTML = items_in_basket_List;
return "";
};

Basket.printBasketTotalValues();



