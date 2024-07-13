/*
fecha :13 07 2024
autor: Jandry
tema:  Diseñe un objeto JavaScript (JSON) que defina la  
información de una asignatura que
 dicta un docente en la PUCESE. 
*/ 
const Docente ={
    "identificacion": "P0001",
    "apellidos": "Posligua F",
    "nombres": "Kleber R",
    "Asignaturas":[
        {
            "nombre":" Progamacion I",

            "creditos": 4
        },
        {
" nombre": "Algoritmos y Pseudocodigos",
"creditos": 4,
"estudiantes":[
    {"nombres": "Juan perez", edad :21},
    {"nombres": "Andres Santillan", edad :18}
]
        }
    ],
}
cosole.log(Docente.Asignaturas [0]);