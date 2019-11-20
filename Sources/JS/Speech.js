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
      url = decodeURI(url[0]).toLowerCase()

      if(url=="misión")
       url = 'mision'

      return url

    }

    //Codigo para la reproduccion del audio de la pagina
    function inicio(){
      let paragraph1 = document.getElementById("paragraph1").textContent;
      speechTitle("¿Quiénes Somos?",paragraph1)
    }
    function antecedentes(){
      let paragraph1 = document.getElementById("paragraph1").textContent;
      let paragraph2 = document.getElementById("paragraph2").textContent;
      let paragraph3 = document.getElementById("paragraph3").textContent;
      speechTitle('Antecedentes',paragraph1)
      speech(paragraph2)
      speech(paragraph3)
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

      speechTitle("Misión",paragraph1)
      speechTitle("Visión",paragraph2)
      speechTitle("objetives",paragraph3)

      speechTitle("objetives Especificos",objetive1)
      speech(objetive2)
      speech(objetive3)
      speech(objetive4)
      speech(objetive5)
      speech(objetive6)
      speech(objetive7)
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

      speechTitle("Silla de ruedas motorizada",proyect1)
      speechTitle("Hybri-voz",proyect2)
      speechTitle("Con Ciencia Pi",proyect3)
      speechTitle("Fidem Pad",proyect4)
      speechTitle("ComuniKT",proyect5)
      speechTitle("Sam Speech",proyect6)
      speechTitle("Guante ultrasónico",proyect7)
      speechTitle("Robot controlado por señales del cerebro",proyect8)
    }
    function premios(){

      speech("Premios y reconocimientos")
      
      let arrayTitles = document.querySelectorAll("p")
      let arrayLiElements = document.querySelectorAll("ul > li")

      let li = 0

      for (let t = 0; t < arrayTitles.length; t++) {
        console.log(t)
        
        const title = arrayTitles[t].textContent
        const proyect = arrayLiElements[li].textContent
        const date = arrayLiElements[li+1].textContent
        const category = arrayLiElements[li+2].textContent
        const recog = arrayLiElements[li+3].textContent
        
        li+=4
        
        speech(title)
        speech(proyect)
        speech(date)
        speech(category)
        speech(recog)    
        
      }
    }
    function dft(){
      let texto = "Navega por nuestra pagina para poder utilizar el lector de texto"
      speech(texto)
    }
    function speechTitle(titulo,texto){
      speechSynthesis.speak(new SpeechSynthesisUtterance(titulo));
      speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
    }
    function speech(titulo,texto){
      speechSynthesis.speak(new SpeechSynthesisUtterance(titulo));
    }
    function startSpeech(){
      let currentPage = getURI()
      let fn = window[currentPage]
      fn()
    }
    function stopSpeech(){
      speechSynthesis.cancel()
    }
