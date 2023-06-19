/*Ejercicio #4
Crear una función sumaArreglo() que tome como parámetro un arreglo de números, retornar la longitud del arreglo + la suma de todos los números del arreglo.*/
//[1,2,3,4] = 
//longitud = 4

function sumaArreglo(arreglo){

    var longitud = arreglo.length;
    var suma = 0;
    
    for (var i = 0; i < longitud; i++) {
        suma += arreglo [i];
    }
    var resultado = longitud + suma;
    return resultado;
    
}

var miArreglo = [9, 4, 6, 2, 7];
var resultado =sumaArreglo(miArreglo);
console.log(`La suma total es de ${resultado}`);
