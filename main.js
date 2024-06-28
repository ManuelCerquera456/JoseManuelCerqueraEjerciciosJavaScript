/*let multiplicacion = parseInt(prompt("ingrese un numero"))

for (let i = 0; i <= 10; i++) {

    console.log(multiplicacion * i);                            //1
    

}
*/

/*
let acumulado = [];
let numero = console.log("Ingrese números para acumular. Para terminar, ingrese 0.");

for (let i = 0; i < 1000; i++) {  
  numero = parseInt(prompt("Ingrese un número: "));
                                                                //2
  if (numero === 0) {
    break;
  }
  acumulado.push(numero);
}
console.log("Los números acumulados son: " + acumulado);
*/
/*
let adivinanza = 80
let intentos = 0

for (let i = 1; i < 100; i++) {
    let Number = parseInt(prompt("ingrese un numero"))
    intentos++

    if (Number===adivinanza) {
        console.log("¡Ganaste! Lo lograste en " + intentos + " intentos.");
        break
    } else if (Number > adivinanza) {                                   //3
        alert("tu numero es mayor")
    }else {
        alert("tu numero es menor")
    }
}
*/

/*let numero = 32;
let Divisores = 0;

for (let i = 2; i <= Math.floor(numero / i); i++) {
    if (numero % i === 0) {
        Divisores++;
        break; 
    }                                                       //4
}

if (Divisores > 0) {
    console.log("No es primo");
} else {
    console.log("Es primo");
}
    */

/*
let NumeroD = 3;
let divisores = [];

for (let i = 2; i <= NumeroD; i++) {                        //5
    if (NumeroD % i === 0) {
        divisores.push(i);
    }
}

console.log("Los números [" + divisores + "] son divisores");
*/
/*
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.forEach(elemento =>{
                                                           //6
    console.log(elemento);
})
*/
/*
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.forEach(elemento =>{                                //7

    console.log(elemento * 2);
})
*/

/*
let familia = [
    { nombre: "Jose", edad: 22, parentesco: "yo", estatura: 185 },
    { nombre: "María", edad: 23, parentesco: "hermana", estatura: 150 },
    { nombre: "bertha", edad: 43, parentesco: "mama", estatura: 152 },
    { nombre: "elias", edad: 45, parentesco: "papa", estatura: 160 },
    { nombre: "pipe", edad: 17, parentesco: "primo", estatura: 178 }
];                                                                                   //8


familia.forEach(persona => {
    console.log(`Hola, soy ${persona.nombre}, tengo ${persona.edad} años y soy ${persona.parentesco}. Mido ${persona.estatura} cm.`);
});
*/
/*
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let impares = [];

array.forEach(element => {
    if (element % 2 === 1) {
        impares.push(element);                                //9
    }
});
console.log("Números impares:", impares);
*/

/*
let impar = [];
let par = [];
let sumaImpares = 0
let sumaPares = 0

for (let i = 0; i < 100; i++) {
    let numero = parseInt(prompt("Ingresa un número (0 para finalizar):"));

    if (numero === 0) {
        break;                                                            //10
    } else if (numero % 2 === 1) {
        impar.push(numero);
        sumaImpares += numero;
    } else {
        par.push(numero); 
        sumaPares += numero; 
    }
}
console.log("Números impares:", sumaImpares);
console.log("Números pares:", sumaPares);
*/
/*
let array = [1, 2, 3, 4, 22, 6, 7, 8, 9, 10];
let maximo = array[0];
                                                       //11
for (let i = 0; i < array.length; i++) {
   if (array[i]> maximo) {
    maximo = array[i];
    
   }
}
console.log("El número más grande es:", maximo);
*/
/*
let array = [7, 2, 3, 4, 22, 6, 7, 8, 9, 10];
let minimo = array[0];
                                                            //12
for (let i = 0; i < array.length; i++) {
   if (array[i]< minimo) {
    minimo = array[i];
   }
}
console.log("El número más pequeño es:", minimo);
*/


/*let jugador1 = prompt("Ingrese el nombre del jugador 1:");
let jugador2 = prompt("Ingrese el nombre del jugador 2:");

while (true) {
    let manoJugador1 = prompt(`${jugador1}, elige piedra, papel o tijeras:`).toLowerCase();
    let manoJugador2 = prompt(`${jugador2}, elige piedra, papel o tijeras:`).toLowerCase();

    if (manoJugador1 === manoJugador2) {
        console.log("¡Empate! Se sigue jugando...");
        continue;
    } else if ((manoJugador1 === 'piedra' && manoJugador2 === 'tijeras') ||
               (manoJugador1 === 'papel' && manoJugador2 === 'piedra') ||
               (manoJugador1 === 'tijeras' && manoJugador2 === 'papel')) {
        console.log(`¡${jugador1} gana!`);
        break;
    } else {
        console.log(`¡${jugador2} gana!`);
        break;
    }
}*/                                                         //13

/*let asterisco = "* ";
for (let i = 1; i <= 5; i++) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
        linea += asterisco;
    }
    console.log(linea);
}*/                                                         //14

/*let asterisco = "* ";
for (let i = 5; i >= 1; i--) {
    let linea = "";
    for (let j = 1; j <= i; j++) {
        linea += asterisco;
    }
    console.log(linea);
}*/                                                         //15


/*let array = [10, 3, 5, 9, 8, 6, 4, 7, 1, 2];

for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}

console.log("Array ordenado:", array);*/                    //16
