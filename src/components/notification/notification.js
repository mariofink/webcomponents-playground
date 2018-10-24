export default class Notification extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["type"];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    console.log("attribute changed", attrName);
  }
}
