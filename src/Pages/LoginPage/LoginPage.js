import { html, css, LitElement } from 'lit-element';
import defaultStyles from '../../FeApp.style.js';
import { FeServices } from '../../FeServices.js';
import '../../Components/fe-login/fe-login.js';
import '../../Components/fe-notification/fe-notification.js';

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
    console.log(this.location);
    this.isError = false;
    try {
      const data = await FeServices.postRequest({
        url: '/login',
        data: {
          username: detail.username,
          password: detail.password,
        },
      });

      this.dispatchEvent(
        new CustomEvent('customer-id', { detail: data.id, bubbles: true })
      );
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
