<?php 
  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Methods: *");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);
  
  require("conexion.php");
  $con=conectar();
  

  mysqli_query($con,"insert into historial(id_dni_2, id_empleado_2, nro_entrada, fecha) values
                  ('$params->id_dni','$params->id_empleado','$params->nro_entrada'
                  '$params->fecha')");
    
  
  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'Ingreso registrado en su historial';

  header('Content-Type: application/json');
  echo json_encode($response);  
?>