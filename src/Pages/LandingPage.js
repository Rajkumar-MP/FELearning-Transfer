import { html, css, LitElement } from 'lit-element';

export class LandingPage extends LitElement {
  static get styles() {
    return css`
      :host {
        margin: 0;
      }
    `;
  }

  static get properties() {
    return {};
  }

  render() {
    return html` Landing Page
      <button @click=${() => this.apitrigger()}></button>`;
  }
}
window.customElements.define('landing-page', LandingPage);
