let price;

let cost;

const country = (prompt("Ведите пожалуйста страну в которую хотите заказать дсотавку..."))

switch (country.toLowerCase()) {
  case 'китай':
    cost = 110;
    break;

  case 'чили':
    cost = 250;
    break;

  case 'австралия':
    cost = 170;
    break;

  case 'индия':
    cost = 80;
    break;

  case 'ямайка':
    cost = 120;
    break;

    case null:
    cost = "Видимо вам не нужна доставка.";
    break;

  default:
    console.log('В вашей стране доставка не доступна');
}
console.log(cost);