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
    return ["type", "dismissable"];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (newVal === null) return;
    if (attrName === "type") {
      this.typeChangedHandler(newVal);
    }
    if (attrName === "dismissable") {
      this.dismissableChangedHandler(newVal);
    }
  }

  typeChangedHandler(value) {
    console.log("type has been changed", value, this.childNodes);
    for (let svg of this.getElementsByTagName("svg")) {
      svg.remove();
    }
    const svgElement = document
      .createRange()
      .createContextualFragment(icons[value]).firstChild;
    this.insertBefore(svgElement, this.childNodes[0]);
  }

  dismissableChangedHandler(value) {
    if (value !== "true") return;
    const dismissButton = document.createElement("button");
    dismissButton.innerHTML = "&times;";
    dismissButton.onclick = () => {
      this.remove();
    };
    this.append(dismissButton);
  }
}
