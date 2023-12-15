// comment-list.js
class CommentList extends HTMLElement {
    constructor() {
      super();
      // Crear Shadow DOM
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      // Obtener la lista de comentarios de los atributos (como cadena JSON)
      this.comments = JSON.parse(this.getAttribute('comments')) || [];
  
      // Crear la estructura del componente de lista de comentarios
      this.render();
    }
  
    updateCommentList(newComment) {
      this.comments.push(newComment);
      this.render();
  
      // Disparar un evento personalizado para indicar que la lista de comentarios ha sido actualizada
      this.dispatchEvent(new CustomEvent('comment-list-updated', { detail: this.comments }));
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <div>
          <h3>Comentarios:</h3>
          <ul>
            ${this.comments.map(comment => `<li>${comment}</li>`).join('')}
          </ul>
        </div>
      `;
    }
  }
  
  // Registrar el componente de lista de comentarios
  customElements.define('comment-list', CommentList);
  