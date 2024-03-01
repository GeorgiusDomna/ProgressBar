import ProgressBar from "./components/ProgressBar/ProgressBar.js";

// DOM manipulation and event listeners for interacting with the progress bar
const progressValue = document.querySelector('#progress_value');
const animateBtn = document.querySelector('#animate');
const hideBtn = document.querySelector('#hide');
const colorValue = document.querySelector('#colorInput');
const optionalBtn = document.querySelector('#optional-settings');
const widthValue = document.querySelector('#width');
const durationValue = document.querySelector('#duration');

// Initialize progress bar instance
const progressBarItem = new ProgressBar('#progressBar', {
  progress: 25,
  duration: 2,
  color: '#4741F8',
  width: 25,
  isAnimate: false,
  isHidden: false,
})

// Event listeners for adjusting progress bar properties
progressValue.addEventListener('input', () => progressBarItem.setProgress(progressValue.value));
durationValue.addEventListener('input', () => progressBarItem.changeDuration(durationValue.value));
colorValue.addEventListener('input', () => progressBarItem.changeColor(colorValue.value));
widthValue.addEventListener('input', () => progressBarItem.changeWidth(widthValue.value));

// Event listeners for toggling animation and visibility of the progress bar
animateBtn.addEventListener('change', progressBarItem.animateToggle);
hideBtn.addEventListener('change', progressBarItem.hideToggle);

// Event listener for toggling optional settings visibility
optionalBtn.addEventListener('click', () => {
  colorValue.parentElement.classList.toggle('optional');
  widthValue.parentElement.classList.toggle('optional');
  durationValue.parentElement.classList.toggle('optional');
});