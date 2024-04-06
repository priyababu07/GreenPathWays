// You can add any JavaScript functionality here if needed
// For example, you can update the progress bar value dynamically
const progressValue = document.querySelector('.progress-value');
const progressTime = document.querySelector('.progress-time');

// Simulating a countdown timer
let timeLeft = 3 * 60 * 60 + 11 * 60; // 3 hours and 11 minutes in seconds

function updateProgressBar() {
  const totalTime = 3 * 60 * 60 + 11 * 60; // Total time in seconds
  const percentage = ((totalTime - timeLeft) / totalTime) * 100;
  progressValue.style.width = `${percentage}%`;

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  progressTime.textContent = `${hours} hours ${minutes} minutes ${seconds} seconds left`;

  timeLeft--;

  if (timeLeft >= 0) {
    setTimeout(updateProgressBar, 1000);
  }
}

updateProgressBar();