import { html } from 'lit-html';
import '../fe-transaction-review.js';

export default {
  title: 'Component',
  component: 'fe-transaction-review',
};

function Template({ from, to, amount, remarks }) {
  return html`
    <fe-transaction-review
      .from=${from}
      .to=${to}
      .amount=${amount}
      .remarks=${remarks}
    >
    </fe-transaction-review>
  `;
}

export const Header = Template.bind({});
Header.args = {
  from: '123654789',
  to: '564789321',
  amount: 40000,
  remarks: 'Fund Transfer',
};
