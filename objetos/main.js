const productos = [
  { nombre: "camisa", precio: 30000 },
  { nombre: "pantalón", precio: 60000 },
  { nombre: "gorra", precio: 15000 },
  { nombre: "chaqueta", precio: 80000 },
];

function precios(list) {
  let resultado = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].precio > 40000) {
      resultado.push(list[i]);
    }
  }
  return resultado;
}

const caros = precios(productos);
console.log("Productos mayores a $40.000:", caros);

//*---------------------------------------------------------------------------------------------------------------------------*

const personas = [
  { nombre: "Ana", edad: 16 },
  { nombre: "Luis", edad: 21 },
  { nombre: "Carlos", edad: 18 },
  { nombre: "Marta", edad: 14 },
  { nombre: "Camila", edad: 30 },
];

function mayores(list) {
  let resultado = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].edad >= 18) {
      resultado.push(list[i]);
    }
  }
  return resultado;
}

const mayoresdeEdad = mayores(personas);
console.log("Personas mayores de edad: ", mayoresdeEdad);

//*---------------------------------------------------------------------------------------------------------------------------*

/* 🎯 RETO FINAL: Análisis completo de un grupo de personas
✅ Objetivos:
Mostrar cuántas personas hay

Filtrar y mostrar:

Personas mayores de edad

Personas menores de edad

Sumar la edad total del grupo

Mostrar solo los nombres de los mayores de edad */

const pers = [
  { nombre: "Ana", edad: 16 },
  { nombre: "Luis", edad: 21 },
  { nombre: "Carlos", edad: 18 },
  { nombre: "Marta", edad: 14 },
  { nombre: "Camila", edad: 30 },
];

function analizarPersonas(list) {
  const mayores = [];
  const menores = [];
  let sum = 0;
  const nomMayores = [];

  for (let i = 0; i < list.length; i++) {
    const persona = list[i];
    sum += persona.edad;
    if (persona.edad >= 18) {
      mayores.push(persona);
      nomMayores.push(persona.nombre);
    } else {
      menores.push(persona.nombre);
    }
  }

  console.log("👥 Total de personas:", pers.length);
  console.log("🔞 Mayores de edad:", mayores);
  console.log("🧒 Menores de edad:", menores);
  console.log("🧮 Suma total de edades:", sum);
  console.log("📛 Nombres de los mayores:", nomMayores);
}

analizarPersonas(pers);

//*---------------------------------------------------------------------------------------------------------------------------*

const videojuegos = [
  { titulo: "God of War", genero: "acción", horasJugadas: 25 },
  { titulo: "Animal Crossing", genero: "simulación", horasJugadas: 12 },
  { titulo: "The Legend of Zelda", genero: "aventura", horasJugadas: 40 },
  { titulo: "Among Us", genero: "estrategia", horasJugadas: 8 },
  { titulo: "Uncharted", genero: "aventura", horasJugadas: 30 },
];

function analisisVideojuegos(list) {
  let totalVideojuegos = list.length;
  const mas20 = [];
  const menos20 = [];
  let sumaVideojuegos = 0;
  const juegosAventura = [];

  for (let i = 0; i < list.length; i++) {
    sumaVideojuegos += list[i].horasJugadas;
    if (list[i].horasJugadas > 20) {
      mas20.push(list[i]);
    } else {
      menos20.push(list[i]);
    }
    if (list[i].genero === "aventura") {
      juegosAventura.push(list[i].titulo);
    }
  }
  console.log("Total de videojuegos: ", totalVideojuegos);
  console.log("lista de mas de 20 h: ");
  console.table(mas20)
  console.log("lista con menos de 20 h: ");
  console.table(menos20)

  console.log("suma total de horas: ", sumaVideojuegos);
  console.log("titulos de juego de aventura: ", juegosAventura);
}


analisisVideojuegos(videojuegos)

//*---------------------------------------------------------------------------------------------------------------------------*

const mascotas = [
  { nombre: "Milo", especie: "perro", edad: 5 },
  { nombre: "Luna", especie: "gato", edad: 2 },
  { nombre: "Rocky", especie: "perro", edad: 8 },
  { nombre: "Nina", especie: "gato", edad: 1 },
  { nombre: "Toby", especie: "conejo", edad: 3 }
];

function analizarMascotas(list) {
  let numMascotas = list.length
  const perros = [];
  const gatos = [];
  const nombreGatos = [];
  const otros = [];
  let sumaEdades = 0;
  let promedio = 0;
  let mayor = list[0];
  let menor = list[0];

  for (let i = 0; i < list.length; i++) {
    sumaEdades += list[i].edad;
    if (list[i].especie === "perro") {
      perros.push(list[i]);
    }else if (list[i].especie === "gato") {
      gatos.push(list[i]);
      nombreGatos.push(list[i].nombre)
    } else {
      otros.push(list[i]);
    }

    if (list[i].edad > mayor.edad) {
      mayor = list[i]
    }else if (list[i].edad < menor.edad) {
      menor = list[i]
    }
    
  }
  promedio = sumaEdades / list.length

  //todo: Impimir en pantalla resultados
  console.log("Numero de mascotas: ", numMascotas)
  console.table(mascotas);

  console.log("perros: ")
  console.table(perros)

  console.log("gatos: ")
  console.table(gatos)

  console.log("otras especies: ")
  console.table(otros)

  console.log("Suma de las edades:", sumaEdades)

  console.log("Estos son los gatos: ", nombreGatos)

  console.log("el promedio de edades es: ", promedio)

  console.log("la mascota mayor es:", mayor.nombre, "y tiene:", mayor.edad, "años" )
  console.log("la mascota menor es:", menor.nombre, "y tiene:", menor.edad, "años" )
}


analizarMascotas(mascotas)