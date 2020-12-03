'use strict';

// Initial info
let catObj = {
        name: 'Henry',
        type: 'Bengal',
        color: 'Red'
    },
    form = document.forms['catForm'],
    btn = document.querySelector('.select');

btn.onclick = changeCatObj;
form.catName.value = catObj.name;
form.catType.value = catObj.type;
form.catColor.value = catObj.color;
drawCat();

function drawCat() {
    let txt = document.querySelector('.cat-name'),
    img = document.querySelector('.cat-img');

    txt.innerHTML = catObj.name;
    img.src = `images/${catObj.type}-${catObj.color}.jpg`;
}

function changeCatObj() {
    catObj.name = form.catName.value;
    catObj.type = form.catType.value;
    catObj.color = form.catColor.value;

    drawCat();
}