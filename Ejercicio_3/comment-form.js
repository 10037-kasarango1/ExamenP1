
class CommentForm extends HTMLElement {
    constructor() {
      super();
      // Crear Shadow DOM
      this.attachShadow({ mode: 'open' });
      // Llamar a la función render para inicializar la estructura del componente
      this.render();
    }
  
    render() {
      // Definir la estructura del componente de formulario de comentarios
      this.shadowRoot.innerHTML = `
        <div>
          <label for="comment-input">Deja tu comentario:</label>
          <input type="text" id="comment-input" name="comment-input">
          <button id="submit-button">Enviar</button>
        </div>
      `;
  
      const commentInput = this.shadowRoot.getElementById('comment-input');
      const submitButton = this.shadowRoot.getElementById('submit-button');
  
      // Agregar un evento de clic al botón de envío
      submitButton.addEventListener('click', () => {
        this.submitComment();
      });
  
      // Agregar un evento de tecla al campo de entrada para manejar la tecla "Enter"
      commentInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          this.submitComment();
        }
      });
    }
  
    submitComment() {
      const commentInput = this.shadowRoot.getElementById('comment-input');
      const comment = commentInput.value;
  
      // Actualizar la lista de comentarios con el nuevo comentario
      const commentList = document.querySelector('comment-list');
      commentList.updateCommentList(comment);
  
      // Mostrar una alerta
      alert('Comentario enviado correctamente');
  
      // Limpiar el campo de entrada después de enviar el comentario
      commentInput.value = '';
    }
  }
  
  // Registrar el componente de formulario de comentarios
  customElements.define('comment-form', CommentForm);
  