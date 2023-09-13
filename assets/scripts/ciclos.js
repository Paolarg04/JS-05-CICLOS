/*

Condiciones : alterar el orden natural del codigo
estructura de control: controlar la ejecucion del codigo



Ciclos o bucles (loops)


Tambien conodidos como bucles, son estructuras de control que nos van a permitir ejecutar un bloque de codigo de forma repetida, hasta que se cumpla una condicion especifica.

Es importante usar ciclos para automatizar tareas repetitivas.


En JS existen los siguientes ciclos:

    - while
    - do while
    - for



Iterar: proceso de repetir una secuencia de instrucciones
Estructura de control: herramienta especial para crear algoritmos o programas mas dinamicos y flexibles.


*/

/* While: Ejecuta un bloque de codigo mientras se cumpla una condicion especifica. Este ciclo se repite mientras la condicion sea verdadera, y el bloque de codigo se ejecuta siempre u cuando la condicion se mantenga. La condicion se evalua antes de cada iteracion.


while (condicion){
    //codigo que se ejecuta
}

*/

//Siempre habra dos opciones: true o false
//while (miCrushMeQuiere){
//    console.log("Sere feliz");
//}



//Ejemplo de un consultorio dental

let capacidadPacientes = 50;
let pacientesEnConsultorio = 15;

//mientras 15 sea menor que 50 ...
while (pacientesEnConsultorio < capacidadPacientes){
    //seguire dando servicio
    console.log("Seguimos dando servicio");
    //aumento en uno mis pacientes
    pacientesEnConsultorio++;
}


//Mientras sea verdadero, se ejecuta la instruccion (pidan permiso para ir a una fiesta)


/* Do While (hacer mientras)


//Se ejecuta la instruccion, mientras sea verdadero (pedir perdon por ir a la fiesta)


El bucle do while se diferencia del while ya que aqui se ejecuta la instruccion al menos una vez, luego se pregunta para saber si se sigue ejecutando o no.


do {
    //codigo a ejecutar

} while (condicion);


Analogia: Cuando preparamos un pastel



 */

//Ejemplo de un consultorio dental

var contadorPacientes = 0;

do {
    var nombre = prompt ("Ingresa el nombre del paciente");
    if (contadorPacientes < 15) {
        console.log(nombre, "registrado con exito!")
        contadorPacientes ++;
    }else{
        console.log("Limite excedido")
        break;
    }
}while (confirm("Desea ingresar otro paciente?"));


console.log("Numero total de pacientes: " , contadorPacientes);



/**

For (para)

Se utiliza cuando conocemos el numero exacto de iteraciones que vamos a realizar.
Consiste de 3 partes fundamentales:

    - inicializacion: se ejecuta antes de que el bucle comience y se usa para establecer una variable de control (variable de inicio)
    - condicion: es el detonante que verificamos antes de cada iteracion, para saber si se sigue ejecutando o no (siempre y cuando sea verdadera)
    - expresion de iteracion (contador): tiene la finalidad de modificar la variable de inicio y poder tener un punto de cierre.


    for (inicializacion; condicion ; expresion de iteracion) {
        //bloque de codigo a ejecutar
    }


 */


//Crea un codigo que imprima los numero del 0 al 4

for (var valorInicial = 0; valorInicial<5; valorInicial++) {
    console.log(valorInicial);
}

// Version mas "comercial"

for (var i =0; i<5 ; i+=5){
    console.log(i);
}


// Consultorio dental registro de citas con un for

let cantidadDeCitasDiarias = 5;


for (let i = 1; i <= cantidadDeCitasDiarias; i++) {
    var nombre = prompt ("Ingrese el nombre del paciente " + i);
    console.log("Pciente con cita " + nombre + i);
}
