const limitInput = document.getElementById('cantidad');
const contrasena = document.getElementById('contrasena');
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
const hasNums = /\d/;
const hasSimbols = /[!@#$%^&*()_+\[\]{}|;:,.<>?]/;

function generarContrasena() {
    const num = parseInt(limitInput.value);

    if (limitInput.value == '' || (num == 0 || num < 0)) {
        alert("Debes introducir un número antes de generar una contraseña.");
    } else {
        let newPassword = '';

        for (let i = 0; i < num; i++) {
            let newCharacter = characters[Math.floor(Math.random() * characters.length)];
            newPassword += newCharacter;
        };

        contrasena.value = newPassword;

        if (hasSimbols.test(newPassword)) {
            alert("La contraseña generada es muy fuerte.");
        } else if (hasNums.test(newPassword)) {
            alert("La contraseña generada es fuerte.");
        } else {
            alert("La contraseña generada es débil.");
        };
    };
};

function limpiarContrasena() {
    contrasena.value = '';
};