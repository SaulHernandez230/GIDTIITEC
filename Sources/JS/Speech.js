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
    function antecedentes(){
      var paragraph1 = document.getElementById("paragraph1").textContent;
      var paragraph2 = document.getElementById("paragraph2").textContent;
      var paragraph3 = document.getElementById("paragraph3").textContent;
      speech("",paragraph1)
      speech("",paragraph2)
      speech("",paragraph3)
    }
    function mision(){
      var paragraph1 = document.getElementById("paragraph1").textContent;
      var paragraph2 = document.getElementById("paragraph2").textContent;
      var paragraph3 = document.getElementById("paragraph3").textContent;

      var objetive1 = document.getElementById("objetive1").textContent;
      var objetive2 = document.getElementById("objetive2").textContent;
      var objetive3 = document.getElementById("objetive3").textContent;
      var objetive4 = document.getElementById("objetive4").textContent;
      var objetive5 = document.getElementById("objetive5").textContent;
      var objetive6 = document.getElementById("objetive6").textContent;
      var objetive7 = document.getElementById("objetive7").textContent;

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
      var proyect1 = document.getElementById("proyect1").textContent;
      var proyect2 = document.getElementById("proyect2").textContent;
      var proyect3 = document.getElementById("proyect3").textContent;
      var proyect4 = document.getElementById("proyect4").textContent;
      var proyect5 = document.getElementById("proyect5").textContent;
      var proyect6 = document.getElementById("proyect6").textContent;
      var proyect7 = document.getElementById("proyect7").textContent;
      var proyect8 = document.getElementById("proyect8").textContent;

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
      var texto = "Navega por nuestra pagina para poder utilizar el lector de texto"
      speech("",texto)
    }
    function speech(titulo,texto){
      speechSynthesis.speak(new SpeechSynthesisUtterance(titulo));
      speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    }
    function startSpeech(){
      var currentPage = getURI()
      var fn = window[currentPage]
      fn()

    }
    function stopSpeech(){
      speechSynthesis.cancel()
    }
