//const div = document.createElement('div');
//document.body.appendChild(div);

const mainClass = document.querySelector('.mainClass');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++){
        const div = document.createElement("div");
        div.classList.add("block");
        div.style.borderColor = "black";
        const textNode = document.createTextNode("hi");
        div.appendChild(textNode);
        mainClass.appendChild(div);
    }    
}
