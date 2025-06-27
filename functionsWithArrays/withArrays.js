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

const numeros = [3, 8, 4, 7, 10];
mostrarPares(numeros);


