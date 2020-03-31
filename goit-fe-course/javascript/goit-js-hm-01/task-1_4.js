const credit = 23580;
let pricePerDroid = 3000;
let totalPrice;
let balance;

let quantity = (prompt('Введите желаемое кол-во дроидов'));

if (quantity !== null) {
  totalPrice = (quantity * pricePerDroid) 
} 

if (totalPrice > credit) {
  console.log ("Недостаточно средств на счету!")
} else if (quantity === null) {
  console.log ("Отменено пользователем!")
} else if (isNaN(quantity)) {
  console.log ("Введите пожалуйста число!")
} else {
  balance = credit - totalPrice
  console.log ( `Вы купили ${quantity} дроидов, на счету осталось ${balance} кредитов.`)
}