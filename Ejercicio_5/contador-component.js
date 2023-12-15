class ContadorComponent extends HTMLElement {
    constructor() {
      super();
      this._contador = 0;
  
      // Añadir el párrafo para mostrar el contador
      const countParagraph = document.createElement('p');
      countParagraph.id = 'contador-display';
      this.appendChild(countParagraph);
  
      // Crear elementos del DOM para los botones
      const contadorBotones = document.createElement('div');
      contadorBotones.id = 'contador-botones';
  
      const addButton = document.createElement('button');
      addButton.textContent = '+';
      addButton.addEventListener('click', () => this._incrementar());
  
      const subtractButton = document.createElement('button');
      subtractButton.textContent = '-';
      subtractButton.addEventListener('click', () => this._decrementar());
  
      // Añadir el contenedor de botones al componente
      contadorBotones.appendChild(addButton);
      contadorBotones.appendChild(subtractButton);
  
      // Añadir el contenedor de botones antes del párrafo
      this.appendChild(contadorBotones);
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      // Actualizar el contenido del párrafo con el contador
      this.querySelector('#contador-display').textContent = `Contador: ${this._contador}`;
    }
  
    _incrementar() {
      this._contador++;
      this.render();
    }
  
    _decrementar() {
      this._contador--;
      this.render();
    }
  }
  
  customElements.define('contador-component', ContadorComponent);
