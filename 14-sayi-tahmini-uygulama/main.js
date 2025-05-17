let randomNumber;
let attempts = 0;
let maxAttempts = 0;

const maxAttemptsInput = document.getElementById("max-attempts-input");
const startBtn = document.getElementById("start-btn");
const setupSection = document.getElementById("setup-section");
const gameSection = document.getElementById("game-section");
const resultPanel = document.getElementById("result-panel");

const guessInput = document.getElementById("guess-input");
const submitBtn = document.getElementById("submit-btn");
const feedback = document.getElementById("feedback");
const attemptsText = document.getElementById("attempts");
const remainingText = document.getElementById("remaining");
const restartBtn = document.getElementById("restart-btn");

startBtn.addEventListener("click", startGame);
submitBtn.addEventListener("click", checkGuess);
restartBtn.addEventListener("click", restartGame);

function startGame() {
  maxAttempts = Number(maxAttemptsInput.value);

  if (maxAttempts < 1 || isNaN(maxAttempts)) {
    alert("Lütfen geçerli bir tahmin hakkı girin.");
    return;
  }

  randomNumber = Math.floor(Math.random() * 10) + 1;
  attempts = 0;
  setupSection.style.display = "none";
  gameSection.style.display = "block";
  updateUI();
}

function updateUI() {
  attemptsText.textContent = `Deneme: ${attempts}`;
  remainingText.textContent = `Kalan hak: ${maxAttempts - attempts}`;
}

function checkGuess() {
  const userGuess = Number(guessInput.value);

  if (userGuess < 1 || userGuess > 100) {
    feedback.textContent = "Lütfen 1 ile 100 arasında bir sayı girin.";
    return;
  }
  attempts++;

  if (userGuess < randomNumber) {
    feedback.textContent = "Daha büyük bir sayı dene!";
  } else if (userGuess > randomNumber) {
    feedback.textContent = "Daha küçük bir sayı dene!";
  } else {
    resultPanel.style.display = "none";
    feedback.textContent = `🎉 Tebrikler! ${randomNumber} sayısını ${attempts} denemede buldun.`;
    updateUI();
    endGame();
    return;
  }

  updateUI();

  if (attempts >= maxAttempts && userGuess !== randomNumber) {
    resultPanel.style.display = "none";
    feedback.textContent = `😞 Üzgünüm, hakkın bitti. Doğru sayı ${randomNumber}'di.`;
    endGame();
  }

  guessInput.value = "";
}

function endGame() {
  submitBtn.disabled = true;
  guessInput.disabled = true;
  restartBtn.style.display = "inline-block";
}

function restartGame() {
  setupSection.style.display = "block";
  gameSection.style.display = "none";
  resultPanel.style.display = "block";
  feedback.textContent = "";
  guessInput.value = "";
  guessInput.disabled = false;
  submitBtn.disabled = false;
  restartBtn.style.display = "none";
  maxAttemptsInput.value = "";
}
