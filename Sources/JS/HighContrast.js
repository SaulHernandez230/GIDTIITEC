function changeContrast(){
  var nav = document.getElementById('nav')
  if(nav.dataset.mode === "dark"){
    nav.dataset.mode = "light"
  }else{
    nav.dataset.mode = "dark"
  }
  sessionStorage.setItem("mode",nav.dataset.mode)
  highContrast()
}
function highContrast(){
  var contrast = document.getElementById("link10")
  var logo = document.getElementById("logo")
  var mode = sessionStorage.getItem("mode")
  if( mode === "dark"){
    $('#nav').removeClass("bg-light");
    $('*').removeClass("light")
    $('*').addClass("dark")
    logo.src= "/GIDTIITEC/Sources/Img/gidtiitec1.png"
  }else{
    $('#nav').addClass("bg-light");
    $('*').removeClass("dark")
    $('*').addClass("light");
    logo.src= "/GIDTIITEC/Sources/Img/gidtiitec.png"
  }
}
