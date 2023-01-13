let gridSize = 16;

function createGrid(gridSize) {
    const container = document.querySelector(".grid-container");
    container.style.setProperty("grid-template-columns", "repeat(" + gridSize + ", 1fr)");
    container.style.setProperty("grid-template-rows", "repeat(" + gridSize + ", 1fr)");
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const gridSquare = document.createElement("div");
            gridSquare.setAttribute("class", "grid-square");
            container.appendChild(gridSquare);
        }
    }
}
createGrid(gridSize);


let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.addEventListener("mouseup", function () {
    gridSize = slider.value;
    output.innerHTML = slider.value;
    createGrid(gridSize);
});