/*
Autor:Jandry Zambrano Palacios
Fecha 13 07 2024
Tema:  array - filter
*/
const Libros = [
    {
        "codigo": "001", 
        "Nombre": " the  chess master",
         "precio":40,
         "Autor":"Luis Alban"
    },
    {
        "codigo":"005",
        "nombre":"aprendamos ingles",
        "precio": 40,
        "Autor": "Jean Piere Valencia"
   },
]
//Encuentre los libros que sean mayor a 20 dolares
const resultados = Libros.filter( Libro => Libro.precio > 20);
console.log("Libros de precio mayores de 20 dolares:" , resultados);
//listado de libros del autor juan pueblo 

//Listado cuyo precio es menor oigual  que 15 dolares
console.log(libros.filter(libro =>libro.Autor =="Juan pueblo"));
 //listados de cuyo precio sea menor o igual que 15 dolares
 const res2 = libros.filter((libro)=> libro.precio <= 15);
 console.log.res(res2);
