import { html, css, LitElement } from 'lit-element';
import defaultStyles from '../../FeApp.style.js';
import { FeServices } from '../../FeServices.js';

export class LoginPage extends LitElement {
  static get styles() {
    return css`
      ${defaultStyles}

      .hidden {
        display: none;
      }
    `;
  }

  constructor() {
    super();
    this.isError = false;
  }

  async login(detail) {
    this.isError = false;
    try {
      const data = await FeServices.postRequest({
        url: '/login',
        data: {
          username: detail.username,
          password: detail.password,
        },
      });

      this.dispatchEvent(new CustomEvent('id', { detail: data.id }));
    } catch (error) {
      this.isError = true;
      this.requestUpdate();
    }
  }

  render() {
    return html`
      <fe-notification
        type="error"
        label="Invalid Login details"
        class="${this.isError ? '' : 'hidden'}"
      ></fe-notification>
      <fe-login @login-details=${ev => this.login(ev.detail)}></fe-login>
    `;
  }
}
window.customElements.define('login-page', LoginPage);
// this.login(ev.detail)
