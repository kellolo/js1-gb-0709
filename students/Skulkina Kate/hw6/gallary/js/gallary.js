const gallary = document.querySelector('.gallary')
const main = document.querySelector('.main')
const roulette = document.querySelector('#roulette')

let counter = 1

window.onload = function () {
    let htmlStr = ''
    for (let i = 1; i <= 6; i++) {
        htmlStr += `<img src="img/${i}.jpg" alt="${i}">`
    }
    roulette.innerHTML = htmlStr
}

gallary.addEventListener('click', function (event) {
    if (event.target.tagName === 'IMG' && event.target.parentElement.id === 'roulette') {
        main.src = event.target.src
        counter =+event.target.alt
    } else if (event.target.classList.contains('button')) {
         if (event.target.id === 'left' && counter === 1) counter = 6
         if (event.target.id === 'right' && counter === 6) counter = 0

        main.src = `img/${counter += +event.target.dataset['step']}.jpg`
    }
})