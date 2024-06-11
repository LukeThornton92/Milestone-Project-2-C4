const homeButton = document.getElementById("homeButton");
const rulesButton = document.getElementById("rulesButton");
const playButton = document.getElementById("playButton");
const restartButton = document.getElementById("restartButton");
const homePlayButton = document.getElementById("homePlayButton");
const homeRulesButton = document.getElementById("homeRulesButton");
const switchButton = document.getElementById("switchButton");
const game = document.getElementById("gameScreen");
const home = document.getElementById("homeScreen");
const rules = document.getElementById("rulesScreen");

let playerRed = "Red";
let playerYellow = "Yellow";
let currPlayer = playerRed;
let scoreRed = 0;
let scoreYellow = 0;

let gameOver = false;
let board;
let currColumns;

let isBlocked = false;

const rows = 6;
const columns = 7;

// should remove webaddress on phones.
window.addEventListener("load", function () {
  setTimeout(function () {
    // This hides the address bar:
    window.scrollTo(0, 1);
  }, 0);
});

//----------- Swal modul -----------

function screenSize() {
  if (window.innerWidth < 484 && !isBlocked) {
    isBlocked = true;
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "please rotate your device to play!",
      showConfirmButton: false,
      allowOutsideClick: false,
    });
  } else if (isBlocked && window.innerWidth >= 484) {
    isBlocked = false;
    Swal.fire({
      position: "center",
      icon: "success",
      title: "screen size is correct!",
      showConfirmButton: true,
    });
  }
}

window.addEventListener("resize", () => {
  screenSize();
});
//----------- Buttons -----------//
//----------- Eventlistener - Show Home -----------

homeButton.addEventListener("click", (e) => {
  showElement(home);
});

//----------- Eventlistener - Show Game -----------

playButton.addEventListener("click", (e) => {
  showElement(game);
});

//----------- Eventlistener - Show Rules -----------

rulesButton.addEventListener("click", (e) => {
  showElement(rules);
});
homeRulesButton.addEventListener("click", (e) => {
  showElement(rules);
});

//----------- Eventlistener - Show Game -----------

homePlayButton.addEventListener("click", (e) => {
  showElement(game);
});

//----------- Eventlistener - Swap sides -----------

switchButton.addEventListener("click", () =>
  sideSwap(document.querySelector(".button-container"))
);

//----------- Functions -----------//
//----------- swap side function -----------

function sideSwap(element) {
  if (element.classList.contains("button-container-right")) {
    element.classList.remove("button-container-right");
    element.classList.add("button-container-left");
  } else {
    element.classList.remove("button-container-left");
    element.classList.add("button-container-right");
  }
}

//----------- Hide function -----------

function showElement(element) {
  const elements = [rules, home, game];
  elements.forEach((el) => el.classList.add("hide"));
  element.classList.remove("hide");
}
//----------- Restart Function -----------

restartButton.addEventListener("click", () => {
  gameOver = false;
  setGame();
  clearWinner();
  returnTurn();
});

function clearWinner() {
  let winner = document.getElementById("winner");
  winner.innerText = "";
}

function returnTurn() {
  let pReturn = document.getElementById("currentPlayerText");
  if (pReturn) {
    pReturn.classList.remove("hide");
  }
}
//----------- Game Function -----------//
// Sets the game on the window loading.
window.onload = function () {
  setGame();
  displayCurrentPlayer();
  updateScores();
};

function setGame() {
  // Checks to see if the board has been created, if so removes.
  const boardElement = document.getElementById("board");
  while (boardElement.firstChild) {
    boardElement.removeChild(boardElement.firstChild);
    currPlayer = playerRed;
    displayCurrentPlayer();
  }

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
  checkDrawCondition();
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
          clearWinningPieces(r, c);
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
          clearWinningPieces(r, c);
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
          clearWinningPieces(r, c);
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
          clearWinningPieces(r, c);
        }
      }
    }
  }
}

/* function setWinner(r, c) {
  let winner = document.getElementById("winner");
  if (board[r][c] == playerRed) {
    winner.innerText = "Red Wins!";
  } else {
    winner.innerText = "Yellow Wins!";
  }

  gameOver = true;
  clearWinningPieces(r, c);
} */

