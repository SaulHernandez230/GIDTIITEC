<?php
$request = explode("/",$_SERVER['REQUEST_URI']);
$url = "";

require("../Sources/Components/Header.html");

/*Validacion de uri*/
if(isset($request[5]))
  $url=$request[5];
if(isset($request[6]))
  $url="";

switch ($url){
  case 'Antecedentes.php':
    require("../Sources/Views/Antecedentes.php");
    break;
  case 'Mision.php':
    require("../Sources/Views/Mision.php");
    break;
  case 'Proyectos.php':
    require("../Sources/Views/Proyectos.php");
    break;
  case 'Premios.php':
    require("../Sources/Views/Premios.php");
    break;
  case 'Contactanos.php':
    require("../Sources/Views/Contactanos.php");
    break;
  default:
      // require_once __DIR__ . '/index.php';
      require("../Sources/Views/Inicio.php");
      break;
}
require("../Sources/Components/footer.html");
?>
