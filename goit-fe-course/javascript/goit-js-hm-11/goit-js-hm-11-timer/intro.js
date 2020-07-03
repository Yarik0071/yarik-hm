class CountdownTimer {
  constructor({
    selector,
    targetDate
  }) {
    this.selector = selector;
    this.targetDate = targetDate

    function pad(obj) {
      return String(obj).padStart(2, "0");
    }
     const day = document.querySelector('[data-value="days"]')
     const hour = document.querySelector('[data-value="hours"]')
     const min = document.querySelector('[data-value="mins"]')
     const sec = document.querySelector('[data-value="secs"]')

    function timer() {
      let time = targetDate - Date.now()
      const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
      day.textContent = days
      hour.textContent = hours
      min.textContent = mins
      sec.textContent = secs
    }
    setInterval(timer, 1000);
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2020'),
});