let teamA = 0;
let teamB = 0;
let foulsA = 0;
let foulsB = 0;

let quarter = 1;
let time = 360; // 6 minutes

let timerRunning = false;
let interval;

function updateDisplay() {
  document.getElementById("scoreA").textContent = teamA;
  document.getElementById("scoreB").textContent = teamB;
  document.getElementById("foulsA").textContent = foulsA;
  document.getElementById("foulsB").textContent = foulsB;
  document.getElementById("quarter").textContent = quarter;

  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  document.getElementById("timer").textContent =
    `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (timerRunning) return;

  timerRunning = true;

  interval = setInterval(() => {
    if (time > 0) {
      time--;
    } else {
      clearInterval(interval);
      timerRunning = false;

      if (quarter < 4) {
        quarter++;
        time = 360;
      } else {
        alert("Game Over");
      }
    }
    updateDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
  timerRunning = false;
}

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    // scoring
    case "q": teamA += 1; break;
    case "w": teamA += 2; break;
    case "e": teamA += 3; break;

    case "i": teamB += 1; break;
    case "o": teamB += 2; break;
    case "p": teamB += 3; break;

    // fouls
    case "a": foulsA++; break;
    case "k": foulsB++; break;

    // timer
    case " ": startTimer(); break;
    case "s": stopTimer(); break;

    // reset quarter time
    case "r": time = 360; break;
  }

  updateDisplay();
});

// initialize
updateDisplay();
