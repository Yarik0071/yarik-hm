import users from './users.js'


// 1
const getUserNames = users => {
  const names = users.map(user => user.name);
  return names;
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 
//   'Sharlene Bush', 
//   'Ross Vazquez', 
//   'Elma Head', 
//   'Carey Barr', 
//   'Blackburn Dotson', 
//   'Sheree Anthony' ]


// 2
const getUsersWithEyeColor = (users, color) => {
  const user = users.filter(user => user.eyeColor === color);
  return user;
};

console.log(getUsersWithEyeColor(users, 'blue'));
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]


// 3
const getUsersWithGender = (users, gender) => {
  const user = users
    .filter(user => user.gender === gender)
    .map(user => user.name);
  return user;
};

console.log(getUsersWithGender(users, 'male'));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]


// 4
const getInactiveUsers = users => {
  const notActiveUsers = users.filter(user => !user.isActive);
  return notActiveUsers;
};

console.log(getInactiveUsers(users));
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]


// 5
const getUserWithEmail = (users, email) => {
  const mail = users.find(user => user.email === email);
  return mail;
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}


    // 6
const getUsersWithAge = (users, min, max) => {
  const user = users.filter(user => user.age > min && user.age < max)
  return user
};

console.log(getUsersWithAge(users, 20, 30));
// [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]


// 7
const calculateTotalBalance = users => {
  const balance = users.reduce((totalBalance, users) => totalBalance + users.balance, 0);
  return balance
};

console.log(calculateTotalBalance(users)); // 20916


// 8
const getUsersWithFriend = (users, friendName) => {
  const friend = users.filter(user => user.friends.includes(friendName))
  .map(user => user.name)
  return friend
}

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]


// 9
const getNamesSortedByFriendsCount = users => {
  const friend = [...users].sort((a, b) => {
    return a.friends.length - b.friends.length
  })
  return friend.map(user => user.name)
};
  

console.log(getNamesSortedByFriendsCount(users));
//['Moore Hensley', 
// 'Sharlene Bush', 
// 'Elma Head', 
// 'Carey Barr', 
// 'Blackburn Dotson', 
// 'Sheree Anthony', 
// 'Ross Vazquez']


// 10
const getSortedUniqueSkills = users => {
  let all = users.reduce((allskills, skill) => {
    allskills.push(...skill.skills);
    return allskills;
  }, []);

  let unique = [...new Set(all)];

  return unique.sort()
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 
// 'commodo', 'culpa', 'elit', 
// 'ex', 'ipsum', 'irure', 
// 'laborum', 'lorem', 'mollit', 
// 'non', 'nostrud', 'nulla', 
// 'proident', 'tempor', 'velit', 'veniam' ]