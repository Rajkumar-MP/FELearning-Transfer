import { LitElement, html, css } from 'lit-element';
import { localize, LocalizeMixin } from '@lion/localize';
import { Required } from '@lion/form-core';

import '@lion/button/';
import '@lion/form/lion-form';
import '@lion/input/lion-input';

export class FeNewPayee extends LocalizeMixin(LitElement) {
  static get localizeNamespaces() {
    return [
      {
        'fe-new-payee': locale => import(`./translations/${locale}.js`),
      },
      ...super.localizeNamespaces,
    ];
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

    const PayeeData = serializedValue;
    this.dispatchEvent(
      new CustomEvent('input-validation', { detail: PayeeData })
    );
  }

  static get properties() {
    return {};
  }

  static get styles() {
    return css`
      div {
        display: flex;
        justify-content: flex-end;
      }

      .btn {
        background-color: #fff;
        color: #000;
        border-radius: 5px;
        padding: 10px;
        justify-content: right;
      }

      .btn:hover {
        background-color: #eea2ad;
      }
    `;
  }

  render() {
    return html`
      <h2>${localize.msg('fe-new-payee:label')}</h2>
      <lion-form @submit=${this.submitForm}>
        <form>
          <lion-input
            name="nickname"
            id="nickname"
            label="${localize.msg('fe-new-payee:nickname')}"
            .validators="${[
              new Required(null, {
                getMessage: () => localize.msg('fe-new-payee:blankerror'),
              }),
            ]}"
          ></lion-input>

          <lion-input
            name="accountholdername"
            id="accountholdername"
            label="${localize.msg('fe-new-payee:accountholdername')}"
            .validators="${[
              new Required(null, {
                getMessage: () => localize.msg('fe-new-payee:blankerror'),
              }),
            ]}"
          ></lion-input>

          <lion-input
            name="accountnumber"
            id="accountnumber"
            type="number"
            label="${localize.msg('fe-new-payee:accountnumber')}"
            .validators="${[
              new Required(null, {
                getMessage: () => localize.msg('fe-new-payee:blankerror'),
              }),
            ]}"
          ></lion-input>

          <lion-input
            name="ifsc"
            id="ifsc"
            label="${localize.msg('fe-new-payee:ifsc')}"
            .validators="${[
              new Required(null, {
                getMessage: () => localize.msg('fe-new-payee:blankerror'),
              }),
            ]}"
          ></lion-input>

          <fe-footer
            .primary=${localize.msg('fe-new-payee:addpayee')}
            @primary-btn-click=${() => this.triggerSubmit()}
          ></fe-footer>

          <fe-footer .secondary=${localize.msg('fe-new-payee:cancel')}>
          </fe-footer>
        </form>
      </lion-form>
    `;
  }
}