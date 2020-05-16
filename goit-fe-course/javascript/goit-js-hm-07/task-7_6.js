const input = document.querySelector('input[data-length="6"]')
const number = Number(input.dataset.length);

input.addEventListener("change", (e) => {
  let text = e.currentTarget.value;
  if (text.length === number) {
    input.classList.remove("invalid")
    input.classList.add("valid")
  } else {
    input.classList.remove("valid")
    input.classList.add("invalid")
  }
});