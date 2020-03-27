const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

console.log(user)

user.hobby = "skydriving"
user.mood = "happy"
user.premium = false



for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}