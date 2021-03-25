import { LitElement, html, css } from 'lit-element';
import { nothing } from 'lit-html';
import { localize, LocalizeMixin } from '@lion/localize';
import defaultStyles from '../../FeApp.style.js';

export class FeTransactionReview extends LocalizeMixin(LitElement) {
  static get localizeNamespaces() {
    return [
      {
        'fe-transaction-review': locale =>
          import(`./translations/${locale}.js`),
      },
      ...super.localizeNamespaces,
    ];
  }

  static get properties() {
    return {
      from: { type: String },
      to: { type: String },
      amount: { type: Number },
      remarks: { type: String },
    };
  }

  static get styles() {
    return css`
      ${defaultStyles}
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
        width: 100%;
        text-align: left;
        border-radius: 5px;
      }
    `;
  }

  render() {
    return html`
      <h1>${localize.msg('fe-transaction-review:label')}</h1>
      <div>
        ${this.from
          ? html` <p id="from">
              <b>${localize.msg('fe-transaction-review:from')}:</b>${this.from}
            </p>`
          : nothing}
        ${this.to
          ? html` <p id="to">
              <b>${localize.msg('fe-transaction-review:to')}:</b>${this.to}
            </p>`
          : nothing}
        ${this.amount
          ? html` <p id="amount">
              <b>${localize.msg('fe-transaction-review:amount')}:</b>${this
                .amount}
            </p>`
          : nothing}
        ${this.remarks
          ? html` <p id="remarks">
              <b>${localize.msg('fe-transaction-review:remarks')}:</b>${this
                .remarks}
            </p>`
          : nothing}

        <fe-footer
          primary=${localize.msg('fe-transaction-review:proceed')}
          secondary=${localize.msg('fe-transaction-review:edit')}
          }
        >
        </fe-footer>
      </div>
    `;
  }
}
