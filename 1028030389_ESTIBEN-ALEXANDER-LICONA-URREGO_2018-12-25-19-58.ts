//Declaracion de Varibles
let num1:number = 3; //Variable de entrada para la creacion de la matrix
let num2:number = 4; //Variable de entrada para la creacion de la matrix
let matrix:number[][] = new Array();
let sum1:number = 0; //Variable para almacenar el promedio de las columnas impares
let cont:number = 0;
let cont2:number = 0;
let sum2:number = 0; //Variable para sumar los valores de las columnas
//Llamado a la funcion principal
main(num1,num2);
// Funcion Principal
function main(num1,num2) {

  //Llenado de la matrix
  console.log('----------------------------------------------------------');
  console.log(`Matriz de ${ num1 } x ${ num2 }`); // Descripcion de la matrix

  if (num1 >= 2 || num2 >= 2) { //Condicional para validar que los valores de creacion de la matrix sean mayores que 2
    for (let i = 0; i < num1; i++) {
        matrix.push([]);
        for (let u = 0; u < num2; u++) {
          matrix[i].push(Math.floor(Math.random() * (((num1*num2)+1)-1)+1)); //Generacion de numeros aleatorios entre 1 y (num1 x num2)
          if (u % 2 != 0) { // Condicional para contar y sumar las columnas impares
              sum1 = sum1 + matrix[i][u];
              cont++;
          }
        }
        console.log(matrix[i]); // Impresion de cada fila de la columna
    }

    //Lectura de la matix por columnas
    for (let i = 0; i < num2; i++) {
        sum2 = 0;
        for (let u = 0; u < num1; u++) {
          sum2 = sum2 + matrix[u][i];
        }
        if (sum2 > 12) {
            cont2++;
        }
        console.log('Suma C'+i+' = '+sum2);
    }
    //Resultados
    console.log('----------------------------------------------------------');
    console.log(`Promedio columnas impares es ${ sum1/(cont/num1) }`);
    console.log('----------------------------------------------------------');
    console.log(`Cantidad de columnas cuyo total es mayor que 12 = ${ cont2 }`);
    console.log('----------------------------------------------------------');
  }else {
      console.log('Los valores no pueden ser menores a 2');
  }
}sum2
