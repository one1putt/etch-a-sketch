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
                        background-color: rgb(255, 255, 255)`
}

// event listener function for when the mouse enters a cell 
function changeBackgroundColor (e) {
    let color = getBackgroundColor(e)
    e.target.style.backgroundColor = color
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

// since we have 10 shades of shading, we get the current shade of gray (or starting point of white) and darken it by 10%. if we get to the tenth Step  we hard code to black
function getBackgroundColor (e) {
    let color = e.target.style.backgroundColor
    let grayShade = parseInt(color.substring(4, 7))
    if (grayShade <= 30) {
        grayShade = 25
    }
    color = `rgb(${grayShade - 25}, ${grayShade - 25}, ${grayShade - 25})`
    return color
}