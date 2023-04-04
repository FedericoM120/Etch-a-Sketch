//const div = document.createElement('div');
//document.body.appendChild(div);

const mainClass = document.querySelector('.mainClass');

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
/*ument.getElementsByClassName("block").addEventListener("mouseover", function(e) {
    div.classList.add("colorClass");
} )*/

