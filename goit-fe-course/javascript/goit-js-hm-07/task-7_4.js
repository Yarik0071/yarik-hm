const span = document.querySelector("#value")
const btnI = document.querySelector('button[data-action="increment"]')
const btnD = document.querySelector('button[data-action="decrement"]')

btnI.addEventListener("click", increment)

btnD.addEventListener("click", decrement)


let counterValue = 0;

function increment() {
  counterValue += 1
  span.textContent = counterValue
}

function decrement() {
  counterValue -= 1
  span.textContent = counterValue
}