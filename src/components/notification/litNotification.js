import { LitElement, html, css } from 'lit-element';
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
    `;
  }

  render(){
    return html`
    <div class="container">
      <img src="data:image/svg+xml;utf8,${icons.info}" alt="icon">
      <slot></slot>
    </div>
    `;
  }
}

