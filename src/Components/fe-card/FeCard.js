import { LitElement, html, css } from 'lit-element';

import defaultStyles from '../../FeApp.style.js';

export class FeCard extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      content: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'title';
    this.content = 'content';
  }

  static get styles() {
    return css`
      ${defaultStyles}
      :host {
        display: inline-block;
        padding: 8px;
      }

      div {
        width: 220px;
        text-align: center;
        background-color: rgb(255, 255, 255);
        border: 2px solid #e13d2c;
        border-radius: 5px;
      }

      div:hover {
        transform: translateY(-10px);
        box-shadow: 0 30px 50px -17px rgba(0, 0, 0, 0.3),
          0 3px 20px rgb(0, 0, 0.1, 0);
      }
    `;
  }

  render() {
    return html`
      <div>
        <h1>${this.title}</h1>
        <h2>${this.content}</h2>
      </div>
    `;
  }
}
