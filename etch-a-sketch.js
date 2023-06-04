const body = document.querySelector("body")
const container = document.querySelector(".container");
container.className = "container";

function createGrid(number) {
    for(let i = 0; i < number; i++) {
        const row = document.createElement("div");
        row.classList.add("cell");
        for(let j = 0; j < number; j++) {
            const column = document.createElement("div");
            column.classList.add("cell");
            row.appendChild(column);
        }
        container.appendChild(row);
    }
}



createGrid(16);