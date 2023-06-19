// Ejercicio #7
// Crear una función con el nombre de funcionArray() que tome dos arreglos de números enteros como parámetro y retornar un único arreglo, cada elemento del arreglo debe estar multiplicado por dos. ej: [2,5,2][1,5,3] -> [4,10,4,2,10,6].


function FuncionArray(arr1, arr2) {
    var arregloResultado = [];
    for (var i = 0; i < arr1.length; i++) {
        arregloResultado.push(arr1[i] * 2);
    }
    for (var i = 0; i < arr2.length; i++) {
        arregloResultado.push(arr2[i] * 2);
    }
    return arregloResultado;
}

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var resultado = FuncionArray(arr1, arr2);
console.log(resultado);