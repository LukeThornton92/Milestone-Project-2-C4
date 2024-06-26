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

let gameOver = false;
let board;
let currColumns;

let isBlocked = false;

const rows = 6;
const columns = 7;

/**
 * Checks screen size, if too small brings up Modal requesting screen rotation
 *
 * @returns { void } This function does not return a value.
 */
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

//Show Home
homeButton.addEventListener("click", (e) => {
  showElement(home);
});

//Show Game
playButton.addEventListener("click", (e) => {
  showElement(game);
});

//Show Rules
rulesButton.addEventListener("click", (e) => {
  showElement(rules);
});
homeRulesButton.addEventListener("click", (e) => {
  showElement(rules);
});

//Show Game
homePlayButton.addEventListener("click", (e) => {
  showElement(game);
});

// Swap sides
switchButton.addEventListener("click", () =>
  sideSwap(document.querySelector(".button-container"))
);

/**
 * Swaps buttons from the right to the left and vice versa.
 *
 * @param {HTMLElement} element - Element to toggle
 * @returns {void} This function does not return a value.
 */
function sideSwap(element) {
  if (element.classList.contains("button-container-right")) {
    element.classList.remove("button-container-right");
    element.classList.add("button-container-left");
  } else {
    element.classList.remove("button-container-left");
    element.classList.add("button-container-right");
  }
}

/**
 * Adds "hide" class to all pages and then removes "hide" from selected page.
 * @param {*} element
 */
function showElement(element) {
  const elements = [rules, home, game];
  elements.forEach((el) => el.classList.add("hide"));
  element.classList.remove("hide");
}

restartButton.addEventListener("click", () => {
  gameOver = false;
  setGame();
  clearWinner();
  returnTurn();
});

/**
 * removes winner pop up
 */
function clearWinner() {
  const winner = document.getElementById("winner");
  winner.innerText = "";
}
/**
 * hides current player
 */
function returnTurn() {
  let pReturn = document.getElementById("currentPlayerText");
  if (pReturn) {
    pReturn.classList.remove("hide");
  }
}

// Sets the game on the window loading.
window.onload = function () {
  setGame();
  displayCurrentPlayer();
};

/**
 * sets initial game state
 */
function setGame() {
  // Checks to see if the board has been created, if so removes.
  const boardElement = document.getElementById("board");
  while (boardElement.firstChild) {
    boardElement.removeChild(boardElement.firstChild);
    currPlayer = playerRed;
    displayCurrentPlayer();
  }

  board = [];
  currColumns = [5, 5, 5, 5, 5, 5, 5]; // Setting column height as 5.

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
/**
 * displays the current player text
 */
function displayCurrentPlayer() {
  const currentP = document.getElementById("currentPlayer");
  currentP.innerText = currPlayer;
}

/**
 * Places a tile piece on the game board
 * Checks for winner, checks for draw.
 * If no winners or draws, pushes to next player
 * @returns {void} This function does not return a value.
 */
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

/**
 *  Checks up, down & diagonal lines to see if a tile placement wins game
 */
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

/**
 * Updates the winner text with the current player and ends the game.
 *
 * @param {number} r - The row index of the winning move.
 * @param {number} c - The column index of the winning move.
 * @returns {void} This function does not return a value.
 */
function setWinner(r, c) {
  let winner = document.getElementById("winner");
  if (board[r][c] == playerRed) {
    winner.innerText = "Red Wins!";
  } else {
    winner.innerText = "Yellow Wins!";
  }

  let playerTurnRemove = document.getElementById("currentPlayerText");
  if (playerTurnRemove) {
    playerTurnRemove.classList.add("hide");
  }

  gameOver = true;
}

/**
 * checks to see if all tiles are full
 * @returns { boolean } True if all tiles are filled, otherwise false.
 */
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

/**
 * Pushes "draw" text if all tiles are full and no 4 in a row, ends game.
 */
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
