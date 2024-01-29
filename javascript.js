const grid = document.querySelector('.container')
let gridSize = 16 //set the default grid size in case a user does not select
const button = document.querySelector('button')

button.addEventListener('click', getGridSize)

// initialize the grid for drawing
drawGrid()

// draw all the cells (pixels), style them and add event listener to change background
function drawGrid () {
    for (let i = 0; i < (gridSize * gridSize); i++) {
    const div = document.createElement('div')
    grid.appendChild(div)
    div.addEventListener('mouseenter', changeBackgroundColor)
    styleCell(div)
    }
}

function styleCell (cell) {
    let cellSize = 960 / gridSize
    cell.style.cssText = `width: ${cellSize}px; 
                        height: ${cellSize}px; 
                        border-style: solid; 
                        border-width: 0px;
                        background-color: orange`
}

// event listener function for when the mouse enters a cell 
function changeBackgroundColor (e) {
    e.target.style.backgroundColor = 'black'
}

// if the user clicks the button to enter grid gridSize, this gets executed.
function getGridSize () {
    do {
        gridSize = parseInt(prompt('Enter the grid size (up to 100): '))
    } while (gridSize <=0 || gridSize > 100)
    clearGrid()
    drawGrid()
}

// need to clear the grid if you resize it otherwise it will just add the new cells to the end of the last one rather than replace them.
function clearGrid () {
    grid.innerHTML = ''
}