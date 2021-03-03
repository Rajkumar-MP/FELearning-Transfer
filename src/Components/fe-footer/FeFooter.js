import { LitElement, html, css } from 'lit-element';

import '@lion/button/lion-button.js';
import { nothing } from 'lit-html';

export class FeFooter extends LitElement {
  static get properties() {
    return {
      primary: { type: String },
      secondary: { type: String },
    };
  }

  static get styles() {
    return css`
      .primary {
        background-color: #2c0b82;
        color: #ffffff;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        float: right;
        font-size: 20px;
        font-weight: normal;
      }
      .primary:hover {
        color: #ffffff;
      }
      .secondary {
        background-color: #53505a;
        color: #ffffff;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        font-size: 20px;
        float: left;
        font-weight: normal;
      }
      .secondary:hover {
        color: #dcdc;
      }
    `;
  }

  render() {
    return html`
      <footer class="container">
        <div id="button">
          ${this.primary
            ? html`<lion-button
                class="primary"
                @click=${() => this.primaryclicked()}
                >${this.primary}</lion-button
              >`
            : nothing}
          ${this.secondary
            ? html`<lion-button
                class="secondary"
                @click=${() => this.secondaryclicked()}
                >${this.secondary}</lion-button
              >`
            : nothing}
        </div>
      </footer>
    `;
  }

  primaryclicked() {
    this.dispatchEvent(new CustomEvent('primary-btn-click', { bubbles: true }));
  }

  secondaryclicked() {
    this.dispatchEvent(
      new CustomEvent('secondary-btn-click', { bubbles: true })
    );
  }
}
