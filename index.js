const mainClass = document.querySelector('.mainClass');
const button = document.querySelector('#myButton');



function gridSize(size) {
    mainClass.innerHTML = "";
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++){
            const div = document.createElement("div");
            div.classList.add("block");
            div.style.border = "medium solid black"
            div.style.borderColor = "black";
            const textNode = document.createTextNode("\u00A0");
            div.appendChild(textNode);
            mainClass.appendChild(div);
            
        }    
    }
    const blocks = document.querySelectorAll('.block');
    for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener("mouseover", function(e) {
        e.target.classList.add("colorClass");
    })
}
}

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++){
        const div = document.createElement("div");
        div.classList.add("block");
        div.style.border = "medium solid black"
        div.style.borderColor = "black";
        const textNode = document.createTextNode("\u00A0");
        div.appendChild(textNode);
        mainClass.appendChild(div);
        
    }    
}

const blocks = document.querySelectorAll('.block');
for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener("mouseover", function(e) {
        e.target.classList.add("colorClass");
    })
}



const buttonSelector = document.querySelector('button');

function ask() {
    var size = prompt("How large should the grid be?");
    gridSize(size);
}