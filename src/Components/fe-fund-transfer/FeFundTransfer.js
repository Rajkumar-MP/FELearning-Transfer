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
    if (form.hasFeedbackFor.includes('error')) {
      const firstFormElWithError = form.formElements.find(el =>
        el.hasFeedbackFor.includes('error')
      );
      firstFormElWithError.focus();
      return;
    }
    const formData = form.serializedValue;
    this.dispatchEvent(
      new CustomEvent('fund-validation', { detail: formData })
    );
  }

  render() {
    return html`
      <h2>Fund Transfer</h2>
      <lion-form>
        <lion-select
          name="From Account"
          label="${localize.msg('fe-fund-transfer:fromaccount')}"
          class="accountinp"
          .validators="${[
            new Required(null, {
              getMessage: () =>
                localize.msg('fe-fund-transfer:accounttypeerror'),
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
          name="To Account"
          label="${localize.msg('fe-fund-transfer:toaccount')}"
          class="accountinp"
          .validators="${[
            new Required(null, {
              getMessage: () =>
                localize.msg('fe-fund-transfer:accounttypeerror'),
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
          type="number"
          .validators="${[
            new Required(null, {
              getMessage: () => localize.msg('fe-fund-transfer:amounterror'),
            }),
          ]}"
        ></lion-input>

        <lion-input
          name="remarks"
          id="remarks"
          label="Remarks"
          class="accountinp"
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
          class="accountinp"
          @primary-btn-click=${() => this.triggerSubmit()}
        >
        </fe-footer>
      </lion-form>
    `;
  }
}
