let startTime = null;
let timerInterval = null;

const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const subjectInput = document.getElementById("subject");
const sessionList = document.getElementById("sessionList");

startBtn.addEventListener("click", () => {
  if (!subjectInput.value) {
    alert("Vul een onderwerp in");
    return;
  }

  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 1000);

  startBtn.disabled = true;
  stopBtn.disabled = false;
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerInterval);

  const durationMs = Date.now() - startTime;
  const minutes = Math.floor(durationMs / 60000);

  const li = document.createElement("li");
  li.textContent = `${subjectInput.value} – ${minutes} minuten`;
  sessionList.appendChild(li);

  timerEl.textContent = "00:00";
  subjectInput.value = "";

  startBtn.disabled = false;
  stopBtn.disabled = true;
});

function updateTimer() {
  const elapsed = Date.now() - startTime;
  const seconds = Math.floor(elapsed / 1000) % 60;
  const minutes = Math.floor(elapsed / 60000);

  timerEl.textContent =
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0");
}
