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
      <button @click=${() => this.navigation()}>Login</button>`;
  }

  navigation() {
    this.dispatchEvent(
      new CustomEvent('navigate-to', {
        detail: { path: '/login' },
        bubbles: true,
        composed: true,
      })
    );
  }
}

window.customElements.define('landing-page', LandingPage);
