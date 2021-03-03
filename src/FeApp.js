import { LitElement, html, css } from 'lit-element';
import './Components/fe-header/fe-header.js';
import './Components/fe-login/fe-login.js';

export class FeApp extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {};
  }

  render() {
    return html`
      <fe-header></fe-header>
      <div id="display-container" class="container-fluid container"></div>
    `;
  }
}
