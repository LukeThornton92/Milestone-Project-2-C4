let playerRed = "R";
let playerYellow = "Y";
let currPlayer = playerRed;

let gameOver = false;
let board;

const rows = 6;
const columns = 7;

//sets the game on the window loading.
window.onload = function () {
  setGame();
};

function setGame() {
  board = [];

  for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < columns; c++) {
      //JS, pushes empty string.
      row.push(" ");
      //HTML, creates new div element.
      let tile = document.createElement("div");
      //HTML, creates id set to the index postion i.e. "1-5" or "5-7".
      tile.id = r.toString() + "-" + c.toString();
      //HTML, creates class="tile" in new div.
      tile.classList.add("tile");
      tile.addEventListener("click", setPiece)
      //HTML, appends the above code to the board ID.
      document.getElementById("board").append(tile);
    }
    board.push(row);
  }
}

function set