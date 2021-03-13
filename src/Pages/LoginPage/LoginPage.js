import { html, css, LitElement } from 'lit-element';

export class LoginPage extends LitElement {
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
    return html` <fe-login></fe-login> `;
  }
}
window.customElements.define('login-page', LoginPage);
