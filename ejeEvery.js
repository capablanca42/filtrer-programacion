/*
Autor:Jandry Zambrano Palacios
Fecha 13 07 2024
Tema:  array - every
*/
const numeros = [1,2,19,4,10];
//Devuelve si es verdadero si todos los elementod e arrays son pares
const pares = numeros.every(x => { x % 2==0
return x % 2 == 0
});
console.log("el rarray todos los elementos son pares ? " ,pares);