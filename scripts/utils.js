/* ---------------------------------- texto --------------------------------- */
function validarTexto(texto) {
    return texto ? true : false;
}

function normalizarTexto(texto) {
    return texto.toLowerCase().trim();
}

/* ---------------------------------- email --------------------------------- */
function validarEmail(email) {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex.test(email);
}

function normalizarEmail(email) {
    normalizarTexto(email);    
}

/* -------------------------------- password -------------------------------- */
function validarContrasenia(contrasenia) {
    // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(contrasenia);
}

function compararContrasenias(contrasenia_1, contrasenia_2) {
    return contrasenia_1 === contrasenia_2 ? true : false;
}

