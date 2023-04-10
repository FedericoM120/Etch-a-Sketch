const mainClass = document.querySelector('.mainClass');
const button = document.querySelector('#myButton');



function gridSize(size) {
    const itemWidth = 100 / size;
    const itemHeight = 100 / size;

    mainClass.innerHTML = "";
    mainClass.style.setProperty("--size", size);
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++){
            const div = document.createElement("div");
            div.classList.add("block");
            div.style.width = itemWidth + '%';
            div.style.height = itemHeight + '%';
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

gridSize(16);


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