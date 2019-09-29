function createChessDesk() {

    let elem = document.querySelector('.desk')
    let startWithWhite = true
    let htmlStr = '';

    for (let i = 1; i <= 64; i++) {

        if (i % 2 == 0 && startWithWhite) {
            htmlStr += '<div class="item-black"></div>'
        } else if (i % 2 == 0 && !startWithWhite) {
            htmlStr += '<div class="item-white"></div>'
        } else if (i % 2 != 0 && startWithWhite) {
            htmlStr += '<div class="item-white"></div>'
        } else if (i % 2 != 0 && !startWithWhite) {
            htmlStr += '<div class="item-black"></div>'
        }

        if (i % 8 == 0) {
            startWithWhite = !startWithWhite
        }

    }
    console.log(htmlStr)
    elem.innerHTML = htmlStr
}

createChessDesk()