require("./index.scss");

import "@webcomponents/custom-elements";

import TestComponent from "./components/testComponent";
import Notification from "./components/notification/notification";
import LitComponent from "./components/litComponent";

window.customElements.define("test-component", TestComponent);
window.customElements.define("my-notification", Notification);
window.customElements.define('lit-component', LitComponent);
