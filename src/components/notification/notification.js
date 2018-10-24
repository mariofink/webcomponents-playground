export default class Notification extends HTMLElement {
  constructor() {
    super();

    this.notificationTypeDOMElement = document.createElement("span");
    this.notificationTypeDOMElement.classList.add("my-notification__type");
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
    console.log("type has been changed");
    this.notificationTypeDOMElement.innerText = value;
    this.prepend(this.notificationTypeDOMElement);
  }
}
