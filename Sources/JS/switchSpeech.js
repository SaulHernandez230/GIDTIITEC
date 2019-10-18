
    //Codigo para la reproduccion del audio de la pagina
    function startSpeech(){
      var speech = new Speech()

      var request = window.location.href.split("/")
      var url = "";

      if(request[6] != null)
        url=request[6];
      if(request[7] != null)
        url=request[7];

      switch (url) {
        case 'index.php':
          speech.inicio()
          break;
        case 'Antecedentes.php':
          speech.antecedentes()
          break;
        case 'Mision.php':
          speech.mision()
          break;
        case 'Proyectos.php':
          speech.proyectos()
          break;
        case 'Premios.php':
          speech.premios()
          break;
        case 'Contactanos.php':
          speech.contactanos()
          break;

        default:
        speech.default()
      }

    }
    function stopSpeech(){
      var speech = new Speech()
      speech.stop();
    }
