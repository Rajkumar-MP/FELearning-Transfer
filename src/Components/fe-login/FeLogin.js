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

  triggerSubmit() {
    const form = this.shadowRoot.querySelector('lion-form');
    form.submit();
  }

  submitForm(ev) {
    const { hasFeedbackFor, formElements, serializedValue } = ev.target;
    if (hasFeedbackFor.includes('error')) {
      const firstFormElWithError = formElements.find(el =>
        el.hasFeedbackFor.includes('error')
      );
      firstFormElWithError.focus();
      firstFormElWithError.classList.add('error-handle');

      return;
    }

    const loginData = serializedValue;
    this.dispatchEvent(
      new CustomEvent('input-validation', { detail: loginData })
    );
  }

  render() {
    return html`
      <h2>Login Details</h2>
      <lion-form @submit=${this.submitForm}>
        <form>
          <lion-input
            name="username"
            id="username"
            label="${localize.msg('fe-login:username')}"
            .validators="${[
              new Required(null, {
                getMessage: () =>
                  html`<p style="color:red;">
                    ${localize.msg('fe-login:usernameerror')}
                  </p>`,
              }),
              new MinLength(8, {
                getMessage: () =>
                  html`<p style="color:red;">
                    ${localize.msg('fe-login:default')}
                  </p>`,
              }),
            ]}"
          ></lion-input
          ><br />
          <lion-input
            name="password"
            id="password"
            type="password"
            label="${localize.msg('fe-login:password')}"
            .validators="${[
              new Required(null, {
                getMessage: () =>
                  html`<p style="color:red;">
                    ${localize.msg('fe-login:passworderror')}
                  </p>`,
              }),
              new MinLength(8, {
                getMessage: () =>
                  html`<p style="color:red;">
                    ${localize.msg('fe-login:default')}
                  </p>`,
              }),
            ]}"
          ></lion-input>
          <br />
          <fe-footer
            .primary=${localize.msg('fe-login:submit')}
            @primary-btn-click=${() => this.triggerSubmit()}
          ></fe-footer>
        </form>
      </lion-form>
    `;
  }
}
