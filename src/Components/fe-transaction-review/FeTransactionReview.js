import { LitElement, html, css } from 'lit-element';

export class FeTransactionReview extends LitElement {
  static get properties() {
    return {
      from: { type: String },
      to: { type: String },
      amount: { type: Number },
      remarks: { type: String },
    };
  }

  constructor() {
    super();
    this.from = '0123456789';
    this.to = '987456321';
    this.amount = 50000;
    this.remarks = 'Fund Transfer';
  }

  static get styles() {
    return css`
      :host {
        height: 15vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: 25px;
        color: #000;

        width: 100%;
        margin: 0 auto;
        text-align: center;
      }
      div {
        width: 30%;
        text-align: left;
        background-color: rgb(255, 255, 255);
        border: 2px solid #e13d2c;
        border-radius: 5px;
      }
    `;
  }

  render() {
    return html`
      <div>
      <h3>Transaction Details</h4>
      <h4 id="1">From:  ${this.from}</h4>
      <h4 id="2">To:  ${this.to}</h4>
      <h4 id="3">Amount:  ${this.amount}</h4>
      <h4 id="4">Remarks: ${this.remarks}</h4>
      </div>
      
  
    `;
  }
}
