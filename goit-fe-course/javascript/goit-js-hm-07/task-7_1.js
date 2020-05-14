const categories = document.querySelector("#categories")

const array = [...categories.children]
const fchild = array.value

console.log(`В списке ${array.length} категории.`)

array.forEach(items => {
  const name = items.firstElementChild
  const numbers = [...items.querySelectorAll("li")]

  console.log('Категория:', name.textContent)
  console.log("Количество элементов:", numbers.length)
});