const words = [
  "html",
  "css",
  "javascript",
  "react",
  "node",
  "array",
  "object",
  "function",
  "event",
  "promise",
  "async",
  "await",
  "frontend",
  "backend",
  "cookie",
  "session",
  "dom",
  "render",
  "variable",
  "loop",
];

const wordEl = document.getElementById("word");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const startBtn = document.getElementById("start-btn");

let score = 0;
let timeLeft = 60;
let timerId = null;
let currentWord = "";
let isPlaying = false;

function randomWord() {
  const idx = Math.floor(Math.random() * words.length);
  return words[idx];
}

function showNewWord() {
  currentWord = randomWord();
  wordEl.textContent = currentWord;
}

function updateScore() {
  scoreEl.textContent = `Score: ${score}`;
}

function updateTime() {
  timeEl.textContent = `Time: ${timeLeft}`;
}

function stopGame() {
  isPlaying = false;
  inputEl.disabled = true;
  inputEl.value = "";
  clearInterval(timerId);
  timerId = null;

  wordEl.textContent = `Game Over! Final Score: ${score}`;
  startBtn.textContent = "Start Game";
}

function startGame() {
  score = 0;
  timeLeft = 60;
  isPlaying = true;

  updateScore();
  updateTime();
  showNewWord();

  inputEl.disabled = false;
  inputEl.focus();
  inputEl.value = "";

  startBtn.textContent = "Restart";
  clearInterval(timerId);

  timerId = setInterval(() => {
    timeLeft--;
    updateTime();

    if (timeLeft <= 0) {
      stopGame();
    }
  }, 1000);
}

startBtn.addEventListener("click", () => {
  startGame();
});

inputEl.addEventListener("input", () => {
  if (!isPlaying) return;

  if (inputEl.value.trim().toLowerCase() === currentWord.toLowerCase()) {
    score++;
    updateScore();
    showNewWord();
    inputEl.value = "";
  }
});
