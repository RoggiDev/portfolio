import {
  LitElement,
  html,
  css,
} from "https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js";

export class CustomLoader extends LitElement {
  static properties = {};

  constructor() {
    super();
  }

  createRenderRoot() {
    return this;
  }

  // Render the UI as a function of component state
  render() {
    return html`
      <div class="c-loader-overlay">
        <div class="loader">
          <div class="load1"></div>
          <div class="load2"></div>
          <div class="load3"></div>
          <div class="load4"></div>
          <div class="load5"></div>
          <div class="load6"></div>
          <div class="load7"></div>
          <div class="load8"></div>
          <div class="load9"></div>
        </div>
      </div>
    `;
  }
}

customElements.define("custom-loader", CustomLoader);
