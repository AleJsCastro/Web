<?php
include 'funciones.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    if (registrarUsuario($nombre, $email, $password)) {
        echo "Registro exitoso";
    } else {
        echo "Error en el registro";
    }
}
?>