var obj = {
  digits: 0,
  decimals: 0,
  hundreds: 0,
  convert: function(num) {
      this.digits = num % 10;
      this.decimals = (num - this.digits) % 100 / 10;
      this.hundreds = (num - this.decimals * 10 - this.digits) % 1000 / 100;
  },

  display: function() { 
      console.log(`Сотни: ${this.hundreds}, десятки: ${this.decimals}, единицы: ${this.digits}`);
  }
};

var number = Math.floor(Math.random(10)*1000 - 1);
console.log(`Исходное число: ${number}`);

obj.convert(number);
obj.display();
