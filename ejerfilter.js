/*
Autor:Jandry Zambrano Palacios
Fecha 13 07 2024
Tema:  array - filter
*/
const vector =[2 ,4 ,6,-7,10,-3,-1,-5];
let aux=[];
//Muestra los elementos positivos
//Programacion estrucuturada:
for(let k=0; k<vector.legth; k++)
{
    if(vector [k] > 0)
        aux.push(vector[k]);

    }
    console.log("Array de solo positivo", aux);
    //Programacion funcional
    const res = vector.filtrer(item =>{
        return item>0;
    });
    console.long("Array  de solo positivo (Prog. funcional)", res);
    //programacion funcional -forma simplificada
    const res2 = vector.filtrer(item=>item=> item>0);
    console.log("Array de solo positivos(prog funcional) simplificado", res);
    const res3= vector.filtrer(function (x){
        return x> 0
    });
    function EsPositivo(x){
        return x > 0;
        
    }

    const res4 = vector.filter(EsPositivo);
    console.log(res4);
    console.log("ejecutando con nodemon");