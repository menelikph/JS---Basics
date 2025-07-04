//TODO: funciones con arrays
    //Una funcion puede:
    //🔹 Recibir un array como parámetro
    //🔍 Recorrer ese array
    //🧠 Hacer algo con sus elementos
    //🧾 Devolver o mostrar un resultado


//*ejemplo 1* Mostrar elementos de una array
function mostrarFrutas(frutas){
    for (let i = 0; i < frutas.length; i++) {
        console.log(frutas[i]);
    }
}

let frutas = ["manzana", "pera", "uva"]
mostrarFrutas(frutas);

//*---------------------------------------------------------------------------------------------------------------------------*

//TOdo: FOR - El bucle for se utiliza para recorrer arrays paso a paso

//todo: estructura general

/* for (let i = 0; i < array.length; i++) {  
    console.log( array[i]);
} */

//*Vamos parte por partes:

//Parte del for	¿Qué hace?
//let i = 0	Empieza en 0 (porque los arrays comienzan en el índice 0)
//i < array.length	Sigue mientras i sea menor que la cantidad de elementos
//i++	Aumenta i en 1 en cada vuelta
//array[i]	Accede al elemento en la posición i del array

//* Ejemplo:

//Mostrar solo lo elementos en mayusculas

function mostrarEnMayusculas(lista){
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i].toUpperCase());
    }
}

let palabra = ["hola", "menelik", "js"]
mostrarEnMayusculas(palabra);


//TODO: Ejercicios

function mostrarPares(list){
    for (let i = 0; i < list.length; i++) {
        if (list[i] % 2 === 0){
            console.log(list[i])
        }
    }
}

/* const numeroslist = [3, 8, 4, 7, 10];
mostrarPares(numeros); */



//Mostrar en unos nuevos arrays
let pares = [];
let impares = [];

function mostrarPares(list){
    for (let i = 0; i < list.length; i++) {
        if (list[i] % 2 === 0){
          pares.push(list[i])
        }else{
          impares.push(list[i]) //pse utiliza el push para agragar en la lista 
        }
    }
}


/* const numeros = [3, 8, 4, 7, 10];
mostrarPares(numeros);
console.log(`pares: ${pares} \nImpares: ${impares}`);
 */

//*---------------------------------------------------------------------------------------------------------------------------*
//generar  la lista con numeros ramdom
let num = []
let pares2 = [];
let impares2 = [];

function generarNumeros(cantidad = 10){
  for (let i = 0; i < cantidad; i++) {
    let aleatorio = Math.floor(Math.random() * 100)
    num.push(aleatorio)
  }
}

function ParesImpares(list){
    for (let i = 0; i < list.length; i++) {
        if (list[i] % 2 === 0){
          console.log(num[i] + " es par");
          pares.push(list[i])
        }else{
          console.log(num[i] + " es impar");
          impares.push(list[i])
        }
    }
}

/* generarNumeros()
ParesImpares(num)
console.log("Pares actualizados:", pares);
console.log("Impares:", impares); */


// const numeros = [3, 8, 4, 7, 10]; necesito verificar primero cuales  numeros son pares y impares y  actualizar los numeros impares con un numero par ramdom del 1-30 
// y por ultimo mostrar la lista actualizada.   

const num1 = [3, 8, 4, 7, 10];
const par = [];
const imp = [];

function paresImpares(list){
    for (let i = 0; i < list.length; i++) {
        if (list[i] %2 === 0) {
            console.log(list[i] + "  Es par")
            par.push(list[i])
        } else {
            console.log(list[i] + " Es impar")
            imp.push(list[i])
        }
    }
}


paresImpares(num1);
console.log(num1)
console.log(par)
console.log(imp)

function pushParesRandom(list){
    for (let i = 0; i< list.length; i++) {
        let aleatorio = Math.floor(Math.random() * 30)
        if (aleatorio %2 === 0) {
            imp.push(aleatorio);
        }
    }
}

pushParesRandom(num1)
console.log(imp)

//*---------------------------------------------------------------------------------------------------------------------------*

function numMayor(list){
    let mayores = []

    for (let i = 0; i < list.length; i++) {
        if (list[i] > 10){
            mayores.push(list[i])
        }
    }
    return mayores
}

const numerosMay = [2, 80, 11, 20, 3, 5, 20];
const resultado = numMayor(numerosMay);
console.log("mayores a 10: ", resultado)


//*---------------------------------------------------------------------------------------------------------------------------*
function palabrasLargas(list){
    let resultado = []
    for (let i = 0; i < list.length; i++) {
        if (list[i].length > 5) {
            resultado.push(list[i])
        }
    }
    return resultado;
}

const palabras = ["sol", "lluvia", "hablador", "comunicacion", "telegrama", "nido"];

const result = palabrasLargas(palabras);
console.log("palabras con mas de 5 letras: " + result)

