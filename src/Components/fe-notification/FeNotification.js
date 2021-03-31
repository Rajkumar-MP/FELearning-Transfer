import { ScopedElementsMixin, LitElement, css, html } from '@lion/core';

export class FeNotification extends ScopedElementsMixin(LitElement) {
  static get properties() {
    return {
      type: { type: String },
      label: { type: String },
    };
  }

  static get styles() {
    return css`
      .notification {
        max-width: 600px;
        padding: 5px;
        color: white;
      }
      .info {
        background-color: #1933fa;
      }

      .warning {
        background-color: #fa8a19;
      }
      .success {
        background-color: #38b648;
      }

      .error {
        background-color: #de180a;
        max-width: 600px;
      }
    `;
  }

  render() {
    return html` <div class="${this.type} notification">${this.label}</div> `;
  }
}
