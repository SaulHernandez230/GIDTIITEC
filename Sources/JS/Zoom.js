//activar y desactivar anchor
$(document).ready(function(){
  $("img").click(function(){

    var currentPageId = this.id
    var currentPage = this.textContent
    var bCurrentPageId = "b"+this.id

    speechSynthesis.cancel()

    sessionStorage.setItem("saveClass","nav-link active")
    sessionStorage.setItem("anchorId",currentPageId)
    sessionStorage.setItem("breadId",bCurrentPageId)

    if(currentPage == "Inicio")
      window.location = "/GIDTIITEC/Public/index.php/";

    else
      window.location = "/GIDTIITEC/Public/index.php/"+currentPage + ".php";
  });

  var anchor = document.getElementById(sessionStorage.getItem("anchorId"))
  var bread = document.getElementById(sessionStorage.getItem("breadId"))
  anchor.className =sessionStorage.getItem("saveClass")
  bread.style ="display:initial"
  if(sessionStorage.getItem("mode")!= null){
    var fn = window["highContrast"]
    fn()
  }
});
