<?php

function conectar(){

  $con=mysqli_connect("localhost","root","","datosvisita");
  
  return $con;
}

?>