function clearWinningPieces(r, c) {
  let winningColor = board[r][c];
  let winningCoordinates = [];

  // Horizontal check
  for (
    let col = Math.max(c - 3, 0);
    col <= Math.min(c + 3, columns - 1);
    col++
  ) {
    if (board[r][col] == winningColor) {
      winningCoordinates.push([r, col]);
    } else {
      winningCoordinates = [];
    }
    if (winningCoordinates.length == 4) break;
  }

  // Vertical check
  if (winningCoordinates.length < 4) {
    winningCoordinates = [];
    for (
      let row = Math.max(r - 3, 0);
      row <= Math.min(r + 3, rows - 1);
      row++
    ) {
      if (board[row][c] == winningColor) {
        winningCoordinates.push([row, c]);
      } else {
        winningCoordinates = [];
      }
      if (winningCoordinates.length == 4) break;
    }
  }

  // Anti-diagonal check
  if (winningCoordinates.length < 4) {
    winningCoordinates = [];
    for (let offset = -3; offset <= 3; offset++) {
      let row = r + offset;
      let col = c + offset;
      if (
        row >= 0 &&
        row < rows &&
        col >= 0 &&
        col < columns &&
        board[row][col] == winningColor
      ) {
        winningCoordinates.push([row, col]);
      } else {
        winningCoordinates = [];
      }
      if (winningCoordinates.length == 4) break;
    }
  }

  // Diagonal check
  if (winningCoordinates.length < 4) {
    winningCoordinates = [];
    for (let offset = -3; offset <= 3; offset++) {
      let row = r - offset;
      let col = c + offset;
      if (
        row >= 0 &&
        row < rows &&
        col >= 0 &&
        col < columns &&
        board[row][col] == winningColor
      ) {
        winningCoordinates.push([row, col]);
      } else {
        winningCoordinates = [];
      }
      if (winningCoordinates.length == 4) break;
    }
  }

  // Clear the winning pieces and drop the above pieces
  if (winningCoordinates.length == 4) {
    winningCoordinates.forEach(([row, col]) => {
      for (let i = row; i >= 0; i--) {
        if (i > 0) {
          board[i][col] = board[i - 1][col];
          let aboveTile = document.getElementById(
            (i - 1).toString() + "-" + col.toString()
          );
          let currentTile = document.getElementById(
            i.toString() + "-" + col.toString()
          );
          if (aboveTile.classList.contains("red-piece")) {
            currentTile.classList.remove("yellow-piece");
            currentTile.classList.add("red-piece");
          } else if (aboveTile.classList.contains("yellow-piece")) {
            currentTile.classList.remove("red-piece");
            currentTile.classList.add("yellow-piece");
          } else {
            currentTile.classList.remove("red-piece", "yellow-piece");
          }
        } else {
          board[i][col] = " ";
          let currentTile = document.getElementById(
            i.toString() + "-" + col.toString()
          );
          currentTile.classList.remove("red-piece", "yellow-piece");
        }
      }
    });

    // Update score
    if (winningColor == playerRed) {
      scoreRed++;
    } else {
      scoreYellow++;
    }

    updateScores();

    gameOver = false; // Ensure the game continues
  }
}

function updateScores() {
  document.getElementById("scoreRed").innerText = "Red: " + scoreRed;
  document.getElementById("scoreYellow").innerText = "Yellow: " + scoreYellow;
}

// Function to check if all tiles are full
function areAllTilesFull() {
  const tiles = document.querySelectorAll("#board .tile");

  for (let tile of tiles) {
    if (
      !tile.classList.contains("red-piece") &&
      !tile.classList.contains("yellow-piece")
    ) {
      return false;
    }
  }

  return true;
}

// Function to check and set draw condition
function checkDrawCondition() {
  let winner = document.getElementById("winner");
  if (areAllTilesFull()) {
    winner.innerText = "Draw!";
    let playerTurnRemove = document.getElementById("currentPlayerText");
    if (playerTurnRemove) {
      playerTurnRemove.classList.add("hide");
    }

    gameOver = true;
  }
}

screenSize();
