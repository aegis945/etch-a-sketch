let gridSize = 16;
/*display slider value*/
const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
output.innerHTML = slider.value;
/*update grid size according to slider value*/
slider.addEventListener("mouseup", function () {
    gridSize = slider.value;
    output.innerHTML = slider.value;
    clearGrid();
    createGrid(gridSize);
});

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

function clearGrid() {
    let gridElements = document.querySelectorAll(".grid-square");
    for (let i = 0; (el = gridElements[i]); i++) {
        el.parentNode.removeChild(el);
    }
}

createGrid(gridSize);