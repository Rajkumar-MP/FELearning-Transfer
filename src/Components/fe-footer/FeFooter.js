import { LitElement, html, css } from 'lit-element';

import '@lion/button/lion-button';
import { nothing } from 'lit-html';
import defaultStyles from '../../FeApp.style.js';

export class FeFooter extends LitElement {
  static get properties() {
    return {
      primary: { type: String },
      secondary: { type: String },
    };
  }

  static get styles() {
    return css`
      ${defaultStyles}
    `;
  }

  render() {
    return html`
      <footer class="container">
        <div>
          ${this.primary
            ? html`<lion-button
                class="button primary--background--color float-right"
                @click=${() => this.primaryclicked()}
                >${this.primary}</lion-button
              >`
            : nothing}
          ${this.secondary
            ? html`<lion-button
                class="button secondary--background--color float-left"
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
