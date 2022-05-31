// Sets important constants and variables
const container = document.getElementById("gridContainer");

function startGridProcess () {
    gridSize = prompt("Please enter the length of your desired grid");
    if (isNaN(gridSize)) {
        alert('That is NOT a number. Please enter a number');
    } else if (gridSize > 100) {
        alert('Please enter a number less than 100');
    } else { 
        buildGrid();
    }
}

function buildGrid() {
    removeCells();
    let numOfPixels = gridSize * gridSize;
    for (let i = 0; i < numOfPixels; i++) {
        let row = document.createElement("div");
        row.setAttribute('id', 'cells');
        row.addEventListener('mouseover', function (event) {
            event.target.style.backgroundColor = "purple";
          });
        container.appendChild(row);
    }
    container.setAttribute('style', 'grid-template-columns: repeat('+ gridSize +', 1fr)');
}

function removeCells() {
    while(gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.firstChild);
    }
  }





