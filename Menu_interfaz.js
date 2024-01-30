// Constantes y selecciones de elementos
const btnIniciarSesion = document.getElementById("btn__iniciar-sesion");
const btnRegistrarse = document.getElementById("btn__registrarse");
const formularioLogin = document.querySelector(".formulario__login");
const formularioRegister = document.querySelector(".formulario__register");
const contenedorLoginRegister = document.querySelector(".contenedor__login-register");
const cajaTraseraLogin = document.querySelector(".caja__trasera-login");
const cajaTraseraRegister = document.querySelector(".caja__trasera-register");

// Eventos
btnIniciarSesion.addEventListener("click", mostrarFormularioLogin);
btnRegistrarse.addEventListener("click", mostrarFormularioRegistro);
window.addEventListener("resize", ajustarVentana);

// Funciones
function ajustarVentana() {
    const anchoVentana = window.innerWidth;

    if (anchoVentana > 850) {
        mostrarElementosEnVentanaAmplia();
    } else {
        mostrarElementosEnVentanaReducida();
    }
}

function mostrarElementosEnVentanaAmplia() {
    cajaTraseraRegister.style.display = "block";
    cajaTraseraLogin.style.display = "block";
}

function mostrarElementosEnVentanaReducida() {
    cajaTraseraRegister.style.display = "block";
    cajaTraseraRegister.style.opacity = "1";
    cajaTraseraLogin.style.display = "none";
    formularioLogin.style.display = "block";
    contenedorLoginRegister.style.left = "0px";
    formularioRegister.style.display = "none";
}

function mostrarFormularioLogin() {
    if (window.innerWidth > 850) {
        formularioLogin.style.display = "block";
        contenedorLoginRegister.style.left = "10px";
        formularioRegister.style.display = "none";
        cajaTraseraRegister.style.opacity = "1";
        cajaTraseraLogin.style.opacity = "0";
    } else {
        mostrarElementosEnVentanaReducida();
    }
}

function mostrarFormularioRegistro() {
    if (window.innerWidth > 850) {
        formularioRegister.style.display = "block";
        contenedorLoginRegister.style.left = "410px";
        formularioLogin.style.display = "none";
        cajaTraseraRegister.style.opacity = "0";
        cajaTraseraLogin.style.opacity = "1";
    } else {
        formularioRegister.style.display = "block";
        contenedorLoginRegister.style.left = "0px";
        formularioLogin.style.display = "none";
        cajaTraseraRegister.style.display = "none";
        cajaTraseraLogin.style.display = "block";
        cajaTraseraLogin.style.opacity = "1";
    }
}

// Llamada inicial a la función de ajuste de ventana
ajustarVentana();
