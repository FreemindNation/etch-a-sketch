const container = document.querySelector(".container");
container.className = "container";

function createGrid(number) {
    for(let i = 0; i < number; i++) {
        const column = document.createElement("div");
        column.classList.add("cell");
        for(let j = 0; j < number; j++) {
            const row = document.createElement("div");
            row.classList.add("cell");
            column.appendChild(row);
        }
        container.appendChild(column);
    }
}
createGrid(99);