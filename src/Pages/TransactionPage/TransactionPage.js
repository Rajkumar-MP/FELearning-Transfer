import { html, css, LitElement } from 'lit-element';
import defaultStyles from '../../FeApp.style.js';
import '@lion/steps/define';
import { FeServices } from '../../FeServices.js';
import '../../Components/fe-notification/fe-notification.js';

export class TransactionPage extends LitElement {
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
    this.loginid = '';
    this.isError = false;
  }

  firstUpdated() {
    super.firstUpdated();
    this.getAccountDetails();
  }

  async getAccountDetails() {
    this.isError = false;
    try {
      const data = await FeServices.getRequest({
        url: `/accountinfo/${this.loginid}`,
      });
      const accountInformation = this.shadowRoot.querySelector(
        'fe-fund-transfer'
      );
      accountInformation.accountDetails = data.accountDetails;
      accountInformation.payeeList = data.payeeList;
    } catch (error) {
      this.isError = true;
      this.requestUpdate();
    }
  }

  fetchDetails(ev, detail) {
    const fundtransferdetails = this.shadowRoot.querySelector(
      'fe-transaction-review'
    );
    fundtransferdetails.from = detail.fromaccount;
    fundtransferdetails.to = detail.toaccount;
    fundtransferdetails.amount = detail.amount;
    fundtransferdetails.remarks = detail.remarks;
    ev.target.parentElement.controller.next();
  }

  render() {
    return html`
      <fe-notification
        type="info"
        label="Loading details...Please wait"
        class="${this.isError ? '' : 'hidden'}"
      ></fe-notification>
      <lion-steps>
        <lion-step initial-step>
          <fe-fund-transfer
            @fund-validation=${ev => this.fetchDetails(ev, ev.detail)}
          ></fe-fund-transfer>
        </lion-step>

        <lion-step>
          <fe-transaction-review
            @review-complete=${ev => ev.target.parentElement.controller.next()}
            @previous=${ev => ev.target.parentElement.controller.previous()}
          ></fe-transaction-review>
        </lion-step>

        <lion-step>
          <fe-otp
            @complete=${ev => ev.target.parentElement.controller.next()}
          ></fe-otp>
        </lion-step>

        <lion-step>
          <fe-success></fe-success>
        </lion-step>
      </lion-steps>
    `;
  }
}
window.customElements.define('transaction-page', TransactionPage);
