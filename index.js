var elements = document.getElementsByClassName("tiles");
var player1 = document.getElementsByClassName("player1");
var player2 = document.getElementsByClassName("player2");
var start = document.getElementsByClassName("start");
var input1 = null;
var input2 = null;
var counter = 0;
var currentPlayer = "X";
const gameState = Array(9).fill(null);


start[0].addEventListener("click", () => {
  player1[0].innerHTML = prompt("Enter player 1 name:");
  player2[0].innerHTML = prompt("Enter player 2 name:");
  input1 = prompt("Enter player 1 choice (X/O):");
  input2 = input1 === "X" ? "O" : "X";

  currentPlayer = input1; // Initialize the first player to start the game
  playTheGame();
});

function playTheGame() {
  for (let i = 0; i < 9; i++) {
    elements[i].addEventListener("click", () => {
      if (!gameState[i]) {
        elements[i].innerHTML = currentPlayer;
        gameState[i] = currentPlayer;
        counter++;
        if (checkWin()) {
          alert(`${currentPlayer} wins!`);
          resetGame();
        } else if (counter === 9) {
          alert("It's a draw!");
          resetGame();
        } else {
          currentPlayer = currentPlayer === input1 ? input2 : input1;
        }
      }
    });
  }
}

function checkWin() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const condition of winConditions) {
    const [a, b, c] = condition;
    if (
      gameState[a] &&
      gameState[a] === gameState[b] &&
      gameState[a] === gameState[c]
    ) {
      return true;
    }
  }
  return false;
}

function resetGame() {
  gameState.fill(null);
  for (let i = 0; i < 9; i++) {
    elements[i].innerHTML = "";
  }
  counter = 0;
  currentPlayer = input1;
}
