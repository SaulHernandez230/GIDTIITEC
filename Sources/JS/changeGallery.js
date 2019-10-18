//activar y desactivar anchor
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");

$(document).ready(function(){
  $(".proyect button").click(function(){

    var currentButton = this.id
    alert(currentButton)

    switch (currentButton) {
      case 'btn1':
        img1.src="../../Sources/Img/F4.png"
        img2.src="../../Sources/Img/F4.png"
        img3.src="../../Sources/Img/F4.png"
        img4.src="../../Sources/Img/F4.png"
        break;
      case 'btn2':
        img1.src="../../Sources/Img/F4.png"
        img2.src="../../Sources/Img/F4.png"
        img3.src="../../Sources/Img/F4.png"
        img4.src="../../Sources/Img/F4.png"
        break;
      case 'btn3':
        img1.src="../../Sources/Img/F4.png"
        img2.src="../../Sources/Img/F4.png"
        img3.src="../../Sources/Img/F4.png"
        img4.src="../../Sources/Img/F4.png"
        break;
      case 'btn4':
        img1.src="../../Sources/Img/F4.png"
        img2.src="../../Sources/Img/F4.png"
        img3.src="../../Sources/Img/F4.png"
        img4.src="../../Sources/Img/F4.png"
        break;
      case 'btn5':
        img1.src="../../Sources/Img/F4.png"
        img2.src="../../Sources/Img/F4.png"
        img3.src="../../Sources/Img/F4.png"
        img4.src="../../Sources/Img/F4.png"
        break;
      case 'btn6':
        img1.src="../../Sources/Img/F4.png"
        img2.src="../../Sources/Img/F4.png"
        img3.src="../../Sources/Img/F4.png"
        img4.src="../../Sources/Img/F4.png"
        break;
      case 'btn7':
        img1.src="../../Sources/Img/F4.png"
        img2.src="../../Sources/Img/F4.png"
        img3.src="../../Sources/Img/F4.png"
        img4.src="../../Sources/Img/F4.png"
        break;
      case 'btn8':
        img1.src="../../Sources/Img/F4.png"
        img2.src="../../Sources/Img/F4.png"
        img3.src="../../Sources/Img/F4.png"
        img4.src="../../Sources/Img/F4.png"
        break;

      default:
      img1.src="../../Sources/Img/F4.png"
      img2.src="../../Sources/Img/F4.png"
      img3.src="../../Sources/Img/F4.png"
      img4.src="../../Sources/Img/F4.png"
    }
  });
});
