import { LitElement, html, unsafeCSS } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import styles from "./litNotification.scss";

const icons = {
  info: require("./assets/info.svg"),
  warning: require("./assets/warning.svg"),
  success: require("./assets/success.svg"),
  error: require("./assets/error.svg"),
};

export default class LitNotification extends LitElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  static get properties() {
    return {
      type: { type: String },
      dismissable: { type: Boolean },
    };
  }

  constructor() {
    super();
    // initialise properties
    this.type = "info";
    this.dismissable = false;
    console.log(styles);
  }

  render() {
    const classes = {};
    classes[this.type] = true;
    return html`
      <div class="container ${classMap(classes)}">
        ${unsafeHTML(icons[this.type])}
        ${this.dismissable
          ? html`<button @click="${this.remove}">&times;</button>`
          : ""}
        <slot></slot>
      </div>
    `;
  }
}

window.customElements.define("lit-notification", LitNotification);
