const homeButton = document.getElementById("homeButton");
const home = document.getElementById("gameScreen");
const rules = document.getElementById("rulesScreen");

let playerRed = "Red";
let playerYellow = "Yellow";
let currPlayer = playerRed;

let gameOver = false;
let board;
let currColumns;

const rows = 6;
const columns = 7;

//----------- Game Function -----------//
// Sets the game on the window loading.
window.onload = function () {
  setGame();
  displayCurrentPlayer();
};

function setGame() {
  board = [];
  currColumns = [5, 5, 5, 5, 5, 5, 5]; // Setting column height as 5 (the bottom)

  for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < columns; c++) {
      // JS, pushes empty string.
      row.push(" ");
      // HTML, creates new div element.
      let tile = document.createElement("div");
      // HTML, creates id set to the index position i.e. "1-5" or "5-7".
      tile.id = r.toString() + "-" + c.toString();
      // HTML, creates class="tile" in new div.
      tile.classList.add("tile");
      // When a click happens, returns function "setPiece"
      tile.addEventListener("click", setPiece);
      // HTML, appends the above code to the board ID.
      document.getElementById("board").append(tile);
    }
    board.push(row);
  }
}

function displayCurrentPlayer() {
  let currentP = document.getElementById("currentPlayer");
  currentP.innerText = currPlayer;
}

function setPiece() {
  if (gameOver) {
    return;
  }
  // Below, makes the ID = "0-0" readable as an array = ["0","0"]
  let coords = this.id.split("-");
  // Strings to numbers
  let r = parseInt(coords[0]);
  let c = parseInt(coords[1]);

  // Checks if column is full
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

  r -= 1; // Updating row height for the column
  currColumns[c] = r; // Updates the array

  checkWinner();
  displayCurrentPlayer(); // Update the current player display
}

function checkWinner() {
  // Horizontal check
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns - 3; c++) {
      if (board[r][c] != " ") {
        if (
          board[r][c] == board[r][c + 1] &&
          board[r][c + 1] == board[r][c + 2] &&
          board[r][c + 2] == board[r][c + 3]
        ) {
          setWinner(r, c);
          return;
        }
      }
    }
  }
  // Vertical check
  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows - 3; r++) {
      if (board[r][c] != " ") {
        if (
          board[r][c] == board[r + 1][c] &&
          board[r + 1][c] == board[r + 2][c] &&
          board[r + 2][c] == board[r + 3][c]
        ) {
          setWinner(r, c);
          return;
        }
      }
    }
  }
  // Anti-diagonally
  for (let r = 0; r < rows - 3; r++) {
    for (let c = 0; c < columns - 3; c++) {
      if (board[r][c] != " ") {
        if (
          board[r][c] == board[r + 1][c + 1] &&
          board[r + 1][c + 1] == board[r + 2][c + 2] &&
          board[r + 2][c + 2] == board[r + 3][c + 3]
        ) {
          setWinner(r, c);
          return;
        }
      }
    }
  }
  // Diagonally
  for (let r = 3; r < rows; r++) {
    for (let c = 0; c < columns - 3; c++) {
      if (board[r][c] != " ") {
        if (
          board[r][c] == board[r - 1][c + 1] &&
          board[r - 1][c + 1] == board[r - 2][c + 2] &&
          board[r - 2][c + 2] == board[r - 3][c + 3]
        ) {
          setWinner(r, c);
          return;
        }
      }
    }
  }
}

function setWinner(r, c) {
  let winner = document.getElementById("winner");
  if (board[r][c] == playerRed) {
    winner.innerText = "Red Wins!";
  } else {
    winner.innerText = "Yellow Wins!";
  }

  gameOver = true;
}
//----------- Buttons -----------//

//----------- Hide function -----------

homeButton.addEventListener("click", (element) => {
  showHide(home);
  showHide(rules);
});

function showHide(element) {
  element.classList.contains("hide")
    ? element.classList.remove("hide")
    : element.classList.add("hide");
}

//----------- Restart Function -----------//
