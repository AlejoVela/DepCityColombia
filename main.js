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
    } else if (location === "atlántico" || location === "atlantico") {//: .
        imprimirDepartamento("Barranquilla", location, "https://es.wikipedia.org/wiki/Barranquilla");
    } else if (location === "bolívar" || location === "bolivar") {//: .
        imprimirDepartamento("Cartagena de Indias", location, "https://es.wikipedia.org/wiki/Cartagena_de_Indias");
    } else if (location === "boyacá" || location === "boyaca") {//: .
        imprimirDepartamento("Tunja", location, "https://es.wikipedia.org/wiki/Tunja");
    } else if (location === "caldas") {//: .
        imprimirDepartamento("Manizales", location, "https://es.wikipedia.org/wiki/Manizales");
    } else if (location === "caquetá" || location === "caqueta") {//: .
        imprimirDepartamento("Florencia", location, "https://es.wikipedia.org/wiki/Florencia_(Caquet%C3%A1)");
    } else if (location === "casanare") {//: .
        imprimirDepartamento("Yopal", location, "https://es.wikipedia.org/wiki/Yopal");
    } else if (location === "cauca") {//: .
        imprimirDepartamento("Popayán", location, "https://es.wikipedia.org/wiki/Popay%C3%A1n");
    } else if (location === "cesar") {//: .
        imprimirDepartamento("Valledupar", location, "https://es.wikipedia.org/wiki/Valledupar");
    } else if (location === "chocó" || location === "choco") {
        imprimirDepartamento("Quibdó", location, "https://es.wikipedia.org/wiki/Quibd%C3%B3");
    } else if (location === "córdoba" || location === "cordoba") {//: .
        imprimirDepartamento("Montería", location, "https://es.wikipedia.org/wiki/Monter%C3%ADa");
    } else if (location === "cundinamarca") {//: .
        imprimirDepartamento("Bogotá", location, "https://es.wikipedia.org/wiki/Bogot%C3%A1");
    } else if (location === "guainía" || location === "guainia") {//: .
        imprimirDepartamento("Inírida", location, "https://es.wikipedia.org/wiki/In%C3%ADrida");
    } else if (location === "guaviare") {//: .
        imprimirDepartamento("San José del Guaviare", location, "https://es.wikipedia.org/wiki/San_Jos%C3%A9_del_Guaviare");
    } else if (location === "huila") {//: .
        imprimirDepartamento("Neiva", location, "https://es.wikipedia.org/wiki/Neiva");
    } else if (location === "la guajira" || location === "guajira") {//: .
        imprimirDepartamento("Riohacha", location, "https://es.wikipedia.org/wiki/Riohacha");
    } else if (location === "magdalena") {
        imprimirDepartamento("Santa Marta", location, "https://es.wikipedia.org/wiki/Santa_Marta_(Colombia)");
    } else if (location === "meta") {//: .
        imprimirDepartamento("Villavicencio", location, "https://es.wikipedia.org/wiki/Villavicencio");
    } else if (location === "nariño") {
        imprimirDepartamento("San Juan de Pasto", location, "https://es.wikipedia.org/wiki/Pasto_(Colombia)");
    } else if (location === "norte de santander" || location === "santander") {//: 
        imprimirDepartamento("San José de Cúcuta", location, "https://es.wikipedia.org/wiki/San_Jos%C3%A9_de_C%C3%BAcuta");
    } else if (location === "putumayo") {//: .
        imprimirDepartamento("Mocoa", location, "https://es.wikipedia.org/wiki/Mocoa");
    } else if (location === "quindío" || location === "quindio") {//: 
        imprimirDepartamento("Armenia", location, "https://es.wikipedia.org/wiki/Armenia");
    } else if (location === "risaralda") {//: .
        imprimirDepartamento("Pereira", location, "https://es.wikipedia.org/wiki/Pereira");
    } else if (location === "san andres y providencia" || location === "andres" || location === "providencia") {
        imprimirDepartamento("San Andrés", location, "https://es.wikipedia.org/wiki/Archipi%C3%A9lago_de_San_Andr%C3%A9s,_Providencia_y_Santa_Catalina");
    } else if (location === "santander") {//: .
        imprimirDepartamento("Bucaramanga", location, "https://es.wikipedia.org/wiki/Bucaramanga");
    } else if (location === "sucre") {//: .
        imprimirDepartamento("Sincelejo", location, "https://es.wikipedia.org/wiki/Sincelejo");
    } else if (location === "tolima") {//: .
        imprimirDepartamento("Ibagué", location, "https://es.wikipedia.org/wiki/Ibagu%C3%A9");
    } else if (location === "valle del cauca" || location === "cauca") {//: .
        imprimirDepartamento("Cali", location, "https://es.wikipedia.org/wiki/Cali");
    } else if (location === "vaupés" || location === "vaupes") {//: .
        imprimirDepartamento("Mitú", location, "https://es.wikipedia.org/wiki/Mit%C3%BA");
    } else if (location === "vichada") {//:.
        imprimirDepartamento("puerto carreño", location, "https://es.wikipedia.org/wiki/Puerto_Carre%C3%B1o");
    } else {
        alert("Ha ingresado un valor distinto al esperado");
    }
};

//eventos
$btnDep.onclick = function () {
    setDep();
};