const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const body = document.querySelector("body")
const startMachine = document.querySelector('[data-action="start"]')
const stopMachine = document.querySelector('[data-action="stop"]')
let randomNumber = 0;
let isActive = false;
let intervalId = 0;

startMachine.addEventListener("click", startInterval)
stopMachine.addEventListener("click", stopInterval)

function changeColor() {
  randomNumber = randomIntegerFromInterval(0, colors.length - 1)
  body.removeAttribute("style")
  body.setAttribute("style", `background-color: ${colors[randomNumber]}`)
}

function startInterval() {
  if (isActive) {
    return
  } else {
    isActive = true;
    intervalId = setInterval(changeColor, 1000)
  }
}

function stopInterval() {
  clearInterval(intervalId)
  isActive = false
}

