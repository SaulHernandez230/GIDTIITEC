<?php
$request = explode("/",$_SERVER['REQUEST_URI']);
require("../Sources/Components/Header.html");
$url = "";
if(isset($request[5]))
  $url=$request[5];

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
      // require_once __DIR__ . '/Inicio.php';
      require("../Sources/Views/Inicio.php");
      break;
}
require("../Sources/Components/footer.html");
?>
