let gridSize = 16;
let color = "black";
/* display initial slider value */
const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
const gridElements = document.querySelectorAll(".grid-square");
output.innerHTML = "Grid size: " + slider.value + "x" + slider.value;

function main() {
    createGrid(gridSize);
    draw();
    resetButton();
    updateGrid();
    clearGridSquare();
}

/* update grid size according to slider value */
function updateGrid() {
    slider.addEventListener("input", function () {
        gridSize = slider.value;
        output.innerHTML = "Grid size: " + slider.value + "x" + slider.value;;
        clearGrid();
        createGrid(gridSize);
        draw();
        clearGridSquare();
    });
}

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
/* clears out the whole grid */
function clearGrid() {
    const gridElements = document.querySelectorAll(".grid-square");
    for (let i = 0; (el = gridElements[i]); i++) {
        el.parentNode.removeChild(el);
    }
}

function resetButton() {
    document.querySelector(".reset-btn").addEventListener("click", function () {
        clearGrid();
        createGrid(gridSize);
        draw();
        clearGridSquare();
    });
}

/* clears out an individual grid square */
function clearGridSquare() {
    const gridElements = document.querySelectorAll(".grid-square");
    for (let i = 0; (el = gridElements[i]); i++) {
        el.addEventListener("contextmenu", function (event) {
            event.preventDefault();
            gridElements[i].style.backgroundColor = "lightgrey";
        });
        el.addEventListener("mouseover", function (e) {
            if (e.buttons & 2) {
                gridElements[i].style.backgroundColor = "lightgrey";
            }
        });
    }
}

function pickColor() {
    document.querySelector(".color-picker").addEventListener("input", function () {
        color = this.value;
    });
}

function draw() {
    pickColor();
    const gridElements = document.querySelectorAll(".grid-square");
    for (let i = 0; (el = gridElements[i]); i++) {
        el.addEventListener("mousedown", function (e) {
            e.preventDefault();
            gridElements[i].style.backgroundColor = `${color}`;
        });
        el.addEventListener("mouseover", function (e) {
            e.preventDefault();
            if (e.buttons & 1) {
                gridElements[i].style.backgroundColor = `${color}`;
            }
        });
    }
}

main();