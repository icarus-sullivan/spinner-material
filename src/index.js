class SpinnerMaterial extends HTMLElement {
  constructor() {
    super();
  
    // get config from attributes
    const stroke = this.getAttribute('stroke') || 5;
    const radius = this.getAttribute('radius') || 40;
    const color = this.getAttribute('color') || '#333333';
    const visible = this.getAttribute('visible') || 'true';

    // create shadow dom root
    this._root = this.attachShadow({mode: 'open'});
    this._root.innerHTML = `
      <style>
        @keyframes rsm-rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @-webkit-keyframes rsm-rotate {
          from {
            -webkit-transform: rotate(0deg);
          }
          to {
            -webkit-transform: rotate(360deg);
          }
        }
        
        @keyframes rsm-sweep {
          0% {
            -webkit-clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 50% 50%, 0% 0%, 0% 0%, 0% 0%);
            clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 50% 50%, 0% 0%, 0% 0%, 0% 0%);
          }
          50% {
            -webkit-clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 50% 50%, 100% 0%, 100% 0%, 0% 0%);
            clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 50% 50%, 100% 0%, 100% 0%, 0% 0%);
          }
          100% {
            -webkit-clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 50% 50%, 100% 100%, 100% 0%, 0% 0%);
            clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 50% 50%, 100% 100%, 100% 0%, 0% 0%);
          }
        }
        
        @-webkit-keyframes rsm-sweep {
          0% {
            -webkit-clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 50% 50%, 0% 0%, 0% 0%, 0% 0%);
          }
          50% {
            -webkit-clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 50% 50%, 100% 0%, 100% 0%, 0% 0%);
          }
          100% {
            -webkit-clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 50% 50%, 100% 100%, 100% 0%, 0% 0%);
          }
        }
      </style>
      <div
        style="
          border-radius: 50%;
          border: 10px solid #333;
          box-sizing: border-box;
          -webkit-animation: rsm-sweep 1s linear alternate infinite, rsm-rotate 0.8s linear infinite;
                  animation: rsm-sweep 1s linear alternate infinite, rsm-rotate 0.8s linear infinite;
          width: ${radius * 2}; 
          height: ${radius * 2}; 
          border-color: ${color}; 
          border-width: ${stroke};
          display: ${visible === 'true' ? 'block' : 'none'};
        "/>
    `;
  }

  setBorderWidth(newValue) {
    const div = this._root.querySelector('div');
    div.style.borderWidth = Math.max(0, newValue) + 'px';
  }

  setRadius(newValue) {
    const div = this._root.querySelector('div');
    div.style.width = Math.max(0, newValue) + 'px';
    div.style.height = Math.max(0, newValue) + 'px';
  }
  
  setColor(newValue) {
    const div = this._root.querySelector('div');
    div.style.borderColor = newValue;
  }

  setDisplay(newValue) {
    const div = this._root.querySelector('div');
    div.style.display = newValue == 'true' ? 'block' : 'none';
  }
  
  static get observedAttributes() {
    return [ 'stroke', 'radius', 'visible', 'color' ];
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'stroke') {
      this.setBorderWidth(newValue);
    }
    if (name === 'radius') {
      this.setRadius(newValue);
    }
    if (name === 'color') {
      this.setColor(newValue);
    }
    if (name === 'visible') {
      this.setDisplay(newValue);
    }
  }
}

// make sure we didn't alread register
if ( !(document.createElement('spinner-material') instanceof SpinnerMaterial) ) {
  window.customElements.define('spinner-material', SpinnerMaterial);
}