const body = document.querySelector("body")
const container = document.querySelector(".container");
container.className = "container";


const rainbow = document.querySelector("#rainbow");
const eraser = document.querySelector("#eraser");
const clear = document.querySelector("#clear");
const bgdColor = document.querySelector("#bgd-color");

setInterval(()=> { //select and change the background colour of the grid.
    const selectedBgdColor = bgdColor.value
    container.style.backgroundColor = selectedBgdColor
}, 200);

const penColor = document.querySelector("#pen-color");

function getRainbowColors () { //create rainbow colour mode.
    let rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    let randomIndex = Math.floor(Math.random() * rainbowColors.length);
    return rainbowColors[randomIndex];
}

function increaseOpacity (element, by = 0.1) { //create opacity mode.
    element.style.opacity = Math.min(1, +element.style.opacity + by);
}


let flag = false;

window.onmouseup = () => { // check if mouse is clicked.
    flag = false;
}

function createGrid(number) { //create grid.
    for(let i = 0; i < number; i++) {
        const row = document.createElement("div");
        row.classList.add("cell");

        for(let j = 0; j < number; j++) {
            const column = document.createElement("div");
            column.classList.add("cell");
            row.appendChild(column);
            column.addEventListener("mouseover", () => { //set pen colour when mouse is clicked
                let selectedPenColor = penColor.value;
                if(flag) {

                    column.style.backgroundColor = selectedPenColor;
                }
           });
           column.addEventListener("mousedown", () => { // set pen colour when mouse is held down
                let selectedPenColor = penColor.value;
                column.style.backgroundColor = selectedPenColor;
                flag = true;
           });

           rainbow.addEventListener("click", () => { // activate rainbow mode.
            column.addEventListener("mouseover", () => {
                let selectedPenColor = penColor.value;
                if(flag) {

                    column.style.backgroundColor = getRainbowColors();
                }
           });
            column.addEventListener("mousedown", () => {
                let selectedPenColor = penColor.value;
                column.style.backgroundColor = getRainbowColors();
                flag = true;
           });
           });

           opacity.addEventListener ("click", () => { //activate opacity mode.
            column.addEventListener("mouseover", () => {
                let selectedPenColor = penColor.value;
                if(flag) {

                    column.style.backgroundColor = selectedPenColor;
                    increaseOpacity(column);
                }
           });
           column.addEventListener("mousedown", () => {
                let selectedPenColor = penColor.value;
                column.style.backgroundColor = selectedPenColor;
                increaseOpacity(column);
                flag = true;
           });
            
           });

           eraser.addEventListener("click", () => {  //activate eraser mode.
            column.addEventListener("mouseover", () => {
                let selectedPenColor = penColor.value;
                if(flag) {

                    column.style.backgroundColor = "#ffffff";
                }
           });
           column.addEventListener("mousedown", () => {
                let selectedPenColor = penColor.value;
                column.style.backgroundColor = "#ffffff";
                flag = true;
           });
           })

        }
        
        container.appendChild(row);
    }
}

clear.addEventListener("click", () => { //clear everything and reset to default mode.
    location.reload();
});

function clearGrid () { //clear the current before creating a new one.
    const gridElements = Array.from(container.childNodes);
    gridElements.forEach(element => {
        container.removeChild(element);
    });
}

var gridRange = document.querySelector("#grid-range");
var gridSize = document.querySelector("#grid-size");
gridSize.textContent = `${gridRange.value} x ${gridRange.value}`;

gridRange.addEventListener("input", (event)=> { //show the new grid size.
    gridSize.textContent = `${event.target.value} x ${event.target.value}`;
})

gridRange.addEventListener("input", (event) => { // activate the new grid.
    clearGrid();
    createGrid(event.target.value);
});

createGrid(50); //default grid.