import { LitElement, html, css } from 'lit-element';
import './Components/fe-header/fe-header.js';
import './Components/fe-footer/fe-footer.js';

export class FeApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      btnLabel: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 100%;
        margin: 0 auto;
        text-align: center;
        background-color: var(--fe-app-background-color);
      }

      main {
        flex-grow: 1;
      }

      .logo > svg {
        margin-top: 36px;
        animation: app-logo-spin infinite 20s linear;
      }

      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
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

  

  render() {
    return html`
    
         <fe-footer primary="hello" secondary="back"></fe-footer>
        `
  }
}
