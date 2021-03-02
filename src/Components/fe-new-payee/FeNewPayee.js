import { LitElement, html, css } from 'lit-element';
import { localize, LocalizeMixin } from '@lion/localize';

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

  firstUpdated() {
    super.firstUpdated();
    localize.locale = 'nl-NL';
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
      <lion-form>
        <form>
          <lion-input
            name="nickname"
            id="nickname"
            label="${localize.msg('fe-new-payee:nickname')}"
          ></lion-input>

          <lion-input
            name="accountholdername"
            id="accountholdername"
            label="${localize.msg('fe-new-payee:accountholdername')}"
          ></lion-input>

          <lion-input
            name="accountnumber"
            id="accountnumber"
            type="number"
            label="${localize.msg('fe-new-payee:accountnumber')}"
          ></lion-input>

          <lion-input
            name="ifsc"
            id="ifsc"
            label="${localize.msg('fe-new-payee:ifsc')}"
          ></lion-input>

          <fe-footer
            .primary=${localize.msg('fe-new-payee:addpayee')}
            .secondary=${localize.msg('fe-new-payee:cancel')}
          ></fe-footer>
        </form>
      </lion-form>
    `;
  }
}
