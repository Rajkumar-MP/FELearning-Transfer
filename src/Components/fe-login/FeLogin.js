import { LitElement, html, css } from 'lit-element';
import '@lion/form/lion-form';
import '@lion/input/lion-input';
import '@lion/button/lion-button';
import { localize, LocalizeMixin } from '@lion/localize';
import { Required, MinLength } from '@lion/form-core';

export class FeLogin extends LocalizeMixin(LitElement) {
  static get localizeNamespaces() {
    return [
      { 'fe-login': locale => import(`./translations/${locale}.js`) },
      ...super.localizeNamespaces,
    ];
  }

  /* connectedCallback(){
   super.connectedCallback();
     localize.locale='nl-NL';
    } */

  static get styles() {
    return css`
      form {
        width: 600px;
        padding: 20px;
        font-size: 20px;
      }

      h2 {
        margin: 20px;
      }
    `;
  }

  inputValidation() {
    const form = this.shadowRoot.querySelectorAll('lion-form');
    if (form.hasFeedbackFor.includes('error')) {
      const firstFormElWithError = form.formElements.find(el =>
        el.hasFeedbackFor.includes('error')
      );
      firstFormElWithError.focus();
      firstFormElWithError.classList.add('error-handle');

      return;
    }
    this.dispatchEvent(new CustomEvent('primary-btn-click', { bubbles: true }));
  }

  render() {
    return html`
      <h2>Login Details</h2>

      <lion-form>
        <form>
          <lion-input
            name="username"
            id="username"
            label="${localize.msg('fe-login:username')}"
            .validators="${[
              new Required(null, {
                getMessage: () => localize.msg('fe-login:usernameerror'),
              }),
              new MinLength(8, {
                getMessage: () => localize.msg('fe-login:default'),
              }),
            ]}"
          ></lion-input
          ><br />
          <lion-input
            name="password"
            id="password"
            label="${localize.msg('fe-login:password')}"
            .validators="${[
              new Required(null, {
                getMessage: () => localize.msg('fe-login:passworderror'),
              }),
              new MinLength(8, {
                getMessage: () => localize.msg('fe-login:default'),
              }),
            ]}"
          ></lion-input>
          <br />
          <fe-footer .primary="${localize.msg('fe-login:submit')}"></fe-footer>
        </form>
      </lion-form>
    `;
  }
}
