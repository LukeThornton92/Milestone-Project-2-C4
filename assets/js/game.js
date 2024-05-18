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
      //When a click happens, returns function "setPiece"
      tile.addEventListener("click", setPiece);
      //HTML, appends the above code to the board ID.
      document.getElementById("board").append(tile);
    }
    board.push(row);
  }
}

function setPiece() {
  if (gameOver) {
    return;
  }
  //below, makes the ID = "0-0" readable as an array = ["0","0"]
  let coords = this.id.split("-");
  let r = parseInt(coords[0]);
  let c = parseInt(coords[1]);

  board[r][c] = currPlayer;
  let tile = this;
  if (currPlayer == playerRed) {
    tile.classList.add("red-piece");
  } else {
    tile.classList.add("yellow-piece");
  }
}
