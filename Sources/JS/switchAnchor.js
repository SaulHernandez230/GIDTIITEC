//activar y desactivar anchor
$(document).ready(function(){
  
  $("a").click(function(){
    var currentPageId = this.id
    var currentPage = this.textContent
    var bCurrentPageId = "b"+this.id
    speechSynthesis.cancel()

    sessionStorage.setItem("saveClass","nav-link active")
    sessionStorage.setItem("anchorId",currentPageId)
    sessionStorage.setItem("breadId",bCurrentPageId)

    window.location = "/GIDTIITEC/Public/index.php/"+currentPage + ".php";
  });

  var anchor = document.getElementById(sessionStorage.getItem("anchorId"))
  var bread = document.getElementById(sessionStorage.getItem("breadId"))
  anchor.className =sessionStorage.getItem("saveClass")
  bread.style ="display:initial"
  var fn = window["highContrast"]
    fn()
});
