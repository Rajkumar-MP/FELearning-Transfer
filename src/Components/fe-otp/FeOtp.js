import { LitElement, html, css } from 'lit-element';
import '@lion/form/lion-form';
import '@lion/input/lion-input';
import '@lion/button/lion-button';
import { localize, LocalizeMixin } from '@lion/localize';
import { Required, MinMaxLength } from '@lion/form-core';
import defaultStyles from '../../FeApp.style.js';

import { FeServices } from '../../FeServices.js';

export class FeOtp extends LocalizeMixin(LitElement) {
  static get localizeNamespaces() {
    return [
      { 'fe-otp': locale => import(`./translations/${locale}.js`) },
      ...super.localizeNamespaces,
    ];
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

    this.checkOTP(ev);
    this.dispatchEvent(
      new CustomEvent('input-validation', { detail: serializedValue })
    );
  }

  async checkOTP(ev) {
    this.isError = false;
    try {
      const { serializedValue } = ev.target;
      await FeServices.postRequest({
        url: '/otp',
        data: {
          code: serializedValue['otp-code'],
        },
      });
    } catch (error) {
      this.isError = true;
    }
  }

  render() {
    return html`
    <fe-notification type="error" label="Failed to fetched details" class ="${
      this.isError ? '' : 'hidden'
    }"></fe-notification>
      <h1>${localize.msg('fe-otp:OTPValidation')}</h1>
      <lion-form @submit=${this.submitForm}>
        <form>
          <lion-input
            name="otp-code"
            id="otp-code" autocomplete="off"
            class="form--input--field"
              label=${localize.msg('fe-otp:otpcode')}
              .validators="${[
                new Required(null, {
                  getMessage: () => localize.msg('fe-otp:otperror'),
                }),
                new MinMaxLength(
                  { min: 6, max: 6 },
                  {
                    getMessage: () => localize.msg('fe-otp:lengtherror'),
                  }
                ),
              ]}"
            ></lion-input>
            <br />
            <fe-footer
            .primary=${localize.msg('fe-otp:validate')}
            @primary-btn-click=${() => this.triggerSubmit()}
          ></fe-footer>
            <form>
            </lion-form>
            
           
            `;
  }
}
