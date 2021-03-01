import { LitElement, html, css } from 'lit-element';

import '@lion/button/lion-button';
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
        background-color: purple;
        color: #fff;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        float: right;
      }
      .primary:hover {
        color: #fffc;
      }
      .secondary {
        background-color: grey;
        color: #fff;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        float: left;
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
