import { LitElement, html, css } from 'lit-element';

export class FeHeader extends LitElement {
  static get properties() {
    return {
      title: { type: String },
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

      main {
        flex-grow: 1;
        background-color: #b90e0a;
        width: 100%;
      }

      :host h1 {
        margin-top: 10px;
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }
    `;
  }

  constructor() {
    super();
    this.title = 'ING Bank';
  }

  render() {
    return html`
      <main>
        <header>
          <h1>${this.title}</h1>
        </header>
      </main>
    `;
  }
}
