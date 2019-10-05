let a = Math.round(Math.random() * 1100);
console.log(a);

function objectNumber(a) {
    if (a > 0 && a <= 999) {
        let b = {
            hundreds() {
                    hundred = Math.floor(a / 100);
                    return hundred;
                }
                , decade() {
                    decade = Math.floor((a - (hundred * 100)) / 10);
                    return decade;
                }
                , unit() {
                    unit = a - ((hundred * 100) + (decade * 10));
                    return unit;
                }
        };
        b.hundreds();
        b.decade();
        b.unit();
        
        console.log(`Сотен: ${hundred}`);
        console.log(`Десятков: ${decade}`);
        console.log(`Единиц: ${unit}`);
    }
    else {
        console.log('Число превышает 999');
        let b = {};
        console.log(b);
    };
};
objectNumber(a);