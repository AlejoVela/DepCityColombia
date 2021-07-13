//Ejercicio practico JS 1
// || pipeline, operador OR

const saludador = () => {
    let saludo = prompt("ingresa un saludo");
    saludo = saludo.toLowerCase(); //pasamos la cadena a minusculas para realizar una validacion mas optima
    //pasamos la cadena a mayuculas con saludo.toUpperCase();
    
    if (saludo === "hola" || saludo === "que tal") { // 
        alert("Gracias por saludar");
    } else {
        alert("que mal, saluda primero")
    }
    // || cualquier opcion que de true, entra al bloque de codigo
    // && - todas las opciones tienen que ser true para poder entrar

};






//ingresar un pueblo o ciudad y debe responder la app con el departamento
//variable - if/else
// 4 ciudades o pueblos - 4 departamento 

/**Ingresar este boton en el HTML
 * <button onclick="ingresarCiudad()">Ingresar Ciudad/Pueblo</button>
 */
const imprimirDepartamento = (ciu, dep) => {
    let msg = "La ciudad de " + ciu + " pertenece al departamento de " + dep;
    alert(msg);
    console.log(msg);
};

const ingresarCiudad = () => {
    let locacion = prompt("ingrese su ciudad pueblo").toLowerCase();
    console.log(locacion);
    if(locacion==="tunja" || locacion==="sogamoso" || locacion==="chiquinquira" || locacion==="chiquinquirá"){
        //boyaca
        imprimirDepartamento(locacion, "Boyacá");
    } 
    else if (locacion==="bogota" || locacion==="bogotá" || locacion==="funza" || locacion==="soacha"){
        //cundinamarca
        imprimirDepartamento(locacion, "Cundinamarca");
    }
    else if(locacion==="medellin" || locacion==="medellín" || locacion==="bello" || locacion==="envigado"){
        //antioquia
        imprimirDepartamento(locacion, "Antioquía");
    }
    else if(locacion==="calí" || locacion==="cali" || locacion==="tulua" || locacion==="tuluá" || locacion==="buga"){
        //valle del cauca
        imprimirDepartamento(locacion, "Valle del Cauca");
    }
    else{
        alert("Ha ingresado una locacion no registrada en el sistema");
    }
};