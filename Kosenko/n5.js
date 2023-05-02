var country = prompt("Введiть країну", "");
var price;

country = country.toLowerCase();
switch (country) {
  case null:
    console.log("Скасовано користувачем!");
    break;
  case "китай":
    price = 100;
    break;
  case "чилі":
    price = 250;
    break;
  case "австралія":
    price = 170;
    break;
  case "індія":
    price = 80;
    break;
  case "ямайка":
    price = 120;
    break;
  default:
    alert("У вашій країні доставка недоступна");
    break;
}

country = country[0].toUpperCase() + country.slice(1, country.length);

console.log(`Доставка в ${country} буде коштувати ${price} кредитів`);
