<?php
include_once('conexion.php');

$email = $_GET['email'];
$objconexion = new conection();
$token = $objconexion->consultar("SELECT token FROM `user_credentials` WHERE mail_user = '$email'");
$tokenPro = $token[0][0];
mail($email, "Cambio de contraseña", "Entra en este link para cambiar tu contraseña: \n http://localhost/LEAFING/Crea-J-2022/php/changePassword.php?token=$tokenPro");
