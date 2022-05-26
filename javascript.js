// Sets important constants and variables

const container = document.getElementById("gridContainer");

let gridSize = 16;
let numOfPixels = gridSize * gridSize;

function createDivs (gridSize) {
    for (let i = 0; i < numOfPixels; i++) {
        let row = document.createElement("div");
        row.setAttribute('id', 'cells');
        row.addEventListener('mouseover', function (event) {
            event.target.style.backgroundColor = "purple";
            console.log("In");
          });

        container.appendChild(row);
    }
}

createDivs();



