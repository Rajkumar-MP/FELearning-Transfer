import { ScopedElementsMixin, LitElement, css, html } from '@lion/core';
import { localize, LocalizeMixin } from '@lion/localize';
import { Required } from '@lion/form-core';
import { LionButton } from '@lion/button';
import { LionForm } from '@lion/form';
import { LionInput } from '@lion/input';
import defaultStyles from '../../FeApp.style.js';

export class FeNewPayee extends ScopedElementsMixin(LocalizeMixin(LitElement)) {
  static get scopedElements() {
    return {
      'lion-button': LionButton,
      'lion-form': LionForm,
      'lion-input': LionInput,
      
    };
  }

  static get localizeNamespaces() {
    return [
      {
        'fe-new-payee': locale => import(`./translations/${locale}.js`),
      },
      ...super.localizeNamespaces,
    ];
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
      new CustomEvent('input-validation', { detail: serializedValue })
    );
  }

  static get properties() {
    return {};
  }

  static get styles() {
    return css`
      ${defaultStyles}
      div {
        display: flex;
        justify-content: flex-end;
      }
    `;
  }

  render() {
    return html`
      <h2>${localize.msg('fe-new-payee:label')}</h2>
      <lion-form @submit=${this.submitForm}>
        <form>
          <lion-input
            class="form--input--field"
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
            class="form--input--field"
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
            class="form--input--field"
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
            class="form--input--field"
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
