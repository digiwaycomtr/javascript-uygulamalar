function showToast(message, duration = 5000, type = "") {
  const container = document.getElementById("toast-container");

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;

  const progress = document.createElement("div");
  progress.className = "progress";
  progress.style.animationDuration = `${duration}ms`;

  toast.appendChild(progress);
  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, duration);
}
