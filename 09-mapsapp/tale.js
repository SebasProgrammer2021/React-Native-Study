const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let number1 = 0;
let numerber2 = 0;

readline.question('Ingrese el primer número: ', num1 => {
  number1 = parseFloat(num1);

  readline.question('Ingrese el segundo número: ', num2 => {
    numerber2 = parseFloat(num2);
    readline.close();
    console.log('El resultado es: ' + (number1 + numerber2));
  });
});



