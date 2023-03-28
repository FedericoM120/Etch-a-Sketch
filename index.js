//const div = document.createElement('div');
//document.body.appendChild(div);

const mainClass = document.querySelector('.mainClass');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++){
        const div = document.createElement("div");
        mainClass.appendChild(div);

    }    
}


div.style.border = "black"