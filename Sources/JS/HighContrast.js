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
  var adjust = document.getElementById("link9")
  var mode = sessionStorage.getItem("mode")
  if( mode === "dark"){
    $('#nav').removeClass("bg-light");
    adjust.href="/GIDTIITEC/Sources/CSS/highContrast.css"
  }else{
    $('#nav').addClass("bg-light");
    adjust.href=""
  }
}
