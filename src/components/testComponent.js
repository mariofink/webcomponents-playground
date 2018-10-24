export default class TestComponent extends HTMLElement {
  constructor() {
    // If you define a constructor, always call super() first!
    // This is specific to CE and required by the spec.
    super();

    this.addEventListener("click", e => {
      console.log("I have been clicked", this);
      this.setAttribute("disabled", true);
    });
  }
  static get observedAttributes() {
    return ["disabled"];
  }
  connectedCallback() {
    console.log("Gonna get myself connected");
  }
  disconnectedCallback() {
    console.log("You have been disconnected");
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    console.log("attribute changed", attrName);
  }
}
