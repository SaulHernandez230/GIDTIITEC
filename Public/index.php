<?php
$request = explode("/",$_SERVER['REQUEST_URI']);
$url = "";

require("../Sources/Components/Header.html");

/*Validacion de uri*/
if(isset($request[4]))
  $url=$request[4];
if(isset($request[5]))
  $url=$request[5];
switch ($url){
  case 'Antecedentes.php':
    require("../Sources/Views/Records.php");
    break;
  case 'Mision.php':
    require("../Sources/Views/Mission.php");
    break;
  case 'Proyectos.php':
    require("../Sources/Views/Proyects.php");
    break;
  case 'Premios.php':
    require("../Sources/Views/Rewards.php");
    break;
  case 'Contactanos.php':
    require("../Sources/Views/ContactUs.php");
    break;
  default:
      // require_once __DIR__ . '/index.php';
      require("../Sources/Views/Home.php");
      break;
}
require('../Sources/Views/Zoom.php');
require("../Sources/Components/footer.html");
?>
