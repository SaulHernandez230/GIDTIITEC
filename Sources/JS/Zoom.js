$(document).ready(function(){
  $("img").attr('data-target','#zoom-modal');
  $("img").attr('data-toggle','modal');
  var img = document.getElementById("imgZoom");
  $("img").click(function(){
    img.src= this.src
  });
});
