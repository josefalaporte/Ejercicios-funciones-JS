// Ejercicio #6
//Crear una función con el nombre de booleanoArray() que tome dos arreglos de números como parámetro y que retorne un booleano, unir los dos arreglos en uno solo, si la longitud del nuevo arreglo es mayor o igual a 10 que retorne true si es menor a 10 que retorne false.
function booleanoArray (arre1, arre2){
    var arregloCombinado = arre1.concat(arre2);
    return arregloCombinado.lenght >= 10;
}

var arre1 = [1, 2, 3, 4];
var arre2 = [5, 6, 7, 8];
var resultado = booleanoArray(arre1, arre2);
console.log(resultado);
