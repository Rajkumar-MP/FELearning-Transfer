import { until, ScopedElementsMixin, LitElement, css, html } from '@lion/core';

import { localize, LocalizeMixin } from '@lion/localize';
import { FeFooter } from '../../Components/fe-footer/FeFooter.js';
import { FeServices } from '../../FeServices.js';
import { FeCard } from '../../Components/fe-card/FeCard.js';
import { FeNotification } from '../../Components/fe-notification/FeNotification.js';

export class AccountdetailsPage extends ScopedElementsMixin(
  LocalizeMixin(LitElement)
) {
  static get scopedElements() {
    return {
      'fe-footer': FeFooter,
      'fe-card': FeCard,
      'fe-notification': FeNotification,
    };
  }

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
      data: { type: Array },
    };
  }

  constructor() {
    super();
    this.data = [];
    this.isError = false;
    this.loginid = '';
  }

  firstUpdated() {
    super.firstUpdated();

    this.getAccountDetaildInformation();
  }

  async getAccountDetaildInformation() {
    this.isError = false;
    try {
      const data = await FeServices.getRequest({
        url: `/accountinfo/${this.loginid}`,
      });

      this.data = data.accountDetails;
    } catch (error) {
      this.isError = true;
      this.requestUpdate();
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
    <fieldset id="footer"><legend>${localize.msg(
      'account-details-page:transferfunds'
    )}:</legend><fe-footer secondary="${localize.msg(
      'account-details-page:addnew'
    )}" primary="${localize.msg('account-details-page:transferfunds')}" 
    class="button"><fe-footer></fieldset> `;
  }
}

window.customElements.define('account-details-page', AccountdetailsPage);
