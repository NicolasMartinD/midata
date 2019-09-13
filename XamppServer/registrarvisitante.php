<?php 
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Methods: *");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);
  
  require("conexion.php");
  $con=conectar();
  

  mysqli_query($con,"insert into visitante(id_dni, nombre, apellido, nro_tarjeta) values
                  ('$params->id_dni','$params->nombre','$params->apellido',
                  '$params->nroTarjeta')");
    
  
  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'Se ha registrado su identidad en la base de datos';

  header('Content-Type: application/json');
  echo json_encode($response);  
?>