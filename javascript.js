// const container div 
const grid = document.querySelector('.container')
let gridSize = 16
let cellSize = 960 / gridSize
// loop gridSize for cells
for (let i = 0; i < (gridSize * gridSize); i++) {
    const div = document.createElement('div')
    div.setAttribute('class', 'cell')
    grid.appendChild(div)
    div.addEventListener('mouseenter', changeBackgroundColor)
}
// div.style.cssText = `width: ${cellSize}; 
// height: ${cellSize}; 
// border-style: solid; 
// background-color: orange`
// (gridSize * gridSize)
// create element 
// place Element
// addEventListener for entering or exiting cellSize

// function for changing background color 
//     change color 
function changeBackgroundColor (e) {
    e.target.style.backgroundColor = 'black'
}
