// Crea una función en JavaScript que permita validar todos los campos del formulario de
// contacto al momento de hacer clic en el botón de procesamiento. Se debe indicar qué campos
// están vacíos.

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
  
    evento.preventDefault();
    let name = document.getElementById('name').value;
    if(name.length == 0) {
      alert('No has escrito nada en el nombre');
      return;
    }
    let email = document.getElementById('email').value;
    if(email.length == 0) {
        alert('No has escrito nada en el email');
        return;
    }
    let message = document.getElementById('message').value;
    if (message.length == 0 ) {
      alert('No has escrito nada en el mensaje');
      return;
    }
    this.submit();
  }