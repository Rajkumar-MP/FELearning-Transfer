import { html } from 'lit-html';
import '../fe-fund-transfer.js';

export default {
  title: 'Component',
  component: 'fe-fund-transfer',
};

function Template({ accountDetails, payeeList }) {
  return html`
    <fe-fund-transfer
      @fund-validation=${ev => console.log(ev.detail)}
      .accountDetails=${accountDetails}
      .payeeList=${payeeList}
    >
    </fe-fund-transfer>
  `;
}

export const FeFundTransfer = Template.bind({});
FeFundTransfer.args = {
  accountDetails: [
    {
      type: 'SAVING',
      number: '9876543210',
      balance: '25000',
    },
    {
      type: 'CURRENT',
      number: '887766554422',
      balance: '33000',
    },
  ],
  payeeList: [
    {
      nickName: 'Payee Citi',
      accountHolderName: 'Indran',
      accountNo: '3124584322',
      ifsc: 'CITI002355',
    },
    {
      nickName: 'Payee Axis',
      accountHolderName: 'Mahesh',
      accountNo: '9125875663221',
      ifsc: 'AXIS008752',
    },
  ],
};
