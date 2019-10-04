function makeRoulette(){
    htmlString = ''
    imgs.forEach(el => {
        htmlString += `
        <img src="${el}" alt="">
         `
    })
    document.querySelector('.gallery-show').innerHTML = htmlString
    document.querySelector ('.gallery').classList.toggle ('none')
}

function renderGallery(){
    makeRoulette()
}

function showGallery(){

}

function showImg(){

}

function squanderRight(){

}

function squanderLeft(){

}

document.querySelector ('.products').addEventListener ('click', function (e) {
    if (e.target.tagName === ('IMG')) {
        renderGallery()
    }
})