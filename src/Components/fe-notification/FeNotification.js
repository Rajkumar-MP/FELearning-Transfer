import { LitElement, html, css } from 'lit-element';

export class FeNotification extends LitElement {
  static get properties() {
    return {
      message: { type: String },
      label: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        height: 15vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: 25px;
        color: #fff;

        width: 100%;
        margin: 0 auto;
        text-align: center;
      }

      header {
        flex-grow: 1;
        background-color: #b90e0a;
        width: 100%;
      }

      :host h1 {
        margin-top: 10px;
      }
      .info {
        background-color: #1933fa;
        max-width: 600px;
      }

      .warning {
        background-color: #fa8a19;
        max-width: 600px;
      }
      .success {
        background-color: #38b648;
        max-width: 600px;
      }

      .error {
        background-color: #de180a;
        max-width: 600px;
      }
    `;
  }

  render() {
    return html` <div class="${this.label}">${this.message}</div> `;
  }
}
