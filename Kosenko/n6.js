var total = 0;
var input = 0;
do {
  total += parseInt(input);
  input = prompt("Введiть число", "");
} while (input);
console.log(total);
