  /*Function to gerUri this function return uri[6] or uri[7]*/
    function getURI(){

      var request = window.location.href.split("/")
      var url = []
      url[0]="dft"

      if(request[6] != ""){
        url=request[6].split(".")
      }
      if(request[7] != ""){
        url=request[7].split(".")
      }

      return url[0].toLowerCase()

    }

    //Codigo para la reproduccion del audio de la pagina
    function antecedentes(){
      var parrafo1 = document.getElementById("parrafo1").textContent;
      var parrafo2 = document.getElementById("parrafo2").textContent;
      var parrafo3 = document.getElementById("parrafo3").textContent;
      speech("",parrafo1)
      speech("",parrafo2)
      speech("",parrafo3)
    }
    function mision(){
      var parrafo1 = document.getElementById("parrafo1").textContent;
      var parrafo2 = document.getElementById("parrafo2").textContent;
      var parrafo3 = document.getElementById("parrafo3").textContent;

      var proyecto1 = document.getElementById("objetivo1").textContent;
      var proyecto2 = document.getElementById("objetivo2").textContent;
      var proyecto3 = document.getElementById("objetivo3").textContent;
      var proyecto4 = document.getElementById("objetivo4").textContent;
      var proyecto5 = document.getElementById("objetivo5").textContent;

      speech("Misión",parrafo1)
      speech("Visión",parrafo2)
      speech("Objetivos",parrafo3)

      speech("Objetivos Especificos",objetivo1)
      speech("",objetivo2)
      speech("",objetivo3)
      speech("",objetivo4)
      speech("",objetivo5)
    }
    function proyectos(){
      var proyecto1 = document.getElementById("proyecto1").textContent;
      var proyecto2 = document.getElementById("proyecto2").textContent;
      var proyecto3 = document.getElementById("proyecto3").textContent;
      var proyecto4 = document.getElementById("proyecto4").textContent;
      var proyecto5 = document.getElementById("proyecto5").textContent;
      var proyecto6 = document.getElementById("proyecto6").textContent;
      var proyecto7 = document.getElementById("proyecto7").textContent;
      var proyecto8 = document.getElementById("proyecto8").textContent;

      speech("Silla de ruedas motorizada",proyecto1)
      speech("Hybri-voz",proyecto2)
      speech("Con Ciencia Pi",proyecto3)
      speech("Fidem Pad",proyecto4)
      speech("ComuniKT",proyecto5)
      speech("Sam Speech",proyecto6)
      speech("Guante ultrasónico",proyecto7)
      speech("Robot controlado por señales del cerebro",proyecto8)
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
      alert(currentPage)
      var fn = window[currentPage]
      fn()

    }
    function stopSpeech(){
      speechSynthesis.cancel()
    }
