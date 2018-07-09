import "../content.css";

export default class ProgressBar {
  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("myProgress");
    this.progress = document.createElement("div");
    this.progress.classList.add("myBar");
    this.container.appendChild(this.progress);
  }

  get element() {
    return this.container;
  }

  setProgress(value) {
    if (value >= 0 && value <= 100) this.progress.style.width = value + "%";
  }

  dismiss() {
    this.container.remove();
  }
}
