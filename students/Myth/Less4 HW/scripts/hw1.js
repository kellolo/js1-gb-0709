let input_number = +prompt("Введите целое число от 0 до 999");

function numberToObjectConverter(input_number){
    
    let numberInObject = {
    units: 0,
    decimals: 0,
    hundreds: 0
}
    if (input_number > 999 || isNaN(input_number)) {
        console.log("Слишком длинное число :)");
        return {}
    }
    numberInObject.units = input_number % 10;
    numberInObject.decimals = ((input_number % 100)-input_number % 10) / 10;
    numberInObject.hundreds = (input_number - (input_number % 100)) / 100;
    
    return numberInObject;
}

console.log(numberToObjectConverter(input_number));
