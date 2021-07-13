//variables
let $btnDep = document.getElementById("dep");
let $depa = document.getElementById("depa");
let $capital = document.getElementById("capital");
let $info = document.getElementById("info");


//funciones
const imprimirDepartamento = (ciu, dep, info) => {
    let msg = "La ciudad de " + ciu + " es la capital de " + dep;
    $depa.innerHTML += " "+ dep;
    $capital.innerHTML += " " + ciu;
    $info.href = info;
    alert(msg);
    console.log(msg);
};

const setDep = () => {
    let location = prompt("ingrese un departamento").toLowerCase();
    
    if (location === "amazonas") {
        imprimirDepartamento("Leticia", location, "https://es.wikipedia.org/wiki/Leticia_(Colombia)");
    } else if (location === "antioquia") {
        imprimirDepartamento("Medellín", location, "https://es.wikipedia.org/wiki/Medell%C3%ADn");
    } else if (location === "arauca") {//: .
        imprimirDepartamento("Arauca", location, "https://es.wikipedia.org/wiki/Arauca_(Arauca)");
    } else if (location === "") {
        imprimirDepartamento("", location, "");
    } else if (location === "") {
        imprimirDepartamento("", location, "");
    } else if (location === "") {
        imprimirDepartamento("", location, "");
    } else if (location === "") {
        imprimirDepartamento("", location, "");
    } else if (location === "") {
        imprimirDepartamento("", location, "");
    } else if (location === "") {
        imprimirDepartamento("", location, "");
    } else if (location === "") {
        imprimirDepartamento("", location, "");
    } else if (location === "") {
        imprimirDepartamento("", location, "");
    } else if (location === "") {
        imprimirDepartamento("", location, "");
    } else if (location === "") {
        imprimirDepartamento("", location, "");
    } else if (location === "") {
        imprimirDepartamento("", location, "");
    } else if (location === "") {
        imprimirDepartamento("", location, "");
    } else if (location === "") {
        imprimirDepartamento("", location, "");
    } else if (location === "") {
        imprimirDepartamento("", location, "");
    } else if (location === "") {
        imprimirDepartamento("", location, "");
    } else if (location === "") {
        imprimirDepartamento("", location, "");
    } else if (location === "") {
        imprimirDepartamento("", location, "");
    } else if (location === "") {
        imprimirDepartamento("", location, "");
    } else if (location === "") {
        imprimirDepartamento("", location, "");
    } else if (location === "") {
        imprimirDepartamento("", location, "");
    } else if (location === "") {
        imprimirDepartamento("", location, "");
    } else if (location === "") {
        imprimirDepartamento("", location, "");
    } else if (location === "") {
        imprimirDepartamento("", location, "");
    } else if (location === "") {
        imprimirDepartamento("", location, "");
    } else if (location === "") {
        imprimirDepartamento("", location, "");
    } else if (location === "") {
        imprimirDepartamento("", location, "");
    } else if (location === "") {
        imprimirDepartamento("", location, "");
    } else if (location === "") {
        imprimirDepartamento("", location, "");
    } else if (location === "") {
        imprimirDepartamento("", location, "");
    }
};


/**


Atlántico: Barranquilla.
Bolívar: Cartagena de Indias.
Boyacá: Tunja.
Caldas: Manizales.
Caquetá: Florencia.
Casanare: Yopal.
Cauca: Popayán.
Cesar: Valledupar.
Chocó: Quibdó.
Córdoba: Montería.
Cundinamarca: Bogotá.
Guainía: Inírida.
Guaviare: San José del Guaviare.
 */


//eventos
$btnDep.onclick = function () {
    setDep();
};