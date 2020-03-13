const logItems = function (array) {
  let i = 0;
  let item;
  for (item of array) {
    i += 1
    console.log(`${i}. ${item}`)
   }
};

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50])

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);