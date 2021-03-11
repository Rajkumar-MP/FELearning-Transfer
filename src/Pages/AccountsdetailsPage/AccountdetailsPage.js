import { until } from '@lion/core';
import { html, css, LitElement } from 'lit-element';
import { localize, LocalizeMixin } from '@lion/localize';
import { FeServices } from '../../FeServices.js';

export class AccountdetailsPage extends LocalizeMixin(LitElement) {
  static get localizeNamespaces() {
    return [
      {
        'account-details-page': locale => import(`./translations/${locale}.js`),
      },
      ...super.localizeNamespaces,
    ];
  }

  static get styles() {
    return css`
      .cards {
        display: flex;
        margin-top: 10px;

        justify-content: center;
      }
      .footer {
        justify-content: center;
        margin-top: 20px;
      }
      .button {
        margin-left: 100px;
      }
      legend {
        font-size: 18px;
      }

      .hidden {
        display: none;
      }
    `;
  }

  static get properties() {
    return {
      data: { type: Object },
    };
  }

  constructor() {
    super();
    this.data = [];
    this.isError = false;
  }

  firstUpdated() {
    super.firstUpdated();

    this.getAccountDetaildInformation();
  }

  async getAccountDetaildInformation() {
    this.isError = false;
    try {
      const data = await FeServices.getRequest({
        url: '/accountinfo/925548553975232',
      });

      this.data = data.accountDetails;
    } catch (error) {
      this.requestUpdate();
      this.isError = true;
    }
  }

  render() {
    return html`
    
    <fe-notification type="error" label="${localize.msg(
      'account-details-page:label'
    )}" class ="${this.isError ? '' : 'hidden'}"></fe-notification>
    <fieldset class="cards"><legend>${localize.msg(
      'account-details-page:accountinformation'
    )}:</legend>
    ${until(
      this.data.map(
        item =>
          html`<fe-card title=${item.type} content=${item.balance}></fe-card>`
      ),
      html`<p>Loading...</p>`
    )}
    
    
</fieldset>
    <fieldset class="footer"><legend>${localize.msg(
      'account-details-page:transferfunds'
    )}:</legend><fe-footer secondary="${localize.msg(
      'account-details-page:addnew'
    )}" primary="${localize.msg('account-details-page:transferfunds')}" 
    class="button"><fe-footer></fieldset> `;
  }
}

window.customElements.define('account-details-page', AccountdetailsPage);
