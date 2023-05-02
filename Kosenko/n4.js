var credits = 23580;
var pricePerDroid = 3000;
var countOfDroids, totalPrice;

countOfDroids = prompt("Введіть кількість дроїдів", "");
if (countOfDroids == null) {
  console.log("Скасовано користувачем!");
} else {
  totalPrice = countOfDroids * pricePerDroid;
}

if (totalPrice <= credits) {
  credits -= totalPrice;
  console.log(
    `Ви купили ${countOfDroids} дроїдів, на рахунку залишилося ${credits} кредитів.`
  );
} else {
  console.log("Недостатньо коштів на рахунку!");
}
