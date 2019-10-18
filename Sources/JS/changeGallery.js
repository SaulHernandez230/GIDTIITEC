//Modificar las imagenes de la galeria dependiedo de los data de sus botones

var tittle = document.getElementById("galleryTittle");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");

$(document).ready(function(){
  $(".proyect button").click(function(){

    tittle.textContent=this.dataset.tittle;
    img1.src=this.dataset.src1;
    img2.src=this.dataset.src2;
    img3.src=this.dataset.src3;
    img4.src=this.dataset.src4;
  });
});
