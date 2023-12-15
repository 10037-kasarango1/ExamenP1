
// Definición de la clase BlogContainer
class BlogContainer extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <div>
          <slot name="post"></slot> 
          <slot name="comment-list"></slot>
          <slot name="comment-form"></slot>
        </div>
      `;
    }
  }
  
  // Registrar el componente contenedor
  customElements.define('blog-container', BlogContainer);
