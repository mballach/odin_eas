const main = document.querySelector('.main')
const sketch = document.querySelector('.sketch')
const newAdd = document.createDocumentFragment()
const clrButton = document.querySelector('.clearbutton')

clrButton.addEventListener("click",clearButton);

function pixelActive(e){
    const currentOpacity = +e.target.style.opacity
    e.target.style.opacity = currentOpacity+0.1;
    
}


function generatePad(x=10) {
    for (let i=0;i<x;i++) {
        let newRow = document.createElement('div');
        newRow.setAttribute("class","row")
        for (let j=0;j<x;j++) {
            let newBlock = document.createElement('div');
            newBlock.setAttribute("class","box")
            newBlock.addEventListener("mouseenter",pixelActive);
            newRow.appendChild(newBlock);
        }
        newAdd.appendChild(newRow)
    }
    sketch.appendChild(newAdd)
}

generatePad()

function clearButton(){
    let newSize = prompt("Please enter your new size, up to 100")
    while (newSize>100||newSize<=0){
        newSize = prompt("Please enter a positive number that is less than 100")
    }
    sketch.innerHTML="";
    generatePad(newSize);

}

