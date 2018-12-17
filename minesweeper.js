document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = { 

cells: generateCells(3)

};

//console.log(board.cells)
//console.log(board.cells[5])

function startGame () {
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
  board.cells[1].isMine = true;
  board.cells[0].isMine = true;
  board.cells[5].isMine = true;
  for (i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }
}

function generateCells (size) {
  var cells = []
  for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
      cell = {
        row: i,
        col: j,
        isMine: false,
        hidden: true
      } 
      cells.push(cell);
    } 
  } return cells;
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.

console.log(cell)

function countSurroundingMines (cell) {
 var surrounding = lib.getSurroundingCells(cell.row, cell.col) 
 var count = 0
 for (j = 0; j < surrounding.length; j ++) {
   if (surrounding[i].isMine) {
     count ++
    }
   } 
   return count;
} 

var surrounding = console.log(surrounding)
console.log(cell.row, cell.col)