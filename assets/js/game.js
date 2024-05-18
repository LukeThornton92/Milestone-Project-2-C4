let playerRed = "R";
let playerYellow = "Y";
let currPlayer = playerRed;

let gameOver = false;
let board;
let currColumns;

const rows = 6;
const columns = 7;

//sets the game on the window loading.
window.onload = function () {
  setGame();
};

function setGame() {
  board = [];
  currColumns = [5, 5, 5, 5, 5, 5, 5]; //setting column height as 5 (the bottom)

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
  //strings to numbers
  let r = parseInt(coords[0]);
  let c = parseInt(coords[1]);

  //checks if column is full
  r = currColumns[c];
  if (r < 0) {
    return;
  }

  board[r][c] = currPlayer;
  let tile = document.getElementById(r.toString() + "-" + c.toString());
  if (currPlayer == playerRed) {
    tile.classList.add("red-piece");
    currPlayer = playerYellow;
  } else {
    tile.classList.add("yellow-piece");
    currPlayer = playerRed;
  }

  r -= 1; //updating row height for the column
  currColumns[c] = r; //updates the Array

  checkWinner();
}

function checkWinner() {
  //horizontal check
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns - 3; c++) {
      if (board[r][c] != " ") {
        if (
          board[r][c] == board[r][c + 1] &&
          board[r][c + 1] == board[r][c + 2] &&
          board[r][c + 2] == board[r][c + 3]
        ) {
          setwinner(r, c);
          return;
        }
      }
    }
  }
  //Vertical check
  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows - 3; r++) {
      if (board[r][c] != " ") {
        if (
          board[r][c] == board[r + 1][c] &&
          board[r + 1][c] == board[r + 2][c] &&
          board[r + 2][c] == board[r + 3][c]
        ) {
          setwinner(r, c);
          return;
        }
      }
    }
  }
}

function setwinner(r, c) {
  let winner = document.getElementById("winner");
  if (board[r][c] == playerRed) {
    winner.innerText = "Red Wins!";
  } else {
    winner.innerText = "Yellow Wins!";
  }

  gameOver = True;
}
