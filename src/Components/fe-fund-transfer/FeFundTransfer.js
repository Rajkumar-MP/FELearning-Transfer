import { LitElement, html, css } from 'lit-element';
import '@lion/form/lion-form';
import '@lion/input/lion-input';
import '@lion/button/lion-button';
import '@lion/select/lion-select';
import '../fe-footer/fe-footer.js';
import { localize, LocalizeMixin } from '@lion/localize';
import { Required, MinLength } from '@lion/form-core';

export class FeFundTransfer extends LocalizeMixin(LitElement) {
  static get localizeNamespaces() {
    return [
      { 'fe-fund-transfer': locale => import(`./translations/${locale}.js`) },
      ...super.localizeNamespaces,
    ];
  }

  firstUpdated() {
    super.firstUpdated();
    localize.locale = 'nl-NL';
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
      .accountinp {
        margin: 5px;
        width: 50%;
        display: block;
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

    const fundData = serializedValue;
    this.dispatchEvent(
      new CustomEvent('fund-validation', { detail: fundData })
    );
  }

  render() {
    return html`
      <h2>Fund Transfer</h2>
      <lion-form @submit=${this.submitForm}>
        <form>
          <lion-select
            name="fromaccount"
            label="${localize.msg('fe-fund-transfer:fromaccount')}"
            class="accountinp"
            id="fromaccount"
            .validators="${[
              new Required(null, {
                getMessage: () =>
                  html`<p style="color:#830F07; font-size:20px;">
                    ${localize.msg('fe-fund-transfer:accounttypeerror')}
                  </p>`,
              }),
            ]}"
          >
            <select slot="input">
              <option selected hidden value>Please select</option>
              <option value="savings">Savings</option>
              <option value="current">Current</option>
            </select>
          </lion-select>

          <lion-select
            name="toaccount"
            label="${localize.msg('fe-fund-transfer:toaccount')}"
            class="accountinp"
            id="toaccount"
            .validators="${[
              new Required(null, {
                getMessage: () =>
                  html`<p style="color:#830F07; font-size:20px;">
                    ${localize.msg('fe-fund-transfer:accounttypeerror')}
                  </p>`,
              }),
            ]}"
          >
            <select slot="input">
              <option selected hidden value>Please select</option>
              <option value="savings">Savings</option>
              <option value="current">Current</option>
            </select>
          </lion-select>
          <lion-input
            name="amount"
            id="amount"
            label="${localize.msg('fe-fund-transfer:amount')}"
            class="accountinp"
            .validators="${[
              new Required(null, {
                getMessage: () =>
                  html`<p style="color:#830F07; font-size:20px;">
                    ${localize.msg('fe-fund-transfer:amounterror')}
                  </p>`,
              }),
            ]}"
          ></lion-input>

          <lion-input
            name="remarks"
            id="remarks"
            label="${localize.msg('fe-fund-transfer:remarks')}"
            class="accountinp"
            .validators="${[
              new Required(null, {
                getMessage: () =>
                  html`<p style="color:#830F07; font-size:20px;">
                    ${localize.msg('fe-fund-transfer:amounterror')}
                  </p>`,
              }),
              new MinLength(8, {
                getMessage: () =>
                  html`<p style="color:#830F07; font-size:20px;">
                    ${localize.msg('fe-fund-transfer:remarkserror')}
                  </p>`,
              }),
            ]}"
          ></lion-input>
          <fe-footer
            primary=${localize.msg('fe-fund-transfer:continue')}
            secondary=${localize.msg('fe-fund-transfer:cancel')}
            class="accountinp"
            @primary-btn-click=${() => this.triggerSubmit()}
          >
          </fe-footer>
        </form>
      </lion-form>
    `;
  }
}
