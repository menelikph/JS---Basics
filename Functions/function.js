//TODO: Funciones!!
//TODO: Esto es un bloque de codigo  que se puede reutilizar, se le da una tarea, y la hace por ti cada que la llamas

//*funcion basica

function saludar(){
    console.log("Hola, menelik")
};

saludar(); //se ejecuta la funcion

//*ahora, si quiero saludar a varias personas se hace lo siguiente


function saludar2(nombre){
    console.log("hola" + nombre);
}

saludar2("merry"); // ?gracias al parametro nombre, podemos cambiar lo que dice


//*tambien se pueden hacer operaciones como la siguiente
function duplicar(numero){
    console.log(numero * 2) //aqui tenemos la operacion, despues podemos poner el numero deseado
}

duplicar(4); //?gracias a la funcion esto se multiplica por 2 (8)
duplicar(10);//(20)


//*Funciones que devuelve un resultado

function sumar (a, b){
    console.log(a + b);
}

//?se puede hacer esto
console.log(3, 5); //8

//?o tambien definiendo una variable para el resultado
let resultado = sumar(3, 5);
console.log (resultado);



//*Funcion que diga que una funcion es par

function esPar(numero){
    return numero % 2 === 0; //? el operador modulo, sirve para saber si algo es divisible
}

console.log(esPar(4)); //return true
console.log(esPar(7)); //return false



function esONoPar(numero){
    if(numero % 2 === 0){
        console.log("es par")
    }else{
        console.log("no es par")
    }
}

esONoPar(6);
esONoPar(3);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

/* 💡 Sugerencia opcional:
Si quisieras que en vez de solo mostrar en consola, la función devuelva un valor, podrías hacerlo así:
 */

/* function esONoPar(numero) {
    if (numero % 2 === 0) {
        return "es par";
    } else {
        return "no es par";
    }
}

console.log(esONoPar(10)); // es par
console.log(esONoPar(7));  // no es par */

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



//*---------------------------------------------------------------------------------------------------------------------------*


//TODO: 📚 ¿Qué tipos de funciones existen?

//? 1. Normales
function hola(){"..."}
        //📌 Características:
        // Puedes llamarla antes o después de declararla en el código.
        // Muy útil en estructuras tradicionales o cuando el orden del código puede variar.     
//* Practica
function saludar(){
    console.log("hola, menelik")
}

//? 2. Funciones anonimas (guardadas en variables)
const saludar = function(){"..."}
        //📌 Características:
        // Se guardan en una variable (en este caso, saludar).
        // No puedes llamarla antes de declararla.
        // Muy usada cuando quieres pasar funciones como valores o trabajar con eventos.
//* Practica
const saludar = function(){
    console.log("hola, menelik")
}


//? 3. funciones flecha (arrow functions)
const saludar = () => {"..."}
        //📌 Características:
        // Son más cortas y modernas.
        // No tienen su propio this, lo que las hace útiles en algunos casos específicos como funciones dentro de objetos.
        // Si solo devuelves una línea, puedes acortarla aún más:
//* Practica
const saludar = () => {
    console.log("Hola, menelik")
}




//*---------------------------------------------------------------------------------------------------------------------------*

//todo: Ejercicio 1

const comparar = (numero) => {
    if (numero > 10){
        console.log(`el numero ${numero} es mayor que 10`)
    }else{
        console.log(`el numero ${numero} es menor que 10`)
    }
}

comparar(15);
comparar(8);


//Todo: Ejercicio 2
function mayorDeEdad (numero){
    if (numero >= 18){
        console.log(`Eres mayor de edad`)
    }else{
        console.log(`Eres menor de edad`)
    }

}