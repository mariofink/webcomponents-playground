require("./notification.scss");

const icons = {
  info: require("./assets/info.svg"),
  warning: require("./assets/warning.svg"),
  success: require("./assets/success.svg"),
  error: require("./assets/error.svg")
};

export default class Notification extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["type"];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === "type") {
      this.typeChangedHandler(newVal);
    }
  }

  typeChangedHandler(value) {
    console.log("type has been changed", this.childNodes);
    const svgElement = document
      .createRange()
      .createContextualFragment(icons[value]).firstChild;
    this.insertBefore(svgElement, this.childNodes[0]);
  }
}
