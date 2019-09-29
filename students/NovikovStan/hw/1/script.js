function convert(Tc) {
    var Tf = (9/5)*Tc + 32;
    console.log(Tc + ' celsius is ' + Tf + ' fahrenheit.');
}

window.onload = function start() {
    var Tc = +prompt('Enter temperature(celsius):');
    convert(Tc);

    var admin;
    var name = 'Василий';
    admin = name;
    console.log('admin: ' + admin + ' name: ' + name);
    
}