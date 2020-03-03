let total = 0;
let input;

while (input !== null) {
  input = prompt("введите число...")
  total += Number(input);
  if (isNaN(input)) {
    alert("Введите пожалуйста число...")
  }
} 

alert(`Общая сумма чисел равна ${total}`)