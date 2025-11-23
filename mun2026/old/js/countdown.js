/* ========================================
   COUNTDOWN TIMER
   SVCEMUN'26 - Modern, Lightweight Countdown
   (Replaces jQuery/GSAP flip animation)
   ======================================== */

class Countdown {
  constructor(targetDate, containerId) {
    this.targetDate = new Date(targetDate).getTime();
    this.container = document.getElementById(containerId);

    if (!this.container) {
      console.error(`Countdown container with ID "${containerId}" not found`);
      return;
    }

    this.init();
    this.start();
  }

  init() {
    // Create countdown HTML structure
    this.container.innerHTML = `
      <div class="countdown-wrapper">
        <div class="countdown">
          <div class="countdown-block" data-unit="days">
            <div class="countdown-number" id="days">00</div>
            <div class="countdown-label">Days</div>
          </div>
          <div class="countdown-block" data-unit="hours">
            <div class="countdown-number" id="hours">00</div>
            <div class="countdown-label">Hours</div>
          </div>
          <div class="countdown-block" data-unit="minutes">
            <div class="countdown-number" id="minutes">00</div>
            <div class="countdown-label">Minutes</div>
          </div>
          <div class="countdown-block" data-unit="seconds">
            <div class="countdown-number" id="seconds">00</div>
            <div class="countdown-label">Seconds</div>
          </div>
        </div>
      </div>
    `;

    // Get references to number elements
    this.elements = {
      days: document.getElementById('days'),
      hours: document.getElementById('hours'),
      minutes: document.getElementById('minutes'),
      seconds: document.getElementById('seconds')
    };
  }

  calculateTimeRemaining() {
    const now = new Date().getTime();
    const distance = this.targetDate - now;

    if (distance < 0) {
      return null; // Event has passed
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000)
    };
  }

  formatNumber(num) {
    return num.toString().padStart(2, '0');
  }

  updateDisplay(time) {
    if (!time) {
      // Event has passed
      this.container.innerHTML = `
        <div class="countdown-wrapper">
          <div class="text-center">
            <h2 class="display-title">Event is Live!</h2>
            <p class="lead" style="margin-top: var(--space-4);">The conference has begun</p>
          </div>
        </div>
      `;
      return false; // Stop updating
    }

    // Update each unit with smooth animation
    Object.keys(time).forEach(unit => {
      const element = this.elements[unit];
      const newValue = this.formatNumber(time[unit]);

      if (element && element.textContent !== newValue) {
        // Add subtle scale animation on change
        element.style.transform = 'scale(1.1)';
        element.textContent = newValue;

        setTimeout(() => {
          element.style.transform = 'scale(1)';
        }, 200);
      }
    });

    return true; // Continue updating
  }

  start() {
    // Initial update
    const time = this.calculateTimeRemaining();
    const shouldContinue = this.updateDisplay(time);

    if (!shouldContinue) return;

    // Update every second
    this.intervalId = setInterval(() => {
      const time = this.calculateTimeRemaining();
      const shouldContinue = this.updateDisplay(time);

      if (!shouldContinue) {
        this.stop();
      }
    }, 1000);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}

// Export for use in main.js
export default Countdown;

// Legacy support (if script is loaded directly without modules)
if (typeof window !== 'undefined') {
  window.Countdown = Countdown;
}
