let gridSize = 16;
/* display initial slider value */
const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
const gridElements = document.querySelectorAll(".grid-square");
output.innerHTML = slider.value + "x" + slider.value;

function main() {
    createGrid(gridSize);
    updateGrid();
    draw();
    clearGridSquare();
}

/* update grid size according to slider value */
function updateGrid() {
    slider.addEventListener("input", function () {
        gridSize = slider.value;
        output.innerHTML = slider.value + "x" + slider.value;;
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
/* clears out an individual grid square */
function clearGridSquare() {
    const gridElements = document.querySelectorAll(".grid-square");
    for (let i = 0; (el = gridElements[i]); i++) {
        el.addEventListener("contextmenu", function (event) {
            event.preventDefault();
            gridElements[i].style.backgroundColor = "white";
        });
        el.addEventListener("mouseover", function (e) {
            if (e.buttons & 2) {
                gridElements[i].style.backgroundColor = "white";
            }
        });
    }
}

function draw() {
    const gridElements = document.querySelectorAll(".grid-square");
    for (let i = 0; (el = gridElements[i]); i++) {
        el.addEventListener("click", function () {
            gridElements[i].style.backgroundColor = "black";
        });
        el.addEventListener("mouseover", function (e) {
            if (e.buttons & 1) {
                gridElements[i].style.backgroundColor = "black";
            }
        });
    }
}

main();