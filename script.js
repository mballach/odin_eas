const main = document.querySelector('.main')
const sketch = document.querySelector('.sketch')
const newAdd = document.createDocumentFragment()
const clrButton = document.querySelector('.clearbutton')

clrButton.addEventListener("click",clearButton);

function pixelActive(e){
    e.target.style.backgroundColor="black";
}


function generatePad(x=100) {
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
    sketch.innerHTML="";
    let newSize = prompt("Please enter your new size")
    while (newSize>100){
        newSize = prompt("Please enter a number less than 100")
    }
    generatePad(newSize);

}

