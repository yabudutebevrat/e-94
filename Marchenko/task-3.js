const ADMIN_PASSWORD = "jqueryismyjam";
let message = prompt(Введіть пароль!);
if (message === null) {
    console.log(`Скасовано користувачем!`);
} else if (message == `jqueryismyjam`) {
    console.log(`Ласкаво просимо!`);
} else {
    console.log(`Доступ заборонений, невірний пароль!`);
}
alert(`Пароль, який ви ввели: ${message}`);