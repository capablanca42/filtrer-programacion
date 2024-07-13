/*
Autor:Jandry Zambrano Palacios
Fecha 13 07 2024
Tema:  array - every
*/
const vector=[2,4,6,8,10,11,12];
//Devuelva el vector multiplicado por c/u de sus elementos por 10
const vector10= vector.map(x=>10);
//con la siguiente arrar de objetos:
const personas=[
    
    {nombres: "juan alcivar", edad:19},
    {nombres: "Ana Cuesta", edad:30},
    {nombres: "Emilio Centeno", edad: 40},
    {nombres: "Jimena castro", edad: 50},
    {nombres: "Pedro ponce", edad: 19},
];
//devuelva el array de esta forma:
//{nombres: "juan alcivar", edad:19, mensaje puedes votar}
//{nombres: "ana cuesta", edad:17, mensaje  no puede votar}
//La persona puede votar si la edad es mayor o igual que 18
const resPers= personas.map(persona =>{
    return{
        nombres: persona,nombres,
        edad:persona.edad >=18 ? "Puedes votar":"No puedes votar"
    }
});
console.log(resPers);
const res2 = personas.map(persona =>{

});
console.log(res2);