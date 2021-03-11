import { until } from '@lion/core';
import { html, css, LitElement } from 'lit-element';
import { FeServices } from '../../FeServices.js';

export class AccountdetailsPage extends LitElement {
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
      this.isError = true;
    }
  }

  render() {
    return html`
    
    <fe-notification type="error" label="Failed to fetched details" class ="${
      this.isError ? '' : 'hidden'
    }"></fe-notification>
    <fieldset class="cards"><legend>Account Information:</legend>
    ${until(
      this.data.map(
        item =>
          html`<fe-card title=${item.type} content=${item.balance}></fe-card>`
      ),
      html`<p>Loading...</p>`
    )}
    
    
</fieldset>
    <fieldset class="footer"><legend>Transfer Funds:</legend><fe-footer secondary="Add New Payee" primary="Transfer Fund" 
    class="button"><fe-footer></fieldset> `;
  }
}

window.customElements.define('account-details-page', AccountdetailsPage);
