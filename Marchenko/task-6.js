let total = 0;
let input;
while ((input = prompt("Введіть число!")) !== null)
{
    total += +input;
}
console.log(`Загальна сума чисел дорівнює: ${ total }.`);