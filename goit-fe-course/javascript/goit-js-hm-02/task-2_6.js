let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Enter a number!!!")
  if (input !== isNaN()) {
    numbers.push(input)
} else {
  console.log ("enter number")
}
} while (input !== null)

for (let value of numbers) {
  total += Number(value)
}

console.log(`Общая сумма чисел равна ${total}`)