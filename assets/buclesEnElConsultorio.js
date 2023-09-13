console.log("practicando Bucles consultorio")

var contraseñaGuardada="123";
var usuarioGuardado="paolarg04";

function login(){

let intentos=0;
let accessIn= true;
while (accessIn && intentos<4){
    usuario=prompt("ingrese su nombre de usuario ");

contraseña=prompt("ingrese su contraseña ")

if (usuario===usuarioGuardado && contraseña===contraseñaGuardada){
    console.log("acceso permitido");
    accessIn= false;
}
console.log(intentos)
intentos++;

}
if(intentos==4){
    console.log("excediste el numero de intentos");
}

}
login();

