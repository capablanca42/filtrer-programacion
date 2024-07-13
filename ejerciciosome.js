/*
Autor:Jandry Zambrano Palacios
Fecha 13 07 2024
Tema:  array - every
*/
const vector = [10,3,17,6,-6,810,-3];
//El array tiene elementos negativos?
const res = vector.some(item=>item<0);
console.log("En el array existen elementos negativo?", res);
//console.log(vector.some((el elemento)=>elemento<0));
const matriz=[[1,2,3], [4,5,6],[7,8,9]];
/*
1 2 3
4 5 6
7 8 9
*/
 const matrizpos = matriz.every(arreglo=>{
    return arreglo.every(x=>{
        return x > 0;
    });
 });
 console.log("todos los elementos son positivos?",matrizpos);