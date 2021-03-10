import { html, css, LitElement } from 'lit-element';
import { FeServices } from '../../FeServices.js';

export class AccountdetailsPage extends LitElement {
  static get styles() {
    return css`
      .cards {
        display: flex;
        margin-top: 100px;

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
  }

  async firstUpdated() {
    const data = await FeServices.getRequest({
      url: '/accountinfo/925548553975232',
    });

    console.log('requested data', data);
    return data;
    // for(var i=0;i< data.accountDetails.length;i++){
    // this.accounttype=data.accountDetails[i].type;
    // this.balance=data.accountDetails[i].balance;

    //    console.log('acctype',data.accountDetails[i].type);
    //    console.log('acctbal:',data.accountDetails[i].balance);

    // this.accounttype=data.accountDetails[0].type;
    // this.balance=data.accountDetails[0].balance;
    // this.accounttype2=data.accountDetails[1].type;
    // this.balance2=data.accountDetails[1].balance;
    // console.log('Account details data:',data);
  }

  render() {
    return html`<fe-header></fe-header>
    <fieldset class="cards"><legend>Account Information:</legend>
    ${this.data.map(
      item =>
        html`<fe-card
          title=${item.accountDetails.type}
          content=${item.accountDetails.balance}
        ></fe-card>`
    )}

</fieldset>
    <fieldset class="footer"><legend>Transfer Funds:</legend><fe-footer secondary="Add New Payee" primary="Transfer Fund" 
    class="button"><fe-footer></fieldset> `;
  }
}

window.customElements.define('account-details-page', AccountdetailsPage);
