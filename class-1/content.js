//------ Tipos de Datos -------//

let tiposDeDatos = {

    number:56,
    string:"Hola a todos",
    boolean:true,
    array:[ 56, 7, 90 ],
    object:{ name:"Jose", age:67 },
    undefined:undefined,
    null:null,
    function: ()=>{ console.log("Esto es una funcion") }

}

//------ Variables -------//

let name = "Martin"; //let puede volver a ser reasignada
const number = 45;   //const no puede volver a reasignarse su valor

//------ Condicionales ------//

if(number < 45){

    console.log("number es menor a 45")

}else if( "45" === 45){

    console.log("number es igual a 45");

}
else{

    console.log("number es mayor que 45")

};

//------ Bucle For ------//

const names = [ "Pablo", "Raul", "Graciela" ];

for (let i = 0; i < names.length; i++) {

    console.log(names[i]);
    
};

//------ Funciones ------//

function getName(name){

    console.log(`Hello!, I'm ${name}`);

};

const getAge = (age) => {

    console.log(`I'm ${age} years old`);

};

/**
 * 
 * getName("Daniel");
 * getAge(60);
 * 
 */



//------ Los Objetos ------//

const person = {

    name:"Luis", 
    age:43,
    country:"Argentina",
    profesiones:["Medico", "Maestro"],
    
    salute: () => { 
        console.log(`Hey! I'm ${person.name} and i from ${person.country}`) 
    }

};

person.salute();



//Para llamar a las propiedades de un objeto, lo hacemos de la misma manera que en Java

/**
 * 
 * console.log(person.name);
 * 
 */

//Lo mismo a la hora de ejecutar un metodo

/**
 * 
 * person.salute();
 * 
 */


