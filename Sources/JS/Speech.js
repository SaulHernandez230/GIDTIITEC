class Speech {
  constructor() {

  }
  antecedentes(){
    var parrafo1 = document.getElementById("parrafo1").textContent;
    var parrafo2 = document.getElementById("parrafo2").textContent;
    var parrafo3 = document.getElementById("parrafo3").textContent;
    this.speech("",parrafo1)
    this.speech("",parrafo2)
    this.speech("",parrafo3)
  }
  mision(){
    var parrafo1 = document.getElementById("parrafo1").textContent;
    var parrafo2 = document.getElementById("parrafo2").textContent;
    var parrafo3 = document.getElementById("parrafo3").textContent;

    var proyecto1 = document.getElementById("objetivo1").textContent;
    var proyecto2 = document.getElementById("objetivo2").textContent;
    var proyecto3 = document.getElementById("objetivo3").textContent;
    var proyecto4 = document.getElementById("objetivo4").textContent;
    var proyecto5 = document.getElementById("objetivo5").textContent;

    this.speech("Misión",parrafo1)
    this.speech("Visión",parrafo2)
    this.speech("Objetivos",parrafo3)

    this.speech("Objetivos Especificos",objetivo1)
    this.speech("",objetivo2)
    this.speech("",objetivo3)
    this.speech("",objetivo4)
    this.speech("",objetivo5)
  }
  proyectos(){
    var proyecto1 = document.getElementById("proyecto1").textContent;
    var proyecto2 = document.getElementById("proyecto2").textContent;
    var proyecto3 = document.getElementById("proyecto3").textContent;
    var proyecto4 = document.getElementById("proyecto4").textContent;
    var proyecto5 = document.getElementById("proyecto5").textContent;
    var proyecto6 = document.getElementById("proyecto6").textContent;
    var proyecto7 = document.getElementById("proyecto7").textContent;
    var proyecto8 = document.getElementById("proyecto8").textContent;

    this.speech("Silla de ruedas motorizada",proyecto1)
    this.speech("Hybri-voz",proyecto2)
    this.speech("Con Ciencia Pi",proyecto3)
    this.speech("Fidem Pad",proyecto4)
    this.speech("ComuniKT",proyecto5)
    this.speech("Sam Speech",proyecto6)
    this.speech("Guante ultrasónico",proyecto7)
    this.speech("Robot controlado por señales del cerebro",proyecto8)
  }
  default(){
    var texto = "Navega por nuestra pagina para poder utilizar el lector de texto"
    this.speech("",texto)
  }
  speech(titulo,texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(titulo));
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
  }
  stop(){
    speechSynthesis.cancel()
  }
}
