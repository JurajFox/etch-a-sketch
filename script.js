const container = document.querySelector(".container");
const button = document.querySelector(".button")
const width = 500;
container.style.height = container.style.width = width+'px';
var squaresPerSide = 16;
createSketch(squaresPerSide);
function openPrompt(){
    squaresPerSide = prompt("How may squares for grid side?");
    if(squaresPerSide > 100){
        squaresPerSide = prompt("Please input a valid number with maximum value of 100.\nHow may squares for grid side?");
    }
    container.innerHTML = '';
    createSketch(squaresPerSide);
    
}

function createSketch(squaresPerSide){
    for(var i = 0;i <squaresPerSide*squaresPerSide; i++){
        const square = document.createElement("div");
        square.style.height = square.style.width = (width / squaresPerSide)+'px';
        square.style.backgroundColor = "white";
        square.style.opacity = 0;
        square.addEventListener("mouseover", () => {
            
            setRandomColor(square);
        });
        container.appendChild(square);
    }
}

function setRandomColor(element){
    if(element.style.backgroundColor == "white"){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        element.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"; 
    }
    if(element.style.opacity < 1){
        element.style.opacity = parseFloat(element.style.opacity) + 0.1;
    }
    }

