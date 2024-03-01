/**
 * Class for creating and managing a progress bar.
 *
 * @class
 * @classdesc This class represents a progress bar that can be animated and customized.
 */
class ProgressBar {
  // Private properties
  #rootHtmlElement = document.querySelector(':root');
  #progressBarHtmlElement = null;

  #progress = null;
  #duration = null;
  #color = null;
  #width = null;
  #isAnimate = false;
  #isHidden = false;

  /**
   * Constructs a new ProgressBar instance.
   * 
   * @constructor
   * @param {string} progressBar - Selector for the progress bar element.
   * @param {object} options - Options for configuring the progress bar.
   * @param {number} [options.progress=25] - Initial progress value (percentage).
   * @param {number} [options.duration=2] - Animation duration in seconds.
   * @param {string} [options.color='#4741F8'] - Color of the progress bar.
   * @param {number} [options.width=25] - Width of the progress bar.
   * @param {boolean} [options.isAnimate=false] - Flag indicating whether animation is enabled.
   * @param {boolean} [options.isHidden=false] - Flag indicating whether the progress bar is hidden.
   */
  constructor(progressBar, {
    progress = 25,
    duration = 2,
    color = '#4741F8',
    width = 25,
    isAnimate = false,
    isHidden = false,
  }) {
    // Initialize DOM element for the progress bar
    this.#progressBarHtmlElement = document.querySelector(progressBar);
    if (!this.#progressBarHtmlElement) {
      console.error(`Progress bar element not found with selector: ${progressBar}`);
    }

    // Initialize progress bar properties
    this.setProgress(progress);
    this.changeDuration(duration);
    this.changeColor(color);
    this.changeWidth(width);
    this.isAnimate = isAnimate;
    this.isHidden = isHidden;
    this.isAnimate && this.animateToggle();
    this.isHidden && this.hideToggle();
  }

  /**
   * Toggles animation for the progress bar.
   */
  animateToggle = () => {
    this.#progressBarHtmlElement && this.#progressBarHtmlElement.classList.toggle('spin');
  }

  /**
   * Toggles visibility of the progress bar.
   */
  hideToggle = () => {
    this.#progressBarHtmlElement && this.#progressBarHtmlElement.classList.toggle('hide');
  }
  
  /**
   * Sets the progress value of the progress bar.
   * 
   * @param {number} progress - Progress value (percentage).
   */
  setProgress = (progress) => {
    this.#progress = progress;
    this.#rootHtmlElement && this.#rootHtmlElement.style.setProperty('--process-procent', `${this.#progress}%`);
  }

  /**
   * Changes the animation duration of the progress bar.
   * 
   * @param {number} duration - Animation duration in seconds.
   */
  changeDuration = (duration) => {
    this.#duration = duration;
    this.#rootHtmlElement && this.#rootHtmlElement.style.setProperty('--duration-spin', `${this.#duration}s`);
  }

  /**
   * Changes the color of the progress bar.
   * 
   * @param {string} color - Color value in hexadecimal or CSS color name.
   */
  changeColor = (color) => {
    this.#color = color;
    this.#rootHtmlElement.style.setProperty('--accent-color', this.#color);
  }

  /**
   * Changes the width of the progress bar.
   * 
   * @param {number} width - Width value in pixels.
   */
  changeWidth = (width) => {
    this.#width = width;
    this.#rootHtmlElement.style.setProperty('--progress-width', `${151 - this.#width}px`);
  }
}

export default ProgressBar;