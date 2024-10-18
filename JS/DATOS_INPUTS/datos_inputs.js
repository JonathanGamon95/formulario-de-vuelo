const UL = document.getElementById("cont_formulario_interno");

const SIGUIENTE_1 = document.getElementById("siguiente_1");
const nombre_y_apellido = document.getElementById("nombre_y_apellido");
const DNI = document.getElementById("DNI");

const SIGUIENTE_2 = document.getElementById("siguiente_2");
const origen_vuelo = document.getElementById("origen_vuelo");
const destino_vuelo = document.getElementById("destino_vuelo");

const CONFIRMAR = document.getElementById("confirmar");
const dato_usuario = document.getElementById("dato_nombre_usuario");
const dato_dni = document.getElementById("dato_DNI_usuario");
const dato_destino = document.getElementById("dato_destino_usuario");

const ATRAS = document.querySelectorAll(".atras");

// datos recibidos
let usuario;
let usuario_dni;
let usuario_destino_de_vuelo;


const siguiente_1 = () => {
    if (nombre_y_apellido.value == "" || DNI.value == "") {
        alert("complete los datos para continuar")
    } else {
        confirmacionDePantalla();
        usuario = "";
        usuario_dni = "";

        usuario = nombre_y_apellido.value;
        usuario_dni = DNI.value;

        dato_usuario.textContent = "Usuario: " + usuario;
        dato_dni.textContent = "DNI: " + usuario_dni;
    }
}

const siguiente_2 = () => {
    if (origen_vuelo.value == "" || destino_vuelo.value == "") {
        alert("complete los datos para continuar")
    } else {
        confirmacionDePantalla();
        usuario_destino_de_vuelo = "";
        usuario_destino_de_vuelo = origen_vuelo.value + " A: " + destino_vuelo.value;

        dato_destino.textContent = "De: " + usuario_destino_de_vuelo;


    }
}




let limite = 0;
let siguiente_mobile = 0;
let siguiente_escritorio = 0;

const confirmacionDePantalla = () => {
    const anchoPantalla = window.innerWidth;

    if (anchoPantalla <= 768) {
        siguiente_mobile -= 100;
        UL.style.transform = `translateX(${siguiente_mobile}vw)`;

    } else {
        siguiente_escritorio -= 350;
        UL.style.transform = `translateX(${siguiente_escritorio}px)`;
    }
}




const atras = () => {
    const anchoPantalla = window.innerWidth;

    if (anchoPantalla <= 768) {
        siguiente_mobile += 100;
        UL.style.transform = `translateX(${siguiente_mobile}vw)`;

    } else {
        siguiente_escritorio += 350;
        UL.style.transform = `translateX(${siguiente_escritorio}px)`;
    }
}




const confirmacion = () => {
    swal({
        title: "pasaje confirmada!",
        text: "ya tiene un pasaje!",
        icon: "success",
    });

    nombre_y_apellido.value = "";
    DNI.value = "";
    origen_vuelo.value = "";
    destino_vuelo.value = "";

    usuario = "";
    usuario_dni = "";
    usuario_destino_de_vuelo = "";

    dato_usuario.textContent = "";
    dato_destino.textContent = "";
    dato_dni.textContent = "";

    limite = 0;
    siguiente_mobile = 0;
    siguiente_escritorio = 0;

    UL.style.transform = `translateX(${siguiente_mobile})`;
}


SIGUIENTE_1.addEventListener("click", () => siguiente_1());
SIGUIENTE_2.addEventListener("click", () => siguiente_2());
CONFIRMAR.addEventListener("click", () => confirmacion());

ATRAS.forEach((boton) => {
    boton.addEventListener("click", () => atras())
})