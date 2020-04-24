import "./index.css";

import "@webcomponents/custom-elements";

import TestComponent from "./components/testComponent";
import LitNotification from "./components/notification/litNotification";
import LitComponent from "./components/litComponent";

window.customElements.define("test-component", TestComponent);
window.customElements.define("my-notification", LitNotification);
window.customElements.define('lit-component', LitComponent);
