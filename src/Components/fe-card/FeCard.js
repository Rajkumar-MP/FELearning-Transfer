import { ScopedElementsMixin, LitElement, html, css } from '@lion/core';

import defaultStyles from '../../FeApp.style.js';

export class FeCard extends ScopedElementsMixin(LitElement) {
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
      }

      div {
        margin: 10px;
        min-width: 200px;

        text-align: center;
        background-color: rgb(255, 255, 255);
        border: 1px solid black;
        border-radius: 5px;
        padding-left: 20px;
        padding-right: 20px;
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
