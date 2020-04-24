import { LitElement, html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

const icons = {
  info: require("./assets/info.svg"),
  warning: require("./assets/warning.svg"),
  success: require("./assets/success.svg"),
  error: require("./assets/error.svg")
};

export default class LitNotification extends LitElement {

  static get styles() {
    return css`
      .container {
        border: 3px solid #073b4c;
        display: block;
        margin: 1rem;
        padding: 1rem; 
        position: relative;
      }

      .container > img {
        height: 1.5rem;
        margin-right: 1rem;
        vertical-align: middle;
        fill: currentColor;
      }

      .info {
        background: #118ab2;
        color: white;
      }

      .warning {
        background: #ffd166;
        color: #333;
      }

      .error {
        background: #ef476f;
        color: white;
      }

      .success {
        background: #06d6a0;
        color: #333;
      }
    `;
  }

  static get properties() {
    return { 
      type: { type: String },
      dismissable: { type: Boolean }
    };
  }

  constructor() {
    super();
    // initialise properties
    this.type = "info";
    this.dismissable = false;
  }

  render(){
    const classes = {};
    classes[this.type] = true;
    return html`
    <div class="container ${classMap(classes)}">
      <img src="data:image/svg+xml;utf8,${icons.info}" alt="icon">
      <slot></slot>
    </div>
    `;
  }
}

