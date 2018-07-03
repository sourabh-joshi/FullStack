var player1score = document.querySelector("#player1score");
var player2score = document.querySelector("#player2score");
var playingTo = document.querySelector("#playingTo");
var playingToMax = document.querySelector("#playingToMax");

var btnPlayer1 = document.querySelector("#btnPlayer1");
var btnPlayer2 = document.querySelector("#btnPlayer2");
var btnReset = document.querySelector("#btnReset");

var p1score = 0;
var p2score = 0;

var winScore = 5;

var isGameOver = false;
function resetScore() {
  p1score = 0;
  p2score = 0;
  player1score.textContent = 0;
  player2score.textContent = 0;
  isGameOver = false;
  player1score.classList.remove("green");
  player2score.classList.remove("green");
}

function addOneToPlayerOne() {
  if (!isGameOver) {
    p1score++;
    if (p1score === winScore) {
      player1score.classList.add("green");
      isGameOver = true;
    }
    player1score.textContent = p1score;
  }
}

function addOneToPlayerTwo() {
  if (!isGameOver) {
    p2score++;
    if (p2score === winScore) {
      player2score.classList.add("green");
      isGameOver = true;
    }
    player2score.textContent = p2score;
  }
}

// function winningScore() {
//     playingToMax.value;
// }

btnReset.addEventListener("click", resetScore);
btnPlayer1.addEventListener("click", addOneToPlayerOne);
btnPlayer2.addEventListener("click", addOneToPlayerTwo);
playingToMax.addEventListener("change", function() {
  winScore = Number(this.value);
  playingTo.textContent = winScore;
  resetScore();
});
