import { LitElement, html, unsafeCSS } from "lit-element";
import { classMap } from "lit-html/directives/class-map";
import { unsafeHTML } from "lit-html/directives/unsafe-html";
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
