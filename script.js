const container = document.querySelector(".container");


for(let i = 0; i < 256; i++){
    const square = document.createElement("div");
    square.classList.add("square")
    container.appendChild(square);
    square.addEventListener("mouseenter", () => {square.style.backgroundColor = "pink"});
}

const body = document.querySelector("body");
const button = document.createElement("button");
body.insertBefore(button, container);
button.textContent = "Change layout";


function changeLayout(){
let n = Number(prompt("Enter new layout (axa): "));
container.innerHTML = '';
for (let i = 0; i < n * n; i++) {
     const square = document.createElement("div");
     square.classList.add("square");

     const squareSize = 640/n;
     square.style.width = `${squareSize}px`;
     square.style.height = `${squareSize}px`
     square.addEventListener("mouseenter", () => {square.style.backgroundColor = "pink"});
     container.appendChild(square);
}

}

button.addEventListener("click", changeLayout);

const clearButton = document.createElement("button");
clearButton.textContent = "Clear";
body.appendChild(clearButton);
clearButton.addEventListener("click", clearLayout)


function clearLayout(){
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    }
    )
}