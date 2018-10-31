require("./notification.scss");

export default class Notification extends HTMLElement {
  constructor() {
    super();

    this.notificationTypeDOMElement = document.createElement("img");
    this.notificationTypeDOMElement.classList.add("my-notification__icon");
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
    this.notificationTypeDOMElement.setAttribute(
      "src",
      `./assets/${value}.svg`
    );
    this.insertBefore(this.notificationTypeDOMElement, this.childNodes[0]);
  }
}
