<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>adsas</h1>
    <?
    $request = $_SERVER['REQUEST_URI'];
    echo "$request";
    switch ($request) {
      case '/' :
          require __DIR__ . '/views/index.php';
          break;
      case '' :
          require __DIR__ . '/views/index.php';
          break;
      case '/Mison' :
          require __DIR__ . '../Sources/HTML/Views/Mision.php';
          break;
      default:
          require __DIR__ . '/views/404.php';
          break;
    }
    ?>
  </body>
</html>
