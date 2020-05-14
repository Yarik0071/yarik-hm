const input = document.querySelector('#name-input')
const output = document.querySelector("#name-output")

let name = "незнакомец";

input.addEventListener("input", (e) => {
  output.textContent = name;
  if (e.currentTarget.value.length > 0){
    output.textContent = e.currentTarget.value
  }
})