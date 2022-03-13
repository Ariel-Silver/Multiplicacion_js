// Prompt que solicita un número entre 1 y 20
let num = parseInt(prompt("Por favor, ingrese un número entre 1 y 20"));

// Función que verifica el rango del número ingresado
const check = (number) => {
    if (number >= 1 && number <= 20) {

        // Ciclo for para multiplicar el numero ingresado
        for (let multiplier = 1; multiplier <= 12; multiplier++) {
            console.log(`${multiplier} x ${number} = ${multiplier * number}`);
        }

        // Ciclos for que obtienen la factorial
        for (let factorial = 1; factorial <= number; factorial++) {

            let factorialResult = 1;

            for (let factorialIteration = 1; factorialIteration <= factorial; factorialIteration++) {
                factorialResult = factorialResult * factorialIteration;

            }
            console.log(`Factorial de ${factorial} es: ${factorialResult}`);
        }

    } else console.log("Número fuera de rango");
}

// Se imprime el resultado en consola
console.log(check(num));
