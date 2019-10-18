//activar y desactivar anchor
$(document).ready(function(){
  $("a").click(function(){

    var currentPage = this.textContent;

    $('a').removeClass("active");
    $(this).addClass("active");

    speechSynthesis.cancel()
    if(currentPage =="Inicio")
      window.location = "/proyectos/GIDTIITEC/Public/index.php/";
    else
      window.location = "/proyectos/GIDTIITEC/Public/index.php/"+currentPage+".php";
    // alert(currentPage);
  });
});
