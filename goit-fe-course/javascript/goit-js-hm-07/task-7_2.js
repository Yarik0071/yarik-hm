const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


ingredients.forEach(items => {
  const item = document.createElement("li");
  item.textContent = items;

  const list = document.querySelector("#ingredients");
  list.appendChild(item);
})