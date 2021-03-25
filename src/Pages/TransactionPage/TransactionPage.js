import { html, css, LitElement } from 'lit-element';
import defaultStyles from '../../FeApp.style.js';
import '@lion/steps/define';

export class TransactionPage extends LitElement {
  static get styles() {
    return css`
      ${defaultStyles}
    `;
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
