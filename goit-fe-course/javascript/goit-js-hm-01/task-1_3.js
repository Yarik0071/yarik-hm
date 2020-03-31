const ADMIN_PASSWORD = "admin007";
let message = (prompt("Enter your password!"));

if (message === null) {
  console.log ("Отменено пользователем!");
} else if (message === ADMIN_PASSWORD) {
  console.log ("Добро пожаловать!");
} else {
  console.log ("Доступ запрещен, неверный пароль!");
}

alert (message);