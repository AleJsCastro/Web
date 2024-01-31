<?php
session_start();

$servername = "servidor_mysql";
$username = "usuario_mysql";
$password = "contraseña_mysql";
$dbname = "base_de_datos";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

function registrarUsuario($nombre, $email, $password) {
    global $conn;

    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    $sql = "INSERT INTO usuarios (nombre, email, password) VALUES ('$nombre', '$email', '$hashed_password')";

    if ($conn->query($sql) === TRUE) {
        return true;
    } else {
        return false;
    }
}

function iniciarSesion($email, $password) {
    global $conn;

    $sql = "SELECT * FROM usuarios WHERE email='$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['password'])) {
            $_SESSION['usuario_id'] = $row['id'];
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
?>
