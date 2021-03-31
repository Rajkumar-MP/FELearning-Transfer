import { ScopedElementsMixin, LitElement, css, html } from '@lion/core';
import { localize, LocalizeMixin } from '@lion/localize';
import { Required, MinMaxLength } from '@lion/form-core';
import { LionButton } from '@lion/button';
import { LionForm } from '@lion/form';
import { LionInput } from '@lion/input';
import { FeServices } from '../../FeServices.js';
import defaultStyles from '../../FeApp.style.js';
import { FeFooter } from '../fe-footer/FeFooter.js';
import { FeNotification } from '../fe-notification/FeNotification.js';

export class FeOtp extends ScopedElementsMixin(LocalizeMixin(LitElement)) {
  static get scopedElements() {
    return {
      'lion-button': LionButton,
      'lion-form': LionForm,
      'lion-input': LionInput,
      'fe-footer': FeFooter,
      'fe-notification': FeNotification,
    };
  }

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
    const form = this.shadowRoot.querySelector(
      this.getScopedTagName('lion-form', this.scopedElements)
    );
    form.submit();
  }

  submitForm(ev) {
    const { hasFeedbackFor, formElements } = ev.target;
    if (hasFeedbackFor.includes('error')) {
      const firstFormElWithError = formElements.find(el =>
        el.hasFeedbackFor.includes('error')
      );
      firstFormElWithError.focus();
      firstFormElWithError.classList.add('error-handle');

      return;
    }
    this.checkOTP(ev);

    ev.target.reset();
  }

  async checkOTP(ev) {
    this.isError = false;
    try {
      const { serializedValue } = ev.target;
      await FeServices.postRequest({
        url: '/otp',
        data: {
          code: serializedValue.otpcode,
        },
      });
      this.dispatchEvent(new CustomEvent('complete', { bubbles: true }));
    } catch (error) {
      this.isError = true;
      this.requestUpdate();
    }
  }

  render() {
    return html`
    <fe-notification type="error" label="${localize.msg(
      'fe-otp:error'
    )}" class ="${this.isError ? '' : 'hidden'}"></fe-notification>
      <h1>${localize.msg('fe-otp:OTPValidation')}</h1>
      <lion-form @submit=${this.submitForm}>
        <form>
          <lion-input
            name="otpcode"
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
