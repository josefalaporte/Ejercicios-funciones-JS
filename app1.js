/*Ejercicio #1
Crea una función llamada numeroMayor() que toma tres números como entrada y retornar el número mayor de ellos, si son iguales, devolver un String «Los números son iguales».*/


function numeroMayor(a, b, c,) {
    if (a === b && a === c) {
        return "Los números son iguales";
    } else {
        return Math.max(a, b, c);
    }
}

console.log(`El numero mayor es ${numeroMayor(5, 10, 20)}`);
console.log(numeroMayor (4,4,4));
