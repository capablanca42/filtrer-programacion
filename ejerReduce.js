/*
Autor:Jandry Zambrano Palacios
Fecha 13 07 2024
Tema:  array - reduce
*/
const numeros =[10,20,30,1,2,3,4,69,70,79];
//realice la sumatoria de los elementos del array
const suma = numeros.reduce((acum, vactual) => {
    return (acum + vactual);

}, 0);
console.log("La sumatoria de los elementos del vector es:", suma);

//con el siguiente vector, devuelva el producto de sus elementos

const vector=[1,2,3,4,5,6,7,8];
const producto = vector.reduce((acum vactual)=>{

},1);
console.log("Elproductode los elementos del vector es:",producto);
//con los siguientes datos
const estudiantes=[
    nombre: "Juan angulo",
    sexo:"m",
    asignatura:"Programacion I",
    {
        nombre:"Galo Alvaro",
        sexo: "m"
        notaParcial :[30,30,30],
        notaFinal:30

    }
]
//Calcule el promedio de la notaParcial: Debe usar reduce donde sea necesario
const promedios =estudiantes.map(est =>{
    return {
        nombres: est.nombres,
        sexo: est.sexo,
        asignatura{
            nom: est.asignatura.notaParcial.reduce((ac,va)=>{
                return ac+va
            },0)/ est.asignatura.notadelparcial.length,
            notaFinal: est.asignatura.notaFinal
        }
    }
});

