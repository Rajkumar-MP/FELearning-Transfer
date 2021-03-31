import { ScopedElementsMixin, LitElement, css, html } from '@lion/core';
import defaultStyles from '../../FeApp.style.js';
import { FeServices } from '../../FeServices.js';
import { FeNotification } from '../../Components/fe-notification/FeNotification.js';
import { FeLogin } from '../../Components/fe-login/FeLogin.js';

export class LoginPage extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      'fe-login': FeLogin,
      'fe-notification': FeNotification,
    };
  }

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
