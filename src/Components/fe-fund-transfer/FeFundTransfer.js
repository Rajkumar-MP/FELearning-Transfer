import { ScopedElementsMixin, LitElement, css, html } from '@lion/core';
import { LionButton } from '@lion/button';
import { LionForm } from '@lion/form';
import { LionInput } from '@lion/input';
import { LionSelect } from '@lion/select';
import { localize, LocalizeMixin } from '@lion/localize';
import { Required, MinLength } from '@lion/form-core';
import { FeFooter } from '../fe-footer/FeFooter.js';
import defaultStyles from '../../FeApp.style.js';

export class FeFundTransfer extends ScopedElementsMixin(
  LocalizeMixin(LitElement)
) {
  static get scopedElements() {
    return {
      'lion-button': LionButton,
      'lion-form': LionForm,
      'lion-input': LionInput,
      'lion-select': LionSelect,
      'fe-footer': FeFooter,
    };
  }

  static get localizeNamespaces() {
    return [
      { 'fe-fund-transfer': locale => import(`./translations/${locale}.js`) },
      ...super.localizeNamespaces,
    ];
  }

  static get properties() {
    return {
      accountDetails: { type: Array },
      payeeList: { type: Array },
    };
  }

  constructor() {
    super();
    this.accountDetails = [];
    this.payeeList = [];
  }

  static get styles() {
    return css`
      ${defaultStyles}
    `;
  }

  triggerSubmit() {
    const form = this.shadowRoot.querySelector(
      this.getScopedTagName('lion-form', this.scopedElements)
    );
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
      <h1>${localize.msg('fe-fund-transfer:fundtransfer')}</h1>
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
