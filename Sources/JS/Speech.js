  /*Function to gerUri this function return uri[6] or uri[7]*/
    function getURI(){

      var request = window.location.href.split("/")
      var url = []
      url[0]="dft"

      if(request[5] != ""){
        url=request[5].split(".")
      }
      if(request[6] != ""){
        url=request[6].split(".")
      }

      return url[0].toLowerCase()

    }

    //Codigo para la reproduccion del audio de la pagina
    function inicio(){
      let paragraph1 = document.getElementById("paragraph1").textContent;
      speech("¿Quiénes Somos?",paragraph1)
    }
    function antecedentes(){
      let paragraph1 = document.getElementById("paragraph1").textContent;
      let paragraph2 = document.getElementById("paragraph2").textContent;
      let paragraph3 = document.getElementById("paragraph3").textContent;
      speech("",paragraph1)
      speech("",paragraph2)
      speech("",paragraph3)
    }
    function mision(){
      let paragraph1 = document.getElementById("paragraph1").textContent;
      let paragraph2 = document.getElementById("paragraph2").textContent;
      let paragraph3 = document.getElementById("paragraph3").textContent;

      let objetive1 = document.getElementById("objetive1").textContent;
      let objetive2 = document.getElementById("objetive2").textContent;
      let objetive3 = document.getElementById("objetive3").textContent;
      let objetive4 = document.getElementById("objetive4").textContent;
      let objetive5 = document.getElementById("objetive5").textContent;
      let objetive6 = document.getElementById("objetive6").textContent;
      let objetive7 = document.getElementById("objetive7").textContent;

      speech("Misión",paragraph1)
      speech("Visión",paragraph2)
      speech("objetives",paragraph3)

      speech("objetives Especificos",objetive1)
      speech("",objetive2)
      speech("",objetive3)
      speech("",objetive4)
      speech("",objetive5)
      speech("",objetive6)
      speech("",objetive7)
    }
    function proyectos(){
      let proyect1 = document.getElementById("proyect1").textContent;
      let proyect2 = document.getElementById("proyect2").textContent;
      let proyect3 = document.getElementById("proyect3").textContent;
      let proyect4 = document.getElementById("proyect4").textContent;
      let proyect5 = document.getElementById("proyect5").textContent;
      let proyect6 = document.getElementById("proyect6").textContent;
      let proyect7 = document.getElementById("proyect7").textContent;
      let proyect8 = document.getElementById("proyect8").textContent;

      speech("Silla de ruedas motorizada",proyect1)
      speech("Hybri-voz",proyect2)
      speech("Con Ciencia Pi",proyect3)
      speech("Fidem Pad",proyect4)
      speech("ComuniKT",proyect5)
      speech("Sam Speech",proyect6)
      speech("Guante ultrasónico",proyect7)
      speech("Robot controlado por señales del cerebro",proyect8)
    }
    function dft(){
      let texto = "Navega por nuestra pagina para poder utilizar el lector de texto"
      speech("",texto)
    }
    function speech(titulo,texto){
      speechSynthesis.speak(new SpeechSynthesisUtterance(titulo));
      speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    }
    function startSpeech(){
      let currentPage = getURI()
      let fn = window[currentPage]
      fn()
    }
    function stopSpeech(){
      speechSynthesis.cancel()
    }
