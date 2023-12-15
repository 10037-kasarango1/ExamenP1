// Definición de la clase BlogPost que extiende de HTMLElement
class BlogPost extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    // Método que se ejecuta cuando el elemento es conectado al DOM
    connectedCallback() {
      const title = this.getAttribute('title') || 'Título del Blog';
      const content = this.getAttribute('content') || 'Contenido del blog...';
  
      // Se establece el contenido del shadow DOM con el título y contenido del blog
      this.shadowRoot.innerHTML = `
        <article>
          <h2>${title}</h2>
          <p>${content}</p>
        </article>
      `;
    }
  }
  
  // Se registra el elemento personalizado 'blog-post' en el navegador
  customElements.define('blog-post', BlogPost);
