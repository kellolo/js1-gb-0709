'use strict';

function init(){
    let htmlStr = '';
    for (let i = 1; i <= 3; i++) {
        htmlStr += `<img src="img/gallery/small/${i}.jpg" data-counter="${i}">`
    }
    
    document.getElementById("gallery").innerHTML = htmlStr;
    document.getElementById("wrapper").innerHTML += `
        <button id="left" class="cmd-btn">left</button>
        <button id="right" class="cmd-btn">right</button>
        `;

    document.getElementById("wrapper").addEventListener (`click`, changeBigPicture);
}

function changeBigPicture(evt){
    if (evt.target.parentElement.id === 'gallery') {
        var appDiv = document.getElementById("big_picture");
        appDiv.innerHTML = "";
        var src = `img/gallery/big/${evt.target.dataset.counter}.jpg`; 
        
        var imageDomElement = document.createElement("img");
        imageDomElement.src = src;
        imageDomElement.dataset[`counter`] = evt.target.dataset[`counter`];
        imageDomElement.onerror = function () {
            appDiv.innerHTML = 'К сожалению, это изображение есть только маленькое:<br>';
            imageDomElement.src = eventElement.src;
            appDiv.appendChild(imageDomElement);
        };
        
        imageDomElement.onload = () => appDiv.appendChild(imageDomElement);

    } else if (evt.target.classList.contains ('cmd-btn')) {
        let counter = +evt.currentTarget.children[0].children[0].dataset['counter'];

        if (evt.target.id === 'left' && counter === 1) {
            counter = 3;
        } else if (evt.target.id === 'right' && counter === 3) {
            counter = 1;
        } else if (evt.target.id === 'right') {
            counter++;
        } else if (evt.target.id === 'left') counter--;

        evt.currentTarget.children[0].children[0].src = `img/gallery/big/${counter}.jpg`;
        evt.currentTarget.children[0].children[0].dataset[`counter`] = counter;
    }
}
	
window.addEventListener("load", init);
