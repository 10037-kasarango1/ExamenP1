class SaludoComponent extends HTMLElement {
    constructor() {
      super();
  
      const shadow = this.attachShadow({ mode: 'open' });
  
      const paragraph = document.createElement('p');
  
      paragraph.textContent = '¡Hola, Mundo!';
  
      shadow.appendChild(paragraph);
    }
  }
  
  customElements.define('saludo-component', SaludoComponent);
  