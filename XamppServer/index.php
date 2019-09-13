<?php

include ("conexion.php");

$con=conectar();

if(!$con){
    echo 'Error al ingresar a la base de datos';
}
else{
    echo 'Ingreso a la base de datos correcto';
}

?>