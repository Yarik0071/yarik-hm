class Storage {
  constructor(array) {
    this.arr = array
  }
  addItem = function (item) {
    this.arr.push(item)
  }

  getItems = function () {
    return (this.arr)
  }

  removeItem = function (item) {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] === item) {
        this.arr.splice(i, 1)
      }
    }
  }
}


const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();

console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]