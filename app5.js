// Ejercicio #5
// Crear una función multiplicarArreglo() que tome como parámetro un arreglo de números, retornar la multiplicación del número menor del arreglo y el número mayor del arreglo.

function multiplicarArreglo(arreglo) {
    if (arreglo.length === 0) {
        return 0;
    }
   
    var min = arreglo[0];
    var max = arreglo[0];

    for (var i = 1; i < arreglo.length; i++) {
        if (arreglo[i] < min) {
            min = arreglo[i];
        }
        if(arreglo[i] > max) {
            max = arreglo[i];
        }
    }
    return min * max ;
}

var arreglo = [9, 20, 7, 4, 5];
var resultado = multiplicarArreglo(arreglo);
console.log(resultado);




