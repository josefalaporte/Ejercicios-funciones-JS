/*  Ejercicio #3
Crea una función llamada generar_caracteres() que tome como parámetro un número entero (n) y un carácter, retornar el carácter multiplicado por n. Por ejemplo, generar_caracteres(5,x), debería retornar “String” «xxxxx».*/

function generar_caracteres(n, caracter) {
    var resultado = '';
    for(var i = 0; i < n; i++){
        resultado += caracter;
    }
    return resultado;
}
var resultado = generar_caracteres(5, 'A');
console.log(resultado);