<?php
$request = explode("/",$_SERVER['REQUEST_URI']);
$url = "";

require("../Sources/Components/Header.html");

/*Validacion de uri*/
if(isset($request[4]))
  $url=$request[4];
if(isset($request[5]))
  $url = $request[5];
switch (UrlDecode($url)){
  case 'Antecedentes.php':
    require("../Sources/Views/Records.php");
    break;
  case 'Misión.php':
    require("../Sources/Views/Mission.php");
    break;
  case 'Proyectos.php':
    require("../Sources/Views/Proyects.php");
    break;
  case 'Premios.php':
    require("../Sources/Views/Rewards.php");
    break;
  case 'Contáctanos.php':
    require("../Sources/Views/ContactUs.php");
    break;
  default:
      require("../Sources/Views/Home.php");
      break;
}
require('../Sources/Components/Zoom.php');
require("../Sources/Components/footer.html");
?>
