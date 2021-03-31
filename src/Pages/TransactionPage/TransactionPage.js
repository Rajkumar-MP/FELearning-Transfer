import { ScopedElementsMixin, LitElement, css, html } from '@lion/core';
import '@lion/steps/define';
import { LionStep, LionSteps } from '@lion/steps';
import { FeServices } from '../../FeServices.js';
import { FeNotification } from '../../Components/fe-notification/FeNotification.js';
import { FeFundTransfer } from '../../Components/fe-fund-transfer/FeFundTransfer.js';
import { FeTransactionReview } from '../../Components/fe-transaction-review/FeTransactionReview.js';
import { FeSuccess } from '../../Components/fe-success/FeSuccess.js';
import { FeOtp } from '../../Components/fe-otp/FeOtp.js';
import defaultStyles from '../../FeApp.style.js';

export class TransactionPage extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      'lion-steps': LionSteps,
      'lion-step': LionStep,
      'fe-notification': FeNotification,
      'fe-fund-transfer': FeFundTransfer,
      'fe-transaction-review': FeTransactionReview,
      'fe-success': FeSuccess,
      'fe-otp': FeOtp,
    };
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
