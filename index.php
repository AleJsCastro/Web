<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro e Inicio de Sesión</title>
</head>
<body>

<h2>Registro</h2>
<form action="registro.php" method="post">
    <label for="nombre">Nombre:</label>
    <input type="text" name="nombre" required><br>
    
    <label for="email">Email:</label>
    <input type="email" name="email" required><br>
    
    <label for="password">Contraseña:</label>
    <input type="password" name="password" required><br>
    
    <input type="submit" value="Registrarse">
</form>

<h2>Iniciar Sesión</h2>
<form action="login.php" method="post">
    <label for="email">Email:</label>
    <input type="email" name="email" required><br>
    
    <label for="password">Contraseña:</label>
    <input type="password" name="password" required><br>
    
    <input type="submit" value="Iniciar Sesión">
</form>

</body>
</html>
