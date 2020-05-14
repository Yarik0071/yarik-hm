const input = document.querySelector('input[data-length="6"]')
const number = Number(input.dataset.length);

input.addEventListener("blur", (e) => {
  let text = e.currentTarget.value;
  if (text.length === number) {
    input.classList.add("valid")
  } else {
    input.classList.remove("valid")
  }
  if (text.length !== number) {
    input.classList.add("invalid")
  } else {
    input.classList.remove("invalid")
  }
});