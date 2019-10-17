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
    this.speech("Misión",parrafo1)
    this.speech("Visión",parrafo2)
    this.speech("Objetivos",parrafo3)
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
