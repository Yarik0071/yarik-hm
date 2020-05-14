const range = document.querySelector("#font-size-control")
const text = document.querySelector("#text")

range.addEventListener("input", changeSize)

function changeSize() {
    text.style.fontSize = `${range.value}px`;
}