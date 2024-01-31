<?php
include 'funciones.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    if (iniciarSesion($email, $password)) {
        echo "Inicio de sesión exitoso";
    } else {
        echo "Credenciales incorrectas";
    }
}
?>