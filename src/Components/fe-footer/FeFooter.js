import {
  ScopedElementsMixin,
  LitElement,
  html,
  css,
  nothing,
} from '@lion/core';

import { LionButton } from '@lion/button';

import defaultStyles from '../../FeApp.style.js';

export class FeFooter extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      'lion-button': LionButton,
    };
  }

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
