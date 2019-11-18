<body>
  <div id="ContactUs">
    <h2 role="banner" aria-label="Contantanos">Contáctanos</h2>
    <div id="frameContent">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25321.68678601257!2d-110.31630882059609!3d24.09523126955122!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86afd2c18c0dfe81%3A0x79abf7eae228b7ae!2sUniversidad%20Aut%C3%B3noma%20de%20Baja%20California%20Sur%2C%20La%20Paz%2C%20B.C.S.!5e0!3m2!1ses!2smx!4v1571969511934!5m2!1ses!2smx" width="300" height="250" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
    </div>
      <!-- <span  aria-label="Envianos un mensaje">Envianos un mensaje</span> -->
    <form   class="card my-3"role="form" action="index.html" method="post">
      <label for="name">Nombre</label>
      <input id="name" role="textbox" type="text" class="form-control" placeholder="Nombre">
      <label for="email">Correo Electronico</label>
      <input id="email" role="textbox" type="email" class="form-control" placeholder="Correo">
      <label for="type">Motivo del Mensaje</label>
      <select id="type" role="listbox" class="form-control">
        <option  role="option" value="Sugerencia">Sugerencia</option>
        <option  role="option" value="Queja">Queja</option>
      </select>
      <label for="message">Escribe tu Mensaje</label>
      <textarea id="message" role="textbox" class="form-control" name="name" rows="3" cols="50" placeholder="Mensaje"></textarea>
      <button  role="button" class="btn btn-success" type="submit" name="button" aria-label="Boton para enviar un comentario">Enviar</button>
    </form>
  </div>
</body>
