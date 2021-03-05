import { LitElement, css, html } from 'lit-element';
import '@lion/form/lion-form';
import '@lion/input/lion-input';
import '@lion/button/lion-button';
import '@lion/select/lion-select';
import '../fe-footer/fe-footer.js';
import { localize, LocalizeMixin } from '@lion/localize';
import { Required, MinLength } from '@lion/form-core';
import defaultStyles from '../../FeApp.style.js';

export class FeFundTransfer extends LocalizeMixin(LitElement) {
  static get localizeNamespaces() {
    return [
      { 'fe-fund-transfer': locale => import(`./translations/${locale}.js`) },
      ...super.localizeNamespaces,
    ];
  }

  static get properties() {
    return {
      args: { type: Object },
    };
  }

  static get styles() {
    return css`
      ${defaultStyles}
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

    this.dispatchEvent(
      new CustomEvent('fund-validation', { detail: serializedValue })
    );
  }

  render() {
    return html`
      <h1>Fund Transfer</h1>
      <lion-form @submit=${this.submitForm}>
        <form>
          <lion-select
            name="fromaccount"
            label="${localize.msg('fe-fund-transfer:fromaccount')}"
            class="form--input--field select"
            id="fromaccount"
            .validators="${[
              new Required(null, {
                getMessage: () =>
                  localize.msg('fe-fund-transfer:accounttypeerror'),
              }),
            ]}"
          >
            <select slot="input">
              <option selected hidden value>Please select</option>
              ${this.accountDetails.map(
                account =>
                  html`<option value=${account.number}>${account.type}</option>`
              )}
            </select>
          </lion-select>

          <lion-select
            name="toaccount"
            label="${localize.msg('fe-fund-transfer:toaccount')}"
            class="form--input--field select"
            id="toaccount"
            .validators="${[
              new Required(null, {
                getMessage: () =>
                  localize.msg('fe-fund-transfer:accounttypeerror'),
              }),
            ]}"
          >
            <select slot="input">
              <option selected hidden value>Please select</option>
              ${this.payeeList.map(
                payee =>
                  html`<option value=${payee.accountNo}>
                    ${payee.nickName}
                  </option>`
              )}
            </select>
          </lion-select>

          <lion-input
            name="amount"
            id="amount"
            label="${localize.msg('fe-fund-transfer:amount')}"
            class="form--input--field select"
            .validators="${[
              new Required(null, {
                getMessage: () => localize.msg('fe-fund-transfer:amounterror'),
              }),
            ]}"
          ></lion-input>

          <lion-input
            name="remarks"
            id="remarks"
            label="${localize.msg('fe-fund-transfer:remarks')}"
            class="form--input--field input"
            .validators="${[
              new Required(null, {
                getMessage: () => localize.msg('fe-fund-transfer:amounterror'),
              }),
              new MinLength(8, {
                getMessage: () => localize.msg('fe-fund-transfer:remarkserror'),
              }),
            ]}"
          ></lion-input>
          <fe-footer
            primary=${localize.msg('fe-fund-transfer:continue')}
            secondary=${localize.msg('fe-fund-transfer:cancel')}
            @primary-btn-click=${() => this.triggerSubmit()}
          >
          </fe-footer>
        </form>
      </lion-form>
    `;
  }
}
