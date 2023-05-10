let credits = 23580;
let pricePerDroid = 3000;
let memory = prompt(Введіть кількість!);
memory = Number(memory);
let totalPrice; 
if (memory === null)
{
    console.log(`Скасовано користувачем!`);
} else if ((memory > 0) && ("number" == typeof(memory))) {
    totalPrice = pricePerDroid * memory;
    if (totalPrice > credits)
    {
        console.log(`Недостатньо коштів на рахунку!`);
    } else {
        console.log(`Ви купили ${memory} дроїдів, на рахунку залишилося ${credits - totalPrice} кредитів.`);
        }
} else {
    console.log(`Неправильна кількість!`);
}